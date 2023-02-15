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

localStorage.clear();
addProject("Default Project", "This is the default project");
addProject("First Project", "This is the first project");

displayProjectsOnDom();