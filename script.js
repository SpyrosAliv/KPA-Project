const mainTitleDisplay = document.querySelector("#starting-title");
const infoDisplay = document.querySelector("#info");
const plotDesc = document.querySelector("#plot-description");
const finalDisplay = document.querySelector("#finale");
let hasDisappeared = false;

function clear() {
    if (!hasDisappeared) {
        mainTitleDisplay.outerHTML = "";
    }
    finalDisplay.hidden=true;
    infoDisplay.hidden = true;
    plotDesc.hidden = true;
    hasDisappeared = true;
}
window.onload = () => {
    finalDisplay.hidden=true;
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

function loadFinaleInfo() {
    clear();
    finalDisplay.hidden = false;
}