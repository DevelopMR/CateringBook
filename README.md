# CateringBook

Production-oriented MVP booking request app for a local lunch catering business.

## Current Status
- Phase 1 complete: app scaffold, placeholder routes, shared layout
- Phase 2 implemented in-repo: Supabase CLI setup, schema migrations, seed data, and setup workflow

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
