import { prisma } from "lib/prisma"

const allowedStatuses = ["PENDING", "APPROVED", "CANCELLED"] as const

type AllowedStatus = (typeof allowedStatuses)[number]

type Props = {
  params: Promise<{
    id: string
  }>
}

type UpdateAppointmentBody = {
  status?: string
}

function isAllowedStatus(value: string): value is AllowedStatus {
  return allowedStatuses.includes(value as AllowedStatus)
}

export async function PATCH(req: Request, { params }: Props) {
  const { id } = await params
  const body = (await req.json()) as UpdateAppointmentBody
  const status = body.status?.trim().toUpperCase()

  if (!status || !isAllowedStatus(status)) {
    return Response.json(
      { error: "Status invalido." },
      { status: 400 }
    )
  }

  const appointment = await prisma.appointment.findUnique({
    where: { id },
  })

  if (!appointment) {
    return Response.json(
      { error: "Agendamento nao encontrado." },
      { status: 404 }
    )
  }

  const updatedAppointment = await prisma.appointment.update({
    where: { id },
    data: {
      status,
    },
  })

  return Response.json(updatedAppointment)
}
