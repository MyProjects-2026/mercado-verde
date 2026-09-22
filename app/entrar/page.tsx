"use client";

import { useState } from "react";
import Link from "next/link";

export default function EntrarPage() {
  const [show, setShow] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50 px-6">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="mb-8 block text-center text-2xl font-bold text-green-700"
        >
          🌱 Mercado Verde
        </Link>

        <div className="rounded-3xl border bg-white p-8 shadow">
          <h1 className="text-3xl font-bold">Entrar</h1>
          <p className="mt-2 text-gray-500">
            Aceda à sua conta Mercado Verde.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-xl border px-4 py-3"
                placeholder="seuemail@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Palavra-passe
              </label>

              <div className="relative mt-2">
                <input
                  required
                  type={show ? "text" : "password"}
                  className="w-full rounded-xl border px-4 py-3 pr-20"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-3 text-sm text-green-600"
                >
                  {show ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <button
              type="button"
              className="text-sm font-semibold text-green-600"
            >
              Esqueceu a palavra-passe?
            </button>

            <button
              type="submit"
              className="w-full rounded-xl bg-green-600 py-3 font-bold text-white"
            >
              Entrar
            </button>
          </form>

          <div className="my-7 border-t" />

          <p className="text-center text-sm text-gray-500">
            Ainda não tem conta?
          </p>

          <Link
            href="/registar"
            className="mt-3 block rounded-xl border py-3 text-center font-semibold text-green-700"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </main>
  );
}
