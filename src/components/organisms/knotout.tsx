import { IPhase, Phase } from "../molecules/phase"

export const Knotout = () => {

  const phases: IPhase[] = [
    {
      id: 1,
      name: "oitavas de finais",
      matches: [
        { id: 1, us: { id: 1, name: "Brasil", flag: "", shield: ""  }, them: { id: 1, name: "Mexico", flag: "", shield: ""  } },
        { id: 2, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
        { id: 3, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
        { id: 4, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
        { id: 5, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
        { id: 6, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
        { id: 7, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
        { id: 8, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
      ]
    },
    {
      id: 2,
      name: "quartas de finais",
      matches: [
        { id: 9, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
        { id: 10, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
        { id: 11, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
        { id: 12, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
      ]
    },
    {
      id: 3,
      name: "semi-finais",
      matches: [
        { id: 13, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
        { id: 14, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
      ]
    },
    {
      id: 4,
      name: "finail",
      matches: [
        { id: 15, us: { id: 1, name: "", flag: "", shield: ""  }, them: { id: 1, name: "", flag: "", shield: ""  } },
      ]
    },
  ]


  return (
    <div>
      <div className="grid grid-cols-4 gap-12">
        { phases.map(phase => (
          <Phase key={phase.id} phase={phase} />
        )) }
      </div>
    </div>
  )
}