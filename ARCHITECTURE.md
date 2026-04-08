# CateringBook Architecture

## Overview
CateringBook is a lean MVP web app for a local lunch catering business. The system uses a simple public request flow and a protected admin workflow. It is designed for quick deployment, low complexity, and easy maintenance.

## Stack
- Next.js with App Router
- TypeScript
- Tailwind CSS
- Supabase for Postgres and admin auth
- Vercel for deployment

## Application Areas
### Public app
- Landing page
- Catering menu and packages page
- Booking request page
- Thank-you page after submission

### Admin app
- Admin login
- Booking dashboard
- Booking detail view
- Availability management
- Blocked date management
- Package management

### Backend and services
- Secure booking creation route
- Admin-only operational reads and updates
- Shared validation and availability logic
- Notification service layer prepared for future email flows

### Data layer
Planned primary tables:
- `customers`
- `menu_packages`
- `bookings`
- `availability_rules`
- `blocked_dates`

Booking statuses:
- `pending`
- `confirmed`
- `completed`
- `canceled`

## Current Implemented Baseline
Phase 1 is implemented with the following application shell:
- Base layout with header, footer, and centered content container
- Tailwind styling setup
- Environment variable template
- Placeholder public routes:
  - `/`
  - `/menu`
  - `/book`
  - `/book/thank-you`
- Placeholder admin routes:
  - `/admin/login`
  - `/admin`
  - `/admin/bookings/[id]`
  - `/admin/availability`
  - `/admin/blocked-dates`
  - `/admin/packages`

## Current Delivery Focus
The current implemented data foundation now includes:
- Supabase CLI project structure
- versioned SQL migrations in `supabase/migrations`
- starter seed data in `supabase/seed.sql`
- a minimal server-side Supabase client helper for future secure operations
- verified local database services and seeded records

The current auth foundation now also includes:
- a browser auth client
- a request-aware server auth client
- a dedicated admin/service-role client
- middleware-based session refresh support
- a real admin login page UI shell
- a live login submission flow backed by Supabase Auth
- route protection for `/admin` pages in the request proxy layer
- shared-header sign-out support for authenticated admins
- server-side admin page guards for defense-in-depth
- redirect restoration to the originally requested admin page after login

The next architectural work should focus on protecting future admin-side operations and APIs beyond page routing.

## Current Project Structure
```text
app/
  layout.tsx
  page.tsx
  menu/page.tsx
  book/page.tsx
  book/thank-you/page.tsx
  admin/login/page.tsx
  admin/page.tsx
  admin/bookings/[id]/page.tsx
  admin/availability/page.tsx
  admin/blocked-dates/page.tsx
  admin/packages/page.tsx

components/
  site-header.tsx
  site-footer.tsx
  placeholder-page.tsx

lib/
  env.ts
  utils.ts

types/
  index.ts
```

## Planned Service Boundaries
The following directories or modules should hold central business logic as the MVP grows:
- `lib/validations`
  - booking payload validation
  - reusable server and client validation helpers
- `lib/availability`
  - lead time checks
  - blocked date checks
  - daily capacity checks
  - time slot validation
- `lib/supabase`
  - server and client Supabase helpers
  - authenticated admin access helpers
- `lib/notifications`
  - booking received
  - booking confirmed
  - booking canceled

## Planned Request Flow
1. Customer opens the public site and reviews package information.
2. Customer submits a booking request form.
3. A Next.js server route validates the payload.
4. Availability logic checks lead time, blocked dates, service rules, and daily capacity.
5. The system creates or reuses a customer record.
6. The system stores the booking with status `pending`.
7. The customer sees a thank-you page that explains the request is awaiting review.
8. The admin logs in, reviews the booking, and updates its status.

## Data Model Summary
### customers
- Contact identity for repeat requesters

### menu_packages
- Public offerings used in menu display and booking selection

### bookings
- Core operational record for each catering request
- Includes contact info, service details, package link, notes, estimated total, and status

### availability_rules
- Weekday operating window and daily booking cap

### blocked_dates
- Hard stops for holidays, closures, or fully unavailable days

## Non-Goals
- Payment processing
- Customer accounts
- Recurring contracts
- Routing and kitchen planning
- Advanced staffing or back-office systems
- Anything that turns this MVP into enterprise catering software

## Architecture Principles
- Favor simple server-side flows over layered complexity.
- Keep business rules in reusable helpers instead of scattering them across pages.
- Protect admin pages and admin operations cleanly.
- Avoid exposing secrets to the frontend.
- Keep the UX trustworthy, minimal, and understandable for a small business.
