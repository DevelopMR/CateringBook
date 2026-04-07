import { PlaceholderPage } from "@/components/placeholder-page";

type BookingDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminBookingDetailPage({
  params,
}: BookingDetailPageProps) {
  const { id } = await params;

  return (
    <PlaceholderPage
      eyebrow="Admin"
      title={`Booking ${id}`}
      description="This placeholder route will become the detailed booking management screen where the owner can review request details and update status."
      actions={[{ href: "/admin", label: "Back to dashboard", variant: "primary" }]}
    />
  );
}
