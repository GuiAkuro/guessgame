import { MatchTableItem } from "../molecules/match-table-item"

export const MatchesTable = () => {
  return (
    <div className="mt-6">
      <div className="overflow-hidden">
        <table className="w-full text-gray-200 text-sm">
          <tbody>
            {[1,2,3,4,5,6,7,8].map((id) => (
              <MatchTableItem key={id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}