insert into public.menu_packages (name, description, base_price, min_guests, active)
values
  (
    'Sandwich Lunch Basic',
    'Sandwiches, chips, cookies, bottled water',
    12.00,
    10,
    true
  ),
  (
    'Executive Boxed Lunch',
    'Premium boxed lunch with side and dessert',
    16.00,
    8,
    true
  ),
  (
    'Salad and Wrap Buffet',
    'Mixed wraps, salads, fruit, drinks',
    18.00,
    15,
    true
  )
on conflict (name) do update
set
  description = excluded.description,
  base_price = excluded.base_price,
  min_guests = excluded.min_guests,
  active = excluded.active;

insert into public.availability_rules (weekday, start_time, end_time, max_bookings, active)
values
  (1, '10:30', '14:00', 4, true),
  (2, '10:30', '14:00', 4, true),
  (3, '10:30', '14:00', 4, true),
  (4, '10:30', '14:00', 4, true),
  (5, '10:30', '14:00', 4, true)
on conflict (weekday) do update
set
  start_time = excluded.start_time,
  end_time = excluded.end_time,
  max_bookings = excluded.max_bookings,
  active = excluded.active;

insert into public.blocked_dates (blocked_date, reason)
values
  ('2026-07-03', 'Independence Day holiday closure'),
  ('2026-11-26', 'Thanksgiving Day closure'),
  ('2026-12-25', 'Christmas Day closure')
on conflict (blocked_date) do nothing;
