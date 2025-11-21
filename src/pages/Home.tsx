import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6"
        style={{
          background: `linear-gradient(135deg, hsl(var(--hero-gradient-start)), hsl(var(--hero-gradient-end)))`,
        }}
      >
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Motion Designer
              <br />
              <span className="text-accent">Visual Storyteller</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Crafting compelling visual stories for brands that dare to stand out
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full"
              >
                <Link to="/work">View My Work</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-full"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white" size={32} />
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="fade-in-section mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my approach to visual storytelling
              and brand communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="fade-in-section"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-section">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full"
            >
              <Link to="/work">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="fade-in-section max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-card rounded-xl">
                <Play className="text-accent mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">Motion Design</h3>
                <p className="text-muted-foreground">
                  Dynamic animations and kinetic typography that bring brands to life
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl">
                <Play className="text-accent mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">Video Editing</h3>
                <p className="text-muted-foreground">
                  Precision editing and color grading for impactful storytelling
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl">
                <Play className="text-accent mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">Brand Films</h3>
                <p className="text-muted-foreground">
                  Compelling narratives that connect brands with their audiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Have a project in mind? I'd love to hear about it and explore how we can
            bring your vision to life.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full"
          >
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
