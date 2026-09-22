import Link from "next/link";

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-green-700">
            🌱 Mercado Verde
          </Link>
          <Link href="/registar">Criar conta</Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-4xl font-bold">Termos e condições</h1>

        <p className="mt-3 text-gray-500">
          Última atualização: Setembro de 2026
        </p>

        <div className="mt-10 space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900">
              1. Utilização da plataforma
            </h2>
            <p className="mt-3 leading-7">
              O Mercado Verde disponibiliza uma plataforma para
              facilitar a divulgação e descoberta de produtos
              agrícolas e a comunicação entre utilizadores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              2. Anúncios
            </h2>
            <p className="mt-3 leading-7">
              Os vendedores são responsáveis pelas informações
              fornecidas nos seus anúncios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              3. Negociações
            </h2>
            <p className="mt-3 leading-7">
              Preço, pagamento, transporte e entrega devem ser
              acordados entre comprador e vendedor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">
              4. Conta do utilizador
            </h2>
            <p className="mt-3 leading-7">
              O utilizador deve fornecer informações verdadeiras
              e proteger os seus dados de acesso.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
