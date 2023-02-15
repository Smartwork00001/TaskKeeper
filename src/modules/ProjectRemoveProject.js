import displayMessage from "./Messages";
import ProjectLocalStorage from "./ProjectLocalStorage";

const removeProject = (name) => {
  const projects = ProjectLocalStorage.getProjects();
  const index = projects.findIndex((project) => project.name === name);
  if (index !== -1) {
    projects.splice(index, 1);
  } else {
    displayMessage(`Project ${name} does not exist`);
    return;
  }

  ProjectLocalStorage.updateProject(projects);
  displayMessage(`Project ${name} is removed!`);
  console.log(localStorage.getItem("projects"));
};

export default removeProject;
