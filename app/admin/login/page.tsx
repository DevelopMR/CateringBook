import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="grid gap-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm sm:grid-cols-[1.1fr_0.9fr] sm:p-10">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            Admin
          </p>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Sign in to manage catering requests
            </h1>
            <p className="text-base leading-7 text-[var(--muted)] sm:text-lg">
              This login is for the business owner only. Customer booking pages remain
              public and do not require an account.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--accent-soft)] p-5 text-sm leading-6 text-[var(--foreground)]">
            Step 2 only adds the login screen. Authentication is not connected yet, so
            this form is intentionally non-functional until the next step.
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white/70 p-6">
          <form className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">
                Admin email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="owner@example.com"
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-base outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-[var(--foreground)]"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-base outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white opacity-70"
            >
              Sign In
            </button>
          </form>

          <div className="mt-5 border-t border-[var(--border)] pt-5 text-sm text-[var(--muted)]">
            <p>Authentication wiring will be added in the next step.</p>
            <Link href="/" className="mt-3 inline-flex text-[var(--accent)] hover:underline">
              Return to public site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
