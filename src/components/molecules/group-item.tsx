import { Reorder } from 'framer-motion'
import Image from "next/future/image"
import { ITeam } from "./match"

interface IGroupItemProps {
  team: ITeam
}

export const GroupItem = ({ team }: IGroupItemProps) => {
  return (
    <Reorder.Item value={team} id={`${team.id}`} className="flex bg-zinc-800 p-4 rounded gap-4">
      <div className="relative w-12 h-12">
        <Image src={team.shield} alt="" fill className="absolute" />
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-200">{team.name}</div>
        <div className="text-sm text-zinc-400">{team.region}</div>
      </div>
    </Reorder.Item>
  ) 
}