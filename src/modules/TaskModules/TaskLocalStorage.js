class TaskLocalStorage{
    static getTask(project){
        return JSON.parse(localStorage.getItem(project));
    }

    static updateTask(project, tasks){
        localStorage.removeItem(project);
        localStorage.setItem(project,JSON.stringify(tasks));
    }

    static addProject(name){
        localStorage.setItem(name,JSON.stringify([]));
    }

    static removeProject(name){
        localStorage.removeItem(name);
    }
}

export default TaskLocalStorage;