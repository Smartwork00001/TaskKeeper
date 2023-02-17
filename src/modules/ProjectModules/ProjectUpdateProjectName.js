import displayMessage from "../Messages";
import displaySingleProject from "./ProjectDisplaySingleProjectDOM";
import ProjectLocalStorage from "./ProjectLocalStorage";

const updateProjectName = (name, newName) => {
  const projects = ProjectLocalStorage.getProjects();
  const index = projects.findIndex((project) => project.name === name);
  if (index === -1) {
    projects[index].name = newName;
  } else {
    displayMessage(`Project ${name} does not exist`);
    return;
  }

  ProjectLocalStorage.updateProject(projects);
  displayMessage(`Project ${name} is changed to ${newName}!`);
  displaySingleProject(newName);
};

export default updateProjectName;
