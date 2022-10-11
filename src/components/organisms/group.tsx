import { Reorder } from 'framer-motion'
import { useState } from "react"
import { useGroupsStore } from "src/stores/goups"
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

  const { updateGroup } = useGroupsStore()
  const [teams, setTeams] = useState(group.teams)

  function handleReorder(teams: ITeam[]) {
    setTeams(teams)
    updateGroup(group.id, teams)
  }


  return (
    <div>
      <h3 className="ml-16 text-xl font-semibold text-gray-200 mb-4 capitalize">{group.name}</h3>

      <div className="flex">
        <div className="">
          <div className="text-gray-200 font-bold text-2xl px-6 py-[30px]">1</div>
          <div className="text-gray-200 font-bold text-2xl px-6 py-[30px]">2</div>
          <div className="text-gray-200 font-bold text-2xl px-6 py-[30px]">3</div>
          <div className="text-gray-200 font-bold text-2xl px-6 py-[30px]">4</div>
        </div>
        <Reorder.Group axis="y" values={teams} onReorder={handleReorder} className="relative flex-auto flex flex-col gap-4">
          {teams.map(team => (
            <GroupItem key={team.id} team={team} />
          ))}
        </Reorder.Group>
      </div>

    </div>
  ) 
}