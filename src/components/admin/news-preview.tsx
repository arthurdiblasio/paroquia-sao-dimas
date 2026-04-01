"use client"

type Props = {
  title: string
  subtitle: string
  content: string
  coverImage?: string | null
}

export function NewsPreview({
  title,
  subtitle,
  content,
  coverImage,
}: Props) {
  return (
    <article className="mx-auto max-w-4xl py-2">
      {coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={coverImage}
          alt=""
          className="mb-6 w-full rounded-xl"
        />
      )}

      <h1 className="mb-3 text-4xl font-bold text-gray-900">
        {title || "Titulo da noticia"}
      </h1>

      <h2 className="mb-6 text-xl text-gray-500">
        {subtitle || "Subtitulo da noticia"}
      </h2>

      <div
        className="prose prose-lg max-w-none prose-headings:text-[#092070] prose-a:text-[#DF9822] [&_img]:my-6 [&_img]:block [&_img]:max-w-full [&_img]:rounded-xl [&_img]:shadow-sm [&_img[data-align='center']]:mx-auto [&_img[data-align='right']]:ml-auto [&_img[data-align='left']]:mr-auto"
        dangerouslySetInnerHTML={{
          __html: content || "<p>O conteudo aparecera aqui no preview.</p>",
        }}
      />
    </article>
  )
}
