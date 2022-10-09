import { IMatch, Match } from "./match"

export interface IPhase {
  id: number
  name: string
  matches: IMatch[]
}

interface IPhaseProps {
  phase: IPhase
}

export const Phase = ({ phase }: IPhaseProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg text-gray-200 uppercase font-semibold mb-4">{phase.name}</h2>

      <div className="flex flex-col gap-8  justify-evenly h-full">
        { phase.matches.map(match => (
          <Match key={match.id} match={match} />
        )) }
      </div>
    </div>
  )
}