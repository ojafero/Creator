
let addTextButton = document.querySelector('#add-text-button');
let addImageButton = document.querySelector('#add-image-button');
let addNavbarButton = document.querySelector('#add-navbar-button');
let addFormButton = document.querySelector('#add-form-button');
let addCustomButton = document.querySelector('#add-custom-button');
let addCardButton = document.querySelector('#add-card-button');

addTextButton.addEventListener('click',()=>{
    
    //resetElementClickedOnCanvas
    resetDivOnCanvasClicked();

    //clear the personalize section
    emptyTheControlSection();

    //clear the borders from preciously selected buttons
    removeAllBordersFromButtons();

    //addTextButton.style.borderColor = "red";
    //addTextButton.style.borderWidth = "thick";
    console.log(addTextButton.style.borderRight);
    //addTextButton.style.borderRight = "thick solid #0000FF";
     
    addTextButton.style.borderWidth = '1px';
    addTextButton.style.borderStyle = 'solid';
    addTextButton.style.borderColor = 'red';
    currentCategory = typeToAdd.TEXT; 
   
    //add indicator
    let indicator = document.getElementById('indicate-button-click-text');
    indicator.innerText = "Text";

    resetPersonalizeIndicator();
}); 


//Highlight Image button to show its clicked
//Set global variable currentCategory to Image
//to let the canvas know what node to build
addImageButton.addEventListener('click',()=>{
    //resetElementClickedOnCanvas
    resetDivOnCanvasClicked();

     //clear the personalize section
     emptyTheControlSection();

     //clear the borders from preciously selected buttons
    removeAllBordersFromButtons();

    addImageButton.style.borderWidth = '1px';
    addImageButton.style.borderStyle = 'solid';
    addImageButton.style.borderColor = 'red';
    currentCategory = typeToAdd.IMAGE;

    //Add Identifier
    let indicator = document.getElementById('indicate-button-click-text');
    indicator.innerText = "Image";

    resetPersonalizeIndicator();

}); 


addNavbarButton.addEventListener('click',()=>{
    
    //resetElementClickedOnCanvas
    resetDivOnCanvasClicked();

     //clear the personalize section
     emptyTheControlSection();

     //clear the borders from preciously selected buttons
    removeAllBordersFromButtons();

    //addTextButton.style.borderRight = "thick solid #0000FF";
    addNavbarButton.style.borderWidth = '1px';
    addNavbarButton.style.borderStyle = 'solid';
    addNavbarButton.style.borderColor = 'red';
    currentCategory = typeToAdd.NAVBAR;

    //Add Identifier
    let indicator = document.getElementById('indicate-button-click-text');
    indicator.innerText = "Navbar";

    resetPersonalizeIndicator();
}); 

addFormButton.addEventListener('click',()=>{

    //resetElementClickedOnCanvas
    resetDivOnCanvasClicked();

     //clear the personalize section
     emptyTheControlSection();

     //clear the borders from preciously selected buttons
    removeAllBordersFromButtons();

    //addTextButton.style.borderRight = "thick solid #0000FF";
    addFormButton.style.borderWidth = '1px';
    addFormButton.style.borderStyle = 'solid';
    addFormButton.style.borderColor = 'red';
    currentCategory = typeToAdd.FORM;

    //Add Identifier
    let indicator = document.getElementById('indicate-button-click-text');
    indicator.innerText = "Form";

    resetPersonalizeIndicator();
}); 

addCustomButton.addEventListener('click',()=>{

    //resetElementClickedOnCanvas
    resetDivOnCanvasClicked();

     //clear the personalize section
     emptyTheControlSection();

     //clear the borders from preciously selected buttons
    removeAllBordersFromButtons();

    //addTextButton.style.borderRight = "thick solid #0000FF";
    addCustomButton.style.borderWidth = '1px';
    addCustomButton.style.borderStyle = 'solid';
    addCustomButton.style.borderColor = 'red';
    currentCategory = typeToAdd.BUTTON;

    //Add Identifier
    let indicator = document.getElementById('indicate-button-click-text');
    indicator.innerText = "Button";

    resetPersonalizeIndicator();
}); 

addCardButton.addEventListener('click', () =>{
    resetDivOnCanvasClicked();

    emptyTheControlSection();

    //clear the borders from preciously selected buttons
    removeAllBordersFromButtons();

    addCardButton.style.borderWidth = '1px';
    addCardButton.style.borderStyle = 'solid';
    addCardButton.style.borderColor = 'red';
    currentCategory = typeToAdd.CARD;

    //Add Identifier
    let indicator = document.getElementById('indicate-button-click-text');
    indicator.innerText = "Card";

    resetPersonalizeIndicator();

    
});