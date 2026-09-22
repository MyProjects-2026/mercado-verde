"use client";

import { useState } from "react";
import Link from "next/link";

export default function VenderPage() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-green-50 px-6">
        <div className="max-w-md rounded-3xl bg-white p-10 text-center shadow">
          <div className="text-6xl">✅</div>
          <h1 className="mt-5 text-2xl font-bold">Produto enviado!</h1>
          <p className="mt-3 text-gray-500">
            O anúncio foi recebido para verificação.
          </p>
          <Link
            href="/produtos"
            className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white"
          >
            Ver produtos
          </Link>
        </div>
      </main>
    );
  }

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

      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="text-center">
          <p className="font-semibold text-green-600">VENDEDOR</p>
          <h1 className="mt-2 text-4xl font-bold">
            Publique o seu produto
          </h1>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-10 rounded-3xl border bg-white p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">

            <div className="md:col-span-2">
              <label className="text-sm font-semibold">
                Nome do produto
              </label>
              <input
                required
                placeholder="Ex: Milho Amarelo"
                className="mt-2 w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Categoria</label>
              <select className="mt-2 w-full rounded-xl border px-4 py-3">
                <option>Milho</option>
                <option>Feijão</option>
                <option>Arroz</option>
                <option>Hortícolas</option>
                <option>Frutas</option>
                <option>Mandioca</option>
                <option>Amendoim</option>
                <option>Outros</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">Preço</label>
              <input
                required
                type="number"
                placeholder="MZN"
                className="mt-2 w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Unidade</label>
              <select className="mt-2 w-full rounded-xl border px-4 py-3">
                <option>kg</option>
                <option>unidade</option>
                <option>saco</option>
                <option>caixa</option>
                <option>tonelada</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">Quantidade</label>
              <input
                required
                placeholder="Ex: 500 kg"
                className="mt-2 w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-semibold">
                Localização
              </label>
              <input
                required
                placeholder="Distrito / Província"
                className="mt-2 w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-semibold">
                Descrição
              </label>
              <textarea
                rows={5}
                placeholder="Descreva o produto..."
                className="mt-2 w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-semibold">
                Fotografia
              </label>
              <input
                type="file"
                accept="image/*"
                className="mt-2 w-full rounded-xl border p-3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-green-600 py-4 font-bold text-white"
          >
            Publicar produto
          </button>
        </form>
      </section>
    </main>
  );
}
