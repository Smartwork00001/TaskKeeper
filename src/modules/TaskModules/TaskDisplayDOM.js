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
    if (tasksDisplayDiv.classList.contains("hidden")) {
      tasksDisplayDiv.classList.remove("hidden");
    }
    tasksDisplayDiv.innerHTML = "";
    const tasks = TaskLocalStorage.getTask(projectName);

    const singleTaskDivTemp = document.createElement("div");
    singleTaskDivTemp.classList.add("task");
    singleTaskDivTemp.innerHTML = `
      <div class="display-task-no small-text hidden">Task No</div>
      <div class="display-task-project small-text hidden">Project</div>
      <div class="display-task-name small-text">Name</div>
      <div class="display-task-date small-text">Created on</div>
      <div class="display-task-due small-text">Due date</div>
      <div class="display-task-priority small-text">Priority</div>
      <div class="display-task-notes small-text">Notes</div>
      <div class="display-task-status small-text">Status</div>`;
    tasksDisplayDiv.appendChild(singleTaskDivTemp);

    let counter = 0;

    tasks.forEach((task) => {
      counter +=1;
      const singleTaskDiv = document.createElement("div");
      singleTaskDiv.classList.add("task");
      singleTaskDiv.innerHTML = `
      <div class="display-task-no small-text hidden">${counter}</div>
      <div class="display-task-project small-text hidden">${task.project}</div>
      <div class="display-task-name small-text">${task.name}</div>
      <div class="display-task-date small-text">${task.date}</div>
      <div class="display-task-due small-text">${task.due}</div>
      <div class="display-task-priority small-text">${task.priority}</div>
      <div class="display-task-notes small-text">${task.notes}</div>
      <div class="display-task-status small-text">${task.status}</div>`;
      tasksDisplayDiv.appendChild(singleTaskDiv);
    });
  }
};

export default displayAllTasksDOM;
