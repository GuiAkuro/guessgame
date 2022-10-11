export const RankingTable = () => {

  const rankingTableData = [
    { id: 1, name: 'Marcos Ribeiro', score: 21, position: 1 },
    { id: 2, name: 'Tulio Falcão', score: 20, position: 2 },
    { id: 3, name: 'Mario Lopes', score: 20, position: 2 },
    { id: 4, name: 'João Silva e Silva', score: 19, position: 3 },
    { id: 5, name: 'Carlos Andrade', score: 18, position: 4 },
    { id: 6, name: 'Gabriela Santana', score: 17, position: 5 },
    { id: 7, name: 'Gustavo Marinho', score: 16, position: 6 },
    { id: 8, name: 'Jonas Manoel', score: 15, position: 7 },
    { id: 9, name: 'Carina Alves', score: 14, position: 8 },
    { id: 10, name: 'Tereza Martins', score: 13, position: 9 },
    { id: 11, name: 'Manoel Castro', score: 12, position: 10 },
    { id: 12, name: 'Beatriz Gonçalo', score: 11, position: 11 },
    { id: 13, name: 'Matias Scozzi', score: 9, position: 12 },
    { id: 14, name: 'Thiago Aguiar', score: 8, position: 13 },
    { id: 15, name: 'Cleber Oliveira', score: 7, position: 14 },
  ] 


  return (
    <div className="overflow-hidden">
      <table className="w-full text-gray-200 text-sm">
        <tbody>
          {rankingTableData.map(line => (
            <tr key={line.id} className="border-b border-zinc-800">
              <td className="p-4 font-bold text-lg" width="80">{ line.position }</td>
              <td className="p-4">{ line.name }</td>
              <td className="p-4" width="100">{ line.score } pts.</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}