import { GroupItem } from "../molecules/group-item"

export const Group = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-200 mb-4">Grupo A</h3>

      <div className="flex flex-col gap-4">
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
      </div>
    </div>
  ) 
}