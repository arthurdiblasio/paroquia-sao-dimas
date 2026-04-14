import Link from "next/link"
import { prisma } from "lib/prisma"

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date)
}

export default async function AdminDashboard() {
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

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#092070]">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-500">
          Visão geral atualizada das notícias publicadas e agendamentos pendentes.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">Notícias publicadas</h2>
          <p className="text-3xl font-bold mt-2">{publishedNewsCount}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">Homilias</h2>
          <p className="text-3xl font-bold mt-2">{homiliesCount}</p>
        </div>

        <Link
          href="/admin/agendamentos"
          className="block bg-white p-6 rounded-lg shadow transition hover:shadow-lg"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-gray-500 text-sm">Agendamentos pendentes</h2>
              <p className="text-3xl font-bold mt-2">{pendingAppointmentsCount}</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
              Ir para agendamentos
            </span>
          </div>
        </Link>
      </div>

      <section className="mt-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Agendamentos pendentes</h2>
            <p className="mt-1 text-sm text-gray-500">
              Os cinco agendamentos mais recentes que ainda aguardam análise.
            </p>
          </div>
          <Link
            href="/admin/agendamentos"
            className="inline-flex items-center rounded-md bg-[#092070] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#071251]"
          >
            Ver todos os agendamentos
          </Link>
        </div>

        <div className="mt-6 space-y-4">
          {pendingAppointments.length > 0 ? (
            pendingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-900">{appointment.name}</p>
                  <p className="text-sm text-gray-500">
                    {appointment.type} • Recebido em {formatDate(appointment.createdAt)}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Data preferida: {appointment.preferredDate ? formatDate(appointment.preferredDate) : "Não definida"}
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:items-end">
                  <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
                    Pendente
                  </span>
                  <Link
                    href="/admin/agendamentos"
                    className="inline-flex rounded-md bg-[#092070] px-4 py-2 text-sm font-semibold text-white hover:bg-[#071251]"
                  >
                    Visualizar
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-500">
              Não há agendamentos pendentes no momento.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
