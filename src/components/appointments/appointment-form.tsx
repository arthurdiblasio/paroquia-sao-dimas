"use client"

import { useMemo, useState } from "react"
import { CalendarDays, CheckCircle2, FileText, HeartHandshake } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Modal } from "@/components/ui/modal"
import { Textarea } from "@/components/ui/textarea"
import { AddressAutocomplete } from "@/components/ui/address-autocomplete"

type AppointmentType = "BATISMO" | "CASAMENTO"

type TypeOption = {
  value: AppointmentType
  title: string
  description: string
}

type DocumentField = {
  key: string
  label: string
  helper: string
  required: boolean
}

type UploadedDocument = {
  url: string
  fileName: string
}

type BaptismDetails = {
  childName: string
  childBirthDate: string
  fatherName: string
  motherName: string
  residentialAddress: string
  residentialAddressLatitude: number | null
  residentialAddressLongitude: number | null
  contactPhone: string
  godfatherName: string
  godmotherName: string
}

const acceptedDocumentExtensions = [".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png", ".webp"]
const acceptedDocumentMimeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/webp",
]

const acceptedDocumentInput = [
  ...acceptedDocumentExtensions,
  ...acceptedDocumentMimeTypes,
].join(",")

const typeOptions: TypeOption[] = [
  {
    value: "BATISMO",
    title: "Batismo",
    description: "Preencha os dados da familia e envie cada documento no campo correspondente.",
  },
  {
    value: "CASAMENTO",
    title: "Casamento",
    description: "Envie a documentacao exigida para a paroquia iniciar a conferencia do processo.",
  },
]

const marriageDocumentFields: DocumentField[] = [
  {
    key: "certidao_batismo_noivo",
    label: "Certidao de batismo do noivo",
    helper: "Emitida ha menos de 6 meses na paroquia.",
    required: true,
  },
  {
    key: "certidao_batismo_noiva",
    label: "Certidao de batismo da noiva",
    helper: "Emitida ha menos de 6 meses na paroquia.",
    required: true,
  },
  {
    key: "rg_cpf_noivo",
    label: "RG/CPF do noivo",
    helper: "Envie um unico arquivo em PDF, DOC ou DOCX.",
    required: true,
  },
  {
    key: "rg_cpf_noiva",
    label: "RG/CPF da noiva",
    helper: "Envie um unico arquivo em PDF, DOC ou DOCX.",
    required: true,
  },
  {
    key: "comprovante_residencia",
    label: "Comprovante de residencia",
    helper: "Pode ser conta recente ou documento equivalente.",
    required: true,
  },
  {
    key: "certificado_curso_noivo",
    label: "Certificado do curso do noivo",
    helper: "Envie um unico arquivo em PDF, DOC ou DOCX.",
    required: true,
  },
  {
    key: "certificado_curso_noiva",
    label: "Certificado do curso da noiva",
    helper: "Envie um unico arquivo em PDF, DOC ou DOCX.",
    required: true,
  },
  {
    key: "processo_civil",
    label: "Processo do civil",
    helper: "Envie somente se esse documento se aplicar ao caso.",
    required: false,
  },
]

const baptismDocumentFields: DocumentField[] = [
  {
    key: "certidao_crianca",
    label: "Certidão da criança",
    helper: "Envie um unico arquivo em PDF, DOC ou DOCX.",
    required: true,
  },
  {
    key: "comprovante_endereco",
    label: "Comprovante de endereço",
    helper: "Envie um unico arquivo em PDF, DOC ou DOCX.",
    required: true,
  },
  {
    key: "identidade_padrinho_batismo",
    label: "Identidade do padrinho",
    helper: "Envie um unico arquivo em PDF, DOC ou DOCX.",
    required: true,
  },
  {
    key: "identidade_madrinha_batismo",
    label: "Identidade da madrinha",
    helper: "Envie um unico arquivo em PDF, DOC ou DOCX.",
    required: true,
  },
  {
    key: "identidade_padrinho_consagracao_1",
    label: "Identidade do padrinho de consagração 1",
    helper: "Envie um unico arquivo em PDF, DOC ou DOCX.",
    required: false,
  },
  {
    key: "identidade_padrinho_consagracao_2",
    label: "Identidade do padrinho de consagração 2",
    helper: "Envie um unico arquivo em PDF, DOC ou DOCX.",
    required: false,
  },
]

const allDocumentFields = [...marriageDocumentFields, ...baptismDocumentFields]

