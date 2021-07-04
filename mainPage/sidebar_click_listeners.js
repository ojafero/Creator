
let addTextButton = document.querySelector('#add-text-button');
let addImageButton = document.querySelector('#add-image-button');
let addNavbarButton = document.querySelector('#add-navbar-button');
let addFormButton = document.querySelector('#add-form-button');

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


//Highlight Image button to show its clicked
//Set global variable currentCategory to Image
//to let the canvas know what node to build
addImageButton.addEventListener('click',()=>{
    //resetElementClickedOnCanvas
    resetDivOnCanvasClicked();
    addImageButton.style.borderWidth = '1px';
    addImageButton.style.borderStyle = 'solid';
    addImageButton.style.borderColor = 'red';
    currentCategory = typeToAdd.IMAGE;
}); 


addNavbarButton.addEventListener('click',()=>{
    
    //resetElementClickedOnCanvas
    resetDivOnCanvasClicked();

    //addTextButton.style.borderRight = "thick solid #0000FF";
    addNavbarButton.style.borderWidth = '1px';
    addNavbarButton.style.borderStyle = 'solid';
    addNavbarButton.style.borderColor = 'red';
    currentCategory = typeToAdd.NAVBAR;
}); 

addFormButton.addEventListener('click',()=>{

    //resetElementClickedOnCanvas
    resetDivOnCanvasClicked();

    //addTextButton.style.borderRight = "thick solid #0000FF";
    addFormButton.style.borderWidth = '1px';
    addFormButton.style.borderStyle = 'solid';
    addFormButton.style.borderColor = 'red';
    currentCategory = typeToAdd.FORM;
}); 