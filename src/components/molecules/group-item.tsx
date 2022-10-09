import { Reorder } from "framer-motion"
import { ITeam } from "./match"

interface IGroupItemProps {
  team: ITeam
}

export const GroupItem = ({ team }: IGroupItemProps) => {
  return (
    <Reorder.Item value={team} className="flex bg-zinc-800 p-4 rounded gap-4">
      <div className="bg-zinc-500 w-12 h-12 rounded"></div>
      <div>
        <div className="text-lg font-semibold text-gray-200">{team.name}</div>
        <div className="text-sm text-zinc-400">{team.region}</div>
      </div>
    </Reorder.Item>
  ) 
}