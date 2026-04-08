import Link from "next/link";
import { AdminLoginForm } from "@/components/admin/admin-login-form";

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
            Step 3 connects this form to Supabase Auth. Admin route protection is still
            a separate step and will be added next.
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white/70 p-6">
          <AdminLoginForm />

          <div className="mt-5 border-t border-[var(--border)] pt-5 text-sm text-[var(--muted)]">
            <p>Login now creates an admin session, but admin pages are not locked yet.</p>
            <Link href="/" className="mt-3 inline-flex text-[var(--accent)] hover:underline">
              Return to public site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
