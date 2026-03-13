import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

export function Input(props: Props) {
  return (
    <input
      {...props}
      className="
      w-full
      rounded-lg
      bg-white
      border border-gray-200
      px-3 py-2
      text-sm
      text-gray-700
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