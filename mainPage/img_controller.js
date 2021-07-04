function createImageController(){

    const controlContainerDiv = document.querySelector("#more-controls");

    const imgInputPicker = createImageInputPicker();

    const WHPicker = createWHPicker();

    controlContainerDiv.append( imgInputPicker );
    controlContainerDiv.append( WHPicker );

    addEventListeners(imgInputPicker, WHPicker);

}

function createImageInputPicker(){
    const imageInputPicker = document.createElement('div');
    imageInputPicker.innerHTML = ('<input id="img-input-field" class="input is-rounded" type="text" placeholder="Add Image Link">');
    return imageInputPicker.querySelector('#img-input-field');
}

function createWHPicker() {
    const imageHWInputBox = document.createElement('div');
    imageHWInputBox.innerHTML = ('<input id="img-height-input" class="input is-small" type="text" placeholder="Height">');
    imageHWInputBox.innerHTML += ('<input id="img-width-input" class="input is-small" type="text" placeholder="Width">');

    return imageHWInputBox;
}

function addEventListeners(imgInputPicker, WHPicker) {

    const imgInputBox = imgInputPicker.querySelector('#img-input-field');

    imgInputBox.onkeyup = function() {
        currentDivOnCanvasClicked.src = imgInputBox.value;
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

