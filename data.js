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
    text: "We represent clients in civil, commercial and other disputes before courts and tribunals, providing strategic advocacy and practical solutions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80&person=black",
    summary: "We provide strategic advocacy and practical legal representation for individuals, businesses, and institutions facing disputes before Kenyan courts and tribunals.",
    focus: "Strategic case preparation, court advocacy, negotiations, and risk-based dispute management.",
    bullets: [
      "Civil, commercial and contractual disputes",
      "Court representation and pleadings",
      "Negotiation, settlement and enforcement strategies"
    ],
    details: "Our litigation team works closely with clients to assess the merits of each matter, manage deadlines, and pursue effective outcomes while keeping litigation practical and cost-aware."
  },
  {
    id: "conveyancing",
    title: "Conveyancing & Real Estate",
    icon: "home",
    text: "We advise clients on property transactions, land acquisition, transfers, leases, developments and other real estate matters.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary: "From land purchase to lease negotiation and title due diligence, we help clients complete transactions with confidence and clarity.",
    focus: "Secure property transactions, title review, documentation and development support.",
    bullets: [
      "Sale, purchase and transfer of property",
      "Lease and tenancy documentation",
      "Title review and due diligence support"
    ],
    details: "We guide clients through each stage of the transaction, minimising legal risk and helping them protect their interests in land and property matters."
  },
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    icon: "briefcase",
    text: "We provide legal support to businesses and institutions, including corporate structuring, commercial transactions, contracts and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary: "We support businesses with the legal frameworks they need to operate, grow and protect their commercial interests.",
    focus: "Corporate governance, contracts, risk review and business advisory support.",
    bullets: [
      "Contract review and drafting",
      "Corporate structuring and governance",
      "Commercial transactions and compliance"
    ],
    details: "Our commercial law advice is practical and business-focused, helping founders, SMEs and institutions make well-informed legal decisions."
  },
  {
    id: "employment",
    title: "Employment & Labour Law",
    icon: "users",
    text: "We advise and represent employers and employees in employment disputes, workplace matters and other labour-related issues.",
    image: "https://images.unsplash.com/photo-1491633811361-09e6fc87dfa1?auto=format&fit=crop&w=1200&q=80",
    summary: "We advise employers and employees on workplace rights, disputes and compliance with labour law requirements.",
    focus: "Employment contracts, disciplinary processes, terminations and workplace dispute resolution.",
    bullets: [
      "Employment contracts and policies",
      "Workplace disputes and grievances",
      "Termination, redundancy and labour compliance"
    ],
    details: "We help clients manage sensitive employment issues carefully, with a focus on fairness, compliance and sustainable business outcomes."
  },
  {
    id: "family",
    title: "Family Law",
    icon: "family",
    text: "We provide professional and sensitive legal assistance in matters relating to marriage, divorce, children and other family-related disputes.",
    image: "https://images.unsplash.com/photo-1511631579d61-8e47d6f6a97d?auto=format&fit=crop&w=1200&q=80",
    summary: "We offer compassionate and practical legal support for family matters that affect wellbeing, children and long-term security.",
    focus: "Divorce, child custody, maintenance and family mediation support.",
    bullets: [
      "Marriage and divorce matters",
      "Children and custody arrangements",
      "Maintenance and family disputes"
    ],
    details: "We approach family matters with discretion and clarity, guiding clients toward sensible solutions while protecting the best interests of affected parties."
  },
  {
    id: "succession",
    title: "Succession & Probate",
    icon: "document",
    text: "We assist clients with estate planning, administration of estates and succession disputes.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
    summary: "We help families and executors navigate estate administration, inheritance issues and succession planning with confidence.",
    focus: "Probate, estate administration and inheritance dispute resolution.",
    bullets: [
      "Will drafting and estate planning",
      "Probate and administration of estates",
      "Inheritance and succession dispute support"
    ],
    details: "Our succession practice focuses on safeguarding family interests, reducing uncertainty, and supporting orderly administration of estates."
  },
  {
    id: "debt-recovery",
    title: "Debt Recovery",
    icon: "coins",
    text: "We assist individuals and businesses in recovering outstanding debts through strategic legal enforcement.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary: "We support creditors in recovering outstanding amounts efficiently, professionally and in line with the law.",
    focus: "Debt claims, demand notices, enforcement and negotiations.",
    bullets: [
      "Demand letters and recovery strategy",
      "Claim preparation and negotiations",
      "Enforcement and litigation support"
    ],
    details: "We build effective recovery strategies that balance speed, fairness and enforceability so clients can protect their cash flow and commercial interests."
  },
  {
    id: "ip",
    title: "Intellectual Property",
    icon: "bulb",
    text: "We advise clients on the protection and management of intellectual property and related commercial rights.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    summary: "We guide creators, innovators and businesses in protecting and commercialising their intellectual property assets.",
    focus: "Brand, invention and creative asset protection strategies.",
    bullets: [
      "Trademark and brand protection",
      "IP review and filing support",
      "Commercial licensing and enforcement"
    ],
    details: "Our approach helps clients safeguard their ideas, brand value and proprietary innovations while managing commercial risk."
  },
  {
    id: "arbitration",
    title: "Arbitration & Alternative Dispute Resolution",
    icon: "handshake",
    text: "We help clients resolve disputes efficiently through arbitration, mediation and other alternative dispute resolution mechanisms.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    summary: "We help clients resolve commercial and civil disputes through efficient, private and practical resolution channels.",
    focus: "Arbitration, mediation and negotiated dispute resolution strategies.",
    bullets: [
      "Arbitration and mediation support",
      "Negotiated settlements and ADR planning",
      "Efficient dispute management"
    ],
    details: "We work to resolve disputes quickly and cost-effectively while preserving business relationships wherever possible."
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
    focus: "Litigation & Dispute Resolution, Corporate & Commercial Law"
  },
  {
    name: "Advocate, Nairobi Office",
    role: "Senior Associate",
    focus: "Conveyancing & Real Estate, Succession & Probate"
  },
  {
    name: "Advocate, Oyugis Office",
    role: "Associate",
    focus: "Family Law, Employment & Labour Law"
  },
  {
    name: "Advocate",
    role: "Associate",
    focus: "Debt Recovery, Arbitration & ADR"
  }
];

const INSIGHTS = [
  {
    tag: "Real Estate",
    title: "What to Check Before Signing a Land Sale Agreement in Kenya",
    excerpt: "Due diligence steps every buyer should take before committing to a property transaction."
  },
  {
    tag: "Employment Law",
    title: "Understanding Your Rights Under the Employment Act",
    excerpt: "A brief guide to termination notices, redundancy and dispute resolution for employees and employers."
  },
  {
    tag: "Succession",
    title: "Why Every Family Should Have a Will",
    excerpt: "How proper estate planning can prevent lengthy succession disputes among beneficiaries."
  }
];

const FIRM = {
  name: "A.A. Mudanya & Co. Advocates",
  tagline: "Trusted Legal Counsel. Practical Solutions.",
  email: "mudanyalawtech.advocates@gmail.com",
  whatsapp: "254720847047"
};
