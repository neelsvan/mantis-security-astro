// Ported verbatim from the eight service client components in the Next.js site
// (app/(public)/services/*/). Icon names map to @lucide/astro exports in
// ServicePageTemplate.astro; `image` renders a custom image instead of an icon.
export interface ServiceComponent {
  title: string;
  desc: string;
  icon: string;
  image?: string;
}

export interface Service {
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
    problem: string;
    solution: string;
    components: ServiceComponent[];
    benefits: string[];
    process: Array<{ step: string; title: string; desc: string }>;
    videoSrc?: string;
    showRiskMatrix?: boolean;
  };
}

export const services: Service[] = [
  {
    slug: 'guarding-services',
    navName: 'Guarding Services',
    cardName: 'Guarding Services',
    cardDesc: 'Trained, PSIRA-certified security officers providing on-site protection for businesses, estates, events, and institutions. Our guards are trained to be proactive assets to your organisation.',
    cardImage: '/images/guarding_officer_vehicle.jpg',
    cardIcon: 'Users',
    metaTitle: 'Professional Guarding Services',
    metaDescription: "Trained, PSIRA-certified security officers providing on-site protection. Mantis Security's guarding services deliver the gold standard of professionalism for businesses across South Africa.",
    template: {
      title: 'More Than a Uniform. A Trained, Trusted Professional.',
      subtitle: 'Our security officers are rigorously selected, PSIRA-certified, and trained to be proactive assets to your organisation, representing the gold standard of professionalism.',
      heroImage: '/images/guarding_officer_vehicle.jpg',
      problem: 'Many businesses struggle with poorly trained guards, inconsistent service delivery, limited supervision and a lack of professionalism from security providers. When security personnel are not properly trained, supported or managed, this can create serious reputational, operational and legal risks. The result is a false sense of security that leaves your business, people and assets exposed.',
      solution: "Mantis Security's guarding services begin with rigorous recruitment and PSIRA-compliant training. Every officer is carefully selected, background-checked, and continuously trained to maintain the highest standards. Our guards are not just personnel — they are trained professionals who understand your environment and proactively protect your assets.",
      components: [
        { title: 'Static Guarding', desc: 'Dedicated officers stationed at entry points, reception areas, and high-value zones.', icon: 'Shield' },
        { title: 'Mobile Patrols', desc: 'Regular and randomised patrols across your facility to deter and detect threats.', icon: 'Radio' },
        { title: 'Access Control', desc: 'Professional management of vehicle and pedestrian access with visitor logging.', icon: 'ClipboardCheck' },
        { title: 'Surveillance Support', desc: 'Guards trained to work alongside CCTV and electronic systems for layered protection.', icon: 'Eye' },
        { title: 'Incident Reporting', desc: 'Detailed, real-time reporting of all incidents, patrols, and observations.', icon: 'ClipboardCheck' },
        { title: 'Ongoing Training', desc: 'Continuous professional development to keep officers at peak performance.', icon: 'GraduationCap' },
      ],
      benefits: ['PSIRA-certified, vetted officers', 'Reduced security incidents', 'Professional representation of your brand', 'Detailed shift and incident reports', 'Flexible deployment models', 'Seamless integration with technology', 'Single point of contact management', 'Long-term reliability and consistency'],
      process: [
        { step: '1', title: 'Site Assessment', desc: 'We evaluate your environment, risks, and requirements.' },
        { step: '2', title: 'Custom Deployment Plan', desc: 'A tailored guarding strategy designed for your facility.' },
        { step: '3', title: 'Officer Selection', desc: 'We match the right officers to your specific environment.' },
        { step: '4', title: 'Ongoing Management', desc: 'Continuous supervision, training, and performance reviews.' },
      ],
    },
  },
  {
    slug: 'electronic-security',
    navName: 'Electronic Security',
    cardName: 'Electronic Security & Installations',
    cardDesc: 'Installation of CCTV systems, access control, surveillance technology, and integrated electronic security systems powered by AI analytics.',
    cardImage: '/images/electronic_security_stock.png',
    cardIcon: 'Cctv',
    metaTitle: 'Electronic Security & Installations',
    metaDescription: 'AI-powered CCTV, access control, and integrated surveillance systems. Mantis Security designs and installs cutting-edge electronic security for South African businesses.',
    template: {
      title: 'Intelligent Technology, Proactive Protection',
      subtitle: 'Leverage the power of AI-driven surveillance, integrated access control, and 24/7 offsite monitoring to secure your facility from the inside out.',
      heroImage: '/images/control_room_monitoring.jpg',
      problem: "Many businesses rely on basic or outdated security systems with blind spots, high false alarm rates, and reactive monitoring. Disparate systems that don't communicate create vulnerabilities and operational inefficiencies, leaving your facility exposed to sophisticated threats.",
      solution: 'Mantis Security designs and installs integrated electronic security ecosystems. We combine AI-powered CCTV analytics, advanced access control, and intelligent alarm systems into a unified platform. Every system is tailored to your environment, eliminating blind spots and providing real-time situational awareness.',
      components: [
        { title: 'AI-Powered CCTV', desc: 'High-definition cameras with intelligent analytics for motion detection, facial recognition, and anomaly alerts.', icon: 'Cctv' },
        { title: 'Access Control Systems', desc: 'Biometric, card, and PIN-based access control for buildings, floors, and restricted areas.', icon: 'Lock' },
        { title: 'Wireless & IP Systems', desc: 'Modern IP-based architecture for flexible, scalable deployment across any facility size.', icon: 'Wifi' },
        { title: 'Alarm & Intrusion Detection', desc: 'Intelligent alarm systems with verification and reduced false alarm rates.', icon: 'Bell' },
        { title: 'Integrated Monitoring', desc: 'All systems feed into a central platform for unified visibility and control.', icon: 'Monitor' },
        { title: 'Maintenance & Support', desc: 'Ongoing technical support, firmware updates, and preventative maintenance programs.', icon: 'Settings' },
      ],
      benefits: ['Eliminate security blind spots', 'Reduce false alarm rates', 'AI-driven threat detection', 'POPIA-compliant recording systems', 'Scalable and future-proof technology', 'Integration with existing infrastructure', 'Reduce reliance on manpower alone', 'Real-time alerts and notifications'],
      process: [
        { step: '1', title: 'Security Assessment', desc: 'We survey your site and identify technology requirements.' },
        { step: '2', title: 'System Design', desc: 'A custom electronic security blueprint for your environment.' },
        { step: '3', title: 'Professional Installation', desc: 'Expert installation with minimal disruption to operations.' },
        { step: '4', title: 'Ongoing Support', desc: 'Maintenance, monitoring, and system optimisation.' },
      ],
    },
  },
  {
    slug: 'offsite-monitoring',
    navName: 'Offsite Monitoring',
    cardName: 'Offsite Monitoring & Control Room',
    cardDesc: '24/7 monitoring of CCTV and alarm systems through a dedicated control room, enabling rapid response to security incidents.',
    cardImage: '/images/offsite_monitoring_stock.png',
    cardIcon: 'Eye',
    metaTitle: 'Offsite Monitoring & Control Room',
    metaDescription: '24/7 CCTV and alarm monitoring from our dedicated control room. Rapid incident response and real-time security management for South African businesses.',
    template: {
      title: 'Always Watching. Always Ready.',
      subtitle: 'Our dedicated 24/7 control room provides round-the-clock CCTV monitoring, alarm management, and rapid incident response for your business.',
      heroImage: '/images/control_room_monitoring_new.jpg',
      problem: 'Delayed responses to alarms or security incidents significantly increase risk and damage. Many businesses rely on monitoring services that are slow to respond, provide poor communication, or fail to verify alarms before dispatching — resulting in costly false callouts and genuine incidents that escalate unnecessarily.',
      solution: 'Mantis Security operates a state-of-the-art Control Room staffed by trained operators 24 hours a day, 365 days a year. We provide real-time CCTV monitoring, alarm verification, and coordinated incident response. Every event is logged, verified, and acted upon within seconds — not minutes.',
      components: [
        { title: '24/7 CCTV Monitoring', desc: 'Trained operators monitoring live camera feeds around the clock for suspicious activity.', icon: 'Eye' },
        { title: 'Alarm Management', desc: 'Intelligent alarm verification to reduce false callouts and prioritise real threats.', icon: 'Bell' },
        { title: 'Rapid Response Coordination', desc: 'Direct communication with on-site guards and emergency services for immediate action.', icon: 'Radio' },
        { title: 'Virtual Patrols', desc: 'Scheduled and random virtual patrols of your premises using PTZ cameras.', icon: 'Monitor' },
        { title: 'Real-Time Reporting', desc: 'Live incident reports and alerts delivered directly to your management team.', icon: 'FileText' },
        { title: 'After-Hours Monitoring', desc: 'Extended coverage when your premises are unoccupied and most vulnerable.', icon: 'Clock' },
      ],
      benefits: ['24/7/365 monitoring coverage', 'Rapid incident response times', 'Reduced false alarm callouts', 'Real-time alerts and reporting', 'Integration with on-site guards', 'Greater site coverage without extra guards', 'Detailed incident documentation', 'Peace of mind for management'],
      process: [
        { step: '1', title: 'System Integration', desc: 'We connect your cameras and alarms to our control room.' },
        { step: '2', title: 'Protocol Setup', desc: 'Custom response protocols tailored to your requirements.' },
        { step: '3', title: 'Active Monitoring', desc: '24/7 surveillance by trained operators.' },
        { step: '4', title: 'Reporting & Review', desc: 'Regular reports and performance reviews.' },
      ],
    },
  },
  {
    slug: 'risk-assessments',
    navName: 'Risk Assessments',
    cardName: 'Security Audits & Risk Assessments',
    cardDesc: 'Professional evaluations of security vulnerabilities and tailored recommendations to improve safety and reduce risk.',
    cardImage: '/images/risk_assessment_stock.png',
    cardIcon: 'Search',
    metaTitle: 'Security Audits & Risk Assessments',
    metaDescription: 'Professional security audits and risk assessments to identify vulnerabilities and design tailored protection strategies for your business.',
    template: {
      title: "Know Your Vulnerabilities Before They're Exploited",
      subtitle: 'Our expert risk assessments and security audits provide the intelligence you need to build a robust, proactive security strategy.',
      heroImage: '/images/risk_assessment_stock.png',
      problem: 'Many organisations lack the in-house expertise to conduct proper risk assessments or develop a structured security plan. They are often unsure of their vulnerabilities and what solutions are most appropriate, making them susceptible to both crime and purchasing ineffective security products.',
      solution: "Mantis Security's consultative approach fills this critical gap. Our experienced assessors evaluate every aspect of your security posture — physical, technological, and procedural. We deliver a comprehensive report with prioritised recommendations and a tailored strategy designed for your specific environment and risk profile.",
      components: [
        { title: 'Physical Security Audit', desc: 'Assessment of perimeters, access points, lighting, and physical barriers.', icon: 'Shield' },
        { title: 'Technology Assessment', desc: 'Evaluation of existing CCTV, access control, alarm, and monitoring systems.', icon: 'Search' },
        { title: 'Personnel Review', desc: 'Assessment of current security staffing, training levels, and deployment effectiveness.', icon: 'Target' },
        { title: 'Threat Analysis', desc: 'Identification of current and emerging threats specific to your industry and location.', icon: 'AlertTriangle' },
        { title: 'Compliance Review', desc: 'Ensure your security operations meet PSIRA, POPIA, and industry-specific requirements.', icon: 'FileText' },
        { title: 'Strategic Recommendations', desc: 'A prioritised roadmap with actionable recommendations and implementation guidance.', icon: 'BarChart3' },
      ],
      benefits: ['Identify hidden vulnerabilities', 'Prioritised improvement roadmap', 'Compliance assurance (PSIRA, POPIA)', 'Cost-effective security spending', 'Reduced risk exposure', 'Expert, independent assessment', 'Baseline for future improvements', 'Peace of mind for stakeholders'],
      process: [
        { step: '1', title: 'Scope & Brief', desc: 'We understand your concerns, priorities, and environment.' },
        { step: '2', title: 'On-Site Assessment', desc: 'Our experts conduct a thorough physical and digital audit.' },
        { step: '3', title: 'Analysis & Report', desc: 'Findings are compiled into a comprehensive report.' },
        { step: '4', title: 'Strategy & Implementation', desc: 'We present recommendations and support implementation.' },
      ],
      showRiskMatrix: true,
    },
  },
  {
    slug: 'vip-protection',
    navName: 'VIP Protection',
    cardName: 'VIP / Close Protection',
    cardDesc: 'Personal protection services for executives, celebrities, dignitaries, and high-risk individuals requiring discreet, professional security.',
    cardImage: '/images/vip_protection_stock.png',
    cardIcon: 'UserCheck',
    metaTitle: 'VIP / Close Protection Services',
    metaDescription: 'Discreet, professional close protection for executives, dignitaries, and high-risk individuals. Mantis Security VIP protection services across South Africa.',
    template: {
      title: 'Discreet Protection for High-Profile Individuals',
      subtitle: 'Professional close protection services for executives, dignitaries, celebrities, and high-risk individuals requiring expert personal security.',
      heroImage: '/images/vip_guard_portrait.jpg',
      problem: 'High-profile individuals face unique security threats ranging from targeted attacks to kidnapping and extortion. Standard security measures are insufficient for protecting VIPs who require discreet, professional, and highly skilled protection that adapts to their lifestyle and schedule.',
      solution: "Mantis Security provides elite close protection operatives who combine military-grade training with diplomatic discretion. Our VIP protection teams conduct advance reconnaissance, threat assessments, and create secure movement plans. Every detail is managed to ensure the principal's safety without disrupting their professional or personal life.",
      components: [
        { title: 'Personal Bodyguards', desc: 'Highly trained close protection officers providing 24/7 personal security.', icon: 'UserCheck' },
        { title: 'Secure Transport', desc: 'Armoured vehicle services and secure route planning for all movements.', icon: 'Car' },
        { title: 'Advanced Reconnaissance', desc: 'Pre-event and pre-travel security assessments of all destinations.', icon: 'Map' },
        { title: 'Communications Security', desc: 'Encrypted communications and coordination with local authorities.', icon: 'Radio' },
        { title: 'Surveillance Detection', desc: 'Counter-surveillance techniques to identify and neutralise threats early.', icon: 'Eye' },
        { title: 'Residential Security', desc: 'Comprehensive protection of the principal\u2019s home and family.', icon: 'Shield' },
      ],
      benefits: ['Discreet, professional protection', 'Military-grade trained operatives', 'Advance threat assessment', 'Secure transport logistics', 'Flexible deployment models', '24/7 availability', 'Local and international coverage', 'Confidentiality guaranteed'],
      process: [
        { step: '1', title: 'Threat Assessment', desc: 'We evaluate the risk profile and protection requirements.' },
        { step: '2', title: 'Team Selection', desc: 'Handpicked operatives matched to the assignment.' },
        { step: '3', title: 'Advance Planning', desc: 'Route planning, venue assessments, and protocol setup.' },
        { step: '4', title: 'Active Protection', desc: 'Seamless, discreet protection throughout the engagement.' },
      ],
    },
  },
  {
    slug: 'k9-special-operations',
    navName: 'K9 & Special Ops',
    cardName: 'K9 & Special Operations',
    cardDesc: 'Specialist units using trained dogs and tactical personnel for high-risk environments and special security operations.',
    cardImage: '/images/k9_stock.png',
    cardIcon: 'Dog',
    metaTitle: 'K9 & Special Operations',
    metaDescription: "Specialist K9 units and tactical personnel for high-risk environments. Mantis Security's special operations team for South African businesses.",
    template: {
      title: 'Specialist Units for High-Risk Environments',
      subtitle: 'K9 patrols extend guard coverage and strengthen visible deterrence across high-risk areas.',
      heroImage: '/images/k9_handler_dog.jpg',
      videoSrc: '/videos/k9_operations_alert.mp4',
      problem: 'Standard guarding solutions may not be sufficient for high-risk environments such as mining operations, large industrial facilities, or situations requiring specialised detection capabilities. These environments demand enhanced deterrence and rapid response capabilities.',
      solution: "Mantis Security's K9 and Special Operations division provides specialist security assets for environments that require an elevated response. Our trained K9 units and tactical personnel are deployed for perimeter protection, detection operations, and high-risk situations where standard guarding is insufficient.",
      components: [
        { title: 'Patrol K9 Units', desc: 'Trained dogs with handlers for perimeter patrols and visible deterrence.', icon: '', image: '/images/dog_icon.png' },
        { title: 'Detection Dogs', desc: 'Specialised dogs trained in narcotics, explosives, or contraband detection.', icon: 'Search' },
        { title: 'Tactical Response', desc: 'Specialist personnel trained for high-risk scenarios and rapid deployment.', icon: 'Target' },
        { title: 'Perimeter Security', desc: 'K9-enhanced perimeter protection for large or vulnerable sites.', icon: 'Shield' },
        { title: 'Crowd Control', desc: 'Specialist support for crowd management in volatile environments.', icon: 'AlertTriangle' },
        { title: 'Emergency Deployment', desc: 'Rapid deployment capability for urgent security situations.', icon: 'Radio' },
      ],
      benefits: ['Superior deterrence capability', 'Detection capabilities (narcotics, explosives)', 'Rapid response to high-risk situations', 'Highly visible security presence', 'Specialist trained handlers', 'Flexible deployment options', 'Integration with standard guarding', 'Cost-effective force multiplier'],
      process: [
        { step: '1', title: 'Risk Analysis', desc: 'We assess the environment and identify specialist requirements.' },
        { step: '2', title: 'Unit Selection', desc: 'Appropriate K9 and tactical assets assigned to the operation.' },
        { step: '3', title: 'Deployment', desc: 'Professional deployment with operational protocols.' },
        { step: '4', title: 'Ongoing Support', desc: 'Continuous training, handler support, and performance reviews.' },
      ],
    },
  },
  {
    slug: 'event-security',
    navName: 'Event Security',
    cardName: 'Event Security',
    cardDesc: 'Comprehensive security planning and professional personnel for concerts, conferences, festivals, and corporate events.',
    cardImage: '/images/hospitality_event_stock.png',
    cardIcon: 'Calendar',
    metaTitle: 'Event Security Services',
    metaDescription: 'Professional event security planning and personnel for concerts, conferences, festivals, and corporate events across South Africa.',
    template: {
      title: 'Seamless Security for Every Event',
      subtitle: 'Comprehensive security planning and professional personnel ensuring safe, successful events of every scale and type.',
      heroImage: '/images/event_security_officer.png',
      problem: 'Events present complex security challenges including crowd management, access control, VIP protection, and emergency preparedness. Poor event security can lead to safety incidents, reputational damage, and legal liability for organisers.',
      solution: "Mantis Security provides end-to-end event security solutions. From initial planning and risk assessment through to post-event debriefing, our experienced team manages every aspect of your event's security. We deploy trained personnel, implement access control, and coordinate with emergency services to ensure a safe environment.",
      components: [
        { title: 'Security Planning', desc: 'Comprehensive event security plans including risk assessment and emergency protocols.', icon: 'Map' },
        { title: 'Access Control', desc: 'Professional management of entry/exit points with credential verification.', icon: 'ClipboardCheck' },
        { title: 'Crowd Management', desc: 'Trained personnel for crowd control, flow management, and safety.', icon: 'Users' },
        { title: 'VIP Protection', desc: 'Close protection for speakers, performers, and distinguished guests.', icon: 'Shield' },
        { title: 'Communications', desc: 'Coordinated radio communication network throughout the venue.', icon: 'Radio' },
        { title: 'Post-Event Review', desc: 'Detailed debriefing and incident reporting after every event.', icon: 'Calendar' },
      ],
      benefits: ['Comprehensive event security planning', 'Professional, uniformed personnel', 'Crowd management expertise', 'VIP protection capability', 'Emergency response coordination', 'Detailed post-event reporting', 'Flexible scaling for any event size', 'Experienced event security team'],
      process: [
        { step: '1', title: 'Consultation', desc: 'We discuss your event, venue, expected attendance, and concerns.' },
        { step: '2', title: 'Security Plan', desc: 'A tailored event security plan with personnel deployment.' },
        { step: '3', title: 'Event Execution', desc: 'Professional deployment with real-time coordination.' },
        { step: '4', title: 'Post-Event Debrief', desc: 'Comprehensive report and recommendations for future events.' },
      ],
    },
  },
  {
    slug: 'investigations',
    navName: 'Investigations',
    cardName: 'Investigations & Corporate Crime Intelligence',
    cardDesc: 'Investigative services to uncover internal theft, fraud, and other corporate risks using covert agents and analytics.',
    cardImage: '/images/investigations_stock.png',
    cardIcon: 'FileSearch',
    metaTitle: 'Investigations & Corporate Crime Intelligence',
    metaDescription: 'Professional investigative services uncovering internal theft, fraud, and corporate risks. Mantis Security corporate crime intelligence for South African businesses.',
    template: {
      title: 'Uncover Threats. Protect Your Business.',
      subtitle: 'Expert investigative services and corporate crime intelligence to detect fraud, internal theft, and other corporate risks before losses escalate.',
      heroImage: '/images/investigations_officer.webp',
      problem: 'Internal theft, fraud, and corporate crime can go undetected for months or years, resulting in significant financial losses and reputational damage. Many businesses lack the investigative capability to detect these threats, and traditional security measures are often insufficient to address sophisticated internal risks.',
      solution: "Mantis Security's investigation division goes beyond traditional guarding to provide intelligence-driven solutions. Using covert agents, advanced analytics, and forensic techniques, our team identifies internal threats, gathers evidence, and provides the intelligence needed to take decisive action. We help protect your bottom line from the inside out.",
      components: [
        { title: 'Covert Investigations', desc: 'Undercover operatives deployed to detect internal theft, fraud, and misconduct.', icon: 'Eye' },
        { title: 'Corporate Fraud Investigation', desc: 'Expert investigation of financial irregularities, procurement fraud, and corruption.', icon: 'FileSearch' },
        { title: 'Background Screening', desc: 'Thorough vetting of employees, contractors, and business partners.', icon: 'UserX' },
        { title: 'Data Analytics', desc: 'Advanced analytical tools to identify patterns and anomalies in operations.', icon: 'Database' },
        { title: 'Evidence Collection', desc: 'Forensic evidence gathering for disciplinary proceedings or prosecution.', icon: 'Shield' },
        { title: 'Risk Intelligence Reports', desc: 'Detailed intelligence reports with recommendations for risk mitigation.', icon: 'FileText' },
      ],
      benefits: ['Detect hidden internal threats', 'Reduce financial losses', 'Evidence for disciplinary or legal action', 'Proactive risk identification', 'Expert investigative team', 'Confidential and discreet', 'Comprehensive intelligence reports', 'Prevention of future incidents'],
      process: [
        { step: '1', title: 'Intelligence Briefing', desc: 'We understand the suspected issues and scope the investigation.' },
        { step: '2', title: 'Investigation', desc: 'Covert or overt investigation using appropriate methods.' },
        { step: '3', title: 'Evidence & Analysis', desc: 'Findings compiled with evidence and analysis.' },
        { step: '4', title: 'Report & Action', desc: 'Comprehensive report with recommendations for action.' },
      ],
    },
  },
];
