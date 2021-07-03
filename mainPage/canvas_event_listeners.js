const canvas = document.querySelector('#canvas');

function buildDiv(clickedDivId){
    switch(currentCategory){
        case typeToAdd.TEXT:
            console.log('Add text to canvas');
            addText(clickedDivId);
            break;
        default:
            console.log('no case found');
            break;
    }
}

canvas.addEventListener('click',(event)=>{
    console.log('clickedCanvas');
    console.log(event.target);
    if(currentCategory != null){
        buildDiv(event.target.id);
    }
}); 

function addText(clickedDivId){
    const textNode = document.createElement('div');
    textNode.setAttribute('id',`text-${getUniqueIndex()}`);
    textNode.innerText= "Demo Text";
    const parentNode = document.querySelector(`#${clickedDivId}`);
    parentNode.appendChild(textNode);

    textNode.addEventListener('click',(event)=>{
        console.log('text node clicked');
        currentDivOnCanvasClicked = textNode;
        textNode.style.borderWidth = '1px';
        textNode.style.borderStyle = 'solid';
        textNode.style.borderColor = 'red';
        createTextController();
    }); 

    resetCurrentCategory();
    removeAddTextButtonBorders();
}

function removeAddTextButtonBorders(){
    addTextButton.style.border = "none";
}