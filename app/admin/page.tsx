import { PlaceholderPage } from "@/components/placeholder-page";

export default function AdminDashboardPage() {
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
