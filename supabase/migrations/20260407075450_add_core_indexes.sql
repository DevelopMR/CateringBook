create index if not exists bookings_booking_date_idx on public.bookings (booking_date);
create index if not exists bookings_status_idx on public.bookings (status);
create index if not exists bookings_customer_id_idx on public.bookings (customer_id);
create index if not exists blocked_dates_blocked_date_idx on public.blocked_dates (blocked_date);
