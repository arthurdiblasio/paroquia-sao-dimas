import Image from "next/image"
import Link from "next/link"

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
  const massHighlights = (mainChurch?.massSchedules ?? []).slice(0, 3)

  return (
    <div className="bg-[#f7f1e6] text-slate-900">
      <section className="relative overflow-hidden bg-[#092070] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(223,152,34,0.28),_transparent_32%),linear-gradient(120deg,_rgba(255,255,255,0.06),_transparent_42%)]" />
        <div className="relative mx-auto grid min-h-[78vh] max-w-[1240px] gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10 lg:py-24">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm tracking-[0.24em] uppercase">
              Paróquia São Dimas
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">
                Fé, comunidade e serviço reunidos em um só lugar.
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-white/80">
                Acompanhe notícias, homilias, horários de missa e a vida pastoral
                da paróquia com conteúdo atualizado diretamente pela equipe
                administrativa.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/agendamentos"
                className="rounded-full bg-[#df9822] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#ebb45a]"
              >
                Solicitar sacramento
              </Link>

              <Link
                href="/noticias"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Ver notícias
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-white/55">
                  Notícias
                </p>
                <p className="mt-3 text-3xl font-semibold">{news.length}</p>
                <p className="mt-2 text-sm text-white/70">
                  publicadas no portal
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-white/55">
                  Pastorais
                </p>
                <p className="mt-3 text-3xl font-semibold">{ministries.length}</p>
                <p className="mt-2 text-sm text-white/70">
                  frentes de atuação ativas
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-white/55">
                  Igrejas
                </p>
                <p className="mt-3 text-3xl font-semibold">{churches.length}</p>
                <p className="mt-2 text-sm text-white/70">
                  locais cadastrados
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#df9822]/20 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 shadow-2xl backdrop-blur-sm">
              <div className="relative h-[420px] w-full overflow-hidden">
                <Image
                  src={heroImage}
                  alt={mainChurch?.name ?? "Paróquia São Dimas"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092070] via-[#092070]/25 to-transparent" />
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/55">
                    Igreja em destaque
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    {mainChurch?.name ?? "Comunidade paroquial"}
                  </h2>
                </div>

                <p className="text-sm leading-7 text-white/75">
                  {mainChurch?.address ??
                    "Cadastre a igreja principal no painel para exibir endereço e horários nesta seção."}
                </p>

                <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4">
                  <p className="text-sm font-semibold text-white/85">
                    Próximos horários
                  </p>

                  <div className="mt-3 space-y-3">
                    {massHighlights.length > 0 ? (
                      massHighlights.map((schedule) => (
                        <div
                          key={`${schedule.dayOfWeek}-${schedule.time}-${schedule.notes ?? ""}`}
                          className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 text-sm last:border-b-0 last:pb-0"
                        >
                          <div>
                            <p className="font-medium text-white">
                              {getDayLabel(schedule.dayOfWeek)}
                            </p>
                            <p className="text-white/60">
                              {schedule.notes?.trim() || "Celebração paroquial"}
                            </p>
                          </div>

                          <span className="rounded-full bg-[#df9822] px-3 py-1 font-semibold text-slate-950">
                            {schedule.time}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-white/65">
                        Os horários de missa aparecerão aqui assim que forem
                        cadastrados.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <h2 className="mt-3 text-3xl font-semibold">Últimas publicações</h2>
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

      {dailyLiturgy && (
        <section className="mx-auto max-w-[1240px] px-6 py-10 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#092070]">
                Liturgia do dia
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Homilia diária e leituras de hoje
              </h2>
            </div>

            <div className="rounded-full bg-[#092070]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#092070]">
              {dailyLiturgy.data}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[2rem] bg-[#092070] p-8 text-white shadow-[0_24px_60px_-32px_rgba(9,32,112,0.7)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                Celebração
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-tight">
                {dailyLiturgy.liturgia}
              </h3>

              <div className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                Cor litúrgica: {dailyLiturgy.cor}
              </div>

              {dailyLiturgy.oracoes.coleta && (
                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/8 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                    Oração de coleta
                  </p>
                  <p className="mt-4 text-sm leading-8 text-white/82">
                    {dailyLiturgy.oracoes.coleta}
                  </p>
                </div>
              )}
            </article>

            <div className="grid gap-5">
              {dailyLiturgy.leituras.primeiraLeitura?.[0] && (
                <article className="rounded-[1.75rem] bg-white p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#092070]">
                    Primeira leitura
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {dailyLiturgy.leituras.primeiraLeitura[0].referencia}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {dailyLiturgy.leituras.primeiraLeitura[0].titulo}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {truncate(dailyLiturgy.leituras.primeiraLeitura[0].texto, 280)}
                  </p>
                </article>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                {dailyLiturgy.leituras.salmo?.[0] && (
                  <article className="rounded-[1.75rem] bg-white p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a4f00]">
                      Salmo
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900">
                      {dailyLiturgy.leituras.salmo[0].referencia}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {truncate(dailyLiturgy.leituras.salmo[0].refrao || dailyLiturgy.leituras.salmo[0].texto, 180)}
                    </p>
                  </article>
                )}

                {dailyLiturgy.leituras.evangelho?.[0] && (
                  <article className="rounded-[1.75rem] bg-[#df9822] p-6 text-slate-950 shadow-[0_24px_60px_-32px_rgba(223,152,34,0.6)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900/65">
                      Evangelho
                    </p>
                    <h3 className="mt-3 text-lg font-semibold">
                      {dailyLiturgy.leituras.evangelho[0].referencia}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-slate-900/75">
                      {dailyLiturgy.leituras.evangelho[0].titulo}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-900/80">
                      {truncate(dailyLiturgy.leituras.evangelho[0].texto, 220)}
                    </p>
                  </article>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#0f172a] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Homilias
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Palavra que continua ecoando</h2>
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
            <h2 className="mt-3 text-3xl font-semibold">Comunidades e celebrações</h2>
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

              <p className="mt-3 text-sm leading-7 text-slate-600">{church.address}</p>

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
            <h2 className="mt-3 text-3xl font-semibold">Serviços e frentes missionárias</h2>
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
