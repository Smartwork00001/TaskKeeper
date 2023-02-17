import "./style.css";
import displayMessage from "./modules/Messages";
import Project from "./modules/ProjectModules/ProjectClass";
import createProject from "./modules/ProjectModules/ProjectFormHandling";
import addProject from "./modules/ProjectModules/ProjectAddProject";
import removeProject from "./modules/ProjectModules/ProjectRemoveProject";
import updateProjectName from "./modules/ProjectModules/ProjectUpdateProjectName";
import updateProjectDesc from "./modules/ProjectModules/ProjectUpdateProjectDesc";
import ProjectLocalStorage from "./modules/ProjectModules/ProjectLocalStorage";
import readOneProject from "./modules/ProjectModules/ProjectReadOneProject";
import displayProjectsOnDom from "./modules/ProjectModules/ProjectDisplayDOM";
import displaySingleProject from "./modules/ProjectModules/ProjectDisplaySingleProjectDOM";
import askUser from "./modules/AskUser";
import GlobalValues from "./modules/GlobalValues";

/* imports for tasks */
import addTask from "./modules/TaskModules/TaskAddTask";
/* end of imports for tasks */

localStorage.clear();
addProject("Default Project", "This is the default project");
addProject("First Project", "This is the first project");
addProject("Third Project", "This is the third project");
addProject("Fourth Project", "This is the fourth project");
addProject("Fifth Project", "This is the fifth project");

const projectDisplayDiv = document.querySelector(".project-display");
const myProjectsButton = document.querySelector(".my-projects");
const singleProjectDisplayDiv = document.querySelector(
  ".single-project-display"
);
const singleProjectTasksDiv = document.querySelector(".single-project-tasks");
const singleProjectRenameButton = document.querySelector(
  ".single-project-rename"
);
const singleProjectRedescButton = document.querySelector(
  ".single-project-redesc"
);

const displaySingleProjectHandler = function (event) {
  const project = event.target.closest(".project");
  if (project) {
    if (!projectDisplayDiv.classList.contains("hidden")) {
      projectDisplayDiv.classList.add("hidden");
    }
    if (singleProjectTasksDiv.classList.contains("hidden")) {
      singleProjectTasksDiv.classList.remove("hidden");
    }
    displaySingleProject(project.querySelector(".project-name").textContent);
  }
};

const displayAllProjectsHandler = function () {
  if (projectDisplayDiv.classList.contains("hidden")) {
    projectDisplayDiv.classList.remove("hidden");
  }
  if (!singleProjectTasksDiv.classList.contains("hidden")) {
    singleProjectTasksDiv.classList.add("hidden");
  }
  if (!singleProjectDisplayDiv.classList.contains("hidden")) {
    singleProjectDisplayDiv.classList.add("hidden");
  }
};

const renameProjectHandler = function (event) {
  const project = event.target.closest(".single-project-details");
  const projectNameDiv = project.querySelector(".single-project-name");
  const projectName = projectNameDiv.textContent;
  GlobalValues.setProjectName(projectName);
  GlobalValues.setAskUserTask("changeProjectName");
  askUser("enter new name");
};

const redescProjectHandler = function (event) {
  const project = event.target.closest(".single-project-details");
  const projectNameDiv = project.querySelector(".single-project-name");
  const projectName = projectNameDiv.textContent;
  GlobalValues.setProjectName(projectName);
  GlobalValues.setAskUserTask("changeProjectDesc");
  askUser("enter new desc");
};

projectDisplayDiv.addEventListener("click", displaySingleProjectHandler);
myProjectsButton.addEventListener("click", displayAllProjectsHandler);
singleProjectRenameButton.addEventListener("click", renameProjectHandler);
singleProjectRedescButton.addEventListener("click", redescProjectHandler);

/* End of projects */
addTask("Default Project",'Task 1','Desc 1','20-2-2023','low','notes on task');
addTask("Default Project",'Task 2','Desc 2','21-2-2023','normal','notes on task');
addTask("Default Project",'Task 3','Desc 3','22-2-2023','high','notes on task');
/* Start of tasks */


/* End of tasks */ 