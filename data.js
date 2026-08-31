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
    text: "We represent clients in civil, commercial and other disputes before courts and tribunals, providing strategic advocacy and practical solutions."
  },
  {
    id: "conveyancing",
    title: "Conveyancing & Real Estate",
    icon: "home",
    text: "We advise clients on property transactions, land acquisition, transfers, leases, developments and other real estate matters."
  },
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    icon: "briefcase",
    text: "We provide legal support to businesses and institutions, including corporate structuring, commercial transactions, contracts and regulatory compliance."
  },
  {
    id: "employment",
    title: "Employment & Labour Law",
    icon: "users",
    text: "We advise and represent employers and employees in employment disputes, workplace matters and other labour-related issues."
  },
  {
    id: "family",
    title: "Family Law",
    icon: "family",
    text: "We provide professional and sensitive legal assistance in matters relating to marriage, divorce, children and other family-related disputes."
  },
  {
    id: "succession",
    title: "Succession & Probate",
    icon: "document",
    text: "We assist clients with estate planning, administration of estates and succession disputes."
  },
  {
    id: "debt-recovery",
    title: "Debt Recovery",
    icon: "coins",
    text: "We assist individuals and businesses in recovering outstanding debts through strategic legal enforcement."
  },
  {
    id: "ip",
    title: "Intellectual Property",
    icon: "bulb",
    text: "We advise clients on the protection and management of intellectual property and related commercial rights."
  },
  {
    id: "arbitration",
    title: "Arbitration & Alternative Dispute Resolution",
    icon: "handshake",
    text: "We help clients resolve disputes efficiently through arbitration, mediation and other alternative dispute resolution mechanisms."
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

const FIRM = {
  name: "A.A. Mudanya & Co. Advocates",
  tagline: "Trusted Legal Counsel. Practical Solutions.",
  email: "mudanyalawtech.advocates@gmail.com",
  whatsapp: "254720847047"
};
