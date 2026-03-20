"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { AddressAutocomplete } from "@/components/ui/address-autocomplete"
import { Button } from "@/components/ui/button"
import { ImageUpload } from "@/components/ui/image-upload"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type MassSchedule = {
  dayOfWeek: number
  time: string
  notes?: string
}

type MassScheduleField = keyof MassSchedule
type MassScheduleValue = MassSchedule[MassScheduleField]

type ChurchFormValues = {
  name: string
  address: string
  latitude: number | null
  longitude: number | null
  description: string
  images: string[]
  schedules: MassSchedule[]
}

type Props = {
  mode: "create" | "edit"
  initialValues?: ChurchFormValues
  churchId?: string
}

const defaultValues: ChurchFormValues = {
  name: "",
  address: "",
  latitude: null,
  longitude: null,
  description: "",
  images: [],
  schedules: [],
}

const weekDays = [
  "Domingo",
  "Segunda",
  "Terca",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
]

export function ChurchForm({ mode, initialValues = defaultValues, churchId }: Props) {
  const router = useRouter()

  const [name, setName] = useState(initialValues.name)
  const [address, setAddress] = useState(initialValues.address)
  const [latitude, setLatitude] = useState<number | null>(initialValues.latitude)
  const [longitude, setLongitude] = useState<number | null>(initialValues.longitude)
  const [description, setDescription] = useState(initialValues.description)
  const [images, setImages] = useState<string[]>(initialValues.images)
  const [schedules, setSchedules] = useState<MassSchedule[]>(initialValues.schedules)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function addSchedule() {
    setSchedules((prev) => [...prev, { dayOfWeek: 0, time: "" }])
  }

  function updateSchedule(index: number, field: MassScheduleField, value: MassScheduleValue) {
    setSchedules((prev) =>
      prev.map((schedule, currentIndex) =>
        currentIndex === index
          ? { ...schedule, [field]: value }
          : schedule
      )
    )
  }

  function removeSchedule(index: number) {
    setSchedules((prev) => prev.filter((_, currentIndex) => currentIndex !== index))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const endpoint = mode === "create" ? "/api/churches" : `/api/churches/${churchId}`
    const method = mode === "create" ? "POST" : "PUT"

    setIsSubmitting(true)

    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
        latitude,
        longitude,
        description,
        images,
        schedules,
      }),
    })

    setIsSubmitting(false)

    if (!response.ok) {
      return
    }

    router.push("/admin/igrejas")
    router.refresh()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl space-y-8"
    >
      <h1 className="text-2xl font-semibold">
        {mode === "create" ? "Nova Igreja" : "Editar Igreja"}
      </h1>

      <ImageUpload
        images={images}
        setImages={setImages}
      />

      <Input
        placeholder="Nome da igreja"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <AddressAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={({ address: selectedAddress, lat, lng }) => {
          setAddress(selectedAddress)
          setLatitude(lat)
          setLongitude(lng)
        }}
      />

      <Textarea
        placeholder="Descricao"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Horarios de Missa
          </h2>

          <button
            type="button"
            onClick={addSchedule}
            className="text-sm text-[#092070]"
          >
            + Adicionar
          </button>
        </div>

        {schedules.map((schedule, index) => (
          <div
            key={`${schedule.dayOfWeek}-${schedule.time}-${index}`}
            className="grid items-center gap-4 md:grid-cols-4"
          >
            <select
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 shadow-sm outline-none transition focus:border-[#092070] focus:ring-2 focus:ring-[#092070]/10"
              value={schedule.dayOfWeek}
              onChange={(e) =>
                updateSchedule(index, "dayOfWeek", Number(e.target.value))
              }
            >
              {weekDays.map((day, dayIndex) => (
                <option key={day} value={dayIndex}>
                  {day}
                </option>
              ))}
            </select>

            <Input
              type="time"
              step={60}
              value={schedule.time}
              onChange={(e) => updateSchedule(index, "time", e.target.value)}
            />

            <Input
              placeholder="Observacao"
              value={schedule.notes ?? ""}
              onChange={(e) => updateSchedule(index, "notes", e.target.value)}
            />

            <button
              type="button"
              onClick={() => removeSchedule(index)}
              className="justify-self-start text-sm text-red-500"
            >
              Remover
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-end border-t pt-6">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Salvar"}
        </Button>
      </div>
    </form>
  )
}
