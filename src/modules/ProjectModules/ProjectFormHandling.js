import addProject from "./ProjectAddProject";

const createProjectButton = document.querySelector(".create-project-button");
const addProjectFormDiv = document.querySelector(".add-project-form");
const addProjectDiv = document.querySelector(".add-project");

const createProject = function (event) {
  event.preventDefault();
  const form = document.forms.addProjectForm;
  const formData = new FormData(form);
  addProject(formData.get("projectName"), formData.get("projectDesc"));
  addProjectFormDiv.classList.add('hidden');
  form.reset();
};

createProjectButton.addEventListener("click", createProject);
addProjectDiv.addEventListener("click", () => {
  addProjectFormDiv.classList.remove("hidden");
});

export default createProject;
