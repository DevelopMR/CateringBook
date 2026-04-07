import { PlaceholderPage } from "@/components/placeholder-page";

export default function AdminLoginPage() {
  return (
    <PlaceholderPage
      eyebrow="Admin"
      title="Admin login"
      description="This placeholder route will become the secure Supabase Auth login page for the business owner."
      actions={[{ href: "/admin", label: "Go to admin dashboard", variant: "primary" }]}
    />
  );
}
