"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { DUMMY_USERS, safeUserName, SESSION_COOKIE, USER_COOKIE } from "@/lib/auth";

export async function loginAction(_: unknown, formData: FormData) {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  const match = DUMMY_USERS.find((u) => u.email.toLowerCase() === email && u.password === password);
  if (!match) {
    return { ok: false as const, error: "Invalid email or password." };
  }

  const jar = await cookies();
  jar.set(SESSION_COOKIE, "1", { httpOnly: true, sameSite: "lax", path: "/" });
  jar.set(USER_COOKIE, match.name, { httpOnly: true, sameSite: "lax", path: "/" });
  redirect("/");
}

export async function signupAction(_: unknown, formData: FormData) {
  const name = safeUserName(String(formData.get("name") ?? ""));
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { ok: false as const, error: "Email and password are required." };
  }

  // Dummy signup: we don't persist anything. We just create a session.
  const jar = await cookies();
  jar.set(SESSION_COOKIE, "1", { httpOnly: true, sameSite: "lax", path: "/" });
  jar.set(USER_COOKIE, name, { httpOnly: true, sameSite: "lax", path: "/" });
  redirect("/");
}

export async function logoutAction() {
  const jar = await cookies();
  jar.delete(SESSION_COOKIE);
  jar.delete(USER_COOKIE);
  redirect("/login");
}
