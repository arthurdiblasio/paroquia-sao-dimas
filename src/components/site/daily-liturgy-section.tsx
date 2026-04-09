"use client"

import type { ReactNode } from "react"
import { useMemo, useState } from "react"
import { ChevronRight } from "lucide-react"

import { Modal } from "@/components/ui/modal"
import type { DailyLiturgyResponse, LiturgyReading } from "@/lib/daily-liturgy"

type ReadingModalItem = {
  id: string
  label: string
  accent: "blue" | "gold"
  reading: LiturgyReading
}

type DailyLiturgySectionProps = {
  dailyLiturgy: DailyLiturgyResponse
}

function formatReadingText(value: string) {
  return value
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

function renderVerseText(value: string) {
  const parts = value.split(/(^|[\s"“‘(])(\d{1,3})(?=[A-Za-zÀ-ÿ])/g)

  return parts.reduce<ReactNode[]>((nodes, part, index) => {
    if (!part) {
      return nodes
    }

    const isVerseNumber =
      index > 1 &&
      /^\d{1,3}$/.test(part) &&
      /(^|[\s"“‘(])$/.test(parts[index - 1] ?? "") &&
      /[A-Za-zÀ-ÿ]/.test(parts[index + 1] ?? "")

    if (isVerseNumber) {
      nodes.push(
        <strong key={`verse-${index}`} className="font-bold text-slate-900">
          {part}
        </strong>
      )
      nodes.push(" ")
      return nodes
    }

    nodes.push(part)
    return nodes
  }, [])
}

function LiturgyCard({
  item,
  summary,
  onOpen,
}: {
  item: ReadingModalItem
  summary: ReactNode
  onOpen: () => void
}) {
  const isGold = item.accent === "gold"

  return (
    <button
      type="button"
      onClick={onOpen}
      className={[
        "group w-full rounded-[1.75rem] p-6 text-left transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2",
        isGold
          ? "bg-[#df9822] text-slate-950 shadow-[0_24px_60px_-32px_rgba(223,152,34,0.6)] focus:ring-[#7a4f00]"
          : "bg-white text-slate-900 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70 focus:ring-[#092070]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={[
              "text-xs font-semibold uppercase tracking-[0.18em]",
              isGold ? "text-slate-900/65" : item.label === "Salmo" ? "text-[#7a4f00]" : "text-[#092070]",
            ].join(" ")}
          >
            {item.label}
          </p>
          <h3 className="mt-3 text-lg font-semibold">{item.reading.referencia}</h3>
          {item.reading.titulo && (
            <p className={["mt-2 text-sm font-medium", isGold ? "text-slate-900/75" : "text-slate-500"].join(" ")}>
              {item.reading.titulo}
            </p>
          )}
        </div>

        <span
          className={[
            "inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
            isGold ? "bg-slate-950/10 text-slate-900/75" : "bg-[#092070]/8 text-[#092070]",
          ].join(" ")}
        >
          Ler
          <ChevronRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
        </span>
      </div>

      <p className={["mt-4 text-sm leading-7", isGold ? "text-slate-900/80" : "text-slate-600"].join(" ")}>
        {summary}
      </p>
    </button>
  )
}

export function DailyLiturgySection({ dailyLiturgy }: DailyLiturgySectionProps) {
  const [openItemId, setOpenItemId] = useState<string | null>(null)

  const readingItems = useMemo<ReadingModalItem[]>(() => {
    const items: ReadingModalItem[] = []

    if (dailyLiturgy.leituras.primeiraLeitura?.[0]) {
      items.push({
        id: "primeira-leitura",
        label: "Primeira leitura",
        accent: "blue",
        reading: dailyLiturgy.leituras.primeiraLeitura[0],
      })
    }

    if (dailyLiturgy.leituras.salmo?.[0]) {
      items.push({
        id: "salmo",
        label: "Salmo",
        accent: "blue",
        reading: dailyLiturgy.leituras.salmo[0],
      })
    }

    if (dailyLiturgy.leituras.segundaLeitura?.[0]) {
      items.push({
        id: "segunda-leitura",
        label: "Segunda leitura",
        accent: "blue",
        reading: dailyLiturgy.leituras.segundaLeitura[0],
      })
    }

    if (dailyLiturgy.leituras.evangelho?.[0]) {
      items.push({
        id: "evangelho",
        label: "Evangelho",
        accent: "gold",
        reading: dailyLiturgy.leituras.evangelho[0],
      })
    }

    return items
  }, [dailyLiturgy])

  const selectedItem = readingItems.find((item) => item.id === openItemId) ?? null

  const celebrationSummary = dailyLiturgy.oracoes.coleta?.trim()
    ? dailyLiturgy.oracoes.coleta
    : "Toque para ver os detalhes completos da celebração do dia."

  return (
    <>
      <section className="mx-auto max-w-[1240px] px-6 py-10 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#092070]">
              Liturgia do dia
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
              Homilia diária e leituras de hoje
            </h2>
          </div>

          <div className="rounded-full bg-[#092070]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#092070]">
            {dailyLiturgy.data}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <button
            type="button"
            onClick={() => setOpenItemId("celebracao")}
            className="rounded-[2rem] bg-[#092070] p-8 text-left text-white shadow-[0_24px_60px_-32px_rgba(9,32,112,0.7)] transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-white"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                  Celebração
                </p>

                <h3 className="mt-4 text-3xl font-semibold leading-tight">
                  {dailyLiturgy.liturgia}
                </h3>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
                Ler
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>

            <div className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Cor litúrgica: {dailyLiturgy.cor}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/8 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Oração de coleta
              </p>
              <p className="mt-4 text-sm leading-8 text-white/82">
                {celebrationSummary}
              </p>
            </div>
          </button>

          <div className="grid gap-5 md:grid-cols-2">
            {readingItems.map((item) => {
              const summary =
                item.label === "Salmo"
                  ? item.reading.refrao || item.reading.texto
                  : item.reading.texto

              return (
                <LiturgyCard
                  key={item.id}
                  item={item}
                  summary={renderVerseText(
                    summary.length > 220 ? `${summary.slice(0, 220).trimEnd()}...` : summary
                  )}
                  onOpen={() => setOpenItemId(item.id)}
                />
              )
            })}
          </div>
        </div>
      </section>

      <Modal open={openItemId === "celebracao"} onClose={() => setOpenItemId(null)}>
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#092070]">
                Celebração
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                {dailyLiturgy.liturgia}
              </h3>
              <p className="mt-3 text-sm font-medium text-slate-500">{dailyLiturgy.data}</p>
            </div>

            <div className="rounded-full bg-[#092070]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#092070]">
              Cor litúrgica: {dailyLiturgy.cor}
            </div>
          </div>

          {dailyLiturgy.oracoes.coleta && (
            <section className="rounded-[1.5rem] bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#092070]">
                Oração de coleta
              </p>
              <p className="mt-4 whitespace-pre-line text-sm leading-8 text-slate-700">
                {dailyLiturgy.oracoes.coleta}
              </p>
            </section>
          )}

          {dailyLiturgy.oracoes.oferendas && (
            <section className="rounded-[1.5rem] bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#092070]">
                Oração sobre as oferendas
              </p>
              <p className="mt-4 whitespace-pre-line text-sm leading-8 text-slate-700">
                {dailyLiturgy.oracoes.oferendas}
              </p>
            </section>
          )}

          {dailyLiturgy.oracoes.comunhao && (
            <section className="rounded-[1.5rem] bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#092070]">
                Oração depois da comunhão
              </p>
              <p className="mt-4 whitespace-pre-line text-sm leading-8 text-slate-700">
                {dailyLiturgy.oracoes.comunhao}
              </p>
            </section>
          )}
        </div>
      </Modal>

      <Modal open={Boolean(selectedItem)} onClose={() => setOpenItemId(null)}>
        {selectedItem && (
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#092070]">
                {selectedItem.label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                {selectedItem.reading.referencia}
              </h3>
              {selectedItem.reading.titulo && (
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {selectedItem.reading.titulo}
                </p>
              )}
              {selectedItem.label === "Salmo" && selectedItem.reading.refrao && (
                <div className="mt-4 rounded-[1.25rem] bg-[#df9822]/12 p-4 text-sm font-medium leading-7 text-slate-700">
                  {selectedItem.reading.refrao}
                </div>
              )}
            </div>

            <div className="space-y-4 text-sm leading-8 text-slate-700">
              {formatReadingText(selectedItem.reading.texto).map((paragraph, index) => (
                <p key={`${selectedItem.id}-${index}`}>{renderVerseText(paragraph)}</p>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
