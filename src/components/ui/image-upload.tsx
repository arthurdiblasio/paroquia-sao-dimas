"use client"

import { Dispatch, SetStateAction } from "react"
import { FileText, X } from "lucide-react"

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
  const previews = images.map((image) => ({
    url: image,
    name: getFileName(image),
  }))

  async function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {

    if (!e.target.files) return

    const files = Array.from(e.target.files)

    for (const file of files) {
      const formData = new FormData()

      formData.append("file", file)

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      })

      const data = await res.json()

      setImages((prev) => multiple ? [...prev, data.url] : [data.url])

    }

    e.target.value = ""

  }

  function handleRemoveImage(indexToRemove: number) {
    setImages((prev) => prev.filter((_, index) => index !== indexToRemove))
  }

  return (

    <div className="space-y-4">

      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">

        <input
          type="file"
          accept={accept ?? (fileType === "image" ? "image/*" : undefined)}
          multiple={multiple}
          onChange={handleFiles}
        />

        <p className="text-sm text-gray-500 mt-2">
          {fileType === "image" ? "Adicione imagens" : "Adicione arquivos"}
        </p>

      </div>

      {previews.length > 0 && (

        <div className="grid grid-cols-3 gap-3">

          {previews.map((preview, index) => (

            <div key={index} className="relative">
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
                    className="h-24 w-full rounded-lg object-cover"
                  />
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

    </div>

  )
}
