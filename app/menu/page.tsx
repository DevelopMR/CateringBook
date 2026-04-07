import { PlaceholderPage } from "@/components/placeholder-page";

export default function MenuPage() {
  return (
    <PlaceholderPage
      eyebrow="Public"
      title="Menu and catering packages"
      description="This placeholder page will list the business's active lunch catering packages, descriptions, minimum guest counts, and simple pricing guidance."
      actions={[
        { href: "/", label: "Back home" },
        { href: "/book", label: "Request a booking", variant: "primary" },
      ]}
    />
  );
}
