import { PlaceholderPage } from "@/components/placeholder-page";

export default function BookPage() {
  return (
    <PlaceholderPage
      eyebrow="Public"
      title="Booking request form"
      description="Phase 1 includes the route and layout only. In later phases this page will collect event date, time slot, guest count, package, service type, and contact details."
      actions={[
        { href: "/menu", label: "Review packages" },
        { href: "/book/thank-you", label: "View thank-you page", variant: "primary" },
      ]}
    />
  );
}
