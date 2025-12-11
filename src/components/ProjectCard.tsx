import { Link } from "react-router-dom";
import { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl shadow bg-card hover-lift",
        className
      )}
    >
      <div className="relative h-54 overflow-hidden bg-gray-200">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 aspect-video transition-transform duration-500"
          loading="lazy"
        />
        <div className=" rounded-lg absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 gap-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to={project.link} target="_blank">
            <span className=" text-white text-lg font-semibold px-6 py-3 bg-accent rounded-full">
              View Video
            </span>
          </Link>
          {/* <Link
      to={`/project/${project.id}`}
    >      <span className="text-white text-lg font-semibold px-6 py-3 bg-accent rounded-full">
            View Project
          </span></Link> */}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-2 text-sm text-muted-foreground">
          <span>{project.client}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-xl font-bold line-clamp-1 text-foreground mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.problem.substring(0, 120)}...
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
