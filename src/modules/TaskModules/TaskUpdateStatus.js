import displayMessage from '../Messages';
import Validations from '../Validations';
import displaySingleTaskDOM from './TaskDisplaySingleTaskDOM';
import TaskLocalStorage from './TaskLocalStorage';

const updateTaskStatus = (projectName,taskName, status) => {
   if(Validations.validateNotes(status)){
    const tasks = TaskLocalStorage.getTask(projectName);
    const task = tasks.find(task2 => task2.name === taskName);
    task.status = status;
    TaskLocalStorage.updateTask(projectName,tasks);
    displaySingleTaskDOM(projectName,taskName);
   }else{
    displayMessage('Invalid!');
   }
}

export default updateTaskStatus;