function createEmptyUploads() {
  return Object.fromEntries(
    allDocumentFields.map((field) => [field.key, null as UploadedDocument | null])
  ) as Record<string, UploadedDocument | null>
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

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function hasAllowedDocumentExtension(fileName: string) {
  const lowerFileName = fileName.toLowerCase()
  return acceptedDocumentExtensions.some((extension) => lowerFileName.endsWith(extension))
}

function getTomorrowDateString() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const year = tomorrow.getFullYear()
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0")
  const day = String(tomorrow.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

export function AppointmentForm() {
  const [type, setType] = useState<AppointmentType>("BATISMO")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [preferredDate, setPreferredDate] = useState("")
  const [notes, setNotes] = useState("")
  const [documentUploads, setDocumentUploads] = useState<Record<string, UploadedDocument | null>>(
    createEmptyUploads()
  )
  const [baptismDetails, setBaptismDetails] = useState<BaptismDetails>({
    childName: "",
    childBirthDate: "",
    fatherName: "",
    motherName: "",
    residentialAddress: "",
    residentialAddressLatitude: null,
    residentialAddressLongitude: null,
    contactPhone: "",
    godfatherName: "",
    godmotherName: "",
  })
  const [uploadingFieldKey, setUploadingFieldKey] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const selectedType = useMemo(
    () => typeOptions.find((option) => option.value === type),
    [type]
  )
  const minimumPreferredDate = useMemo(() => getTomorrowDateString(), [])
  const visibleDocumentFields = type === "CASAMENTO"
    ? marriageDocumentFields
    : baptismDocumentFields

  async function handleDocumentChange(
    field: DocumentField,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0]

    if (!file) {
      return
    }

    if (
      !acceptedDocumentMimeTypes.includes(file.type) &&
      !hasAllowedDocumentExtension(file.name)
    ) {
      setErrorMessage("Envie apenas arquivos PDF, DOC, DOCX, JPG, PNG ou WEBP.")
      e.target.value = ""
      return
    }

    setErrorMessage("")
    setUploadingFieldKey(field.key)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Nao foi possivel enviar o arquivo.")
      }

      const data = (await response.json()) as { url?: string }

      const url = data.url

      if (!url) {
        throw new Error("Upload retornou sem url.")
      }

      setDocumentUploads((current) => ({
        ...current,
        [field.key]: {
          url,
          fileName: file.name,

        },
      }))
    } catch {
      setErrorMessage(`Nao foi possivel enviar o arquivo de ${field.label.toLowerCase()}.`)
    } finally {
      setUploadingFieldKey(null)
      e.target.value = ""
    }
  }

  function removeDocument(fieldKey: string) {
    setDocumentUploads((current) => ({
      ...current,
      [fieldKey]: null,
    }))
  }

  function updateBaptismDetails<K extends keyof BaptismDetails>(key: K, value: BaptismDetails[K]) {
    setBaptismDetails((current) => ({
      ...current,
      [key]: value,
    }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setErrorMessage("")
    setIsSubmitting(true)

    const trimmedName = name.trim()
    const trimmedPhone = phone.trim()
    const trimmedEmail = email.trim()
    const trimmedNotes = notes.trim()
    const missingDocument = visibleDocumentFields.find(
      (field) => field.required && !documentUploads[field.key]
    )

    const resolvedName = type === "BATISMO"
      ? baptismDetails.childName.trim()
      : trimmedName
    const resolvedPhone = type === "BATISMO"
      ? baptismDetails.contactPhone.trim()
      : trimmedPhone
    const resolvedPhoneDigits = resolvedPhone.replace(/\D/g, "")

    if (!resolvedName) {
      setErrorMessage(type === "BATISMO" ? "Informe o nome da crianca." : "Informe o nome completo.")
      setIsSubmitting(false)
      return
    }

    if (resolvedPhoneDigits.length < 10 || resolvedPhoneDigits.length > 11) {
      setErrorMessage(type === "BATISMO" ? "Informe um telefone valido para contato." : "Informe um telefone valido.")
      setIsSubmitting(false)
      return
    }

    if (!isValidEmail(trimmedEmail)) {
      setErrorMessage("Informe um email valido.")
      setIsSubmitting(false)
      return
    }

    if (preferredDate && preferredDate < minimumPreferredDate) {
      setErrorMessage("A data de preferencia deve ser maior que a data de hoje.")
      setIsSubmitting(false)
      return
    }

    if (missingDocument) {
      setErrorMessage(`Envie o arquivo de ${missingDocument.label.toLowerCase()}.`)
      setIsSubmitting(false)
      return
    }

    if (type === "BATISMO") {
      const requiredBaptismFields = [
        { key: "childName", label: "nome da crianca", value: baptismDetails.childName.trim() },
        { key: "childBirthDate", label: "data de nascimento da crianca", value: baptismDetails.childBirthDate.trim() },
        { key: "fatherName", label: "nome do pai", value: baptismDetails.fatherName.trim() },
        { key: "motherName", label: "nome da mae", value: baptismDetails.motherName.trim() },
        { key: "residentialAddress", label: "endereco residencial", value: baptismDetails.residentialAddress.trim() },
        { key: "contactPhone", label: "telefone para contato", value: baptismDetails.contactPhone.trim() },
        { key: "godfatherName", label: "nome do padrinho", value: baptismDetails.godfatherName.trim() },
        { key: "godmotherName", label: "nome da madrinha", value: baptismDetails.godmotherName.trim() },
      ]

      for (const field of requiredBaptismFields) {
        if (!field.value) {
          setErrorMessage(`Informe ${field.label}.`)
          setIsSubmitting(false)
          return
        }
      }

      const birthDate = new Date(`${baptismDetails.childBirthDate.trim()}T00:00:00`)
      const currentDate = new Date()
      currentDate.setHours(0, 0, 0, 0)

      if (Number.isNaN(birthDate.getTime()) || birthDate > currentDate) {
        setErrorMessage("Informe uma data de nascimento valida para a crianca.")
        setIsSubmitting(false)
        return
      }

      const contactPhoneDigits = baptismDetails.contactPhone.replace(/\D/g, "")

      if (contactPhoneDigits.length < 10 || contactPhoneDigits.length > 11) {
        setErrorMessage("Informe um telefone valido para contato.")
        setIsSubmitting(false)
        return
      }
    }

    try {
      const documents = visibleDocumentFields.flatMap((field) => {
        const document = documentUploads[field.key]

        if (!document) {
          return []
        }

        return [{
          documentKey: field.key,
          documentLabel: field.label,
          url: document.url,
        }]
      })

      const details = type === "BATISMO"
        ? {
          childName: baptismDetails.childName.trim(),
          childBirthDate: baptismDetails.childBirthDate.trim(),
          fatherName: baptismDetails.fatherName.trim(),
          motherName: baptismDetails.motherName.trim(),
          residentialAddress: baptismDetails.residentialAddress.trim(),
          residentialAddressLatitude: baptismDetails.residentialAddressLatitude,
          residentialAddressLongitude: baptismDetails.residentialAddressLongitude,
          contactPhone: baptismDetails.contactPhone.trim(),
          godfatherName: baptismDetails.godfatherName.trim(),
          godmotherName: baptismDetails.godmotherName.trim(),
        }
        : null

      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type,
          name: resolvedName,
          phone: resolvedPhone,
          email: trimmedEmail,
          preferredDate: preferredDate || null,
          notes: trimmedNotes,
          details,
          documents,
        }),
      })

      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error || "Nao foi possivel concluir o agendamento.")
      }

      setName("")
      setPhone("")
      setEmail("")
      setPreferredDate("")
      setNotes("")
      setDocumentUploads(createEmptyUploads())
      setBaptismDetails({
        childName: "",
        childBirthDate: "",
        fatherName: "",
        motherName: "",
        residentialAddress: "",
        residentialAddressLatitude: null,
        residentialAddressLongitude: null,
        contactPhone: "",
        godfatherName: "",
        godmotherName: "",
      })
      setIsSuccessModalOpen(true)
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Nao foi possivel concluir o agendamento."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-12">
        <Card>
          <div className="flex items-start gap-3">
            <div className="rounded-2xl bg-[#092070]/8 p-3 text-[#092070]">
              <HeartHandshake size={22} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Escolha o tipo de agendamento
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Cada tipo mostra os documentos exatos que a paroquia precisa receber
                para iniciar a conferencia.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            {typeOptions.map((option) => {
              const isActive = option.value === type

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setType(option.value)}
                  className={`rounded-2xl border p-4 text-left transition ${isActive
                    ? "border-[#092070] bg-[#092070] text-white shadow-sm"
                    : "border-gray-200 bg-white text-gray-800 hover:border-[#092070]/30 hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold">
                        {option.title}
                      </p>

                      <p
                        className={`mt-1 text-sm leading-6 ${isActive ? "text-white/85" : "text-gray-600"
                          }`}
                      >
                        {option.description}
                      </p>
                    </div>

                    {isActive && <CheckCircle2 size={20} />}
                  </div>
                </button>
              )
            })}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900">
            Documentos exigidos
          </h3>

          <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
            {visibleDocumentFields.map((field) => (
              <div key={field.key} className="flex items-start gap-3">
                <FileText size={18} className="mt-1 text-[#092070]" />
                <div>
                  <p className="font-medium text-gray-800">{field.label}</p>
                  <p>{field.helper}</p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3">
              <CalendarDays size={18} className="mt-1 text-[#092070]" />
              <p>A data de preferencia precisa ser maior que a data de hoje.</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#092070]">
            Agendamento
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-gray-900">
            {selectedType?.title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            {selectedType?.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Nome completo do solicitante
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Telefone principal
              </label>
              <Input
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                placeholder="(31) 99999-9999"
                inputMode="numeric"
                maxLength={15}
                required
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Email principal
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@email.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Data de preferencia
              </label>
              <Input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                min={minimumPreferredDate}
              />
            </div>
          </div>

          {type === "BATISMO" && (
            <div className="grid gap-5 rounded-2xl border border-[#092070]/10 bg-[#092070]/[0.03] p-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Nome da criança
                </label>
                <Input
                  value={baptismDetails.childName}
                  onChange={(e) => updateBaptismDetails("childName", e.target.value)}
                  placeholder="Nome da criança"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Data de nascimento da criança
                </label>
                <Input
                  type="date"
                  value={baptismDetails.childBirthDate}
                  onChange={(e) => updateBaptismDetails("childBirthDate", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Nome do pai
                </label>
                <Input
                  value={baptismDetails.fatherName}
                  onChange={(e) => updateBaptismDetails("fatherName", e.target.value)}
                  placeholder="Nome do pai"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Nome da mãe
                </label>
                <Input
                  value={baptismDetails.motherName}
                  onChange={(e) => updateBaptismDetails("motherName", e.target.value)}
                  placeholder="Nome da mãe"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Endereço residencial
                </label>
                <AddressAutocomplete
                  value={baptismDetails.residentialAddress}
                  onChange={(value) => {
                    updateBaptismDetails("residentialAddress", value)
                    updateBaptismDetails("residentialAddressLatitude", null)
                    updateBaptismDetails("residentialAddressLongitude", null)
                  }}
                  onSelect={({ address, lat, lng }) => {
                    updateBaptismDetails("residentialAddress", address)
                    updateBaptismDetails("residentialAddressLatitude", lat)
                    updateBaptismDetails("residentialAddressLongitude", lng)
                  }}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Telefone para contato
                </label>
                <Input
                  value={baptismDetails.contactPhone}
                  onChange={(e) => updateBaptismDetails("contactPhone", formatPhone(e.target.value))}
                  placeholder="(31) 99999-9999"
                  inputMode="numeric"
                  maxLength={15}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Nome do padrinho
                </label>
                <Input
                  value={baptismDetails.godfatherName}
                  onChange={(e) => updateBaptismDetails("godfatherName", e.target.value)}
                  placeholder="Nome do padrinho"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Nome da madrinha
                </label>
                <Input
                  value={baptismDetails.godmotherName}
                  onChange={(e) => updateBaptismDetails("godmotherName", e.target.value)}
                  placeholder="Nome da madrinha"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Observacoes
            </label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Se precisar, informe detalhes importantes para a equipe."
              rows={5}
            />
          </div>

          <div className="space-y-4">
            {visibleDocumentFields.map((field) => {
              const uploadedDocument = documentUploads[field.key]

              return (
                <div
                  key={field.key}
                  className="rounded-2xl border border-gray-200 bg-white p-4"
                >
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      {field.label}
                      {field.required ? " *" : ""}
                    </label>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {field.helper}
                    </p>
                  </div>

                  <div className="mt-3 rounded-2xl border border-dashed border-gray-300 bg-gray-50/70 p-4">
                    <input
                      type="file"
                      accept={acceptedDocumentInput}
                      onChange={(e) => handleDocumentChange(field, e)}
                      className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#092070] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:opacity-90"
                    />

                    <p className="mt-3 text-xs text-gray-500">
                      {uploadingFieldKey === field.key
                        ? "Enviando arquivo..."
                        : uploadedDocument
                          ? `Arquivo enviado: ${uploadedDocument.fileName}`
                          : "Aceita somente 1 arquivo em PDF, DOC, DOCX, JPG, PNG ou WEBP."}
                    </p>
                  </div>

                  {uploadedDocument && (
                    <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl bg-[#092070]/10 p-2 text-[#092070]">
                            <FileText size={18} />
                          </div>

                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {uploadedDocument.fileName}
                            </p>

                            <a
                              href={uploadedDocument.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs font-medium text-[#092070]"
                            >
                              Abrir arquivo
                            </a>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeDocument(field.key)}
                          className="text-sm font-medium text-red-600 transition hover:text-red-700"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {errorMessage && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <Button type="submit" disabled={isSubmitting || uploadingFieldKey !== null}>
            {isSubmitting ? "Enviando solicitacao..." : "Solicitar agendamento"}
          </Button>
        </form>
      </Card>

      <Modal open={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 size={28} />
          </div>

          <h3 className="mt-5 text-2xl font-semibold text-gray-900">
            Solicitacao enviada
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Recebemos sua solicitacao. Em breve a paroquia vai entrar em contato
            com voce para confirmar o agendamento.
          </p>

          <div className="mt-6 flex justify-center">
            <Button type="button" onClick={() => setIsSuccessModalOpen(false)}>
              Fechar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
