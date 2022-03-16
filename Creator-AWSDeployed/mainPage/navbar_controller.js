function createNavbarController(){

    const controlContainerDiv = document.querySelector("#more-controls");

    //Button to delete container
    addDeleteButton (controlContainerDiv)

    //add divider
    const divContained = document.createElement('div');
    divContained.appendChild(returnDividerCSS('Text'));

    controlContainerDiv.appendChild(divContained);


    let textInputField = createTextInputFieldComponent("navbar-item1-picker","input is rounded","Set title of first");

    let textInputFieldForSecondItem = createTextInputFieldComponent("navbar-item2-picker","input is rounded","Set title of second");

    let textInputFieldForThirdItem = createTextInputFieldComponent("navbar-item3-picker","input is rounded","Set title of third");

    let children = currentDivOnCanvasClicked.querySelectorAll('a');
    modifyNavbarTextThroughPicker(textInputField,children[0]);
    modifyNavbarTextThroughPicker(textInputFieldForSecondItem,children[1]);
    modifyNavbarTextThroughPicker(textInputFieldForThirdItem,children[2]);

    const navbarInputFieldContainer = document.createElement('div');
    navbarInputFieldContainer.id = "navbarInputFieldContainer";

    navbarInputFieldContainer.appendChild(textInputField);
    navbarInputFieldContainer.appendChild(textInputFieldForSecondItem);
    navbarInputFieldContainer.appendChild(textInputFieldForThirdItem);

    controlContainerDiv.appendChild(navbarInputFieldContainer);

}

function createTextInputPicker(){
    let textInputField = createTextInputFieldComponent("navbar-item1-picker","input is rounded","Set title of first");
    return textInputField;
}

function modifyNavbarTextThroughPicker(navbarInputPicker,navbarItem) {
    navbarInputPicker.onkeyup = function (){
        navbarItem.innerText = navbarInputPicker.value;
    }
   
}