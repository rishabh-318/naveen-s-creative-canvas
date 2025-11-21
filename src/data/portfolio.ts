export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  role: string;
  tools: string[];
  problem: string;
  process: string;
  solution: string;
  outcome: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  images: string[];
  heroImage: string;
  videoUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  bio: string[];
  socials: {
    linkedin?: string;
    behance?: string;
    dribbble?: string;
    vimeo?: string;
    instagram?: string;
  };
}

export interface Skill {
  name: string;
  level: number;
}

export const personalInfo: PersonalInfo = {
  name: "Naveen Sundriyal",
  title: "Motion Designer & Video Editor",
  tagline: "Crafting compelling visual stories for brands that dare to stand out",
  email: "naveen.sundriyal@creative.com",
  phone: "+91 98765 43210",
  location: "Mumbai, India",
  bio: [
    "I'm a motion designer and video editor with over 6 years of experience creating impactful visual narratives for global brands and innovative startups. My work bridges the gap between creative storytelling and strategic brand communication.",
    "Specializing in brand films, explainer videos, and social media content, I combine technical precision with artistic sensibility. My approach is rooted in understanding client goals and translating them into engaging visual experiences that resonate with audiences.",
    "When I'm not crafting motion graphics, you'll find me exploring new animation techniques, collaborating with creative teams, or seeking inspiration in the world around me."
  ],
  socials: {
    linkedin: "https://linkedin.com/in/naveensundriyal",
    behance: "https://behance.net/naveensundriyal",
    vimeo: "https://vimeo.com/naveensundriyal",
    instagram: "https://instagram.com/naveen.creates"
  }
};

export const skills: Skill[] = [
  { name: "Motion Graphics", level: 95 },
  { name: "Video Editing", level: 92 },
  { name: "Visual Effects", level: 88 },
  { name: "Color Grading", level: 90 },
  { name: "3D Animation", level: 82 },
  { name: "Sound Design", level: 78 },
  { name: "Storyboarding", level: 85 },
  { name: "Brand Strategy", level: 80 }
];

export const tools = [
  "After Effects",
  "Premiere Pro",
  "DaVinci Resolve",
  "Cinema 4D",
  "Blender",
  "Figma",
  "Illustrator",
  "Photoshop"
];

