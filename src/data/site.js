import { PATHS } from '../routes/paths'
import { extraServices } from './moreServices'
import { moreMaintenance } from './maintenanceMore'

export const company = {
  name: 'TOP-STEA',
  tagline: 'MEPF beyond expectations',
  website: 'www.topstea.com',
  url: 'https://www.topstea.com',
  // Not in the document: fill these in when you have them and they will appear in the footer/contact page.
  email: 'projects@top-stea.com',
  emails: ['projects@top-stea.com', 'topsteaglobalimited@gmail.com'],
  phone: '+234 802 329 2918',
  phoneHref: 'tel:+2348023292918',
  whatsappHref: 'https://wa.me/2348023292918?text=Hello%20TOP-STEA%2C%20I%20would%20like%20to%20make%20an%20enquiry.',
  address: 'Lake Point Towers, 403 Close, Fourth Avenue, Banana Island, Ikoyi, Lagos, Nigeria.',
  // Social handle is "Top-Stea" on every network. Check each link opens the right page and edit here if a handle differs.
  socials: [
    { name: 'Facebook', href: 'https://www.facebook.com/Top-Stea' },
    { name: 'Instagram', href: 'https://www.instagram.com/Top-Stea' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/Top-Stea' },
    { name: 'X', href: 'https://x.com/Top-Stea' },
    { name: 'YouTube', href: 'https://www.youtube.com/@Top-Stea' },
  ],
}

export const coreServices = [
  {
    slug: 'mechanical',
    title: 'Mechanical Services',
    icon: 'mech',
    image: 'mechanical',
    short: 'Air conditioning, ventilation, piping and mechanical plant installation.',
    groups: [
      {
        title: 'Air Conditioning & Ventilation',
        items: [
          'Split, VRF/VRV and packaged AC systems',
          'Chilled-water systems and AHU/FCU installation',
          'Ventilation, fresh-air, exhaust and extract systems',
          'Ductwork installation and insulation',
        ],
      },
      {
        title: 'Piping & Plant',
        items: [
          'Refrigerant and chilled-water piping',
          'Mechanical plant installation',
          'Pumps, equipment connection and alignment',
          'Testing and commissioning support',
        ],
      },
    ],
  },
  {
    slug: 'electrical',
    title: 'Electrical Services',
    icon: 'elec',
    image: 'electrical',
    short: 'LV distribution, containment, cabling, termination, testing and inspection.',
    groups: [
      {
        title: 'Distribution & Containment',
        text: 'LV electrical installation, power distribution systems, cable tray and trunking, conduit installation, DB/SMDB/MDB installation.',
      },
      {
        title: 'Cabling & Termination',
        text: 'Cable pulling, dressing and termination, lighting and small-power systems, earthing and bonding, generator and ATS connections.',
      },
      {
        title: 'Testing & Inspection',
        text: "Electrical equipment installation, continuity and insulation resistance testing, functional testing, and builders' works coordination.",
      },
    ],
  },
  {
    slug: 'plumbing',
    title: 'Plumbing & Public Health',
    icon: 'plumb',
    image: 'plumbing',
    short: 'Water systems, drainage and sanitary installation with full pressure testing.',
    groups: [
      {
        title: 'Water Systems',
        items: [
          'Domestic cold-water and hot-water systems',
          'Water storage and pumping systems',
          'PPR, HDPE, PVC, UPVC and related piping',
          'Pipe supports and accessories',
        ],
      },
      {
        title: 'Drainage & Sanitary',
        items: [
          'Soil, waste and vent systems',
          'Drainage installation',
          'Sanitary fixture installation',
          'Pressure testing, flushing and commissioning',
        ],
      },
    ],
  },
  {
    slug: 'fire-protection',
    title: 'Fire Protection Services',
    icon: 'fire',
    image: 'fire',
    short: 'Suppression systems, alarm containment, testing and commissioning.',
    groups: [
      {
        title: 'Suppression Systems',
        text: 'Sprinkler installation, fire hydrant systems, hose reel systems, fire-fighting pipework and fire pump installation.',
      },
      {
        title: 'Alarm & Containment',
        text: 'Fire alarm containment and installation support, fire tank connections, fire-rated service penetrations.',
      },
      {
        title: 'Testing & Commissioning',
        text: 'Pressure testing, flushing, pump and sprinkler/hydrant system testing, flow testing and alarm/interface testing support.',
      },
    ],
  },
  {
    slug: 'elv-technical-systems',
    title: 'ELV & Technical Systems Support',
    icon: 'elv',
    image: 'elv',
    short: 'Structured cabling, security, access and BMS installation support.',
    intro:
      'In addition to core MEPF disciplines, TOP-STEA technical teams can support installation activities across a broad range of ELV and intelligent building systems.',
    groups: [
      {
        title: 'Structured Cabling',
        text: 'Data and communication systems, ICT infrastructure installation and termination.',
      },
      {
        title: 'Security & Access',
        text: 'CCTV containment, access control systems and public address system support.',
      },
      {
        title: 'BMS & Controls',
        text: 'BMS containment and field installation support, integration-ready containment routes.',
      },
    ],
  },
]

// the five core disciplines (home-page panels) + extra construction services (menu, pages, footer)
export const services = [...coreServices, ...extraServices]

export const nav = [
  { label: 'Home', to: PATHS.home, end: true },
  { label: 'About', to: PATHS.about },
  { label: 'Services', to: PATHS.services, children: true },
  { label: 'Methodology', to: PATHS.methodology },
  { label: 'Engagement', to: PATHS.engagement },
  { label: 'Quality & HSE', to: PATHS.quality },
]

export const whoWeAre = [
  'TOP-STEA is a professional engineering and technical services company specialising in Mechanical, Electrical, Plumbing, and Fire Protection (MEPF) installation, construction support, manpower supply, and full project execution.',
  'We serve clients across commercial, industrial, institutional, residential, and infrastructure sectors delivering qualified technical manpower, experienced site supervision, and specialist MEPF installation teams for both new-build and renovation projects.',
  'Our model is built for flexibility, speed, and accountability allowing clients and principal contractors to maintain programme, quality, safety, and productivity targets without compromising engineering standards.',
]

export const whoWeAreExtended =
  'Having HVAC, electrical, plumbing, fire protection and controls disciplines under one roof allows constant communication between teams. Projects proceed more smoothly, each discipline is completed in less time, and clients save both time and money.'

export const sectors = ['Commercial', 'Industrial', 'Institutional', 'Residential', 'Infrastructure']

export const serviceModel = {
  intro:
    "TOP-STEA's engagement structure is designed to adapt to the specific requirements of each project whether rapid manpower reinforcement or full turnkey MEPF delivery.",
  models: [
    {
      key: 'A',
      title: 'Day-Rate / Manpower Supply',
      text: 'Deployment of skilled and semi-skilled MEPF personnel on agreed daily or monthly rates. Ideal for labour augmentation and programme recovery where the main contractor controls project management.',
    },
    {
      key: 'B',
      title: 'Project-Based / Lump-Sum',
      text: 'Execution of defined MEPF installation packages against an agreed scope, programme, deliverables, and commercial value with a single accountable installation team.',
    },
  ],
}

export const disciplinesNote =
  'Each discipline is supported by dedicated supervisory teams, skilled installation workforce, and structured quality and testing protocols.'

export const workforce = {
  title: 'Our Multi-Disciplinary Workforce',
  text: "TOP-STEA's technical capacity is structured around rapid mobilisation of multi-disciplinary MEPF manpower and experienced site-based supervision — scalable to match project size and programme demands.",
  scalableNote:
    'Manpower composition is adjusted according to work fronts, construction sequence, required productivity and project programme deploying incrementally rather than maintaining an unnecessarily large workforce from day one.',
  stats: [
    {
      value: 4,
      suffix: '',
      label: 'MEPF Disciplines',
      text: 'Mechanical, Electrical, Plumbing and Fire Protection — all delivered under one structured team.',
    },
    {
      value: 10,
      suffix: '+',
      label: 'Engineering Roles',
      text: 'Project Manager, discipline engineers, QA/QC, HSE, planning and commercial support.',
    },
    {
      value: 7,
      suffix: '',
      label: 'Supervisor Categories',
      text: 'Mechanical, Electrical, Plumbing, Fire Protection, HVAC supervisors, foremen and chargehands.',
    },
    {
      value: 100,
      suffix: '+',
      label: 'Skilled Trades',
      text: 'HVAC technicians, pipe fitters, electricians, welders, cable jointers and commissioning technicians.',
    },
  ],
}

export const fastTrack = {
  intro:
    "Effective acceleration requires far more than simply increasing headcount. TOP-STEA's fast-track methodology combines structured planning, work-front coordination, material availability, supervision, productivity monitoring, quality control, and parallel execution — delivering measurable programme recovery.",
  principles: [
    {
      n: '01',
      title: 'Rapid Mobilisation',
      text: 'Deploy key supervisors and foremen first to establish work fronts before full manpower mobilisation begins.',
    },
    {
      n: '02',
      title: 'Work-Front Planning',
      text: 'Review IFC drawings, BOQ, programme and construction sequence to divide the project into manageable installation zones.',
    },
    {
      n: '03',
      title: 'Parallel Execution',
      text: 'Deploy multi-disciplinary teams to simultaneous work fronts — HVAC, electrical, plumbing and fire protection working concurrently.',
    },
    {
      n: '04',
      title: 'Productivity Monitoring',
      text: 'Daily tracking of planned vs. actual output per work front — with rapid reallocation of manpower to underperforming zones.',
    },
    {
      n: '05',
      title: 'Quality & HSE Control',
      text: 'Structured inspections, ITPs, toolbox talks and method statements ensure acceleration never compromises standards.',
    },
  ],
}

export const mobilisation = {
  intro:
    "Upon receipt of approved scope and mobilisation instruction, TOP-STEA will rapidly identify and deploy the required technical personnel structured around the project's specific parameters.",
  steps: ['Scope Review', 'Personnel ID', 'Early Deployment', 'Full Mobilisation'],
  factors: [
    'Project location',
    'Number of floors and work zones',
    'Shift requirements',
    'Available work fronts',
    'Required manpower strength',
  ],
}

export const assessment = {
  title: 'Project Assessment & Work-Front Planning',
  documents: [
    'IFC/shop drawings and MEPF layouts',
    'Equipment schedules and approved specifications',
    'BOQ and project programme',
    'Construction and ceiling closure sequence',
    "Builders' work and interface requirements",
    'Material availability and logistics constraints',
  ],
  zoneText:
    'The project is divided into manageable work fronts using a structured breakdown:',
  chain: ['Zone', 'Floor', 'Area', 'Discipline', 'Activity', 'Manpower', 'Target', 'Output'],
  zoneNote:
    'This framework enables real-time measurement of actual productivity against planned production allowing management to identify and address bottlenecks immediately.',
}

export const parallel = {
  text: 'For accelerated projects, TOP-STEA deploys discipline teams to multiple work fronts simultaneously eliminating the delays and idle time associated with sequential installation.',
  teams: [
    'HVAC Team',
    'Electrical Containment',
    'Electrical Cabling',
    'Plumbing Team',
    'Fire Protection',
    'Equipment Installation',
    'Testing & Commissioning',
  ],
}

export const manpowerPlanning = {
  title: 'Manpower Planning & Productivity Control',
  text: 'TOP-STEA links manpower deployment directly to programme requirements tracking daily performance against planned targets to maximise productive installation hours.',
  note: 'Where resources fall short, manpower is increased progressively. Where fronts are underperforming, reallocation happens the same day not the next week.',
}

export const recovery = {
  title: 'Programme Recovery & Acceleration',
  text: 'Where a project is behind schedule, TOP-STEA can support structured programme recovery increasing productive installation hours and work-front coverage while controlling rework and quality.',
  items: [
    {
      title: 'Additional Manpower & Supervision',
      text: 'Targeted deployment of additional skilled trades and supervisors to critical programme activities.',
    },
    {
      title: 'Extended Hours & Multiple Shifts',
      text: 'Extended working hours, weekend working and multi-shift arrangements where site conditions and permissions allow.',
    },
    {
      title: 'Critical Activity Targeting',
      text: "Recovery programme developed around the project's critical path — with specialist teams deployed to highest-impact activities first.",
    },
  ],
}

export const optionA = {
  title: 'Option A — Day-Rate / Manpower Supply',
  text: 'Under the day-rate model, TOP-STEA supplies qualified MEPF personnel on agreed daily or monthly rates. The client or principal contractor retains overall project management while TOP-STEA provides structured technical manpower and supervision.',
  categories: [
    ['Management', 'Project/MEPF Manager'],
    ['Engineering', 'Mechanical, Electrical, Plumbing Engineers'],
    ['Supervision', 'Supervisors, Foremen, Chargehands'],
    ['Skilled', 'Electricians, Plumbers, HVAC Technicians, Pipe Fitters'],
    ['Specialist', 'Fire Protection / HVAC Specialist Technicians'],
    ['Semi-Skilled', 'MEPF Installation Operatives'],
    ['General Support', 'Helpers and Labour'],
  ],
  note: 'Daily attendance, manpower deployment records, and verified work output are submitted for client verification as part of transparent commercial administration.',
}

export const optionB = {
  title: 'Option B — Project-Based / Lump-Sum',
  text: 'Under the project-based model, TOP-STEA undertakes a defined MEPF installation scope for an agreed project value — providing a single accountable installation team from mobilisation through to final handover.',
  steps: [
    { n: 1, title: 'Mobilisation', text: 'Personnel, supervision and site establishment' },
    { n: 2, title: 'Installation', text: 'MEPF and equipment installation across defined scope' },
    { n: 3, title: 'Testing', text: 'Pre-commissioning, commissioning support and snagging' },
    { n: 4, title: 'Handover', text: 'As-built documentation support and final close-out' },
  ],
  note: 'The commercial proposal is developed from approved drawings, BOQ, specifications, programme, and clearly defined scope boundaries — with progress measured against agreed milestones or percentage completion.',
}

export const atAGlance = [
  {
    key: 'OPTION A',
    title: 'Day-Rate / Manpower Supply',
    text: 'TOP-STEA supplies agreed categories and quantities of technical personnel on a daily or monthly basis. Ideal for:',
    items: [
      'Projects requiring additional manpower',
      'Short-term programme recovery',
      'Labour augmentation',
      'Projects where the main contractor controls materials and management',
    ],
  },
  {
    key: 'OPTION B',
    title: 'Project-Based MEPF Installation',
    text: 'TOP-STEA undertakes a defined MEPF installation package for an agreed project value and programme. Ideal for:',
    items: [
      'Complete MEPF installation packages',
      'Defined floors or zones',
      'Specialist installation scopes',
      'Fast-track projects requiring a single accountable team',
    ],
  },
]

export const qa = {
  title: 'QA/QC — Built Into Every Installation',
  text: 'TOP-STEA implements project-specific QA/QC procedures to ensure all installations comply with approved drawings, project specifications, manufacturer requirements, applicable engineering standards, approved method statements, ITPs, and client requirements.',
  callout:
    'No concealed MEPF installation will be closed without the required inspection and written approval.',
  installation: [
    'Material inspection on delivery',
    'Installation and dimensional checks',
    'Workmanship inspection at each stage',
    "Builders' work coordination sign-off",
  ],
  testing: [
    'Pressure testing and hydrostatic checks',
    'Cable continuity and insulation resistance testing',
    'Equipment inspection and functional testing',
    'Snag identification and formal close-out',
  ],
}

export const hse = {
  title: 'HSE — Non-Negotiable at Every Level',
  text: 'TOP-STEA considers health, safety and environment a fundamental component of MEPF installation — not an afterthought. Our objective is to ensure that acceleration of the programme never compromises safe working practices.',
  items: [
    {
      title: 'Pre-Work Briefings',
      text: 'Site HSE induction, permit-to-work procedures, risk assessments and method statements before any work commences.',
    },
    {
      title: 'Daily Toolbox Talks',
      text: 'Task-specific safety briefings covering working at height, hot works, electrical safety, lifting and confined spaces.',
    },
    {
      title: 'PPE & Housekeeping',
      text: 'Mandatory PPE compliance, structured housekeeping standards and emergency procedure awareness for all personnel.',
    },
  ],
}

export const logistics = {
  title: 'Material & Logistics Coordination',
  text: 'Fast-track MEPF execution depends heavily on timely availability of materials. TOP-STEA coordinates proactively with the client and main contractor to ensure nothing stops installation productivity.',
  items: [
    {
      title: 'Long-Lead Items',
      text: 'Early identification and tracking of long-lead equipment and materials — aligned with the installation programme.',
    },
    {
      title: 'Site Storage & Access',
      text: 'Coordination of storage requirements, access equipment, temporary works and logistics to support parallel work fronts.',
    },
    {
      title: 'Specification Compliance',
      text: 'Where TOP-STEA is responsible for procurement, all materials are aligned with approved technical specifications and programme.',
    },
  ],
}

export const coordination = {
  title: 'Drawing & Technical Coordination',
  text: "Our technical team works alongside the client's engineering and construction teams to resolve coordination issues before they become costly rework reducing programme impact and maintaining installation quality.",
  callout:
    'Installation proceeds only from the latest approved drawings and revisions with all RFIs logged, tracked and closed before works commence.',
}

export const testingCommissioning = {
  title: 'Systematic Testing Across All MEPF Systems',
  text: 'TOP-STEA supports systematic testing and commissioning of all installed MEPF systems with full documentation maintained as part of the project quality record.',
  columns: [
    {
      title: 'Mechanical & Plumbing',
      items: [
        'Pressure testing and flushing',
        'Duct leakage checks',
        'HVAC functional testing and air balancing',
        'Refrigerant system checks',
        'Pump testing and drainage checks',
      ],
    },
    {
      title: 'Electrical & Fire Protection',
      items: [
        'Continuity and insulation resistance testing',
        'Earth resistance and phase identification',
        'DB/MDB inspection and functional testing',
        'Sprinkler/hydrant pressure and flow testing',
        'Alarm and interface testing support',
      ],
    },
  ],
}

export const reporting = {
  title: 'Reporting & Project Control',
  text: 'TOP-STEA maintains structured site records to provide clients and principal contractors with full visibility of manpower, progress, quality and commercial status for both engagement models.',
  columns: [
    {
      title: 'Daily Records',
      items: [
        'Manpower attendance report',
        'Site progress and work-front status',
        'Material and inspection request status',
        'HSE observations and snag lists',
      ],
    },
    {
      title: 'Weekly Reports',
      items: [
        'Weekly progress and productivity summary',
        'Testing and RFI/technical query log',
        'Programme status and look-ahead',
        'Commercial progress measurement',
      ],
    },
    {
      title: 'Commercial Records',
      items: [
        'Verified attendance and deployment records (day-rate)',
        'Milestone and quantity-based progress (project-based)',
        'Percentage completion certification support',
      ],
    },
  ],
}

export const benefits = {
  title: 'Why Engage TOP-STEA?',
  text: 'Engaging TOP-STEA for MEPF installation support gives clients and principal contractors immediate access to structured technical capacity without the overhead of long-term staffing commitments.',
  items: [
    {
      title: 'Rapid Mobilisation',
      text: 'Qualified MEPF teams deployed fast — supervisors first, full workforce second.',
    },
    {
      title: 'Multi-Disciplinary Capacity',
      text: 'All four MEPF disciplines under one structured team — coordinated, supervised, accountable.',
    },
    {
      title: 'Programme Flexibility',
      text: 'Scalable workforce, parallel work fronts and structured productivity monitoring keep projects on track.',
    },
    {
      title: 'Quality-Focused Execution',
      text: 'QA/QC, ITPs, and HSE protocols embedded throughout — acceleration without compromise.',
    },
  ],
}

export const cta = {
  title: "Let's Build It Together",
  text: [
    'TOP-STEA is positioned to support clients and principal contractors requiring reliable MEPF installation manpower, technical supervision, and fast-track project execution capability.',
    "We welcome the opportunity to review your project's drawings, BOQ, specifications, programme, and manpower requirements and to submit a detailed deployment plan and commercial proposal based on either the day-rate manpower model or project-based MEPF installation model.",
  ],
  steps: [
    {
      title: 'Submit Your Scope',
      text: 'Share drawings, BOQ, specifications and programme for assessment.',
    },
    {
      title: 'Request a Meeting',
      text: 'Arrange a technical review with our MEPF team to discuss your project requirements.',
    },
    {
      title: 'Receive a Proposal',
      text: 'We will submit a detailed deployment plan and competitive commercial proposal.',
    },
  ],
}

// ---------------------------------------------------------------------------
// Services are split into two categories. "Construction" holds the five MEPF
// services above (`services`); "Maintenance" holds `maintenanceServices` below.
// To add a maintenance service, copy the House Keeping entry and change the text.
// ---------------------------------------------------------------------------
const baseMaintenance = [
  {
    slug: 'house-keeping-services',
    title: 'House Keeping Services',
    image: 'housekeeping',
    short: 'Daily housekeeping, deep cleaning and hygiene services for offices, estates, hospitals and commercial sites.',
    intro: [
      'TOP-STEA provides professional housekeeping and cleaning services for offices, corporate spaces, residential estates, hospitals and commercial sites. Our focus is consistent quality, cleanliness, safety and professionalism, every single day.',
      'For apartment buildings and gated communities we maintain hygiene standards with trained staff, well-equipped teams, eco-friendly cleaning products and scheduled deep cleaning, so shared spaces always look and feel cared for.',
    ],
    highlights: [
      { title: 'Trained Manpower', text: 'Vetted, trained housekeeping staff deployed to match your site and shift pattern.' },
      { title: 'Defined Processes', text: 'Documented cleaning routines and checklists so the standard is the same every day.' },
      { title: 'Supervised Delivery', text: 'On-site supervisors inspect the work and keep your facility manager informed.' },
      { title: 'Safe, Eco-Friendly Materials', text: 'Approved cleaning materials and modern equipment, used with safety first.' },
    ],
    detailsTitle: 'Comprehensive cleaning, delivered by trained manpower',
    detailsIntro: 'Our teams combine trained manpower with defined processes to cover every area of your facility:',
    details: [
      'Daily office housekeeping and deep cleaning',
      'Floor, workstation and washroom cleaning',
      'Glass, façade and common-area maintenance',
      'Waste collection and disposal management',
      'Sanitisation and hygiene services',
    ],
    closing:
      'Supervisors, modern equipment and approved cleaning materials sit behind every shift. The result is a healthier workspace, better employee well-being and a good impression on every visitor.',
    faqs: [
      {
        q: 'What is the minimum number of housekeeping staff a client can hire?',
        a: 'Team size depends on your site area, usage and shift pattern. Tell us about your facility and we will confirm the right team size in your proposal.',
      },
      {
        q: 'Do you bring your own equipment and cleaning materials?',
        a: 'Yes. Our teams work with modern equipment and approved cleaning materials, as agreed in the scope of service.',
      },
      {
        q: 'How do I book a visit?',
        a: 'Use the Book a Visit form on this page. Our team will review your request and get back to you to arrange a site visit.',
      },
    ],
  },
]

export const maintenanceServices = [...baseMaintenance, ...moreMaintenance]

export const serviceCategories = [
  {
    slug: 'construction',
    label: 'Construction',
    to: PATHS.construction,
    image: 'construction',
    text: 'MEPF installation, construction support, manpower supply and full project execution: Mechanical, Electrical, Plumbing, Fire Protection and ELV.',
    items: services.map((s) => ({ label: s.title, to: PATHS.service(s.slug) })),
  },
  {
    slug: 'maintenance',
    label: 'Maintenance',
    to: PATHS.maintenance,
    image: 'maintenance',
    text: 'Facility upkeep that keeps buildings clean, safe and running, from housekeeping, plumbing and electrical support to security, landscaping and apartment facility management.',
    items: maintenanceServices.map((s) => ({ label: s.title, to: PATHS.maintenanceService(s.slug) })),
  },
]
