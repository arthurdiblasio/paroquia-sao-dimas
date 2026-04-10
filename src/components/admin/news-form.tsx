"use client"

import { SetStateAction, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"

import { NewsPreview } from "@/components/admin/news-preview"
import { Button } from "@/components/ui/button"
import { ImageUpload } from "@/components/ui/image-upload"
import { Input } from "@/components/ui/input"
import { Modal } from "@/components/ui/modal"
import { Select } from "@/components/ui/select"
import { NewsCategory } from "@/types/news-category"
import { PublicationStatus } from "@/lib/publication-status"

const Editor = dynamic(
  () => import("@/components/ui/editor").then((m) => m.Editor),
  { ssr: false }
)

type NewsFormValues = {
  title: string
  subtitle: string
  content: string
  categoryId: string
  coverImage: string | null
  status: PublicationStatus
}

type Props = {
  mode: "create" | "edit"
  initialValues?: NewsFormValues
  newsId?: string
}

const defaultValues: NewsFormValues = {
  title: "",
  subtitle: "",
  content: "",
  categoryId: "",
  coverImage: null,
  status: "DRAFT",
}

function extractImageUrlsFromContent(html: string) {
  if (typeof window === "undefined") return []

  const parser = new DOMParser()
  const document = parser.parseFromString(html, "text/html")
  const urls = Array.from(document.querySelectorAll("img"))
    .map((image) => image.getAttribute("src")?.trim())
    .filter((src): src is string => Boolean(src))

  return Array.from(new Set(urls))
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

export function NewsForm({
  mode,
  initialValues = defaultValues,
  newsId,
}: Props) {
  const router = useRouter()

  const [title, setTitle] = useState(initialValues.title)
  const [subtitle, setSubtitle] = useState(initialValues.subtitle)
  const [content, setContent] = useState(initialValues.content)
  const [categoryId, setCategoryId] = useState(initialValues.categoryId)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [coverImage, setCoverImage] = useState<string | null>(initialValues.coverImage)
  const [status, setStatus] = useState<PublicationStatus>(initialValues.status)
  const [images, setImages] = useState<string[]>(
    () => extractImageUrlsFromContent(initialValues.content)
  )
  const [categories, setCategories] = useState<NewsCategory[]>([])
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetch("/api/news-categories")
      .then((res) => res.json())
      .then(setCategories)
  }, [])

  function handleCoverImageChange(action: SetStateAction<string[]>) {
    const nextImages = typeof action === "function"
      ? action(coverImage ? [coverImage] : [])
      : action

    setCoverImage(nextImages[0] ?? null)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage("")
    setIsSubmitting(true)

    const slug = slugify(title)
    const contentImages = extractImageUrlsFromContent(content)
    const endpoint = mode === "create" ? "/api/news" : `/api/news/${newsId}`
    const method = mode === "create" ? "POST" : "PUT"

    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        subtitle,
        slug,
        content,
        categoryId,
        status,
        coverImage,
        images: Array.from(new Set([...images, ...contentImages])),
      }),
    })

    setIsSubmitting(false)

    if (!response.ok) {
      const data = await response.json().catch(() => null)
      setErrorMessage(data?.error ?? "Nao foi possivel salvar a noticia.")
      return
    }

    router.push("/admin/noticias")
    router.refresh()
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto max-w-5xl space-y-8">
        <h1 className="text-2xl font-semibold">
          {mode === "create" ? "Criar noticia" : "Editar noticia"}
        </h1>

        <h4 className="text-center text-lg font-medium">
          Capa da Noticia
        </h4>

        <ImageUpload
          images={coverImage ? [coverImage] : []}
          multiple={false}
          setImages={handleCoverImageChange}
        />

        <Input
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Input
          placeholder="Subtitulo"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />

        <Editor
          value={content}
          onChange={(nextContent) => {
            setContent(nextContent)
            setImages(extractImageUrlsFromContent(nextContent))
          }}
        />

        <Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">Categoria</option>

          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </Select>

        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value as PublicationStatus)}
        >
          <option value="DRAFT">Rascunho</option>
          <option value="PUBLISHED">Publicado</option>
        </Select>

        {errorMessage && (
          <p className="text-sm text-red-600">
            {errorMessage}
          </p>
        )}

        <div className="flex justify-between border-t pt-6">
          <button
            type="button"
            onClick={() => setPreviewOpen(true)}
            className="text-sm text-gray-600"
          >
            Preview
          </button>

          <Button disabled={isSubmitting}>
            {isSubmitting
              ? "Salvando..."
              : mode === "create"
                ? "Publicar noticia"
                : "Salvar alteracoes"}
          </Button>
        </div>
      </form>

      <Modal open={previewOpen} onClose={() => setPreviewOpen(false)}>
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Preview da noticia
            </h2>

            <p className="text-sm text-gray-500">
              Veja como o conteudo ficara antes de publicar.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setPreviewOpen(false)}
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50"
          >
            Fechar
          </button>
        </div>

        <NewsPreview
          title={title}
          subtitle={subtitle}
          content={content}
          coverImage={coverImage}
        />
      </Modal>
    </>
  )
}
