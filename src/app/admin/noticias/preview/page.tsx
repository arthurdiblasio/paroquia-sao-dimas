"use client"

type Data = {
  title: string
  subtitle: string
  content: string
  coverImage?: string
}

function getPreviewData(): Data | null {
  if (typeof window === "undefined") return null

  const stored = localStorage.getItem("preview-news")

  if (!stored) return null

  return JSON.parse(stored)
}

export default function PreviewPage() {

  const data = getPreviewData()

  if (!data) {
    return (
      <div className="p-10 text-center text-gray-400">
        Nenhum preview disponível
      </div>
    )
  }

  return (
    <article className="max-w-4xl mx-auto py-10">

      {/* CAPA */}
      {data.coverImage && (
        <img
          src={data.coverImage}
          className="rounded-xl mb-6 w-full"
        />
      )}

      {/* TÍTULO */}
      <h1 className="text-4xl font-bold mb-3">
        {data.title}
      </h1>

      {/* SUBTÍTULO */}
      <h2 className="text-xl text-gray-500 mb-6">
        {data.subtitle}
      </h2>

      {/* CONTEÚDO */}
      <div
        className="prose prose-lg max-w-none prose-headings:text-[#092070] prose-a:text-[#DF9822]"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />

    </article>
  )
}