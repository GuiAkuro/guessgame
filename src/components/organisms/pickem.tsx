import { Group, IGroup } from "./group";

export const Pickem = () => {

  const groups: IGroup[] = [
    { id: 1, 
      name: "grupo a", 
      teams: [
        { id: 1, name: "Qatar", flag: "", shield: "/shields/CBF.svg", region: "Asia" },
        { id: 1, name: "Ecuador", flag: "", shield: "/shields/CBF.svg", region: "America" },
        { id: 1, name: "Senegal", flag: "", shield: "/shields/CBF.svg", region: "Africa" },
        { id: 1, name: "Netherlands", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      ] 
    },
    { id: 1, 
      name: "grupo b", 
      teams: [
        { id: 1, name: "England", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
        { id: 1, name: "IR Iran", flag: "", shield: "/shields/CBF.svg", region: "Asia" },
        { id: 1, name: "USA", flag: "", shield: "/shields/CBF.svg", region: "America" },
        { id: 1, name: "Wales", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      ] 
    },
    { id: 1, 
      name: "grupo c", 
      teams: [
        { id: 1, name: "Argentina", flag: "", shield: "/shields/CBF.svg", region: "America" },
        { id: 1, name: "Saudi Arabia", flag: "", shield: "/shields/CBF.svg", region: "Asia" },
        { id: 1, name: "Mexico", flag: "", shield: "/shields/CBF.svg", region: "America" },
        { id: 1, name: "Poland", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      ] 
    },
    { id: 1, 
      name: "grupo d", 
      teams: [
        { id: 1, name: "France", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
        { id: 1, name: "Denmark", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
        { id: 1, name: "Tunisia", flag: "", shield: "/shields/CBF.svg", region: "Africa" },
        { id: 1, name: "Australia", flag: "", shield: "/shields/CBF.svg", region: "Oceania" },
      ] 
    },
    { id: 1, 
      name: "grupo e", 
      teams: [
        { id: 1, name: "Spain", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
        { id: 1, name: "Germany", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
        { id: 1, name: "Japan", flag: "", shield: "/shields/CBF.svg", region: "Asia" },
        { id: 1, name: "Costa Rica", flag: "", shield: "/shields/CBF.svg", region: "America" },
      ] 
    },
    { id: 1, 
      name: "grupo f", 
      teams: [
        { id: 1, name: "Belgium", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
        { id: 1, name: "Canada", flag: "", shield: "/shields/CBF.svg", region: "America" },
        { id: 1, name: "Morocco", flag: "", shield: "/shields/CBF.svg", region: "Africa" },
        { id: 1, name: "Croatia", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      ] 
    },
    { id: 1, 
      name: "grupo g", 
      teams: [
        { id: 1, name: "Brazil", flag: "", shield: "/shields/CBF.svg", region: "America" },
        { id: 1, name: "Serbia", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
        { id: 1, name: "Switzerland", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
        { id: 1, name: "Cameroon", flag: "", shield: "/shields/CBF.svg", region: "Africa" },
      ] 
    },
    { id: 1, 
      name: "grupo h", 
      teams: [
        { id: 1, name: "Portugal", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
        { id: 1, name: "Ghana", flag: "", shield: "/shields/CBF.svg", region: "Africa" },
        { id: 1, name: "Uruguay", flag: "", shield: "/shields/CBF.svg", region: "America" },
        { id: 1, name: "Korea Republic", flag: "", shield: "/shields/CBF.svg", region: "Asia" },
      ] 
    },
  ]

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