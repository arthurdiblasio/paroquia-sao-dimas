export const publicationStatuses = ["DRAFT", "PUBLISHED"] as const

export type PublicationStatus = (typeof publicationStatuses)[number]

export function isPublicationStatus(value: string): value is PublicationStatus {
  return publicationStatuses.includes(value as PublicationStatus)
}

export function getPublicationStatusFromPublished(published: boolean): PublicationStatus {
  return published ? "PUBLISHED" : "DRAFT"
}

export function getPublishedStateFromStatus(status: PublicationStatus) {
  return {
    published: status === "PUBLISHED",
    publishedAt: status === "PUBLISHED" ? new Date() : null,
  }
}

export function normalizePublicationStatus(value?: string | null): PublicationStatus {
  const normalizedValue = value?.trim().toUpperCase()

  return normalizedValue && isPublicationStatus(normalizedValue)
    ? normalizedValue
    : "DRAFT"
}
