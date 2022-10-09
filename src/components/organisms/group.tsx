import { Reorder } from "framer-motion"
import { useState } from "react"
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

  const [teams, setTeams] = useState(group.teams)


  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-200 mb-4 capitalize">{group.name}</h3>

      <Reorder.Group axis="y" values={teams} onReorder={setTeams} className="flex flex-col gap-4">
        { teams.map(team => (
          <GroupItem key={team.id} team={team} />
        ))}
      </Reorder.Group>

    </div>
  ) 
}