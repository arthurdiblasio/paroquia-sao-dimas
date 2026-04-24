import { notFound } from "next/navigation"

import { NewsForm } from "@/components/admin/news-form"
import { fetchInternalApiOrNull } from "@/lib/internal-api"
import { getPublicationStatusFromPublished } from "@/lib/publication-status"

type NewsItem = {
  id: string
  title: string
  subtitle: string | null
  content: string
  categoryId: string
  imageUrl: string | null
  published: boolean
}

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function EditNewsPage({ params }: Props) {
  const { id } = await params

  const news = await fetchInternalApiOrNull<NewsItem>(`/api/news/${id}`)

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
