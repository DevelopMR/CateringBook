import { PlaceholderPage } from "@/components/placeholder-page";

export default function AdminBlockedDatesPage() {
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
