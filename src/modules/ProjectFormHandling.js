import displayMessage from "./Messages";
import addProject from "./ProjectAddProject";
import Validations from "./Validations";

const createProjectButton = document.querySelector(".create-project-button");
const addProjectFormDiv = document.querySelector(".add-project-form");
const addProjectDiv = document.querySelector(".add-project");

const createProject = function (event) {
  event.preventDefault();
  const form = document.forms.addProjectForm;
  const formData = new FormData(form);
  if (
    Validations.validateName(formData.get("projectName")) &&
    Validations.validateDesc(formData.get("projectDesc"))
  ) {
    addProject(formData.get("projectName"), formData.get("projectDesc"));
  } else {
    displayMessage(`Please enter valid data
    \nName must be only letters and numbers between 1 and 50 characters
    \nDescription must be between 1 and 180 characters`);
  }
  addProjectFormDiv.classList.add('hidden');
  form.reset();
};

createProjectButton.addEventListener("click", createProject);
addProjectDiv.addEventListener("click", () => {
  addProjectFormDiv.classList.remove("hidden");
});

export default createProject;
