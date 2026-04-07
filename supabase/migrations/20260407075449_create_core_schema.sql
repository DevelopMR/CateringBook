create extension if not exists "pgcrypto";

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  company_name text,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.menu_packages (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text not null,
  base_price numeric(10, 2),
  min_guests integer,
  active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.availability_rules (
  id uuid primary key default gen_random_uuid(),
  weekday integer not null unique check (weekday between 0 and 6),
  start_time time not null,
  end_time time not null,
  max_bookings integer not null check (max_bookings > 0),
  active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.blocked_dates (
  id uuid primary key default gen_random_uuid(),
  blocked_date date not null unique,
  reason text,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete restrict,
  package_id uuid references public.menu_packages(id) on delete set null,
  booking_date date not null,
  time_slot text not null,
  guest_count integer not null check (guest_count > 0),
  service_type text not null check (service_type in ('delivery', 'pickup')),
  address_line1 text,
  address_line2 text,
  city text,
  state text,
  zip_code text,
  contact_name text not null,
  contact_email text not null,
  contact_phone text not null,
  dietary_notes text,
  event_notes text,
  estimated_total numeric(10, 2),
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'completed', 'canceled')),
  admin_notes text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);
