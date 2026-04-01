"use client"

import { SetStateAction, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { ImageUpload } from "@/components/ui/image-upload"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type MinistryFormValues = {
  name: string
  description: string
  contactName: string
  contactPhone: string
  imageUrl: string | null
}

type Props = {
  mode: "create" | "edit"
  initialValues?: MinistryFormValues
  ministryId?: string
}

const defaultValues: MinistryFormValues = {
  name: "",
  description: "",
  contactName: "",
  contactPhone: "",
  imageUrl: null,
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)

  if (digits.length <= 2) {
    return digits ? `(${digits}` : ""
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
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

export function MinistryForm({
  mode,
  initialValues = defaultValues,
  ministryId,
}: Props) {
  const router = useRouter()

  const [name, setName] = useState(initialValues.name)
  const [description, setDescription] = useState(initialValues.description)
  const [contactName, setContactName] = useState(initialValues.contactName)
  const [contactPhone, setContactPhone] = useState(formatPhone(initialValues.contactPhone))
  const [imageUrl, setImageUrl] = useState<string | null>(initialValues.imageUrl)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleImageChange(action: SetStateAction<string[]>) {
    const nextImages = typeof action === "function"
      ? action(imageUrl ? [imageUrl] : [])
      : action

    setImageUrl(nextImages[0] ?? null)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const slug = slugify(name)
    const endpoint = mode === "create" ? "/api/ministries" : `/api/ministries/${ministryId}`
    const method = mode === "create" ? "POST" : "PUT"

    setIsSubmitting(true)

    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        slug,
        description: description.trim() || null,
        contactName: contactName.trim() || null,
        contactPhone: contactPhone.trim() || null,
        imageUrl,
      }),
    })

    setIsSubmitting(false)

    if (!response.ok) {
      return
    }

    router.push("/admin/pastorais")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-4xl space-y-8">
      <h1 className="text-2xl font-semibold text-gray-900">
        {mode === "create" ? "Nova Pastoral" : "Editar Pastoral"}
      </h1>

      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-900">
            Imagem da pastoral
          </p>

          <p className="text-sm text-gray-500">
            O envio e opcional. Se quiser, a imagem sera enviada ao Cloudinary.
          </p>
        </div>

        <ImageUpload
          images={imageUrl ? [imageUrl] : []}
          multiple={false}
          setImages={handleImageChange}
        />
      </div>

      <Input
        placeholder="Nome da pastoral"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Textarea
        placeholder="Descricao"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Input
          placeholder="Nome do responsavel"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />

        <Input
          placeholder="Telefone para contato"
          value={contactPhone}
          onChange={(e) => setContactPhone(formatPhone(e.target.value))}
          inputMode="numeric"
          maxLength={15}
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
