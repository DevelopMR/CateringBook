import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { AdminSignOutButton } from "@/components/admin/admin-sign-out-button";

const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/book", label: "Book" },
];

const adminLinks = [
  { href: "/admin/login", label: "Admin Login" },
  { href: "/admin", label: "Dashboard" },
];

export async function SiteHeader() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="border-b border-[var(--border)] bg-[color:rgba(255,253,248,0.92)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold tracking-tight text-[var(--accent)]">
          CateringBook
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)] sm:gap-5">
          {publicLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[var(--foreground)]">
              {link.label}
            </Link>
          ))}
          <span className="hidden text-[var(--border)] sm:inline">|</span>
          {adminLinks
            .filter((link) => (user ? link.href !== "/admin/login" : true))
            .map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[var(--foreground)]">
              {link.label}
            </Link>
            ))}
          {user ? <AdminSignOutButton /> : null}
        </nav>
      </div>
    </header>
  );
}
