"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"

import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ImageUpload } from "@/components/ui/image-upload"
import { Modal } from "@/components/ui/modal"
import { NewsCategory } from "@/types/news-category"

const Editor = dynamic(
  () => import("@/components/ui/editor").then((m) => m.Editor),
  { ssr: false }
)

export default function NewNewsPage() {

  const router = useRouter()

  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [content, setContent] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [previewOpen, setPreviewOpen] = useState(false)
  const [coverImage, setCoverImage] = useState<string | null>(null)
  const [images, setImages] = useState<string[]>([])

  const [categories, setCategories] = useState<NewsCategory[]>([])

  useEffect(() => {
    fetch("/api/news-categories")
      .then(res => res.json())
      .then(setCategories)
  }, [])

  function handlePreview() {

    const data = {
      title,
      subtitle,
      content,
      coverImage
    }

    localStorage.setItem("preview-news", JSON.stringify(data))

    window.open("/admin/noticias/preview", "_blank")
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()

    const slug = title.toLowerCase().replaceAll(" ", "-")

    await fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        subtitle,
        slug,
        content,
        categoryId,
        coverImage,
        images
      })
    })

    router.push("/admin/noticias")
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto space-y-8"
    >

      <h1 className="text-2xl font-semibold">
        Criar notícia
      </h1>

      {/* CAPA */}
      <ImageUpload
        images={coverImage ? [coverImage] : []}
        setImages={(urls) => setCoverImage(urls[0] ?? null)}
      />

      {/* TÍTULO */}
      <Input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* SUBTÍTULO */}
      <Input
        placeholder="Subtítulo"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />

      {/* EDITOR */}
      <Editor value={content} onChange={setContent} />

      {/* CONFIG */}
      <Select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option value="">Categoria</option>

        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </Select>

      {/* BOTÕES */}
      <div className="flex justify-between pt-6 border-t">

        <button
          type="button"
          onClick={() => setPreviewOpen(true)}
          className="text-sm text-gray-600"
        >
          Preview
        </button>

        <Button>
          Publicar notícia
        </Button>

      </div>

    </form>
  )
}