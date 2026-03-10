"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { NewsCategory } from "@/types/news-category"

export default function NewNewsPage() {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [categories, setCategories] = useState<NewsCategory[]>([])

  useEffect(() => {
    fetch("/api/news-categories")
      .then((res) => res.json())
      .then((data: NewsCategory[]) => setCategories(data))
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    await fetch("/api/news", {
      method: "POST",
      body: JSON.stringify({
        title,
        slug: title.toLowerCase().replaceAll(" ", "-"),
        content,
        categoryId,
      }),
    })

    router.push("/admin/noticias")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <h1 className="text-2xl font-bold">
        Nova notícia
      </h1>

      <input
        className="w-full border p-2 rounded"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="w-full border p-2 rounded"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option value="">Selecione uma categoria</option>

        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Conteúdo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className="bg-primary text-white px-4 py-2 rounded">
        Salvar
      </button>

    </form>
  )
}