// Ported verbatim from the six industry client components in the Next.js site
// (app/(public)/industries/*/). Icon names map to @lucide/astro exports in
// IndustryPageTemplate.astro.
export interface IndustrySolution {
  title: string;
  desc: string;
  icon: string;
}

export interface Industry {
  slug: string;
  navName: string;
  cardName: string;
  cardDesc: string;
  cardImage: string;
  cardIcon: string;
  metaTitle: string;
  metaDescription: string;
  template: {
    title: string;
    subtitle: string;
    heroImage: string;
    intro: string;
    challenges: string[];
    solutions: IndustrySolution[];
    relatedServices: Array<{ name: string; href: string }>;
  };
}

export const industries: Industry[] = [
  {
    slug: 'commercial-security',
    navName: 'Commercial & Office Parks',
    cardName: 'Commercial & Office Parks',
    cardDesc: 'Creating safe and productive work environments with professional concierge-style security, visitor management, and access control.',
    cardImage: '/images/commercial_stock.png',
    cardIcon: 'Building2',
    metaTitle: 'Commercial Security | Mantis Security',
    metaDescription: 'Professional commercial security solutions for office parks, corporate campuses, and business premises across South Africa.',
    template: {
      title: 'Commercial Security',
      subtitle: 'Protecting Business Assets & Creating Safe Work Environments',
      heroImage: '/images/commercial_office_officer.jpg',
      intro: 'From corporate headquarters to multi-tenant office parks, Mantis Security delivers integrated commercial security programmes that protect your people, assets, and business reputation. Our solutions combine professional guarding, advanced electronic surveillance, and proactive risk management to create safe, productive work environments across Gauteng and beyond.',
      challenges: [
        'Unauthorised access to office buildings and restricted areas',
        'Employee and visitor safety in parking garages and common areas',
        'Theft of IT equipment, intellectual property, and sensitive documents',
        'After-hours break-ins and vandalism targeting commercial properties',
        'Managing multiple access points across large corporate campuses',
        'Compliance with occupational health and safety regulations',
      ],
      solutions: [
        { title: 'Access Control Management', desc: 'Biometric and card-based systems managing employee, visitor, and contractor access across all entry points.', icon: 'Lock' },
        { title: 'Manned Guarding', desc: 'PSIRA-registered guards providing professional reception security, patrol, and incident response.', icon: 'Users' },
        { title: 'CCTV Surveillance', desc: 'HD camera networks with AI-powered analytics monitoring parking areas, lobbies, and perimeters 24/7.', icon: 'Eye' },
        { title: 'Offsite Monitoring', desc: 'Real-time alarm and CCTV monitoring from our Head Office control room with rapid armed response.', icon: 'Wifi' },
        { title: 'Risk Assessments', desc: 'Comprehensive security audits identifying vulnerabilities and recommending cost-effective improvements.', icon: 'ShieldCheck' },
        { title: 'Integrated Solutions', desc: 'Seamless integration of electronic and physical security tailored to your commercial environment.', icon: 'Building2' },
      ],
      relatedServices: [
        { name: 'Guarding Services', href: '/services/guarding-services' },
        { name: 'Electronic Security', href: '/services/electronic-security' },
        { name: 'Risk Assessments', href: '/services/risk-assessments' },
        { name: 'Offsite Monitoring', href: '/services/offsite-monitoring' },
      ],
    },
  },
  {
    slug: 'industrial-security',
    navName: 'Industrial & Manufacturing',
    cardName: 'Industrial & Manufacturing',
    cardDesc: 'Protecting manufacturing operations, equipment, and personnel with layered security combining technology and trained guards.',
    cardImage: '/images/industrial_security_stock.png',
    cardIcon: 'Factory',
    metaTitle: 'Industrial Security | Mantis Security',
    metaDescription: 'Specialised security solutions for factories, manufacturing plants, and industrial facilities across South Africa.',
    template: {
      title: 'Industrial Security',
      subtitle: 'Safeguarding Manufacturing & Industrial Operations',
      heroImage: '/images/industrial_security_stock.png',
      intro: 'Industrial facilities require security solutions that protect valuable stock, raw materials, equipment and personnel without disrupting operations. Mantis Security delivers customised industrial security programmes that help reduce theft, sabotage, unauthorised access and safety risks while supporting a secure, efficient working environment.',
      challenges: [
        'Theft and pilferage of raw materials, tools, and finished products',
        'Unauthorised entry to restricted and hazardous zones',
        'Internal collusion and syndicate activity targeting supply chains',
        'Fire, sabotage, and environmental security threats',
        'Perimeter breaches across large, sprawling industrial complexes',
        'Worker safety compliance and incident management',
      ],
      solutions: [
        { title: 'Perimeter Security', desc: 'Electric fencing, thermal cameras, and regular patrols securing large industrial perimeters.', icon: 'ShieldAlert' },
        { title: 'Gate & Access Control', desc: 'Vehicle and personnel screening with biometric access to sensitive production areas.', icon: 'Lock' },
        { title: 'CCTV & Surveillance', desc: 'Industrial-grade cameras with analytics monitoring production floors, loading bays, and storage yards.', icon: 'Eye' },
        { title: 'Manned Guarding', desc: 'Trained guards managing access points, conducting patrols, and responding to incidents on-site.', icon: 'Users' },
        { title: 'Fire & Safety Monitoring', desc: 'Integration with fire detection systems and emergency response protocols for industrial environments.', icon: 'Flame' },
        { title: 'Supply Chain Security', desc: 'Protecting goods in transit and at loading docks to prevent theft and ensure inventory integrity.', icon: 'Factory' },
      ],
      relatedServices: [
        { name: 'Guarding Services', href: '/services/guarding-services' },
        { name: 'Electronic Security', href: '/services/electronic-security' },
        { name: 'Risk Assessments', href: '/services/risk-assessments' },
        { name: 'Investigations', href: '/services/investigations' },
      ],
    },
  },
  {
    slug: 'warehouse-logistics-security',
    navName: 'Warehousing & Logistics',
    cardName: 'Warehousing & Logistics',
    cardDesc: 'Securing supply chains, preventing cargo theft, and managing access for large logistics operations.',
    cardImage: '/images/warehouse_stock.png',
    cardIcon: 'Warehouse',
    metaTitle: 'Warehouse & Logistics Security | Mantis Security',
    metaDescription: 'Comprehensive security for warehouses, distribution centres, and logistics operations across South Africa.',
    template: {
      title: 'Warehouse & Logistics Security',
      subtitle: 'Protecting Inventory, Cargo & Supply Chain Operations',
      heroImage: '/images/warehouse_security_search.jpg',
      intro: 'Warehouses and logistics operations are prime targets for organised crime syndicates in South Africa. Mantis Security provides end-to-end protection for your inventory, cargo, and distribution processes—from receiving docks to dispatch bays—ensuring your supply chain remains secure and your losses stay at zero.',
      challenges: [
        'Cargo theft and hijacking during loading and transit',
        'Internal shrinkage and collusion among warehouse staff',
        'Unauthorised access to high-value storage areas',
        'After-hours break-ins at distribution centres',
        'Inventory discrepancies and stock pilferage',
        'Managing security across multiple shifts and peak periods',
      ],
      solutions: [
        { title: 'Loading Bay Security', desc: 'Dedicated guards and CCTV coverage at all loading docks to prevent theft during dispatch and receiving.', icon: 'Truck' },
        { title: 'Access Control Systems', desc: 'Biometric and card-based access restricting entry to authorised personnel in high-value zones.', icon: 'Lock' },
        { title: 'CCTV Surveillance', desc: '360-degree camera coverage of aisles, staging areas, and perimeters with remote monitoring.', icon: 'Eye' },
        { title: 'Stock Audit Support', desc: 'Security personnel assisting with inventory counts and identifying shrinkage patterns.', icon: 'ClipboardCheck' },
        { title: 'Manned Guarding', desc: 'Round-the-clock guarding with regular patrols covering all warehouse zones and yard areas.', icon: 'Users' },
        { title: 'Integrated Warehouse Security', desc: 'Combining electronic systems with physical security for comprehensive loss prevention.', icon: 'Warehouse' },
      ],
      relatedServices: [
        { name: 'Guarding Services', href: '/services/guarding-services' },
        { name: 'Electronic Security', href: '/services/electronic-security' },
        { name: 'Offsite Monitoring', href: '/services/offsite-monitoring' },
        { name: 'Investigations', href: '/services/investigations' },
      ],
    },
  },
  {
    slug: 'education-security',
    navName: 'Education',
    cardName: 'Education',
    cardDesc: 'A safer environment for learning with campus safety protocols, access control, and non-intrusive security presence.',
    cardImage: '/images/hospitality_event_stock.png',
    cardIcon: 'GraduationCap',
    metaTitle: 'Education Security | Mantis Security',
    metaDescription: 'Specialised security solutions for schools, universities, and educational institutions across South Africa.',
    template: {
      title: 'Education Security',
      subtitle: 'Creating Safe Learning Environments for Students & Staff',
      heroImage: '/images/education_officer_campus.jpg',
      intro: 'Schools, colleges, and universities require a delicate balance between openness and security. Mantis Security provides tailored education security solutions that protect students, staff, and visitors while maintaining a welcoming environment conducive to learning. Our guards are specially trained in conflict resolution, emergency protocols, and child safety.',
      challenges: [
        'Unauthorised visitors and potential threats on campus',
        'Theft of school equipment, electronics, and personal property',
        'Vandalism and after-hours break-ins during holidays',
        'Managing traffic flow during drop-off and pick-up times',
        'Emergency response preparedness and evacuation procedures',
        'Maintaining a safe but non-intimidating environment for learners',
      ],
      solutions: [
        { title: 'Campus Access Control', desc: 'Managed entry points with visitor registration ensuring only authorised individuals enter the premises.', icon: 'Lock' },
        { title: 'Trained Security Personnel', desc: 'Guards specifically trained for educational environments with child safeguarding awareness.', icon: 'Users' },
        { title: 'CCTV Monitoring', desc: 'Strategic camera placement covering entrances, corridors, parking areas, and recreational zones.', icon: 'Eye' },
        { title: 'Emergency Protocols', desc: 'Customised emergency response plans including lockdown and evacuation procedures.', icon: 'Bell' },
        { title: 'After-Hours Protection', desc: 'Patrol and monitoring services protecting facilities during evenings, weekends, and school holidays.', icon: 'ShieldCheck' },
        { title: 'Integrated Campus Security', desc: 'Comprehensive security design tailored to the unique layout and needs of educational facilities.', icon: 'GraduationCap' },
      ],
      relatedServices: [
        { name: 'Guarding Services', href: '/services/guarding-services' },
        { name: 'Electronic Security', href: '/services/electronic-security' },
        { name: 'Risk Assessments', href: '/services/risk-assessments' },
        { name: 'Event Security', href: '/services/event-security' },
      ],
    },
  },
  {
    slug: 'residential-estate-security',
    navName: 'Residential Estates',
    cardName: 'Residential Estates',
    cardDesc: 'The trusted partner for community safety with advanced perimeter security and sophisticated access control.',
    cardImage: '/images/residential_stock.png',
    cardIcon: 'Home',
    metaTitle: 'Residential & Estate Security | Mantis Security',
    metaDescription: 'Premium residential security and estate protection services for gated communities and private residences in South Africa.',
    template: {
      title: 'Residential & Estate Security',
      subtitle: 'Protecting Homes, Families & Gated Communities',
      heroImage: '/images/residential_estate_officer.png',
      intro: 'Your home should be your sanctuary. Mantis Security provides comprehensive residential and estate security solutions that protect families, property, and peace of mind. From individual homes to large gated estates, our integrated approach combines professional guarding, electronic surveillance, and rapid response to keep South African communities safe.',
      challenges: [
        'Home invasions and armed robberies targeting residential areas',
        'Perimeter breaches in gated communities and estates',
        'Vehicle theft and hijacking in driveways and common areas',
        'Inadequate lighting and blind spots creating vulnerability',
        'Managing access for domestic workers, contractors, and deliveries',
        'Coordinating security across multi-unit residential developments',
      ],
      solutions: [
        { title: 'Estate Guarding', desc: 'Professional guards managing boom gates, conducting vehicle checks, and patrolling estate grounds.', icon: 'Users' },
        { title: 'Access Management', desc: 'Biometric and tag systems controlling resident, visitor, and contractor access to the estate.', icon: 'Lock' },
        { title: 'CCTV & Perimeter Detection', desc: 'Camera networks with electric fencing and beam detectors securing estate perimeters.', icon: 'Eye' },
        { title: 'Vehicle Patrols', desc: 'Regular mobile patrols covering internal roads, parks, and common areas day and night.', icon: 'Car' },
        { title: 'Armed Response', desc: 'Rapid armed response units on standby for immediate deployment to any emergency.', icon: 'ShieldCheck' },
        { title: 'Community Security Plans', desc: 'Tailored security strategies developed in consultation with HOAs and estate management.', icon: 'Home' },
      ],
      relatedServices: [
        { name: 'Guarding Services', href: '/services/guarding-services' },
        { name: 'Electronic Security', href: '/services/electronic-security' },
        { name: 'Offsite Monitoring', href: '/services/offsite-monitoring' },
        { name: 'Risk Assessments', href: '/services/risk-assessments' },
      ],
    },
  },
  {
    slug: 'hospitality-retail-security',
    navName: 'Hospitality & Retail',
    cardName: 'Hospitality & Retail',
    cardDesc: 'Discreet, professional security that protects guests, customers, and assets while maintaining a welcoming atmosphere.',
    cardImage: '/images/vip_protection_stock.png',
    cardIcon: 'Hotel',
    metaTitle: 'Hospitality & Retail Security | Mantis Security',
    metaDescription: 'Specialised security for hotels, restaurants, shopping centres, and retail stores across South Africa.',
    template: {
      title: 'Hospitality & Retail Security',
      subtitle: 'Protecting Revenue, Guests & Brand Reputation',
      heroImage: '/images/hospitality_officers_entrance.jpg',
      intro: 'In hospitality and retail, security must be visible enough to deter crime yet discreet enough to maintain a welcoming atmosphere. Mantis Security delivers tailored solutions for hotels, shopping centres, restaurants, and retail stores—reducing shrinkage, protecting guests, and safeguarding your brand reputation across South Africa.',
      challenges: [
        'Shoplifting, organised retail crime, and internal theft',
        'Guest safety in hotels, parking areas, and public spaces',
        'Cash-in-transit and point-of-sale security vulnerabilities',
        'Managing large crowds during sales events and peak seasons',
        'Balancing visible security with a welcoming customer experience',
        'After-hours protection for stock and premises',
      ],
      solutions: [
        { title: 'Floor Security', desc: 'Plainclothes and uniformed officers trained in customer service and loss prevention techniques.', icon: 'Users' },
        { title: 'CCTV & Analytics', desc: 'Smart camera systems with retail analytics tracking foot traffic, suspicious behaviour, and incidents.', icon: 'Eye' },
        { title: 'Access Control', desc: 'Staff-only area restrictions and after-hours lockdown systems protecting stock rooms and offices.', icon: 'Lock' },
        { title: 'Cash Protection', desc: 'Secure cash handling procedures and escort services reducing point-of-sale and transit risks.', icon: 'CreditCard' },
        { title: 'Event & Crowd Management', desc: 'Trained teams managing queues, capacity, and safety during promotions and peak trading periods.', icon: 'Store' },
        { title: 'Loss Prevention Audits', desc: 'Regular security assessments identifying theft patterns and recommending countermeasures.', icon: 'ShieldCheck' },
      ],
      relatedServices: [
        { name: 'Guarding Services', href: '/services/guarding-services' },
        { name: 'Electronic Security', href: '/services/electronic-security' },
        { name: 'Event Security', href: '/services/event-security' },
        { name: 'Investigations', href: '/services/investigations' },
      ],
    },
  },
];
