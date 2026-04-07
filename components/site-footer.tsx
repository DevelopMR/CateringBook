export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-[var(--muted)] sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>CateringBook MVP for a local lunch catering business.</p>
        <p>Booking request plus admin confirmation workflow.</p>
      </div>
    </footer>
  );
}
