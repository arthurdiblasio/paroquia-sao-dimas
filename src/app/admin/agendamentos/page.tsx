import { AppointmentsTable } from "@/components/admin/appointments-table"
import { prisma } from "lib/prisma"

export default async function AdminAppointmentsPage() {
  const appointments = await prisma.appointment.findMany({
    include: {
      documents: {
        include: {
          media: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Agendamentos
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Visualize todas as solicitacoes enviadas para batismo e casamento.
        </p>
      </div>

      <AppointmentsTable
        appointments={appointments.map((appointment) => ({
          id: appointment.id,
          type: appointment.type,
          name: appointment.name,
          phone: appointment.phone,
          email: appointment.email,
          preferredDate: appointment.preferredDate?.toISOString() ?? null,
          notes: appointment.notes ?? null,
          status: appointment.status,
          createdAt: appointment.createdAt.toISOString(),
          details: (appointment.details as Record<string, string | boolean | null> | null) ?? null,
          documents: appointment.documents.map((document) => ({
            id: document.id,
            key: document.documentKey ?? "",
            label: document.documentLabel ?? "Documento",
            url: document.media.url,
          })),
        }))}
      />
    </div>
  )
}
