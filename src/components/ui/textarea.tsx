import { TextareaHTMLAttributes } from "react"

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea(props: Props) {
  return (
    <textarea
      {...props}
      className="
        w-full
        rounded-lg
        border border-gray-200
        bg-white
        px-3 py-2
        text-sm
        shadow-sm
        outline-none
        transition
        focus:border-[#092070]
        focus:ring-2
        focus:ring-[#092070]/10
      "
    />
  )
}