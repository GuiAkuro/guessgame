import * as Tabs from '@radix-ui/react-tabs';
import { Knotout } from "../organisms/knotout";
import { Pickem } from "../organisms/pickem";

export const Sweepstake = () => {
  return (
    <Tabs.Root defaultValue="pickem" orientation="vertical">
      <Tabs.List className="flex h-20 border-b bg-gray-900 border-zinc-800 items-center px-6 space-x-8">
        <Tabs.Trigger value="pickem" className="uppercase text-gray-400 text-sm">fase de grupos</Tabs.Trigger>
        <Tabs.Trigger value="knotout" className="uppercase text-gray-400 text-sm">mata-mata</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="pickem">
        <Pickem />
      </Tabs.Content>

      <Tabs.Content value="knotout">
        <Knotout />
      </Tabs.Content>
    </Tabs.Root>
  )
}