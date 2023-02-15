class ProjectLocalStorage {
  static getProjects() {
    const projects = localStorage.getItem("projects");
    if (projects === null) {
      return [];
    }
    return JSON.parse(projects);
  }

  static updateProject(projects) {
    localStorage.removeItem("projects");
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}

export default ProjectLocalStorage;
