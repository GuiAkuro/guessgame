import { MatchesTable } from "../organisms/matches-table"
import { NearMatches } from "../organisms/near-matches"

export const Games = () => {
  return (
    <div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-gray-200">Jogos</h2>
      </div>

      <NearMatches />
      <MatchesTable />
    </div>
  )
}