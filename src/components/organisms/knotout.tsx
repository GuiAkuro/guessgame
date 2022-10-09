import { Match } from "../molecules/match"

export const Knotout = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-12">
        <div className="flex flex-col">
          <h2 className="text-lg text-gray-200 uppercase font-semibold my-6">Oitavas de finais</h2>

          <div className="flex flex-col gap-8 justify-evenly h-full">
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg text-gray-200 uppercase font-semibold my-6">Quartas de finais</h2>

          <div className="flex flex-col gap-8 justify-evenly h-full">
            <Match />
            <Match />
            <Match />
            <Match />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg text-gray-200 uppercase font-semibold my-6">Semi-final</h2>

          <div className="flex flex-col gap-8  justify-evenly h-full">
            <Match />
            <Match />
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg text-gray-200 uppercase font-semibold my-6">Final</h2>

          <div className="flex flex-col gap-8  justify-evenly h-full">
            <Match />
          </div>
        </div>
      </div>
    </div>
  )
}