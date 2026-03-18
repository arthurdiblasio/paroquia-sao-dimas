"use client"

import { useEffect, useRef } from "react"

type Props = {
  value: string
  onChange: (value: string) => void
  onSelect: (data: {
    address: string
    lat: number
    lng: number
  }) => void
}

export function AddressAutocomplete({
  value,
  onChange,
  onSelect,
}: Props) {

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {

    if (!window.google || !inputRef.current) return

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["address"],
        componentRestrictions: { country: "br" },
      }
    )

    autocomplete.addListener("place_changed", () => {

      const place = autocomplete.getPlace()

      const lat = place.geometry?.location?.lat()
      const lng = place.geometry?.location?.lng()

      if (!lat || !lng) return

      onSelect({
        address: place.formatted_address || "",
        lat,
        lng,
      })
    })

  }, [])

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Digite o endereço"
      className="w-full border rounded-xl px-4 py-2 shadow-sm"
    />
  )
}