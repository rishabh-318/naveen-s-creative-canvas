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
  link?:string,
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
    Twitter?: string;
    dribbble?: string;
    Naukri?: string;
    instagram?: string;
    
  };
}

export interface Skill {
  name: string;
  level: number;
}

export const personalInfo: PersonalInfo = {
  name: "Naveen Sundriyal",
  title: "Social Media Strategist and Video Editor",
  tagline: "Crafting compelling visual stories for brands that dare to stand out",
  email: "nsundriyal62@gmail.com",
  phone: "+91 95579 90153",
  location: "Delhi, India",
  bio: [
    "I m a video editor with strong experience in managing, editing, and optimizing content across YouTube, podcasts, and short-form social platforms. I’ve worked with multiple clients including international ones delivering polished edits that balance storytelling, clarity, and platform-specific strategy.",
    "I specialize in talking-head videos, podcast edits, social media content, and fintech-focused visuals. Whether it’s managing an entire YouTube channel, editing Zoom interviews, or creating high-impact reels, I ensure every video aligns with the brand’s message and connects with the right audience.",
   "Beyond editing, I enjoy exploring new tools and skills from C++ to machine learning and I often work on side projects like character chatbots and 2D games. I’m always learning, building, and improving my craft."
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/naveen-sundriyal-44a5231b8/",
    Twitter: "https://x.com/9B9_ENGINEER",
    Naukri: "https://www.naukri.com/mnjuser/profilel",
    instagram: "https://www.instagram.com/9v9_engineer?igsh=dXZ3bXNrbGtnbGwy"
  }
};

export const skills: Skill[] = [
  { name: "Adobe Premiere Pro", level: 99 },
  { name: "Adobe Adobe After Effects", level: 85 },
  { name: "Adobe Creative Suit", level: 90 },
  { name: "Adobe Photoshop", level: 80 }, 
  { name: "Canva", level: 95 },
  { name: "Video Editing", level: 92 },
  { name: "Visual Effects", level: 80 },
  { name: "Color Grading", level: 90 },
  { name: "3D Animation", level: 40 },
  { name: "Sound Design", level: 78 },
  { name: "Storyboarding", level: 85 },
  { name: "Brand Strategy", level: 80 }
];

export const tools = [
  "After Effects",
  "Canva",
  "Premiere Pro",
  "DaVinci Resolve",
  "Audacity",
  "Adobe creative suit",
  "Figma",
  "Illustrator",
  "Photoshop"
];

