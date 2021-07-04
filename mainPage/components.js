
//Reusable Componenets
function createTextInputFieldComponent(idToSetDiv,classToSetToDiv,placeholderText){
    const textInputPicker = document.createElement('input');
    textInputPicker.setAttribute("id",`${idToSetDiv}`);
    textInputPicker.setAttribute("class",`${classToSetToDiv}`);
    textInputPicker.setAttribute("type","text");
    textInputPicker.setAttribute("placeholder",`${placeholderText}`);
    return textInputPicker;
}


function emptyTheControlSection(){
    const controlContainerDiv = document.querySelector("#more-controls");
    controlContainerDiv.innerHTML = "";
}

function addDeleteButton(containerToAppendTo){
    containerToAppendTo.innerHTML += '<button id = "delete-button" style = "width:300px" class="button is-danger">Delete</button>';
    containerToAppendTo.querySelector('#delete-button').addEventListener("click", () => {
      currentDivOnCanvasClicked.remove();
      emptyTheControlSection();
      resetPersonalizeIndicator();
    });
}

