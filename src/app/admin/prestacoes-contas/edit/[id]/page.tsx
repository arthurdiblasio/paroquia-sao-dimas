import { notFound } from "next/navigation"

import { FinancialReportForm } from "@/components/admin/financial-report-form"
import { fetchInternalApiOrNull } from "@/lib/internal-api"
import { type FinancialReportStatus } from "@/lib/financial-report"

type FinancialReportItem = {
  id: string
  title: string
  description: string
  status: FinancialReportStatus
  progressPercentage: number
  published: boolean
  phases: {
    id: string
    title: string
    doneDetails: string | null
    nextDetails: string | null
    media: {
      media: {
        url: string
      }
    }[]
  }[]
}

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function EditFinancialReportPage({ params }: Props) {
  const { id } = await params

  const report = await fetchInternalApiOrNull<FinancialReportItem>(`/api/financial-reports/${id}`)

  if (!report) {
    notFound()
  }

  return (
    <FinancialReportForm
      mode="edit"
      reportId={report.id}
      initialValues={{
        title: report.title,
        description: report.description,
        status: report.status,
        progressPercentage: String(report.progressPercentage),
        publicationStatus: report.published ? "PUBLISHED" : "DRAFT",
        phases: report.phases.map((phase) => ({
          id: phase.id,
          title: phase.title,
          doneDetails: phase.doneDetails ?? "",
          nextDetails: phase.nextDetails ?? "",
          images: phase.media.map((item) => item.media.url),
        })),
      }}
    />
  )
}
