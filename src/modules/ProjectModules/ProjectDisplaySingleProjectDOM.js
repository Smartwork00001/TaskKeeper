import readOneProject from "./ProjectReadOneProject";

const displaySingleProject = (name) => {
  const project = readOneProject(name);
  const singleProjectDisplayDiv = document.querySelector('.single-project-display');
  const singleTaskDisplayDiv = document.querySelector('.single-task-display');
  const projectDisplayDiv = document.querySelector(".project-display");

  if(singleProjectDisplayDiv.classList.contains("hidden")){
    singleProjectDisplayDiv.classList.remove("hidden");
  }
  if(!singleTaskDisplayDiv.classList.contains("hidden")){
    singleTaskDisplayDiv.classList.add("hidden");
  }
  if(!projectDisplayDiv.classList.contains("hidden")){
    projectDisplayDiv.classList.add("hidden");
  }
  singleProjectDisplayDiv.querySelector('.single-project-name').textContent = project.name;
  singleProjectDisplayDiv.querySelector('.single-project-desc').textContent = project.desc;
  singleProjectDisplayDiv.querySelector('.single-project-date').textContent = project.date;
};

export default displaySingleProject;
