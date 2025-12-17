import Link from "next/link";
import { cookies } from "next/headers";

import { logoutAction } from "@/app/(auth)/actions";
import { Sidebar } from "@/components/Sidebar";
import { USER_COOKIE } from "@/lib/auth";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const name = jar.get(USER_COOKIE)?.value ?? "David Hai";
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <div className="bg-app min-h-dvh px-6 py-6">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
        <Sidebar />

        <div className="flex flex-col items-start w-full h-full gap-y-6">
          <header className="flex items-center justify-between w-full">
            <div className="text-brand text-3xl font-semibold tracking-tight">Wedding Hall</div>

            <div className="flex items-center gap-3">
              <div className="text-brand text-sm font-medium">{name}</div>
              <div className="border-primary/40 bg-primary text-primary-contrast grid size-10 place-items-center rounded-full border text-sm font-semibold">
                {initials || "DH"}
              </div>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="hover:bg-app rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-medium"
                >
                  Logout
                </button>
              </form>
            </div>
          </header>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm flex flex-col items-start w-full gap-y-6">
            <div className="flex items-center justify-between w-full">
              <div className="text-sm font-medium text-zinc-600">
                Quick links:{" "}
                <Link href="/" className="text-zinc-900 underline-offset-4 hover:underline">
                  Dashboard
                </Link>
                {" · "}
                <Link href="../(dashboard)/bookings" className="text-zinc-900 underline-offset-4 hover:underline">
                  Bookings
                </Link>
              </div>
              {/*place another item if you want*/}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
