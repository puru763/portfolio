import "./Project.css";
import ProjectCart from "./ProjectCart/ProjectCart";

const Project = () => {
  return (
    <div className="project-container">
      <div className="p-head">Recent Projects</div>

      <ProjectCart />
    </div>
  );
};

export default Project;
