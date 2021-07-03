const canvas = document.querySelector('#canvas');

//When canvas is click, check the element type the user wants to build. 
canvas.addEventListener('click',(event)=>{
    console.log('clickedCanvas');
    console.log(event.target);
    if(currentCategory != null){
       //pass in the id of the location where the user clicked on canvas
        buildDiv(event.target.id);
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
        default:
            console.log('no case found');
            break;
    }
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
        textNode.style.borderWidth = '1px';
        textNode.style.borderStyle = 'solid';
        textNode.style.borderColor = 'red';
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
        imgNode.style.borderWidth = '1px';
        imgNode.style.borderStyle = 'solid';
        imgNode.style.borderColor = 'red';
        console.log('create image controller here');

    });

    resetCurrentCategory();
    removeAddImageButtonBorders();

}


function removeAddImageButtonBorders(){
    addImageButton.style.border = "none";
}

function removeAddTextButtonBorders(){
    addTextButton.style.border = "none";
}