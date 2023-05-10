const infoDisplay = document.querySelector("#info");
const plotDesc = document.querySelector("#plot-description");
const finalDisplay = document.querySelector("#finale");
const spaceOdyssey = document.querySelector("#space-odyssey");
const spaceOdysseyMenu = document.querySelector("#menu");
function clearSpaceOdyssey() {
    finalDisplay.hidden=true;
    infoDisplay.hidden = true;
    plotDesc.hidden = true;
}

function callSpaceOdyssey() {
    spaceOdyssey.hidden = false;
    loadGeneralInfo();
    spaceOdysseyMenu.scrollIntoView();
}

window.onload = () => {
    finalDisplay.hidden=true;
    infoDisplay.hidden = true;
    plotDesc.hidden = true;
    spaceOdyssey.hidden = true;
}

function loadGeneralInfo() {
    clearSpaceOdyssey();
    infoDisplay.hidden = false;
}

function loadPlotDescription() {
    clearSpaceOdyssey();
    plotDesc.hidden = false;
}

function loadFinaleInfo() {
    clearSpaceOdyssey();
    finalDisplay.hidden = false;
}