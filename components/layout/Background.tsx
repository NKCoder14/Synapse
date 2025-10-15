import { Starfield } from "@/components/effects/Starfield"

export const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#180952] via-[#421975] to-[#0b0837]" />

      <Starfield className="z-10" />

      <div className="absolute inset-0 z-20 bg-gradient-to-b from-background/30 via-background/10 to-background/30" />
    </div>
  )
}