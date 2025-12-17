import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { SESSION_COOKIE } from "@/lib/auth";
import { LoginForm } from "@/app/(auth)/login/LoginForm";

export default async function LoginPage() {
  const jar = await cookies();
  if (jar.get(SESSION_COOKIE)?.value) redirect("/");

  return (
    <div className="grid min-h-dvh place-items-center px-6 py-12">
      <div className="flex w-full max-w-md flex-col items-start gap-y-6 rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <div className="flex w-full flex-col items-start gap-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
          <p className="mt-1 text-sm text-zinc-600">
            Use dummy credentials to enter the dashboard.
          </p>
          <div className="bg-app mt-3 flex flex-col items-start gap-y-1 rounded-2xl p-4 text-sm text-zinc-700">
            <div className="font-medium">Dummy user</div>
            <div className="mt-1">
              Email: <span className="font-mono">admin@demo.com</span>
            </div>
            <div>
              Password: <span className="font-mono">admin123</span>
            </div>
          </div>
        </div>

        <LoginForm />

        <div className="flex w-full items-center justify-between text-sm">
          <span className="text-zinc-600">New here?</span>
          <Link
            href="../signup"
            className="font-medium text-zinc-900 underline-offset-4 hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
