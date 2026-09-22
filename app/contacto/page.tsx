"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-green-700">
            🌱 Mercado Verde
          </Link>
          <Link href="/produtos">Produtos</Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contacte-nos</h1>
          <p className="mt-4 text-gray-500">
            Tem uma dúvida, sugestão ou precisa de ajuda?
          </p>
        </div>

        {sent ? (
          <div className="mt-10 rounded-3xl border bg-white p-10 text-center">
            <div className="text-6xl">✅</div>
            <h2 className="mt-5 text-2xl font-bold">
              Mensagem enviada
            </h2>
            <p className="mt-3 text-gray-500">
              Obrigado por contactar o Mercado Verde.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-10 rounded-3xl border bg-white p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input required placeholder="Nome" className="rounded-xl border px-4 py-3" />
              <input required type="email" placeholder="Email" className="rounded-xl border px-4 py-3" />
              <input placeholder="Telefone" className="rounded-xl border px-4 py-3 md:col-span-2" />
              <input required placeholder="Assunto" className="rounded-xl border px-4 py-3 md:col-span-2" />
              <textarea required rows={6} placeholder="Mensagem..." className="rounded-xl border px-4 py-3 md:col-span-2" />
            </div>

            <button className="mt-6 w-full rounded-xl bg-green-600 py-4 font-bold text-white">
              Enviar mensagem
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
