import displayMessage from '../Messages';
import Validations from '../Validations';
import displaySingleTaskDOM from './TaskDisplaySingleTaskDOM';
import TaskLocalStorage from './TaskLocalStorage';

const updateTaskDesc = (projectName,taskName, desc) => {
   if(Validations.validateDesc(desc)){
    const tasks = TaskLocalStorage.getTask(projectName);
    const task = tasks.find(task2 => task2.name === taskName);
    task.desc = desc;
    TaskLocalStorage.updateTask(projectName,tasks);
    displaySingleTaskDOM(projectName,taskName);
   }else{
    displayMessage('Invalid!');
   }
}

export default updateTaskDesc;