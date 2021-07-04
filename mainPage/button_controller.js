function createButtonController() {

    emptyTheControlSection();


    const controlContainerDiv = document.querySelector("#more-controls");

    //Button to delete container
    addDeleteButton (controlContainerDiv)

    const dropdown = init_dropdown();

    controlContainerDiv.append(dropdown);

    const textField = init_textfield();
    controlContainerDiv.append(textField);

    const radioFields = init_radiobuttons();

    controlContainerDiv.append(radioFields);


}

function init_textfield()  {
    const inputFields = document.createElement('div');
    inputFields.id = 'button-title-input';
    inputFields.insertAdjacentHTML('beforeend', '<input id="button-title-input-field" class="input is-medium" type="text" placeholder="Button Text">');

    inputFields.querySelector('#button-title-input-field').onkeyup = function() {
    
        currentDivOnCanvasClicked.innerHTML = this.value;

    }

    return inputFields;
}

function init_dropdown() {

    const inputFields = document.createElement('div');
    

    inputFields.insertAdjacentHTML('beforeend', '<div class="field"> <label class="label">Label</label> <div class="control"> <div id="dropdown-selector" class="select"> <select> <option>Select</option> </select> </div> </div> </div>');
    const dropdown = inputFields.querySelector('#dropdown-selector');
    const select = dropdown.firstElementChild;

    for(var i = 1; i < 5; i++){
        select.insertAdjacentHTML('beforeend', '<option value="' + i + '">' + i + '</option>');
    }

    dropdown.oninput = function(){
        currentDivOnCanvasClicked.querySelector('button-container');
    }

    return dropdown;
    

}

function init_radiobuttons() {
    const inputFields = document.createElement('div');
    inputFields.id = 'radio-inputs';

    

    const sizes = ['small', 'medium', 'large', 'fullwidth'];
    const displaySizesForm = addRadioForm(inputFields, 'size', 'Select a size: ');
    addRadioButtons(displaySizesForm, sizes, 'sizes');

    const colors = ['default', 'primary', 'link', 'info', 'success', 'danger'];
    const radioColorForm = addRadioForm(inputFields, 'type', 'Select a type/color: ');
    addRadioButtons(radioColorForm, colors, 'types');
    
    const styles = ['rounded', 'outlined', 'inverted'];
    const radioStyleForm = addRadioForm(inputFields, 'style', 'Select a style: ');
    addRadioButtons(radioStyleForm, styles, 'styles');

    const states = ['default', 'hover', 'focus', 'active', 'loading', 'static'];
    const stateStyleForm = addRadioForm(inputFields, 'state', 'Select a button state: ');
    addRadioButtons(stateStyleForm, states, 'states');




    return inputFields;
}

function addRadioForm(div, id, text) {
    const code = '<form id="' + id + '"><p>' + text + '</p></form>';
    div.insertAdjacentHTML('beforeend', code);
    return div.querySelector('#' + id);

}

function addRadioButtons(radioField, idList, groupName) {

    for(let i = 0; i < idList.length; i++){
        const code = '<input type="radio" id="' + idList[i] + '" name="' + groupName + '" value="' + idList[i] + '"> <label for="' + idList[i] + '">' + idList[i] + '</label>';
        radioField.insertAdjacentHTML('beforeend', code);
    
    }

    addRadioButtonChangeEvents(radioField);

    
}

function addRadioButtonChangeEvents(radioField) {
    const idList = [ ];
    const radioButtons = radioField.querySelectorAll('input');

    radioButtons.forEach((item) => {
        idList.push(item.id);
    });

    for(let i = 0; i < radioButtons.length; i++) {
        const radioButton = radioButtons[i];
        radioButton.value = i;
        radioButton.onchange = function() {
            const index = radioButton.value;
            const styleList = idList;

            for(let j = 0; j < styleList.length; j++) {
                if(j == index) continue;

                currentDivOnCanvasClicked.classList.remove('is-' + styleList[j]);
            }

            currentDivOnCanvasClicked.classList.add('is-' + styleList[index]);

        }
    }

    


}



 