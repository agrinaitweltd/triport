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
    role: "Strategic Partner",
    qualifications: "Studying Information Technology and Business Administration, City of London Academy Sixth Form",
    image: "/team-oliver.png",
    bio: `Oliver Alinaitwe is a Strategic Partner at Triport Agro International Limited and the founder of <a href="https://www.axisagro.co.uk" target="_blank" rel="noopener" class="team-modal-link">Axis Agro International Limited</a>, a UK-based import and export company focused on connecting quality agricultural products with reliable international markets.

Through Axis Agro International Limited, Oliver supports Triport Agro's international partnerships, buyer relationships, and market access, helping strengthen the company's presence in the UK and wider global trade network.`,
    responsibilities: [
      "Builds strategic partnerships with buyers, importers, and trade partners",
      "Supports UK market access and international export opportunities",
      "Connects Triport Agro with commercial networks through Axis Agro International Limited"
    ],
    quote: "Strategic Partner supporting Triport Agro's international trade relationships and market growth through Axis Agro International Limited."
  }
];
