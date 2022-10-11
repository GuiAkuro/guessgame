import { useGroupsStore } from "src/stores/goups"
import { IMatch } from "../molecules/match"
import { IPhase, Phase } from "../molecules/phase"

export const Knotout = () => {

  const { groups } = useGroupsStore()

  const phases: IPhase[] = [
    getRoundOfSixteen(),
    {
      id: 2,
      name: "quartas de finais",
      matches: [
        { id: 9, us: { id: 1, name: "", flag: "", shield: "", region: ""  }, them: { id: 1, name: "", flag: "", shield: "", region: "" } },
        { id: 10, us: { id: 1, name: "", flag: "", shield: "", region: ""  }, them: { id: 1, name: "", flag: "", shield: "", region: ""  } },
        { id: 11, us: { id: 1, name: "", flag: "", shield: "", region: ""  }, them: { id: 1, name: "", flag: "", shield: "", region: ""  } },
        { id: 12, us: { id: 1, name: "", flag: "", shield: "", region: ""  }, them: { id: 1, name: "", flag: "", shield: "", region: ""  } },
      ]
    },
    {
      id: 3,
      name: "semi-finais",
      matches: [
        { id: 13, us: { id: 1, name: "", flag: "", shield: "", region: ""  }, them: { id: 1, name: "", flag: "", shield: "", region: ""  } },
        { id: 14, us: { id: 1, name: "", flag: "", shield: "", region: ""  }, them: { id: 1, name: "", flag: "", shield: "", region: ""  } },
      ]
    },
    {
      id: 4,
      name: "finail",
      matches: [
        { id: 15, us: { id: 1, name: "", flag: "", shield: "", region: ""  }, them: { id: 1, name: "", flag: "", shield: "", region: ""  } },
      ]
    },
  ]


  function getRoundOfSixteen(): IPhase {
    const a1 = groups[0].teams[0]
    const b2 = groups[1].teams[1]

    const b1 = groups[1].teams[0]
    const a2 = groups[0].teams[1]

    const c1 = groups[2].teams[0]
    const d2 = groups[3].teams[1]

    const d1 = groups[3].teams[0]
    const c2 = groups[2].teams[1]

    const e1 = groups[4].teams[0]
    const f2 = groups[5].teams[1]

    const f1 = groups[5].teams[0]
    const e2 = groups[4].teams[1]

    const g1 = groups[6].teams[0]
    const h2 = groups[7].teams[1]

    const h1 = groups[7].teams[0]
    const g2 = groups[6].teams[1]

    return {
      id: 1,
      name: "oitavas de finais",
      matches: [
        { id: 1, us: a1, them: b2 },
        { id: 2, us: b1, them: a2 },
        { id: 3, us: c1, them: d2 },
        { id: 4, us: d1, them: c2 },
        { id: 5, us: e1, them: f2 },
        { id: 6, us: f1, them: e2 },
        { id: 7, us: g1, them: h2 },
        { id: 8, us: h1, them: g2 },
      ]
    }
  }

  getRoundOfSixteen()


  return (
    <div>
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-gray-200">Mata-mata</h2>
      </div>

      <div className="grid grid-cols-4 gap-12">
        { phases.map(phase => (
          <Phase key={phase.id} phase={phase} />
        )) }
      </div>
    </div>
  )
}