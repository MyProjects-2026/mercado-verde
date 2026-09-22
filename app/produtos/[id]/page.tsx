import Link from "next/link";

const products: Record<string, {
  name: string;
  category: string;
  price: number;
  unit: string;
  location: string;
  seller: string;
  quantity: string;
  icon: string;
  description: string;
}> = {
  "1": {
    name: "Milho Amarelo",
    category: "Milho",
    price: 35,
    unit: "kg",
    location: "Nampula",
    seller: "Produtor Local",
    quantity: "500 kg",
    icon: "🌽",
    description: "Milho amarelo de produção local, disponível para venda.",
  },
  "2": {
    name: "Feijão Nhemba",
    category: "Feijão",
    price: 120,
    unit: "kg",
    location: "Nampula",
    seller: "Agro Nampula",
    quantity: "250 kg",
    icon: "🫘",
    description: "Feijão Nhemba selecionado para consumo e comercialização.",
  },
  "3": {
    name: "Tomate Fresco",
    category: "Hortícolas",
    price: 80,
    unit: "kg",
    location: "Nampula",
    seller: "Horta Verde",
    quantity: "100 kg",
    icon: "🍅",
    description: "Tomate fresco produzido localmente.",
  },
  "4": {
    name: "Amendoim",
    category: "Amendoim",
    price: 100,
    unit: "kg",
    location: "Nampula",
    seller: "Cooperativa Agrícola",
    quantity: "300 kg",
    icon: "🥜",
    description: "Amendoim de produção local.",
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products[id] ?? products["1"];

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-green-700">
            🌱 Mercado Verde
          </Link>
          <Link href="/produtos" className="text-sm font-semibold">
            ← Produtos
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid overflow-hidden rounded-3xl border bg-white md:grid-cols-2">

          <div className="flex min-h-[450px] items-center justify-center bg-green-50 text-[160px]">
            {product.icon}
          </div>

          <div className="p-8 md:p-12">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              ✓ Disponível
            </span>

            <p className="mt-6 text-sm font-semibold text-green-600">
              {product.category}
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              {product.name}
            </h1>

            <p className="mt-5 text-gray-600">
              {product.description}
            </p>

            <div className="mt-7 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Preço</p>
              <p className="mt-1 text-3xl font-bold text-green-600">
                {product.price} MZN
                <span className="text-base font-normal text-gray-500">
                  /{product.unit}
                </span>
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Quantidade</p>
                <p className="font-semibold">{product.quantity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Localização</p>
                <p className="font-semibold">📍 {product.location}</p>
              </div>
            </div>

            <div className="mt-7 border-t pt-6">
              <p className="text-sm text-gray-500">Vendedor</p>
              <p className="mt-1 text-lg font-bold">{product.seller}</p>
            </div>

            <button className="mt-6 w-full rounded-xl bg-green-600 py-4 font-bold text-white">
              📞 Contactar vendedor
            </button>

            <button className="mt-3 w-full rounded-xl border py-4 font-semibold">
              💬 Enviar mensagem
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
