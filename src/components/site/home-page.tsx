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
        crunchMedias: {
          include: {
            media: true,
          },
          take: 1,
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
      take: 3,
    }),
    getDailyLiturgy(),
  ])

  const bannerImage = "/banner.png"
  const bannerImageMobile = "/banner-md.png"
  const doacaoImage = "/doacao.png"
  const doacaoImageMobile = "/doacao-md.png"
  const featuredHomily = homilies[0]
  const remainingHomilies = homilies.slice(1)
  const remainingCount = Math.max(homilies.length - 1, 0)

  return (
    <div className="bg-white text-slate-900">
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#091c63] text-white">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src={bannerImageMobile}
              alt={mainChurch?.name ?? "Paróquia São Dimas"}
              fill
              priority
              sizes="100vw"
              className="object-cover lg:hidden"
            />
            <Image
              src={bannerImage}
              alt={mainChurch?.name ?? "Paróquia São Dimas"}
              fill
              priority
              sizes="100vw"
              className="hidden lg:block object-cover"
            />
          </div>
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

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Destaques
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">Veja o que está em evidência</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Link
            href="https://www.youtube.com/@paroquiasaodimasvj"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[1.75rem] bg-slate-950 text-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)] transition hover:-translate-y-1"
          >
            <div className="absolute inset-0">
              <Image
                src="/logo.png"
                alt="Canal do YouTube Paróquia São Dimas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/65" />
            </div>
            <div className="relative flex h-full flex-col justify-between p-8">
              <span className="text-xs uppercase tracking-[0.24em] text-secondary">YouTube</span>
              <div>
                <h3 className="text-3xl font-semibold">Canal ao vivo</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  Acompanhe missas, homilias e eventos direto do nosso canal.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/dizimo"
            className="group relative overflow-hidden rounded-[1.75rem] bg-slate-950 text-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)] transition hover:-translate-y-1"
          >
            <div className="absolute inset-0">
              <Image
                src="/doacao.png"
                alt="Dízimo Paróquia São Dimas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/40" />
            </div>
            <div className="relative flex h-full flex-col justify-between p-8">
              <span className="text-xs uppercase tracking-[0.24em] text-secondary">Dízimo</span>
              <div>
                <h3 className="text-3xl font-semibold">Doe com confiança</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  Saiba como sua oferta ajuda a manter a paróquia, pastorais e obras.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/noticias"
            className="group relative overflow-hidden rounded-[1.75rem] bg-slate-950 text-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)] transition hover:-translate-y-1"
          >
            <div className="absolute inset-0">
              <Image
                src={bannerImage}
                alt="Notícias Paróquia São Dimas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/55" />
            </div>
            <div className="relative flex h-full flex-col justify-between p-8">
              <span className="text-xs uppercase tracking-[0.24em] text-secondary">Notícias</span>
              <div>
                <h3 className="text-3xl font-semibold">Últimas publicações</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  Confira as notícias mais recentes da paróquia em um clique.
                </p>
              </div>
            </div>
          </Link>
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
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {news.length > 0 ? (
            news.map((item) => (
              <Link
                key={item.id}
                href={`/noticias/${item.slug}`}
                className="group relative overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.38)]"
              >
                <div className="absolute inset-0">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-[linear-gradient(135deg,#092070,#1d4ed8)]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                </div>

                <div className="relative flex h-[420px] flex-col justify-end p-6">
                  <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                    {item.category?.name ?? "Paróquia"}
                  </div>
                  {item.subtitle && (
                    <p className="mt-6 text-sm uppercase tracking-[0.18em] text-white/80">
                      {item.subtitle}
                    </p>
                  )}
                  <h3 className="mt-3 text-3xl font-semibold text-white drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/75">
                    {truncate(stripHtml(item.content), 120)}
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
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-primary text-white shadow-[0_25px_80px_-45px_rgba(9,32,112,0.95)]">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative h-72 overflow-hidden lg:h-[460px]">
              <Image
                src="/logo.png"
                alt="Canal do YouTube Paróquia São Dimas"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,32,112,0.75),rgba(223,152,34,0.28))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />
            </div>

            <div className="flex flex-col justify-center gap-6 p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary/90">
                Canal do YouTube
              </p>
              <h2 className="text-4xl font-bold leading-tight text-white">
                Acompanhe missas, homilias e eventos ao vivo
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/80">
                Fique mais perto da Casa da Mãe Aparecida com conteúdo exclusivo e
                transmissões ao vivo do nosso canal no YouTube. Uma forma simples de
                se conectar com a comunidade e com a fé, de qualquer lugar.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://www.youtube.com/@paroquiasaodimasvj"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-4 text-sm font-semibold text-primary transition hover:bg-secondary/90"
                >
                  Ver canal no YouTube
                </Link>
                <Link
                  href="/noticias"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Ver notícias recentes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {dailyLiturgy && <DailyLiturgySection dailyLiturgy={dailyLiturgy} />}

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Homilias
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">Palavra que continua ecoando</h2>
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          <aside className="rounded-[1.75rem] border border-slate-200/70 bg-white p-8 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.18)] lg:sticky lg:top-[5.5rem]">
            <div className="flex items-center justify-between gap-3 text-sm uppercase tracking-[0.22em] text-primary">
              <span>Destaque</span>
              <span className="text-slate-500">Últimas homilias</span>
            </div>

            {featuredHomily ? (
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#092070]">
                    {formatDate(featuredHomily.date)}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold text-slate-900">
                    {featuredHomily.title}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-slate-600">
                  {truncate(
                    featuredHomily.description?.trim() ||
                    stripHtml(featuredHomily.content ?? "") ||
                    "A homilia foi publicada e ficará disponível com mais detalhes em breve.",
                    220
                  )}
                </p>

                {featuredHomily.videoUrl && (
                  <a
                    href={featuredHomily.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#df9822]/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#7a4f00] transition hover:bg-[#df9822]/25"
                  >
                    Assistir vídeo
                  </a>
                )}

                {remainingCount > 0 ? (
                  <p className="text-sm leading-7 text-slate-500">
                    Em seguida, apresentamos as {remainingCount} homilias mais recentes após o destaque.
                  </p>
                ) : (
                  <p className="text-sm leading-7 text-slate-500">
                    No momento, esta é a homilia mais recente disponível.
                  </p>
                )}

                <Link
                  href="/admin/homilias"
                  className="inline-flex items-center justify-center rounded-full bg-[#092070] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#0d1a44]"
                >
                  Ver todas as homilias
                </Link>
              </div>
            ) : (
              <div className="space-y-4 text-sm text-slate-500">
                <p>Ainda não há homilias publicadas.</p>
                <p>Retorne mais tarde para ver a palavra que ecoa em nossa comunidade.</p>
              </div>
            )}
          </aside>

          <div className="grid gap-5">
            {remainingHomilies.length > 0 ? (
              remainingHomilies.map((homily) => (
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
                Nenhuma outra homilia recente disponível.
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
              className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70"
            >
              <div className="h-52 overflow-hidden bg-slate-100">
                {church.crunchMedias?.[0]?.media.url ? (
                  <Image
                    src={church.crunchMedias[0].media.url}
                    alt={`Foto da igreja ${church.name}`}
                    width={720}
                    height={340}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#f8fafc,#cbd5e1)] text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {church.name}
                  </div>
                )}
              </div>

              <div className="p-6">
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
        <div className="grid gap-12">

          <Link
            href="/dizimo"
            className="block overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-[0_30px_80px_-55px_rgba(15,23,42,0.85)]"
          >
            <div className="relative h-100">
              <div className="relative h-full w-full">
                <Image
                  src={doacaoImageMobile}
                  alt="Doação Paróquia São Dimas"
                  fill
                  sizes="100vw"
                  className="object-cover lg:hidden"
                />
                <Image
                  src={doacaoImage}
                  alt="Doação Paróquia São Dimas"
                  fill
                  sizes="100vw"
                  className="hidden lg:block object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-950/85" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(223,152,34,0.25),transparent_40%)]" />
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-8 lg:px-10">
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

