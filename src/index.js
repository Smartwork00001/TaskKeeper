import "./style.css";
import displayMessage from "./modules/Messages";
import Project from "./modules/ProjectClass";
import createProject from "./modules/ProjectFormHandling";
import addProject from "./modules/ProjectAddProject";
import removeProject from "./modules/ProjectRemoveProject";
import updateProjectName from "./modules/ProjectUpdateProjectName";
import updateProjectDesc from "./modules/ProjectUpdateProjectDesc";
import ProjectLocalStorage from "./modules/ProjectLocalStorage";
import readOneProject from "./modules/ProjectReadOneProject";
import displayProjectsOnDom from "./modules/ProjectDisplayDOM";
import displaySingleProject from "./modules/ProjectDisplaySingleProjectDOM";

localStorage.clear();
addProject("Default Project", "This is the default project");
addProject("First Project", "This is the first project");

const projectDisplayDiv = document.querySelector(".project-display");
const myProjectsButton = document.querySelector(".my-projects");


const projectDisplayHandler = function (event) {
  const project = event.target.closest(".project");
  if (project) {
    if (!projectDisplayDiv.classList.contains("hidden")) {
      projectDisplayDiv.classList.add("hidden");
    }
    displaySingleProject(project.querySelector('.project-name').textContent);
  }
};

projectDisplayDiv.addEventListener("click", projectDisplayHandler);
myProjectsButton.addEventListener("click", () => {
  if (projectDisplayDiv.classList.contains("hidden")) {
    projectDisplayDiv.classList.remove("hidden");
  }
});
