const okButton = document.querySelector(".okButton");
const okButtonDiv = document.querySelector(".okButtonDiv");
const okButtonText = document.querySelector(".okButtonText");

const displayMessage = function(message) {
  okButtonText.textContent = message;
  okButtonDiv.classList.remove("hidden");
}

const removeMessage = function() {
  okButtonDiv.classList.add("hidden");
}

okButton.addEventListener('click',removeMessage);

export default displayMessage;
