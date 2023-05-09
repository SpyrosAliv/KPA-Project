const mainTitleDisplay = document.querySelector("#starting-title");
const infoDisplay = document.querySelector("#info");
window.onload = () => {
    infoDisplay.hidden = true;
}

function loadGeneralInfo() {
    infoDisplay.hidden = false;
    mainTitleDisplay.outerHTML = "";
}