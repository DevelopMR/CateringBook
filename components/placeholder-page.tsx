import Link from "next/link";

type PlaceholderAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: PlaceholderAction[];
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  actions = [],
}: PlaceholderPageProps) {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm sm:p-10">
      <div className="max-w-3xl space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
          <p className="text-base leading-7 text-[var(--muted)] sm:text-lg">{description}</p>
        </div>

        {actions.length > 0 ? (
          <div className="flex flex-wrap gap-3 pt-2">
            {actions.map((action) => {
              const isPrimary = action.variant === "primary";

              return (
                <Link
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                    isPrimary
                      ? "bg-[var(--accent)] text-white hover:opacity-90"
                      : "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--accent-soft)]"
                  }`}
                >
                  {action.label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
