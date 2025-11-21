import { useEffect } from "react";
import { personalInfo, skills, tools } from "@/data/portfolio";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
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

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            {personalInfo.title}
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-20 fade-in-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  Phone
                </h3>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  Location
                </h3>
                <p className="text-foreground">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20 fade-in-section">
          <h2 className="text-3xl font-bold text-foreground mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="fade-in-section">
          <h2 className="text-3xl font-bold text-foreground mb-8">Tools & Software</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div
                key={tool}
                className="p-4 bg-card border border-border rounded-lg text-center hover-lift"
              >
                <p className="font-medium text-foreground">{tool}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center p-12 bg-muted rounded-2xl fade-in-section">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects and creative opportunities.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white"
          >
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
