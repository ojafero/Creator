const canvas = document.querySelector('#canvas');

//When canvas is click, check the element type the user wants to build. 
canvas.addEventListener('click',(event)=>{
    resetPickerIndicator();
    if(currentCategory != null){
       //pass in the id of the location where the user clicked on canvas
        buildDiv(event.target.id);
    }
    else if(event.target.id == "canvas"){
        emptyTheControlSection();
        createCanvasController();
        setPersonalizeIndicationWith("Body");
    }
}); 

//Build the div depending on category and append the div to the location which the canvas was clicked on
function buildDiv(clickedDivId){

    //access the global variable to identify which category to build
    switch(currentCategory){
        case typeToAdd.TEXT:
            console.log('Add text to canvas');
            addText(clickedDivId);
            break;
        case typeToAdd.IMAGE:
            console.log('Add image to canvas');
            createImage(clickedDivId);
            break;
        case typeToAdd.NAVBAR:
            console.log("add navbar to canvas");
            createNavbar(clickedDivId);
            break;
        case typeToAdd.FORM:
            createForm(clickedDivId);
            break;
        case typeToAdd.BUTTON:
            createCustomButton(clickedDivId);
            break;
        case typeToAdd.CARD:
            createCard(clickedDivId);
            break;
        default:
            console.log('no case found');
            break;
    }
}

function createCard(clickedDivId){

    //Parent Node is the node that was clicked on
    const parentNode = document.querySelector(`#${clickedDivId}`);

      downloadFile('htmlTags/card').then((data) => {
        const cardNode = document.createElement('div');
        cardNode.id = "card--container";
        cardNode.innerHTML = data;

        parentNode.appendChild(cardNode);

        cardNode.addEventListener('click',(event)=>{
            console.log('card node clicked');
            currentDivOnCanvasClicked = cardNode;
           
            //Add personalize indicator
            document.getElementById('indicate-personalize-text').innerHTML = "Card";
            
            console.log("add card function");
            emptyTheControlSection();

            const controlContainerDiv = document.getElementById('more-controls');
            addDeleteButton(controlContainerDiv)
    
        });
        resetCurrentCategory();
        removeBordersFrom(addCardButton);
        
      });


}


function createCustomButton(clickedDivId){

    const customButtonContainer = document.createElement('div');
    customButtonContainer.id = 'button-container';
    customButtonContainer.innerHTML='<button class="button">Normal</button>';

    const customButton = customButtonContainer.querySelector('button');

    customButtonContainer.setAttribute('id',`custom-button-${getUniqueIndex()}`);
    customButton.innerText= "Click Me!";

    const parentNode = document.querySelector(`#${clickedDivId}`);
    parentNode.appendChild(customButtonContainer);

    customButtonContainer.addEventListener('click',(event)=>{
        console.log('button node clicked');
        currentDivOnCanvasClicked = customButton;
       

        //Set personalize Indicator
        document.getElementById('indicate-personalize-text').innerHTML = "Button";

        console.log("Include function here to add more functionality to button");
        createButtonController();

    }); 

   


    resetCurrentCategory();
    removeBordersFrom(addCustomButton);

};

function createForm(clickedDivId){

    //Parent Node is the node that was clicked on
    const parentNode = document.querySelector(`#${clickedDivId}`);

      downloadFile('htmlTags/fullform').then((data) => {
        const formNode = document.createElement('div');
        formNode.id = "form--container";
        formNode.innerHTML = data;

        parentNode.appendChild(formNode);

        formNode.addEventListener('click',(event)=>{
            console.log('form node clicked');
            currentDivOnCanvasClicked = formNode;
             //Add form indicator
             document.getElementById('indicate-personalize-text').innerHTML = "Form";
    
            emptyTheControlSection();
            createFormController();
    
        });
        resetCurrentCategory();
        removeAddNavbarButtonBorders();

        
      });

}

//Attach image to the node where the user clicked on canvas and add an event listener to show control features to edit the image
function createNavbar(clickedDivId){

    //Parent Node is the node that was clicked on
    const parentNode = document.querySelector(`#${clickedDivId}`);

      downloadFile('htmlTags/navbar').then((data) => {
        const navbarNode = document.createElement('div');
        navbarNode.id = "navigation-bar--container";
        navbarNode.innerHTML = data;

        parentNode.appendChild(navbarNode);

        navbarNode.addEventListener('click',(event)=>{
            console.log('navbar node clicked');
            currentDivOnCanvasClicked = navbarNode;
           

            //Add personalize indicator
            document.getElementById('indicate-personalize-text').innerHTML = "Nav Bar";
    
            emptyTheControlSection();
            createNavbarController();
    
        });

        
        resetCurrentCategory();
        removeAddNavbarButtonBorders();
        
      });

      


    

}

function addText(clickedDivId){
    const textNode = document.createElement('div');
    textNode.setAttribute('id',`text-${getUniqueIndex()}`);
    textNode.innerText= "Demo Text";
    const parentNode = document.querySelector(`#${clickedDivId}`);
    parentNode.appendChild(textNode);

    textNode.addEventListener('click',(event)=>{
        console.log('text node clicked');
        currentDivOnCanvasClicked = textNode;
       

        console.log( document.getElementById('indicate-personalize-text'));

        //Set personalize Indicator
        document.getElementById('indicate-personalize-text').innerHTML = "Text";


        createTextController();

    }); 

   

    resetCurrentCategory();
    removeAddTextButtonBorders();
}




//Attach image to the node where the user clicked on canvas and add an event listener to show control features to edit the image
function createImage(clickedDivId){

    const parentNode = document.querySelector(`#${clickedDivId}`);

    //Create Image Node
    const imgNode = document.createElement('img');


    //Set Attributes
    imgNode.setAttribute("src","https://images.unsplash.com/photo-1579818191104-014df427aa52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80");
    imgNode.setAttribute('id',`image-${getUniqueIndex()}`);
    imgNode.setAttribute('style','width:300px; height:300px');
    parentNode.appendChild(imgNode);

    imgNode.addEventListener('click',(event)=>{
        console.log('Image node clicked');
        currentDivOnCanvasClicked = imgNode;
       

        emptyTheControlSection();
        createImageController();

        //Set personalize indicator
        document.getElementById('indicate-personalize-text').innerHTML = "Image";

    });

   
    
    //document.getElementById('canvas').droppable();

    resetCurrentCategory();
    removeAddImageButtonBorders();

}

function removeAllBordersFromButtons(){
    removeAddImageButtonBorders();
    removeAddTextButtonBorders();
    removeAddNavbarButtonBorders();
    removeBordersFrom(addCustomButton);
    removeBordersFrom(addFormButton);
    removeBordersFrom(addCardButton);
}

function removeBordersFrom(pressedButton){
    pressedButton.style.border = "0.5px solid #000000";
}


function removeAddImageButtonBorders(){
    addImageButton.style.border = "0.5px solid #000000";
}

function removeAddTextButtonBorders(){
    addTextButton.style.border = "0.5px solid #000000";
}

function removeAddNavbarButtonBorders(){
    addNavbarButton.style.border = "0.5px solid #000000";
}