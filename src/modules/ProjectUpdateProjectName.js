import displayMessage from "./Messages";

const updateProjectName = (name, newName) => {
  const projects = JSON.parse(localStorage.getItem("projects"));
  const index = projects.findIndex((project) => project.name === name);
  if (index !== -1) {
    console.log((projects[index].name = newName));
  } else {
    displayMessage(`Project ${name} does not exist`);
    return;
  }

  localStorage.removeItem("projects");
  localStorage.setItem("projects", JSON.stringify(projects));
  displayMessage(`Project ${name} is changed to ${newName}!`);
  console.log(localStorage.getItem("projects"));
};

export default updateProjectName;
