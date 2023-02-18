import displayMessage from "../Messages";
import Validations from "../Validations";
import displaySingleTaskDOM from "./TaskDisplaySingleTaskDOM";
import TaskLocalStorage from "./TaskLocalStorage";

const updateTaskDue = (projectName, taskName, due) => {
  if (Validations.validateDate(due)) {
    const tasks = TaskLocalStorage.getTask(projectName);
    const task = tasks.find((task2) => task2.name === taskName);
    task.due = due;
    TaskLocalStorage.updateTask(projectName, tasks);
    displaySingleTaskDOM(projectName, taskName);
  }else{
    displayMessage('Invalid!');
  }
};

export default updateTaskDue;
