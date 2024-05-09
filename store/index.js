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
      video: { video: "Website-4.mov", title: "Kamal's interview", desc: "our uniqueness in MOFs", image: "about_video.jpg" },
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
      image: "5.jpeg",
      text: `<span>A complete</span><br /> technology solution provider`,
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
    address: 'Vincent Drive, Birmingham Research Park, <br /> Birmingham B15 2SQ<br /> UK',
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
      position: 'Former SVP & CIO of Air Products',
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
      title: 'Q1. What distinguishes you from other companies working on atmospheric water generation?',
      details: `What distinguishes NovNat from other companies working on atmospheric water generation is our unique approach and cutting-edge technologies.
      Unlike technologies that rely on cooling-condensation which can be energy intensive and is limited to humid regions,
      NovNat has developed unique water capturing materials that are functional even in the driest regions (as low as 10% relative humidity).
      Furthermore, within the realm of desiccant-based water harvesting technologies,
      NovNat’s materials boast the highest capacities,
      fastest kinetics and lowest energy requirements.
      This along with our vast expertise in engineering and material science enable efficient,
      scalable water harvesting systems that can be deployed almost anywhere in the world.`,
      features: [
        // {
        //   id: 1,
        //   title: 'Key features of the company-patented MOF:',
        //   featuresDetails: ['Capable of extracting only water from air even at RH<15%',
        //     'Capable of capturing amount of water equivalent to 46% of its weight at RH of 20% and 56% of its weight at RH 90% ',
        //     'Requires a waste heat source of ONLY 40°C', 'Highly scalable: production costs can be reduced to only £30/kg (≈$35) in large-scale production',
        //     'Non-toxic, sustainable and environmentally friendly',
        //     'Totally recyclable at the end of its lifecycle; it can be dissolved and reconstructed into other MOF structures.']
        // },
        // {
        //   id: 2,
        //   title: 'Key features of our AWG:',
        //   featuresDetails: ['Low-grade thermal energy required: as little as 0.35kWh/L (@40°C) ',
        //     'Size: only 344m2 system footprint required to produce 1 million L/day.',
        //     'Capable of achieving net-zero water consumption, meaning water production can be increased to meet consumption. ',
        //   ]
        // }
      ]
    },
    {
      id: 2,
      title: 'Q2. In what industries can your AWG technology be deployed?',
      details: `NovNat’s versatile AWG technology can be deployed in numerous industrial set-ups including food & beverage,
      cement manufacturing, desert-located hydroponics, power generation and more.
      We have seen strong interest from the geothermal and data centre industries due to their large cooling demands and we are working with companies in both to set up pilot demonstrations of our AWG technology.`,
      features: []
    },
    {
      id: 3,
      title: 'Q3. Are there any environmental concerns with your MOF?',
      details: `No. All our MOFs are non-toxic and non-hazardous.
      The synthesis process is also a green one where we have eliminated the use of harmful solvents
      that are typically used and replaced them with water.`,
      features: []
    },
    {
      id: 4,
      title: 'Q4. What is the life expectancy of your materials? What happens to them at end-of-life?',
      details: `Our MOFs boast extremely high stabilities and have been rigorously tested over thousands of cycles showing no degradation in performance.
      Based on the number of cycles ran per year, the life expectancy can range from 5-10 years.
      Additionally, at end-of-life our unique recycling process allows us to break down the MOF into its constituents allowing to recover up to 95% of the original structure.
      The recycled materials can be reused to make more MOFs or find uses in other applications.`,
      features: []
    },
    {
      id: 5,
      title: 'Q5. How far along in the development path are you?',
      details: `Our AWG system currently sits at TRL 5, having been successfully tested at our lab facility
      using one of our unique MOFs. On the other hand, our MOFs are slightly ahead on the
      development roadmap as we have successfully integrated them with different systems and
      rigorously tested their performance with some of the MOFs currently at TRL 7.`,
      features: []
    },
    {
      id: 6,
      title: 'Q6. How do you power your AWG system?',
      details: `Our AWG systems benefit from being able to utilise multiple sources of power including renewable energy,
      conventional electrical supply and even waste-heat.
      Thanks to our materials’ low energy requirements,
      we can utilise low-grade waste-heat (as low as 55◦C), to regenerate the materials and produce water using a passive condenser. Our innovative systems allow us to eliminate the need for energy intensive active condensation.`,
      features: []
    },
    {
      id: 7,
      title: 'Q7. What are your maintenance requirements?',
      details: `One of the many advantages of adsorption-based systems is the lack of complexity and maintenance seen in other systems.
      Our AWG systems have no moving parts and will require minimal occasional maintenance such as replacement of air filters and servicing of fans & pumps (when necessary).`,
      features: [
        //   {
        //   id: 1,
        //   title: '',
        //   featuresDetails: ['o store arsine gas for semiconductor industry and to purify gases avoiding expensive cryogenic separation. (NuMat)',
        //     'To store natural gas in MOF tanks to power vehicles (BASF/Mercedes).',
        //     'To store and slowly release 1-methylcyclopropene to control fruit ripening (Note: Decco lost a patent lawsuit in late 2019 and was forced to pull the product) (MOF Technologies/Decco) ',
        //     `To make MOF-based CO2-sensors (Matrix Sensors):
        //   Preliminary studies on our system in terms of commercial feasibility show that although there is a significant up-front cost to purchasing a working system to produce water using AWG, the benefits gained in return are significant. Firstly, the system can produce water at a faster rate than any other known MOFs based device currently known. Secondly, the nature of our company-patented MOF results in the least amount of thermal energy required to deliver the water which translates to low running costs of the system. Last but not least, the system we have developed requires a relatively small amount of space, making it suitable for both industrial and household applications, where it can be placed on empty roof spaces.`
        //   ]
        // }
      ]
    },
    {
      id: 8,
      title: 'Q8. How clean is the generated water?',
      details: `The water generated is ultra-pure thanks to our MOFs high affinity to water molecules. Early
      testing has shown pH levels between 6.8-7.5 and TDS levels less than 10ppm. The maximum
      allowable TDS level recommended by the EPA for drinking water is 500ppm.`,
      features: []
    },
    {
      id: 9,
      title: 'Q9. What is your productivity rate?',
      details: `Our best-performing MOF in terms of productivity can produce up to 15l/kg/day and this can
      be further enhanced with our doping techniques taking the overall productivity to 20l/kg/day.`,
      features: []
    },
    {
      id: 10,
      title: 'Q10. What are the challenges that MOFs face in reaching commerciality and how are you addressing them?',
      details: `One of the primary challenges MOFs face in reaching commercialization is scalability. While
      MOFs exhibit remarkable properties in the lab, scaling up their production to meet industrial
      demands can be complex and costly. At NovNat Tech, we&#39;re tackling this challenge through a
      combination of innovative and green synthesis techniques, process optimization, and strategic
      partnerships with industry leaders in materials science and manufacturing. By leveraging our
      expertise and collaborating with key stakeholders, we&#39;re working towards overcoming
      scalability hurdles and bringing MOF-based technologies to market efficiently and cost-
      effectively. Another challenge is the way in which they are integrated with various systems
      whether that is atmospheric water generation systems in our case or others such as desiccant
      dehumidifiers. This is what we refer to as shaping or form factor and is a critical step in
      ensuring seamless integration without performance losses. At NovNat we have developed
      unique form factors allowing us to integrate our MOFs with our AWG systems and are
      working with clients to demonstrate integration with other systems such as desiccant rotors
      and adsorption heat pumps.`,
      features: []
    },
  ],
  gallery: [
    {
      id: 1,
      title: "Innovate UK project - Innovate UK Transformative Technologies",
      date: "(June to Oct 2023)",
      images: ["2.jpg", "1.jpeg", "3.jpg", "4.jpg"],
      description: `Invented Multivariate MOF Material Enables Sustainable Atmospheric Water Generation for Rescue and Military Vehicles with Zero Carbon Emissions.
    The UN estimates that by 2030, intense water scarcity could displace around 700 million people and,
    by 2025, half of the world's population could be living in areas facing water scarcity. The inevitable global water shortage due to increased usage and climate change, has caused many governments, institutions, organisations and industrial corporations around the world to investigate alternative sources of water. In this regard, NovNat Tech has invented a novel Multivariant Metal Organic Framework material capable of
    extracting water from air in any environment around the world,
    significantly reducing energy usage and fully eliminating carbon emissions from the water production process.
    The founding team utilised this project to investigate and develop an atmospheric water generation device
    for rescue and military vehicles utilizing the waste heat to drive the water generation process,
    with the vision of commercialising the product in the UK and across the globe to provide
    an alternative sustainable source of water. The system has been developed to Technology Readiness Level (TRL) 5 with a water production of 15L per day.
    The UK government provided funding for this project, which has since been successfully completed.
    NovNat is currently in the process of scaling the system to achieve a higher TRL with the aim of reaching
    a commercial productby 2027.` },
    {
      id: 2,
      title: "Bupa Eco Disruptive Programme",
      date: "(Oct - Dec 2023)",
      images: ["5.jpeg", "6.jpeg", "7.jpeg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg"],
      description: `Eco-Disruptive is a global talent and innovation program,
       an integral part of Mission Accelerate, within Bupa sustainability strategy.
        Sustainability challenges within business and the health sector are addressed by Bupa employees,
        entrepreneurs, and start-ups coming together.
        The aim is to identify and provide support to scalable start-ups where Bupa contribution can enhance their sustainability solutions.
        NovNat was chosen from among two Bupa Global & UK start-ups advancing to the global final—a thrilling talent program empowering emerging eco-entrepreneurs on Bupa's path towards achieving our net zero targets.
        NovNat has spearheaded a revolutionary technology capable of extracting water from the air, presenting a solution to the severe water scarcity afflicting numerous communities worldwide. Partnering with Bupa, NovNat aims to address water challenges within their global facilities and structures, which are adversely affected by water shortages. NovNat conducted site visits to various Bupa buildings in the UK to explore the feasibility of harnessing waste heat within the buildings to convert it into pure water, as well as utilizing our system as a dehumidification solution. `
    },
    {
      id: 3,
      title: "The Emerging Technologies Competition – Royal Society of Chemistry",
      date: "(July 2023)",
      images: ["14.jpeg", "15.jpeg"],
      description: `The Emerging Technologies Competition, an annual innovation contest,
    is dedicated to identifying and supporting chemistry-led technologies based in the UK.
    This dynamic event offers an invaluable platform for early-stage start-ups, spinouts,
    and academic entrepreneurs to spotlight their innovations, increasing visibility and attracting potential customers,
    partners, and investors.
    NovNat was selected as a finalist in the environmental category among six competitors from across the UK.` },
    {
      id: 4,
      title: "SMART EUREKA CLUSTER PO proposer's day and Manufacture ETF (European Technology Platform) – San Sebastián",
      date: "(Nov 2023)",
      images: ["16.jpeg"],
      description: `NovNat took part in the PO Proposers Day held in Donostia – San Sebastián (Spain) as part of the 7th call of Smart Advanced Manufacturing through the Eureka Cluster network.
    This in-person gathering attracted 60 participants representing 15 countries. NovNat actively participated in the event by presenting a project proposal aimed at structuring a consortium project with our partners.
    Our goal is to further develop our Atmospheric Water Generation system using advanced and scalable techniques,
    focusing on optimizing the condenser surface design and scaling up the MOF coating process.
    We are pleased to report that NovNat received exceptionally positive feedback during the PO stage of the proposal process.` },
    {
      id: 5,
      title: "Food 2030: green and resilient food systems Conference – Brussels",
      date: "(Dec 2023)",
      images: ["17.jpg", "18.jpg", "19.jpg", "20.jpg"],
      description: `NovNat participated in this conference with the aim of investigating opportunities to integrate the atmospheric water generation system into the food supply chain of Europe. This focus is particularly crucial for regions grappling with water scarcity induced by climate change, which has now extended to parts of Europe such as Spain and Italy.
    NovNat is poised to address this challenge by proposing a circular economy solution.
    Given that many food production systems consume significant amounts of water while also generating substantial waste heat,
    NovNat aims to leverage this excess heat to produce water. Through this innovative approach,
     not only can we achieve a net-zero water vision,
    but we can also contribute positively to the environment.` },
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
