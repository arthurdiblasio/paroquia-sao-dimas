"use client";

import { FormEvent, useMemo, useState } from "react";
import { BookOpen, CalendarDays, ChevronRight, Loader2, RotateCcw } from "lucide-react";

import { DailyLiturgySection } from "@/components/site/daily-liturgy-section";
import type { DailyLiturgyResponse } from "@/lib/daily-liturgy";

type DailyLiturgiesPageProps = {
  initialLiturgies: DailyLiturgyResponse[];
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
    liturgy.leituras.salmo,
    liturgy.leituras.segundaLeitura,
    liturgy.leituras.evangelho,
  ].reduce((total, readings) => total + (readings?.length ?? 0), 0);
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
  const [modeLabel, setModeLabel] = useState("Ultimos 7 dias");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedLiturgy = liturgies[selectedIndex] ?? liturgies[0] ?? null;

  const liturgyStats = useMemo(() => {
    const celebrations = new Set(liturgies.map((item) => item.liturgia).filter(Boolean));

    return {
      days: liturgies.length,
      celebrations: celebrations.size,
    };
  }, [liturgies]);

  async function loadLastSevenDays() {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchLiturgies("/api/daily-liturgy?periodo=7");

      setLiturgies(data);
      setSelectedIndex(0);
      setModeLabel("Ultimos 7 dias");
    } catch {
      setError("Nao foi possivel carregar os ultimos 7 dias. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDateSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = getDateParams(date);

    if (!params) {
      setError("Escolha uma data valida.");
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
      setModeLabel("Data especifica");
    } catch {
      setError("Nao foi possivel carregar a liturgia desta data. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-primary text-white">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              Liturgia diaria
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              A Palavra do dia para acompanhar e rezar
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
              Veja as liturgias recentes da semana ou busque uma leitura por uma
              data especifica.
            </p>
          </div>

          <form
            onSubmit={handleDateSubmit}
            className="self-center rounded-[1.5rem] border border-white/15 bg-white/10 p-5 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.65)] backdrop-blur"
          >
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
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <CalendarDays className="h-4 w-4" />}
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
              Voltar para os ultimos 7 dias
            </button>

            {error && <p className="mt-4 text-sm leading-6 text-red-100">{error}</p>}
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-10 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Periodo</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{modeLabel}</p>
          </div>
          <div className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Dias carregados</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{liturgyStats.days}</p>
          </div>
          <div className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Celebracoes</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{liturgyStats.celebrations}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-8 px-6 pb-8 lg:grid-cols-[360px_1fr] lg:px-10">
        <aside className="h-fit rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.35)] lg:sticky lg:top-24">
          <div className="flex items-center gap-2 px-2 pb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            <BookOpen className="h-4 w-4" />
            Liturgias
          </div>

          <div className="space-y-2">
            {liturgies.length > 0 ? (
              liturgies.map((liturgy, index) => {
                const isSelected = index === selectedIndex;

                return (
                  <button
                    key={`${liturgy.data}-${index}`}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={[
                      "w-full rounded-lg p-4 text-left transition",
                      isSelected
                        ? "bg-primary text-white"
                        : "bg-slate-50 text-slate-900 hover:bg-slate-100",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className={["text-xs font-semibold uppercase tracking-[0.16em]", isSelected ? "text-secondary" : "text-primary"].join(" ")}>
                          {liturgy.data}
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-6">{liturgy.liturgia}</p>
                        <p className={["mt-1 text-xs", isSelected ? "text-white/70" : "text-slate-500"].join(" ")}>
                          {getReadingCount(liturgy)} leituras
                        </p>
                      </div>
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0" />
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="rounded-lg border border-dashed border-slate-300 p-5 text-sm leading-7 text-slate-500">
                Nenhuma liturgia encontrada para esta busca.
              </div>
            )}
          </div>
        </aside>

        <div className="min-w-0">
          {selectedLiturgy ? (
            <DailyLiturgySection dailyLiturgy={selectedLiturgy} />
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-10 text-sm text-slate-500">
              Escolha um periodo ou uma data para ver a liturgia.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
