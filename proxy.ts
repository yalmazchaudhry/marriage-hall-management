import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { SESSION_COOKIE } from "@/lib/auth";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAuthRoute = pathname === "/login" || pathname === "/signup";
  const hasSession = Boolean(req.cookies.get(SESSION_COOKIE)?.value);

  // If already logged in, keep users out of auth pages.
  if (isAuthRoute && hasSession) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If not logged in, protect everything except auth pages.
  if (!isAuthRoute && !hasSession) {
    const url = new URL("/login", req.url);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
