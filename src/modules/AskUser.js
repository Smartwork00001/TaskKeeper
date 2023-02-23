import GlobalValues from "./GlobalValues";
import updateProjectDesc from "./ProjectModules/ProjectUpdateProjectDesc";
import updateProjectName from "./ProjectModules/ProjectUpdateProjectName";
import updateTaskName from "./TaskModules/TaskUpdateTaskName";
import updateTaskDesc from "./TaskModules/TaskUpdateTaskDesc";
import updateTaskDue from "./TaskModules/TaskUpdateDue";
import updateTaskNotes from "./TaskModules/TaskUpdateNotes";
import updateTaskPriority from "./TaskModules/TaskUpdatePriority";
import updateTaskStatus from "./TaskModules/TaskUpdateStatus";

const askUserButton = document.querySelector(".askUserButton");
const askUserDiv = document.querySelector(".askUserDiv");
const askUserText = document.querySelector(".askUserText");
const askUserTextArea = document.querySelector(".askUserTextArea");

const askUser = function (message) {
  askUserText.textContent = message;
  askUserTextArea.value = "";
  askUserDiv.classList.remove("hidden");
};

const removeAskUser = function () {
  askUserDiv.classList.add("hidden");
  if (GlobalValues.getAskUserTask() === "changeProjectDesc") {
    updateProjectDesc(GlobalValues.getProjectName(), askUserTextArea.value);
  } else if (GlobalValues.getAskUserTask() === "changeProjectName") {
    updateProjectName(GlobalValues.getProjectName(), askUserTextArea.value);
  } else if (GlobalValues.getAskUserTask() === "changeTaskName") {
    updateTaskName(
      GlobalValues.getProjectName(),
      GlobalValues.getTaskName(),
      askUserTextArea.value
    );
  } else if (GlobalValues.getAskUserTask() === "changeTaskDesc") {
    updateTaskDesc(
      GlobalValues.getProjectName(),
      GlobalValues.getTaskName(),
      askUserTextArea.value
    );
  } else if (GlobalValues.getAskUserTask() === "changeTaskDue") {
    updateTaskDue(
      GlobalValues.getProjectName(),
      GlobalValues.getTaskName(),
      askUserTextArea.value
    );
  } else if (GlobalValues.getAskUserTask() === "changeTaskNotes") {
    updateTaskNotes(
      GlobalValues.getProjectName(),
      GlobalValues.getTaskName(),
      askUserTextArea.value
    );
  } else if (GlobalValues.getAskUserTask() === "changeTaskPriority") {
    updateTaskPriority(
      GlobalValues.getProjectName(),
      GlobalValues.getTaskName(),
      askUserTextArea.value
    );
  }else if (GlobalValues.getAskUserTask() === "changeTaskStatus") {
    updateTaskStatus(
      GlobalValues.getProjectName(),
      GlobalValues.getTaskName(),
      askUserTextArea.value
    );
  }
  GlobalValues.setAskUserTask(undefined);
  GlobalValues.setProjectName(undefined);
  GlobalValues.setTaskName(undefined);
};

askUserButton.addEventListener("click", removeAskUser);

export default askUser;
