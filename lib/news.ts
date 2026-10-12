export interface Author {
  name: string;
  title: string;
  avatar: string;
  bio?: string;
  twitter?: string;
}

export interface ArticleContentBlock {
  type: "paragraph" | "heading2" | "heading3" | "quote" | "image" | "takeaways" | "list";
  text?: string;
  quote?: string;
  author?: string;
  source?: string;
  url?: string;
  caption?: string;
  credit?: string;
  items?: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  subheadline?: string;
  category: string;
  categorySlug: string;
  author: Author;
  image: string;
  imageCaption: string;
  imageCredit: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  featured?: boolean;
  hero?: boolean;
  leadSecondary?: boolean;
  breaking?: boolean;
  investigation?: boolean;
  mostReadRank?: number;
  trendingRank?: number;
  content: ArticleContentBlock[];
  tags: string[];
}

export interface CategoryInfo {
  name: string;
  slug: string;
  description: string;
  subcategories: string[];
}

export const CATEGORIES: CategoryInfo[] = [
  {
    name: "U.S. News",
    slug: "us-news",
    description: "In-depth national reporting, federal policy, domestic affairs, and pivotal events shaping the American republic.",
    subcategories: ["National Affairs", "Immigration", "Federal Courts", "Education", "Infrastructure"]
  },
  {
    name: "Politics",
    slug: "politics",
    description: "Rigorous nonpartisan coverage of Congress, the Executive Branch, elections, and national policy debates.",
    subcategories: ["Congress", "White House", "Supreme Court", "Campaigns", "Elections"]
  },
  {
    name: "World",
    slug: "world",
    description: "Global affairs, foreign policy, geopolitical shifts, and international diplomatic reporting.",
    subcategories: ["Europe", "Asia-Pacific", "Middle East", "Americas", "Global Treaties"]
  },
  {
    name: "Business",
    slug: "business",
    description: "Corporate strategy, industrial transformations, commerce, macroeconomic trends, and labor developments.",
    subcategories: ["Corporate Governance", "Economy", "Energy", "Retail", "Labor"]
  },
  {
    name: "Markets",
    slug: "markets",
    description: "Real-time market intelligence, Federal Reserve analysis, fixed income, equities, commodities, and currencies.",
    subcategories: ["Equities", "Bonds", "Central Banks", "Commodities", "Currencies"]
  },
  {
    name: "Technology",
    slug: "technology",
    description: "Artificial intelligence governance, semiconductors, cybersecurity, antitrust, and digital infrastructure.",
    subcategories: ["Artificial Intelligence", "Cybersecurity", "Antitrust", "Semiconductors", "Startups"]
  },
  {
    name: "Culture",
    slug: "culture",
    description: "Literary critique, fine arts, architectural heritage, journalism, cinema, and societal discourse.",
    subcategories: ["Books", "Fine Art", "Architecture", "Criticism", "Film & Theatre"]
  },
  {
    name: "Sports",
    slug: "sports",
    description: "National athletic coverage, collegiate athletics governance, analytics, franchises, and Olympic competition.",
    subcategories: ["Baseball", "Football", "Basketball", "Olympics", "Sports Law"]
  },
  {
    name: "Health",
    slug: "health",
    description: "Public health research, medical ethics, pharmaceuticals, healthcare economics, and longevity science.",
    subcategories: ["Medical Research", "Public Health", "Biopharma", "Health Economics"]
  },
  {
    name: "Investigations",
    slug: "investigations",
    description: "Deep investigative reporting, financial audits, public accountability, and constitutional integrity.",
    subcategories: ["Special Audits", "Government Oversight", "Corporate Misconduct", "Civil Rights"]
  }
];

