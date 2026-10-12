export interface ExperienceItem {
  id: string;
  role: string;
  category: 'healthcare' | 'appointment' | 'email' | 'realestate';
  organizationContext: string;
  duration: string;
  summary: string;
  highlights: string[];
  toolsUsed: string[];
}

export interface SkillItem {
  id: string;
  title: string;
  shortDesc: string;
  keyResponsibilities: string[];
  iconName: string;
}

export interface ToolItem {
  name: string;
  category: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  recipient: string;
  dateOrPeriod: string;
  highlightText: string;
  details: string;
  badgeColor: string;
  category: 'Healthcare BPO' | 'Sales & Real Estate';
  imagePath?: string;
}

export const portfolioData = {
  personalInfo: {
    name: 'Allan Vincent Balasbas',
    preferredName: 'Cindy',
    title: 'US Healthcare BPO Specialist & Appointment Setter',
    secondaryTitle: 'Licensed Real Estate Sales Professional & BSIS Graduate',
    location: 'Philippines',
    workMode: 'Remote / US Shift Compatible (EST / PST / CST)',
    summary:
      "Hi, my name is Allan Vincent Balasbas (Cindy) with more than 5 years of dedicated experience in the BPO industry handling US Healthcare accounts. Specialized in medical records retrieval (MRR), high-touch appointment setting, patient benefits verification, and real estate sales.",
    quote:
      "I have many more to discuss on how I can help you with your project. Feel free to reach out.",
    metrics: [
      { label: 'BPO Experience', value: '5+ Years', sub: 'US Healthcare accounts' },
      { label: 'Top Performer', value: '256 Scheduled', sub: 'EpiSource Top Appointment Setter' },
      { label: 'Real Estate Sales', value: '₱18.6M+ TCP', sub: 'Condominium properties closed' },
      { label: 'Education', value: 'BSIS', sub: 'Bachelor in Information Systems' },
    ],
  },

  skills: [
    {
      id: 'customer-service',
      title: 'Customer Service',
      shortDesc: 'Patient-centric healthcare service delivery with empathy and rapid resolution.',
      keyResponsibilities: [
        'Handling both high-volume inbound calls and proactive outbound patient follow-ups',
        'Empathetic patient care and clear communication on complex healthcare benefits',
        'Accurate claims processing and insurance benefit verification',
        'Processing health plan insurance payments securely and compliantly',
      ],
      iconName: 'Headphones',
    },
    {
      id: 'appointment-setting',
      title: 'Appointment Setting',
      shortDesc: 'Strategic outreach to medical clinics and hospitals for chart retrieval & review.',
      keyResponsibilities: [
        'Outbound calls to hospitals, provider groups, and medical practices nationwide',
        'Coordinating Risk Adjustment Review and HEDIS Review schedules',
        'Multi-channel record requests via Fax, Email, and Secure Mail channels',
        'Comprehensive documentation in EMR (OPM) and Salesforce CRM systems',
      ],
      iconName: 'CalendarCheck',
    },
    {
      id: 'email-support',
      title: 'Email Support',
      shortDesc: 'Clear, template-driven written communication and provider follow-ups.',
      keyResponsibilities: [
        'Promptly answering patient and provider email inquiries with tailored templates',
        'Communicating patient eligibility and health plan insurance verification',
        'Systematic email follow-ups with clinics and hospitals for chart submissions',
        'Drafting clear, polite, and persuasive communication templates',
      ],
      iconName: 'Mail',
    },
    {
      id: 'real-estate-agent',
      title: 'Real Estate Agent',
      shortDesc: '2 years of proven property sales, investor proposals, and on-site trippings.',
      keyResponsibilities: [
        'Selling condominium units and rent-to-own residential properties in the Philippines',
        'Preparing and presenting customized investment proposals to prospective buyers',
        'Conducting on-site property walkthroughs and unit viewing trippings',
        'Recognized sales contributor with multi-million Peso closed transactions',
      ],
      iconName: 'Building2',
    },
  ] as SkillItem[],

  experiences: [
    {
      id: 'healthcare-cs',
      role: 'Healthcare Customer Service Specialist',
      category: 'healthcare',
      organizationContext: 'US Healthcare Accounts (BPO)',
      duration: 'More than 5 Years Total BPO Experience',
      summary:
        'Answer customer service calls promptly, ensuring patients and providers receive necessary information with empathy and accuracy. Knowledgeable customer service professional with extensive experience in the healthcare sector, dedicated to maintaining customer satisfaction and company service standards.',
      highlights: [
        'Receiving inbound calls and conducting outbound calls regarding patient health plan information',
        'Processing health insurance claims with strict adherence to healthcare protocols',
        'Explaining health plan benefits, co-pays, deductibles, and coverage details to patients',
        'Processing payments of health plan insurance and maintaining meticulous call documentation',
        'Multi-tasking across multiple software tools and patient data repositories',
      ],
      toolsUsed: ['Salesforce', 'EMR/OPM', 'Talkdesk', 'Slack', 'Gmail', 'Webex'],
    },
    {
      id: 'appointment-setter',
      role: 'Medical Appointment Setting Specialist',
      category: 'appointment',
      organizationContext: 'EpiSource & Optum MRR Campaigns',
      duration: '4 Years Dedicated Experience',
      summary:
        'Conducted outbound calls to hospitals, specialized clinics, and medical facilities to retrieve patient medical records and charts needed for Risk Adjustment Review and HEDIS Review campaigns.',
      highlights: [
        'Achieved 256 scheduled site visits from July to October 2024, earning Top Appointment Setter recognition',
        'Transmitted medical record requests via Fax, Email, and Mail to initiate chart retrieval',
        'Negotiated and confirmed scheduled appointments for chart release dates with medical records directors',
        'Managed accurate data entry and tracking inside EMR (OPM) and Salesforce',
        'Certified in OC-MRR Training under EpiSource & Optum Learning Solutions (MCK Wave 2 - 2024)',
      ],
      toolsUsed: ['Salesforce', 'EMR (OPM)', 'Talkdesk', 'Microsoft Teams', 'Dropbox', 'Zoom'],
    },
    {
      id: 'email-specialist',
      role: 'Email Support Specialist',
      category: 'email',
      organizationContext: 'Healthcare Facilities & Patient Care Outreach',
      duration: 'Ongoing BPO Scope',
      summary:
        'Managed professional written communication, responding to inquiries and creating structured email templates for patients and medical facilities.',
      highlights: [
        'Crafted clear, compliant email responses for patient insurance eligibility inquiries',
        'Maintained structured follow-up cadences with hospitals and clinics to expedite medical chart submissions',
        'Designed reusable email templates that standardized communication and reduced response lag',
        'Tracked correspondence history to ensure compliance and zero missed follow-ups',
      ],
      toolsUsed: ['Gmail', 'Salesforce', 'Slack', 'Dropbox'],
    },
    {
      id: 'real-estate-sales',
      role: 'Real Estate Sales Agent',
      category: 'realestate',
      organizationContext: 'Empire East Land Holdings Inc. (AXIS Division)',
      duration: '2 Years Experience',
      summary:
        'Specialized in selling condominium properties and rent-to-own developments in key Philippine metropolitan areas, delivering customized investment proposals and conducting client property tours.',
      highlights: [
        'Sold luxury condominium unit with Total Contract Price (TCP) of ₱9,949,350.00 (Sales Contributor Month 1)',
        'Sold luxury condominium unit with Total Contract Price (TCP) of ₱8,699,277.29 (Sales Contributor Month 9)',
        'Awarded Bronze SparQ Awardee (AXIS Division) for outstanding sales contribution in Q1 2021',
        'Conducted site trippings with prospective buyers to inspect actual model units and project locations',
        'Sent tailored financial investment proposals matching buyer budgets and preferences',
      ],
      toolsUsed: ['Canva', 'Gmail', 'Salesforce', 'Zoom'],
    },
  ] as ExperienceItem[],

  education: {
    degree: 'Bachelor of Science in Information Systems (BSIS)',
    institution: 'La Concepcion College',
    period: '2018 – 2022',
    status: 'Graduated as BSIS',
    relevance:
      'Strong academic training in enterprise database management, computer information systems, and workflow automation. This technical foundation enables rapid mastery of proprietary healthcare EMR portals, Salesforce CRM configurations, and accurate data entry operations.',
  },

  tools: [
    {
      name: 'Salesforce',
      category: 'CRM & Pipeline',
    },
    {
      name: 'Slack',
      category: 'Internal Comms',
    },
    {
      name: 'Dropbox',
      category: 'Cloud Storage',
    },
    {
      name: 'Gmail & Google Workspace',
      category: 'Email & Documents',
    },
    {
      name: 'Canva',
      category: 'Visual Design',
    },
    {
      name: 'Microsoft Teams',
      category: 'Video & Collaboration',
    },
    {
      name: 'Zoom',
      category: 'Conferencing',
    },
    {
      name: 'Cisco Webex',
      category: 'Enterprise Telephony',
    },
    {
      name: 'EMR (OPM)',
      category: 'Healthcare Software',
    },
    {
      name: 'Talkdesk',
      category: 'Cloud Contact Center',
    },
  ] as ToolItem[],

  certifications: [
    {
      id: 'cert-episource-top-setter',
      title: 'Top Appointment Setter Award',
      issuer: 'EpiSource',
      recipient: 'Cindy Balasbas',
      dateOrPeriod: 'July to October 2024',
      highlightText: '256 Scheduled Site Visits',
      details:
        'Certificate of Appreciation proudly presented for achieving 256 scheduled site visits from July to October 2024, recognized as the Top Appointment Setter for the entire campaign period.',
      badgeColor: 'amber',
      category: 'Healthcare BPO',
    },
    {
      id: 'cert-episource-optum-mrr',
      title: 'Certificate of Completion (OC-MRR Training)',
      issuer: 'EpiSource & Optum Learning Solutions',
      recipient: 'Allan Vincent Balasbas',
      dateOrPeriod: '2024 (MCK Wave 2)',
      highlightText: 'Medical Records Retrieval Certification',
      details:
        'Awarded for successfully completing the rigorous OC-MRR Training for EpiSource - MCK Wave 2-2024, certifying full competency in medical record workflows, HIPAA awareness, and retrieval protocols.',
      badgeColor: 'emerald',
      category: 'Healthcare BPO',
    },
    {
      id: 'cert-sparq-awardee',
      title: 'Bronze SparQ Awardee – AXIS Division',
      issuer: 'Empire East Land Holdings Inc.',
      recipient: 'Allan Vincent V. Balasbas',
      dateOrPeriod: 'January to March 2021',
      highlightText: 'Sales Performers Awards Recognition',
      details:
        'Certificate of Recognition awarded for outstanding sales contribution during Q1 2021 at the SPARQ Sales Performers Awards and Recognition Quarter.',
      badgeColor: 'amber',
      category: 'Sales & Real Estate',
    },
    {
      id: 'cert-scenezoned-month1',
      title: 'Top Sales Contributor (Month 1)',
      issuer: 'Empire East (Scenezone)',
      recipient: 'Allan Vincent V. Balasbas',
      dateOrPeriod: 'Month 1',
      highlightText: 'Sold 1 Unit (TCP ₱9,949,350.00)',
      details:
        'Congratulations, You Have Been Scenezoned! Recognized as Top Sales Contributor for closing a luxury condominium unit with a Total Contract Price of ₱9,949,350.00 (Month 1).',
      badgeColor: 'indigo',
      category: 'Sales & Real Estate',
    },
    {
      id: 'cert-scenezoned-month9',
      title: 'Top Sales Contributor (Month 9)',
      issuer: 'Empire East (Scenezone)',
      recipient: 'Allan Vincent V. Balasbas',
      dateOrPeriod: 'September 2020',
      highlightText: 'Sold 1 Unit (TCP ₱8,699,277.29)',
      details:
        'Congratulations, You Have Been Scenezoned! Awarded for closing an additional condominium unit with a Total Contract Price of ₱8,699,277.29.',
      badgeColor: 'indigo',
      category: 'Sales & Real Estate',
    },
  ] as CertificationItem[],

  contactInfo: {
    email: 'ccindycervantes.3s@gmail.com',
    phone: '+63 961 942 7143',
    phoneRaw: '+639619427143',
    whatsappUrl: 'https://wa.me/639619427143',
    linkedinUrl: 'https://www.linkedin.com/in/allan-vincent-balasbas-17bba2310',
    location: 'Philippines',
    availability: 'Open for Immediate Hire · Full-time / Part-time / Contract',
  },
};
