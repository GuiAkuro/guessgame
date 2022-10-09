import { GroupItem } from "../molecules/group-item"
import { ITeam } from "../molecules/match"

export interface IGroup {
  id: number,
  name: string,
  teams: ITeam[]
}

interface IGroupProps {
  group: IGroup
}

export const Group = ({ group }: IGroupProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-200 mb-4 capitalize">{group.name}</h3>

      <div className="flex flex-col gap-4">
        { group.teams.map(team => (
          <GroupItem key={team.id} team={team} />
        ))}
      </div>
    </div>
  ) 
}