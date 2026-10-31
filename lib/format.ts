const currency = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });

export function formatCurrency(value: number | string | undefined): string {
  return currency.format(Number(value) || 0);
}

// Stripe timestamps (Unix seconds) shown in UK time, e.g. "26 Oct 2026, 5:10 pm".
const ukDateTime = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "Europe/London",
});

export function formatUnixTime(unixSeconds: number): string {
  return ukDateTime.format(new Date(unixSeconds * 1000));
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Database timestamps ("2026-10-30 15:00:00") shown like Stripe ones, e.g. "30 Oct 2026, 3:00 pm".
// Parsed as text so the stored wall-clock time is never shifted by a timezone.
export function formatTimestamp(value: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/.exec(value);
  if (!match) return value;
  const [, year, month, day, hour, minute] = match;
  const hours = Number(hour);
  const time = `${hours % 12 || 12}:${minute} ${hours < 12 ? "am" : "pm"}`;
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}, ${time}`;
}

// Matches PHP's date('Y-m-d H:i:s'), which the JSON data files already use.
export function timestamp(date = new Date()): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return (
    `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())} ` +
    `${p(date.getHours())}:${p(date.getMinutes())}:${p(date.getSeconds())}`
  );
}
