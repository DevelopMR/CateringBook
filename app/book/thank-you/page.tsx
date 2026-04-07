import { PlaceholderPage } from "@/components/placeholder-page";

export default function ThankYouPage() {
  return (
    <PlaceholderPage
      eyebrow="Public"
      title="Request received"
      description="This placeholder represents the post-submission confirmation page. Final messaging will make it clear the booking is pending review and not yet confirmed."
      actions={[
        { href: "/", label: "Return home" },
        { href: "/menu", label: "View menu", variant: "primary" },
      ]}
    />
  );
}
