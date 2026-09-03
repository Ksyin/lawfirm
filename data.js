/* ==========================================================================
   A.A. Mudanya & Co. Advocates — site content
   Keeping content as data means the practice-area list, the footer list and
   the "practice area" dropdown/select all stay in sync from one source.
   ========================================================================== */

const PRACTICE_AREAS = [
  {
    id: "litigation",
    title: "Litigation & Dispute Resolution",
    icon: "gavel",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80",
    summary: "Representation in court and tribunal proceedings, strategic negotiation and dispute management.",
    focus: "Civil, commercial and regulatory disputes — advocacy and resolution.",
    bullets: [
      "Pleadings and court representation",
      "Commercial dispute resolution",
      "Enforcement of judgments and remedies"
    ],
    details: "Our litigation team prepares robust pleadings, manages evidence and provides practical advocacy in courts and tribunals across Kenya. We focus on cost-effective strategies and timely resolution."
  },
  {
    id: "conveyancing",
    title: "Conveyancing & Real Estate",
    icon: "home",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    summary: "Property transactions, title due diligence, transfers and lease agreements.",
    focus: "Land and property work: secure transactions and title clarity.",
    bullets: [
      "Title searches and due diligence",
      "Sale and purchase agreements",
      "Leases, transfers and registration"
    ],
    details: "We guide buyers, sellers and developers through property transactions, conducting title reviews, preparing documentation and ensuring statutory compliance to protect your interests."
  },
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    icon: "briefcase",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
    summary: "Corporate advisory, contracts, governance and commercial transactions for businesses.",
    focus: "Commercial contracts, corporate governance and regulatory compliance.",
    bullets: [
      "Company formation and structuring",
      "Commercial contracts and negotiations",
      "Regulatory and compliance advice"
    ],
    details: "We support companies at every stage — from formation and shareholder agreements to complex commercial transactions and regulatory matters — with practical, business-minded advice."
  },
  {
    id: "employment",
    title: "Employment & Labour Law",
    icon: "users",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    summary: "Advice and representation on workplace disputes, contracts and compliance.",
    focus: "Employment contracts, disciplinary matters and unfair dismissal claims.",
    bullets: [
      "Employment contracts and policies",
      "Dispute resolution and representation",
      "Workplace investigations and compliance"
    ],
    details: "We advise employers and employees on contractual rights, disciplinary procedures, redundancies and litigation, aiming to resolve workplace issues efficiently and fairly."
  },
  {
    id: "family",
    title: "Family Law",
    icon: "family",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
    summary: "Sensitive support for matrimonial disputes, custody and maintenance matters.",
    focus: "Divorce, custody, maintenance and mediation with confidentiality.",
    bullets: [
      "Divorce and separation agreements",
      "Child custody and guardianship",
      "Mediation and family settlements"
    ],
    details: "Our family law practice handles delicate matters with discretion, offering mediation where possible and robust representation when court proceedings are necessary."
  },
  {
    id: "succession",
    title: "Succession & Probate",
    icon: "document",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
    summary: "Wills, estate administration and probate to protect family interests.",
    focus: "Estate planning, probate applications and beneficiary administration.",
    bullets: [
      "Drafting wills and testamentary documents",
      "Probate and estate administration",
      "Resolving succession disputes"
    ],
    details: "We help clients plan for the future, prepare wills, and assist executors and beneficiaries with smooth estate administration and dispute resolution."
  },
  {
    id: "debt-recovery",
    title: "Debt Recovery",
    icon: "coins",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80",
    summary: "Practical recovery strategies for overdue payments and enforcement.",
    focus: "Negotiation, demand letters and legal enforcement of debts.",
    bullets: [
      "Pre-litigation recovery and negotiation",
      "Court enforcement and garnishee orders",
      "Commercial debt strategies"
    ],
    details: "We pursue owed debts pragmatically — starting with negotiation and progressing to enforcement where necessary — to recover funds while preserving commercial relationships where possible."
  },
  {
    id: "ip",
    title: "Intellectual Property",
    icon: "bulb",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    summary: "Protection and commercialization of trademarks, copyrights and designs.",
    focus: "Registration, enforcement and licensing of IP rights.",
    bullets: [
      "Trademark and copyright advice",
      "IP registration and enforcement",
      "Licensing and commercialisation"
    ],
    details: "We help creators and businesses protect their intellectual assets, register rights, and manage licensing or enforcement actions to realise commercial value."
  },
  {
    id: "arbitration",
    title: "Arbitration & Alternative Dispute Resolution",
    icon: "handshake",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    summary: "Efficient dispute resolution through arbitration and mediation processes.",
    focus: "Private dispute resolution to save time and costs compared with litigation.",
    bullets: [
      "Arbitration proceedings",
      "Mediation and facilitated settlement",
      "Advising on ADR clauses and processes"
    ],
    details: "We advise on and represent clients in arbitration and mediation, helping to secure outcomes that are confidential, enforceable and aligned to commercial objectives."
  }
];

