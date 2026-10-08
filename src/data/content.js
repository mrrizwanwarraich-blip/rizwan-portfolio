// All site content lives here. Edit this file to update the site —
// no component changes needed. Image fields accept a URL or a path in /public
// (e.g. '/images/portrait.jpg'); leave empty ('') to show the neutral placeholder.
// Project and event images are stock photos for now; replace with real ones.

const unsplash = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const profile = {
  name: 'Muhammad Rizwan Javed',
  shortName: 'Rizwan Javed',
  initials: 'RJ',
  role: 'Administration & Operations Manager',
  location: 'Riyadh, Saudi Arabia',
  status: 'Admin Manager at LCC A-TechM',
  headline: 'Muhammad Rizwan Javed',
  intro:
    'Administration and operations manager with 11+ years in telecommunications. I oversee operations, optimise resources and implement efficient systems, delivering projects on time and within budget.',
  portrait: '/images/portrait.jpg',
  heroImage: unsplash('1497366216548-37526070297c', 2400),
  cv: '/Muhammad_Rizwan_Javed_CV.pdf',
}

export const stats = [
  { value: '11', suffix: '+', label: 'Years of experience' },
  { value: '20', suffix: '+', label: 'Projects delivered' },
  { value: '3', suffix: '', label: 'Leadership roles held' },
  { value: '4', suffix: '', label: 'Languages spoken' },
]

// Section headings and intros, in page order.
export const sections = {
  about: {
    eyebrow: 'About',
    title: 'Efficient systems. Productive teams.',
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Eleven years at LCC A-TechM.',
    lead: 'Three roles at one company: EHS Lead from 2015, Project Manager from 2017 and Admin Manager since 2020.',
  },
  projects: {
    eyebrow: 'Projects',
    title: '20+ projects. On time and within budget.',
    lead: 'Telecom project delivery for Huawei, and the administration, operations and safety work behind it.',
  },
  events: {
    eyebrow: 'Events',
    title: 'Awards and recognition.',
    lead: 'Recognised by Huawei and LCC A-TechM for project delivery, safety leadership and performance.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Get in touch.',
    lead: 'For roles, projects or collaboration in administration and operations, I’d be glad to hear from you.',
  },
}

export const about = {
  paragraphs: [
    'I oversee operations, optimise resources and implement efficient systems that raise productivity across the organisation.',
    'I joined LCC A-TechM in Riyadh in 2015 as EHS Lead, moved up to Project Manager in 2017 and have been Admin Manager since 2020. I coordinate cross-functional teams, manage timelines and budgets, and work closely with stakeholders, vendors and clients to reach strategic objectives in the telecom industry.',
    'My work has earned multiple project completion awards and a Best EHS Lead award from Huawei, as well as multiple Best Employee of the Year awards from LCC A-TechM.',
  ],
  competencies: [
    'Administration Management',
    'Operations Management',
    'Project Management',
    'Planning & Execution',
    'Service Delivery',
    'Budgeting & Cost Control',
    'Vendor & Contract Management',
    'Facilities Management',
    'Policy & Procedures',
    'Logistics Management',
    'Risk Management',
    'EHS Management',
    'Records & Document Control',
    'Stakeholder Management',
    'Team Leadership',
  ],
  education: [
    { title: 'Bachelor of Commerce (B.Com)', place: 'University of the Punjab', year: '2012' },
    { title: 'Intermediate', place: 'BISE Faisalabad', year: '2010' },
    { title: 'Diploma in CAD', place: 'Technical Board, Faisalabad', year: '' },
  ],
  certifications: [
    { title: 'IOSH Certification (EHS)', place: 'Shields Limited, Saudi Arabia', year: '' },
  ],
  languages: ['English', 'Arabic', 'Urdu', 'Punjabi'],
}

export const experience = [
  {
    role: 'Admin Manager',
    company: 'LCC A-TechM',
    location: 'Riyadh',
    period: 'Nov 2020 — Present',
    summary:
      'Lead all office administration and day-to-day operations, working closely with senior management on strategy and cross-department coordination.',
    highlights: [
      'Direct end-to-end office administration, including facilities maintenance, supplies, equipment and space utilisation.',
      'Lead and mentor the administrative team, setting clear priorities and fostering a culture of accountability.',
      'Develop and control administrative budgets, identifying cost-saving opportunities and enforcing disciplined expense management.',
      'Formulate and implement policies, SOPs and procedures that strengthen compliance and standardise workflows.',
      'Negotiate and administer vendor contracts, monitoring performance to ensure quality, cost-effective service delivery.',
      'Oversee facility security, health and safety, maintaining a safe and compliant workplace.',
    ],
  },
  {
    role: 'Project Manager',
    company: 'LCC A-TechM',
    location: 'Riyadh',
    period: 'Nov 2017 — Oct 2020',
    summary:
      'Planned and delivered telecom projects for Huawei, from initiation to close-out, on schedule and within budget.',
    highlights: [
      'Spearheaded the planning, execution and close-out of telecom projects within approved budgets.',
      'Served as primary point of contact for clients, vendors and internal teams, keeping scope and objectives aligned.',
      'Allocated and optimised manpower, equipment and budget across concurrent projects.',
      'Identified and mitigated technical, regulatory and market risks through structured risk management.',
      'Tracked milestones and KPIs, reported progress to stakeholders and drove corrective actions.',
      'Earned multiple project completion awards from Huawei.',
    ],
  },
  {
    role: 'EHS Lead',
    company: 'LCC A-TechM',
    location: 'Riyadh',
    period: 'Jun 2015 — Oct 2017',
    summary:
      'Led environment, health and safety across workplaces and telecom sites.',
    highlights: [
      'Conducted hazard identification and risk assessments, implementing effective control measures.',
      'Ensured full compliance with EHS regulations and client safety standards.',
      'Developed and implemented emergency response plans for accidents, incidents and natural disasters.',
      'Designed and delivered safety training for employees and field teams.',
      'Led incident investigations with root cause analysis and corrective and preventive actions.',
      'Recognised with the Best EHS Lead award from Huawei.',
    ],
  },
]

