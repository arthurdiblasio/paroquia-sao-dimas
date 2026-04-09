export const financialReportStatuses = [
  "STARTED",
  "IN_PROGRESS",
  "FINISHED",
] as const

export type FinancialReportStatus = (typeof financialReportStatuses)[number]

export type FinancialReportPhaseInput = {
  title?: string | null
  doneDetails?: string | null
  nextDetails?: string | null
  images?: string[]
}

export type FinancialReportBody = {
  title?: string | null
  description?: string | null
  status?: string | null
  progressPercentage?: number | string | null
  phases?: FinancialReportPhaseInput[]
}

export type ParsedFinancialReportInput = {
  title: string
  description: string
  status: FinancialReportStatus
  progressPercentage: number
  phases: Array<{
    title: string
    doneDetails: string | null
    nextDetails: string | null
    images: string[]
  }>
}

function normalizeString(value?: string | null) {
  const normalizedValue = value?.trim()

  return normalizedValue ? normalizedValue : null
}

function normalizeImages(images?: string[]) {
  return Array.from(
    new Set(
      (images ?? [])
        .map((image) => normalizeString(image))
        .filter((image): image is string => Boolean(image))
    )
  )
}

export function isFinancialReportStatus(value: string): value is FinancialReportStatus {
  return financialReportStatuses.includes(value as FinancialReportStatus)
}

export function normalizeFinancialReportStatus(value?: string | null): FinancialReportStatus {
  const normalizedValue = value?.trim().toUpperCase()

  return normalizedValue && isFinancialReportStatus(normalizedValue)
    ? normalizedValue
    : "STARTED"
}

export function getFinancialReportProgressFromStatus(
  status: FinancialReportStatus,
  value?: number | string | null
) {
  if (status === "STARTED") {
    return 0
  }

  if (status === "FINISHED") {
    return 100
  }

  const rawValue = typeof value === "string" ? Number(value) : value

  if (!Number.isInteger(rawValue) || Number(rawValue) < 1 || Number(rawValue) > 99) {
    return null
  }

  return Number(rawValue)
}

export function parseFinancialReportBody(body: FinancialReportBody): ParsedFinancialReportInput | string {
  const title = normalizeString(body.title)
  const description = normalizeString(body.description)
  const status = normalizeFinancialReportStatus(body.status)
  const progressPercentage = getFinancialReportProgressFromStatus(
    status,
    body.progressPercentage
  )

  if (!title) {
    return "Titulo da prestacao de contas e obrigatorio."
  }

  if (!description) {
    return "Descricao da prestacao de contas e obrigatoria."
  }

  if (progressPercentage === null) {
    return "Para status em processo, informe um percentual entre 1 e 99."
  }

  const phases = (body.phases ?? []).map((phase) => {
    const title = normalizeString(phase.title)
    const doneDetails = normalizeString(phase.doneDetails)
    const nextDetails = normalizeString(phase.nextDetails)
    const images = normalizeImages(phase.images)

    return {
      title,
      doneDetails,
      nextDetails,
      images,
    }
  })

  if (phases.length === 0) {
    return "Adicione pelo menos uma fase na prestacao de contas."
  }

  for (const phase of phases) {
    if (!phase.title) {
      return "Toda fase precisa ter um titulo."
    }

    if (phase.images.length > 5) {
      return "Cada fase pode ter no maximo 5 fotos."
    }

    if (phase.doneDetails && phase.images.length === 0) {
      return "Adicione ao menos uma foto quando informar o que foi feito em uma fase."
    }
  }

  return {
    title,
    description,
    status,
    progressPercentage,
    phases: phases.map((phase) => ({
      title: phase.title as string,
      doneDetails: phase.doneDetails,
      nextDetails: phase.nextDetails,
      images: phase.images,
    })),
  }
}

export function getFinancialReportStatusLabel(status: FinancialReportStatus) {
  if (status === "STARTED") {
    return "Iniciado"
  }

  if (status === "IN_PROGRESS") {
    return "Em processo"
  }

  return "Finalizado"
}
