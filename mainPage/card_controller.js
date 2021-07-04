function createCardController() {
    const controlContainerDiv = document.querySelector("#more-controls");

    //Button to delete container
    addDeleteButton (controlContainerDiv)

    const textFields = [ ];

    textFields.push(createTextField('image-1-URL', 'Large Image URL'));
    textFields.push(createTextField('image-2-URK', 'Mini Image URL'));
    textFields.push(createTextField('card-name-input', 'Name of Poster'));
    textFields.push(createTextField('ig-handle-input', 'IG Username'));
    

    textFields.forEach(el => {
        controlContainerDiv.append(el);
    });

    


}

function createTextField(id, placeHolderText) { 
    const inputFields = document.createElement('div');
    inputFields.insertAdjacentHTML('beforeend', '<input id="' + id + '" class="input is-medium" type="text" placeholder="' + placeHolderText + '">');

    return inputFields;
}

