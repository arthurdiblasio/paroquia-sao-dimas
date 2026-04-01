import Image from "next/image"
import Link from "next/link"

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

export async function NewsPage() {
  const news = await prisma.news.findMany({
    where: {
      published: true,
    },
    include: {
      category: true,
    },
    orderBy: [
      {
        publishedAt: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
  })

  const featuredNews = news[0]
  const remainingNews = news.slice(1)

  return (
    <div className="bg-[#f7f1e6] text-slate-900">
      {/* <section className="relative overflow-hidden bg-[#092070] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(223,152,34,0.32),_transparent_28%),linear-gradient(135deg,_rgba(255,255,255,0.05),_transparent_40%)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 py-18 lg:px-10 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm tracking-[0.24em] uppercase">
              Notícias da paróquia
            </div>

            <h1 className="font-serif text-5xl leading-tight sm:text-6xl">
              Acompanhe tudo o que acontece na vida da comunidade.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/80">
              Nesta página você encontra todas as notícias publicadas pela equipe
              administrativa, organizadas em ordem de atualização.
            </p>

            <div className="inline-flex rounded-3xl border border-white/10 bg-white/8 px-6 py-4 backdrop-blur-sm">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/55">
                  Publicações disponíveis
                </p>
                <p className="mt-2 text-3xl font-semibold">{news.length}</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        {featuredNews ? (
          <Link
            href={`/noticias/${featuredNews.slug}`}
            className="block overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.38)]"
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[320px] bg-slate-200">
                {featuredNews.imageUrl ? (
                  <Image
                    src={featuredNews.imageUrl}
                    alt={featuredNews.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#092070,#1d4ed8)] px-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                    Destaque da Paróquia São Dimas
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between space-y-6 p-8 lg:p-10">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-500">
                    <span>{featuredNews.category?.name ?? "Paróquia"}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{formatDate(featuredNews.publishedAt ?? featuredNews.createdAt)}</span>
                  </div>

                  <div>
                    <h2 className="text-4xl font-semibold leading-tight text-slate-900">
                      {featuredNews.title}
                    </h2>

                    {featuredNews.subtitle && (
                      <p className="mt-3 text-lg text-slate-500">
                        {featuredNews.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-sm leading-8 text-slate-600">
                    {truncate(stripHtml(featuredNews.content), 280)}
                  </p>
                </div>

                <div className="inline-flex w-fit rounded-full bg-[#df9822]/18 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a4f00]">
                  Última publicação em destaque
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/70 p-12 text-center text-slate-500">
            Nenhuma notícia publicada ainda. Assim que você publicar no admin,
            elas aparecerão aqui.
          </div>
        )}
      </section>

      {remainingNews.length > 0 && (
        <section className="mx-auto max-w-[1240px] px-6 pb-18 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#092070]">
              Arquivo de notícias
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Todas as publicações</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {remainingNews.map((item) => (
              <Link
                key={item.id}
                href={`/noticias/${item.slug}`}
                className="block overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.38)]"
              >
                <div className="h-56 bg-slate-100">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={720}
                      height={420}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#e6ecff,#c6d3ff)] px-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#092070]/70">
                      Notícias da comunidade
                    </div>
                  )}
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-500">
                    <span>{item.category?.name ?? "Paróquia"}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
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
                    {truncate(stripHtml(item.content), 170)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
