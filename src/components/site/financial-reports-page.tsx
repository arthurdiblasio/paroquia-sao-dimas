import { FinancialReportsList } from "@/components/site/financial-reports-list"
import { fetchInternalApi } from "@/lib/internal-api"
import { type FinancialReportStatus } from "@/lib/financial-report"

type FinancialReportItem = {
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
}

export async function FinancialReportsPage() {
  const reports = await fetchInternalApi<FinancialReportItem[]>("/api/financial-reports?published=true")

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
          <FinancialReportsList reports={reports} />
        )}
      </section>
    </div>
  )
}
