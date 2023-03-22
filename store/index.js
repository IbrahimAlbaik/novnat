export const state = () => ({
  searchPopupStatus: false,
  services: [
    {
      id: 1,
      title: "Engineering consultant",
      desc: "Computational Fluid dynamic (CFD) modelling for Multiphysics problem.",
      details: [
        {
          detail: "Computational Fluid dynamic (CFD) modelling for Multiphysics problem such as:",
          options: [
            "Heat exchanger designs: Air and water called heat exchangers, Cryogenic heat exchanger, shell and tube, plated and finned tube heat exchangers",
            "Adsorber bed design, including the heat and mass transfer, adsorption isotherms and kinetics",
            "Thermal storage systems",
            "Gas storage systems"
          ]
        },
        {
          detail: "Design the Organic Rankine cycle including the system components.",
          options: []
        },
        {
          detail: "Solar systems, including PV, CPV and CPV-T",
          options: []
        },
        {
          detail: "Design and optimize the pressure/vacuum/temperature swing adsorption systems (PSA/VSA/TSA) for gas purification and separation.",
          options: []
        },
        {
          detail: "FMEA Stress/strain/fatigue failure simulation and calculations for different mechanical systems including component selection for gears, belt and chain, bearing, shafts, keys, etc. Followed by detailed CAD drawings (2D/3D).",
          options: []
        },
        {
          detail: "PFD and P&ID for different mechanical and chemical process.",
          options: []
        }
      ]
    },
    {
      id: 2,
      title: "Porous material consultant",
      desc: "We synthesise MOFs at the highest quality for your specific application.",
      details: [
        {
          detail: "We synthesise MOFs at the highest quality for your specific application.",
          options: [
          ]
        },
        {
          detail: "Porosity, Conductivity, Mercury Density, Water, CO2, and Ammonia testing and performance analysis for your porous materials.",
          options: []
        },
        {
          detail: "We Process MOFs to be dispersed in any solvents with customised viscosity.",
          options: []
        },
        {
          detail: "MOFs implementation, shaping and design in your systems preserving the porosity and performance.",
          options: []
        },
      ]
    },
  ],
  teams: [
    {
      id: 1,
      name: 'Dr. Ibrahim Albaik',
      position: 'Co-Founder and CEO',
      image: 'ibrahim.jpg'
    },
    {
      id: 2,
      name: 'Kamal Diab',
      position: 'Co-Founder and CSO',
      image: 'kamal.png',
    },
    {
      id: 3,
      name: 'Abdulbari Belouafi',
      position: 'Co-Founder and COO',
      image: 'abed.jpg',
    },
    {
      id: 4,
      name: 'Asmaa Diab',
      position: 'Co-Founder and CSO',
      image: 'asmaa.webp',
    }
  ]
});

export const mutations = {
  changeSearchPopupStatus(state) {
    state.searchPopupStatus = !state.searchPopupStatus;
  }
};

export const actions = {
};

export const getters = {
};
