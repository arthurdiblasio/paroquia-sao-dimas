"use client"

import { useState } from "react"

type Props = {
  images: string[]
  setImages: (urls: string[]) => void
}

export function ImageUpload({ images, setImages }: Props) {

  const [previews, setPreviews] = useState<string[]>([])

  async function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {

    if (!e.target.files) return

    const files = Array.from(e.target.files)

    const newPreviews = files.map(file => URL.createObjectURL(file))

    setPreviews([...previews, ...newPreviews])

    for (const file of files) {

      const formData = new FormData()

      formData.append("file", file)

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      })

      const data = await res.json()

      setImages(prev => [...prev, data.url])

    }

  }

  return (

    <div className="space-y-4">

      <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center">

        <input
          type="file"
          multiple
          onChange={handleFiles}
        />

        <p className="text-sm text-gray-500 mt-2">
          Adicione imagens da notícia
        </p>

      </div>

      {previews.length > 0 && (

        <div className="grid grid-cols-3 gap-3">

          {previews.map((src, index) => (

            <img
              key={index}
              src={src}
              className="rounded-lg object-cover h-24 w-full"
            />

          ))}

        </div>

      )}

    </div>

  )
}