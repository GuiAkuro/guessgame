import Image from "next/future/image"
import { NearMatch } from "../molecules/near-march"

export const NearMatches = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col bg-zinc-800 rounded text-gray-200 gap-4 col-span-2 p-4">
        <div className="flex-auto flex items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <div className="text-2xl">Brasil</div>
            <div className="relative h-32 w-32">
              <Image src="/shields/CBF.svg" alt="CBF" fill className="absolute" />
            </div>
          </div>
          <div className="text-5xl">vs</div>
          <div  className="flex items-center gap-4">
            <div className="relative h-32 w-32">
              <Image src="/shields/FEF.svg" alt="FEF" fill className="absolute" />
            </div>
            <div className="text-2xl">Equador</div>
          </div>
        </div>
        <button className="h-12 bg-green-600 w-full rounded uppercase font-semibold text-sm">Fazer meu palpite</button>
      </div>

      <div className="grid gap-4">
        <NearMatch />
        <NearMatch />
      </div>
    </div>
  )
}