export const MOCK_ARTICLES: NewsArticle[] = [
  {
    id: "lead-hero-1",
    title: "Federal Reserve Signals Prolonged Equilibrium as Core Inflation Meets Target",
    slug: "federal-reserve-signals-equilibrium-inflation-target",
    subheadline: "Chairman notes steady labor markets and moderating wage pressures will permit monetary stability through upcoming quarters.",
    excerpt: "In a landmark address before the Economic Club of New York, Federal Reserve leadership indicated benchmark rates will remain steady as core price indicators align with the long-term two percent target.",
    category: "Markets",
    categorySlug: "markets",
    author: {
      name: "Arthur M. Vance",
      title: "Chief Economics Correspondent",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      bio: "Arthur M. Vance has covered the Federal Reserve and macroeconomic policy for over two decades. Formerly senior economics editor at the New York Bureau."
    },
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1600",
    imageCaption: "The Federal Reserve Board of Governors neoclassical portico on Constitution Avenue in Washington, D.C.",
    imageCredit: "Library of Congress / National Architecture Archive",
    publishedAt: "2026-10-07T09:15:00Z",
    updatedAt: "2026-10-07T11:45:00Z",
    readTime: "6 min read",
    hero: true,
    featured: true,
    breaking: false,
    mostReadRank: 1,
    tags: ["Federal Reserve", "Interest Rates", "U.S. Economy", "Treasuries", "Central Banking"],
    content: [
      {
        type: "paragraph",
        text: "WASHINGTON — Federal Reserve officials delivered their clearest signal yet that the United States economy has reached a durable equilibrium, concluding an unprecedented three-year campaign against generational inflationary pressures. Speaking before a capacity auditorium of economists and institutional investors, the central bank confirmed that benchmark borrowing costs will remain calibrated to preserve sustained expansion without reheating consumer prices."
      },
      {
        type: "takeaways",
        items: [
          "Core PCE inflation measured at 2.08% annualized, the closest reading to the target since late 2020.",
          "Federal Open Market Committee projects maintaining the federal funds rate band between 3.75% and 4.00%.",
          "Yields on the benchmark 10-year Treasury note stabilized near 3.82% following the policy briefing.",
          "Capital spending by domestic manufacturers posted a modest quarterly rebound of 1.4%."
        ]
      },
      {
        type: "paragraph",
        text: "The remarks capped months of delicate deliberation inside the Marriner S. Eccles Building. Economists had previously warned that sustained higher borrowing costs might trigger an abrupt contraction in domestic hiring. Instead, nonfarm payroll gains have moderated to an orderly 145,000 monthly pace, dampening nominal wage inflation while safeguarding consumer purchasing power."
      },
      {
        type: "quote",
        quote: "Our objective was never to induce an artificial contraction, but to allow productive capacity and aggregate demand to re-converge. The data confirms we have arrived at that baseline.",
        author: "Jerome Powell",
        source: "Transcript of Prepared Remarks, New York"
      },
      {
        type: "heading2",
        text: "Treasury Markets and Institutional Consensus"
      },
      {
        type: "paragraph",
        text: "Sovereign bond desks in New York and London reacted with immediate composure. The 10-year Treasury yield, an anchor for domestic mortgages and commercial credit lines, compressed by four basis points to finish at 3.82 percent. Major equity indices recorded measured advances, led by industrial capital goods and regional banking institutions that have weathered the deposit-cost fluctuations of recent cycles."
      },
      {
        type: "paragraph",
        text: "Private sector economists noted that while real borrowing expenses remain positive across credit grades, corporations have successfully extended maturities. High-grade corporate debt issuance has proceeded smoothly, allowing heavy manufacturing and transport firms to refinance older obligations without precipitous spikes in interest service burdens."
      },
      {
        type: "heading2",
        text: "The Path Forward for Fiscal Considerations"
      },
      {
        type: "paragraph",
        text: "Despite the stabilization of monetary indicators, fiscal analysts caution that the federal budget deficit continues to present structural headwinds. The Congressional Budget Office estimates net interest expenditures will remain among the fastest-growing obligations of the federal government through the end of the decade, requiring Capitol Hill to reconcile divergent tax and expenditure priorities."
      },
      {
        type: "paragraph",
        text: "For now, however, the central bank appears content to maintain its vigil from a position of relative calm. Policy makers underscored that future adjustments will remain data-dependent, governed by incoming employment registries and international supply chain stability rather than predetermined timetables."
      }
    ]
  },
  {
    id: "sec-story-1",
    title: "Senate Reaches Bipartisan Framework on National Grid Modernization",
    slug: "senate-reaches-bipartisan-framework-grid-modernization",
    subheadline: "Five-year agreement allocates $48 billion toward interstate transmission lines and high-voltage transformer reserves.",
    excerpt: "Leaders of the Senate Energy and Natural Resources Committee announced a compromise measure designed to accelerate federal permitting for high-capacity electrical transmission corridors.",
    category: "Politics",
    categorySlug: "politics",
    author: {
      name: "Eleanor Hayes",
      title: "Senior Congressional Reporter",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=900",
    imageCaption: "Power transmission pylons traversing western Pennsylvania during sunset.",
    imageCredit: "The Daily Standard Archive",
    publishedAt: "2026-10-07T08:30:00Z",
    readTime: "5 min read",
    leadSecondary: true,
    tags: ["Senate", "Infrastructure", "Energy", "Permitting", "Congress"],
    content: [
      {
        type: "paragraph",
        text: "CAPITOL HILL — In a rare demonstration of cross-aisle cooperation, senior members of the Senate Energy Committee released text for the National Transmission and Reliability Act of 2026. The compromise measure represents the most consequential legislative overhaul of interstate electrical infrastructure since the Energy Policy Act of 2005."
      },
      {
        type: "paragraph",
        text: "The proposal establishes streamlined judicial review timelines for regional transmission planning authorities while allocating $48 billion in direct loan guarantees for ultra-high-voltage direct-current (HVDC) power corridors connecting renewable energy zones to urban manufacturing hubs."
      },
      {
        type: "quote",
        quote: "Reliable power is not a partisan preference; it is the fundamental prerequisite of 21st-century American industrial sovereignty.",
        author: "Senator Martin Vance (R-WV)",
        source: "Committee Press Conference"
      }
    ]
  },
  {
    id: "sec-story-2",
    title: "Supreme Court Hears Oral Arguments on Maritime Environmental Preemption",
    slug: "supreme-court-hears-arguments-maritime-preemption",
    subheadline: "Case tests whether coastal states retain constitutional standing to regulate commercial vessel emissions beyond territorial waters.",
    excerpt: "The high court convened this morning to consider a dispute pitting port-state air quality regulations against longstanding federal maritime commerce supremacy.",
    category: "U.S. News",
    categorySlug: "us-news",
    author: {
      name: "Julian Sterling",
      title: "Supreme Court Correspondent",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=900",
    imageCaption: "The West Portico of the United States Supreme Court building in Washington, D.C.",
    imageCredit: "The Daily Standard / Julian Sterling",
    publishedAt: "2026-10-07T07:45:00Z",
    readTime: "4 min read",
    leadSecondary: true,
    tags: ["Supreme Court", "Constitutional Law", "Maritime", "Environment"],
    content: [
      {
        type: "paragraph",
        text: "WASHINGTON — During ninety minutes of rigorous oral argument on Wednesday, the Supreme Court wrestled with the delicate balance between state environmental initiatives and federal supremacy over international maritime commerce."
      },
      {
        type: "paragraph",
        text: "The litigation, Pacific Shippers Guild v. State Environmental Council, challenges California and Washington regulations that impose stringent particulate exhaust limitations on ocean-going container carriers operating within 24 nautical miles of domestic coastlines."
      }
    ]
  },
  {
    id: "investigation-1",
    title: "The Ghost Subsidies: How Billions in Municipal Water Grants Vanished Into Shell Trusts",
    slug: "investigation-ghost-subsidies-municipal-water-grants",
    subheadline: "An eight-month Daily Standard investigation reveals widespread diversion of federal clean-water infrastructure allocations across six states.",
    excerpt: "Public records and internal whistleblowers disclose an opaque network of engineering consultants who skimmed millions intended for lead pipe remediation in legacy industrial towns.",
    category: "Investigations",
    categorySlug: "investigations",
    author: {
      name: "Marcus Thorne & Sarah Chen",
      title: "Investigative Projects Desk",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&q=80&w=1400",
    imageCaption: "Aging municipal water delivery valves undergoing emergency maintenance in rural Ohio.",
    imageCredit: "Staff Photo / Marcus Thorne",
    publishedAt: "2026-10-06T14:00:00Z",
    readTime: "12 min read",
    investigation: true,
    featured: true,
    mostReadRank: 3,
    tags: ["Investigations", "Federal Oversight", "Clean Water", "Public Integrity", "Government Spending"],
    content: [
      {
        type: "paragraph",
        text: "Over the past three fiscal years, the federal government dispatched more than $15 billion in targeted block grants to modernize decaying municipal water distribution systems across the Rust Belt and Appalachia. In municipal council chambers from Pennsylvania to Missouri, the funds were hailed as a generational salvation for communities plagued by corroded mains and toxic lead service lines."
      },
      {
        type: "paragraph",
        text: "An eight-month examination by The Daily Standard—incorporating thousands of pages of municipal invoices, public records disclosures, and confidential financial audits—reveals that at least $1.2 billion of that capital never resulted in a single replaced valve or excavated roadway."
      },
      {
        type: "quote",
        quote: "We were told the engineering blueprints were finalized. When the state auditors arrived, the filing cabinets were empty and the designated account balance was zero.",
        author: "Former Township Controller",
        source: "Deposition Testimony, Federal District Court"
      },
      {
        type: "heading2",
        text: "A Maze of Shell Engineering Entities"
      },
      {
        type: "paragraph",
        text: "The scheme relied upon turnkey management companies that marketed themselves to cash-strapped small towns lacking dedicated public works engineering staffs. These firms offered to handle both the federal grant application paperwork and the subsequent construction management, guaranteeing zero municipal co-pay obligations."
      },
      {
        type: "paragraph",
        text: "Once the federal disbursements cleared regional depository accounts, funds were systematically routed through a chain of third-tier consulting partnerships registered to commercial maildrops in Delaware and Nevada, according to internal bank ledgers reviewed by reporters."
      }
    ]
  },
  {
    id: "business-1",
    title: "Domestic Chip Foundries Achieve Commercial Parity in Advanced Sub-2nm Lithography",
    slug: "domestic-chip-foundries-achieve-commercial-parity",
    subheadline: "New fabrication facilities in central Ohio and Arizona begin commercial shipments to American aerospace and enterprise server manufacturers.",
    excerpt: "Marking a critical milestone for the CHIPS Act, domestic fabrication complexes have initiated volume deliveries of sub-2nm wafers, reducing reliance on East Asian supply chains.",
    category: "Business",
    categorySlug: "business",
    author: {
      name: "Harrison Vance",
      title: "Technology & Industrial Editor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Technicians inside a cleanroom facility inspecting semiconductor silicon wafers.",
    imageCredit: "Reuters / Pool Archive",
    publishedAt: "2026-10-07T06:20:00Z",
    readTime: "5 min read",
    featured: true,
    tags: ["Semiconductors", "Manufacturing", "CHIPS Act", "Supply Chain", "Technology"],
    content: [
      {
        type: "paragraph",
        text: "PHOENIX — Four years after ground was broken in the Sonoran desert, the first production-grade silicon wafers using advanced extreme ultraviolet (EUV) double-patterning have rolled off domestic fabrication lines, industry officials confirmed Wednesday."
      },
      {
        type: "paragraph",
        text: "The development represents tangible verification that federal co-investment incentives under the 2022 CHIPS legislation have succeeded in re-establishing high-precision semiconductor manufacturing inside the continental United States."
      }
    ]
  },
  {
    id: "world-1",
    title: "Allied Summit in Geneva Formulates Strategic Accord on Arctic Maritime Corridors",
    slug: "allied-summit-geneva-arctic-maritime-accord",
    subheadline: "Eight northern nations agree on joint naval patrols and scientific monitoring as receding sea ice opens polar trade transit.",
    excerpt: "Diplomats concluded three days of closed-door sessions in Switzerland with a binding framework guaranteeing freedom of navigation across newly navigable Northwest Passage segments.",
    category: "World",
    categorySlug: "world",
    author: {
      name: "Claire Delacroix",
      title: "Foreign Affairs Diplomatic Bureau",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Icebreaker vessel charting polar research coordinates in the Arctic Ocean.",
    imageCredit: "Associated Press",
    publishedAt: "2026-10-07T05:00:00Z",
    readTime: "6 min read",
    featured: true,
    tags: ["Diplomacy", "Arctic", "Foreign Policy", "Maritime", "NATO"],
    content: [
      {
        type: "paragraph",
        text: "GENEVA — Foreign ministers from North America and northern Europe finalized the landmark Geneva Arctic Treaty on Wednesday, establishing multilateral rules of engagement for commercial container transit through previously impassable polar shipping lanes."
      },
      {
        type: "paragraph",
        text: "The accord establishes an international transit coordinating commission based in Reykjavik, tasked with monitoring vessel safety, polar search-and-rescue preparedness, and preventing unilateral seabed resource claims."
      }
    ]
  },
  {
    id: "tech-1",
    title: "Federal Trade Commission Issues Comprehensive Framework for Open-Weight Frontier AI Models",
    slug: "ftc-issues-framework-open-weight-frontier-ai",
    subheadline: "Guidelines clarify liability boundaries for open-source foundation models while prohibiting anti-competitive software bundling.",
    excerpt: "In a formal policy circular, regulators drew a clear distinction between proprietary cloud services and open research weights, relieving independent developers of burdensome licensing mandates.",
    category: "Technology",
    categorySlug: "technology",
    author: {
      name: "Kavita Raman",
      title: "Regulatory Technology Reporter",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Server banks operating within an enterprise data center facility in northern Virginia.",
    imageCredit: "Staff Photo / Tech Desk",
    publishedAt: "2026-10-06T18:15:00Z",
    readTime: "5 min read",
    mostReadRank: 2,
    tags: ["Artificial Intelligence", "FTC", "Antitrust", "Open Source", "Software"],
    content: [
      {
        type: "paragraph",
        text: "WASHINGTON — Federal antitrust regulators took a decisive step toward safeguarding open-source computational research Wednesday, issuing definitive enforcement guidance that shields independent artificial intelligence developers from predatory patent claims and arbitrary cloud access fees."
      },
      {
        type: "paragraph",
        text: "The policy statement, adopted on a unanimous bipartisan vote of the commission, establishes that the public release of trained neural network parameters constitutes protected scientific publication under longstanding federal administrative standards."
      }
    ]
  },
  {
    id: "health-1",
    title: "Clinical Trials Confirm Synthetic Peptide Halts Microvascular Decline in Diabetes Patients",
    slug: "clinical-trials-synthetic-peptide-halts-diabetes-decline",
    subheadline: "Phase 3 outcomes published in the New England Journal of Medicine demonstrate substantial reversal of kidney and retinal damage.",
    excerpt: "Medical researchers at Johns Hopkins and the Mayo Clinic report unprecedented efficacy for an engineered cellular signaling compound that preserves fragile capillary networks.",
    category: "Health",
    categorySlug: "health",
    author: {
      name: "Dr. Evelyn Ward",
      title: "Medical Sciences Editor",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Laboratory microscope slide detailing cellular peptide interactions.",
    imageCredit: "Johns Hopkins Medicine / Courtesy",
    publishedAt: "2026-10-06T12:00:00Z",
    readTime: "5 min read",
    mostReadRank: 4,
    tags: ["Medicine", "Clinical Trials", "Diabetes", "Biotechnology", "Health"],
    content: [
      {
        type: "paragraph",
        text: "BALTIMORE — In what endocrinologists are describing as the most significant therapeutic advance for metabolic complications in three decades, a multi-center international trial has established that a synthetic cellular messenger compound can halt and partially reverse microvascular disease."
      },
      {
        type: "paragraph",
        text: "The randomized double-blind evaluation of 4,200 participants demonstrated an 82 percent reduction in progressive renal filtration decline over a thirty-six month monitoring horizon."
      }
    ]
  },
  {
    id: "culture-1",
    title: "Rediscovered Emily Dickinson Manuscript Surfaces at Amherst College Archives",
    slug: "rediscovered-emily-dickinson-manuscript-amherst-archives",
    subheadline: "Four unpublished lyrical poems composed on scrap stationery illuminate the poet's final creative autumn in Massachusetts.",
    excerpt: "Curators examining an uncatalogued collection of 19th-century botanical ledgers uncovered four handwritten poems featuring previously undocumented stanza variations.",
    category: "Culture",
    categorySlug: "culture",
    author: {
      name: "Whitman Cross",
      title: "Literary Critic & Essayist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "Bound 19th-century leather archives preserved inside Amherst College rare book collection.",
    imageCredit: "The Daily Standard Archive",
    publishedAt: "2026-10-05T19:30:00Z",
    readTime: "4 min read",
    mostReadRank: 5,
    tags: ["Literature", "Poetry", "History", "Archives", "Amherst"],
    content: [
      {
        type: "paragraph",
        text: "AMHERST, Mass. — Within an unassuming cedar chest preserved in the quiet subterranean stacks of Amherst College, archivists handling fragile botanical compendiums discovered four previously unrecorded poetic drafts penned in Emily Dickinson’s unmistakable slant hand."
      },
      {
        type: "paragraph",
        text: "Scholars who authenticated the leaves confirmed that the texts, inscribed on pale confectioner’s wrap with faded carbon pencil, date from the late summer of 1884, revealing an intense contemplative resonance regarding mortality and autumn light."
      }
    ]
  },
  {
    id: "sports-1",
    title: "Major League Baseball Approves Automated Strike Zone for 2027 Season",
    slug: "mlb-approves-automated-strike-zone-2027",
    subheadline: "Unanimous vote by team governors follows successful minor league challenge system trials across 1,400 games.",
    excerpt: "After more than a decade of research and optical camera tracking development, professional baseball ownership has codified an automated ball-strike verification system for all thirty ballparks.",
    category: "Sports",
    categorySlug: "sports",
    author: {
      name: "Tyler Vance",
      title: "National Baseball Columnist",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&q=80&w=1000",
    imageCaption: "View from behind home plate at an empty Major League baseball diamond at dusk.",
    imageCredit: "Staff Sports Desk",
    publishedAt: "2026-10-06T21:00:00Z",
    readTime: "4 min read",
    tags: ["Baseball", "MLB", "Technology", "Sports Law"],
    content: [
      {
        type: "paragraph",
        text: "NEW YORK — In an epochal transformation of the national pastime’s century-old officiating customs, Major League Baseball owners voted unanimously Wednesday to implement an optical automated strike zone challenge protocol beginning on Opening Day 2027."
      },
      {
        type: "paragraph",
        text: "The system will empower team managers and catchers to request immediate optical hawkeye reviews of disputed pitch calls, resolved within two seconds via the home plate umpire’s ear-piece."
      }
    ]
  },
  {
    id: "latest-1",
    title: "Treasury Department Finalizes Sanctions Enforcement on Shadow Fleet Tankers",
    slug: "treasury-sanctions-enforcement-shadow-fleet-tankers",
    excerpt: "Office of Foreign Assets Control targets twenty-two maritime shell corporations evading oil price cap mechanisms.",
    category: "Markets",
    categorySlug: "markets",
    author: { name: "Arthur M. Vance", title: "Chief Economics Correspondent", avatar: "" },
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600",
    imageCaption: "Commercial ocean tanker navigating international strait.",
    imageCredit: "Staff",
    publishedAt: "2026-10-07T11:22:00Z",
    readTime: "3 min read",
    tags: ["Sanctions", "Oil", "Treasury", "Markets"],
    content: [{ type: "paragraph", text: "WASHINGTON — Federal sanctions authorities expanded maritime compliance inspections Wednesday, announcing immediate asset freezes against offshore management firms operating non-flagged crude oil transport carriers." }]
  },
  {
    id: "latest-2",
    title: "Labor Department Reports Unexpected Jump in Factory Productivity Metrics",
    slug: "labor-department-reports-factory-productivity-jump",
    excerpt: "Output per hour worked among domestic manufacturing staff rose 2.8% on automated robotics integration.",
    category: "Business",
    categorySlug: "business",
    author: { name: "Harrison Vance", title: "Technology & Industrial Editor", avatar: "" },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    imageCaption: "Automated assembly line operating inside an automotive factory.",
    imageCredit: "Staff",
    publishedAt: "2026-10-07T10:48:00Z",
    readTime: "3 min read",
    tags: ["Productivity", "Labor", "Manufacturing", "Economy"],
    content: [{ type: "paragraph", text: "WASHINGTON — Nonfarm business sector labor productivity expanded at a robust 2.8 percent seasonally adjusted annual rate in the prior quarter, the Bureau of Labor Statistics announced Wednesday morning." }]
  },
  {
    id: "latest-3",
    title: "Bipartisan House Caucus Advances Digital Privacy Bill for Minors",
    slug: "house-caucus-advances-digital-privacy-bill-minors",
    excerpt: "Legislation would mandate default encryption, ban behavioral micro-targeting, and audit algorithmic feeds.",
    category: "Politics",
    categorySlug: "politics",
    author: { name: "Eleanor Hayes", title: "Senior Congressional Reporter", avatar: "" },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    imageCaption: "The Capitol Dome illuminated against an overcast autumn morning.",
    imageCredit: "Staff",
    publishedAt: "2026-10-07T10:15:00Z",
    readTime: "4 min read",
    tags: ["Congress", "Privacy", "Tech Policy", "Children"],
    content: [{ type: "paragraph", text: "CAPITOL HILL — The House Energy and Commerce Committee voted 42 to 3 to send the comprehensive Children’s Online Privacy Enhancement Act to the floor for full consideration." }]
  },
  {
    id: "latest-4",
    title: "EPA Finalizes Strict Ground-Level Ozone Benchmarks for Urban Metros",
    slug: "epa-ground-level-ozone-benchmarks-urban-metros",
    excerpt: "New limits will require thirty-four major metropolitan jurisdictions to install advanced monitoring stations.",
    category: "U.S. News",
    categorySlug: "us-news",
    author: { name: "Julian Sterling", title: "National Legal & Regulatory Correspondent", avatar: "" },
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=600",
    imageCaption: "Urban skyline silhouette during early morning haze.",
    imageCredit: "Staff",
    publishedAt: "2026-10-07T09:40:00Z",
    readTime: "3 min read",
    tags: ["EPA", "Air Quality", "Environment", "Cities"],
    content: [{ type: "paragraph", text: "WASHINGTON — Environmental Protection Agency Administrator Michael Regan signed revised National Ambient Air Quality Standards lowering allowable ground-level ozone thresholds." }]
  },
  {
    id: "latest-5",
    title: "European Space Agency Confirms Successful Gravitational Wave Mapping Probe",
    slug: "esa-gravitational-wave-mapping-probe-success",
    excerpt: "Laser interferometer array deployed three million miles from Earth begins capturing deep cosmic ripples.",
    category: "World",
    categorySlug: "world",
    author: { name: "Claire Delacroix", title: "Foreign Affairs Diplomatic Bureau", avatar: "" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    imageCaption: "Orbital satellite rendering in deep space.",
    imageCredit: "ESA / Pool",
    publishedAt: "2026-10-07T08:05:00Z",
    readTime: "4 min read",
    tags: ["Space", "Science", "Cosmology", "Physics"],
    content: [{ type: "paragraph", text: "DARMSTADT, Germany — Mission controllers at the European Space Operations Centre cheered as telemetry confirmed that the triangular LISA gravitational wave interferometer configuration achieved full optical lock." }]
  },
  {
    id: "politics-3",
    title: "Federal Election Commission Tightens Campaign Finance Audits for PAC Bundling",
    slug: "fec-tightens-campaign-finance-audits-pac-bundling",
    excerpt: "Bipartisan commissioners vote 5-1 to mandate real-time disclosure thresholds for digital fundraising networks.",
    category: "Politics",
    categorySlug: "politics",
    author: { name: "Eleanor Hayes", title: "Senior Congressional Reporter", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=600",
    imageCaption: "The Federal Election Commission headquarters in Washington, D.C.",
    imageCredit: "Staff Photography",
    publishedAt: "2026-10-07T07:15:00Z",
    readTime: "4 min read",
    tags: ["FEC", "Campaign Finance", "Elections", "PACs", "Congress"],
    content: [{ type: "paragraph", text: "WASHINGTON — In a significant bipartisan shift, the Federal Election Commission voted Thursday to enact stricter reporting requirements on algorithmic campaign fundraising networks." }]
  },
  {
    id: "politics-4",
    title: "State Governors Form Regional Compact to Secure Critical Mineral Supply Corridors",
    slug: "governors-regional-compact-critical-mineral-corridors",
    excerpt: "A nine-state alliance guarantees tax harmonization and rapid permitting for domestic lithium refining hubs.",
    category: "Politics",
    categorySlug: "politics",
    author: { name: "Julian Sterling", title: "National Legal & Regulatory Correspondent", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
    imageCaption: "Governors meeting at the Midwest Intergovernmental Council summit.",
    imageCredit: "State Bureau Archive",
    publishedAt: "2026-10-07T06:50:00Z",
    readTime: "5 min read",
    tags: ["Governors", "Infrastructure", "Lithium", "Energy", "Policy"],
    content: [{ type: "paragraph", text: "CHICAGO — Governors from nine Midwestern and Appalachian states announced a binding interstate commerce pact aimed at streamlining environmental reviews for mineral processing facilities." }]
  },
  {
    id: "politics-5",
    title: "Judicial Conference Adopts Stricter Financial Transparency Guidelines for Circuit Courts",
    slug: "judicial-conference-adopts-stricter-transparency-guidelines",
    excerpt: "New ethical disclosure protocols require appellate judges to report sponsored seminar travel within thirty days.",
    category: "Politics",
    categorySlug: "politics",
    author: { name: "Arthur M. Vance", title: "Chief Economics & Legal Correspondent", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
    imageCaption: "The Thurgood Marshall Federal Judiciary Building in Washington, D.C.",
    imageCredit: "The Daily Standard Archive",
    publishedAt: "2026-10-07T05:30:00Z",
    readTime: "4 min read",
    tags: ["Supreme Court", "Judiciary", "Ethics", "Transparency", "Federal Courts"],
    content: [{ type: "paragraph", text: "WASHINGTON — The policymaking body for the federal court system announced sweeping revisions to its ethics code, mandating expedited disclosures for all privately funded judicial education programs." }]
  },
  {
    id: "culture-2",
    title: "The Architecture of Solitude: Modernist Libraries and the Preservation of Deep Reading",
    slug: "architecture-of-solitude-modernist-libraries-deep-reading",
    excerpt: "In a world overwhelmed by fragmented digital notifications, civic sanctums of stone and silence are experiencing a quiet renaissance.",
    category: "Culture",
    categorySlug: "culture",
    author: {
      name: "Arthur M. Vance",
      title: "Cultural Critic & Senior Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      bio: "Arthur M. Vance writes on architectural history, civic spaces, and contemporary culture."
    },
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600",
    imageCaption: "Reading room of the Beinecke Rare Book and Manuscript Library.",
    imageCredit: "Archival Photography",
    publishedAt: "2026-10-06T14:20:00Z",
    readTime: "7 min read",
    tags: ["Culture", "Architecture", "Books", "Civic Spaces"],
    content: [
      {
        type: "paragraph",
        text: "Across the great metropolises of the Northern Hemisphere, an unexpected civic phenomenon is unfolding: the deliberate return to monumental stone reading rooms designed for silence and sustained inquiry."
      }
    ]
  },
  {
    id: "culture-3",
    title: "The Great Restoration: Preserving Renaissance Frescoes in an Age of Climatic Instability",
    slug: "great-restoration-renaissance-frescoes-climatic-instability",
    excerpt: "Conservators in Florence and Venice deploy microscopic laser ablation to save crumbling tempera from unprecedented seasonal humidity.",
    category: "Culture",
    categorySlug: "culture",
    author: {
      name: "Claire Delacroix",
      title: "European Cultural Affairs Correspondent",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=600",
    imageCaption: "Restoration scaffolding erected within the Basilica of Santa Croce.",
    imageCredit: "Galleria degli Uffizi Archive",
    publishedAt: "2026-10-05T11:45:00Z",
    readTime: "6 min read",
    tags: ["Art History", "Conservation", "Florence", "Heritage"],
    content: [
      {
        type: "paragraph",
        text: "FLORENCE — Inside the darkened transept of Santa Croce, microscopic laser pulses hum with surgical precision, vaporizing airborne sulfur particulates from fourteenth-century pigments."
      }
    ]
  },
  {
    id: "tech-2",
    title: "The Monolith of Compute: How Hyperscale Datacenters are Rewiring the National Energy Grid",
    slug: "monolith-of-compute-hyperscale-datacenters-energy-grid",
    excerpt: "With gigawatt facilities emerging across Virginia and Ohio, technology conglomerates are financing private modular reactors to meet computational demand.",
    category: "Technology",
    categorySlug: "technology",
    author: {
      name: "Dr. Evelyn Reed",
      title: "Senior Technology Policy Editor",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
    imageCaption: "Server corridor inside a modular high-density computational center.",
    imageCredit: "Tech Bureau Archive",
    publishedAt: "2026-10-06T16:10:00Z",
    readTime: "6 min read",
    tags: ["Technology", "Energy", "Infrastructure", "Datacenters"],
    content: [
      {
        type: "paragraph",
        text: "ASHBURN, Va. — In northern Virginia's data alley, the sheer appetite for electricity has forced a fundamental recalculation in national utility planning, sparking long-term nuclear power purchase commitments."
      }
    ]
  },
  {
    id: "tech-3",
    title: "The Sovereign Algorithm: European Regulators Draft New Standards for Open-Weight Machine Models",
    slug: "sovereign-algorithm-european-standards-open-weight-models",
    excerpt: "Brussels negotiations conclude with provisional audit protocols exempting academic consortia while tightening safety compliance for commercial weights.",
    category: "Technology",
    categorySlug: "technology",
    author: {
      name: "Dr. Evelyn Reed",
      title: "Senior Technology Policy Editor",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
    imageCaption: "European Union digital policy summit chambers in Brussels.",
    imageCredit: "Commission Press Service",
    publishedAt: "2026-10-05T09:30:00Z",
    readTime: "5 min read",
    tags: ["Artificial Intelligence", "Europe", "Regulation", "Policy"],
    content: [
      {
        type: "paragraph",
        text: "BRUSSELS — After eighteen months of arduous technical drafting, European Union policymakers finalized binding enforcement guidelines for general-purpose algorithmic models."
      }
    ]
  },
  {
    id: "business-3",
    title: "The Quiet Consolidation of American Freight Rail and the Logistics Bottlenecks of 2026",
    slug: "quiet-consolidation-american-freight-rail-logistics",
    excerpt: "Surface Transportation Board scrutiny intensifies as class-one carriers push precision scheduled railroading to the logistical limit.",
    category: "Business",
    categorySlug: "business",
    author: {
      name: "Marcus Holloway",
      title: "Global Supply Chain & Trade Analyst",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=600",
    imageCaption: "Intermodal rail yard operating at dusk in Chicago.",
    imageCredit: "Midwest Logistics Archive",
    publishedAt: "2026-10-06T12:00:00Z",
    readTime: "5 min read",
    tags: ["Business", "Logistics", "Rail", "Supply Chain"],
    content: [
      {
        type: "paragraph",
        text: "CHICAGO — Across the intermodal classification hubs of the American Midwest, container dwell times have reached critical thresholds as freight operators grapple with tight motive power reserves."
      }
    ]
  },
  {
    id: "world-3",
    title: "The Arctic Sea Lanes: Navigating the Geopolitics of Northern Maritime Routes",
    slug: "arctic-sea-lanes-geopolitics-northern-maritime-routes",
    excerpt: "With polar ice retreat opening unprecedented transit windows, circumpolar nations clash over navigational sovereignty and environmental jurisdiction.",
    category: "World",
    categorySlug: "world",
    author: {
      name: "Claire Delacroix",
      title: "Foreign Affairs Diplomatic Bureau",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80&w=600",
    imageCaption: "Maritime vessel charting glacial corridors in high northern latitudes.",
    imageCredit: "Arctic Institute",
    publishedAt: "2026-10-05T08:15:00Z",
    readTime: "6 min read",
    tags: ["World", "Arctic", "Geopolitics", "Maritime"],
    content: [
      {
        type: "paragraph",
        text: "TROMSØ, Norway — The summer shipping corridors through the high north have become the staging ground for a quiet diplomatic contest over international maritime law and sovereign territorial claims."
      }
    ]
  }
];

export const BREAKING_NEWS_ITEM = {
  label: "BREAKING",
  text: "Federal Reserve maintains benchmark rate band at 3.75%–4.00%, signaling sustained macroeconomic equilibrium",
  href: "/news/federal-reserve-signals-equilibrium-inflation-target"
};

export const MARKET_TICKERS = [
  { symbol: "S&P 500", value: "5,842.10", change: "+0.42%", positive: true },
  { symbol: "DOW", value: "42,510.35", change: "+0.28%", positive: true },
  { symbol: "NASDAQ", value: "18,495.20", change: "+0.68%", positive: true },
  { symbol: "10-YR T-NOTE", value: "3.82%", change: "-0.04%", positive: false },
  { symbol: "BRENT CRUDE", value: "$74.12", change: "-1.15%", positive: false },
  { symbol: "GOLD", value: "$2,645.80", change: "+0.35%", positive: true }
];

export function getAllArticles(): NewsArticle[] {
  return MOCK_ARTICLES;
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return MOCK_ARTICLES.find(article => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): NewsArticle[] {
  return MOCK_ARTICLES.filter(article => article.categorySlug === categorySlug);
}

export function getHeroArticle(): NewsArticle {
  return MOCK_ARTICLES.find(article => article.hero) || MOCK_ARTICLES[0];
}

export function getSecondaryLeadArticles(): NewsArticle[] {
  return MOCK_ARTICLES.filter(article => article.leadSecondary);
}

export function getLatestArticles(limit = 5): NewsArticle[] {
  return [...MOCK_ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getMostReadArticles(limit = 5): NewsArticle[] {
  return MOCK_ARTICLES
    .filter(a => a.mostReadRank !== undefined)
    .sort((a, b) => (a.mostReadRank || 99) - (b.mostReadRank || 99))
    .slice(0, limit);
}

export function getInvestigativeArticles(): NewsArticle[] {
  return MOCK_ARTICLES.filter(a => a.investigation);
}

export function getRelatedArticles(currentSlug: string, categorySlug: string, limit = 3): NewsArticle[] {
  return MOCK_ARTICLES
    .filter(a => a.slug !== currentSlug)
    .filter(a => a.categorySlug === categorySlug || a.featured)
    .slice(0, limit);
}

export function searchArticles(query: string, categoryFilter?: string): NewsArticle[] {
  const q = query.toLowerCase().trim();
  return MOCK_ARTICLES.filter(article => {
    const matchesCategory = !categoryFilter || categoryFilter === "all" || article.categorySlug === categoryFilter;
    if (!matchesCategory) return false;
    if (!q) return true;
    return (
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q) ||
      article.author.name.toLowerCase().includes(q) ||
      article.tags.some(tag => tag.toLowerCase().includes(q))
    );
  });
}
