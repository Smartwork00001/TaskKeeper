class Project {
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
    const today = new Date();
    this.date = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
  }
}

export default Project;
