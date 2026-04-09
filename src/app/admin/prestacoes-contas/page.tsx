"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Pencil, Trash } from "lucide-react"

import { SearchInput } from "@/components/ui/search-input"
import { Select } from "@/components/ui/select"
import { Table } from "@/components/ui/table"
import {
  getFinancialReportStatusLabel,
  type FinancialReportStatus,
} from "@/lib/financial-report"
import { type PublicationStatus } from "@/lib/publication-status"

type FinancialReportListItem = {
  id: string
  title: string
  status: FinancialReportStatus
  progressPercentage: number
  published: boolean
  updatedAt: string
  _count?: {
    phases: number
  }
}

export default function FinancialReportsPage() {
  const [reports, setReports] = useState<FinancialReportListItem[]>([])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  async function loadReports() {
    const response = await fetch("/api/financial-reports")
    const data: FinancialReportListItem[] = await response.json()

    setReports(data)
  }

  async function deleteReport(id: string) {
    const confirmDelete = confirm("Deseja excluir esta prestacao de contas?")

    if (!confirmDelete) {
      return
    }

    await fetch(`/api/financial-reports/${id}`, {
      method: "DELETE",
    })

    loadReports()
  }

  async function updatePublicationStatus(id: string, publicationStatus: PublicationStatus) {
    setUpdatingId(id)

    const response = await fetch(`/api/financial-reports/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ publicationStatus }),
    })

    setUpdatingId(null)

    if (!response.ok) {
      return
    }

    setReports((currentReports) =>
      currentReports.map((item) =>
        item.id === id
          ? {
              ...item,
              published: publicationStatus === "PUBLISHED",
            }
          : item
      )
    )
  }

  useEffect(() => {
    let isMounted = true

    fetch("/api/financial-reports")
      .then((response) => response.json())
      .then((data: FinancialReportListItem[]) => {
        if (isMounted) {
          setReports(data)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  const filteredReports = reports
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => {
      if (filter === "published") {
        return item.published
      }

      if (filter === "draft") {
        return !item.published
      }

      if (filter === "started") {
        return item.status === "STARTED"
      }

      if (filter === "in-progress") {
        return item.status === "IN_PROGRESS"
      }

      if (filter === "finished") {
        return item.status === "FINISHED"
      }

      return true
    })

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Prestacao de Contas
          </h1>

          <p className="text-sm text-gray-500">
            Gerencie os projetos e mostre para onde o dizimo esta sendo direcionado.
          </p>
        </div>

        <Link
          href="/admin/prestacoes-contas/new"
          className="rounded-md bg-[#092070] px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Nova prestacao
        </Link>
      </div>

      <div className="mb-6 flex gap-4">
        <SearchInput
          placeholder="Buscar prestacao..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todos</option>
          <option value="published">Publicados</option>
          <option value="draft">Rascunhos</option>
          <option value="started">Iniciados</option>
          <option value="in-progress">Em processo</option>
          <option value="finished">Finalizados</option>
        </Select>
      </div>

      <Table>
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="p-4 text-left">Titulo</th>
            <th className="p-4 text-left">Execucao</th>
            <th className="p-4 text-left">Fases</th>
            <th className="p-4 text-left">Publicacao</th>
            <th className="p-4 text-left">Atualizado em</th>
            <th className="p-4 text-right"></th>
          </tr>
        </thead>

        <tbody>
          {filteredReports.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="p-4 font-medium text-gray-800">
                {item.title}
              </td>

              <td className="p-4 text-gray-600">
                {getFinancialReportStatusLabel(item.status)}
                {item.status === "IN_PROGRESS" ? ` (${item.progressPercentage}%)` : ""}
              </td>

              <td className="p-4 text-gray-600">
                {item._count?.phases ?? 0}
              </td>

              <td className="p-4">
                <Select
                  value={item.published ? "PUBLISHED" : "DRAFT"}
                  onChange={(e) =>
                    updatePublicationStatus(item.id, e.target.value as PublicationStatus)
                  }
                  disabled={updatingId === item.id}
                >
                  <option value="DRAFT">Rascunho</option>
                  <option value="PUBLISHED">Publicado</option>
                </Select>
              </td>

              <td className="p-4 text-gray-600">
                {new Date(item.updatedAt).toLocaleDateString()}
              </td>

              <td className="flex justify-end gap-4 p-4">
                <Link
                  href={`/admin/prestacoes-contas/edit/${item.id}`}
                  className="flex items-center gap-1 text-[#092070]"
                >
                  <Pencil size={16} />
                  Editar
                </Link>

                <button
                  onClick={() => deleteReport(item.id)}
                  className="flex items-center gap-1 text-red-500"
                >
                  <Trash size={16} />
                  Excluir
                </button>
              </td>
            </tr>
          ))}

          {filteredReports.length === 0 && (
            <tr>
              <td colSpan={6} className="p-6 text-center text-gray-400">
                Nenhuma prestacao de contas encontrada
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}
