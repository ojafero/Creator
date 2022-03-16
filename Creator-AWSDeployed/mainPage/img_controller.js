function createImageController(){

    const controlContainerDiv = document.querySelector("#more-controls");

    //Button to delete container
    addDeleteButton (controlContainerDiv)


     //add divider
     controlContainerDiv.appendChild(returnDividerCSS('Image Url'));

    const imgInputPicker = createImageInputPicker();

    const WHPicker = createWHPicker();

    controlContainerDiv.append( imgInputPicker );
    controlContainerDiv.append( WHPicker );

    addEventListeners(imgInputPicker, WHPicker);

}

function createImageInputPicker(){
    const imageInputPicker = document.createElement('div');

    imageInputPicker.innerHTML += ('<input id="img-input-field" class="input is-rounded" type="text" placeholder="Add Image Link">');
    return imageInputPicker.querySelector('#img-input-field');
}

function createWHPicker() {
    const imageHWInputBox = document.createElement('div');

     //add divider
     imageHWInputBox.appendChild(returnDividerCSS('Image Dimensions'));

    imageHWInputBox.innerHTML += ('<input id="img-height-input" class="input is-small" type="text" placeholder="Height">');
    imageHWInputBox.innerHTML += ('<input id="img-width-input" class="input is-small" type="text" placeholder="Width">');

    return imageHWInputBox;
}

function addEventListeners(imgInputPicker, WHPicker) {

    imgInputPicker.onkeyup = function() {
        currentDivOnCanvasClicked.src = imgInputPicker.value;
    }

    const imgWidthInputBox = WHPicker.querySelector('#img-width-input');
    const imgHeightInputBox = WHPicker.querySelector('#img-height-input');

    imgWidthInputBox.onkeyup = function() {
        currentDivOnCanvasClicked.style.width = imgWidthInputBox.value;
    }

    imgHeightInputBox.onkeyup = function() {
        currentDivOnCanvasClicked.style.height = imgHeightInputBox.value;
    }
}



//  <input id="img-input-field" class="input is-rounded" type="text" placeholder="Rounded input">

