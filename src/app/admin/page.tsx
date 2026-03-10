export default function AdminDashboard() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-[#092070] mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">
            Notícias publicadas
          </h2>
          <p className="text-3xl font-bold mt-2">
            12
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">
            Homilias
          </h2>
          <p className="text-3xl font-bold mt-2">
            8
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm">
            Agendamentos pendentes
          </h2>
          <p className="text-3xl font-bold mt-2">
            4
          </p>
        </div>

      </div>

    </div>
  )
}