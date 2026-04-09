import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { prisma } from "lib/prisma"

function formatDate(value: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(value)
}

type Props = {
  slug: string
}

export async function NewsArticlePage({ slug }: Props) {
  const article = await prisma.news.findFirst({
    where: {
      slug,
      published: true,
    },
    include: {
      category: true,
    },
  })

  if (!article) {
    notFound()
  }

  const relatedNews = await prisma.news.findMany({
    where: {
      published: true,
      id: {
        not: article.id,
      },
    },
    include: {
      category: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 3,
  })

  return (
    <div className=" text-slate-900">

      <section className="mx-auto max-w-[1080px] px-6 py-12 lg:px-10">
        <Link
          href="/noticias"
          className="inline-flex rounded-full border border-primary/20 bg-white/10 px-4 py-2 mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 transition hover:bg-white/15"
        >
          Voltar para notícias
        </Link>
        <article className="overflow-hidden  bg-white ">
          <div className="relative min-h-75 bg-slate-200  sm:min-h-105">
            {article.imageUrl ? (
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill

                sizes="100vw"
                className="object-cover"
                priority
                style={{
                  borderRadius: "1rem",
                  objectFit: "cover"
                }}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#092070,#1d4ed8)] px-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Paróquia São Dimas
              </div>
            )}
          </div>

          <div className="px-4 py-10 sm:px-2">
            <div
              className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-[#092070] prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </section>

      {relatedNews.length > 0 && (
        <section className="mx-auto max-w-270 px-6 pb-5 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary 
            
            ">
              Continue lendo
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em]">Outras notícias</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedNews.map((item) => (
              <Link
                key={item.id}
                href={`/noticias/${item.slug}`}

                className="overflow-hidden  transition hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.38)] rounded-[.8rem] bg-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70"
              >
                <div className="h-48 bg-slate-100">
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

                <div className="space-y-3 p-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {formatDate(item.publishedAt ?? item.createdAt)}
                  </div>

                  <h3 className="text-xl font-bold leading-tight tracking-[-0.03em] text-slate-900">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="text-sm text-slate-500">{item.subtitle}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
