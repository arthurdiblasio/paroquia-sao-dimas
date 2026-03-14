import { SelectHTMLAttributes } from "react"

type Props = SelectHTMLAttributes<HTMLSelectElement>

export function Select(props: Props) {
  return (
    <select
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