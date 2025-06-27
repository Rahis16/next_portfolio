// app/about/page.tsx (or wherever you're using the component)
import axios from "axios";
import ProjectList from "./ProjectList";

const ProjectApi = async () => {
  const res = await axios.get("http://localhost:8000/api/projects");
  const projectData = res.data;

  return <ProjectList data={projectData} />;
};

export default ProjectApi;
