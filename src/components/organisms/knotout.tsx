import { IPhase, Phase } from "../molecules/phase"

export const Knotout = () => {

  const phases: IPhase[] = [
    {
      id: 1,
      name: "oitavas de finais",
      matches: [
        { id: 1, us: { id: 1, name: "1A", flag: "", shield: "", region: ""  }, them: { id: 1, name: "2B", flag: "", shield: "", region: "" } },
        { id: 2, us: { id: 1, name: "1B", flag: "", shield: "", region: ""  }, them: { id: 1, name: "2A", flag: "", shield: "", region: ""  } },
        { id: 3, us: { id: 1, name: "1C", flag: "", shield: "", region: ""  }, them: { id: 1, name: "2D", flag: "", shield: "", region: ""  } },
        { id: 4, us: { id: 1, name: "1D", flag: "", shield: "", region: ""  }, them: { id: 1, name: "2C", flag: "", shield: "", region: ""  } },
        { id: 5, us: { id: 1, name: " 1E", flag: "", shield: "", region: ""  }, them: { id: 1, name: "2F", flag: "", shield: "", region: ""  } },
        { id: 6, us: { id: 1, name: "1F", flag: "", shield: "", region: ""  }, them: { id: 1, name: "2E", flag: "", shield: "", region: ""  } },
        { id: 7, us: { id: 1, name: "1G", flag: "", shield: "", region: ""  }, them: { id: 1, name: "2H", flag: "", shield: "", region: ""  } },
        { id: 8, us: { id: 1, name: "1H", flag: "", shield: "", region: ""  }, them: { id: 1, name: "2G", flag: "", shield: "", region: ""  } },
      ]
    },
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