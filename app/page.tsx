import Link from "next/link";

const categories = [
  ["🌽", "Milho"],
  ["🫘", "Feijão"],
  ["🍚", "Arroz"],
  ["🥬", "Hortícolas"],
  ["🍊", "Frutas"],
  ["🥔", "Mandioca"],
  ["🥜", "Amendoim"],
  ["🌱", "Outros"],
];

const products = [
  ["1", "Milho Amarelo", "Milho", "35 MZN/kg", "Nampula", "🌽"],
  ["2", "Feijão Nhemba", "Feijão", "120 MZN/kg", "Nampula", "🫘"],
  ["3", "Tomate Fresco", "Hortícolas", "80 MZN/kg", "Nampula", "🍅"],
  ["4", "Amendoim", "Amendoim", "100 MZN/kg", "Nampula", "🥜"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-3xl">🌱</span>
            <div>
              <h1 className="text-xl font-bold text-green-700">
                Mercado Verde
              </h1>
              <p className="text-xs text-gray-500">
                Mercado agrícola de Moçambique
              </p>
            </div>
          </Link>

          <nav className="hidden gap-7 md:flex">
            <Link href="/" className="font-semibold text-green-700">
              Início
            </Link>
            <Link href="/produtos" className="text-gray-600 hover:text-green-700">
              Produtos
            </Link>
            <Link href="/vender" className="text-gray-600 hover:text-green-700">
              Vender
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-green-700">
              Sobre nós
            </Link>
          </nav>

          <div className="flex gap-2">
            <Link href="/entrar" className="rounded-lg border px-4 py-2 text-sm">
              Entrar
            </Link>
            <Link
              href="/registar"
              className="hidden rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white sm:block"
            >
              Criar conta
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-green-700 to-emerald-500">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div className="text-white">
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
              🇲🇿 Feito para Moçambique
            </span>

            <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">
              O mercado agrícola de Moçambique
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
              Encontre produtos agrícolas e conecte-se
              diretamente com produtores e vendedores.
            </p>

            <div className="mt-8 flex max-w-2xl gap-3 rounded-2xl bg-white p-3">
              <input
                placeholder="Pesquisar milho, feijão, tomate..."
                className="min-w-0 flex-1 px-3 text-gray-800 outline-none"
              />
              <Link
                href="/produtos"
                className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white"
              >
                🔍 Pesquisar
              </Link>
            </div>
          </div>

          <div className="hidden text-center md:block">
            <div className="text-[150px]">🌾</div>
            <div className="mx-auto max-w-sm rounded-2xl bg-white p-6 text-left shadow-xl">
              <p className="text-sm text-gray-500">Produto em destaque</p>
              <h3 className="mt-2 text-2xl font-bold">Milho Amarelo</h3>
              <p className="mt-2 font-bold text-green-600">35 MZN/kg</p>
              <p className="mt-1 text-sm text-gray-500">📍 Nampula</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <p className="font-semibold text-green-600">EXPLORE</p>
          <h2 className="mt-2 text-3xl font-bold">Categorias</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map(([icon, name]) => (
            <Link
              key={name}
              href={`/produtos?categoria=${name}`}
              className="rounded-2xl border p-5 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{icon}</div>
              <p className="mt-3 font-semibold">{name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-semibold text-green-600">MERCADO</p>
              <h2 className="mt-2 text-3xl font-bold">
                Produtos disponíveis
              </h2>
            </div>
            <Link href="/produtos" className="font-semibold text-green-600">
              Ver todos →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(([id, name, category, price, location, icon]) => (
              <Link
                key={id}
                href={`/produtos/${id}`}
                className="overflow-hidden rounded-2xl border bg-white hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center bg-green-50 text-8xl">
                  {icon}
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-green-600">
                    {category}
                  </p>
                  <h3 className="mt-1 text-lg font-bold">{name}</h3>
                  <p className="mt-3 text-sm text-gray-500">
                    📍 {location}
                  </p>
                  <p className="mt-4 text-xl font-bold text-green-600">
                    {price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-green-700 p-10 text-white md:p-14">
          <h2 className="text-3xl font-bold">
            Tem produtos agrícolas para vender?
          </h2>
          <p className="mt-4 max-w-xl text-green-50">
            Publique os seus produtos e encontre compradores
            interessados.
          </p>
          <Link
            href="/vender"
            className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-bold text-green-700"
          >
            Começar a vender
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-white">🌱 Mercado Verde</h3>
            <p className="mt-3 text-sm">
              Conectando produtores e compradores em Moçambique.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">Mercado</h4>
            <div className="mt-3 space-y-2 text-sm">
              <Link href="/produtos" className="block hover:text-white">
                Produtos
              </Link>
              <Link href="/categorias" className="block hover:text-white">
                Categorias
              </Link>
              <Link href="/vender" className="block hover:text-white">
                Vender
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Informação</h4>
            <div className="mt-3 space-y-2 text-sm">
              <Link href="/sobre" className="block hover:text-white">
                Sobre nós
              </Link>
              <Link href="/contacto" className="block hover:text-white">
                Contacto
              </Link>
              <Link href="/termos" className="block hover:text-white">
                Termos
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Idioma</h4>
            <div className="mt-3 flex gap-2">
              <button className="rounded-lg bg-green-600 px-3 py-2 text-sm text-white">
                Português
              </button>
              <button className="rounded-lg border border-gray-700 px-3 py-2 text-sm">
                English
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm">
          © {new Date().getFullYear()} Mercado Verde
        </div>
      </footer>
    </main>
  );
}
