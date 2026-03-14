"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

type Props = {
  value: string
  onChange: (value: string) => void
}

export function Editor({ value, onChange }: Props) {

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    }
  })

  if (!editor) return null

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm">

      {/* Toolbar */}
      <div className="flex gap-2 border-b p-2">

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="text-sm px-2 font-bold"
        >
          B
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="text-sm px-2 italic"
        >
          I
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="text-sm px-2"
        >
          • Lista
        </button>

      </div>

      <EditorContent
        editor={editor}
        className="p-3 min-h-[200px]"
      />

    </div>
  )
}