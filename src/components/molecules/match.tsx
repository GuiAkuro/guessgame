export interface ITeam {
  id: number,
  name: string,
  flag: string,
  shield: string
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
        <div className="w-8 h-8 rounded bg-zinc-700"></div>
        <div>{ match.us.name }</div>
      </div>
      <div className="flex items-center gap-4 p-4 text-gray-300 font-semibold">
        <div className="w-8 h-8 rounded bg-zinc-700"></div>
        <div>{ match.them.name }</div>
      </div>
    </div>
  )
}