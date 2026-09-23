"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function EntrarPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(
        "Email ou palavra-passe incorretos. Verifique os dados e tente novamente."
      );
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-green-50 px-6 py-12">
      <div className="mx-auto max-w-md">
        <Link
          href="/"
          className="block text-center text-2xl font-bold text-green-700"
        >
          🌱 Mercado Verde
        </Link>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold">Entrar</h1>

          <p className="mt-2 text-gray-500">
            Aceda à sua conta Mercado Verde.
          </p>

          {errorMessage && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="mt-2 w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Palavra-passe
              </label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="A sua palavra-passe"
                className="mt-2 w-full rounded-xl border px-4 py-3"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-green-600 py-4 font-bold text-white disabled:opacity-60"
            >
              {loading ? "A entrar..." : "Entrar no Mercado Verde"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Ainda não tem conta?{" "}
            <Link
              href="/registar"
              className="font-semibold text-green-700 hover:underline"
            >
              Criar conta
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
