import Link from "next/link";

export default function RegistarPage() {
  return (
    <main className="min-h-screen bg-green-50 px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="block text-center text-2xl font-bold text-green-700"
        >
          🌱 Mercado Verde
        </Link>

        <div className="mt-8 rounded-3xl border bg-white p-8 shadow">
          <h1 className="text-3xl font-bold">Criar conta</h1>
          <p className="mt-2 text-gray-500">
            Junte-se ao Mercado Verde.
          </p>

          <form className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="md:col-span-2">
              <label className="text-sm font-semibold">
                Nome completo
              </label>
              <input required className="mt-2 w-full rounded-xl border px-4 py-3" />
            </div>

            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Telefone</label>
              <input
                required
                type="tel"
                placeholder="+258 ..."
                className="mt-2 w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Província</label>
              <select className="mt-2 w-full rounded-xl border px-4 py-3">
                <option>Nampula</option>
                <option>Cabo Delgado</option>
                <option>Niassa</option>
                <option>Zambézia</option>
                <option>Tete</option>
                <option>Manica</option>
                <option>Sofala</option>
                <option>Inhambane</option>
                <option>Gaza</option>
                <option>Maputo</option>
                <option>Maputo Cidade</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">
                Tipo de conta
              </label>
              <select className="mt-2 w-full rounded-xl border px-4 py-3">
                <option>Comprador</option>
                <option>Produtor / Vendedor</option>
                <option>Ambos</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">
                Palavra-passe
              </label>
              <input
                required
                type="password"
                className="mt-2 w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Confirmar palavra-passe
              </label>
              <input
                required
                type="password"
                className="mt-2 w-full rounded-xl border px-4 py-3"
              />
            </div>

            <label className="flex gap-3 text-sm text-gray-600 md:col-span-2">
              <input required type="checkbox" />
              Aceito os termos e condições do Mercado Verde.
            </label>

            <button
              type="submit"
              className="md:col-span-2 rounded-xl bg-green-600 py-4 font-bold text-white"
            >
              Criar conta
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-gray-500">
            Já tem uma conta?{" "}
            <Link href="/entrar" className="font-semibold text-green-600">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
