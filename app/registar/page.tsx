"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function RegistarPage() {
  const router = useRouter();
  const supabase = createClient();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"buyer" | "seller">("buyer");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setSuccess(false);

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();
    const cleanPhone = phone.trim();

    if (password.length < 6) {
      setMessage("A palavra-passe deve ter pelo menos 6 caracteres.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: cleanEmail,
      password,
      options: {
        data: {
          full_name: cleanName,
          phone: cleanPhone || null,
          role,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    if (!data.user) {
      setMessage("Não foi possível criar a conta.");
      setLoading(false);
      return;
    }

    if (data.session) {
      router.push(role === "seller" ? "/vender" : "/produtos");
      router.refresh();
      return;
    }

    setSuccess(true);
    setMessage(
      "Conta criada com sucesso! Verifique o seu email para confirmar a conta e depois entre no Mercado Verde."
    );

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#f5f8f3]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden bg-green-800 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <Link href="/" className="text-2xl font-bold">
            🌱 Mercado Verde
          </Link>

          <div className="max-w-lg">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-200">
              Mercado agrícola de Moçambique
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Ligue produtores e compradores num só lugar.
            </h1>

            <p className="mt-6 text-lg leading-8 text-green-100">
              Crie a sua conta para comprar produtos agrícolas ou começar a
              vender diretamente no Mercado Verde.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-5">
                <div className="text-3xl">🌾</div>
                <p className="mt-3 font-bold">Venda</p>
                <p className="mt-1 text-sm text-green-100">
                  Publique os seus produtos.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <div className="text-3xl">🛒</div>
                <p className="mt-3 font-bold">Compre</p>
                <p className="mt-1 text-sm text-green-100">
                  Encontre produtos locais.
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-green-200">
            Mercado Verde · Moçambique
          </p>
        </section>

        <section className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="mb-8 block text-center text-2xl font-bold text-green-700 lg:hidden"
            >
              🌱 Mercado Verde
            </Link>

            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl md:p-9">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-green-600">
                  Começar agora
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  Criar a sua conta
                </h2>

                <p className="mt-2 text-gray-500">
                  Preencha os seus dados para entrar no Mercado Verde.
                </p>
              </div>

              {message && (
                <div
                  className={`mt-6 rounded-2xl border px-4 py-4 text-sm ${
                    success
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Nome completo
                  </label>

                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João Manuel"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Número de telefone
                  </label>

                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+258 84 000 0000"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Palavra-passe
                  </label>

                  <input
                    required
                    type="password"
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Quero utilizar o Mercado Verde para
                  </label>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setRole("buyer")}
                      className={`rounded-2xl border p-4 text-left transition ${
                        role === "buyer"
                          ? "border-green-600 bg-green-50 ring-1 ring-green-600"
                          : "border-gray-200 hover:border-green-300"
                      }`}
                    >
                      <div className="text-2xl">🛒</div>
                      <div className="mt-2 font-bold">Comprar</div>
                      <div className="mt-1 text-xs text-gray-500">
                        Encontrar produtos
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRole("seller")}
                      className={`rounded-2xl border p-4 text-left transition ${
                        role === "seller"
                          ? "border-green-600 bg-green-50 ring-1 ring-green-600"
                          : "border-gray-200 hover:border-green-300"
                      }`}
                    >
                      <div className="text-2xl">🌾</div>
                      <div className="mt-2 font-bold">Vender</div>
                      <div className="mt-1 text-xs text-gray-500">
                        Publicar produtos
                      </div>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-green-700 py-4 font-bold text-white shadow-lg shadow-green-700/20 transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "A criar a sua conta..." : "Criar conta"}
                </button>
              </form>

              <div className="mt-7 border-t pt-6 text-center text-sm text-gray-500">
                Já tem uma conta?{" "}
                <Link
                  href="/entrar"
                  className="font-bold text-green-700 hover:underline"
                >
                  Entrar
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
