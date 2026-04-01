"use client"

import { NewsPreview } from "@/components/admin/news-preview"

type Data = {
  title: string
  subtitle: string
  content: string
  coverImage?: string
}

function getPreviewData(): Data | null {
  if (typeof window === "undefined") {
    return null
  }

  const stored = localStorage.getItem("preview-news")

  if (!stored) {
    return null
  }

  return JSON.parse(stored)
}

export default function PreviewPage() {
  const data = getPreviewData()

  if (!data) {
    return (
      <div className="p-10 text-center text-gray-400">
        Nenhum preview disponivel
      </div>
    )
  }

  return (
    <NewsPreview
      title={data.title}
      subtitle={data.subtitle}
      content={data.content}
      coverImage={data.coverImage}
    />
  )
}
