"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [debugLink, setDebugLink] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMessage(null);
    setDebugLink(null);

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      const data = await res.json().catch(() => null);
      setStatus("success");
      setMessage(
        "Se o email existir no sistema, você receberá um link para redefinir sua senha."
      );
      if (data?.debugLink) {
        setDebugLink(data.debugLink);
      }
      return;
    }

    const error = await res.json().catch(() => null);
    setStatus("error");
    setMessage(error?.error ?? "Não foi possível enviar o link de recuperação.");
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Paróquia São Dimas" className="h-12 w-12" />
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-secondary">Área Administrativa</p>
              <h1 className="text-xl font-semibold">Recuperar senha</h1>
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
            <h2 className="text-3xl font-bold text-primary">Esqueci minha senha</h2>
            <p className="mt-2 text-sm text-slate-600">Informe seu email de administrador para receber o link de redefinição.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              className="w-full border border-slate-200 bg-slate-50 p-3 rounded-xl outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Enviar link de recuperação"}
            </button>
          </form>

          {message ? (
            <div className={`rounded-xl border p-4 text-sm ${status === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
              {message}
            </div>
          ) : null}

          {debugLink ? (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
              <p className="font-semibold">Link de redefinição (dev):</p>
              <p className="break-all">{debugLink}</p>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
