"use client"

import { Dispatch, SetStateAction, useId, useRef, useState } from "react"
import { FileText, ImagePlus, LoaderCircle, UploadCloud, X } from "lucide-react"

type Props = {
  images: string[]
  fileType?: "image" | "file"
  accept?: string
  multiple?: boolean
  setImages: Dispatch<SetStateAction<string[]>>
}

function getFileName(value: string) {
  const normalizedValue = value.split("?")[0] ?? value
  const segments = normalizedValue.split("/")

  return segments[segments.length - 1] || "Arquivo"
}

export function ImageUpload({
  images,
  fileType = "image",
  accept,
  multiple = true,
  setImages,
}: Props) {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const previews = images.map((image) => ({
    url: image,
    name: getFileName(image),
  }))

  async function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return

    const files = Array.from(e.target.files)
    setIsUploading(true)
    setErrorMessage("")

    try {
      for (const file of files) {
        const formData = new FormData()

        formData.append("file", file)

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })

        if (!res.ok) {
          throw new Error("Nao foi possivel enviar o arquivo.")
        }

        const data = await res.json()

        if (!data.url) {
          throw new Error("Upload sem retorno de url.")
        }

        setImages((prev) => multiple ? [...prev, data.url] : [data.url])
      }
    } catch {
      setErrorMessage(
        fileType === "image"
          ? "Nao foi possivel enviar a imagem."
          : "Nao foi possivel enviar o arquivo."
      )
    } finally {
      setIsUploading(false)
      e.target.value = ""
    }
  }

  function handleRemoveImage(indexToRemove: number) {
    setImages((prev) => prev.filter((_, index) => index !== indexToRemove))
  }

  return (

    <div className="space-y-4">
      <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50/80 p-6 text-center">
        <input
          id={inputId}
          ref={inputRef}
          type="file"
          accept={accept ?? (fileType === "image" ? "image/*" : undefined)}
          multiple={multiple}
          onChange={handleFiles}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-3">
          <div className="rounded-full bg-[#092070]/10 p-3 text-[#092070]">
            {fileType === "image" ? <ImagePlus size={22} /> : <UploadCloud size={22} />}
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-900">
              {fileType === "image"
                ? multiple
                  ? "Selecione as imagens"
                  : "Selecione uma imagem"
                : multiple
                  ? "Selecione os arquivos"
                  : "Selecione um arquivo"}
            </p>

            <p className="text-sm text-gray-500">
              {fileType === "image"
                ? "O preview aparecera logo abaixo apos o envio."
                : "Os arquivos enviados aparecerao logo abaixo."}
            </p>
          </div>

          <label
            htmlFor={inputId}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#092070] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            {isUploading ? <LoaderCircle size={16} className="animate-spin" /> : <UploadCloud size={16} />}
            {isUploading
              ? "Enviando..."
              : fileType === "image"
                ? "Escolher imagem"
                : "Escolher arquivo"}
          </label>

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="text-xs text-gray-500 underline underline-offset-2"
          >
            Ou clique aqui para abrir o seletor
          </button>
        </div>
      </div>

      {previews.length > 0 && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {previews.map((preview, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="absolute right-2 top-2 rounded-full bg-black/70 p-1 text-white transition hover:bg-black"
                aria-label="Excluir imagem"
                title="Excluir imagem"
              >
                <X size={14} />
              </button>

              {fileType === "image" ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={preview.url}
                    alt=""
                    className="h-40 w-full rounded-lg object-cover"
                  />

                  <p className="mt-2 truncate px-1 text-sm text-gray-600">
                    {preview.name}
                  </p>
                </>
              ) : (
                <div className="flex h-24 items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-3">
                  <FileText size={20} className="text-[#092070]" />

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-800">
                      {preview.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      Arquivo selecionado
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {errorMessage && (
        <p className="text-sm text-red-600">
          {errorMessage}
        </p>
      )}

    </div>

  )
}
