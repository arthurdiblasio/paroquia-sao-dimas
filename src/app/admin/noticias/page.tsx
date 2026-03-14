"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Pencil, Trash } from "lucide-react"
import { SearchInput } from "@/components/ui/search-input"
import { Select } from "@/components/ui/select"
import { Table } from "@/components/ui/table"

type News = {
  id: string
  title: string
  published: boolean
  createdAt: string
  category?: {
    name: string
  }
}

export default function NoticiasPage() {

  const [news, setNews] = useState<News[]>([])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  async function loadNews() {
    const res = await fetch("/api/news")
    const data: News[] = await res.json()

    setNews(data)
  }

  async function deleteNews(id: string) {

    const confirmDelete = confirm("Deseja excluir esta notícia?")

    if (!confirmDelete) return

    await fetch(`/api/news/${id}`, {
      method: "DELETE"
    })

    loadNews()
  }

  useEffect(() => {
    loadNews()
  }, [])

  const filteredNews = news
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) => {
      if (filter === "published") return item.published
      if (filter === "draft") return !item.published
      return true
    })

  return (
    <div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Notícias
          </h1>

          <p className="text-sm text-gray-500">
            Gerencie as notícias da paróquia
          </p>
        </div>

        <Link
          href="/admin/noticias/new"
          className="bg-[#092070] text-white px-4 py-2 rounded-md text-sm hover:opacity-90"
        >
          Nova notícia
        </Link>

      </div>

      {/* Busca e filtro */}
      <div className="flex gap-4 mb-6">

        <SearchInput
          placeholder="Buscar notícia..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />


        <Select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">Todos</option>
          <option value="published">Publicados</option>
          <option value="draft">Rascunhos</option>
        </Select>
      </div>

      {/* Tabela */}
      <Table>

        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="p-4 text-left">Título</th>
            <th className="p-4 text-left">Categoria</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Data</th>
            <th className="p-4 text-right"></th>
          </tr>
        </thead>

        <tbody>

          {filteredNews.map((item) => (

            <tr
              key={item.id}
              className="border-t hover:bg-gray-50"
            >

              <td className="p-4 font-medium text-gray-800">
                {item.title}
              </td>

              <td className="p-4 text-gray-600">
                {item.category?.name ?? "-"}
              </td>

              <td className="p-4">

                {item.published ? (
                  <span className="text-green-600">
                    Publicado
                  </span>
                ) : (
                  <span className="text-gray-400">
                    Rascunho
                  </span>
                )}

              </td>

              <td className="p-4 text-gray-600">
                {new Date(item.createdAt).toLocaleDateString()}
              </td>

              <td className="p-4 flex justify-end gap-4">

                <Link
                  href={`/admin/noticias/edit/${item.id}`}
                  className="flex items-center gap-1 text-[#092070]"
                >
                  <Pencil size={16} />
                  Editar
                </Link>

                <button
                  onClick={() => deleteNews(item.id)}
                  className="flex items-center gap-1 text-red-500"
                >
                  <Trash size={16} />
                  Excluir
                </button>

              </td>

            </tr>

          ))}

          {filteredNews.length === 0 && (
            <tr>
              <td colSpan={5} className="p-6 text-center text-gray-400">
                Nenhuma notícia encontrada
              </td>
            </tr>
          )}

        </tbody>

      </Table>

    </div>
  )
}