import TaskLocalStorage from "./TaskLocalStorage";

const displayAllTasksDOM = () => {
  const singleTaskDisplayDiv = document.querySelector(".single-task-display");
  const singleProjectTasksDiv = document.querySelector(".single-project-tasks");
  const tasksDisplayDiv = document.querySelector(".tasks-display");
  const singleProjectNameDiv = document.querySelector(".single-project-name");
  const projectName = singleProjectNameDiv.textContent;
  if (projectName) {
    if (!singleTaskDisplayDiv.classList.contains("hidden")) {
      singleTaskDisplayDiv.classList.add("hidden");
    }
    if (singleProjectTasksDiv.classList.contains("hidden")) {
      singleProjectTasksDiv.classList.remove("hidden");
    }
    tasksDisplayDiv.innerHTML = "";
    const tasks = TaskLocalStorage.getTask(projectName);
    tasks.forEach((task) => {
      const singleTaskDiv = document.createElement("div");
      singleTaskDiv.classList.add("task");
      singleTaskDiv.innerHTML = `
      <div class="display-task-project hidden">${task.project}</div>
      <div class="display-task-name">${task.name}</div>
      <div class="display-task-date">${task.date}</div>
      <div class="display-task-due">${task.due}</div>
      <div class="display-task-priority">${task.priority}</div>
      <div class="display-task-notes">${task.notes}</div>
      <div class="display-task-status">${task.status}</div>`;
      tasksDisplayDiv.appendChild(singleTaskDiv);
    });
  }
};

export default displayAllTasksDOM;
