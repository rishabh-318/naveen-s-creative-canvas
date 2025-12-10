import { useState, useEffect } from "react";
import { Play, Clock, Mic } from "lucide-react";

// Project type definition
interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  role: string;
  heroImage: string;
  link: string;
}

// Categorized project data
const shortFormVideos: Project[] = [
    {
    id: "corporate-reels",
    title: "Raksha Bandhan 2025",
    client: "Upsurge-Agency",
    year: "2025",
    category: "Event Coverage",
    role: "Instagram reel",
    heroImage: "/Image-729.jpg",
    link: "https://www.instagram.com/reel/DNFZQR6t4nQ/"
  },
  {
    id: "video-editing-showcase",
    title: "Jio Financial Services",
    client: "Upsurge-Agency",
    year: "2025",
    category: "Short-Form Content",
    role: "Instagram reel",
    heroImage: "/jio_financial_services.jpg",
    link: "https://www.instagram.com/reel/DOlgDXMD6ls/"
  },
  {
    id: "fintech-explainer-2",
    title: "Laadla Bhaiya Yojana",
    client: "Upsurge-Agency",
    year: "2025",
    category: "Government Scheme",
    role: "Instagram reel",
    heroImage: "/Image-990.jpg",
    link: "https://www.instagram.com/reel/DM__TanNAFs/"
  },
  {
    id: "short-form-4",
    title: "Business Analytics Tools",
    client: "Sample Edit",
    year: "2022",
    category: "Product Marketing",
    role: "Foreign Client- Russia",
    heroImage: "/uqBl5yyqTz4-HD.jpg",
    link: "https://www.youtube.com/watch?v=uqBl5yyqTz4&list=TLGG4a4HgO4otRwxMDEyMjAyNQ"
  },
  {
    id: "short-form-5",
    title: "Ancient Hindu Warrior",
    client: "AI Studio Edits",
    year: "2023",
    category: "Brand Content",
    role: "Instagram Reel",
    heroImage: "/rZI044Brnlk-HD.jpg",
    link: "https://www.youtube.com/watch?v=rZI044Brnlk&list=TLGG7YS6HmHNALIxMDEyMjAyNQ&t=2s"
  },
  {
    id: "short-form-6",
    title: "SIP in RD vs Bonds vs ETF",
    client: "Investing by Upsurge",
    year: "2023",
    category: "Social Content",
    role: "Youtube Shorts",
    heroImage: "/nl3BrqpL_jQ-HD.jpg",
    link: "https://www.youtube.com/shorts/nl3BrqpL_jQ"
  }
];

const longFormVideos: Project[] = [
  {
    id: "fintech-explainer",
    title: "WhatsApp AI Agent",
    client: "Kunaal Naik",
    year: "2025",
    category: "Explainer Animation",
    role: "Explainer Video",
    heroImage: "/o7adDf5tS9I-HD.jpg",
    link: "https://www.youtube.com/watch?v=o7adDf5tS9I"
  },
  {
    id: "music-video-indie",
    title: "Investment in Physical Gold",
    client: "Niraj Dugar",
    year: "2025",
    category: "Finance video",
    role: "Talking Head Video",
    heroImage: "/FT5K581K7ck-HD.jpg",
    link: "https://www.youtube.com/watch?v=FT5K581K7ck"
  },
  {
    id: "long-form-3",
    title: "The Skinny Fat Solution",
    client: "Dr. Anshul Sadhale",
    year: "2025",
    category: "Documentary",
    role: "Fitness Information Video",
    heroImage: "/xTbjs8TcRX4-HD.jpg",
    link: "https://www.youtube.com/watch?v=xTbjs8TcRX4"
  },
  {
    id: "long-form-4",
    title: "Placements at IIM - QNA",
    client: "Shruti Sonawane",
    year: "2024",
    category: "Educational Content",
    role: "Question and Answer Session",
    heroImage: "/d3od05LQN3k-HD.jpg",
    link: "https://www.youtube.com/watch?v=d3od05LQN3k"
  },
  {
    id: "long-form-5",
    title: "Maha Kumbh Mela 2025",
    client: "Good Vibe Show",
    year: "2023",
    category: "Review Content",
    role: "Documentary Style Green Screen",
    heroImage: "/Li1Y2q3Cpmc-HD.jpg",
    link: "https://www.youtube.com/watch?v=Li1Y2q3Cpmc"
  },
  {
    id: "long-form-6",
    title: "Top 23 Grocery Cards",
    client: "NIraj Dugar",
    year: "2025",
    category: "Brand Documentary",
    role: "Talking Head Finance Videoo",
    heroImage: "/q76T93KfxXQ-HD.jpg",
    link: "https://www.youtube.com/watch?v=q76T93KfxXQ"
  }
];

