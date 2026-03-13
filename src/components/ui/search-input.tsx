import { Search } from "lucide-react"
import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

export function SearchInput(props: Props) {
  return (
    <div className="relative w-64">

      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        {...props}
        className="
        w-full
        rounded-lg
        border border-gray-200
        bg-white
        pl-9 pr-3 py-2
        text-sm
        shadow-sm
        outline-none
        transition
        focus:border-[#092070]
        focus:ring-2
        focus:ring-[#092070]/10
        "
      />

    </div>
  )
}