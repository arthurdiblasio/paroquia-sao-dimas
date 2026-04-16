import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
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

export default async function ChurchesPage() {
  const churches = await prisma.church.findMany({
    include: {
      massSchedules: {
        orderBy: [{ dayOfWeek: "asc" }, { time: "asc" }],
      },
      crunchMedias: {
        include: {
          media: true,
        },
        take: 1,
      },
    },
    orderBy: [{ isMainChurch: "desc" }, { name: "asc" }],
  })

  return (
    <div className="bg-white text-slate-900">
      <section className="mx-auto max-w-[1240px] px-6 py-10 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#092070]">
              Igrejas
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-900">
              Comunidades e celebrações
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Encontre aqui as igrejas da paróquia e os horários de missa em cada comunidade.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex shrink-0 items-center rounded-full bg-[#092070] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#081a5b]"
          >
            Voltar para o início
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {churches.map((church) => (
            <article
              key={church.id}
              className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70"
            >
              <div className="h-52 overflow-hidden bg-slate-100">
                {church.crunchMedias?.[0]?.media.url ? (
                  <Image
                    src={church.crunchMedias[0].media.url}
                    alt={`Foto da igreja ${church.name}`}
                    width={720}
                    height={340}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#f8fafc,#cbd5e1)] text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {church.name}
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-slate-900">{church.name}</h2>
                  {church.isMainChurch && (
                    <span className="rounded-full bg-[#092070]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#092070]">
                      Matriz
                    </span>
                  )}
                </div>

                <div className="mt-3 flex flex-col gap-4">
                  <p className="text-sm leading-7 text-slate-600">{church.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#092070]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#092070] transition hover:bg-[#092070]/14"
                  >
                    Ver no mapa
                    <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="mt-6 space-y-3 px-6 pb-6">
                {church.massSchedules.length > 0 ? (
                  church.massSchedules.map((schedule) => (
                    <div
                      key={`${church.id}-${schedule.dayOfWeek}-${schedule.time}-${schedule.notes ?? ""}`}
                      className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {getDayLabel(schedule.dayOfWeek)}
                        </p>
                        <p className="text-xs text-slate-500">
                          {schedule.notes?.trim() || "Horário de missa"}
                        </p>
                      </div>

                      <span className="text-sm font-semibold text-[#092070]">
                        {schedule.time}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">
                    Os horários ainda não foram informados.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
