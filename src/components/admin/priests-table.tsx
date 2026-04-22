import { Table } from "@/components/ui/table"

type PriestRow = {
  id: string
  name: string
  birthDate: Date
  birthCity: string
  photoUrl: string | null
  startDate: Date
  endDate: Date | null
  deathDate: Date | null
}

type Props = {
  priests: PriestRow[]
}

function formatDate(value: Date) {
  return value.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}

export function PriestsTable({ priests }: Props) {
  return (
    <Table>
      <thead className="bg-gray-50 text-gray-500">
        <tr>
          <th className="p-4 text-left">Nome</th>
          <th className="p-4 text-left">Nascimento</th>
          <th className="p-4 text-left">Cidade</th>
          <th className="p-4 text-left">Período</th>
          <th className="p-4 text-left">Falecimento</th>
        </tr>
      </thead>

      <tbody>
        {priests.map((priest) => (
          <tr key={priest.id} className="hover:bg-gray-50">
            <td className="p-4">
              <div className="flex items-center gap-3">
                {priest.photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={priest.photoUrl}
                    alt={priest.name}
                    className="h-12 w-12 rounded-lg object-cover ring-1 ring-gray-200"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-xs font-medium text-gray-400 ring-1 ring-gray-200">
                    Sem
                  </div>
                )}

                <span className="font-medium text-gray-800">{priest.name}</span>
              </div>
            </td>

            <td className="p-4 text-gray-600">{formatDate(priest.birthDate)}</td>
            <td className="p-4 text-gray-600">{priest.birthCity}</td>
            <td className="p-4 text-gray-600">
              {formatDate(priest.startDate)}
              {priest.endDate ? ` – ${formatDate(priest.endDate)}` : " até hoje"}
            </td>
            <td className="p-4 text-gray-600">
              {priest.deathDate ? formatDate(priest.deathDate) : "Ainda vivo"}
            </td>
          </tr>
        ))}

        {priests.length === 0 && (
          <tr>
            <td colSpan={5} className="p-6 text-center text-gray-400">
              Nenhum pároco cadastrado ainda.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}
