"use client"

import { useMemo, useState } from "react"
import { CalendarDays, Eye, FileText, Mail, Phone, User } from "lucide-react"

import { Modal } from "@/components/ui/modal"
import { Table } from "@/components/ui/table"

type AppointmentDocumentRow = {
  id: string
  key: string
  label: string
  url: string
}

type AppointmentDetails = Record<string, string | boolean | null> | null

type AppointmentStatus = "PENDING" | "APPROVED" | "CANCELLED"

type AppointmentRow = {
  id: string
  type: "BATISMO" | "CASAMENTO"
  name: string
  phone: string
  email: string
  preferredDate: string | null
  notes: string | null
  status: AppointmentStatus
  createdAt: string
  details: AppointmentDetails
  documents: AppointmentDocumentRow[]
}

type Props = {
  appointments: AppointmentRow[]
}

const typeLabels: Record<AppointmentRow["type"], string> = {
  BATISMO: "Batismo",
  CASAMENTO: "Casamento",
}

const statusLabels: Record<AppointmentStatus, string> = {
  PENDING: "Pendente",
  APPROVED: "Aprovado",
  CANCELLED: "Cancelado",
}

const statusClasses: Record<AppointmentStatus, string> = {
  PENDING: "bg-amber-50 text-amber-700 ring-amber-200",
  APPROVED: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  CANCELLED: "bg-red-50 text-red-700 ring-red-200",
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR")
}

