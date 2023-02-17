import GlobalValues from "./GlobalValues";
import updateProjectDesc from "./ProjectModules/ProjectUpdateProjectDesc";
import updateProjectName from "./ProjectModules/ProjectUpdateProjectName";

const askUserButton = document.querySelector(".askUserButton");
const askUserDiv = document.querySelector(".askUserDiv");
const askUserText = document.querySelector(".askUserText");
const askUserTextArea = document.querySelector(".askUserTextArea");

const askUser = function (message) {
  askUserText.textContent = message;
  askUserDiv.classList.remove("hidden");
};

const removeAskUser = function () {
  askUserDiv.classList.add("hidden");
  if (GlobalValues.getAskUserTask() === "changeProjectDesc") {
    updateProjectDesc(GlobalValues.getProjectName(), askUserTextArea.value);
    GlobalValues.setProjectName(undefined);
  }else if(GlobalValues.getAskUserTask() === "changeProjectName") {
    updateProjectName(GlobalValues.getProjectName(), askUserTextArea.value);
    GlobalValues.setProjectName(undefined);
  }
  GlobalValues.setAskUserTask(undefined);
};

askUserButton.addEventListener("click", removeAskUser);

export default askUser;
