import ProjectLocalStorage from "./ProjectLocalStorage";

const displayProjectsOnDom = () => {
  const singleProjectDisplayDiv = document.querySelector('.single-project-display');
  const singleProjectTasksDiv = document.querySelector('.single-project-tasks');
  const singleTaskDisplayDiv = document.querySelector('.single-task-display');
  if(!singleProjectDisplayDiv.classList.contains("hidden")){
    singleProjectDisplayDiv.classList.add("hidden");
  }
  if(!singleProjectTasksDiv.classList.contains("hidden")){
    singleProjectTasksDiv.classList.add("hidden");
  }
  if(!singleTaskDisplayDiv.classList.contains("hidden")){
    singleTaskDisplayDiv.classList.add("hidden");
  }

  const projectDisplayDiv = document.querySelector(".project-display");
  if(projectDisplayDiv.classList.contains("hidden")){
    projectDisplayDiv.classList.remove("hidden");
  }
  projectDisplayDiv.innerHTML = '';
  const projects = ProjectLocalStorage.getProjects();
  projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `<div class="project-name small-text">${project.name}</div>
    <div class="project-desc small-text">${project.desc}</div>
    <div class="project-date small-text">${project.date}</div>`;
    projectDisplayDiv.appendChild(projectDiv);
    
  });
};

export default displayProjectsOnDom;
