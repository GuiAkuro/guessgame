import { useGroupsStore } from "src/stores/goups";
import { Group } from "./group";

export const Pickem = () => {

  const { groups } = useGroupsStore()

  return (
    <div>
      <div className="my-8 p-4 sm:p-0 ">
        <h2 className="text-2xl font-semibold text-gray-200">Fase de Grupos</h2>
      </div>

      <div className="grid p-4 sm:p-0 sm:grid-cols-2 gap-8">
        {groups.map(group => (
          <Group key={group.id} group={group} />
        ))}
      </div>
    </div>
  )
}