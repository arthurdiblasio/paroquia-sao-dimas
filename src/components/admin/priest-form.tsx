"use client"

import { SetStateAction, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { ImageUpload } from "@/components/ui/image-upload"
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

function getDateInputValue(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

function getPastMaxDate() {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  return getDateInputValue(yesterday)
}

function getNextDateInputValue(value: string) {
  if (!value) {
    return undefined
  }

  const date = new Date(`${value}T00:00:00`)

  if (Number.isNaN(date.getTime())) {
    return undefined
  }

  date.setDate(date.getDate() + 1)

  return getDateInputValue(date)
}

function validatePriestDates({
  birthDate,
  startDate,
  endDate,
  deathDate,
}: Pick<PriestFormValues, "birthDate" | "startDate" | "endDate" | "deathDate">) {
  const today = getDateInputValue(new Date())
  const filledDates = [
    { value: birthDate, label: "A data de nascimento" },
    { value: startDate, label: "A data de inicio na paroquia" },
    { value: endDate, label: "A data de termino" },
    { value: deathDate, label: "A data de falecimento" },
  ].filter((item) => item.value)

  const futureOrTodayDate = filledDates.find((item) => item.value >= today)

  if (futureOrTodayDate) {
    return `${futureOrTodayDate.label} precisa ser menor que hoje.`
  }

  if (birthDate && startDate && startDate <= birthDate) {
    return "A data de inicio na paroquia precisa ser maior que a data de nascimento."
  }

  if (endDate && startDate && endDate <= startDate) {
    return "A data de termino precisa ser maior que a data de inicio na paroquia."
  }

  return null
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
  const [errorMessage, setErrorMessage] = useState("")
  const pastMaxDate = getPastMaxDate()
  const startMinDate = getNextDateInputValue(birthDate)
  const endMinDate = getNextDateInputValue(startDate)

  function handlePhotoChange(action: SetStateAction<string[]>) {
    const nextImages = typeof action === "function"
      ? action(photoUrl ? [photoUrl] : [])
      : action

    setPhotoUrl(nextImages[0] ?? "")
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationMessage = validatePriestDates({
      birthDate,
      startDate,
      endDate,
      deathDate,
    })

    if (validationMessage) {
      setErrorMessage(validationMessage)
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

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
      const data = await response.json().catch(() => null)
      setErrorMessage(data?.error ?? "Nao foi possivel salvar o paroco.")
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
            max={pastMaxDate}
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
        <span className="mb-2 block text-sm font-medium text-gray-700">Foto</span>
        <ImageUpload
          images={photoUrl ? [photoUrl] : []}
          fileType="image"
          multiple={false}
          setImages={handlePhotoChange}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-700">Início na paróquia</span>
          <Input
            type="date"
            min={startMinDate}
            max={pastMaxDate}
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-700">Término do período</span>
          <Input
            type="date"
            min={endMinDate}
            max={pastMaxDate}
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-700">Data de falecimento</span>
          <Input
            type="date"
            max={pastMaxDate}
            value={deathDate}
            onChange={(event) => setDeathDate(event.target.value)}
          />
        </label>
      </div>

      {errorMessage && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <div className="flex justify-end border-t pt-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Salvar pároco"}
        </Button>
      </div>
    </form>
  )
}
