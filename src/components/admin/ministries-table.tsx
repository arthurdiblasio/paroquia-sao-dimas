"use client"

import { useState } from "react"
import Link from "next/link"
import { Pencil, Trash2 } from "lucide-react"

import { Modal } from "@/components/ui/modal"
import { Table } from "@/components/ui/table"

type MinistryRow = {
  id: string
  name: string
  slug: string
  description: string | null
  contactName: string | null
  contactPhone: string | null
  imageUrl: string | null
}

type Props = {
  ministries: MinistryRow[]
}

export function MinistriesTable({ ministries: initialMinistries }: Props) {
  const [ministries, setMinistries] = useState(initialMinistries)
  const [ministryToDelete, setMinistryToDelete] = useState<MinistryRow | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleDelete() {
    if (!ministryToDelete) {
      return
    }

    setIsDeleting(true)

    const response = await fetch(`/api/ministries/${ministryToDelete.id}`, {
      method: "DELETE",
    })

    setIsDeleting(false)

    if (!response.ok) {
      return
    }

    setMinistries((currentMinistries) =>
      currentMinistries.filter((ministry) => ministry.id !== ministryToDelete.id)
    )
    setMinistryToDelete(null)
  }

  return (
    <>
      <Table>
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="p-4 text-left">Pastoral</th>
            <th className="p-4 text-left">Descricao</th>
            <th className="p-4 text-left">Contato</th>
            <th className="p-4 text-left">Slug</th>
            <th className="p-4 text-right">Acoes</th>
          </tr>
        </thead>

        <tbody>
          {ministries.map((ministry) => (
            <tr key={ministry.id} className="hover:bg-gray-50">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  {ministry.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={ministry.imageUrl}
                      alt=""
                      className="h-12 w-12 rounded-lg object-cover ring-1 ring-gray-200"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-xs font-medium text-gray-400 ring-1 ring-gray-200">
                      Sem
                    </div>
                  )}

                  <div>
                    <p className="font-medium text-gray-800">
                      {ministry.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {ministry.imageUrl ? "Com imagem" : "Sem imagem"}
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-4 text-gray-600">
                {ministry.description?.trim() || "Sem descricao"}
              </td>

              <td className="p-4 text-gray-600">
                <div className="space-y-1">
                  <p>{ministry.contactName?.trim() || "Sem responsavel"}</p>
                  <p className="text-sm text-gray-500">
                    {ministry.contactPhone?.trim() || "Sem telefone"}
                  </p>
                </div>
              </td>

              <td className="p-4 text-gray-500">
                {ministry.slug}
              </td>

              <td className="p-4">
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/admin/pastorais/edit/${ministry.id}`}
                    className="rounded-md p-2 text-[#092070] transition hover:bg-[#092070]/10"
                    aria-label={`Editar ${ministry.name}`}
                    title="Editar"
                  >
                    <Pencil size={16} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setMinistryToDelete(ministry)}
                    className="rounded-md p-2 text-red-500 transition hover:bg-red-50"
                    aria-label={`Excluir ${ministry.name}`}
                    title="Excluir"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {ministries.length === 0 && (
            <tr>
              <td colSpan={5} className="p-6 text-center text-gray-400">
                Nenhuma pastoral cadastrada
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal open={ministryToDelete !== null} onClose={() => !isDeleting && setMinistryToDelete(null)}>
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold text-gray-900">
            Confirmar exclusao
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            Deseja realmente excluir a pastoral{" "}
            <span className="font-medium text-gray-900">
              {ministryToDelete?.name}
            </span>
            ?
          </p>

          <p className="mt-2 text-sm text-gray-500">
            A imagem vinculada e o registro de midia dessa pastoral tambem serao removidos.
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setMinistryToDelete(null)}
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
              {isDeleting ? "Excluindo..." : "Excluir pastoral"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
