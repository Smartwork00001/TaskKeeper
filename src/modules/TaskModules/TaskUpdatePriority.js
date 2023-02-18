import displayMessage from '../Messages';
import Validations from '../Validations';
import displaySingleTaskDOM from './TaskDisplaySingleTaskDOM';
import TaskLocalStorage from './TaskLocalStorage';

const updateTaskPriority = (projectName,taskName, priority) => {
   if(Validations.validateNotes(priority)){
    const tasks = TaskLocalStorage.getTask(projectName);
    const task = tasks.find(task2 => task2.name === taskName);
    task.priority = priority;
    TaskLocalStorage.updateTask(projectName,tasks);
    displaySingleTaskDOM(projectName,taskName);
   }else{
    displayMessage('Invalid!');
   }
}

export default updateTaskPriority;