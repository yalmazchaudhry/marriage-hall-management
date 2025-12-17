"use client";

import { useActionState } from "react";

import { loginAction } from "@/app/(auth)/actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    null as null | { ok: false; error: string },
  );

  return (
    <form action={formAction} className="flex w-full flex-col items-start gap-y-4">
      <div className="flex w-full flex-col items-start gap-y-1">
        <label className="text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          required
          placeholder="admin@demo.com"
          className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-y-1">
        <label className="text-sm font-medium">Password</label>
        <input
          name="password"
          type="password"
          required
          placeholder="admin123"
          className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-black/30"
        />
      </div>

      {state?.ok === false ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="bg-primary text-primary-contrast hover:bg-primary-hover w-full rounded-2xl px-4 py-3 font-medium disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
