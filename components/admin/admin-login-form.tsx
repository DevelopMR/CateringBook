"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

type AdminLoginFormProps = {
  redirectTo?: string;
};

export function AdminLoginForm({ redirectTo }: AdminLoginFormProps) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const nextPath =
    redirectTo && redirectTo.startsWith("/admin") ? redirectTo : "/admin";

  async function handleSubmit(formData: FormData) {
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    setErrorMessage(null);

    if (!email || !password) {
      setErrorMessage("Enter both email and password.");
      return;
    }

    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    startTransition(() => {
      router.push(nextPath);
      router.refresh();
    });
  }

  return (
    <form
      action={handleSubmit}
      className="space-y-5"
    >
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">
          Admin email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="owner@example.com"
          autoComplete="email"
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
          autoComplete="current-password"
          className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-base outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
        />
      </div>

      {errorMessage ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}
