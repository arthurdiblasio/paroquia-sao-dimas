import { prisma } from "lib/prisma"

function getDayLabel(dayOfWeek: number) {
  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]

  return days[dayOfWeek] ?? "Dia não informado"
}

export default async function MassesPage() {
  const churches = await prisma.church.findMany({
    include: {
      massSchedules: {
        orderBy: [{ dayOfWeek: "asc" }, { time: "asc" }],
      },
    },
    orderBy: [{ isMainChurch: "desc" }, { name: "asc" }],
  })

  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#091c63] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_bottom,rgba(223,152,34,0.18),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1240px] px-6 py-20 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            Missas
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.05em] sm:text-6xl">
            Missas por igreja e comunidade
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10">

        <div className="space-y-5">
          {churches.map((church) => (
            <article
              key={church.id}
              className="overflow-hidden rounded-4xl border border-slate-200/80 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    {church.isMainChurch ? "Igreja Matriz" : "Comunidade"}
                  </div>
                  <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                    {church.name}
                  </h2>
                </div>

                <div className="max-w-xl text-sm leading-6 text-slate-700 sm:text-right">
                  <p>{church.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-primary underline"
                  >
                    Ver no mapa
                  </a>
                </div>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {church.massSchedules.length > 0 ? (
                  church.massSchedules.map((schedule) => (
                    <div
                      key={`${church.id}-${schedule.dayOfWeek}-${schedule.time}-${schedule.notes ?? ""}`}
                      className="rounded-3xl border border-slate-200/10 bg-slate-900/5 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs uppercase tracking-[0.16em] text-primary">
                          {getDayLabel(schedule.dayOfWeek)}
                        </p>
                        <p className="text-lg font-semibold text-primary">
                          {schedule.time}
                        </p>
                      </div>

                      {schedule.notes?.trim() ? (
                        <p className="mt-2 text-xs text-slate-400 truncate">
                          {schedule.notes.trim()}
                        </p>
                      ) : null}
                    </div>
                  ))
                ) : (
                  <div className="rounded-3xl bg-slate-800/80 p-5 text-slate-300">
                    Horários ainda não informados.
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
