function createCanvasController() {
    let textInputField = createBackgroundImagePicker();
    addBackgroundImageThroughPicker(textInputField);

    const controlContainerDiv = document.querySelector("#more-controls");
    controlContainerDiv.append(textInputField);
   
}

function createBackgroundImagePicker(){
    let textInputField = createTextInputFieldComponent("background-image-picker","input is rounded","Set background image");
    return textInputField;
}

function createBackgroundColorPicker(){
    let textInputField = createTextInputFieldComponent("background-color-picker","input is rounded","Set background color");
    return textInputField;
}


function addBackgroundImageThroughPicker(imgInputPicker) {
    imgInputPicker.onkeyup = function() {
        console.log("In add background");
        console.log(document.getElementById('canvas'));
        document.getElementById('canvas').style.backgroundImage = `url(${imgInputPicker.value}`;
    }
}
