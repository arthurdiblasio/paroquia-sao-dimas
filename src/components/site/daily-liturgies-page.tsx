"use client";

import type { ReactNode } from "react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Loader2,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";

import type { DailyLiturgyResponse, LiturgyReading } from "@/lib/daily-liturgy";

type DailyLiturgiesPageProps = {
  initialLiturgies: DailyLiturgyResponse[];
};

type ReadingTabItem = {
  id: string;
  label: string;
  reading: LiturgyReading;
};

function getTodayInputValue() {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  });

  return formatter.format(new Date());
}

function getDateParams(value: string) {
  const [ano, mes, dia] = value.split("-").map(Number);

  if (!dia || !mes || !ano) {
    return null;
  }

  return { dia, mes, ano };
}

function getReadingCount(liturgy: DailyLiturgyResponse) {
  return [
    liturgy.leituras.primeiraLeitura,
    liturgy.leituras.segundaLeitura,
    liturgy.leituras.salmo,
    liturgy.leituras.evangelho,
  ].reduce((total, readings) => total + (readings?.length ?? 0), 0);
}

function getReadingTabs(liturgy: DailyLiturgyResponse) {
  const tabs: ReadingTabItem[] = [];

  if (liturgy.leituras.primeiraLeitura?.[0]) {
    tabs.push({
      id: "primeira-leitura",
      label: "1ª leitura",
      reading: liturgy.leituras.primeiraLeitura[0],
    });
  }

  if (liturgy.leituras.segundaLeitura?.[0]) {
    tabs.push({
      id: "segunda-leitura",
      label: "2ª leitura",
      reading: liturgy.leituras.segundaLeitura[0],
    });
  }

  if (liturgy.leituras.salmo?.[0]) {
    tabs.push({
      id: "salmo",
      label: "Salmo",
      reading: liturgy.leituras.salmo[0],
    });
  }

  if (liturgy.leituras.evangelho?.[0]) {
    tabs.push({
      id: "evangelho",
      label: "Evangelho",
      reading: liturgy.leituras.evangelho[0],
    });
  }

  return tabs;
}

