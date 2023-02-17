import displayMessage from "../Messages";
import Validations from "../Validations";
import displaySingleProject from "./ProjectDisplaySingleProjectDOM";
import ProjectLocalStorage from "./ProjectLocalStorage";

const updateProjectDesc = (name, newDesc) => {
  const projects = ProjectLocalStorage.getProjects();
  const index = projects.findIndex((project) => project.name === name);
  if (index !== -1 && Validations.validateDesc(newDesc)) {
    projects[index].desc = newDesc;
  } else {
    displayMessage(
      `Project ${name} does not exist\n or desc <0 or >140 characters`
    );
    return;
  }

  ProjectLocalStorage.updateProject(projects);
  displayMessage(` Project ${name} desc is changed!`);
  displaySingleProject(name);
};

export default updateProjectDesc;
