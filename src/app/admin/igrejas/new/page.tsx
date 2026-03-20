"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { AddressAutocomplete } from "@/components/ui/address-autocomplete"
import { ImageUpload } from "@/components/ui/image-upload"

type MassSchedule = {
  dayOfWeek: number
  time: string
  notes?: string
}

type MassScheduleField = keyof MassSchedule
type MassScheduleValue = MassSchedule[MassScheduleField]

export default function NewChurchPage() {

  const router = useRouter()

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)
  const [description, setDescription] = useState("")
  const [images, setImages] = useState<string[]>([])

  const [schedules, setSchedules] = useState<MassSchedule[]>([])

  function addSchedule() {
    setSchedules(prev => [
      ...prev,
      { dayOfWeek: 0, time: "" }
    ])
  }

  function updateSchedule(index: number, field: MassScheduleField, value: MassScheduleValue) {
    const updated = [...schedules]
    updated[index][field] = value
    setSchedules(updated)
  }

  function removeSchedule(index: number) {
    setSchedules(prev => prev.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await fetch("/api/churches", {
      method: "POST",
      body: JSON.stringify({
        name,
        address,
        latitude,
        longitude,
        description,
        images,
        schedules
      })
    })

    router.push("/admin/igrejas")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto space-y-8"
    >

      <h1 className="text-2xl font-semibold">
        Nova Igreja
      </h1>

      <ImageUpload
        images={images}
        setImages={setImages}
      />

      {/* NOME */}
      <Input
        placeholder="Nome da igreja"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <AddressAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={({ address, lat, lng }) => {
          setAddress(address)
          setLatitude(lat)
          setLongitude(lng)
        }}
      />

      {/* DESCRIÇÃO */}
      <Textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* HORÁRIOS */}
      <div className="space-y-4">

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Horários de Missa
          </h2>

          <button
            type="button"
            onClick={addSchedule}
            className="text-sm text-primary"
          >
            + Adicionar
          </button>
        </div>

        {schedules.map((schedule, index) => (

          <div
            key={index}
            className="grid grid-cols-4 gap-4 items-center"
          >

            {/* DIA */}
            <select
              className="border rounded-lg px-3 py-2"
              value={schedule.dayOfWeek}
              onChange={(e) =>
                updateSchedule(index, "dayOfWeek", Number(e.target.value))
              }
            >
              <option value={0}>Domingo</option>
              <option value={1}>Segunda</option>
              <option value={2}>Terça</option>
              <option value={3}>Quarta</option>
              <option value={4}>Quinta</option>
              <option value={5}>Sexta</option>
              <option value={6}>Sábado</option>
            </select>

            {/* HORA */}
            <Input
              type="time"
              step={60}
              value={schedule.time}
              onChange={(e) =>
                updateSchedule(index, "time", e.target.value)
              }
            />

            {/* OBS */}
            <Input
              placeholder="Observação"
              value={schedule.notes ?? ""}
              onChange={(e) =>
                updateSchedule(index, "notes", e.target.value)
              }
            />

            {/* REMOVER */}
            <button
              type="button"
              onClick={() => removeSchedule(index)}
              className="text-red-500"
            >
              Remover
            </button>

          </div>

        ))}

      </div>

      {/* BOTÃO */}
      <div className="pt-6 border-t flex justify-end">
        <Button>
          Salvar
        </Button>
      </div>

    </form>
  )
}
