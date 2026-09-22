"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const products = [
  { id: 1, name: "Milho Amarelo", category: "Milho", price: 35, unit: "kg", location: "Nampula", seller: "Produtor Local", icon: "🌽" },
  { id: 2, name: "Feijão Nhemba", category: "Feijão", price: 120, unit: "kg", location: "Nampula", seller: "Agro Nampula", icon: "🫘" },
  { id: 3, name: "Tomate Fresco", category: "Hortícolas", price: 80, unit: "kg", location: "Nampula", seller: "Horta Verde", icon: "🍅" },
  { id: 4, name: "Amendoim", category: "Amendoim", price: 100, unit: "kg", location: "Nampula", seller: "Cooperativa Agrícola", icon: "🥜" },
  { id: 5, name: "Mandioca", category: "Mandioca", price: 45, unit: "kg", location: "Nampula", seller: "Machamba Familiar", icon: "🥔" },
  { id: 6, name: "Arroz", category: "Arroz", price: 95, unit: "kg", location: "Nampula", seller: "Mercado Agrícola", icon: "🍚" },
  { id: 7, name: "Laranjas", category: "Frutas", price: 60, unit: "kg", location: "Nampula", seller: "Frutas do Norte", icon: "🍊" },
  { id: 8, name: "Alface", category: "Hortícolas", price: 25, unit: "un.", location: "Nampula", seller: "Horta Verde", icon: "🥬" },
];

const categories = [
  "Todos",
  "Milho",
  "Feijão",
  "Arroz",
  "Hortícolas",
  "Frutas",
  "Mandioca",
  "Amendoim",
  "Outros",
];

export default function ProdutosPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [sort, setSort] = useState("recentes");

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const text = `${p.name} ${p.category} ${p.seller}`.toLowerCase();
      return (
        text.includes(search.toLowerCase()) &&
        (category === "Todos" || p.category === category)
      );
    });

    if (sort === "menor") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "maior") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "nome") result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [search, category, sort]);

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-green-700">
            🌱 Mercado Verde
          </Link>
          <div className="flex gap-3">
            <Link href="/vender" className="rounded-lg border px-4 py-2 text-sm">
              Vender
            </Link>
            <Link href="/entrar" className="rounded-lg bg-green-600 px-4 py-2 text-sm text-white">
              Entrar
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="font-semibold text-green-600">MERCADO</p>
          <h1 className="mt-2 text-4xl font-bold">Produtos agrícolas</h1>
          <p className="mt-3 text-gray-500">
            Encontre produtos disponíveis no Mercado Verde.
          </p>

          <div className="mt-8 flex gap-3 rounded-2xl border p-3">
            <span className="flex items-center px-2">🔎</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquisar produto, categoria ou vendedor..."
              className="flex-1 outline-none"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[230px_1fr]">

          <aside className="h-fit rounded-2xl border bg-white p-5">
            <h2 className="font-bold">Categorias</h2>

            <div className="mt-4 space-y-1">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                    category === item
                      ? "bg-green-100 font-semibold text-green-700"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setSearch("");
                setCategory("Todos");
              }}
              className="mt-6 text-sm font-semibold text-green-600"
            >
              Limpar filtros
            </button>
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Produtos disponíveis
                </h2>
                <p className="text-sm text-gray-500">
                  {filtered.length} produtos encontrados
                </p>
              </div>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-lg border bg-white px-3 py-2 text-sm"
              >
                <option value="recentes">Mais recentes</option>
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
                <option value="nome">Nome</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border bg-white p-12 text-center">
                <div className="text-5xl">🔎</div>
                <h3 className="mt-4 text-xl font-bold">
                  Nenhum produto encontrado
                </h3>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <Link
                    key={p.id}
                    href={`/produtos/${p.id}`}
                    className="overflow-hidden rounded-2xl border bg-white hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-48 items-center justify-center bg-green-50 text-8xl">
                      {p.icon}
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-semibold text-green-600">
                        {p.category}
                      </p>

                      <h3 className="mt-1 text-lg font-bold">
                        {p.name}
                      </h3>

                      <p className="mt-3 text-sm text-gray-500">
                        📍 {p.location}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        👤 {p.seller}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t pt-4">
                        <p className="text-xl font-bold text-green-600">
                          {p.price} MZN
                          <span className="text-sm font-normal text-gray-500">
                            /{p.unit}
                          </span>
                        </p>

                        <span className="rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white">
                          Ver
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
