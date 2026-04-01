"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type HomilyFormValues = {
  title: string
  description: string
  content: string
  videoUrl: string
  date: string
}

type Props = {
  mode: "create" | "edit"
  initialValues?: HomilyFormValues
  homilyId?: string
}

const defaultValues: HomilyFormValues = {
  title: "",
  description: "",
  content: "",
  videoUrl: "",
  date: "",
}

export function HomilyForm({
  mode,
  initialValues = defaultValues,
  homilyId,
}: Props) {
  const router = useRouter()

  const [title, setTitle] = useState(initialValues.title)
  const [description, setDescription] = useState(initialValues.description)
  const [content, setContent] = useState(initialValues.content)
  const [videoUrl, setVideoUrl] = useState(initialValues.videoUrl)
  const [date, setDate] = useState(initialValues.date)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const endpoint = mode === "create" ? "/api/homilies" : `/api/homilies/${homilyId}`
    const method = mode === "create" ? "POST" : "PUT"

    setIsSubmitting(true)

    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        content,
        videoUrl,
        date,
      }),
    })

    setIsSubmitting(false)

    if (!response.ok) {
      return
    }

    router.push("/admin/homilias")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-5xl space-y-8">
      <h1 className="text-2xl font-semibold text-gray-900">
        {mode === "create" ? "Nova Homilia" : "Editar Homilia"}
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Input
          placeholder="Titulo da homilia"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <Textarea
        placeholder="Descricao"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
      />

      <div className="space-y-2">
        <Input
          type="url"
          placeholder="URL do video"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />

        <p className="text-sm text-gray-500">
          Cole o link do video para salvar junto da homilia.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-900">
          Conteudo
        </p>

        <Textarea
          placeholder="Conteudo da homilia"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={12}
        />
      </div>

      <div className="flex justify-end border-t pt-6">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Salvar"}
        </Button>
      </div>
    </form>
  )
}
