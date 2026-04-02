export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  qualifications: string;
  image: string;
  bio: string;
  responsibilities: string[];
  quote: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "micah",
    name: "Micah Bamutura",
    role: "Managing Director & Founder",
    qualifications: "B. Economics and Management, Uganda Christian University",
    image: "/team-micah.png",
    bio: `Micah Bamutura is the visionary founder of Triport Agro International Limited, bringing deep expertise in economics and agricultural trade. He leads the company's strategy to connect Ugandan farmers with premium international markets, ensuring sustainable growth and fair trade practices.

Under his leadership, Triport Agro has expanded its export footprint across Europe, the Middle East, and Asia, building trusted partnerships with buyers and farming communities alike.`,
    responsibilities: [
      "Defines and drives the overall company vision, mission, and long-term strategy",
      "Oversees all export operations, trade partnerships, and market expansion",
      "Builds and maintains relationships with international buyers and trade bodies"
    ],
    quote: "Managing Director accountable for the strategic direction, growth, and operational excellence of Triport Agro International Limited."
  },
  {
    slug: "kaboyo",
    name: "Ronald Kaboyo Hamfrey",
    role: "Sales Team Lead",
    qualifications: "B. Social Work and Social Administration, Uganda Christian University",
    image: "/team-kaboyo.png",
    bio: `Ronald Kaboyo Hamfrey leads the sales operations at Triport Agro, leveraging his background in social work and administration to build strong, people-centred client relationships. His approach combines market insight with community engagement to drive consistent revenue growth.

He coordinates the sales team's efforts across multiple product lines and export destinations, ensuring targets are met while maintaining the company's commitment to quality service.`,
    responsibilities: [
      "Leads the sales team to achieve quarterly and annual revenue targets",
      "Develops and manages client relationships across export markets",
      "Coordinates product pricing, quotations, and order fulfilment processes"
    ],
    quote: "Sales Team Lead responsible for driving revenue growth and building lasting client partnerships across international markets."
  },
  {
    slug: "matthew",
    name: "Matthew Atuhairwe",
    role: "Operations Manager",
    qualifications: "B.Agricultural Studies",
    image: "/team-matthew.png",
    bio: `Matthew Atuhairwe manages the full operations pipeline at Triport Agro, from farm-level sourcing through to export logistics. His agricultural studies background gives him a deep understanding of produce quality, seasonal cycles, and supply chain management.

He ensures that every shipment meets international standards by overseeing quality control, packaging, documentation, and cold chain logistics.`,
    responsibilities: [
      "Manages end-to-end export operations including sourcing, quality control, and logistics",
      "Coordinates with farming partners to ensure consistent supply and quality standards",
      "Oversees packaging, documentation, and compliance for international shipments"
    ],
    quote: "Operations Manager accountable for ensuring seamless product flow from Ugandan farms to international buyers with full quality assurance."
  },
  {
    slug: "mershack",
    name: "Manyakozu Mershack Javan",
    role: "Business Development Officer",
    qualifications: "BA in Development Economics, Makerere University Kampala",
    image: "/team-mershack.png",
    bio: `Manyakozu Mershack Javan drives business development initiatives at Triport Agro, identifying new market opportunities and strategic partnerships. His background in development economics provides a strong analytical foundation for evaluating market trends and commercial viability.

He works closely with the leadership team to explore new export destinations, product diversification, and partnership models that support sustainable business growth.`,
    responsibilities: [
      "Identifies and evaluates new market opportunities and trade partnerships",
      "Conducts market research and competitive analysis to inform strategic decisions",
      "Develops proposals and business cases for new product lines and export routes"
    ],
    quote: "Business Development Officer responsible for expanding Triport Agro's market reach and identifying strategic growth opportunities."
  },
  {
    slug: "oliver",
    name: "Oliver Alinaitwe",
    role: "Chief Information Officer (CIO)",
    qualifications: "Studying Information Technology and Business Administration, City of London Academy Sixth Form",
    image: "/team-oliver.png",
    bio: `Oliver Alinaitwe oversees all technology and information systems at Triport Agro, ensuring the company's digital infrastructure supports its growing international operations. Currently advancing his studies in IT and Business Administration, he brings a forward-thinking approach to digital transformation.

Beyond his role at Triport Agro, Oliver is the Founder and Managing Director of <a href="https://www.kavotech.uk" target="_blank" rel="noopener" class="team-modal-link">Kavo Technologies</a> — the company behind the design, development, and digital systems powering Triport Agro's online presence and internal platforms. Kavo Technologies specialises in building modern websites, brand identities, and business systems for growing organisations.

He is responsible for the company's online presence, internal systems, data management, and technology strategy to keep Triport Agro competitive in the modern agricultural export landscape.`,
    responsibilities: [
      "Manages the company's technology infrastructure, website, and digital platforms",
      "Implements systems for order tracking, data management, and operational efficiency",
      "Drives digital strategy and innovation to support business growth"
    ],
    quote: "Chief Information Officer accountable for technology strategy, digital infrastructure, and innovation at Triport Agro International Limited."
  }
];