export function AppointmentsTable({ appointments: initialAppointments }: Props) {
  const [appointments, setAppointments] = useState(initialAppointments)
  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentRow | null>(null)
  const [activeView, setActiveView] = useState<"requests" | "calendar">("requests")
  const [selectedAgendaDate, setSelectedAgendaDate] = useState<string | null>(null)
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false)

  const totalDocuments = useMemo(
    () => appointments.reduce((count, appointment) => count + appointment.documents.length, 0),
    [appointments]
  )

  const approvedAppointments = useMemo(
    () =>
      appointments
        .filter((appointment) => appointment.status === "APPROVED" && appointment.preferredDate)
        .sort((first, second) => {
          if (!first.preferredDate || !second.preferredDate) {
            return 0
          }

          return first.preferredDate.localeCompare(second.preferredDate)
        }),
    [appointments]
  )

  const agendaDates = useMemo(
    () => Array.from(new Set(approvedAppointments.map((appointment) => appointment.preferredDate as string))),
    [approvedAppointments]
  )

  const activeAgendaDate = selectedAgendaDate ?? agendaDates[0] ?? null

  const appointmentsForAgendaDate = useMemo(
    () =>
      activeAgendaDate
        ? approvedAppointments.filter((appointment) => appointment.preferredDate === activeAgendaDate)
        : [],
    [activeAgendaDate, approvedAppointments]
  )

  async function handleStatusChange(appointmentId: string, status: AppointmentStatus) {
    setIsUpdatingStatus(true)

    const response = await fetch(`/api/appointments/${appointmentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })

    setIsUpdatingStatus(false)

    if (!response.ok) {
      return
    }

    setAppointments((currentAppointments) =>
      currentAppointments.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, status }
          : appointment
      )
    )

    setSelectedAppointment((current) =>
      current?.id === appointmentId
        ? { ...current, status }
        : current
    )
  }

  return (
    <>
      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Solicitacoes</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {appointments.length}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Pendentes</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {appointments.filter((appointment) => appointment.status === "PENDING").length}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Aprovados</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {appointments.filter((appointment) => appointment.status === "APPROVED").length}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Arquivos enviados</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">
            {totalDocuments}
          </p>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveView("requests")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeView === "requests"
              ? "bg-[#092070] text-white"
              : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
          }`}
        >
          Solicitacoes
        </button>

        <button
          type="button"
          onClick={() => setActiveView("calendar")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeView === "calendar"
              ? "bg-[#092070] text-white"
              : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
          }`}
        >
          Agenda dos aprovados
        </button>
      </div>

      {activeView === "requests" ? (
        <Table>
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="p-4 text-left">Solicitante</th>
              <th className="p-4 text-left">Tipo</th>
              <th className="p-4 text-left">Contato</th>
              <th className="p-4 text-left">Data</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Documentos</th>
              <th className="p-4 text-right">Detalhes</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="p-4">
                  <p className="font-medium text-gray-900">
                    {appointment.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Recebido em {formatDate(appointment.createdAt)}
                  </p>
                </td>

                <td className="p-4 text-gray-700">
                  {typeLabels[appointment.type]}
                </td>

                <td className="p-4 text-gray-600">
                  <div className="space-y-1">
                    <p>{appointment.phone}</p>
                    <p className="text-xs text-gray-500">{appointment.email}</p>
                  </div>
                </td>

                <td className="p-4 text-gray-600">
                  {appointment.preferredDate
                    ? formatDate(appointment.preferredDate)
                    : "Nao informada"}
                </td>

                <td className="p-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ${statusClasses[appointment.status]}`}
                  >
                    {statusLabels[appointment.status]}
                  </span>
                </td>

                <td className="p-4 text-gray-600">
                  {appointment.documents.length} arquivo(s)
                </td>

                <td className="p-4">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedAppointment(appointment)}
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#092070] transition hover:bg-[#092070]/10"
                    >
                      <Eye size={16} />
                      Ver
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {appointments.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-gray-400">
                  Nenhuma solicitacao encontrada
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      ) : (
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Agenda por dia
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Veja somente os agendamentos aprovados e filtre pelos dias que ja possuem batismos ou casamentos.
            </p>

            {agendaDates.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {agendaDates.map((agendaDate) => (
                  <button
                    key={agendaDate}
                    type="button"
                    onClick={() => setSelectedAgendaDate(agendaDate)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeAgendaDate === agendaDate
                        ? "bg-[#092070] text-white"
                        : "bg-gray-50 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {formatDate(agendaDate)}
                  </button>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm text-gray-500">
                Ainda nao existem agendamentos aprovados com data definida.
              </p>
            )}
          </div>

          {activeAgendaDate && (
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#092070]">
                <CalendarDays size={18} />
                <h3 className="text-lg font-semibold text-gray-900">
                  {formatDate(activeAgendaDate)}
                </h3>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {appointmentsForAgendaDate.map((appointment) => (
                  <button
                    key={appointment.id}
                    type="button"
                    onClick={() => setSelectedAppointment(appointment)}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-left transition hover:border-[#092070]/30 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#092070]">
                          {typeLabels[appointment.type]}
                        </p>

                        <h4 className="mt-2 text-lg font-semibold text-gray-900">
                          {appointment.name}
                        </h4>
                      </div>

                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
                        Aprovado
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-sm text-gray-600">
                      <p>{appointment.phone}</p>
                      <p className="break-all">{appointment.email}</p>
                      <p>{appointment.documents.length} arquivo(s)</p>
                    </div>
                  </button>
                ))}
              </div>

              {appointmentsForAgendaDate.length === 0 && (
                <p className="mt-4 text-sm text-gray-500">
                  Nenhum agendamento aprovado para esse dia.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      <Modal open={selectedAppointment !== null} onClose={() => !isUpdatingStatus && setSelectedAppointment(null)}>
        <div className="max-w-5xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#092070]">
                {selectedAppointment ? typeLabels[selectedAppointment.type] : ""}
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                {selectedAppointment?.name}
              </h2>
            </div>

            {selectedAppointment && (
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ring-1 ${statusClasses[selectedAppointment.status]}`}
              >
                {statusLabels[selectedAppointment.status]}
              </span>
            )}
          </div>

          {selectedAppointment && (
            <>
              <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">
                  Atualizar status
                </h3>

                <div className="mt-4 flex flex-wrap gap-3">
                  {(["PENDING", "APPROVED", "CANCELLED"] as AppointmentStatus[]).map((status) => (
                    <button
                      key={status}
                      type="button"
                      disabled={isUpdatingStatus}
                      onClick={() => handleStatusChange(selectedAppointment.id, status)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        selectedAppointment.status === status
                          ? "bg-[#092070] text-white"
                          : "bg-gray-50 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100"
                      } disabled:cursor-not-allowed disabled:opacity-60`}
                    >
                      {isUpdatingStatus && selectedAppointment.status !== status
                        ? "Atualizando..."
                        : statusLabels[status]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <User size={16} />
                    Solicitante
                  </div>
                  <p className="mt-2 text-sm text-gray-900">{selectedAppointment.name}</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Phone size={16} />
                    Telefone principal
                  </div>
                  <p className="mt-2 text-sm text-gray-900">{selectedAppointment.phone}</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <Mail size={16} />
                    Email principal
                  </div>
                  <p className="mt-2 break-all text-sm text-gray-900">{selectedAppointment.email}</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <CalendarDays size={16} />
                    Data preferencial
                  </div>
                  <p className="mt-2 text-sm text-gray-900">
                    {selectedAppointment.preferredDate
                      ? formatDate(selectedAppointment.preferredDate)
                      : "Nao informada"}
                  </p>
                </div>
              </div>

              {selectedAppointment.type === "BATISMO" && (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <h3 className="text-base font-semibold text-gray-900">
                      Dados da familia
                    </h3>

                    <div className="mt-4 space-y-3 text-sm text-gray-700">
                      <p><span className="font-medium text-gray-900">Telefone da mae:</span> {selectedAppointment.details?.motherPhone || "Nao informado"}</p>
                      <p><span className="font-medium text-gray-900">Telefone do pai:</span> {selectedAppointment.details?.fatherPhone || "Nao informado"}</p>
                      <p><span className="font-medium text-gray-900">Telefone da madrinha:</span> {selectedAppointment.details?.godmotherPhone || "Nao informado"}</p>
                      <p><span className="font-medium text-gray-900">Telefone do padrinho:</span> {selectedAppointment.details?.godfatherPhone || "Nao informado"}</p>
                      <p><span className="font-medium text-gray-900">Email da mae:</span> {selectedAppointment.details?.motherEmail || "Nao informado"}</p>
                      <p><span className="font-medium text-gray-900">Email do pai:</span> {selectedAppointment.details?.fatherEmail || "Nao informado"}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <h3 className="text-base font-semibold text-gray-900">
                      Requisitos dos padrinhos
                    </h3>

                    <p className="mt-4 text-sm text-gray-700">
                      {selectedAppointment.details?.godparentsConfirmed
                        ? "Confirmado que os padrinhos sao catolicos e maiores de 18 anos."
                        : "Nao confirmado no formulario."}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-900">
                  Observacoes
                </h3>

                <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                  {selectedAppointment.notes || "Nenhuma observacao enviada."}
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-[#092070]" />
                  <h3 className="text-base font-semibold text-gray-900">
                    Documentos enviados
                  </h3>
                </div>

                {selectedAppointment.documents.length > 0 ? (
                  <div className="mt-4 space-y-6">
                    {selectedAppointment.documents.map((document, index) => (
                      <div key={document.id} className="rounded-2xl border border-gray-200">
                        <div className="border-b border-gray-100 px-4 py-3">
                          <p className="text-sm font-medium text-gray-900">
                            {document.label || `Documento ${index + 1}`}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-4 px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-[#092070]/10 p-2 text-[#092070]">
                              <FileText size={18} />
                            </div>

                            <div>
                              <p className="text-sm font-medium text-gray-800">
                                Arquivo enviado
                              </p>

                              <p className="text-xs text-gray-500">
                                {document.key || `documento-${index + 1}`}
                              </p>
                            </div>
                          </div>

                          <a
                            href={document.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-[#092070]"
                          >
                            Abrir arquivo
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-gray-500">
                    Nenhum documento foi enviado nesta solicitacao.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  )
}
