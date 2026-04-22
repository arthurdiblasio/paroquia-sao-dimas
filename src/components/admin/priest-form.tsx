"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type PriestFormValues = {
  name: string
  birthDate: string
  birthCity: string
  photoUrl: string
  startDate: string
  endDate: string
  deathDate: string
}

type Props = {
  mode: "create" | "edit"
  initialValues?: PriestFormValues
}

const defaultValues: PriestFormValues = {
  name: "",
  birthDate: "",
  birthCity: "",
  photoUrl: "",
  startDate: "",
  endDate: "",
  deathDate: "",
}

export function PriestForm({ mode, initialValues = defaultValues }: Props) {
  const router = useRouter()
  const [name, setName] = useState(initialValues.name)
  const [birthDate, setBirthDate] = useState(initialValues.birthDate)
  const [birthCity, setBirthCity] = useState(initialValues.birthCity)
  const [photoUrl, setPhotoUrl] = useState(initialValues.photoUrl)
  const [startDate, setStartDate] = useState(initialValues.startDate)
  const [endDate, setEndDate] = useState(initialValues.endDate)
  const [deathDate, setDeathDate] = useState(initialValues.deathDate)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsSubmitting(true)

    const response = await fetch("/api/padres", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        birthDate,
        birthCity,
        photoUrl: photoUrl.trim() || null,
        startDate,
        endDate: endDate.trim() || null,
        deathDate: deathDate.trim() || null,
      }),
    })

    setIsSubmitting(false)

    if (!response.ok) {
      return
    }

    router.push("/admin/padres")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {mode === "create" ? "Cadastrar pároco" : "Editar pároco"}
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Registre o histórico de padres que passaram pela paróquia.
        </p>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-gray-700">Nome</span>
        <Input
          placeholder="Nome completo"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-700">Data de nascimento</span>
          <Input
            type="date"
            value={birthDate}
            onChange={(event) => setBirthDate(event.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-700">Cidade de nascimento</span>
          <Input
            placeholder="Cidade"
            value={birthCity}
            onChange={(event) => setBirthCity(event.target.value)}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-gray-700">Foto (URL)</span>
        <Input
          placeholder="https://..."
          value={photoUrl}
          onChange={(event) => setPhotoUrl(event.target.value)}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-700">Início na paróquia</span>
          <Input
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-700">Término do período</span>
          <Input
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-700">Data de falecimento</span>
          <Input
            type="date"
            value={deathDate}
            onChange={(event) => setDeathDate(event.target.value)}
          />
        </label>
      </div>

      <div className="flex justify-end border-t pt-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Salvar pároco"}
        </Button>
      </div>
    </form>
  )
}
