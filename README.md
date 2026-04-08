# CateringBook

Production-oriented MVP booking request app for a local lunch catering business.

## Current Status
- Phase 1 complete: app scaffold, placeholder routes, shared layout
- Phase 2 implemented and locally verified: Supabase CLI setup, schema migrations, seed data, and setup workflow
- Phase 3 Step 1 added: Supabase auth plumbing for browser, server, admin, and middleware session handling
- Phase 3 Step 2 added: real `/admin/login` page UI, still non-functional until sign-in wiring is added

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## Required Environment Variables
Copy `.env.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_ACCESS_TOKEN=
SUPABASE_PROJECT_ID=
APP_BASE_URL=http://localhost:3000
EMAIL_PROVIDER_API_KEY=
```

Notes:
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` are used by the app.
- `SUPABASE_ACCESS_TOKEN` and `SUPABASE_PROJECT_ID` are used by the Supabase CLI when linking and pushing to a hosted project.

## Phase 3 Auth Plumbing
Step 1 of Phase 3 adds the foundational Supabase auth wiring without protecting routes yet.

Current auth plumbing files:
- `lib/supabase/browser.ts`
- `lib/supabase/server.ts`
- `lib/supabase/admin.ts`
- `lib/supabase/middleware.ts`
- `proxy.ts`

What this step does:
- creates a browser Supabase client for future login UI
- creates a request-aware server client for future authenticated server reads
- keeps a separate admin/service-role client for secure backend operations
- refreshes auth cookies in the Next.js request proxy so sessions are available consistently

What this step does not do yet:
- no login form
- no logout flow
- no admin route protection
- no redirect behavior

## Phase 3 Login UI
Step 2 replaces the `/admin/login` placeholder with the real admin sign-in screen layout.

What this step does:
- adds email and password fields
- adds business-owner-only messaging
- gives the route a realistic admin login presentation for testing and review

What this step still does not do:
- no actual sign-in submission yet
- no session creation yet
- no protected-route redirects yet

## Supabase CLI Workflow
The repo uses a lightweight in-repo Supabase workflow:
- `supabase/config.toml`
- `supabase/migrations/*.sql`
- `supabase/seed.sql`

### Install project dependencies
```bash
npm install
```

### Start local Supabase services
Requires Docker Desktop or another supported Docker runtime.

```bash
npm run supabase:start
```

### Apply migrations and seed locally
```bash
npm run db:reset
```

This recreates the local database, applies the migrations in `supabase/migrations`, and loads `supabase/seed.sql`.

### Check local Supabase status
```bash
npm run supabase:status
```

### Stop local Supabase services
```bash
npm run supabase:stop
```

## Applying Migrations To Hosted Supabase
1. Create your Supabase project in the dashboard.
2. Log in with the CLI:

```bash
npx supabase login
```

3. Link this repo to the hosted project:

```bash
npx supabase link --project-ref YOUR_PROJECT_ID
```

4. Push the migrations:

```bash
npm run db:push
```

If you need starter data in the hosted database, run the seed file using the SQL editor or reset a linked local environment first and then promote the migrated schema.

## Database Admin Guide
This project uses Supabase CLI migrations as the source of truth for schema changes. Avoid making schema-only changes in the dashboard without capturing them back into the repo.

### Core admin files
- [supabase/config.toml](C:/Dev/CateringBook/supabase/config.toml)
- [supabase/migrations/20260407075449_create_core_schema.sql](C:/Dev/CateringBook/supabase/migrations/20260407075449_create_core_schema.sql)
- [supabase/migrations/20260407075450_add_core_indexes.sql](C:/Dev/CateringBook/supabase/migrations/20260407075450_add_core_indexes.sql)
- [supabase/seed.sql](C:/Dev/CateringBook/supabase/seed.sql)

### Local database admin tasks
Start local services:

```bash
npm run supabase:start
```

Check service health:

```bash
npm run supabase:status
```

Reset the local database and reload migrations and seeds:

```bash
npm run db:reset
```

Stop local services:

```bash
npm run supabase:stop
```

### Local verification checks
After `npm run db:reset`, verify:
- `customers`, `menu_packages`, `bookings`, `availability_rules`, and `blocked_dates` exist
- `menu_packages` has 3 seeded rows
- `availability_rules` has 5 weekday rows
- `blocked_dates` has 3 seeded rows

Supabase Studio local URL:
- `http://127.0.0.1:54323`

Local database connection:
- `postgresql://postgres:postgres@127.0.0.1:54322/postgres`

### Making schema changes
Create a new migration:

```bash
npm run db:new-migration YOUR_MIGRATION_NAME
```

Then:
1. Edit the generated SQL file in `supabase/migrations/`
2. Run `npm run db:reset`
3. Verify the schema and seed state locally
4. Commit the migration file to git

### Pushing schema changes to hosted Supabase
1. Log in:

```bash
npx supabase login
```

2. Link the repo to the hosted project:

```bash
npx supabase link --project-ref YOUR_PROJECT_ID
```

3. Push migrations:

```bash
npm run db:push
```

### Practical admin rules
- Treat the migration files as the canonical schema history.
- Keep seed data lightweight and focused on MVP starter records.
- Prefer new migrations over editing old committed migrations once they are shared.
- Do not put secrets in migration or seed files.
- Use the dashboard for inspection and operations, not as the only record of structural changes.

## Phase 2 Database Assets
### Core tables
- `customers`
- `menu_packages`
- `bookings`
- `availability_rules`
- `blocked_dates`

### Included indexes
- `bookings.booking_date`
- `bookings.status`
- `bookings.customer_id`
- `blocked_dates.blocked_date`

### Included seed data
- 3 starter menu packages
- Monday-Friday availability rules
- 3 blocked dates
