import { AppointmentsTable } from "@/components/admin/appointments-table"
import { fetchInternalApi } from "@/lib/internal-api"

type AppointmentWithDocuments = {
  id: string
  type: "BATISMO" | "CASAMENTO"
  name: string
  phone: string
  email: string
  preferredDate: string | null
  notes: string | null
  status: "PENDING" | "APPROVED" | "CANCELLED"
  createdAt: string
  details: Record<string, string | boolean | null> | null
  documents: {
    id: string
    documentKey: string | null
    documentLabel: string | null
    media: {
      url: string
    }
  }[]
}

export default async function AdminAppointmentsPage() {
  const appointments = await fetchInternalApi<AppointmentWithDocuments[]>("/api/appointments")

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
          preferredDate: appointment.preferredDate,
          notes: appointment.notes ?? null,
          status: appointment.status,
          createdAt: appointment.createdAt,
          details: appointment.details,
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
