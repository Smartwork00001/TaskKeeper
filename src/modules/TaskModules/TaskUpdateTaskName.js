import displaySingleTaskDOM from './TaskDisplaySingleTaskDOM';
import TaskLocalStorage from './TaskLocalStorage';

const updateTaskName = (projectName,oldName, newName) => {
    const tasks = TaskLocalStorage.getTask(projectName);
    const task = tasks.find(task2 => task2.name === oldName);
    task.name = newName;
    TaskLocalStorage.updateTask(projectName,tasks);
    displaySingleTaskDOM(projectName,newName);
}

export default updateTaskName;