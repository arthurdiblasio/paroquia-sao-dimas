"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import type { MouseEvent, ReactNode } from "react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import { TextStyle } from "@tiptap/extension-text-style"
import Color from "@tiptap/extension-color"

import { ResizableImage } from "../editor/extensions/image-resize"

type Props = {
  value: string
  onChange: (value: string) => void
}

type ToolbarButtonProps = {
  children: ReactNode
  onClick: () => void | Promise<void>
}

function ToolbarButton({ children, onClick }: ToolbarButtonProps) {
  async function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    await onClick()
  }

  return (
    <button
      type="button"
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleClick}
      className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-sm text-gray-700 transition hover:bg-gray-100"
    >
      {children}
    </button>
  )
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
      ResizableImage,
    ],
    content: value,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-lg max-w-none focus:outline-none",
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      onChange(currentEditor.getHTML())
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <div className="flex flex-wrap gap-2 border-b bg-gray-50 p-2">
        <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </ToolbarButton>

        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()}>
          <b>B</b>
        </ToolbarButton>

        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()}>
          <i>I</i>
        </ToolbarButton>

        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Lista
        </ToolbarButton>

        {/* <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          Citacao
        </ToolbarButton> */}
        {/* 
        <ToolbarButton
          onClick={() => {
            const url = window.prompt("URL")

            if (url) {
              editor.chain().focus().setLink({ href: url }).run()
            }
          }}
        >
          Link
        </ToolbarButton> */}
        {/* 
        <ToolbarButton onClick={() => editor.chain().focus().setColor("#DF9822").run()}>
          Cor
        </ToolbarButton> */}

        {/* <ToolbarButton
          onClick={async () => {
            const input = document.createElement("input")
            input.type = "file"
            input.accept = "image/*"

            input.onchange = async () => {
              if (!input.files?.length) {
                return
              }

              const file = input.files[0]
              const formData = new FormData()
              formData.append("file", file)

              const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
              })

              if (!res.ok) {
                return
              }

              const data = await res.json()

              if (!data.url) {
                return
              }

              editor.chain().focus().setImage({ src: data.url }).updateAttributes("image", {
                align: "center",
              }).run()
            }

            input.click()
          }}
        >
          Imagem
        </ToolbarButton>

        <ToolbarButton onClick={() => editor.chain().focus().updateAttributes("image", { align: "left" }).run()}>
          Esq
        </ToolbarButton>

        <ToolbarButton onClick={() => editor.chain().focus().updateAttributes("image", { align: "center" }).run()}>
          Centro
        </ToolbarButton>

        <ToolbarButton onClick={() => editor.chain().focus().updateAttributes("image", { align: "right" }).run()}>
          Dir
        </ToolbarButton> */}
      </div>

      <EditorContent editor={editor} className="min-h-[300px] p-4" />
    </div>
  )
}
