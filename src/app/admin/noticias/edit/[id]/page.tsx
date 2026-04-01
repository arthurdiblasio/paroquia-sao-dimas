import { notFound } from "next/navigation"

import { NewsForm } from "@/components/admin/news-form"
import { getPublicationStatusFromPublished } from "@/lib/publication-status"
import { prisma } from "lib/prisma"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function EditNewsPage({ params }: Props) {
  const { id } = await params

  const news = await prisma.news.findUnique({
    where: { id },
  })

  if (!news) {
    notFound()
  }

  return (
    <NewsForm
      mode="edit"
      newsId={news.id}
      initialValues={{
        title: news.title,
        subtitle: news.subtitle ?? "",
        content: news.content,
        categoryId: news.categoryId,
        coverImage: news.imageUrl ?? null,
        status: getPublicationStatusFromPublished(news.published),
      }}
    />
  )
}
