import Link from "next/link";

const categories = [
  { name: "Milho", icon: "🌽" },
  { name: "Feijão", icon: "🫘" },
  { name: "Arroz", icon: "🍚" },
  { name: "Hortícolas", icon: "🥬" },
  { name: "Frutas", icon: "🍊" },
  { name: "Mandioca", icon: "🥔" },
  { name: "Amendoim", icon: "🥜" },
  { name: "Outros", icon: "🌱" },
];

const products = [
  {
    name: "Milho Amarelo",
    location: "Nampula",
    price: "35 MZN/kg",
    seller: "Produtor Local",
    icon: "🌽",
  },
  {
    name: "Feijão Nhemba",
    location: "Nampula",
    price: "120 MZN/kg",
    seller: "Agro Nampula",
    icon: "🫘",
  },
  {
    name: "Tomate Fresco",
    location: "Nampula",
    price: "80 MZN/kg",
    seller: "Horta Verde",
    icon: "🍅",
  },
  {
    name: "Amendoim",
    location: "Nampula",
    price: "100 MZN/kg",
    seller: "Cooperativa Agrícola",
    icon: "🥜",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xl">
              🌱
            </div>

            <div>
              <h1 className="text-xl font-bold text-green-700">
                Mercado Verde
              </h1>
              <p className="text-xs text-gray-500">
                Conectando produtores e compradores
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="font-medium text-green-700"
            >
              Início
            </Link>

            <Link
              href="/produtos"
              className="text-gray-600 hover:text-green-700"
            >
              Produtos
            </Link>

            <Link
              href="/vender"
              className="text-gray-600 hover:text-green-700"
            >
              Vender
            </Link>

            <Link
              href="/sobre"
              className="text-gray-600 hover:text-green-700"
            >
              Sobre nós
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Entrar
            </button>

            <button className="hidden rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 sm:block">
              Criar conta
            </button>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-500">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">

          <div className="text-white">
            <span className="mb-5 inline-block rounded-full bg-white/15 px-4 py-2 text-sm">
              🇲🇿 Feito para Moçambique
            </span>

            <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
              O mercado agrícola
              <br />
              <span className="text-green-100">
                de Moçambique
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
              Encontre produtos agrícolas, conecte-se diretamente
              com produtores e faça negócios de forma simples,
              segura e transparente.
            </p>

            {/* SEARCH */}
            <div className="mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl sm:flex-row">
              <input
                type="text"
                placeholder="O que procura? Ex: milho, feijão, tomate..."
                className="flex-1 rounded-xl px-4 py-3 text-gray-800 outline-none"
              />

              <button className="rounded-xl bg-green-600 px-7 py-3 font-semibold text-white hover:bg-green-700">
                🔍 Pesquisar
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-green-50">
              <span>✓ Produtos locais</span>
              <span>✓ Contacto direto</span>
              <span>✓ Sem complicações</span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hidden md:block">
            <div className="relative mx-auto flex h-[420px] max-w-md items-center justify-center rounded-3xl bg-white/10 backdrop-blur">

              <div className="text-center">
                <div className="text-[130px]">🌾</div>

                <div className="mt-4 rounded-2xl bg-white p-5 text-left shadow-xl">
                  <p className="text-sm text-gray-500">
                    Produto em destaque
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Milho Amarelo
                  </h3>

                  <p className="mt-2 font-semibold text-green-600">
                    35 MZN/kg
                  </p>

                  <p className="text-sm text-gray-500">
                    📍 Nampula
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-semibold text-green-600">
              EXPLORE
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              Categorias
            </h2>

            <p className="mt-2 text-gray-500">
              Encontre rapidamente o que procura.
            </p>
          </div>

          <Link
            href="/produtos"
            className="hidden font-semibold text-green-600 sm:block"
          >
            Ver todas →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/produtos?categoria=${category.name}`}
              className="group rounded-2xl border bg-white p-5 text-center transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
            >
              <div className="text-4xl">
                {category.icon}
              </div>

              <p className="mt-3 text-sm font-semibold group-hover:text-green-600">
                {category.name}
              </p>
            </Link>
          ))}
        </div>

      </section>

      {/* PRODUCTS */}
      <section className="bg-gray-50 py-16">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-semibold text-green-600">
                MERCADO
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                Produtos disponíveis
              </h2>

              <p className="mt-2 text-gray-500">
                Produtos anunciados por produtores e vendedores.
              </p>
            </div>

            <Link
              href="/produtos"
              className="hidden font-semibold text-green-600 sm:block"
            >
              Ver todos →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product) => (
              <div
                key={product.name}
                className="overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex h-48 items-center justify-center bg-green-50 text-8xl">
                  {product.icon}
                </div>

                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold">
                      {product.name}
                    </h3>

                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                      Disponível
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    📍 {product.location}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    👤 {product.seller}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-lg font-bold text-green-600">
                      {product.price}
                    </p>

                    <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">
                      Ver
                    </button>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SELLER CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="overflow-hidden rounded-3xl bg-green-700 px-8 py-12 text-white md:px-16">

          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                👨🏾‍🌾 Para produtores
              </span>

              <h2 className="mt-6 text-3xl font-bold md:text-4xl">
                Tem produtos agrícolas para vender?
              </h2>

              <p className="mt-4 max-w-xl text-green-50">
                Publique os seus produtos no Mercado Verde e
                encontre compradores interessados em todo
                Moçambique.
              </p>

              <button className="mt-7 rounded-xl bg-white px-6 py-3 font-bold text-green-700 hover:bg-green-50">
                Começar a vender
              </button>
            </div>

            <div className="text-center text-9xl">
              👨🏾‍🌾
            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-16">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="font-semibold text-green-600">
            SIMPLES
          </p>

          <h2 className="mt-1 text-3xl font-bold">
            Como funciona?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                🔎
              </div>

              <h3 className="mt-5 text-xl font-bold">
                1. Encontre
              </h3>

              <p className="mt-3 text-gray-500">
                Pesquise produtos agrícolas disponíveis
                perto de si.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                🤝
              </div>

              <h3 className="mt-5 text-xl font-bold">
                2. Contacte
              </h3>

              <p className="mt-3 text-gray-500">
                Entre em contacto diretamente com o
                produtor ou vendedor.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                🚚
              </div>

              <h3 className="mt-5 text-xl font-bold">
                3. Negocie
              </h3>

              <p className="mt-3 text-gray-500">
                Combine preço, quantidade, pagamento
                e entrega.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">

          <div>
            <div className="flex items-center gap-2">
              <div className="text-2xl">🌱</div>
              <span className="text-xl font-bold text-white">
                Mercado Verde
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Uma plataforma digital para aproximar
              produtores, vendedores e compradores
              agrícolas em Moçambique.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Mercado
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link href="/produtos" className="block hover:text-white">
                Produtos
              </Link>

              <Link href="/categorias" className="block hover:text-white">
                Categorias
              </Link>

              <Link href="/vender" className="block hover:text-white">
                Vender produtos
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Ajuda
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link href="/sobre" className="block hover:text-white">
                Sobre nós
              </Link>

              <Link href="/contacto" className="block hover:text-white">
                Contacto
              </Link>

              <Link href="/termos" className="block hover:text-white">
                Termos e condições
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Idioma
            </h3>

            <div className="mt-4 flex gap-3">
              <button className="rounded-lg bg-green-600 px-4 py-2 text-sm text-white">
                Português
              </button>

              <button className="rounded-lg border border-gray-700 px-4 py-2 text-sm hover:bg-gray-800">
                English
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Mercado Verde. Todos os direitos reservados.
          </div>
        </div>

      </footer>

    </main>
  );
}
