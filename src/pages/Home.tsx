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
        className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source
              src="https://cdn.pixabay.com/video/2023/05/02/160769-823980038_large.mp4"
              type="video/mp4"
            />
          </video>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, hsl(var(--hero-gradient-start) / 0.85), hsl(var(--hero-gradient-end) / 0.85))`,
            }}
          />
        </div>

        {/* Floating Motion Graphics Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Circle 1 */}
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20 blur-xl animate-float" />
          
          {/* Floating Square */}
          <div className="absolute top-40 right-20 w-24 h-24 bg-primary/20 blur-lg animate-float rotate-45" style={{ animationDelay: '1s' }} />
          
          {/* Floating Circle 2 */}
          <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-accent/30 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Rotating Ring */}
          <div className="absolute top-1/3 right-1/4 w-48 h-48 border-4 border-accent/30 rounded-full animate-rotate-slow" />
          
          {/* Pulsing Circle */}
          <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-primary/20 blur-lg animate-pulse-glow" />
          
          {/* Small floating dots */}
          <div className="absolute top-1/2 left-20 w-4 h-4 rounded-full bg-accent animate-scale-pulse" />
          <div className="absolute top-1/4 right-1/3 w-6 h-6 rounded-full bg-white/40 animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-5 h-5 rounded-full bg-accent/60 animate-scale-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Designer Image with Cool Animation */}
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/50 animate-scale-in shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                  alt="Naveen Sundriyal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent border-r-accent animate-rotate-slow" />
              </div>
              {/* Floating icons around image */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-xl flex items-center justify-center animate-float shadow-lg">
                <Play className="text-white" size={32} />
              </div>
            </div>

            {/* Text Content */}
            <div className="max-w-2xl text-center lg:text-left space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                <span className="inline-block animate-slide-up">Motion Designer</span>
                <br />
                <span className="inline-block text-accent animate-slide-up gradient-text bg-gradient-to-r from-accent to-white bg-clip-text" style={{ animationDelay: '0.2s' }}>
                  Visual Storyteller
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Crafting compelling visual stories for brands that dare to stand out
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/work">View My Work</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ArrowDown className="text-white drop-shadow-lg" size={32} />
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
