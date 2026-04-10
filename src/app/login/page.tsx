"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.refresh()
      router.replace("/admin")
      return
    }

    const error = await res.json().catch(() => null)
    alert(error?.error ?? "Login inválido")
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Paróquia São Dimas" width={48} height={48} />
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-secondary">Área Administrativa</p>
              <h1 className="text-xl font-semibold">Acesso Restrito</h1>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-secondary/90"
          >
            Voltar para Home
          </Link>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10">
        <div className="w-full max-w-md space-y-6 rounded-3xl bg-white p-8 shadow-xl shadow-primary/10">
          <div>
            <h2 className="text-3xl font-bold text-primary">Login</h2>
            <p className="mt-2 text-sm text-slate-600">Entre com suas credenciais de administrador.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-slate-200 bg-slate-50 p-3 pr-12 rounded-xl outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90">
              Entrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}