import "server-only";
import fs from "node:fs/promises";
import {
  ABANDONED_FILE,
  COURSES_FILE,
  MESSAGES_FILE,
  ORDERS_FILE,
  STUDENTS_FILE,
  TRAFFIC_FILE,
} from "./config";
import { timestamp } from "./format";

export type Course = {
  id: string;
  title: string;
  summary: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  image: string;
  highlights: string[];
};

export type OrderStatus = "pending" | "paid" | "cancelled";

export type Order = {
  session_id: string;
  course_id: string;
  title: string;
  price: number;
  status: OrderStatus;
  created_at: string;
  updated_at?: string;
  ip: string;
};

export type TrafficEntry = {
  page: string;
  path: string;
  timestamp: string;
  ip: string;
  user_agent: string;
};

export type AbandonedCart = {
  session_id: string;
  course_id: string;
  title: string;
  price: number;
  created_at?: string;
  updated_at?: string;
};

export type Message = {
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
};

export type Student = {
  name: string;
  email: string;
  password_hash: string;
  created_at: string;
};

async function loadJson<T>(file: string, fallback: T[] = []): Promise<T[]> {
  try {
    const json = JSON.parse(await fs.readFile(file, "utf8"));
    return Array.isArray(json) ? json : fallback;
  } catch {
    return fallback;
  }
}

async function saveJson(file: string, data: unknown): Promise<void> {
  await fs.writeFile(file, JSON.stringify(data, null, 4));
}

// Courses

export function getCourses() {
  return loadJson<Course>(COURSES_FILE);
}

export async function findCourse(id: string): Promise<Course | null> {
  return (await getCourses()).find((course) => String(course.id) === String(id)) ?? null;
}

export async function addCourse(course: Course) {
  const courses = await getCourses();
  courses.push(course);
  await saveJson(COURSES_FILE, courses);
}

export async function generateCourseId(title: string): Promise<string> {
  const slug =
    title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") ||
    `course-${Math.floor(Date.now() / 1000)}`;
  const existingIds = new Set((await getCourses()).map((course) => course.id));
  let candidate = slug;
  for (let counter = 1; existingIds.has(candidate); counter++) {
    candidate = `${slug}-${counter}`;
  }
  return candidate;
}

// Orders

export function getOrders() {
  return loadJson<Order>(ORDERS_FILE);
}

export async function recordOrder(order: Order) {
  const orders = await getOrders();
  orders.push(order);
  await saveJson(ORDERS_FILE, orders);
}

export async function updateOrderStatus(sessionId: string, status: OrderStatus) {
  const orders = await getOrders();
  for (const order of orders) {
    if (order.session_id === sessionId) {
      order.status = status;
      order.updated_at = timestamp();
    }
  }
  await saveJson(ORDERS_FILE, orders);
}

// Traffic

export function getTraffic() {
  return loadJson<TrafficEntry>(TRAFFIC_FILE);
}

export async function appendTraffic(entry: TrafficEntry) {
  const traffic = await getTraffic();
  traffic.push(entry);
  await saveJson(TRAFFIC_FILE, traffic);
}

export async function getTrafficCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  for (const item of await getTraffic()) {
    const page = item.page ?? "unknown";
    counts[page] = (counts[page] ?? 0) + 1;
  }
  return Object.fromEntries(Object.entries(counts).sort(([, a], [, b]) => b - a));
}

export async function getRecentTraffic(limit = 8) {
  return (await getTraffic()).reverse().slice(0, limit);
}

// Abandoned carts

export function getAbandonedCarts() {
  return loadJson<AbandonedCart>(ABANDONED_FILE);
}

export async function addAbandonedCart(cart: AbandonedCart) {
  const existing = await getAbandonedCarts();
  const item = existing.find((c) => c.session_id === cart.session_id);
  if (item) {
    Object.assign(item, cart, { updated_at: timestamp() });
  } else {
    existing.push({ ...cart, created_at: timestamp(), updated_at: timestamp() });
  }
  await saveJson(ABANDONED_FILE, existing);
}

export async function removeAbandonedCart(sessionId: string) {
  const existing = await getAbandonedCarts();
  const filtered = existing.filter((c) => c.session_id !== sessionId);
  if (filtered.length !== existing.length) {
    await saveJson(ABANDONED_FILE, filtered);
  }
}

export async function getAbandonedSummary() {
  const carts = await getAbandonedCarts();
  return {
    count: carts.length,
    total: carts.reduce((sum, cart) => sum + (Number(cart.price) || 0), 0),
  };
}

// Contact messages

export async function addMessage(message: Message) {
  const messages = await loadJson<Message>(MESSAGES_FILE);
  messages.push(message);
  await saveJson(MESSAGES_FILE, messages);
}

// Students

export async function findStudent(email: string): Promise<Student | null> {
  return (await loadJson<Student>(STUDENTS_FILE)).find((s) => s.email === email) ?? null;
}

export async function addStudent(student: Student) {
  const students = await loadJson<Student>(STUDENTS_FILE);
  students.push(student);
  await saveJson(STUDENTS_FILE, students);
}
