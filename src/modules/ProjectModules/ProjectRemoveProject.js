import displayMessage from "../Messages";
import TaskLocalStorage from "../TaskModules/TaskLocalStorage";
import displayProjectsOnDom from "./ProjectDisplayDOM";
import ProjectLocalStorage from "./ProjectLocalStorage";

const removeProject = (name) => {
  const projects = ProjectLocalStorage.getProjects();
  const index = projects.findIndex((project) => project.name === name);
  if (index !== -1) {
    projects.splice(index, 1);
    TaskLocalStorage.removeProject(name);
    ProjectLocalStorage.updateProject(projects);
    displayMessage(`Project ${name} is removed!`);
    displayProjectsOnDom();
  } else {
    displayMessage(`Project ${name} does not exist`);
  }
};

export default removeProject;
