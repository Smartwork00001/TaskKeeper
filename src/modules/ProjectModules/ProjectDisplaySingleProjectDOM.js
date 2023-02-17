import readOneProject from "./ProjectReadOneProject";

const displaySingleProject = (name) => {
  const project = readOneProject(name);
  const singleProjectDisplayDiv = document.querySelector(".single-project-display");
  if (singleProjectDisplayDiv.classList.contains("hidden")) {
    singleProjectDisplayDiv.classList.remove("hidden");
  }
  singleProjectDisplayDiv.querySelector('.single-project-name').textContent = project.name;
  singleProjectDisplayDiv.querySelector('.single-project-desc').textContent = project.desc;
  singleProjectDisplayDiv.querySelector('.single-project-date').textContent = project.date;
};

export default displaySingleProject;
