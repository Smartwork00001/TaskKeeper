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
import displayAllTasksDOM from "./modules/TaskModules/TaskDisplayDOM";
/* end of imports for tasks */

/* Start of Project JavaScript */
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
const singleProjectRemoveButton = document.querySelector(
  ".single-project-remove"
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
    displayAllTasksDOM();
  }
};

const displayAllProjectsHandler = function () {
  displayProjectsOnDom();
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

const removeProjectHandler = function (event) {
  const project = event.target.closest(".single-project-details");
  const projectNameDiv = project.querySelector(".single-project-name");
  const projectName = projectNameDiv.textContent;
  removeProject(projectName);
};

projectDisplayDiv.addEventListener("click", displaySingleProjectHandler);
myProjectsButton.addEventListener("click", displayAllProjectsHandler);
singleProjectRenameButton.addEventListener("click", renameProjectHandler);
singleProjectRedescButton.addEventListener("click", redescProjectHandler);
singleProjectRemoveButton.addEventListener("click", removeProjectHandler);

/* End of Project JavaScript */
/* Start of tasks javascript */
addTask(
  "Default Project",
  "Task 1",
  "Desc 1",
  "2023-02-20",
  "low",
  "notes on task"
);
addTask(
  "Default Project",
  "Task 2",
  "Desc 2",
  "2023-2-21",
  "normal",
  "notes on task"
);
addTask(
  "Default Project",
  "Task 3",
  "Desc 3",
  "2023-2-22",
  "high",
  "notes on task"
);

const addTaskButton = document.querySelector(".add-task");
const createTaskButton = document.querySelector(".create-task-button");
const myTasksButton = document.querySelector(".my-tasks");
const tasksDisplayDiv = document.querySelector('.tasks-display');
const singleTaskDisplayDiv = document.querySelector('.single-task-display');

const addTaskHandler = function () {
  const addTaskForm = document.querySelector(".add-task-form");
  if (addTaskForm.classList.contains("hidden")) {
    addTaskForm.classList.remove("hidden");
  }
};

const createTaskHandler = function (event) {
  event.preventDefault();
  const singleProjectNameDiv = document.querySelector(".single-project-name");
  const projectName = singleProjectNameDiv.textContent;

  const form = document.forms.addTaskForm;
  const formData = new FormData(form);
  addTask(
    projectName,
    formData.get("taskName"),
    formData.get("taskDesc"),
    formData.get("taskDue"),
    formData.get("taskPriority"),
    formData.get("taskNotes")
  );
};

const displayAllTasksHandler = function(){
  displayAllTasksDOM();
}

addTaskButton.addEventListener("click", addTaskHandler);
createTaskButton.addEventListener("click", createTaskHandler);
myTasksButton.addEventListener('click',displayAllTasksHandler)
/* End of tasks javascript */
