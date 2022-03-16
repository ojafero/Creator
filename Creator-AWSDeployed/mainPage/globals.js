let currentCategory = null;
let currentDivOnCanvasClicked = null;
let uniqueIndex = -1;

function getUniqueIndex(){
    uniqueIndex++;
    return uniqueIndex;
}

function resetCurrentCategory(){
    currentCategory = null;
}

function resetDivOnCanvasClicked(){
    currentDivOnCanvasClicked = null;
}

function returnDividerCSS(textToShow){
    const container = document.createElement('div');
    container.innerHTML = `<div class="is-divider" data-content="${textToShow}"></div>`;
    return container;
}

function resetPickerIndicator(){
    let indicator = document.getElementById('indicate-button-click-text');
    indicator.innerText = "Create";
    
}

function resetPersonalizeIndicator(){
     //Add personalize indicator
     let indicator = document.getElementById('indicate-personalize-text');
     indicator.innerHTML = "Select";
}

function setPersonalizeIndicationWith(nodename){
    //Set personalize indicator
    document.getElementById('indicate-personalize-text').innerHTML = `${nodename}`;
}
