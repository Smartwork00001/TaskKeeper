import TaskLocalStorage from "./TaskLocalStorage";

const displaySingleTaskDOM = (project,name) => {
    const tasksDisplayDiv = document.querySelector('.tasks-display');
    const singleTaskDisplayDiv = document.querySelector('.single-task-display');
    if(!tasksDisplayDiv.classList.contains("hidden")){
        tasksDisplayDiv.classList.add("hidden");
    }
    if(singleTaskDisplayDiv.classList.contains("hidden")){
        singleTaskDisplayDiv.classList.remove("hidden");
    }
    const singleTaskProjectDiv = document.querySelector('.single-task-project');
    const singleTaskNameDiv = document.querySelector('.single-task-name');
    const singleTaskDescDiv = document.querySelector('.single-task-desc');
    const singleTaskDateDiv = document.querySelector('.single-task-date');
    const singleTaskDueDiv = document.querySelector('.single-task-due');
    const singleTaskPriorityDiv = document.querySelector('.single-task-priority');
    const singleTaskNotesDiv = document.querySelector('.single-task-notes');
    const singleTaskStatusDiv = document.querySelector('.single-task-status');

    const task = TaskLocalStorage.getSingleTask(project,name);
    singleTaskProjectDiv.textContent = task.project;
    singleTaskNameDiv.textContent = task.name;
    singleTaskDescDiv.textContent = task.desc;
    singleTaskDueDiv.textContent = task.due;
    singleTaskDateDiv.textContent = task.date;
    singleTaskPriorityDiv.textContent = task.priority;
    singleTaskNotesDiv.textContent = task.notes;
    singleTaskStatusDiv.textContent = task.status;
}

export default displaySingleTaskDOM;