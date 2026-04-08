import { PlaceholderPage } from "@/components/placeholder-page";
import { requireAdminUser } from "@/lib/supabase/require-admin-user";

export default async function AdminDashboardPage() {
  await requireAdminUser();

  return (
    <PlaceholderPage
      eyebrow="Admin"
      title="Bookings dashboard"
      description="This placeholder route will become the main admin view for pending and upcoming catering requests."
      actions={[
        { href: "/admin/availability", label: "Availability" },
        { href: "/admin/blocked-dates", label: "Blocked dates" },
      ]}
    />
  );
}
