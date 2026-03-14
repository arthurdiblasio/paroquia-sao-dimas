import { ButtonHTMLAttributes } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="
        rounded-lg
        bg-[#092070]
        px-4 py-2
        text-sm
        text-white
        shadow-sm
        transition
        hover:opacity-90
      "
    >
      {children}
    </button>
  )
}