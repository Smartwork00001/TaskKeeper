import displayMessage from "../Messages";
import Validations from "../Validations";
import Task from "./TaskClass";
import displayAllTasksDOM from "./TaskDisplayDOM";
import TaskLocalStorage from "./TaskLocalStorage";

const addTask = (project, name, desc, due, priority, notes) => {
    if(Validations.validateDate(due)
     && Validations.validateName(name)
     && Validations.validateDesc(desc)
     && Validations.validateProject(project)
     && Validations.validateNotes(notes)
     && !Validations.validateTask(project,name)){
        const task = new Task(project, name, desc, due, priority, notes);
        const tasks = TaskLocalStorage.getTask(project);
        tasks.push(task);
        TaskLocalStorage.updateTask(project, tasks);
        displayAllTasksDOM();
        displayMessage(`Task ${name} is created!`);
    }else{
        displayMessage('Details not valid!');
    }
}

export default addTask;