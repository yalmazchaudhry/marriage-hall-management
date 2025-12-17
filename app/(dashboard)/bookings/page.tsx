const bookings = [
  {
    id: "BKG-1001",
    hall: "Royal Palace",
    date: "2025-12-05",
    customer: "Ayesha",
    status: "CONFIRMED",
  },
  { id: "BKG-1002", hall: "Golden Hall", date: "2025-12-07", customer: "Rahul", status: "PENDING" },
  {
    id: "BKG-1003",
    hall: "Sunset Hall",
    date: "2025-12-09",
    customer: "Fatima",
    status: "CANCELLED",
  },
] as const;

export default function BookingsPage() {
  return (
    <div>
      <div className="mb-4 text-2xl font-semibold tracking-tight">Bookings</div>

      <div className="overflow-hidden rounded-3xl border border-black/10">
        <div className="bg-app grid grid-cols-5 gap-3 border-b border-black/10 px-5 py-3 text-xs font-semibold tracking-wide text-zinc-600 uppercase">
          <div>Booking</div>
          <div>Hall</div>
          <div>Date</div>
          <div>Customer</div>
          <div>Status</div>
        </div>
        <div className="divide-y divide-black/10">
          {bookings.map((b) => (
            <div key={b.id} className="grid grid-cols-5 gap-3 bg-white px-5 py-4 text-sm">
              <div className="font-medium">{b.id}</div>
              <div className="text-zinc-700">{b.hall}</div>
              <div className="text-zinc-700">{b.date}</div>
              <div className="text-zinc-700">{b.customer}</div>
              <div>
                <StatusPill status={b.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
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

  return (
    <div className={`inline-flex rounded-lg px-3 py-1 text-xs font-semibold ${styles}`}>
      {status}
    </div>
  );
}
