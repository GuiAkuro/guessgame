export const NearMatch = () => {
  return (
    <div className="flex flex-col bg-zinc-800 rounded text-gray-200 gap-4 p-4">
      <div className="flex-auto flex items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <div className="">Quatar</div>
          <div className="h-12 w-12 bg-gray-500 rounded"></div>
        </div>
        <div className="text-2xl">vs</div>
        <div  className="flex items-center gap-4">
          <div className="h-12 w-12 bg-gray-500 rounded"></div>
          <div className="">Equador</div>
        </div>
      </div>
      <button className="h-12 border border-green-600 text-green-600 text-sm w-full rounded">Fazer meu palpite</button>
    </div>
  )
}