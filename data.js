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
    image: "https://images.unsplash.com/photo-1617244147299-5ef406921c35?auto=format&fit=crop&w=1400&q=80",
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
    image: "https://images.unsplash.com/photo-1724128195247-ab10e4535b53?auto=format&fit=crop&w=1400&q=80",
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
    image: "https://images.unsplash.com/photo-1573496130141-209d200cebd8?auto=format&fit=crop&w=1400&q=80",
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
    image: "https://images.unsplash.com/photo-1643818657367-491080baeece?auto=format&fit=crop&w=1400&q=80",
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
    image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1400&q=80",
    summary: "Efficient dispute resolution through arbitration and mediation processes.",
    focus: "Private dispute resolution to save time and costs compared with litigation.",
    bullets: [
      "Arbitration proceedings",
      "Mediation and facilitated settlement",
      "Advising on ADR clauses and processes"
    ],
    details: "We advise on and represent clients in arbitration and mediation, helping to secure outcomes that are confidential, enforceable and aligned to commercial objectives."
  },
  {
    id: "legal-audit-compliance",
    title: "Legal Audit & Compliance Review",
    icon: "document",
    image: "https://images.unsplash.com/photo-1724128195247-ab10e4535b53?auto=format&fit=crop&w=1400&q=80",
    summary: "Independent review of contracts, records and internal processes to identify legal risk.",
    focus: "Legal audits and compliance reviews for businesses and institutions.",
    bullets: [
      "Legal and regulatory audits of contracts and records",
      "Compliance reviews against applicable laws and policies",
      "Practical recommendations to close identified gaps"
    ],
    details: "We conduct legal audits and compliance reviews to help businesses and institutions identify legal risk in their contracts, records and internal processes, and provide clear, practical recommendations to strengthen compliance and reduce exposure."
  }
];

const WHY_CHOOSE_US = [
  {
    title: "Over 8 Years of Experience",
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
  { value: "8+", label: "Years of Practice" },
  { value: "2", label: "Offices Across Kenya" },
  { value: "10", label: "Practice Areas" },
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
    name: "Akivambo Alex Mudanya",
    role: "Lead Lawyer",
    credentials: "Advocate of the High Court of Kenya | Lead Lawyer",
    focus: "Corporate & Commercial Law, Banking & Finance, Litigation & Dispute Resolution",
    image: "Akivambo Alex Mudanya.jpeg",
    bio: [
      "Akivambo Alex Mudanya is the Lead Lawyer at A.A. Mudanya & Co. Advocates, with extensive experience in legal practice, litigation, commercial transactions and judicial administration.",
      "His practice encompasses corporate and commercial law, banking and finance, real estate, dispute resolution and a range of specialised legal services. He advises both national and multinational clients, providing practical and commercially responsive legal solutions tailored to their individual needs and objectives.",
      "Mr. Mudanya is committed to the highest standards of professionalism, integrity and ethical legal practice. His approach is founded on a strong belief in the rule of law and justice, with a focus on delivering diligent, competent and effective legal services."
    ],
    experience: [
      "Lead Lawyer — A.A. Mudanya & Co. Advocates",
      "Senior Court Administrator — Judiciary of Kenya (October 2008 – January 2019)",
      "Legal Assistant — Kalya Co. Advocates (May 2002 – September 2008)"
    ],
    education: [],
    practiceAreas: [
      {
        title: "Corporate & Commercial Law",
        description: "Advising on business establishment, corporate transactions, mergers and acquisitions, competition and consumer protection, start-ups and venture capital, and general corporate matters."
      },
      {
        title: "Banking & Finance",
        description: "Advising banks, financial institutions and corporations on financing transactions, loan documentation, project and acquisition financing, asset-backed financing, restructuring and financial disputes."
      },
      {
        title: "Real Estate",
        description: "Advising on property acquisitions and divestments, development projects, financing, joint developments, leasing and other real estate transactions."
      },
      {
        title: "Litigation & Dispute Resolution",
        description: "Representing clients in commercial, corporate, banking and financial disputes, as well as advising on mediation, arbitration, negotiation and other alternative dispute resolution mechanisms."
      },
      {
        title: "Specialised Practices",
        description: "Data protection, employment, intellectual property, FinTech, tax, regulatory matters, hospitality, environmental law, sports and entertainment."
      },
      {
        title: "General Litigation",
        description: "Representing clients before courts, tribunals and other dispute-resolution forums, with an emphasis on strategic case assessment, effective representation and practical resolution of disputes."
      }
    ],
    quote: "As a lawyer, my commitment to delivery is anchored in my unwavering belief in the rule of law, justice, and the ethical practice of my profession.",
    values: ["Integrity", "Professionalism", "Excellence", "Client Focus"]
  },
  {
    name: "Festus Kithi Mwadzidzye",
    role: "Advocate | Associate",
    credentials: "Advocate | Associate",
    focus: "Commercial & Corporate Law, Litigation, Conveyancing, Employment Law & Legal Compliance",
    image: "Festus Mwadzidzye Kithi.jpeg",
    bio: [
      "Festus Kithi Mwadzidzye is an enterprising Advocate with practical experience in litigation, commercial law, conveyancing, employment and labour relations, legal compliance and dispute resolution.",
      "His practice is particularly informed by an interest in proactive legal risk management, assisting clients to identify and address potential legal and regulatory exposure before it develops into disputes or costly litigation.",
      "He brings a hands-on approach to conducting legal audits, including reviews of contracts, employment documentation, data protection practices and internal policies.",
      "Festus also brings a commercial and entrepreneurial perspective to legal practice, having previously worked in sales consulting and brand structuring. This experience has strengthened his skills in negotiation, client engagement and developing practical, commercially sound solutions."
    ],
    experience: [
      "Litigation & Dispute Resolution",
      "Commercial & Corporate Law",
      "Conveyancing & Real Estate",
      "Employment & Labour Relations",
      "Legal Compliance & Regulatory Advisory",
      "Legal Audits (Contracts, HR Documentation, Data Protection)",
      "Sales Consulting & Brand Structuring (prior to law)"
    ],
    education: [
      "LL.B — Mount Kenya University",
      "Postgraduate Diploma in Law — Kenya School of Law"
    ],
    practiceAreas: [
      "Commercial & Corporate Law",
      "Litigation & Dispute Resolution",
      "Real Estate & Conveyancing",
      "Employment Law",
      "Legal Compliance & Regulatory Advisory",
      "Data Protection",
      "Legal Audits",
      "Tech Law",
      "Debt Recovery"
    ],
    quote: "Proactive legal risk management is always more cost-effective than reactive dispute resolution. My role is to help clients stay ahead of exposure, not just respond to it."
  },
  {
    name: "Joyce M. Ambuga",
    role: "Advocate",
    credentials: "Advocate of the High Court of Kenya",
    focus: "Family Law, Employment & Labour Law",
    image: "Joyce M. Ambuga.jpeg",
    bio: [
      "Joyce M. Ambuga is an Advocate at A.A. Mudanya & Co. Advocates."
    ],
    practiceAreas: ["Family Law", "Employment & Labour Law"]
  },
  {
    name: "Advocate",
    role: "Associate",
    focus: "Debt Recovery, Arbitration & ADR",
    image: "https://images.unsplash.com/photo-1617244147030-8bd6f9e21d1e?auto=format&fit=crop&w=400&q=80"
  }
];

