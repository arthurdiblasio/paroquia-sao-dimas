"use client"

import { useState } from "react"
import Link from "next/link"
import { Pencil, Trash2, Video } from "lucide-react"

import { Modal } from "@/components/ui/modal"
import { Table } from "@/components/ui/table"

type HomilyRow = {
  id: string
  title: string
  description: string | null
  videoUrl: string | null
  date: string
  published: boolean
  createdByName: string
}

type Props = {
  homilies: HomilyRow[]
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value))
}

export function HomiliesTable({ homilies: initialHomilies }: Props) {
  const [homilies, setHomilies] = useState(initialHomilies)
  const [homilyToDelete, setHomilyToDelete] = useState<HomilyRow | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleDelete() {
    if (!homilyToDelete) {
      return
    }

    setIsDeleting(true)

    const response = await fetch(`/api/homilies/${homilyToDelete.id}`, {
      method: "DELETE",
    })

    setIsDeleting(false)

    if (!response.ok) {
      return
    }

    setHomilies((currentHomilies) =>
      currentHomilies.filter((homily) => homily.id !== homilyToDelete.id)
    )
    setHomilyToDelete(null)
  }

  return (
    <>
      <Table>
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="p-4 text-left">Homilia</th>
            <th className="p-4 text-left">Data</th>
            <th className="p-4 text-left">Video</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Criado por</th>
            <th className="p-4 text-right">Acoes</th>
          </tr>
        </thead>

        <tbody>
          {homilies.map((homily) => (
            <tr key={homily.id} className="hover:bg-gray-50">
              <td className="p-4">
                <div className="space-y-1">
                  <p className="font-medium text-gray-800">
                    {homily.title}
                  </p>

                  <p className="text-sm text-gray-500">
                    {homily.description?.trim() || "Sem descricao"}
                  </p>
                </div>
              </td>

              <td className="p-4 text-gray-600">
                {formatDate(homily.date)}
              </td>

              <td className="p-4 text-gray-600">
                {homily.videoUrl ? (
                  <a
                    href={homily.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#092070] hover:underline"
                  >
                    <Video size={16} />
                    Abrir video
                  </a>
                ) : (
                  "Sem video"
                )}
              </td>

              <td className="p-4">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                    homily.published
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {homily.published ? "Publicada" : "Rascunho"}
                </span>
              </td>

              <td className="p-4 text-gray-600">
                {homily.createdByName}
              </td>

              <td className="p-4">
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/admin/homilias/edit/${homily.id}`}
                    className="rounded-md p-2 text-[#092070] transition hover:bg-[#092070]/10"
                    aria-label={`Editar ${homily.title}`}
                    title="Editar"
                  >
                    <Pencil size={16} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setHomilyToDelete(homily)}
                    className="rounded-md p-2 text-red-500 transition hover:bg-red-50"
                    aria-label={`Excluir ${homily.title}`}
                    title="Excluir"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {homilies.length === 0 && (
            <tr>
              <td colSpan={6} className="p-6 text-center text-gray-400">
                Nenhuma homilia cadastrada
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal open={homilyToDelete !== null} onClose={() => !isDeleting && setHomilyToDelete(null)}>
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold text-gray-900">
            Confirmar exclusao
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            Deseja realmente excluir a homilia{" "}
            <span className="font-medium text-gray-900">
              {homilyToDelete?.title}
            </span>
            ?
          </p>

          <p className="mt-2 text-sm text-gray-500">
            O vinculo com a midia de video tambem sera removido.
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setHomilyToDelete(null)}
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
              {isDeleting ? "Excluindo..." : "Excluir homilia"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
