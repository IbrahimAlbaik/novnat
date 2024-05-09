export const state = () => ({
  silderList: [
    {
      id: "discover-1",
      image: "",
      video: "1.mov",
      text: `<span>Redefining Industry&#39;s </span> Thirst: Air-Water Solutions for Sustainable Growth`,
      more: `<p>Water is an abundant resource on our planet, existing not only in vast bodies like oceans and lakes but also in the air we breathe. </p> <p>While land-based water sources are finite and often subject to depletion, the atmosphere holds a considerable reservoir of untapped moisture. </p> In fact, it's estimated that the Earth's atmosphere contains around 13,000 cubic kilometres of water vapor at any given time, far surpassing the volume of freshwater found in rivers and lakes combined. </p>
      <p> Atmospheric water generation emerges as a crucial solution in harnessing this immense yet overlooked resource. </p> <p>By leveraging innovative technologies like Metal Organic Frameworks (MOFs), atmospheric water generation systems can extract water from even the driest of environments, offering a sustainable alternative to traditional water sources. </p> <p> As we confront the challenges of climate change and water scarcity, the role of atmospheric water generation in securing clean, accessible water for communities worldwide will only continue to grow, providing a vital lifeline for future generations. </p>
      <p> Welcome to NovNat Tech, where innovation meets sustainability. Our team has pioneered groundbreaking Metal Organic Framework (MOF) materials,
      meticulously designed for use in large-scale atmospheric water generation systems.
      The proprietary MOFs boast exceptional porous properties and precise chemical control, rendering them perfect for extracting water from air.
      Our ground-breaking MOFs coupled with our extensive engineering expertise of water systems,
      allow us to develop pioneering solutions that redefine the boundaries of water resource management and sustainability.</p>
      <p>Our ultimate goal? To develop an industrial-scale Atmospheric Water Generator (AWG) system, harnessing low-grade waste heat (55-100°C) from industrial processes to produce water efficiently and sustainably.
      Join us in revolutionizing water procurement for a greener, more resilient future.</p>`
    },
    {
      id: "discover-2",
      image: "4.jpg",
      text: `<span>Pioneering</span> materials<br /> of the future`,
      more: `<p>Porous materials play a pivotal role in addressing world-scale challenges such as carbon capture and water scarcity by virtue of their unique structural properties. </p> <p>These materials possess a network of pores and channels, offering a large surface area for interactions with gases and liquids. Among the diverse array of porous materials, Metal Organic Frameworks (MOFs) have emerged as particularly promising candidates.</p> <p>MOFs are composed of metal ions or clusters linked by organic ligands, resulting in highly porous structures with tuneable properties.
      MOFs are a unique class of nano porous materials with unprecedented functional and chemical control, making them highly versatile for use in many applications including harvesting water from air.</p>
      <p>In the realm of water scarcity, MOFs hold immense potential for atmospheric water generation (AWG) systems. These materials excel in adsorbing water vapor from the air, even in low-humidity environments, making them invaluable for harvesting water in arid regions and mitigating water shortages.
      By acting as nano-scale selective sponges, MOFs can selectively capture water molecules while excluding impurities, ensuring the quality and purity of the harvested water.</p>
      <p>NovNat Tech's MOF materials excel in water vapor extraction, operating at remarkable capacities and speeds.
      Acting as a nano-scale selective sponge, they exclusively bond with airborne water molecules, ensuring the purity of captured water remains untainted by impurities.
      What sets our patented MOFs apart is their unparalleled ability to harvest water even in environments with humidity levels as low as 10%, making them adaptable worldwide,
      from arid deserts to humid climates. With a water capacity of up to 60% of their weight, they are game-changers in water resource management.</p>
      <p>Moreover, our MOFs are crafted from abundant, easily recyclable metals and organic linkers,
      synthesized using water alone. This eco-friendly manufacturing process is not only sustainable but also highly scalable,
      ensuring minimal environmental impact as we expand our operations.
      Additionally, due to our MOFs being highly affinitive to water, the water generated is completely pure H2O!</p>
      `,
    },
    {
      id: "discover-3",
      image: "3.jpg",
      text: `<span>Meshing</span> chemistry<br /> and engineering to solve <br /> today's problems`,
      more: `Welcome to NovNat Tech, your premier technology solution provider. We offer comprehensive services spanning from material selection and tuning to shaping and integration, alongside numerical modelling and system assembly. Whether you're seeking materials for HVAC applications or advanced AWG systems for water sustainability and resilience, NovNat's technology sets the standard. Our breakthrough MOFs and scalable AWG systems cater to all your humidity and water-related needs.`,
      list: ['Share Your Needs: Whether you require MOFs for dehumidification or a complete AWG solution, tell us your requirements.',
        'Diagnose: We assess your needs and ambient conditions, offering tailored technology recommendations.',
        'MOF Selection: Based on your feedback, we choose and fine-tune the appropriate MOF from our selection.',
        'MOF Formulation: We not only provide MOFs but also shape and customize them to seamlessly integrate with our AWG systems or your HVAC systems.',
        'AWG System Design & Integration: Through computational analysis, we optimize heat and mass transfer, ensuring optimal airflow and identifying the best ways to integrate the AWG system with your operations to utilize waste heat efficiently.',
        'System Construction & Testing: In collaboration with reliable suppliers, we construct your systems and subject each to rigorous testing before shipment, guaranteeing proper and optimal operation upon delivery.'],
    },
  ],
  novnat: {
    id: 1,
    title: 'NovNat',
    logo: 'novnat-logo.png',
    address: 'The Exchange, 3 Centenary Sq, <br /> Birmingham B1 2DR',
    register: 'Company registered in England and Wales',
    phone: '+44 (0) 752 128 0697',
    location: '',
    email: 'info@novnat.co.uk',
    socialMediaLinks: [{ id: 1, icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/company/novnattech/' }],
  },
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
      ],
      icon: "icon-temperature"
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
      ],
      icon: "icon-harvest"
    },
  ],
  team: [
    {
      id: 1,
      name: 'Kamal Diab',
      position: 'Co-Founder and CSO',
      image: 'kamal.png',
      about: `Kamal Diab is the lead scientist for NovNat, specializing in high-throughput screening, material design, and process optimization. With years of experience in the field, he is an expert in designing and evaluating porous materials for a variety of applications. Kamal plays the critical role in providing technical solutions and developing new materials for NovNat. He is also highly skilled in identifying and defining new technical trends, working with partners to align technology roadmaps.
      Kamal is especially fascinated by the creation of solid-state materials that can be adjusted synthetically, allowing precise control of the atomic-scale and/or electronic-scale structure for specific purposes.  His current research spans diverse areas of chemistry and materials science, ranging from energy to global water-related challenges. Specifically, his research focuses on the rational design of metal-organic frameworks (MOFs) for applications in water and gas storage, separations, and purification.
      Kamal responsible for synthesis, optimization, and characterization to transition porous chemistry into real-world products. At NovNat, Kamal leverages his extensive experience in chemistry and specialty gas materials to accelerate the discovery of novel materials that can address global challenges in energy and sustainability. Prior to joining NovNat, He was a research graduate from the University of Birmingham in the UK, he obtained his MSc in Nanoscience from E-JUST and his BSc from Alexandria, with a specialization in developing novel MOFs for efficient sorption-driven applications.
      `,
      socialMediaLinks: ['https://www.linkedin.com/in/kamaldiab'],
    },
    {
      id: 2,
      name: 'Dr. Ibrahim Albaik',
      position: 'Co-Founder and CTO',
      image: 'ibrahim.jpg',
      about: `Ibrahim is responsible for designing the integration of MOFs in systems for gas storage,
      gas separation and HVAC applications. Ibrahim completed his PhD at the University of Birmingham,
      where he developed MOF-based cooling and desalination adsorption systems. He also holds an MSc in Advanced Mechanical Engineering from Birmingham, where he was awarded a Ratcliffe Prize for the best post-graduate performance in the Engineering School. His first degree in Mechanical Engineering is from Islamic University of Gaza. He has industrial and research experiences in different electro-mechanical projects such as pump stations, wastewater treatment and desalination plants as well as renewable energy systems such as Solar-Organic Rankine cycle, Stirling engine and biogas systems. Ibrahim has managed several large-scale projects throughout his career.`,
      socialMediaLinks: ['https://www.linkedin.com/in/ibrahim-albaik-70205b10b'],
    },
    {
      id: 3,
      name: 'Abdulbari Belouafi',
      position: 'Co-Founder and CEO',
      image: 'abed.jpg',
      about: `Abdulbari holds an MSc in advanced mechanical engineering from the University of Birmingham specialising
       in engineering design using CAD and CFD software. Furthermore, he is highly capable in report writing and simplifying technical language for all stakeholders involved in this project.`,
      socialMediaLinks: ['https://www.linkedin.com/in/abdulbari-belouafi-6b7697139'],

    }
  ],
  otherTeam: [
    {
      id: 'advisory-1',
      name: 'Richard Boocock',
      position: 'former VP and CIO of AirProducts',
      image: 'Richard.jpg',
      about: `Richard's extensive industrial expertise helps with customer engagement and acquisition and identifying decision makers within various organisations.`,
      socialMediaLinks: ['https://www.linkedin.com/in/richard-boocock-00b071196'],

    },
    {
      id: 'advisory-2',
      name: 'John Cooke',
      position: 'successful entrepreneur',
      image: 'John.jpg',
      about: `provides mentoring, and training and formulating the commercia strategy.`,
      socialMediaLinks: ['https://www.linkedin.com/in/jccooke'],

    },
  ],
  projects: [
    // {
    //   id: 1,
    //   title: "Metal Organic Framework (MOF)",
    //   description: `Recently, MOFs have emerged as a unique class of nano porous materials with unprecedented functional and chemical control,
    //   making them highly versatile for use in many applications including harvesting water from air. Through precise engineering and many trials,
    //   NovNat Tech has developed a new MOF (patent pending) capable of extracting water vapour from air with minimal energy usage and zero carbon emissions.
    //   Due to the chemistry and internal structure of the MOF, it will bond only with water molecules in the air acting as a ‘nano-scale selective sponge’. This means that no matter how contaminated or polluted the air is, this will have no effect on the quality of water captured as the MOF acts as a ‘sponge’ and ‘filter’ simultaneously, producing ultra-pure water.`,
    //   image: "metal-organic.jpg",
    //   challenges: [],
    // },
    {
      id: 2,
      title: "Atmospheric water generation (AWG)",
      specifications: ['First atmospheric water generation system for industrial application, utilizing waste heat effectively.',
        'Exceptional water productivity exceeding 250 liters per square meter.',
        'Versatile deployment, functional in diverse environments with relative humidity over 7% and temperatures between 5 to 40 degrees Celsius.',
        'Versatile deployment, functional in diverse environments with relative humidity over 7% and temperatures between 5 to 40 degrees Celsius.',
        'Selective binding of MOFs with water molecules eliminates the need for further water treatment, regardless of air pollution levels.',
        'Includes energy recovery to minimize thermal energy requirements, enhancing overall energy efficiency of the system.', 'Operates through passive condensation using ambient temperature, ensuring energy efficiency and minimizing reliance on external energy sources.',
        'Scalable design, with each unit capable of producing 10,000 liters per day, offering flexibility to meet varying water demands.',
        'Modular construction allows for easy expansion or replication of units to increase overall water production capacity.'],
      description: `<h3> The AWG process: </h3>
      NovNat's AWG technology is powered by cutting edge sorbent materials (Metal Organic Frameworks- MOFs).
      Upon being exposed to moisture in the air, our MOFs capture (adsorb) the moisture utilising their high capacities (60wt%) and facile kinetics (saturation @90%RH in 15mins).
      Subsequently, the desorption process is initiated by passing a heated working fluid through the adsorbent heat exchangers transferring the heat to the coated MOF material causing it to release the captured vapour which is then transferred to the condenser chamber.
      Here, the vapour condenses and becomes pure liquid water that can be directly injected to point of need (distilled water) or mineralised if potability is required.`,
      images: ["AWG_system_1.png", "AWG_system_2.png"],
      challenges: [],
    },
    {
      id: 3,
      title: "Our MOF",
      specifications: [`<span>Green Synthesis Procedure:</span> Utilizes water instead of harmful solvents, making it environmentally friendly.`,
        `<span> Scalable and Cost-Effective:</span> Production process is scalable and cost-efficient, ensuring widespread accessibility.`,
        `<span> Lowest Heat of Adsorption: </span> Exhibits the lowest heat of adsorption ever reported in literature, indicating exceptional efficiency in capturing target molecules.`,
        `<span> Chemically Stable: </span> Demonstrates remarkable chemical stability even after undergoing hundreds of cycles, without any degradation.`,
        `<span>High Water Capacity:</span> Capable of holding up to 60% of its body weight in water, highlighting its excellent moisture absorption properties.`,
        `<span>Rapid Adsorption Kinetics: </span> Shows exceptionally quick adsorption kinetics compared to existing adsorbent materials, ensuring swift capture of target molecules.`,
        `<span> High Density:</span> Possesses a high density, enhancing volumetric capacity and making it an efficient choice for various applications. `],
      description: `NovNat Tech’s proprietary MOF, has shown breakthrough water sorption performance with unprecedented capacity and kinetics. With the capacity to capture from air at relative humidity (RH) as low as 10% the MOF is functional in any part of the world.`,
      images: ["MOF-sem.jpg", "f3_page-0001.jpg"],
      challenges: [
        // {
        //   id: 1,
        //   title: "Capacity",
        //   description:
        //     "Our MOF is capable of capturing up to 60% of its body weight in water from the air (at 90% RH).",
        //   icon: "",
        // },
        // {
        //   id: 2,
        //   title: "Kinetics",
        //   description:
        //     "Early tests have shown the proprietary MOF can capture up to 63 L/kg/day.",
        //   icon: "",
        // },
        // {
        //   id: 3,
        //   title: "Tuneability",
        //   description:
        //     "The MOF has been precisely engineered to have a high affinity to water molecules, thereby, capturing water molecules from the air regardless of how contaminated the air is.",
        //   icon: "",
        // },
      ],
    },
    // {
    //   id: 3,
    //   title: "Our AWG",
    //   description: `NovNat Tech’s proprietary MOF (UK patent application number:2218176.2), has shown breakthrough water sorption performance with unprecedented capacity and kinetics. With the capacity to capture from air at relative humidity (RH) as low as 10% the MOF is functional in any part of the world.`,
    //   image: "MOF-sem.jpg",
    //   challenges: [
    //     {
    //       id: 1,
    //       title: "Design",
    //       description: "Description text goes here",
    //       icon: "",
    //     },
    //     {
    //       id: 2,
    //       title: "Cost",
    //       description: "Description text goes here",
    //       icon: "",
    //     },
    //     {
    //       id: 3,
    //       title: "Footprint",
    //       description: "Description text goes here",
    //       icon: "",
    //     },
    //   ],
    // },
  ],
  faqs: [
    {
      id: 1,
      title: 'Q1. What is NovNat material technology MOF for AWG system?',
      details: 'The company-patented MOF we use displays superior performance compared to existing MOFs, A great quality of the company-patented MOF, through precise engineering of the structure, is its ability to extract ONLY water molecules (H2O) from air, even if the air is polluted or contaminated with other chemicals. ',
      features: [
        {
          id: 1,
          title: 'Key features of the company-patented MOF:',
          featuresDetails: ['Capable of extracting only water from air even at RH<15%',
            'Capable of capturing amount of water equivalent to 46% of its weight at RH of 20% and 56% of its weight at RH 90% ',
            'Requires a waste heat source of ONLY 40°C', 'Highly scalable: production costs can be reduced to only £30/kg (≈$35) in large-scale production',
            'Non-toxic, sustainable and environmentally friendly',
            'Totally recyclable at the end of its lifecycle; it can be dissolved and reconstructed into other MOF structures.']
        },
        {
          id: 2,
          title: 'Key features of our AWG:',
          featuresDetails: ['Low-grade thermal energy required: as little as 0.35kWh/L (@40°C) ',
            'Size: only 344m2 system footprint required to produce 1 million L/day.',
            'Capable of achieving net-zero water consumption, meaning water production can be increased to meet consumption. ',
          ]
        }]
    },
    {
      id: 2,
      title: 'Q2. How scalable is the system and what is the maximum capacity you can reach?',
      details: 'Since our technology can be driven using the waste heat instead of consuming huge amount of electrical energy (in the conventional AWG), the scale of the water production for a single unit can reach to up to 50,000L/day. This can be managed by the novel approach that NovNat Tech has developed in optimizing the heat and mass transfer inside the chamber. The enhanced heat transfer has been achieved by developing a coating technique of the MOF material on the heat exchanger surface, to ensure having a uniform temperature distribution along multiple heat exchangers in the unit. A good mass transfer is also achieved in the unit after introducing air channels across the heat exchanger to equally distribute the air through the MOF with minimum pressure drop, which is also helps in scaling up the system.',
      features: []
    },
    {
      id: 3,
      title: 'Q3. What is your current technology stage?',
      details: 'We have successfully developed a batch AWG system in TRL 4 with a total water production of 9 L/day. We simulated the waste heat source by having a water tank with a temperature controller to evaluate the system performance at different waste heat temperature. The preliminary results shows that the system can be driven with a temperature of 55oC or higher which is very encouraging with this system scale. The system is designed with single adsorber bed, and a passive condenser as shown in the figure below.',
      features: []
    },
    {
      id: 4,
      title: 'Q4. How much MOF is required to produce 10,000 L of water per day and how many cycles?',
      details: 'To produce 10,000 L of water per day, we would require approximately ~400 kgs of our patented MOF material. We have conducted a case study with Sainsburys and found that using our MOF material, we can achieve this water production through 40 cycles of adsorption and desorption per day.',
      features: []
    },
    {
      id: 5,
      title: 'Q5. Does your system meet drinking water regulatory standards?',
      details: `Yes, our system produces water that meets the standard water quality requirements for drinking water,
       with a pH range of 6.5-9.5.
        This is achieved through our MOF material which acts as a 'nano- scale selective sponge' and 'filter' simultaneously,
         producing ultra-pure water that is safe for consumption. The MOF is engineered to bond only with water molecules in the air,
          and the internal structure of the MOF acts as a filter, producing water that meets or exceeds all water safety requirements.
          Water molecules have a stronger bonding affinity with the adsorption sites in the pore compared to other pollutants such as carbon dioxide, NOx, SOx, methane, ammonia, and hydrogen sulfide,
          which may potentially be adsorbed by the MOF. This selectivity phenomenon ensures that only water molecules occupy the pore volume and are subsequently desorbed from the MOF.
          In contrast, other AWG systems that use desiccants such as zeolite, silica gel, or glycerol, or liquid desiccants such as brine,
          do not possess the same size exclusion and selectivity properties as our MOF, and may require additional filtration steps to achieve the same level of water purity.
          Similarly, refrigeration-based AWG systems capture all pollutants in the water vapor and must be filtered out,
          resulting in water of lower quality. Additionally, we conduct regular testing and quality control measures to ensure that the water produced by our system is safe for consumption and meets safety standards.
          NovNat Tech is also engaged with the EPA in the US to investigate microbial water quality of the produced water to ensure the AWG system maintains the required standard throughout its lifetime.`,
      features: []
    },
    {
      id: 6,
      title: 'Q6: What distinguishes our company-patented MOF from others and why is our MOF expected to achieve commercial success in the field of AWG?',
      details: `Our company-patented MOF, Nov-1,
      demonstrates superior performance compared to existing technologies for AWG,
      including the current leading structure MOF-303, as well as other conventional methods (see Table 2 1and Table 2 2). Nov-1 has been meticulously engineered and precisely manipulated to selectively capture water vapor from air at exceptionally high rates, which is a significant improvement over existing technologies.
      This unique combination of advanced performance characteristics is expected to make Nov-1 commercially successful in the field of atmospheric water generation. `,
      features: []
    },
    {
      id: 7,
      title: 'Q7. Is it commercially viable?',
      details: `MOFs are not yet used for AWG on a commercial level; however, they have been successfully commercialised for use in several other applications including gas separation and storage including using MOFs: `,
      features: [{
        id: 1,
        title: '',
        featuresDetails: ['o store arsine gas for semiconductor industry and to purify gases avoiding expensive cryogenic separation. (NuMat)',
          'To store natural gas in MOF tanks to power vehicles (BASF/Mercedes).',
          'To store and slowly release 1-methylcyclopropene to control fruit ripening (Note: Decco lost a patent lawsuit in late 2019 and was forced to pull the product) (MOF Technologies/Decco) ',
          `To make MOF-based CO2-sensors (Matrix Sensors):
        Preliminary studies on our system in terms of commercial feasibility show that although there is a significant up-front cost to purchasing a working system to produce water using AWG, the benefits gained in return are significant. Firstly, the system can produce water at a faster rate than any other known MOFs based device currently known. Secondly, the nature of our company-patented MOF results in the least amount of thermal energy required to deliver the water which translates to low running costs of the system. Last but not least, the system we have developed requires a relatively small amount of space, making it suitable for both industrial and household applications, where it can be placed on empty roof spaces.`
        ]
      }]
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
