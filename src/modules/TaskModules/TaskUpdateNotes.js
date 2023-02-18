import displayMessage from '../Messages';
import Validations from '../Validations';
import displaySingleTaskDOM from './TaskDisplaySingleTaskDOM';
import TaskLocalStorage from './TaskLocalStorage';

const updateTaskNotes = (projectName,taskName, notes) => {
   if(Validations.validateNotes(notes)){
    const tasks = TaskLocalStorage.getTask(projectName);
    const task = tasks.find(task2 => task2.name === taskName);
    task.notes = notes;
    TaskLocalStorage.updateTask(projectName,tasks);
    displaySingleTaskDOM(projectName,taskName);
   }else{
    displayMessage('Invalid!');
   }
}

export default updateTaskNotes;