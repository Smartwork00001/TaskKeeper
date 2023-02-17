import ProjectLocalStorage from "./ProjectLocalStorage";

const displayProjectsOnDom = () => {
  const projectDisplayDiv = document.querySelector(".project-display");
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
