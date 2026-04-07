import { PlaceholderPage } from "@/components/placeholder-page";

export default function HomePage() {
  return (
    <PlaceholderPage
      eyebrow="Public"
      title="Lunch catering made easier to book"
      description="This Phase 1 placeholder will become the public landing page for CateringBook. Customers will be able to learn about service, review packages, and submit a booking request."
      actions={[
        { href: "/menu", label: "View menu" },
        { href: "/book", label: "Start booking request", variant: "primary" },
      ]}
    />
  );
}
