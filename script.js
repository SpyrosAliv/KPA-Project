const infoDisplay = document.querySelector("#space-odyssey-info");
const plotDesc = document.querySelector("#plot-description");
const finalDisplay = document.querySelector("#finale");
const spaceOdyssey = document.querySelector("#space-odyssey");

const twelveAngryMen = document.querySelector("#twelve-angry-men");
const infoAngryMen = document.querySelector("#twelve-angry-men-info");
const plotAngryMen = document.querySelector("#twelve-angry-men-plot");

function clearAngryMen() {
    infoAngryMen.hidden = true;
    plotAngryMen.hidden = true;
}

function clearSpaceOdyssey() {
    finalDisplay.hidden=true;
    infoDisplay.hidden = true;
    plotDesc.hidden = true;
}

function callSpaceOdyssey() {
    twelveAngryMen.hidden = true;
    spaceOdyssey.hidden = false;
    loadGeneralInfo();
    document.querySelector("#space-odyssey-menu").scrollIntoView();
}

function callAngryMen() {
    spaceOdyssey.hidden = true;
    twelveAngryMen.hidden = false;
    loadGeneralInfoAngry();
    document.querySelector("#angry-men-menu").scrollIntoView();
}

window.onload = () => {
    clearSpaceOdyssey();
    twelveAngryMen.hidden=true;
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

function loadGeneralInfoAngry() {
    clearAngryMen();
    infoAngryMen.hidden = false;
}

function loadPlotAngry() {
    clearAngryMen();
    plotAngryMen.hidden = false;
}