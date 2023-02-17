import GlobalValues from "./GlobalValues";
import updateProjectDesc from "./ProjectModules/ProjectUpdateProjectDesc";

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
  console.log("user entered", askUserTextArea.value);
  if (GlobalValues.getAskUserTask() === "changeDesc") {
    updateProjectDesc(GlobalValues.getProjectName(), askUserTextArea.value);
    GlobalValues.setAskUserTask(undefined);
    GlobalValues.setProjectName(undefined);
  }
};

askUserButton.addEventListener("click", removeAskUser);

export default askUser;
