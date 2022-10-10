import * as Avatar from "@radix-ui/react-avatar"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="px-6 bg-zinc-900 h-20 flex justify-between items-center border-b border-zinc-800">
      <div className="flex-auto flex justify-center">
        <ul className="flex gap-8 text-white uppercase font-semibold">
          <li><Link href="/"><a>Inicio</a></Link></li>
          <li><Link href="/games"><a>Jogos</a></Link></li>
          <li><Link href="/sweepstake"><a>Bolão</a></Link></li>
          <li><Link href="/ranking"><a>Classificação</a></Link></li>
        </ul>
      </div>

      <Avatar.Root className="bg-zinc-800 w-11 h-11 rounded overflow-hidden">
        <Avatar.Image src="/profile.jpg" />
        <Avatar.Fallback  />
      </Avatar.Root>

    </header>
  )
}