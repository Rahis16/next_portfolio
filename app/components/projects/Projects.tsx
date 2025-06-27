// components/Projects.tsx
import ProjectList from "./ProjectList";// client component

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