export const projects: Project[] = [

{
  id: "video-editing-showcase",
  title: "Jio Financial Services",
  client: "Upsurge",
  year: "2024",
  category: "Short-Form Content",
  role: "Video Editor & Content Manager",
  tools: ["Premiere Pro", "After Effects", "Audacity", "Canva"],

  problem: "Client wanted to create a clean, high-impact reel that reflects my editing style and on-screen creativeness. The goal was to make a snappy, engaging video suitable for Instagram Reels and to visually communicate my ability to manage, edit, and optimize short-form content.",

  process: "I ideated the concept, got the raw data from client, and crafted the edit with attention to pacing, clarity, and social-media-friendly timing. The process involved rough cut → rhythm and beat alignment → text overlays → color correction → final polish. I focused on maintaining a personal, authentic tone while ensuring platform-optimized storytelling.",

  solution: "A clean and visually sharp reel featuring smooth cuts, talking-head moments, and subtle motion graphics. The video highlights my editing approach—minimal, effective, and audience-focused—while showcasing my comfort in front of the camera.",

  outcome: "The reel performed well on Instagram, receiving strong engagement and positive responses from peers and creators. It effectively represents my editing style, content management skills, and camera presence for future collaborations and clients.",

  testimonial: {
    quote: "Naveen has a very clean, professional editing style. The way he manages pacing, clarity, and on-screen delivery makes the content feel effortless and engaging. This reel reflects his ability to handle both editing and content direction with confidence.",
    author: "Agency Co-founder",
    position: "Content Strategist"
  },
  heroImage: "/jio_financial_services.jpg",
  link:"https://www.instagram.com/reel/DOlgDXMD6ls/",
  images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
    ]
},
  {
    id: "fintech-explainer",
    title: "Laadla Bhaiya Yojana",
    client: "Upsurge",
    year: "2024",
    category: "Goverment Scheme",
    role: "Video Editor",
    tools: ["Premiere Pro", "Adobe photoshop", "After Effects"],
    problem: "The raw footage included talking-head videos that required strong pacing, clarity, and visual consistency to retain audience attention.",
    process: "Spent three weeks organizing and reviewing footage, identifying key story arcs, and conducting additional interviews to fill narrative gaps. Developed a color grading approach that emphasized natural tones to reinforce the sustainability message. Created motion graphics for data visualization segments.",
    solution: "Edited a 28-minute documentary with a three-act structure, weaving personal stories of artisans with broader industry insights. Incorporated dynamic pacing with contemplative moments, supported by a carefully curated soundtrack and subtle visual effects.",
    outcome: "Selected for screening at 5 environmental film festivals, including winning 'Best Short Documentary' at the Green Screen Festival. Generated 850K+ organic views on YouTube and sparked a 200% increase in brand awareness for EcoWear.",
    testimonial: {
      quote: "The editing brought our vision to life in ways we hadn't imagined. Every frame tells our story with authenticity and impact.",
      author: "Maya Patel",
      position: "Founder, EcoWear Collective"
    },
    heroImage: "/Image-990.jpg",
    link:"https://www.instagram.com/reel/DM__TanNAFs/",

    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea588c87?w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
    ]
  },
  {
    id: "fintech-explainer",
    title: "WhatsApp AI Agent",
    client: "Kunaal Naik",
    year: "2024",
    category: "Explainer Animation",
    role: "Video editor",
    tools: ["After Effects", "Illustrator", "canva"],
    problem: "The client needed a WhatsApp-based AI agent to automate customer engagement—capable of answering questions, breaking down complex information, and guiding users through processes without requiring human support."
    ,process: "Collaborated with the marketing team to script six videos, each under 60 seconds. Designed a friendly, character-based animation style with a consistent color palette. Created modular animation elements for efficiency across the series.",
    solution: "Produced six explainer videos featuring minimalist 2D animation, clear voiceover, and strategic use of white space. Each video followed a problem-solution format with relatable scenarios and simple visual metaphors.",
    outcome: "Videos collectively reached 1.8M views, reduced customer support queries by 35%, and increased product sign-ups by 48%. The series became a cornerstone of SimplePay's onboarding experience.",
    testimonial: {
      quote: "These videos made our products accessible to everyone. Naveen's ability to simplify complexity is remarkable.",
      author: "Rajesh Kumar",
      position: "VP Marketing, SimplePay Financial"
    },
    heroImage: "/o7adDf5tS9I-HD.jpg",
    link:"https://www.youtube.com/watch?v=o7adDf5tS9I",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
    ]
  },
  {
    id: "music-video-indie",
    title: "Investment in Physical Gold",
    client: "Niraj Dugar",
    year: "2024",
    category: "Finance video",
    role: "Video and audio Editor",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    problem: "Client needed a explainer videos to educate users about complex financial products (credit cards, loans, investments) in an approachable, non-intimidating way.",
    process: "Shot over two days using natural lighting and practical effects. Experimented with in-camera techniques (slow motion, double exposure) to create a dreamlike aesthetic. In post-production, applied a vintage film look and added subtle glitch effects.",
    solution: "Delivered a hauntingly beautiful music video that matched the melancholic tone of the song. Used creative editing techniques, color grading, and minimal VFX to create a high-production feel on a DIY budget.",
    outcome: "Video went viral with 3.2M+ views on YouTube, landing the band a record deal. Featured on Rolling Stone India's 'Best Music Videos of 2023' list. The band's Spotify streams increased by 600%.",
    heroImage: "/FT5K581K7ck-HD.jpg",
    images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
    ],
    link:"https://www.youtube.com/watch?v=FT5K581K7ck",
  },
  {
    id: "nonprofit-awareness",
    title: "Truth Behind Kashmir Conflicts",
    client: "Jai and Bharat show",
    year: "2023",
    category: "Social Impact",
    role: "Podcast Editor",
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
    link:"https://www.youtube.com/watch?v=u6__HMDbA8k&t=56s",
    heroImage: "/imgi_2_image15.jpg",
    images: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80"
    ]
  },
  {
    id: "corporate-reels",
    title: "Raksha Bandhan 2025",
    client: "Upsurge-Agency",
    year: "2024",
    category: "Event Coverage",
    role: "Video Editor",
    tools: ["Premiere Pro", "photoshop", "After Effects"],
    problem: "Produced a crisp, engaging reel to showcase the fintech product’s impact, user adoption, and unique offerings for marketing and social outreach.",
    process: "Coordinated a team of 3 videographers to cover simultaneous sessions. Conducted on-the-fly interviews with speakers and attendees. Edited daily highlight reels each evening for next-day social media release.",
    solution: "Delivered three daily recap videos (2-3 minutes each) and one comprehensive highlight reel (8 minutes). Used dynamic cuts, split-screens, and energetic music to match the summit's innovation theme.",
    outcome: "Videos generated 900K+ combined views, extended event reach by 400%, and contributed to 60% higher ticket sales for the following year's summit. Client secured 5 new event sponsorships based on the video content.",
    heroImage: "/Image-729.jpg",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
    ],
    link:"https://www.instagram.com/reel/DNFZQR6t4nQ/",
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
