"use client"

import { FormEvent, useState } from "react"
import { Pencil, Trash2 } from "lucide-react"
import { Modal } from "@/components/ui/modal"
import { Table } from "@/components/ui/table"

type UserRow = {
  id: string
  name: string
  email: string
  role: string
  createdAt: string | Date
}

type Props = {
  users: UserRow[]
}

export function UsersTable({ users: initialUsers }: Props) {
  const [users, setUsers] = useState(initialUsers)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("COMUNICACAO")
  const [errorMessage, setErrorMessage] = useState("")
  const [isCreating, setIsCreating] = useState(false)
  const [userToEdit, setUserToEdit] = useState<UserRow | null>(null)
  const [editEmail, setEditEmail] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [userToDelete, setUserToDelete] = useState<UserRow | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  async function handleCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage("")
    setIsCreating(true)

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password, role }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    setIsCreating(false)

    const data = await response.json()

    if (!response.ok) {
      setErrorMessage(data?.error || "Erro ao criar usuário.")
      return
    }

    setUsers((current) => [data.user, ...current])
    setName("")
    setEmail("")
    setPassword("")
    setRole("COMUNICACAO")
  }

  async function handleUpdate() {
    if (!userToEdit) {
      return
    }

    setErrorMessage("")
    setIsUpdating(true)

    const response = await fetch(`/api/users/${userToEdit.id}`, {
      method: "PATCH",
      body: JSON.stringify({ email: editEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    setIsUpdating(false)

    const data = await response.json()

    if (!response.ok) {
      setErrorMessage(data?.error || "Erro ao atualizar e-mail.")
      return
    }

    setUsers((current) =>
      current.map((user) =>
        user.id === userToEdit.id ? { ...user, email: data.email } : user,
      ),
    )
    setUserToEdit(null)
  }

  async function handleDelete() {
    if (!userToDelete) {
      return
    }

    setErrorMessage("")
    setIsDeleting(true)

    const response = await fetch(`/api/users/${userToDelete.id}`, {
      method: "DELETE",
    })

    setIsDeleting(false)

    if (!response.ok) {
      const data = await response.json()
      setErrorMessage(data?.error || "Erro ao excluir usuário.")
      return
    }

    setUsers((current) => current.filter((user) => user.id !== userToDelete.id))
    setUserToDelete(null)
  }

  function openEditModal(user: UserRow) {
    setUserToEdit(user)
    setEditEmail(user.email)
    setErrorMessage("")
  }

  return (
    <div>
      <div className="border-b px-6 py-5">
        <h2 className="text-lg font-semibold text-gray-900">Novo usuário</h2>

        <form onSubmit={handleCreate} className="mt-4 space-y-4">
          <div className="grid gap-4 lg:grid-cols-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Nome</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#092070] focus:ring-2 focus:ring-[#092070]/10"
                placeholder="Nome do usuário"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">E-mail</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#092070] focus:ring-2 focus:ring-[#092070]/10"
                placeholder="email@exemplo.com"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Senha</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#092070] focus:ring-2 focus:ring-[#092070]/10"
                placeholder="Senha do usuário"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Role</span>
              <select
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#092070] focus:ring-2 focus:ring-[#092070]/10"
              >
                <option value="COMUNICACAO">COMUNICACAO</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </label>
          </div>

          {errorMessage && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isCreating}
              className="rounded-md bg-[#092070] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#071650] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isCreating ? "Cadastrando..." : "Adicionar usuário"}
            </button>
          </div>
        </form>
      </div>

      <Table>
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="p-4 text-left">Nome</th>
            <th className="p-4 text-left">E-mail</th>
            <th className="p-4 text-left">Role</th>
            <th className="p-4 text-left">Criado em</th>
            <th className="p-4 text-right">Ações</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="p-4 font-medium text-gray-800">{user.name}</td>
              <td className="p-4 text-gray-600 break-all">{user.email}</td>
              <td className="p-4 text-gray-600">{user.role}</td>
              <td className="p-4 text-gray-600">
                {new Intl.DateTimeFormat("pt-BR", {
                  dateStyle: "short",
                  timeStyle: "short",
                }).format(new Date(user.createdAt))}
              </td>
              <td className="p-4">
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => openEditModal(user)}
                    className="rounded-md p-2 text-[#092070] transition hover:bg-[#092070]/10"
                    title="Editar e-mail"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setUserToDelete(user)}
                    className="rounded-md p-2 text-red-500 transition hover:bg-red-50"
                    title="Excluir usuário"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {users.length === 0 && (
            <tr>
              <td colSpan={5} className="p-6 text-center text-gray-400">
                Nenhum usuário cadastrado.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Modal open={Boolean(userToEdit)} onClose={() => !isUpdating && setUserToEdit(null)}>
        <div className="max-w-xl">
          <h2 className="text-xl font-semibold text-gray-900">Editar e-mail</h2>

          <p className="mt-2 text-sm text-gray-600">
            Atualize o e-mail do usuário e confirme para salvar.
          </p>

          <label className="mt-6 block">
            <span className="text-sm font-medium text-gray-700">E-mail</span>
            <input
              type="email"
              value={editEmail}
              onChange={(event) => setEditEmail(event.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#092070] focus:ring-2 focus:ring-[#092070]/10"
            />
          </label>

          {errorMessage && (
            <p className="mt-3 text-sm text-red-600">{errorMessage}</p>
          )}

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setUserToEdit(null)}
              disabled={isUpdating}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Cancelar
            </button>

            <button
              type="button"
              onClick={handleUpdate}
              disabled={isUpdating}
              className="rounded-lg bg-[#092070] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#071650] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isUpdating ? "Salvando..." : "Salvar e-mail"}
            </button>
          </div>
        </div>
      </Modal>

      <Modal open={Boolean(userToDelete)} onClose={() => !isDeleting && setUserToDelete(null)}>
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold text-gray-900">Confirmar exclusão</h2>

          <p className="mt-3 text-sm text-gray-600">
            Deseja realmente excluir o usuário <span className="font-medium text-gray-900">{userToDelete?.name}</span>?
          </p>

          {errorMessage && (
            <p className="mt-3 text-sm text-red-600">{errorMessage}</p>
          )}

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setUserToDelete(null)}
              disabled={isDeleting}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Cancelar
            </button>

            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isDeleting ? "Excluindo..." : "Excluir usuário"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
