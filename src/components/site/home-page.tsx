import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock3, Cross } from "lucide-react"

import { DailyLiturgySection } from "@/components/site/daily-liturgy-section"
import { getDailyLiturgy } from "@/lib/daily-liturgy"
import { prisma } from "lib/prisma"

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
}

function truncate(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value
  }

  return `${value.slice(0, maxLength).trimEnd()}...`
}

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(value)
}

function getDayLabel(dayOfWeek: number) {
  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]

  return days[dayOfWeek] ?? "Dia não informado"
}

export async function HomePage() {
  const [mainChurch, churches, ministries, news, homilies, dailyLiturgy] = await Promise.all([
    prisma.church.findFirst({
      where: {
        isMainChurch: true,
      },
      include: {
        massSchedules: {
          orderBy: [{ dayOfWeek: "asc" }, { time: "asc" }],
        },
        crunchMedias: {
          include: {
            media: true,
          },
          take: 1,
        },
      },
    }),
    prisma.church.findMany({
      include: {
        massSchedules: {
          orderBy: [{ dayOfWeek: "asc" }, { time: "asc" }],
        },
      },
      orderBy: [{ isMainChurch: "desc" }, { name: "asc" }],
      take: 3,
    }),
    prisma.ministry.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
    }),
    prisma.news.findMany({
      where: {
        published: true,
      },
      include: {
        category: true,
      },
      orderBy: {
        publishedAt: "desc",
      },
      take: 3,
    }),
    prisma.homily.findMany({
      where: {
        published: true,
      },
      orderBy: {
        date: "desc",
      },
      take: 2,
    }),
    getDailyLiturgy(),
  ])

  const heroImage = mainChurch?.crunchMedias[0]?.media.url ?? "/logo.png"

  return (
    <div className="bg-white text-slate-900">
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#091c63] text-white">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={mainChurch?.name ?? "Paróquia São Dimas"}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,28,99,0.78),rgba(9,28,99,0.68)),linear-gradient(90deg,rgba(9,28,99,0.72),rgba(12,26,86,0.35),rgba(12,26,86,0.72))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom,rgba(223,152,34,0.18),transparent_24%)]" />


        <div className="relative mx-auto flex w-full max-w-full flex-col items-center px-6 py-16 text-center lg:px-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-secondary/55 bg-white/10 px-5 py-3 text-sm font-semibold text-secondary shadow-[0_18px_50px_-30px_rgba(223,152,34,0.9)] backdrop-blur-md">
            <Cross className="h-4 w-4" />
            <span>Bem-vindo à nossa comunidade</span>
          </div>

          <div className="mt-10 max-w-5xl">
            <h1 className="text-7xl font-extrabold leading-[0.92] tracking-[-0.05em] text-white">
              <span className="block font-bold text-white">
                Paróquia
              </span>
              <span className="mt-3 block font-bold text-secondary">
                São Dimas
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-white/88  md:leading-[1.7]">
              Uma comunidade de fé, esperança e amor. Venha fazer parte da nossa
              família paroquial e crescer na vida espiritual.
            </p>
          </div>

          <div className="mt-12 flex w-full max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/igrejas"
              className="inline-flex min-h-18 w-full items-center justify-center gap-3 rounded-[1.4rem] border-0 bg-secondary px-8 py-5 text-lg font-bold text-primary shadow-[0_25px_60px_-28px_rgba(223,152,34,0.95)] outline-none transition hover:-translate-y-0.5 hover:bg-secondary sm:w-auto"
            >
              <Clock3 className="h-5 w-5" />
              <span>Horários de Missa</span>
            </Link>

            <Link
              href="/agendamentos"
              className="inline-flex min-h-18 w-full items-center justify-center gap-3 rounded-[1.4rem] border border-white/30 bg-white/12 px-8 py-5 text-lg font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/18 sm:w-auto"
            >
              <span>Agendar Sacramento</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <div data-loc="client/src/pages/Home.tsx:86" className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"><div data-loc="client/src/pages/Home.tsx:87" className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2"><div data-loc="client/src/pages/Home.tsx:88" className="w-1 h-3 rounded-full bg-white/60"></div></div></div>

        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] bg-white p-8 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/70">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#092070]">
              Comunhão
            </p>
            <h3 className="mt-4 text-2xl font-semibold">Vida litúrgica ativa</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Horários, homilias e informações pastorais reunidos para facilitar
              a participação da comunidade.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-[#df9822] p-8 text-slate-950 shadow-[0_24px_60px_-32px_rgba(223,152,34,0.6)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">
              Presença
            </p>
            <h3 className="mt-4 text-2xl font-semibold">Informação que chega</h3>
            <p className="mt-3 text-sm leading-7 text-slate-900/80">
              As notícias publicadas no administrativo alimentam automaticamente
              a página pública com mais agilidade.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-[#0f172a] p-8 text-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.7)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Serviço
            </p>
            <h3 className="mt-4 text-2xl font-semibold">Canal aberto para pedidos</h3>
            <p className="mt-3 text-sm leading-7 text-white/72">
              A área de agendamentos fica pronta para acolher batismos,
              casamentos e demais solicitações pastorais.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#092070]">
              Notícias
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">Últimas publicações</h2>
          </div>

          <Link href="/noticias" className="text-sm font-semibold text-[#092070]">
            Ver todas
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {news.length > 0 ? (
            news.map((item) => (
              <Link
                key={item.id}
                href={`/noticias/${item.slug}`}
                className="block overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.38)]"
              >
                <div className="h-56 bg-slate-200">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={720}
                      height={420}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#092070,#1d4ed8)] text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                      Paróquia São Dimas
                    </div>
                  )}
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-slate-500">
                    <span>{item.category?.name ?? "Paróquia"}</span>
                    <span>{formatDate(item.publishedAt ?? item.createdAt)}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="mt-2 text-sm text-slate-500">{item.subtitle}</p>
                    )}
                  </div>

                  <p className="text-sm leading-7 text-slate-600">
                    {truncate(stripHtml(item.content), 150)}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white/70 p-10 text-sm text-slate-500 lg:col-span-3">
              Nenhuma notícia publicada ainda. Assim que você publicar no admin,
              ela aparecerá aqui.
            </div>
          )}
        </div>
      </section>

      {dailyLiturgy && <DailyLiturgySection dailyLiturgy={dailyLiturgy} />}

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#0f172a] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Homilias
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em]">Palavra que continua ecoando</h2>
            <p className="mt-4 text-sm leading-7 text-white/72">
              As homilias mais recentes publicadas pela equipe ficam disponíveis
              para consulta com data e link do vídeo.
            </p>
          </div>

          <div className="grid gap-5">
            {homilies.length > 0 ? (
              homilies.map((homily) => (
                <article
                  key={homily.id}
                  className="rounded-[1.75rem] bg-white p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#092070]">
                      {formatDate(homily.date)}
                    </p>

                    {homily.videoUrl && (
                      <a
                        href={homily.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-[#df9822]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7a4f00] transition hover:bg-[#df9822]/25"
                      >
                        Assistir vídeo
                      </a>
                    )}
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    {homily.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {truncate(
                      homily.description?.trim() ||
                      stripHtml(homily.content ?? "") ||
                      "A homilia foi publicada e ficará disponível com mais detalhes em breve.",
                      190
                    )}
                  </p>
                </article>
              ))
            ) : (
              <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white/70 p-10 text-sm text-slate-500">
                Nenhuma homilia publicada ainda.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#092070]">
              Igrejas
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">Comunidades e celebrações</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {churches.map((church) => (
            <article
              key={church.id}
              className="rounded-[1.75rem] bg-white p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-slate-900">{church.name}</h3>
                {church.isMainChurch && (
                  <span className="rounded-full bg-[#092070]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#092070]">
                    Matriz
                  </span>
                )}
              </div>

              <div className="mt-3 flex-col flex items-start justify-between gap-4">
                <p className="text-sm leading-7 text-slate-600">{church.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#092070]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#092070] transition hover:bg-[#092070]/14"
                >
                  Ver no mapa
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="mt-6 space-y-3">
                {church.massSchedules.length > 0 ? (
                  church.massSchedules.slice(0, 3).map((schedule) => (
                    <div
                      key={`${church.id}-${schedule.dayOfWeek}-${schedule.time}-${schedule.notes ?? ""}`}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {getDayLabel(schedule.dayOfWeek)}
                        </p>
                        <p className="text-xs text-slate-500">
                          {schedule.notes?.trim() || "Horário de missa"}
                        </p>
                      </div>

                      <span className="text-sm font-semibold text-[#092070]">
                        {schedule.time}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">
                    Os horários ainda não foram informados.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#092070]">
              Pastorais
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">Serviços e frentes missionárias</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ministries.length > 0 ? (
            ministries.map((ministry) => (
              <article
                key={ministry.id}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70"
              >
                <div className="h-44 bg-slate-100">
                  {ministry.imageUrl ? (
                    <Image
                      src={ministry.imageUrl}
                      alt={ministry.name}
                      width={560}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#f4e4c2,#df9822)] px-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-900/70">
                      {ministry.name}
                    </div>
                  )}
                </div>

                <div className="space-y-3 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {ministry.name}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {truncate(
                      ministry.description?.trim() ||
                      "Esta pastoral já está cadastrada e pode ganhar uma descrição mais completa no painel.",
                      120
                    )}
                  </p>

                  {(ministry.contactName || ministry.contactPhone) && (
                    <div className="border-t border-slate-100 pt-4 text-sm text-slate-500">
                      {ministry.contactName && <p>{ministry.contactName}</p>}
                      {ministry.contactPhone && <p>{ministry.contactPhone}</p>}
                    </div>
                  )}
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white/70 p-10 text-sm text-slate-500 md:col-span-2 xl:col-span-4">
              Nenhuma pastoral cadastrada ainda.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

