"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import { TextStyle } from "@tiptap/extension-text-style"
import Color from "@tiptap/extension-color"
import { ResizableImage } from "../editor/extensions/image-resize"


type Props = {
  value: string
  onChange: (value: string) => void
}

export function Editor({ value, onChange }: Props) {

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: "mb-4",
          },
        },
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
      TextStyle,
      Color,
      ResizableImage
    ],
    content: value,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-lg max-w-none focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    }
  })

  if (!editor) return null

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">

      {/* TOOLBAR */}
      <div className="flex flex-wrap gap-2 border-b p-2 bg-gray-50">

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </button>

        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          <b>B</b>
        </button>

        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          <i>I</i>
        </button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          • Lista
        </button>

        <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          Citação
        </button>

        {/* LINK */}
        <button
          onClick={() => {
            const url = prompt("URL")
            if (url) editor.chain().focus().setLink({ href: url }).run()
          }}
        >
          Link
        </button>

        {/* COR */}
        <button onClick={() => editor.chain().focus().setColor("#DF9822").run()}>
          Cor
        </button>

        {/* IMAGEM UPLOAD */}
        <button
          onClick={async () => {

            const input = document.createElement("input")
            input.type = "file"
            input.accept = "image/*"

            input.onchange = async () => {

              if (!input.files?.length) return

              const file = input.files[0]

              const formData = new FormData()
              formData.append("file", file)

              const res = await fetch("/api/upload", {
                method: "POST",
                body: formData
              })

              const data = await res.json()

              editor.chain().focus().setImage({
                src: data.url,
              })
                .updateAttributes("image", { align: "center" })
                .run()
            }

            input.click()
          }}
        >
          Imagem
        </button>

        {/* ALIGN */}
        <button onClick={() => editor.chain().focus().updateAttributes("image", { align: "left" }).run()}>
          ⬅
        </button>

        <button onClick={() => editor.chain().focus().updateAttributes("image", { align: "center" }).run()}>
          ⬍
        </button>

        <button onClick={() => editor.chain().focus().updateAttributes("image", { align: "right" }).run()}>
          ➡
        </button>

      </div>

      {/* EDITOR */}
      <EditorContent
        editor={editor}
        className="p-4 min-h-[300px]"
      />

    </div>
  )
}