const WHY_CHOOSE_US = [
  {
    title: "Over 7 Years of Experience",
    text: "A proven history of providing professional legal services and practical solutions.",
    icon: "experience"
  },
  {
    title: "Client-Focused Approach",
    text: "We take time to understand our clients, their concerns and their objectives.",
    icon: "clients"
  },
  {
    title: "Practical Legal Solutions",
    text: "We provide clear, strategic legal advice that is sensible and practical.",
    icon: "solutions"
  },
  {
    title: "Professionalism & Integrity",
    text: "Our practice is guided by ethical representation, diligence and excellence.",
    icon: "integrity"
  },
  {
    title: "Accessible Legal Support",
    text: "With offices in Nairobi and Oyugis, we remain accessible to clients across Kenya.",
    icon: "location"
  }
];

const OFFICES = [
  {
    name: "Nairobi Office",
    address: ["Bruce House, 4th Floor, North Wing", "Suite 401, Standard Street", "P.O. Box 17926-00100, Nairobi"],
    phones: ["+254 720 847 047", "+254 734 033 547"],
    mapQuery: "Bruce House Standard Street Nairobi"
  },
  {
    name: "Oyugis Office",
    address: ["Olando Plaza, 3rd Floor", "Next to Co-operative Bank", "Along Oyugis-Kisumu Road, Oyugis"],
    phones: ["+254 722 907 020", "+254 735 544 018"],
    mapQuery: "Olando Plaza Oyugis Kisumu Road"
  }
];

const STATS = [
  { value: "7+", label: "Years of Practice" },
  { value: "2", label: "Offices Across Kenya" },
  { value: "9", label: "Practice Areas" },
  { value: "100%", label: "Client-Focused Advice" }
];

const TESTIMONIALS = [
  {
    quote: "The team handled our commercial dispute with a level of care and clarity we hadn't experienced with previous counsel. Every step was explained before it was taken.",
    name: "Corporate Client",
    role: "Manufacturing Sector, Nairobi"
  },
  {
    quote: "Our land transfer had been stalled for months. A.A. Mudanya & Co. Advocates untangled the title issues and kept us informed at every stage.",
    name: "Private Client",
    role: "Real Estate Matter, Oyugis"
  },
  {
    quote: "Practical, responsive and easy to reach. They treated our succession matter with the sensitivity it needed.",
    name: "Family Client",
    role: "Succession & Probate"
  }
];

const TEAM = [
  {
    name: "A. A. Mudanya",
    role: "Managing Partner",
    focus: "Litigation & Dispute Resolution, Corporate & Commercial Law",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Advocate, Nairobi Office",
    role: "Senior Associate",
    focus: "Conveyancing & Real Estate, Succession & Probate",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Advocate, Oyugis Office",
    role: "Associate",
    focus: "Family Law, Employment & Labour Law",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Advocate",
    role: "Associate",
    focus: "Debt Recovery, Arbitration & ADR",
    image: "https://images.unsplash.com/photo-1573165231977-3f0e27806045?auto=format&fit=crop&w=400&q=80"
  }
];

const INSIGHTS = [
  {
    tag: "Alternative Dispute Resolution",
    title: "Mediation and Arbitration: Faster Alternatives to Litigation",
    excerpt: "Why more businesses and individuals in Kenya are turning to ADR to resolve disputes efficiently, confidentially and cost-effectively."
  },
  {
    tag: "Employment Law",
    title: "Getting Retrenchment and Termination Right",
    excerpt: "What employers need to know to manage redundancy, employee relocation and dismissal without exposure to costly claims."
  },
  {
    tag: "Data Protection",
    title: "Data Protection Compliance for Kenyan Businesses",
    excerpt: "Practical steps for compliance, breach response and reducing legal risk under Kenya's data protection regime."
  }
];

const FIRM = {
  name: "A.A. Mudanya & Co. Advocates",
  tagline: "Trusted Legal Counsel. Practical Solutions.",
  email: "mudanyalawtech.advocates@gmail.com",
  whatsapp: "254720847047",
  phone: "+254720847047"
};
