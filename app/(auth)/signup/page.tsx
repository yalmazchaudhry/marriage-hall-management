import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { SESSION_COOKIE } from "@/lib/auth";
import { SignupForm } from "@/app/(auth)/signup/SignupForm";

export default async function SignupPage() {
  const jar = await cookies();
  if (jar.get(SESSION_COOKIE)?.value) redirect("/");

  return (
    <div className="grid min-h-dvh place-items-center px-6 py-12">
      <div className="flex w-full max-w-md flex-col items-start gap-y-6 rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <div className="flex w-full flex-col items-start gap-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Sign up</h1>
          <p className="text-sm text-zinc-600">
            Dummy signup: we won’t store anything, just log you in.
          </p>
        </div>

        <SignupForm />

        <div className="flex w-full items-center justify-between text-sm">
          <span className="text-zinc-600">Already have an account?</span>
          <Link
            href="../login"
            className="font-medium text-zinc-900 underline-offset-4 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
