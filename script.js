const mainTitleDisplay = document.querySelector("#starting-title");
const infoDisplay = document.querySelector("#info");
const plotDesc = document.querySelector("#plot-description");
let hasDisappeared = false;
function clear() {
    if (!hasDisappeared) {
        mainTitleDisplay.outerHTML = "";
    }
    infoDisplay.hidden = true;
    plotDesc.hidden = true;
    hasDisappeared = true;
}
window.onload = () => {
    infoDisplay.hidden = true;
    plotDesc.hidden = true;
}

function loadGeneralInfo() {
    clear();
    infoDisplay.hidden = false;
}

function loadPlotDescription() {
    clear();
    plotDesc.hidden = false;
}