import isValid from "date-fns/isValid";
import ProjectLocalStorage from "./ProjectModules/ProjectLocalStorage";

class Validations {
  static validateDate(date) {
    // this isValid must be a function from date-fns
    // yyyy-mm-dd
    const arr = date.split("-");
    if (arr.length === 3) {
      if (arr[0] >= 1 && arr[0] <= 9999) {
        if (arr[1] >= 1 && arr[1] <= 12) {
          if (arr[2] >= 1 && arr[2] <= 31) {
            if (isValid(new Date(arr[0], arr[1], arr[2]))) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  static validateName(name) {
    if (name.length >= 1 && name.length <= 50) {
      if (name.match(/^[a-zA-Z0-9 .]+$/)) {
        return true;
      }
    }
    return false;
  }

  static validateDesc(desc) {
    if (desc.length >= 1 && desc.length <= 140) {
      return true;
    }
    return false;
  }

  static validateProject(name) {
    const projects = ProjectLocalStorage.getProjects();
    const index = projects.findIndex((project) => project.name === name);
    if (index === -1) {
      return false;
    }
    return true;
  }

  static validateNotes(notes) {
    if (notes.length >= 1 && notes.length <= 140) {
      return true;
    }
    return false;
  }
}

export default Validations;
