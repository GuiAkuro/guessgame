import { ITeam } from "src/components/molecules/match"
import { IGroup } from "src/components/organisms/group"
import create from 'zustand'

const groups: IGroup[] = [
  { id: 1, 
    name: "grupo a", 
    teams: [
      { id: 1, name: "Qatar", flag: "", shield: "/shields/CBF.svg", region: "Asia" },
      { id: 2, name: "Ecuador", flag: "", shield: "/shields/CBF.svg", region: "America" },
      { id: 3, name: "Senegal", flag: "", shield: "/shields/CBF.svg", region: "Africa" },
      { id: 4, name: "Netherlands", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
    ] 
  },
  { id: 2, 
    name: "grupo b", 
    teams: [
      { id: 5, name: "England", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      { id: 6, name: "IR Iran", flag: "", shield: "/shields/CBF.svg", region: "Asia" },
      { id: 7, name: "USA", flag: "", shield: "/shields/CBF.svg", region: "America" },
      { id: 8, name: "Wales", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
    ] 
  },
  { id: 3, 
    name: "grupo c", 
    teams: [
      { id: 9, name: "Argentina", flag: "", shield: "/shields/CBF.svg", region: "America" },
      { id: 10, name: "Saudi Arabia", flag: "", shield: "/shields/CBF.svg", region: "Asia" },
      { id: 11, name: "Mexico", flag: "", shield: "/shields/CBF.svg", region: "America" },
      { id: 12, name: "Poland", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
    ] 
  },
  { id: 4, 
    name: "grupo d", 
    teams: [
      { id: 13, name: "France", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      { id: 14, name: "Denmark", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      { id: 15, name: "Tunisia", flag: "", shield: "/shields/CBF.svg", region: "Africa" },
      { id: 16, name: "Australia", flag: "", shield: "/shields/CBF.svg", region: "Oceania" },
    ] 
  },
  { id: 5, 
    name: "grupo e", 
    teams: [
      { id: 17, name: "Spain", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      { id: 18, name: "Germany", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      { id: 19, name: "Japan", flag: "", shield: "/shields/CBF.svg", region: "Asia" },
      { id: 20, name: "Costa Rica", flag: "", shield: "/shields/CBF.svg", region: "America" },
    ] 
  },
  { id: 6, 
    name: "grupo f", 
    teams: [
      { id: 21, name: "Belgium", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      { id: 22, name: "Canada", flag: "", shield: "/shields/CBF.svg", region: "America" },
      { id: 23, name: "Morocco", flag: "", shield: "/shields/CBF.svg", region: "Africa" },
      { id: 24, name: "Croatia", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
    ] 
  },
  { id: 7, 
    name: "grupo g", 
    teams: [
      { id: 25, name: "Brazil", flag: "", shield: "/shields/CBF.svg", region: "America" },
      { id: 26, name: "Serbia", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      { id: 27, name: "Switzerland", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      { id: 28, name: "Cameroon", flag: "", shield: "/shields/CBF.svg", region: "Africa" },
    ] 
  },
  { id: 8, 
    name: "grupo h", 
    teams: [
      { id: 29, name: "Portugal", flag: "", shield: "/shields/CBF.svg", region: "Europa" },
      { id: 30, name: "Ghana", flag: "", shield: "/shields/CBF.svg", region: "Africa" },
      { id: 31, name: "Uruguay", flag: "", shield: "/shields/CBF.svg", region: "America" },
      { id: 32, name: "Korea Republic", flag: "", shield: "/shields/CBF.svg", region: "Asia" },
    ] 
  },
]

interface GroupsStore {
  groups: IGroup[],
  updateGroup: (groupId: number, teams: ITeam[]) => void
}

export const useGroupsStore = create<GroupsStore>((set) => ({
  groups: groups,
  updateGroup: (groupId, teams) => set((state) => ({ groups: updateGroup(groupId, teams, state.groups) }))
}))


function updateGroup(groupId: number, teams: ITeam[], groups: IGroup[]): IGroup[] {
  const group = groups.find((group: IGroup) =>  group.id === groupId)

  if (group) {
    group.teams = teams
  }

  return groups
}