const podcasts: Project[] = [
  {
    id: "nonprofit-awareness",
    title: "Truth Behind Kashmir Conflicts",
    client: "Jai and Bharat show",
    year: "2023",
    category: "Social Impact",
    role: "3CAM Podcast",
    heroImage: "/imgi_2_image15.jpg",
    link: "https://www.youtube.com/watch?v=u6__HMDbA8k&t=56s"
  },
  {
    id: "podcast-2",
    title: "Sameer Anjaan Podcast",
    client: "Good Vibe Show",
    year: "2024",
    category: "Business Podcast",
    role: "Online Zoom Podcast",
    heroImage: "/zz8Lytdchj8-HD.jpg",
    link: "https://youtu.be/zz8Lytdchj8?t=69"
  },
  {
    id: "podcast-3",
    title: "Journey to Enlightenment",
    client: "Jai and Bharat show",
    year: "2022",
    category: "Technology Podcast",
    role: "3CAM Podcast",
    heroImage: "/r58hkgzGRf0-HD.jpg",
    link: "https://www.youtube.com/watch?v=r58hkgzGRf0"
  },
  {
    id: "podcast-4",
    title: "Ram mandir celebration",
    client: "Good Vibe Show",
    year: "2023",
    category: "Design Podcast",
    role: "Online Zoom Podcast",
    heroImage: "/dL4cFwyp5dQ-HD.jpg",
    link: "https://youtu.be/dL4cFwyp5dQ?t=102"
  },
  {
    id: "podcast-5",
    title: "Forensics Expert Gaurav Batra",
    client: "Jai and Bharat Show",
    year: "2023",
    category: "Wellness Podcast",
    role: "3CAM Podcast",
    heroImage: "/6Rb2yRRbyDQ-HD.jpg",
    link: "https://youtu.be/6Rb2yRRbyDQ?si=cVcGqa8jhjZjGVgT"
  },
  {
    id: "podcast-6",
    title: "Altaf Raja Podcast",
    client: "Good Vibe Show",
    year: "2024",
    category: "Finance Podcast",
    role: "Online Zoom Podcast",
    heroImage: "/HaJZ1xOlF6k-HD.jpg",
    link: "https://youtu.be/HaJZ1xOlF6k?t=40"
  }
];

// Project Card Component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80";
          }}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Play className="w-16 h-16 text-white" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        <p className="text-muted-foreground mb-2">{project.client}</p>
        <p className="text-sm text-muted-foreground">{project.role}</p>
      </div>
    </a>
  );
};

// Section Component with See More functionality
const ProjectSection = ({ 
  title, 
  projects, 
  icon: Icon,
  sectionId
}: { 
  title: string; 
  projects: Project[]; 
  icon: any;
  sectionId: string;
}) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(`#${sectionId} .fade-in-section`).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [showAll, sectionId]);

  return (
    <div className="mb-20" id={sectionId}>
      <div className="flex items-center gap-3 mb-8">
        <Icon className="w-8 h-8 text-accent" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {title}
        </h2>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-accent/50 to-transparent ml-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id}
            className="fade-in-section animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg transition-all duration-300 hover:shadow-lg font-medium"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

const Work = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            My Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-6xl mx-auto">
            Diverse media expertise: long-form videos, short reels, podcasts, and creative brand content
          </p>
        </div>

        {/* Short Form Videos Section */}
        <ProjectSection 
          title="Short-Form Videos" 
          projects={shortFormVideos} 
          icon={Clock}
          sectionId="short-form-section"
        />

        {/* Long Form Videos Section */}
        <ProjectSection 
          title="Long-Form Videos" 
          projects={longFormVideos} 
          icon={Play}
          sectionId="long-form-section"
        />

        {/* Podcasts Section */}
        <ProjectSection 
          title="Podcasts" 
          projects={podcasts} 
          icon={Mic}
          sectionId="podcasts-section"
        />
      </div>

      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Work;