import { PlaceholderPage } from "@/components/placeholder-page";

export default function AdminPackagesPage() {
  return (
    <PlaceholderPage
      eyebrow="Admin"
      title="Menu packages"
      description="This placeholder route will later allow the owner to create, update, and deactivate catering packages."
      actions={[
        { href: "/menu", label: "View public menu" },
        { href: "/admin", label: "Back to dashboard", variant: "primary" },
      ]}
    />
  );
}
