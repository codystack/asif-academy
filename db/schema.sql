-- Asif Academy database schema. Safe to re-run: every statement is idempotent.

CREATE TABLE IF NOT EXISTS orders (
  session_id text PRIMARY KEY,
  course_id text NOT NULL,
  title text NOT NULL,
  price numeric(10, 2) NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'cancelled')),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  ip text NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS abandoned_carts (
  session_id text PRIMARY KEY,
  course_id text NOT NULL,
  title text NOT NULL,
  price numeric(10, 2) NOT NULL DEFAULT 0,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS traffic (
  id bigserial PRIMARY KEY,
  page text NOT NULL,
  path text NOT NULL DEFAULT '',
  "timestamp" timestamp NOT NULL DEFAULT now(),
  ip text NOT NULL DEFAULT '',
  user_agent text NOT NULL DEFAULT ''
);

CREATE INDEX IF NOT EXISTS traffic_page_idx ON traffic (page);

CREATE TABLE IF NOT EXISTS messages (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL DEFAULT '',
  message text NOT NULL,
  created_at timestamp NOT NULL DEFAULT now()
);

-- One registration per Stripe payment.
CREATE TABLE IF NOT EXISTS registrations (
  session_id text PRIMARY KEY,
  programme_id text NOT NULL,
  programme_name text NOT NULL,
  amount_paid numeric(10, 2) NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  experience text NOT NULL,
  goals text NOT NULL DEFAULT '',
  created_at timestamp NOT NULL DEFAULT now()
);

-- Upgrades tables created before the form split the name and dropped the emergency contact, machine and heard-about questions.
ALTER TABLE registrations ADD COLUMN IF NOT EXISTS first_name text NOT NULL DEFAULT '';
ALTER TABLE registrations ADD COLUMN IF NOT EXISTS last_name text NOT NULL DEFAULT '';
ALTER TABLE registrations DROP COLUMN IF EXISTS name, DROP COLUMN IF EXISTS emergency_name, DROP COLUMN IF EXISTS emergency_phone,
  DROP COLUMN IF EXISTS has_machine,
  DROP COLUMN IF EXISTS heard_about;
