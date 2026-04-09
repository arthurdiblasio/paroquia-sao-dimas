"use client"

import { SetStateAction, useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ImageUpload } from "@/components/ui/image-upload"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  getFinancialReportStatusLabel,
  type FinancialReportStatus,
} from "@/lib/financial-report"
import { type PublicationStatus } from "@/lib/publication-status"

type FinancialReportPhaseFormValues = {
  title: string
  doneDetails: string
  nextDetails: string
  images: string[]
}

type FinancialReportFormValues = {
  title: string
  description: string
  status: FinancialReportStatus
  progressPercentage: string
  publicationStatus: PublicationStatus
  phases: FinancialReportPhaseFormValues[]
}

type Props = {
  mode: "create" | "edit"
  initialValues?: FinancialReportFormValues
  reportId?: string
}

const defaultValues: FinancialReportFormValues = {
  title: "",
  description: "",
  status: "STARTED",
  progressPercentage: "0",
  publicationStatus: "DRAFT",
  phases: [
    {
      title: "",
      doneDetails: "",
      nextDetails: "",
      images: [],
    },
  ],
}

export function FinancialReportForm({
  mode,
  initialValues = defaultValues,
  reportId,
}: Props) {
  const router = useRouter()

  const [title, setTitle] = useState(initialValues.title)
  const [description, setDescription] = useState(initialValues.description)
  const [status, setStatus] = useState<FinancialReportStatus>(initialValues.status)
  const [progressPercentage, setProgressPercentage] = useState(
    initialValues.progressPercentage
  )
  const [publicationStatus, setPublicationStatus] = useState<PublicationStatus>(
    initialValues.publicationStatus
  )
  const [phases, setPhases] = useState(initialValues.phases)
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const displayedProgress = status === "IN_PROGRESS"
    ? progressPercentage
    : status === "FINISHED"
      ? "100"
      : "0"

  function updatePhase(
    phaseIndex: number,
    field: keyof FinancialReportPhaseFormValues,
    value: string | string[]
  ) {
    setPhases((currentPhases) =>
      currentPhases.map((phase, index) =>
        index === phaseIndex
          ? {
              ...phase,
              [field]: value,
            }
          : phase
      )
    )
  }

  function addPhase() {
    setPhases((currentPhases) => [
      ...currentPhases,
      {
        title: "",
        doneDetails: "",
        nextDetails: "",
        images: [],
      },
    ])
  }

  function removePhase(phaseIndex: number) {
    setPhases((currentPhases) => currentPhases.filter((_, index) => index !== phaseIndex))
  }

  function handlePhaseImagesChange(
    phaseIndex: number,
    action: SetStateAction<string[]>
  ) {
    setPhases((currentPhases) =>
      currentPhases.map((phase, index) => {
        if (index !== phaseIndex) {
          return phase
        }

        const nextImages = typeof action === "function"
          ? action(phase.images)
          : action

        return {
          ...phase,
          images: nextImages.slice(0, 5),
        }
      })
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage("")
    setIsSubmitting(true)

    const endpoint = mode === "create"
      ? "/api/financial-reports"
      : `/api/financial-reports/${reportId}`
    const method = mode === "create" ? "POST" : "PUT"

    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        status,
        progressPercentage: status === "IN_PROGRESS" ? Number(progressPercentage) : undefined,
        publicationStatus,
        phases,
      }),
    })

    setIsSubmitting(false)

    if (!response.ok) {
      const data = await response.json().catch(() => null)
      setErrorMessage(
        data?.error ?? "Nao foi possivel salvar a prestacao de contas."
      )
      return
    }

    router.push("/admin/prestacoes-contas")
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">
          {mode === "create"
            ? "Nova prestacao de contas"
            : "Editar prestacao de contas"}
        </h1>

        <p className="text-sm text-gray-500">
          Mostre para a comunidade como o dizimo esta sendo aplicado, sem expor valores.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Input
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value as FinancialReportStatus)}
        >
          <option value="STARTED">Iniciado</option>
          <option value="IN_PROGRESS">Em processo</option>
          <option value="FINISHED">Finalizado</option>
        </Select>
      </div>

      <Textarea
        placeholder="Descricao geral da prestacao de contas"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={5}
        required
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Input
            type="number"
            min={0}
            max={100}
            placeholder="Percentual"
            value={displayedProgress}
            disabled={status !== "IN_PROGRESS"}
            onChange={(e) => setProgressPercentage(e.target.value)}
          />

          <p className="text-xs text-gray-500">
            {status === "IN_PROGRESS"
              ? "Informe o andamento atual entre 1% e 99%."
              : `O percentual fica em ${displayedProgress}% para status ${getFinancialReportStatusLabel(status).toLowerCase()}.`}
          </p>
        </div>

        <div className="space-y-2">
          <Select
            value={publicationStatus}
            onChange={(e) => setPublicationStatus(e.target.value as PublicationStatus)}
          >
            <option value="DRAFT">Rascunho</option>
            <option value="PUBLISHED">Publicado</option>
          </Select>

          <p className="text-xs text-gray-500">
            Somente prestacoes publicadas aparecem para a comunidade.
          </p>
        </div>
      </div>

      <section className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Fases
            </h2>

            <p className="text-sm text-gray-500">
              Em cada fase, voce pode adicionar ate 5 fotos. Se informar o que foi feito,
              adicione pelo menos uma imagem.
            </p>
          </div>

          <button
            type="button"
            onClick={addPhase}
            className="inline-flex items-center gap-2 rounded-lg bg-[#092070] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            <Plus size={16} />
            Adicionar fase
          </button>
        </div>

        <div className="space-y-5">
          {phases.map((phase, index) => (
            <article
              key={`${index}-${phase.title}`}
              className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50/70 p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold text-gray-900">
                  Fase {index + 1}
                </h3>

                <button
                  type="button"
                  onClick={() => removePhase(index)}
                  className="inline-flex items-center gap-2 text-sm text-red-600 transition hover:text-red-700"
                >
                  <Trash2 size={16} />
                  Remover
                </button>
              </div>

              <Input
                placeholder="Titulo da fase"
                value={phase.title}
                onChange={(e) => updatePhase(index, "title", e.target.value)}
                required
              />

              <div className="grid gap-4 md:grid-cols-2">
                <Textarea
                  placeholder="O que foi feito nesta fase (opcional)"
                  value={phase.doneDetails}
                  onChange={(e) => updatePhase(index, "doneDetails", e.target.value)}
                  rows={5}
                />

                <Textarea
                  placeholder="O que sera feito nesta fase (opcional)"
                  value={phase.nextDetails}
                  onChange={(e) => updatePhase(index, "nextDetails", e.target.value)}
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <ImageUpload
                  images={phase.images}
                  multiple
                  setImages={(action) => handlePhaseImagesChange(index, action)}
                />

                <p className="text-xs text-gray-500">
                  {phase.images.length}/5 fotos nesta fase.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {errorMessage && (
        <p className="text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      <div className="flex justify-end border-t pt-6">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Salvar prestacao de contas"}
        </Button>
      </div>
    </form>
  )
}
