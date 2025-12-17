const stats = [
  { label: "Halls", value: 5 },
  { label: "Bookings", value: 50 },
  { label: "Vendors", value: 20 },
  { label: "Employees", value: 15 },
] as const;

const upcoming = [
  { hall: "Royal Palace", date: "December 5", status: "CONFIRMED" },
  { hall: "Golden Hall", date: "December 7", status: "PENDING" },
  { hall: "Sunset Hall", date: "December 9", status: "CANCELLED" },
] as const;

export default function DashboardPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <section>
        <div className="mb-4 text-2xl font-semibold tracking-tight">Dashboard</div>

        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="text-5xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1 text-base text-zinc-600">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold tracking-tight">Hall Usage</div>
            <div className="text-base text-zinc-600">November</div>
          </div>

          <div className="mt-6 grid grid-cols-9 items-end gap-3">
            {[4, 3, 5, 6, 5, 5, 4, 3, 2].map((h, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="bg-primary w-3 rounded-full" style={{ height: `${h * 22}px` }} />
                <div className="text-[11px] text-zinc-500">{5 + idx}:00</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="text-xl font-semibold tracking-tight">Booking Status</div>
          <div className="mt-6 grid grid-cols-[140px_1fr] items-center gap-8">
            <div
              className="relative size-[140px] rounded-full"
              style={{
                background:
                  "conic-gradient(var(--color-primary) 0 45%, var(--color-primary-soft) 45% 80%, var(--color-status-cancelled) 80% 100%)",
              }}
            >
              <div className="absolute inset-5 rounded-full bg-white" />
            </div>

            <div className="space-y-3 text-base">
              <LegendRow color="var(--color-primary)" label="Pending" />
              <LegendRow color="var(--color-primary-soft)" label="Confirmed" />
              <LegendRow color="var(--color-status-cancelled)" label="Cancelled" />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="text-xl font-semibold tracking-tight">Upcoming Bookings</div>

          <div className="mt-4 divide-y divide-black/10">
            {upcoming.map((b) => (
              <div key={b.hall} className="flex items-center justify-between py-4">
                <div>
                  <div className="text-lg font-semibold tracking-tight">{b.hall}</div>
                  <div className="text-sm text-zinc-600">{b.date}</div>
                </div>
                <StatusPill status={b.status} />
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="text-lg font-semibold tracking-tight">Today&apos;s Summary</div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <SummaryItem label="Revenue" value="$21,000" />
              <SummaryItem label="Bookings" value="8" />
              <SummaryItem label="Customers" value="6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function LegendRow({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="size-3 rounded-sm" style={{ backgroundColor: color }} />
      <div className="text-brand">{label}</div>
    </div>
  );
}

function StatusPill({ status }: { status: "PENDING" | "CONFIRMED" | "CANCELLED" }) {
  const styles =
    status === "CONFIRMED"
      ? "bg-status-confirmed text-brand"
      : status === "PENDING"
        ? "bg-status-pending text-status-pending-text"
        : "bg-status-cancelled text-brand";

  return <div className={`rounded-lg px-3 py-1 text-xs font-semibold ${styles}`}>{status}</div>;
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-app rounded-2xl border border-black/10 p-4">
      <div className="text-sm font-medium text-zinc-600">{label}</div>
      <div className="mt-1 text-lg font-semibold tracking-tight">{value}</div>
    </div>
  );
}
