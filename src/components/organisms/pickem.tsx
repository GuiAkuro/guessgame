import { Group } from "./group";

export const Pickem = () => {
  return (
    <div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-gray-200">Fase de Grupos</h2>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
      </div>
    </div>
  )
}