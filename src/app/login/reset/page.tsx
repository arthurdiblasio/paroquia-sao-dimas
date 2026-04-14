"use client";

import { EyeOff, Eye } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [token] = useState<string | null | undefined>(() =>
    typeof window === "undefined"
      ? undefined
      : new URL(window.location.href).searchParams.get("token"),
  );



  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const hasInvalidToken = !token;
  console.log('token antes', token);
  console.log('status', status);


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log('token', token);


    if (!token) {
      setStatus("error");
      setMessage("Token de redefinição inválido.");
      return;
    }

    if (password !== confirmPassword) {
      setStatus("error");
      setMessage("As senhas não coincidem.");
      return;
    }

    setStatus("sending");
    setMessage(null);

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ token, password }),
    });

    if (res.ok) {
      setStatus("success");
      router.push("/login");
      return;
    }

    const error = await res.json().catch(() => null);
    setStatus("error");
    setMessage(error?.error ?? "Não foi possível redefinir a senha.");
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Paróquia São Dimas" className="h-12 w-12" />
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-secondary">Área Administrativa</p>
              <h1 className="text-xl font-semibold">Redefinir senha</h1>
            </div>
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-secondary/90"
          >
            Voltar para Login
          </Link>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10">
        <div className="w-full max-w-md space-y-6 rounded-3xl bg-white p-8 shadow-xl shadow-primary/10">
          <div>
            <h2 className="text-3xl font-bold text-primary">Redefinir senha</h2>
            <p className="mt-2 text-sm text-slate-600">Informe sua nova senha para concluir a recuperação.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">

              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Nova senha"
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
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Confirmar nova senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((current) => !current)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary"
                aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Redefinindo..." : "Redefinir senha"}
            </button>
          </form>

          {message ? (
            <div className={`rounded-xl border p-4 text-sm ${status === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
              {message}
            </div>
          ) : null}

          {hasInvalidToken ? (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              Token de redefinir senha inválido ou expirado.
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
