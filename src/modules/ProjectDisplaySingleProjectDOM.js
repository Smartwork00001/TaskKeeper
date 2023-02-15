import readOneProject from "./ProjectReadOneProject";

const displaySingleProject = (name) => {
    const project = readOneProject(name);
  const singleProjectDisplayDiv = document.querySelector(
    ".single-project-display"
  );
  if (singleProjectDisplayDiv.classList.contains("hidden")) {
    singleProjectDisplayDiv.classList.remove("hidden");
  }
  singleProjectDisplayDiv.innerHTML = `<div class="single-project-name">${project.name}</div>
      <div class="single-project-desc">${project.desc}</div>
      <div class="single-project-date">${project.date}</div>`;
};

export default displaySingleProject;
