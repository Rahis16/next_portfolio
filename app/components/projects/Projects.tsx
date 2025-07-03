// components/Projects.tsx
import ProjectApi from "./ProjectApi";
import ProjectList from "./ProjectList";// client component

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 " style={{backgroundColor:"var(--bg-color)"}}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectApi/>
      </div>
    </section>
  );
};

export default Projects;
