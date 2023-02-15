import displayMessage from "./Messages";
import ProjectLocalStorage from "./ProjectLocalStorage";

const readOneProject = (name) => {
  const projects = ProjectLocalStorage.getProjects();
  const index = projects.findIndex((project) => project.name === name);
  if (index !== -1) {
    return projects[index];
  }
  displayMessage("This project does not exist!");
  return -1;
};

export default readOneProject;
