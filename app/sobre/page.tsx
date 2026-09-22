import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-green-700">
            🌱 Mercado Verde
          </Link>
          <Link href="/produtos" className="font-semibold">
            Produtos
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <div className="text-7xl">🌱</div>
        <h1 className="mt-6 text-4xl font-bold">
          Sobre o Mercado Verde
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
          Uma plataforma digital para aproximar produtores,
          vendedores e compradores de produtos agrícolas em
          Moçambique.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            ["Nossa missão", "Facilitar o acesso ao mercado e criar oportunidades."],
            ["Conexão", "Aproximar quem produz de quem procura produtos."],
            ["Transparência", "Tornar informações sobre produtos e preços acessíveis."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-green-50 p-7">
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="mt-3 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
