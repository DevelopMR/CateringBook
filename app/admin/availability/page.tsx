import { PlaceholderPage } from "@/components/placeholder-page";

export default function AdminAvailabilityPage() {
  return (
    <PlaceholderPage
      eyebrow="Admin"
      title="Availability rules"
      description="This placeholder route will later manage weekday service windows and daily booking limits."
      actions={[
        { href: "/admin", label: "Back to dashboard" },
        { href: "/admin/blocked-dates", label: "Manage blocked dates", variant: "primary" },
      ]}
    />
  );
}
