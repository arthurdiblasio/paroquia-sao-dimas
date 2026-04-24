import { prisma } from "lib/prisma"

export async function GET() {
  const [publishedNewsCount, homiliesCount, pendingAppointmentsCount, pendingAppointments] =
    await Promise.all([
      prisma.news.count({ where: { published: true } }),
      prisma.homily.count(),
      prisma.appointment.count({ where: { status: "PENDING" } }),
      prisma.appointment.findMany({
        where: { status: "PENDING" },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ])

  return Response.json({
    publishedNewsCount,
    homiliesCount,
    pendingAppointmentsCount,
    pendingAppointments,
  })
}
