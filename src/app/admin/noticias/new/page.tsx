"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

import dynamic from "next/dynamic"
import { NewsCategory } from "@/types/news-category"
import { ImageUpload } from "@/components/ui/image-upload"

const Editor = dynamic(
  () => import("@/components/ui/editor").then((m) => m.Editor),
  { ssr: false }
)

export default function NewNewsPage() {

  const router = useRouter()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [categories, setCategories] = useState<NewsCategory[]>([])
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    fetch("/api/news-categories")
      .then(res => res.json())
      .then((data: NewsCategory[]) => setCategories(data))
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()

    await fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        slug: title.toLowerCase().replaceAll(" ", "-"),
        content,
        categoryId,
        images
      })
    })

    router.push("/admin/noticias")
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="max-w-4xl space-y-8"
    >

      <h1 className="text-2xl font-semibold text-gray-900">
        Criar notícia
      </h1>

      {/* Título */}
      <Input
        placeholder="Título da notícia"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Editor */}
      <div className="border border-gray-200 rounded-lg shadow-sm">
        <Editor
          value={content}
          onChange={setContent}
        />
      </div>

      {/* Metadados */}
      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="text-sm text-gray-500 mb-2 block">
            Categoria
          </label>

          <Select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >

            <option value="">
              Selecione
            </option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}

          </Select>

        </div>

        <div>
          <label className="text-sm text-gray-500 mb-2 block">
            Imagens
          </label>

          <ImageUpload
            images={images}
            setImages={setImages}
          />

        </div>

      </div>

      {/* Botão */}
      <div>
        <Button>
          Salvar notícia
        </Button>
      </div>

    </form>

  )
}