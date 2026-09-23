"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
};

export default function VenderPage() {
  const router = useRouter();
  const supabase = createClient();

  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("kg");
  const [quantity, setQuantity] = useState("");
  const [province, setProvince] = useState("Nampula");
  const [district, setDistrict] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function loadCategories() {
      const { data, error } = await supabase
        .from("categories")
        .select("id, name, slug, icon")
        .order("name");

      if (error) {
        setErrorMessage("Não foi possível carregar as categorias.");
      } else {
        setCategories(data ?? []);
        if (data?.length) {
          setCategoryId(data[0].id);
        }
      }

      setLoadingCategories(false);
    }

    loadCategories();
  }, [supabase]);

  function createSlug(value: string) {
    return (
      value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") +
      "-" +
      Date.now()
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      setErrorMessage(
        "Precisa de iniciar sessão antes de publicar um produto."
      );
      return;
    }

    if (!categoryId) {
      setLoading(false);
      setErrorMessage("Selecione uma categoria.");
      return;
    }

    const numericPrice = Number(price);
    const numericQuantity = Number(quantity);

    if (!Number.isFinite(numericPrice) || numericPrice < 0) {
      setLoading(false);
      setErrorMessage("Introduza um preço válido.");
      return;
    }

    if (!Number.isFinite(numericQuantity) || numericQuantity <= 0) {
      setLoading(false);
      setErrorMessage("Introduza uma quantidade válida.");
      return;
    }

    const { error } = await supabase.from("products").insert({
      seller_id: user.id,
      category_id: categoryId,
      name: name.trim(),
      slug: createSlug(name),
      description: description.trim() || null,
      price: numericPrice,
      unit,
      quantity: numericQuantity,
      province: province.trim(),
      district: district.trim() || null,
      status: "available",
    });

    if (error) {
      console.error(error);
      setErrorMessage(
        "Não foi possível publicar o produto. Verifique a sua conta e tente novamente."
      );
      setLoading(false);
      return;
    }

    router.push("/produtos?published=1");
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-green-700">
            🌱 Mercado Verde
          </Link>

          <Link
            href="/produtos"
            className="rounded-xl px-4 py-2 font-medium text-gray-700 hover:bg-gray-100"
          >
            Ver produtos
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-wide text-green-600">
            Vendedor
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Publique o seu produto
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Apresente os seus produtos agrícolas a compradores em Moçambique.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl border bg-white p-6 shadow-sm md:p-8"
        >
          {errorMessage && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-800"
              >
                Nome do produto
              </label>

              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Milho Amarelo"
                className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="text-sm font-semibold text-gray-800"
              >
                Categoria
              </label>

              <select
                id="category"
                required
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                disabled={loadingCategories}
                className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-500"
              >
                {loadingCategories ? (
                  <option>Carregando...</option>
                ) : (
                  <>
                    <option value="">Selecione uma categoria</option>

                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.icon ? `${category.icon} ` : ""}
                        {category.name}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>

            <div>
              <label
                htmlFor="price"
                className="text-sm font-semibold text-gray-800"
              >
                Preço por unidade
              </label>

              <div className="mt-2 flex">
                <input
                  id="price"
                  required
                  min="0"
                  step="0.01"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Ex: 35"
                  className="w-full rounded-l-xl border px-4 py-3 outline-none focus:border-green-500"
                />

                <span className="flex items-center rounded-r-xl border border-l-0 bg-gray-50 px-4 text-sm font-medium text-gray-600">
                  MZN
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="unit"
                className="text-sm font-semibold text-gray-800"
              >
                Unidade
              </label>

              <select
                id="unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-500"
              >
                <option value="kg">kg</option>
                <option value="unidade">Unidade</option>
                <option value="saco">Saco</option>
                <option value="caixa">Caixa</option>
                <option value="tonelada">Tonelada</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="text-sm font-semibold text-gray-800"
              >
                Quantidade disponível
              </label>

              <input
                id="quantity"
                required
                min="0.01"
                step="0.01"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Ex: 500"
                className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="province"
                className="text-sm font-semibold text-gray-800"
              >
                Província
              </label>

              <input
                id="province"
                required
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                placeholder="Ex: Nampula"
                className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="district"
                className="text-sm font-semibold text-gray-800"
              >
                Distrito
              </label>

              <input
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="Ex: Nampula"
                className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-500"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="description"
                className="text-sm font-semibold text-gray-800"
              >
                Descrição
              </label>

              <textarea
                id="description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descreva o produto, qualidade, condições de venda, etc."
                className="mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-500"
              />
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-green-50 p-4 text-sm text-green-800">
            💡 <strong>Fotografias</strong> serão adicionadas na próxima etapa
            através do armazenamento do Mercado Verde.
          </div>

          <button
            type="submit"
            disabled={loading || loadingCategories}
            className="mt-8 w-full rounded-xl bg-green-600 py-4 font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "A publicar..." : "Publicar produto"}
          </button>
        </form>
      </section>
    </main>
  );
}
