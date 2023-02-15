import displayMessage from "./Messages";

const updateProjectDesc = (name, newDesc) => {
  const projects = JSON.parse(localStorage.getItem("projects"));
  const index = projects.findIndex((project) => project.name === name);
  if (index !== -1) {
    console.log(projects[index].desc = newDesc);
  }else{
    displayMessage(`Project ${name} does not exist`);
    return;
  }

  localStorage.removeItem("projects");
  localStorage.setItem("projects", JSON.stringify(projects));
  displayMessage(`Project ${name} desc is changed!`);
  console.log(localStorage.getItem("projects"));
  
};

export default updateProjectDesc;
