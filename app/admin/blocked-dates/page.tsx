import { PlaceholderPage } from "@/components/placeholder-page";
import { requireAdminUser } from "@/lib/supabase/require-admin-user";

export default async function AdminBlockedDatesPage() {
  await requireAdminUser();

  return (
    <PlaceholderPage
      eyebrow="Admin"
      title="Blocked dates"
      description="This placeholder route will become the admin tool for manually blocking holidays, closures, and sold-out dates."
      actions={[
        { href: "/admin", label: "Back to dashboard" },
        { href: "/admin/availability", label: "View availability", variant: "primary" },
      ]}
    />
  );
}
