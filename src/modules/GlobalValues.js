class GlobalValues{
    constructor(){
        this.askUserTask = undefined;
        this.askUserDesc = false;
        this.askUserName = false;
        this.projectName = undefined;
        this.projectDesc = undefined;
    }

    static getAskUserTask(){
        return this.askUserTask;
    }

    static setAskUserTask(task){
        this.askUserTask = task;
    }

    static getAskUserName(){
        return this.askUserName;
    }

    static setAskUserName(value){
        this.askUserName = !!value;
    }

    static getAskUserDesc(){
        return this.askUserDesc;
    }

    static setAskUserDesc(value){
        this.askUserDesc = !!value;
    }

    static getProjectName(){
        return this.projectName;
    }

    static setProjectName(projectName){
        this.projectName = projectName;
    }

    static getProjectDesc(){
        return this.projectDesc;
    }

    static setProjectDesc(projectDesc){
        this.projectDesc = projectDesc;
    }
}

export default GlobalValues;