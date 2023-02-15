class TodoItem {
  constructor(project, title, desc, due, priority, notes) {
    this.project = project;
    this.title = title;
    this.desc = desc;
    this.due = due;
    this.priority = priority;
    this.notes = notes;
    this.status = "not done";
  }

  getProject() {
    return this.project;
  }

  getTitle() {
    return this.title;
  }

  getDesc() {
    return this.desc;
  }

  getDue() {
    return this.due;
  }

  getPriority() {
    return this.priority;
  }

  getNotes() {
    return this.notes;
  }

  getStatus() {
    return this.status;
  }

  setProject(newProject) {
    this.project = newProject;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  setDesc(newDesc) {
    this.desc = newDesc;
  }

  setDue(newDue) {
    this.due = newDue;
  }

  setPriority(newPriority) {
    this.priority = newPriority;
  }

  setNotes(newNotes) {
    this.notes = newNotes;
  }

  setStatus(newStatus) {
    this.status = newStatus;
  }
}

export default TodoItem;
