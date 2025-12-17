import Link from "next/link";
import type React from "react";

import { Icon } from "@/components/Icon";

const nav = [
  { href: "/", label: "Dashboard", icon: DashboardIcon },
  { href: "/halls", label: "Halls", icon: HallIcon },
  { href: "/bookings", label: "Bookings", icon: BookingsIcon },
  { href: "/inventory", label: "Inventory", icon: InventoryIcon },
  { href: "/employees", label: "Employees", icon: PeopleIcon },
  { href: "/vendors", label: "Vendors", icon: PeopleIcon },
  { href: "/accounts", label: "Accounts", icon: SettingsIcon },
] as const;

export function Sidebar() {
  return (
    <aside className="flex h-full flex-col gap-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="border-primary/30 bg-app grid size-10 place-items-center rounded-2xl border">
          <Icon viewBox="0 0 24 24" className="fill-primary size-6">
            <path d="M8.6 4.2a4.8 4.8 0 0 1 6.8 0l.4.4a4.8 4.8 0 0 1 0 6.8l-1.5 1.5 1.5 1.5a4.8 4.8 0 0 1 0 6.8l-.4.4a4.8 4.8 0 0 1-6.8 0L7 19.8a4.8 4.8 0 0 1 0-6.8l1.5-1.5L7 10a4.8 4.8 0 0 1 0-6.8l.4-.4ZM10 6a2.8 2.8 0 0 0-2 4.8l1.5 1.5 4.5-4.5L12.5 6.3A2.8 2.8 0 0 0 10 6Zm4.5 8.2L10 18.7l1.5 1.5a2.8 2.8 0 0 0 4-4l-1.5-1.5Z" />
          </Icon>
        </div>
        <div className="text-brand text-sm font-semibold tracking-tight">Wedding Hall</div>
      </div>

      <nav className="flex flex-col gap-1">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:bg-app flex items-center gap-3 rounded-2xl px-3 py-2 text-sm text-zinc-800"
          >
            <item.icon className="size-5 stroke-zinc-600" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <Link
          href="/settings"
          className="hover:bg-app flex items-center gap-3 rounded-2xl px-3 py-2 text-sm text-zinc-800"
        >
          <SettingsIcon className="size-5 stroke-zinc-600" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}

function DashboardIcon(props: Omit<React.ComponentProps<"svg">, "children">) {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 13.5V20h6v-6.5H4Z" />
      <path d="M14 4v7h6V4h-6Z" />
      <path d="M14 14v6h6v-6h-6Z" />
      <path d="M4 4v7h6V4H4Z" />
    </Icon>
  );
}

function HallIcon(props: Omit<React.ComponentProps<"svg">, "children">) {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 10.5 12 4l9 6.5" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </Icon>
  );
}

function BookingsIcon(props: Omit<React.ComponentProps<"svg">, "children">) {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 3v3M17 3v3" />
      <path d="M4 7h16" />
      <path d="M6 11h4M6 15h4M14 11h4M14 15h4" />
      <path d="M5 5h14a2 2 0 0 1 2 2v14H3V7a2 2 0 0 1 2-2Z" />
    </Icon>
  );
}

function InventoryIcon(props: Omit<React.ComponentProps<"svg">, "children">) {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 7h18" />
      <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      <path d="M6 7v14h12V7" />
      <path d="M9 11h6" />
    </Icon>
  );
}

function PeopleIcon(props: Omit<React.ComponentProps<"svg">, "children">) {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 11a4 4 0 1 0-8 0" />
      <path d="M4 20a8 8 0 0 1 16 0" />
      <path d="M19 8a3 3 0 0 1 0 6" />
    </Icon>
  );
}

function SettingsIcon(props: Omit<React.ComponentProps<"svg">, "children">) {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M19.4 15a7.7 7.7 0 0 0 .1-6l2-1.6-2-3.5-2.4 1a8.1 8.1 0 0 0-5.2-2l-.4-2.6H8.5L8.1 3a8.1 8.1 0 0 0-5.2 2l-2.4-1-2 3.5 2 1.6a7.7 7.7 0 0 0 .1 6l-2 1.6 2 3.5 2.4-1a8.1 8.1 0 0 0 5.2 2l.4 2.6h3.9l.4-2.6a8.1 8.1 0 0 0 5.2-2l2.4 1 2-3.5-2-1.6Z" />
    </Icon>
  );
}
