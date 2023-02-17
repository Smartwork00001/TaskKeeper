import displayMessage from "../Messages";
import Project from "./ProjectClass";
import displayProjectsOnDom from "./ProjectDisplayDOM";
import ProjectLocalStorage from "./ProjectLocalStorage";
import Validations from "../Validations";

const addProject = (name, desc) => {
  if (Validations.validateName(name) && Validations.validateDesc(desc)) {
    const projects = ProjectLocalStorage.getProjects();
    if (projects.findIndex((project) => project.name === name) !== -1) {
      displayMessage("This project already exists!");
      return;
    }
    projects.push(new Project(name, desc));
    ProjectLocalStorage.updateProject(projects);
    displayMessage(`Project ${name} created`);
    displayProjectsOnDom();
  } else {
    displayMessage(`Please enter valid data
    \nName must be only letters and numbers between 1 and 50 characters
    \nDescription must be between 1 and 180 characters`);
  }
  
};

export default addProject;