const INSIGHTS = [
  {
    id: "adr",
    tag: "Alternative Dispute Resolution",
    title: "Mediation and Arbitration: Faster Alternatives to Litigation",
    excerpt: "Why more businesses and individuals in Kenya are turning to ADR to resolve disputes efficiently, confidentially and cost-effectively.",
    image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?auto=format&fit=crop&w=1400&q=80",
    body: [
      "Litigation is not always the fastest or most cost-effective route to resolving a dispute. As a firm, we favour Alternative Dispute Resolution (ADR) — mediation, arbitration, collaborative law and negotiation — as a way to reach mutually satisfactory outcomes while reducing reliance on the courts.",
      "Arbitration in particular offers confidentiality, flexibility and speed that traditional litigation often cannot match. Our team assists clients through every stage of the arbitration process, from enforcing an arbitration agreement and appointing an arbitrator to representing a client's interests throughout the proceedings.",
      "We also handle Commercial & Corporate Disputes spanning finance, technology and government sectors, whether the matter is resolved through negotiation or ultimately proceeds to court. In every case, our objective is a strategic, efficient path to the outcome our client needs."
    ]
  },
  {
    id: "employment",
    tag: "Employment Law",
    title: "Getting Retrenchment and Termination Right",
    excerpt: "What employers need to know to manage redundancy, employee relocation and dismissal without exposure to costly claims.",
    image: "https://images.unsplash.com/photo-1573496130141-209d200cebd8?auto=format&fit=crop&w=1400&q=80",
    body: [
      "Employment matters carry real legal and financial risk when procedures are not followed correctly. Our Employment & Labour Law practice covers the full range of workplace issues — from drafting staff procedures and manuals to advising on employee benefits, incentives and disciplinary processes.",
      "Retrenchment and redundancy require particular care. We guide employers through proper process to reduce exposure to unfair dismissal claims, while also representing employees who believe their rights have been infringed.",
      "We further advise on the legal implications of employee relocation and termination of employment, supporting both employers and employees in reaching outcomes that are fair, compliant and well documented."
    ]
  },
  {
    id: "data-protection",
    tag: "Data Protection",
    title: "Data Protection Compliance for Kenyan Businesses",
    excerpt: "Practical steps for compliance, breach response and reducing legal risk under Kenya's data protection regime.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    body: [
      "Data protection now touches nearly every business, regardless of sector. Our advisory work spans the entire data lifecycle, drawing on close collaboration with clients across industries and a working knowledge of global data protection standards.",
      "We assist clients with compliance reviews, data breach response, and the practical steps needed to reduce legal exposure — including internal policies, contractual safeguards and staff training.",
      "Where matters escalate, we support clients through legal action, enforcement proceedings and regulatory investigations, aiming for pragmatic outcomes that protect both the business and the individuals whose data it holds."
    ]
  }
];

const FIRM = {
  name: "A.A. Mudanya & Co. Advocates",
  tagline: "Trusted Legal Counsel. Practical Solutions.",
  email: "mudanyalawtech.advocates@gmail.com",
  whatsapp: "254720847047",
  phone: "+254720847047"
};
