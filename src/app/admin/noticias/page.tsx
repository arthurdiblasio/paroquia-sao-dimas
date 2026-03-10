"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { News } from "@/types/news"

export default function NoticiasPage() {
  const [news, setNews] = useState<News[]>([])

  useEffect(() => {
    fetch("/api/news")
      .then(res => res.json())
      .then(setNews)
  }, [])

  return (
    <div>

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Notícias</h1>

        <Link
          href="/admin/noticias/new"
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Nova notícia
        </Link>
      </div>

      <div className="space-y-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white border rounded flex justify-between"
          >
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500">
                {item.category?.name}
              </p>
            </div>

            <Link
              href={`/admin/noticias/edit/${item.id}`}
              className="text-primary"
            >
              Editar
            </Link>
          </div>
        ))}
      </div>

    </div>
  )
}