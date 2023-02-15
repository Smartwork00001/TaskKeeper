import displayMessage from "./Messages";
import Project from "./ProjectClass";
import displayProjectsOnDom from "./ProjectDisplayDOM";
import ProjectLocalStorage from "./ProjectLocalStorage";

const addProject = (name, desc) => {
  const projects = ProjectLocalStorage.getProjects();
  if (projects.findIndex((project) => project.name === name) !== -1) {
    displayMessage("This project already exists!");
    return;
  }
  projects.push(new Project(name, desc));
  ProjectLocalStorage.updateProject(projects);
  displayMessage(`Project ${name} created`);
  displayProjectsOnDom();
};

export default addProject;
