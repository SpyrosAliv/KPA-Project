const mainTitleDisplay = document.querySelector("#starting-title");
const infoDisplay = document.querySelector("#info");
function clear() {
    mainTitleDisplay.outerHTML = "";
    infoDisplay.hidden = true;
}
window.onload = () => {
    infoDisplay.hidden = true;
}

function loadGeneralInfo() {
    clear();
    infoDisplay.hidden = false;
}