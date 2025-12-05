import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];
  
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/work">Back to Work</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Image */}
      <div className="w-full h-[60vh] relative overflow-hidden animate-fade-in">
        <img
          src={"/influencer-their-pet-creating-content-online-spaces-social-media.jpg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto -mt-20 relative z-10 animate-slide-up">
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
              <span>{project.client}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {project.role}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-lg font-bold text-foreground">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto mt-20 space-y-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Process</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.process}
            </p>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Gallery */}
        {project.images.length > 0 && (
          <div className="max-w-6xl mx-auto mt-20 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video overflow-hidden rounded-xl"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Outcome */}
        <div className="max-w-4xl mx-auto mt-20 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">The Outcome</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {project.outcome}
          </p>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="bg-muted p-8 rounded-xl mt-8">
              <p className="text-xl italic text-foreground mb-4">
                "{project.testimonial.quote}"
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold">{project.testimonial.author}</p>
                <p>{project.testimonial.position}</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-border">
          <div className="flex justify-between items-center gap-4">
            <Button
              variant="outline"
              onClick={() => navigate("/work")}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Work
            </Button>

            <div className="flex gap-4">
              {prevProject && (
                <Button
                  variant="outline"
                  asChild
                  className="flex items-center gap-2"
                >
                  <Link to={`/project/${prevProject.id}`}>
                    <ArrowLeft size={20} />
                    Previous
                  </Link>
                </Button>
              )}
              {nextProject && (
                <Button
                  asChild
                  className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white"
                >
                  <Link to={`/project/${nextProject.id}`}>
                    Next
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
