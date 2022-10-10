import Image from "next/future/image"

export const NearMatch = () => {
  return (
    <div className="flex flex-col bg-zinc-800 rounded text-gray-200 gap-4 p-4">
      <div className="flex-auto flex items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <div className="">Brasil</div>
          <div className="relative h-12 w-12">
            <Image src="/shields/CBF.svg" alt="CBF" fill className="absolute" />
          </div>
        </div>
        <div className="text-2xl">vs</div>
        <div  className="flex items-center gap-4">
          <div className="relative h-12 w-12">
            <Image src="/shields/FEF.svg" alt="FEF" fill className="absolute" />
          </div>
          <div className="">Equador</div>
        </div>
      </div>
      <button className="h-12 border border-green-600 text-green-600 text-sm w-full rounded uppercase font-semibold">Fazer meu palpite</button>
    </div>
  )
}