class Task {
  constructor(project, name, desc, due, priority, notes) {
    this.project = project;
    const today = new Date();
    this.date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    this.name = name;
    this.desc = desc;
    this.due = due;
    this.priority = priority;
    this.notes = notes;
    this.status = "not done";
  }

}

export default Task;
