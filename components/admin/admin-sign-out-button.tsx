"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export function AdminSignOutButton() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleSignOut() {
    setErrorMessage(null);

    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      setErrorMessage("Unable to sign out right now.");
      return;
    }

    startTransition(() => {
      router.push("/admin/login");
      router.refresh();
    });
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleSignOut}
        disabled={isPending}
        className="rounded-full border border-[var(--border)] px-4 py-2 text-sm transition hover:bg-[var(--accent-soft)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Signing Out..." : "Sign Out"}
      </button>
      {errorMessage ? (
        <span className="text-xs text-red-700">{errorMessage}</span>
      ) : null}
    </div>
  );
}
