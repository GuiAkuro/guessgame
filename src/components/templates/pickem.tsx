import * as Tabs from '@radix-ui/react-tabs';
import { Group } from "../organisms/group";

export const Pickem = () => {
  return (
    <Tabs.Root defaultValue="pickem" orientation="vertical">
      <Tabs.List className="flex h-20 border-b bg-gray-900 border-zinc-800 items-center px-6 space-x-8">
        <Tabs.Trigger value="pickem" className="uppercase text-gray-400 text-sm">fase de grupos</Tabs.Trigger>
        <Tabs.Trigger value="knotout" className="uppercase text-gray-400 text-sm">mata-mata</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="pickem">
        <div className="container mx-auto">
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
      </Tabs.Content>

      <Tabs.Content value="knotout">
        <h2>Mata-mata</h2>
      </Tabs.Content>
    </Tabs.Root>
  )
}