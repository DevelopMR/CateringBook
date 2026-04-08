# CateringBook Agents Guide

## Mission
CateringBook is a production-oriented MVP for a local lunch catering business. Its purpose is to replace scattered phone, text, and email intake with a simple booking request workflow plus a small admin dashboard for review and management.

## Product Boundaries
- Build a booking request and admin confirmation system only.
- Keep the app simple, affordable, and realistic for a local business.
- Follow these source-of-truth documents first:
  - `CateringBook_Codex_Master_Prompt.txt`
  - `CateringBook_Tech_Blueprint.txt`
  - `CateringBook_Build_Order.txt`

## Do Not Build
- Online payments or Stripe
- Customer accounts or customer login
- Enterprise or multi-location features
- Complex scheduling engines
- Unnecessary abstractions or SaaS-style overreach

## Delivery Rule
- Work in phases exactly as defined in the build order.
- Complete one phase at a time.
- Verify the phase works cleanly.
- Stop for confirmation at the end of each phase before starting the next one.

## Working Agreements
- Prioritize clarity, maintainability, and practical UX over cleverness.
- Keep business logic centralized, especially validation and availability.
- Make admin and public boundaries explicit in code and documentation.
- Prefer small, readable files and straightforward component structure.
- Do not deviate from the documented scope unless explicitly instructed.

## Execution Protocol
1. Read `PROJECT_STATUS.md` to confirm the current phase and active next step.
2. Read the relevant section in `ARCHITECTURE.md` before making changes.
3. Use the three original project documents when implementation details or scope questions arise.
4. Update `PROJECT_STATUS.md` after each completed task group or phase.
5. Keep notes concise and decision-focused so the project remains easy to resume.

## Repository Conventions
- Default branch: `main`
- Commit style: short imperative messages
- Root docs are the living planning and communication source for day-to-day work
- Keep secrets out of version control and use local environment files only

## Current Phase Discipline
- Phase 1 is complete and accepted.
- Phase 2 is complete and locally verified with CLI migrations and seed data committed in-repo.
- Phase 3 is in progress.
- Step 1 auth plumbing is in place.
- Step 2 login UI is in place, but sign-in is not wired yet and admin pages are not protected yet.
- Build and verify the remaining auth slices one step at a time.
- Use the README database admin guide for local schema operations and migration workflow.
