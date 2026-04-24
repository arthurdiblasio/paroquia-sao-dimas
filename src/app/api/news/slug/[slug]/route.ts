import { prisma } from "lib/prisma"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function GET(_req: Request, { params }: Props) {
  const { slug } = await params

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
    return Response.json({ error: "Noticia nao encontrada." }, { status: 404 })
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

  return Response.json({
    article,
    relatedNews,
  })
}