function formatReadingText(value: string) {
  return value
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function renderVerseText(value: string) {
  const parts = value.split(/(^|[\s"“‘(])(\d{1,3})(?=[A-Za-zÀ-ÿ])/g);

  return parts.reduce<ReactNode[]>((nodes, part, index) => {
    if (!part) {
      return nodes;
    }

    const isVerseNumber =
      index > 1 &&
      /^\d{1,3}$/.test(part) &&
      /(^|[\s"“‘(])$/.test(parts[index - 1] ?? "") &&
      /[A-Za-zÀ-ÿ]/.test(parts[index + 1] ?? "");

    if (isVerseNumber) {
      nodes.push(
        <strong key={`verse-${index}`} className="font-bold text-slate-950">
          {part}
        </strong>
      );
      nodes.push(" ");
      return nodes;
    }

    nodes.push(part);
    return nodes;
  }, []);
}

async function fetchLiturgies(path: string) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error("Nao foi possivel carregar a liturgia.");
  }

  return (await response.json()) as DailyLiturgyResponse[];
}

export function DailyLiturgiesPage({ initialLiturgies }: DailyLiturgiesPageProps) {
  const [liturgies, setLiturgies] = useState(initialLiturgies);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [date, setDate] = useState(getTodayInputValue);
  const [modeLabel, setModeLabel] = useState("Últimos 7 dias");
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedLiturgy = liturgies[selectedIndex] ?? liturgies[0] ?? null;
  const readingTabs = useMemo(
    () => (selectedLiturgy ? getReadingTabs(selectedLiturgy) : []),
    [selectedLiturgy]
  );
  const activeTab = readingTabs.find((tab) => tab.id === activeTabId) ?? readingTabs[0] ?? null;

  useEffect(() => {
    setActiveTabId(readingTabs[0]?.id ?? null);
  }, [readingTabs]);

  async function loadLastSevenDays() {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchLiturgies("/api/daily-liturgy?periodo=7");

      setLiturgies(data);
      setSelectedIndex(0);
      setModeLabel("Últimos 7 dias");
      setFiltersOpen(false);
    } catch {
      setError("Não foi possível carregar os últimos 7 dias. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDateSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = getDateParams(date);

    if (!params) {
      setError("Escolha uma data válida.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const query = new URLSearchParams({
        dia: String(params.dia).padStart(2, "0"),
        mes: String(params.mes).padStart(2, "0"),
        ano: String(params.ano),
      });
      const data = await fetchLiturgies(`/api/daily-liturgy?${query.toString()}`);

      setLiturgies(data);
      setSelectedIndex(0);
      setModeLabel("Data específica");
      setFiltersOpen(false);
    } catch {
      setError("Não foi possível carregar a liturgia desta data. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-white text-slate-900">

      <section className="mx-auto">
        {selectedLiturgy ? (
          <article className="space-y-6">
            <header className=" bg-primary p-6 text-white shadow-[0_24px_70px_-44px_rgba(9,32,112,0.95)] sm:p-8">
              <p className="text-sm mb-2 font-semibold uppercase tracking-[0.22em] text-secondary">
                Liturgia diária
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  <BookOpen className="h-4 w-4" />
                  {selectedLiturgy.data}
                </p>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                  Cor litúrgica: {selectedLiturgy.cor}
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white">
                {selectedLiturgy.liturgia}
              </h2>

              {/* {selectedLiturgy.oracoes.coleta && (
                <details className="mt-6 rounded-[1rem] border border-white/10 bg-white/8 p-4">
                  <summary className="cursor-pointer text-sm font-semibold uppercase tracking-[0.16em] text-white/75">
                    Oração de coleta
                  </summary>
                  <p className="mt-4 whitespace-pre-line text-sm leading-8 text-white/82">
                    {selectedLiturgy.oracoes.coleta}
                  </p>
                </details>
              )} */}
              <button
                type="button"
                onClick={() => setFiltersOpen((value) => !value)}
                className="inline-flex mt-4 min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/16 sm:w-auto"
                aria-expanded={filtersOpen}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filtros
                <ChevronDown
                  className={["h-4 w-4 transition", filtersOpen ? "rotate-180" : ""].join(" ")}
                />
              </button>
              {filtersOpen && (
                <form
                  onSubmit={handleDateSubmit}
                  className="mt-6 rounded-[1.25rem] border border-white/15 bg-white/10 p-4 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.65)] backdrop-blur"
                >
                  <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        Buscar por data
                      </label>
                      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
                        <input
                          type="date"
                          value={date}
                          onChange={(event) => setDate(event.target.value)}
                          className="min-h-12 rounded-lg border border-white/20 bg-white px-4 text-sm font-medium text-slate-800 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                        />
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-5 text-sm font-bold text-primary transition hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {isLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <CalendarDays className="h-4 w-4" />
                          )}
                          Buscar
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={loadLastSevenDays}
                        disabled={isLoading}
                        className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/16 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Voltar para os últimos 7 dias
                      </button>
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                          Liturgias carregadas
                        </p>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                          {modeLabel} · {liturgies.length}
                        </span>
                      </div>

                      <div className="mt-3 grid max-h-[300px] gap-2 overflow-y-auto pr-1">
                        {liturgies.length > 0 ? (
                          liturgies.map((liturgy, index) => {
                            const isSelected = index === selectedIndex;

                            return (
                              <button
                                key={`${liturgy.data}-${index}`}
                                type="button"
                                onClick={() => {
                                  setSelectedIndex(index);
                                  setFiltersOpen(false);
                                }}
                                className={[
                                  "w-full rounded-lg p-3 text-left transition",
                                  isSelected
                                    ? "bg-secondary text-primary"
                                    : "bg-white/8 text-white hover:bg-white/14",
                                ].join(" ")}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.16em]">
                                      {liturgy.data}
                                    </p>
                                    <p className="mt-1 text-sm font-semibold leading-6">
                                      {liturgy.liturgia}
                                    </p>
                                    <p
                                      className={[
                                        "mt-1 text-xs",
                                        isSelected ? "text-primary/70" : "text-white/60",
                                      ].join(" ")}
                                    >
                                      {getReadingCount(liturgy)} leituras
                                    </p>
                                  </div>
                                  <ChevronRight className="mt-1 h-4 w-4 shrink-0" />
                                </div>
                              </button>
                            );
                          })
                        ) : (
                          <div className="rounded-lg border border-dashed border-white/25 p-5 text-sm leading-7 text-white/70">
                            Nenhuma liturgia encontrada para esta busca.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {error && <p className="mt-4 text-sm leading-6 text-red-100">{error}</p>}
                </form>
              )}
            </header>

            {readingTabs.length > 0 ? (
              <div className="rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_24px_60px_-38px_rgba(15,23,42,0.28)]">
                <div className="overflow-x-auto border-b border-slate-200 p-2">
                  <div className="flex min-w-max gap-2">
                    {readingTabs.map((tab) => {
                      const isActive = tab.id === activeTab?.id;

                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveTabId(tab.id)}
                          className={[
                            "min-h-11 rounded-lg px-4 text-sm font-bold transition",
                            isActive
                              ? "bg-primary text-white"
                              : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                          ].join(" ")}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {activeTab && (
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {activeTab.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-950">
                      {activeTab.reading.referencia}
                    </h3>
                    {activeTab.reading.titulo && (
                      <p className="mt-2 text-sm font-medium leading-7 text-slate-500">
                        {activeTab.reading.titulo}
                      </p>
                    )}

                    {activeTab.id === "salmo" && activeTab.reading.refrao && (
                      <div className="mt-5 rounded-[1rem] bg-secondary/15 p-4 text-sm font-semibold leading-7 text-[#7a4f00]">
                        {activeTab.reading.refrao}
                      </div>
                    )}

                    <div className="mt-7 space-y-4 text-base leading-8 text-slate-700">
                      {formatReadingText(activeTab.reading.texto).map((paragraph, index) => (
                        <p key={`${activeTab.id}-${index}`}>{renderVerseText(paragraph)}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-10 text-sm text-slate-500">
                Nenhuma leitura encontrada para esta liturgia.
              </div>
            )}
          </article>
        ) : (
          <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-10 text-sm text-slate-500">
            Escolha um período ou uma data para ver a liturgia.
          </div>
        )}
      </section>
    </div>
  );
}
