"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const initialRole =
    searchParams.get("role") === "producer" ? "producer" : "buyer";
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";

  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [role, setRole] = useState<"producer" | "buyer">(initialRole);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [district, setDistrict] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("mv_user_name");
    if (savedName && mode === "login") {
      setName(savedName);
    }
  }, [mode]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setSuccess(false);

    try {
      const supabase = createClient();

      if (mode === "signup") {
        if (!name.trim() || !phone.trim() || !email.trim() || !password.trim()) {
          throw new Error("Preencha todos os campos obrigatórios.");
        }

        if (password.length < 6) {
          throw new Error("A palavra-passe deve ter pelo menos 6 caracteres.");
        }

        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: name.trim(),
              phone: phone.trim(),
              role,
              district,
            },
          },
        });

        if (error) throw error;

        localStorage.setItem("mv_user_name", name.trim());
        localStorage.setItem("mv_user_role", role);

        setSuccess(true);

        if (data.session) {
          setMessage(
            "Conta criada com sucesso! Bem-vindo ao Mercado Verde."
          );
        } else {
          setMessage(
            "Conta criada com sucesso! Verifique o seu email para confirmar a conta."
          );
        }

        setPassword("");
      } else {
        if (!email.trim() || !password.trim()) {
          throw new Error("Introduza o email e a palavra-passe.");
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) throw error;

        const loggedName =
          data.user.user_metadata?.full_name ||
          data.user.email?.split("@")[0] ||
          "Utilizador";

        localStorage.setItem("mv_user_name", loggedName);

        setSuccess(true);
        setMessage(`Bem-vindo, ${loggedName.split(" ")[0]}!`);

        setTimeout(() => {
          window.location.href = "/";
        }, 900);
      }
    } catch (error: any) {
      setSuccess(false);
      setMessage(
        error?.message ||
          "Não foi possível concluir a operação. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  if (success && mode === "signup") {
    return (
      <main className="min-h-screen bg-[#f4f7f2] px-5 py-10">
        <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center">
          <div className="w-full rounded-[32px] bg-white p-8 text-center shadow-[0_20px_60px_rgba(30,55,38,0.10)] md:p-12">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#e3f3e8] text-5xl">
              ✓
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[2px] text-[#16733e]">
              Mercado Verde
            </p>

            <h1 className="mt-3 text-4xl font-medium tracking-[-1px] md:text-5xl">
              Conta criada!
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#68766e]">
              Bem-vindo, <strong>{name}</strong>.
            </p>

            <div className="mt-6 rounded-2xl bg-[#f3f7f1] p-5 text-left text-[#506057]">
              {message}
            </div>

            <Link
              href="/"
              className="mt-8 flex min-h-[58px] items-center justify-center rounded-[17px] bg-[#16733e] px-7 font-bold text-white"
            >
              Ir para o Mercado Verde
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f7f2] px-5 py-8 md:py-12">
      <div className="mx-auto max-w-xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 font-bold text-[#16733e]"
        >
          ← Mercado Verde
        </Link>

        <div className="rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(30,55,38,0.10)] md:p-10">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#16733e] text-3xl">
              🌿
            </div>

            <h1 className="mt-6 text-3xl font-medium tracking-[-1px] md:text-4xl">
              {mode === "signup" ? "Criar conta" : "Entrar"}
            </h1>

            <p className="mt-3 text-[#68766e]">
              {mode === "signup"
                ? "Junte-se ao Mercado Verde."
                : "Entre na sua conta Mercado Verde."}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 rounded-[16px] bg-[#f1f5f1] p-1">
            <button
              type="button"
              onClick={() => {
                setMode("login");
                setMessage("");
              }}
              className={`min-h-[50px] rounded-[13px] font-semibold ${
                mode === "login"
                  ? "bg-white text-[#16733e] shadow-sm"
                  : "text-[#68766e]"
              }`}
            >
              Entrar
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("signup");
                setMessage("");
              }}
              className={`min-h-[50px] rounded-[13px] font-semibold ${
                mode === "signup"
                  ? "bg-white text-[#16733e] shadow-sm"
                  : "text-[#68766e]"
              }`}
            >
              Criar conta
            </button>
          </div>

          {mode === "signup" && (
            <div className="mt-7">
              <label className="mb-3 block font-semibold">
                Quero utilizar o Mercado Verde como:
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("producer")}
                  className={`min-h-[74px] rounded-[17px] border-2 p-3 font-semibold ${
                    role === "producer"
                      ? "border-[#16733e] bg-[#edf7ef] text-[#16733e]"
                      : "border-[#e1e8e2]"
                  }`}
                >
                  👩🏾‍🌾
                  <br />
                  Produtor
                </button>

                <button
                  type="button"
                  onClick={() => setRole("buyer")}
                  className={`min-h-[74px] rounded-[17px] border-2 p-3 font-semibold ${
                    role === "buyer"
                      ? "border-[#16733e] bg-[#edf7ef] text-[#16733e]"
                      : "border-[#e1e8e2]"
                  }`}
                >
                  🏪
                  <br />
                  Comprador
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            {mode === "signup" && (
              <>
                <div>
                  <label className="mb-2 block font-semibold">
                    Nome completo *
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex.: Maria José"
                    className="h-14 w-full rounded-[15px] border border-[#dce5de] px-4 outline-none focus:border-[#16733e]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold">
                    Número de telefone *
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+258 84 000 0000"
                    className="h-14 w-full rounded-[15px] border border-[#dce5de] px-4 outline-none focus:border-[#16733e]"
                  />
                </div>
              </>
            )}

            <div>
              <label className="mb-2 block font-semibold">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="h-14 w-full rounded-[15px] border border-[#dce5de] px-4 outline-none focus:border-[#16733e]"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Palavra-passe *
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="h-14 w-full rounded-[15px] border border-[#dce5de] px-4 outline-none focus:border-[#16733e]"
              />
            </div>

            {mode === "signup" && (
              <div>
                <label className="mb-2 block font-semibold">
                  Distrito
                </label>

                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="h-14 w-full rounded-[15px] border border-[#dce5de] bg-white px-4 outline-none focus:border-[#16733e]"
                >
                  <option value="">Seleccione o distrito</option>
                  <option>Maputo</option>
                  <option>Matola</option>
                  <option>Marracuene</option>
                  <option>Boane</option>
                  <option>Moamba</option>
                  <option>Manhiça</option>
                  <option>Magude</option>
                  <option>Namaacha</option>
                </select>
              </div>
            )}

            {message && (
              <div
                className={`rounded-[15px] p-4 text-sm leading-6 ${
                  success
                    ? "bg-[#e8f6ec] text-[#176f3d]"
                    : "bg-[#fff0f0] text-[#a33b3b]"
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex min-h-[58px] w-full items-center justify-center rounded-[17px] bg-[#16733e] px-6 text-lg font-bold text-white transition hover:bg-[#105d32] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Aguarde..."
                : mode === "signup"
                ? "Criar a minha conta"
                : "Entrar no Portal"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
