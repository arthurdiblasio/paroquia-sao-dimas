import Footer from "@/components/footer"
import Header from "@/components/header"
import { AppointmentForm } from "@/components/appointments/appointment-form"

export default function AppointmentsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[linear-gradient(180deg,_#f8fafc_0%,_#ffffff_24%,_#f8fafc_100%)]">
        <section className="border-b border-[#092070]/10 bg-white/90">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#092070]">
              Paroquia São Dimas
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              Agende batismo ou casamento com envio dos documentos pela própria página.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              Escolha o tipo de agendamento, informe seus dados e anexe as fotos dos
              documentos para registrar a solicitação no sistema da paróquia.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
          <AppointmentForm />
        </section>
      </main>

      <Footer />
    </>
  )
}