export const projects: Project[] = [
  {
    id: "tech-startup-launch",
    title: "TechVerse Launch Campaign",
    client: "TechVerse Inc.",
    year: "2024",
    category: "Brand Film",
    role: "Lead Motion Designer & Editor",
    tools: ["After Effects", "Cinema 4D", "Premiere Pro", "DaVinci Resolve"],
    problem: "TechVerse, a B2B SaaS startup, needed a compelling launch video that would explain their complex AI-powered platform in an accessible way while establishing brand credibility in a crowded market.",
    process: "We started with intensive discovery sessions to understand their platform and target audience. I developed a visual language using clean geometric shapes and fluid motion to represent AI technology. The process included storyboarding, styleframes, animation tests, and iterative refinements based on stakeholder feedback.",
    solution: "Created a 90-second brand film featuring dynamic 3D elements, kinetic typography, and seamless transitions. The video balanced technical sophistication with emotional storytelling, showcasing the platform's capabilities through metaphorical visuals rather than literal screen recordings.",
    outcome: "The video garnered 2.5M+ views across platforms, contributed to a 156% increase in demo requests, and was featured at TechCrunch Disrupt 2024. Client reported 40% higher engagement rates compared to previous campaign videos.",
    testimonial: {
      quote: "Naveen transformed our complex product into a visual story that resonates. The attention to detail and creative problem-solving exceeded our expectations.",
      author: "Sarah Chen",
      position: "CMO, TechVerse Inc."
    },
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
    ]
  },
  {
    id: "sustainable-fashion-doc",
    title: "Threads of Change",
    client: "EcoWear Collective",
    year: "2024",
    category: "Documentary Editing",
    role: "Editor & Colorist",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    problem: "EcoWear needed to create an impactful documentary highlighting sustainable fashion practices. The raw footage was extensive (120+ hours) and required a cohesive narrative that would engage environmentally conscious millennials.",
    process: "Spent three weeks organizing and reviewing footage, identifying key story arcs, and conducting additional interviews to fill narrative gaps. Developed a color grading approach that emphasized natural tones to reinforce the sustainability message. Created motion graphics for data visualization segments.",
    solution: "Edited a 28-minute documentary with a three-act structure, weaving personal stories of artisans with broader industry insights. Incorporated dynamic pacing with contemplative moments, supported by a carefully curated soundtrack and subtle visual effects.",
    outcome: "Selected for screening at 5 environmental film festivals, including winning 'Best Short Documentary' at the Green Screen Festival. Generated 850K+ organic views on YouTube and sparked a 200% increase in brand awareness for EcoWear.",
    testimonial: {
      quote: "The editing brought our vision to life in ways we hadn't imagined. Every frame tells our story with authenticity and impact.",
      author: "Maya Patel",
      position: "Founder, EcoWear Collective"
    },
    heroImage: "https://images.unsplash.com/photo-1558769132-cb1aea588c87?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea588c87?w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
    ]
  },
  {
    id: "fintech-explainer",
    title: "SimplePay Explainer Series",
    client: "SimplePay Financial",
    year: "2023",
    category: "Explainer Animation",
    role: "Motion Designer & Animator",
    tools: ["After Effects", "Illustrator", "Figma"],
    problem: "SimplePay needed a series of explainer videos to educate users about complex financial products (credit cards, loans, investments) in an approachable, non-intimidating way.",
    process: "Collaborated with the marketing team to script six videos, each under 60 seconds. Designed a friendly, character-based animation style with a consistent color palette. Created modular animation elements for efficiency across the series.",
    solution: "Produced six explainer videos featuring minimalist 2D animation, clear voiceover, and strategic use of white space. Each video followed a problem-solution format with relatable scenarios and simple visual metaphors.",
    outcome: "Videos collectively reached 1.8M views, reduced customer support queries by 35%, and increased product sign-ups by 48%. The series became a cornerstone of SimplePay's onboarding experience.",
    testimonial: {
      quote: "These videos made our products accessible to everyone. Naveen's ability to simplify complexity is remarkable.",
      author: "Rajesh Kumar",
      position: "VP Marketing, SimplePay Financial"
    },
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
    ]
  },
  {
    id: "music-video-indie",
    title: "Echoes in the Void",
    client: "The Wandering Souls (Band)",
    year: "2023",
    category: "Music Video",
    role: "Director of Photography & Editor",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    problem: "An indie band needed a visually striking music video on a minimal budget that would help them stand out in a saturated market and attract label attention.",
    process: "Shot over two days using natural lighting and practical effects. Experimented with in-camera techniques (slow motion, double exposure) to create a dreamlike aesthetic. In post-production, applied a vintage film look and added subtle glitch effects.",
    solution: "Delivered a hauntingly beautiful music video that matched the melancholic tone of the song. Used creative editing techniques, color grading, and minimal VFX to create a high-production feel on a DIY budget.",
    outcome: "Video went viral with 3.2M+ views on YouTube, landing the band a record deal. Featured on Rolling Stone India's 'Best Music Videos of 2023' list. The band's Spotify streams increased by 600%.",
    heroImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
    ]
  },
  {
    id: "nonprofit-awareness",
    title: "Voices of Hope",
    client: "Hope Foundation India",
    year: "2023",
    category: "Social Impact",
    role: "Motion Designer & Editor",
    tools: ["After Effects", "Premiere Pro", "Illustrator"],
    problem: "A nonprofit working with underprivileged children needed an awareness campaign video to drive donations and volunteer sign-ups for their annual fundraiser.",
    process: "Conducted interviews with beneficiaries, volunteers, and staff. Created an emotional narrative arc highlighting real impact stories. Designed animated infographics to present data compellingly. Worked pro bono to support the cause.",
    solution: "Produced a 3-minute campaign video blending documentary footage with animated segments. Used warm color grading and uplifting music to inspire action while maintaining authenticity.",
    outcome: "Campaign exceeded fundraising goal by 180%, raising ₹85 lakhs. Video shared across social platforms reached 1.5M people and resulted in 450+ new volunteer applications.",
    testimonial: {
      quote: "This video captured the heart of our mission and moved people to action. Naveen's generosity and talent made all the difference.",
      author: "Dr. Anjali Verma",
      position: "Director, Hope Foundation India"
    },
    heroImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80"
    ]
  },
  {
    id: "corporate-reels",
    title: "Innovate India Summit",
    client: "TechHub Events",
    year: "2023",
    category: "Event Coverage",
    role: "Lead Videographer & Editor",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    problem: "TechHub needed fast-turnaround recap videos for a 3-day tech summit with 50+ speakers, capturing the energy and key moments for post-event marketing.",
    process: "Coordinated a team of 3 videographers to cover simultaneous sessions. Conducted on-the-fly interviews with speakers and attendees. Edited daily highlight reels each evening for next-day social media release.",
    solution: "Delivered three daily recap videos (2-3 minutes each) and one comprehensive highlight reel (8 minutes). Used dynamic cuts, split-screens, and energetic music to match the summit's innovation theme.",
    outcome: "Videos generated 900K+ combined views, extended event reach by 400%, and contributed to 60% higher ticket sales for the following year's summit. Client secured 5 new event sponsorships based on the video content.",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
    ]
  },
  {
    id: "product-launch-apple",
    title: "NexWear Smartwatch Launch",
    client: "NexWear Technologies",
    year: "2022",
    category: "Product Film",
    role: "Motion Designer & Compositor",
    tools: ["Cinema 4D", "After Effects", "Octane Render"],
    problem: "NexWear needed a premium product reveal video for their flagship smartwatch that would compete with established brands like Apple and Samsung.",
    process: "Created photorealistic 3D renders of the product in Cinema 4D. Developed a sleek animation sequence showcasing key features. Applied cinematic lighting and camera movements inspired by high-end tech commercials.",
    solution: "Produced a 60-second product film featuring elegant 3D animation, fluid transitions, and minimal text overlays. The video emphasized the watch's design aesthetics and premium positioning.",
    outcome: "Video used across all launch channels, contributing to 50K+ pre-orders in the first week. Featured on tech blogs including TechCrunch and The Verge. Client reported the video as a key factor in successful launch.",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80"
    ]
  },
  {
    id: "social-media-food",
    title: "Spice Route Content Series",
    client: "Spice Route Restaurant Chain",
    year: "2022",
    category: "Social Media Content",
    role: "Content Creator & Editor",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    problem: "A restaurant chain wanted to boost social media engagement with appetizing, shareable content that would drive foot traffic and online orders.",
    process: "Developed a content strategy focusing on short-form video (15-30 seconds) optimized for Instagram Reels and YouTube Shorts. Shot and edited weekly content featuring menu highlights, behind-the-scenes moments, and chef interviews.",
    solution: "Created a consistent visual style with bold colors, dynamic text animations, and mouth-watering close-ups. Incorporated trending audio and formats while maintaining brand identity.",
    outcome: "Increased follower base by 320% in 6 months. Average engagement rate rose from 2.1% to 8.7%. Videos collectively garnered 5M+ views, and the restaurant reported a 45% increase in online orders attributed to social media.",
    heroImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      "https://images.unsplash.com/photo-1543353071-087092ec393a?w=800&q=80"
    ]
  }
];

export const categories = [
  "All",
  "Brand Film",
  "Explainer Animation",
  "Music Video",
  "Documentary Editing",
  "Product Film",
  "Social Media Content",
  "Event Coverage",
  "Social Impact"
];
