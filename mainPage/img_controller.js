function createImageController(){

    const controlContainerDiv = document.querySelector("#more-controls");

    const imgInputPicker = createImageInputPicker();
    addEventListenerImageInputPicker(imgInputPicker);

    const WHPicker = createWHPicker();

    controlContainerDiv.append( imgInputPicker );
    controlContainerDiv.append( WHPicker );

}

function createImageInputPicker(){
    const imageInputPicker = document.createElement('div');
    imageInputPicker.innerHTML = ('<input id="img-input-field" class="input is-rounded" type="text" placeholder="Add Image Link">');
    return imageInputPicker.querySelector('#img-input-field');
}

function createWHPicker() {
    const imageHWInputBox = document.createElement('div');
    imageHWInputBox.innerHTML = ('<input class="input is-small" type="text" placeholder="Height">');
    imageHWInputBox.innerHTML += ('<input class="input is-small" type="text" placeholder="Width">');

    return imageHWInputBox;
}

function addEventListenerImageInputPicker(imgInputPicker) {
    imgInputPicker.onkeyup = function() {
        console.log('what is the current div clicked?');
        console.log(currentDivOnCanvasClicked);
        console.log("current div clicked ended");
        console.log("currentDivOnCanvasClicked.src");
        console.log(imgInputPicker.value);
        currentDivOnCanvasClicked.src = imgInputPicker.value;
    }
}



//  <input id="img-input-field" class="input is-rounded" type="text" placeholder="Rounded input">

