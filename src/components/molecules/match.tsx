import Image from "next/future/image"

export interface ITeam {
  id: number,
  name: string,
  flag: string,
  shield: string,
  region: string
}

export interface IMatch {
  id: number,
  us: ITeam,
  them: ITeam
}

interface IMatchPorps {
  match: IMatch
}

export const Match = ({ match }: IMatchPorps) => {
  return (
    <div className="bg-zinc-800 rounded border border-zinc-900">
      <div className="flex items-center gap-4 p-4 border-b border-zinc-900 text-gray-300 font-semibold">
        <div className={`relative w-8 h-8 rounded ${match.us.shield ? '' : 'bg-zinc-700'}`}>
        {match.us.shield && (
            <Image src={match.us.shield} alt="" fill className="absolute" />
          )}
        </div>
        <div>{ match.us.name }</div>
      </div>
      <div className="flex items-center gap-4 p-4 text-gray-300 font-semibold">
        <div className={`relative w-8 h-8 rounded ${match.them.shield ? '' : 'bg-zinc-700'}`}>
          {match.them.shield && (
            <Image src={match.them.shield} alt="" fill className="absolute" />
          )}
        </div>
        <div>{ match.them.name }</div>
      </div>
    </div>
  )
}