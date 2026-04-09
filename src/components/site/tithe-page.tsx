"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Check, Copy } from "lucide-react"

const pixEmail = "paroquiasaodimas@gmail.com"

export function TithePage() {
  const [copied, setCopied] = useState(false)

  async function handleCopyPixKey() {
    try {
      await navigator.clipboard.writeText(pixEmail)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#091c63] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(223,152,34,0.18),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1240px] px-6 py-20 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            Dízimo
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-[-0.05em] sm:text-6xl">
            Sua contribuição ajuda a sustentar a missão da paróquia
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            Você pode colaborar com a Paróquia São Dimas por meio do Pix. Use a chave
            abaixo ou aponte a câmera do celular para o QR Code.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-310 px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-4xl bg-white p-8 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Chave Pix
            </p>

            <div className="mt-6 rounded-[1.75rem] bg-slate-50 p-6 ring-1 ring-slate-200/70">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    E-mail
                  </p>
                  <p className="mt-3 break-all text-2xl font-bold tracking-[-0.03em] text-slate-900">
                    {pixEmail}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPixKey}
                  className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary transition hover:bg-primary/14"
                >
                  {copied ? (
                    <>
                      Copiado
                      <Check className="h-3.5 w-3.5" />
                    </>
                  ) : (
                    <>
                      Copiar
                      <Copy className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-sm leading-8 text-slate-600">
              <p>
                Ao contribuir com o dízimo, você ajuda a manter as atividades
                pastorais, a estrutura da comunidade e as ações de evangelização.
              </p>
              <p>
                Se preferir, abra o aplicativo do seu banco, escolha Pix por chave
                e use o e-mail informado acima.
              </p>
            </div>
          </article>

          <article className="rounded-4xl bg-[#f8fafc] p-8 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.16)] ring-1 ring-slate-200/70">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              QR Code
            </p>

            <div className="mt-6 flex justify-center rounded-[1.75rem] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/70">
              <Image
                src="/qrcode.png"
                alt="QR Code Pix da Paróquia São Dimas"
                width={420}
                height={420}
                className="h-auto w-full max-w-90"
                priority
              />
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              Escaneie o QR Code para abrir o pagamento diretamente no aplicativo do
              seu banco.
            </p>
          </article>
        </div>

        <div className="mt-8 rounded-[2rem] bg-[#091c63] px-8 py-7 text-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.3)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
            Transparencia
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
            Acompanhe como o dizimo esta sendo usado na paroquia
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/82">
            Publicamos as prestacoes de contas para mostrar os projetos, fases e
            melhorias que estao sendo realizados com a contribuicao da comunidade.
          </p>

          <Link
            href="/prestacao-contas"
            className="mt-5 inline-flex items-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-secondary/90"
          >
            Ver prestacao de contas
          </Link>
        </div>
      </section>
    </div>
  )
}
