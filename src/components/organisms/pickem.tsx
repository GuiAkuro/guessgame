import { Group, IGroup } from "./group";

export const Pickem = () => {

  const groups: IGroup[] = [
    { id: 1, 
      name: "grupo a", 
      teams: [
        { id: 1, name: "Qatar", flag: "", shield: "", region: "Asia" },
        { id: 1, name: "Ecuador", flag: "", shield: "", region: "America" },
        { id: 1, name: "Senegal", flag: "", shield: "", region: "Africa" },
        { id: 1, name: "Netherlands", flag: "", shield: "", region: "Europa" },
      ] 
    },
    { id: 1, 
      name: "grupo b", 
      teams: [
        { id: 1, name: "England", flag: "", shield: "", region: "Europa" },
        { id: 1, name: "IR Iran", flag: "", shield: "", region: "Asia" },
        { id: 1, name: "USA", flag: "", shield: "", region: "America" },
        { id: 1, name: "Wales", flag: "", shield: "", region: "Europa" },
      ] 
    },
    { id: 1, 
      name: "grupo c", 
      teams: [
        { id: 1, name: "Argentina", flag: "", shield: "", region: "America" },
        { id: 1, name: "Saudi Arabia", flag: "", shield: "", region: "Asia" },
        { id: 1, name: "Mexico", flag: "", shield: "", region: "America" },
        { id: 1, name: "Poland", flag: "", shield: "", region: "Europa" },
      ] 
    },
    { id: 1, 
      name: "grupo d", 
      teams: [
        { id: 1, name: "France", flag: "", shield: "", region: "Europa" },
        { id: 1, name: "Denmark", flag: "", shield: "", region: "Europa" },
        { id: 1, name: "Tunisia", flag: "", shield: "", region: "Africa" },
        { id: 1, name: "Australia", flag: "", shield: "", region: "Oceania" },
      ] 
    },
    { id: 1, 
      name: "grupo e", 
      teams: [
        { id: 1, name: "Spain", flag: "", shield: "", region: "Europa" },
        { id: 1, name: "Germany", flag: "", shield: "", region: "Europa" },
        { id: 1, name: "Japan", flag: "", shield: "", region: "Asia" },
        { id: 1, name: "Costa Rica", flag: "", shield: "", region: "America" },
      ] 
    },
    { id: 1, 
      name: "grupo f", 
      teams: [
        { id: 1, name: "Belgium", flag: "", shield: "", region: "Europa" },
        { id: 1, name: "Canada", flag: "", shield: "", region: "America" },
        { id: 1, name: "Morocco", flag: "", shield: "", region: "Africa" },
        { id: 1, name: "Croatia", flag: "", shield: "", region: "Europa" },
      ] 
    },
    { id: 1, 
      name: "grupo g", 
      teams: [
        { id: 1, name: "Brazil", flag: "", shield: "", region: "America" },
        { id: 1, name: "Serbia", flag: "", shield: "", region: "Europa" },
        { id: 1, name: "Switzerland", flag: "", shield: "", region: "Europa" },
        { id: 1, name: "Cameroon", flag: "", shield: "", region: "Africa" },
      ] 
    },
    { id: 1, 
      name: "grupo h", 
      teams: [
        { id: 1, name: "Portugal", flag: "", shield: "", region: "Europa" },
        { id: 1, name: "Ghana", flag: "", shield: "", region: "Africa" },
        { id: 1, name: "Uruguay", flag: "", shield: "", region: "America" },
        { id: 1, name: "Korea Republic", flag: "", shield: "", region: "Asia" },
      ] 
    },
  ]

  return (
    <div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-gray-200">Fase de Grupos</h2>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {groups.map(group => (
          <Group key={group.id} group={group} />
        ))}
      </div>
    </div>
  )
}