import { FinancialReportsList } from "@/components/site/financial-reports-list"
import { prisma } from "lib/prisma"

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
          <FinancialReportsList reports={reports} />
        )}
      </section>
    </div>
  )
}
