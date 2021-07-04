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
    return `<div class="is-divider" data-content="${textToShow}"></div>`
}