export const projects = [
  {
    title: 'Telecom Project Delivery for Huawei',
    category: 'Project Delivery',
    year: '2017 — 2020',
    image: unsplash('1516044734145-07ca8eef8731'),
    summary:
      'Planned and delivered telecom projects for Huawei from initiation to close-out, managing teams, vendors and budgets.',
    outcome: 'Multiple Huawei project completion awards',
    details: [
      'Owned schedules, budgets and resource plans across concurrent projects.',
      'Coordinated clients, vendors, field teams and internal departments.',
      'Tracked milestones and KPIs and reported progress to stakeholders.',
    ],
  },
  {
    title: 'Administrative Policies & SOPs',
    category: 'Administration',
    year: '2020 — Present',
    image: unsplash('1454165804606-c3d57bc86b40'),
    summary:
      'Built the administrative policies and standard procedures that the organisation runs on.',
    outcome: 'Standardised, compliant workflows',
    details: [
      'Wrote and rolled out policies covering office operations, supplies and equipment.',
      'Aligned procedures with company and regulatory requirements.',
      'Introduced clear ownership for tasks across the administrative team.',
    ],
  },
  {
    title: 'Vendor & Contract Management',
    category: 'Operations',
    year: '2020 — Present',
    image: unsplash('1600880292203-757bb62b4baf'),
    summary:
      'Negotiate and manage contracts with service providers, making sure services are delivered as agreed.',
    outcome: 'Cost-effective, reliable services',
    details: [
      'Negotiated terms and pricing with vendors and service providers.',
      'Monitored service performance against agreed standards.',
      'Resolved service issues quickly to keep operations running.',
    ],
  },
  {
    title: 'Administrative Budgeting & Cost Control',
    category: 'Operations',
    year: '2020 — Present',
    image: unsplash('1460925895917-afdab827c52f'),
    summary:
      'Plan and control budgets for all administrative functions.',
    outcome: 'Disciplined expense management',
    details: [
      'Prepared annual budgets for administrative functions.',
      'Monitored spending and identified cost-saving opportunities.',
    ],
  },
  {
    title: 'EHS Compliance Programme',
    category: 'EHS',
    year: '2015 — 2017',
    image: unsplash('1581092160562-40aa08e78837'),
    summary:
      'Led workplace safety across offices and telecom sites, from risk assessment to training and investigations.',
    outcome: 'Best EHS Lead award from Huawei',
    details: [
      'Ran hazard identification and risk assessments across sites.',
      'Delivered safety training for employees and field teams.',
      'Investigated incidents and drove corrective and preventive actions.',
    ],
  },
  {
    title: 'Emergency Response Planning',
    category: 'EHS',
    year: '2015 — 2017',
    image: unsplash('1504307651254-35680f356dfd'),
    summary:
      'Developed and implemented emergency response plans for accidents, incidents and natural disasters.',
    outcome: 'Prepared, trained teams',
    details: [
      'Defined response procedures, roles and escalation paths.',
      'Trained staff on emergency procedures and evacuation.',
    ],
  },
]

// Events: awards and recognition for now. Add real events (conferences,
// trainings, company events) here when available.
export const events = [
  {
    title: 'Project Completion Awards',
    type: 'Award',
    date: 'Huawei',
    location: 'Multiple awards',
    image: unsplash('1540575467063-178a50c2df87'),
    summary: 'Recognised by Huawei with multiple awards for successful, high-quality project delivery.',
  },
  {
    title: 'Best EHS Lead',
    type: 'Award',
    date: 'Huawei',
    location: 'Riyadh',
    image: unsplash('1505373877841-8d25f7d46678'),
    summary: 'Awarded by Huawei for outstanding safety leadership as EHS Lead.',
  },
  {
    title: 'Best Employee of the Year',
    type: 'Award',
    date: 'LCC A-TechM',
    location: 'Multiple awards',
    image: unsplash('1552664730-d307ca884978'),
    summary: 'Named Best Employee of the Year by LCC A-TechM on multiple occasions.',
  },
  {
    title: 'IOSH Certification',
    type: 'Certification',
    date: 'Shields Limited',
    location: 'Saudi Arabia',
    image: unsplash('1511578314322-379afb476865'),
    summary: 'Certified in environment, health and safety management through IOSH.',
  },
]

// Add real testimonials here; the section stays hidden while this is empty.
export const testimonials = []

export const contact = {
  email: 'rixwanali@ymail.com',
  phone: '+966 59 425 7907',
  location: 'Riyadh, Saudi Arabia',
  linkedin: '', // add LinkedIn URL when available
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' },
]
