import { NewsArticlePage } from "@/components/site/news-article-page"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function PublicNewsArticlePage({ params }: Props) {
  const { slug } = await params

  return <NewsArticlePage slug={slug} />
}
