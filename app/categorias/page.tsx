import Link from "next/link";

const categories = [
  ["🌽", "Milho", "Grãos e cereais"],
  ["🫘", "Feijão", "Leguminosas"],
  ["🍚", "Arroz", "Cereais"],
  ["🥬", "Hortícolas", "Vegetais frescos"],
  ["🍊", "Frutas", "Frutas locais"],
  ["🥔", "Mandioca", "Raízes e tubérculos"],
  ["🥜", "Amendoim", "Oleaginosas"],
  ["🌱", "Outros", "Produtos agrícolas"],
];

export default function CategoriasPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-green-700">
            🌱 Mercado Verde
          </Link>
          <Link href="/produtos" className="font-semibold">
            Produtos
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="text-center">
          <p className="font-semibold text-green-600">EXPLORE</p>
          <h1 className="mt-2 text-4xl font-bold">Categorias</h1>
          <p className="mt-4 text-gray-500">
            Explore os produtos agrícolas disponíveis.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {categories.map(([icon, name, description]) => (
            <Link
              key={name}
              href={`/produtos?categoria=${name}`}
              className="rounded-3xl border bg-white p-7 text-center hover:shadow-xl"
            >
              <div className="text-6xl">{icon}</div>
              <h2 className="mt-5 text-xl font-bold">{name}</h2>
              <p className="mt-2 text-sm text-gray-500">{description}</p>
              <p className="mt-5 font-semibold text-green-600">
                Explorar →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
