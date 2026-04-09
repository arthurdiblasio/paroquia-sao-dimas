import { notFound } from "next/navigation"

import { FinancialReportForm } from "@/components/admin/financial-report-form"
import { prisma } from "lib/prisma"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function EditFinancialReportPage({ params }: Props) {
  const { id } = await params

  const report = await prisma.financialReport.findUnique({
    where: { id },
    include: {
      phases: {
        orderBy: {
          phaseOrder: "asc",
        },
        include: {
          media: {
            include: {
              media: true,
            },
          },
        },
      },
    },
  })

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
          title: phase.title,
          doneDetails: phase.doneDetails ?? "",
          nextDetails: phase.nextDetails ?? "",
          images: phase.media.map((item) => item.media.url),
        })),
      }}
    />
  )
}
