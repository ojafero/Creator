
let addTextButton = document.querySelector('#add-text-button');

addTextButton.addEventListener('click',()=>{
    
    //resetElementClickedOnCanvas
    resetDivOnCanvasClicked();

    //addTextButton.style.borderColor = "red";
    //addTextButton.style.borderWidth = "thick";
    console.log(addTextButton.style.borderRight);
    //addTextButton.style.borderRight = "thick solid #0000FF";
    addTextButton.style.borderWidth = '1px';
    addTextButton.style.borderStyle = 'solid';
    addTextButton.style.borderColor = 'red';
    currentCategory = typeToAdd.TEXT;
    console.log(currentCategory);
}); 