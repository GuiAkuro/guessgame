import { RankingTable } from "../organisms/ranking-table"

export const Ranking = () => {
  return (
    <div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-gray-200 capitalize">classificação</h2>
      </div>

      <RankingTable />
    </div>
  )
}