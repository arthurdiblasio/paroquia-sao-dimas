"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

import {
  getFinancialReportStatusLabel,
  type FinancialReportStatus,
} from "@/lib/financial-report"

type FinancialReportsListProps = {
  reports: Array<{
    id: string
    title: string
    description: string
    status: FinancialReportStatus
    progressPercentage: number
    phases: Array<{
      id: string
      title: string
      doneDetails: string | null
      nextDetails: string | null
      media: Array<{
        mediaId: string
        media: {
          url: string
          altText: string | null
        }
      }>
    }>
  }>
}

function getStatusClasses(status: FinancialReportStatus) {
  if (status === "FINISHED") {
    return "bg-emerald-100 text-emerald-700"
  }

  if (status === "IN_PROGRESS") {
    return "bg-amber-100 text-amber-700"
  }

  return "bg-sky-100 text-sky-700"
}

export function FinancialReportsList({ reports }: FinancialReportsListProps) {
  const [expandedReports, setExpandedReports] = useState<Record<string, boolean>>({})
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({})

  function toggleReport(reportId: string) {
    setExpandedReports((current) => ({
      ...current,
      [reportId]: !current[reportId],
    }))
  }

  function togglePhase(phaseId: string) {
    setExpandedPhases((current) => ({
      ...current,
      [phaseId]: !current[phaseId],
    }))
  }

  return (
    <div className="space-y-10">
      {reports.map((report) => {
        const isReportExpanded = expandedReports[report.id] ?? false

        return (
          <article
            key={report.id}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.18)]"
          >
            <div className="border-b border-slate-200 bg-slate-50/80 px-8 py-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
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

                <button
                  type="button"
                  onClick={() => toggleReport(report.id)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                  aria-expanded={isReportExpanded}
                >
                  {isReportExpanded ? "Recolher prestacao" : "Expandir prestacao"}
                  {isReportExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>

            {isReportExpanded && (
              <div className="space-y-6 px-8 py-8">
                {report.phases.map((phase, index) => {
                  const isPhaseExpanded = expandedPhases[phase.id] ?? false

                  return (
                    <section
                      key={phase.id}
                      className="rounded-[1.75rem] border border-slate-200 bg-slate-50/70 p-6"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">
                            Fase {index + 1}: {phase.title}
                          </h3>

                          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            {phase.media.length} foto{phase.media.length === 1 ? "" : "s"}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => togglePhase(phase.id)}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                          aria-expanded={isPhaseExpanded}
                        >
                          {isPhaseExpanded ? "Recolher fase" : "Expandir fase"}
                          {isPhaseExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </div>

                      {isPhaseExpanded && (
                        <>
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
                        </>
                      )}
                    </section>
                  )
                })}
              </div>
            )}
          </article>
        )
      })}
    </div>
  )
}
