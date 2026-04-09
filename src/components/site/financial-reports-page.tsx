import Image from "next/image"

import {
  getFinancialReportStatusLabel,
  type FinancialReportStatus,
} from "@/lib/financial-report"
import { prisma } from "lib/prisma"

function getStatusClasses(status: FinancialReportStatus) {
  if (status === "FINISHED") {
    return "bg-emerald-100 text-emerald-700"
  }

  if (status === "IN_PROGRESS") {
    return "bg-amber-100 text-amber-700"
  }

  return "bg-sky-100 text-sky-700"
}

export async function FinancialReportsPage() {
  const reports = await prisma.financialReport.findMany({
    where: {
      published: true,
    },
    orderBy: [
      {
        publishedAt: "desc",
      },
      {
        updatedAt: "desc",
      },
    ],
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

  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#091c63] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_bottom,rgba(223,152,34,0.18),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1240px] px-6 py-20 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            Prestacao de Contas
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-[-0.05em] sm:text-6xl">
            Veja como o dizimo esta sendo aplicado na vida da paroquia
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
            Esta pagina mostra os projetos, melhorias e frentes pastorais que estao
            recebendo cuidado da comunidade, com andamento, fases e registros visuais.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10">
        {reports.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 px-8 py-16 text-center">
            <h2 className="text-2xl font-semibold text-slate-900">
              Nenhuma prestacao publicada ainda
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Assim que a paroquia publicar novas atualizacoes no admin, elas aparecerao aqui.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {reports.map((report) => (
              <article
                key={report.id}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.18)]"
              >
                <div className="border-b border-slate-200 bg-slate-50/80 px-8 py-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${getStatusClasses(report.status)}`}
                    >
                      {getFinancialReportStatusLabel(report.status)}
                    </span>

                    <span className="inline-flex rounded-full bg-primary/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {report.progressPercentage}% concluido
                    </span>
                  </div>

                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-900">
                    {report.title}
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                    {report.description}
                  </p>
                </div>

                <div className="space-y-6 px-8 py-8">
                  {report.phases.map((phase, index) => (
                    <section
                      key={phase.id}
                      className="rounded-[1.75rem] border border-slate-200 bg-slate-50/70 p-6"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold text-slate-900">
                          Fase {index + 1}: {phase.title}
                        </h3>

                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {phase.media.length} foto{phase.media.length === 1 ? "" : "s"}
                        </span>
                      </div>

                      <div className="mt-5 grid gap-5 lg:grid-cols-2">
                        <div className="rounded-3xl bg-white p-5 ring-1 ring-slate-200/80">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            O que foi feito
                          </p>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {phase.doneDetails ?? "Nenhum registro informado ate o momento."}
                          </p>
                        </div>

                        <div className="rounded-3xl bg-white p-5 ring-1 ring-slate-200/80">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            O que sera feito
                          </p>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {phase.nextDetails ?? "Nenhuma proxima etapa informada ate o momento."}
                          </p>
                        </div>
                      </div>

                      {phase.media.length > 0 && (
                        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                          {phase.media.map((item) => (
                            <div
                              key={item.mediaId}
                              className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/80"
                            >
                              <Image
                                src={item.media.url}
                                alt={item.media.altText ?? `${report.title} - ${phase.title}`}
                                width={640}
                                height={420}
                                className="h-56 w-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
