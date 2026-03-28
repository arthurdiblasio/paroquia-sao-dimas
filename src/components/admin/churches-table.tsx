"use client"

import { useState } from "react"
import Link from "next/link"
import { Pencil, Trash2 } from "lucide-react"

import { Modal } from "@/components/ui/modal"
import { Table } from "@/components/ui/table"

type ChurchRow = {
  id: string
  name: string
  address: string
  isMainChurch: boolean
  massSchedules: {
    dayOfWeek: number
    time: string
    notes: string
  }[]
}

type Props = {
  churches: ChurchRow[]
}

export function ChurchesTable({ churches: initialChurches }: Props) {
  const [churches, setChurches] = useState(initialChurches)
  const [churchToDelete, setChurchToDelete] = useState<ChurchRow | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const weekDays = [
    "Domingo",
    "Segunda",
    "Terca",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ]

  async function handleDelete() {
    if (!churchToDelete) {
      return
    }

    setIsDeleting(true)

    const response = await fetch(`/api/churches/${churchToDelete.id}`, {
      method: "DELETE",
    })

    setIsDeleting(false)

    if (!response.ok) {
      return
    }

    setChurches((currentChurches) =>
      currentChurches.filter((church) => church.id !== churchToDelete.id)
    )
    setChurchToDelete(null)
  }

  return (
    <>
      <Table>
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="p-4 text-left">Nome</th>
            <th className="p-4 text-left">Endereco</th>
            <th className="p-4 text-left">Horarios</th>
            <th className="p-4 text-right">Acoes</th>
          </tr>
        </thead>

        <tbody>
          {churches.map((church) => {
            const groupedSchedules = weekDays
              .map((day, index) => ({
                day,
                items: church.massSchedules
                  .filter((schedule) => schedule.dayOfWeek === index)
                  .sort((first, second) => first.time.localeCompare(second.time)),
              }))
              .filter((group) => group.items.length > 0)

            return (
              <tr key={church.id} className="hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">
                  <div className="flex items-center gap-2">
                    <span>{church.name}</span>

                    {church.isMainChurch && (
                      <span className="rounded-full bg-[#092070]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#092070]">
                        Matriz
                      </span>
                    )}
                  </div>
                </td>

                <td className="p-4 text-gray-600">
                  {church.address}
                </td>

                <td className="p-4">
                  {groupedSchedules.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {groupedSchedules.map((group) => (
                        <div
                          key={group.day}
                          className="min-w-[180px] rounded-xl border border-[#092070]/10 bg-[#092070]/[0.03] px-3 py-2"
                        >
                          <p className="text-xs font-semibold uppercase tracking-wide text-[#092070]">
                            {group.day}
                          </p>

                          <div className="mt-2 flex flex-wrap gap-2">
                            {group.items.map((schedule, index) => (
                              <span
                                key={`${group.day}-${schedule.time}-${index}`}
                                className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200"
                              >
                                {schedule.time}
                                {schedule.notes ? ` - ${schedule.notes}` : ""}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400">
                      Nenhum horario cadastrado
                    </span>
                  )}
                </td>

                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/admin/igrejas/edit/${church.id}`}
                      className="rounded-md p-2 text-[#092070] transition hover:bg-[#092070]/10"
                      aria-label={`Editar ${church.name}`}
                      title="Editar"
                    >
                      <Pencil size={16} />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setChurchToDelete(church)}
                      className="rounded-md p-2 text-red-500 transition hover:bg-red-50"
                      aria-label={`Excluir ${church.name}`}
                      title="Excluir"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}

          {churches.length === 0 && (
            <tr>
              <td colSpan={4} className="p-6 text-center text-gray-400">
                Nenhuma igreja cadastrada
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal open={churchToDelete !== null} onClose={() => !isDeleting && setChurchToDelete(null)}>
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold text-gray-900">
            Confirmar exclusao
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            Deseja realmente excluir a igreja{" "}
            <span className="font-medium text-gray-900">
              {churchToDelete?.name}
            </span>
            ?
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Esta acao tambem remove os horarios de missa e as imagens vinculadas.
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setChurchToDelete(null)}
              disabled={isDeleting}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Cancelar
            </button>

            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isDeleting ? "Excluindo..." : "Excluir igreja"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
