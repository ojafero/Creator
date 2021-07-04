function addInputField(inputs, heading){
    var fieldHTML = '<div class="field">'
        + '<label for="" class="label">' + heading + '</label>'
        + '<input type="email" placeholders="input" class="input" required>'
        + '</div>';

    inputs.insertAdjacentHTML('beforeend', fieldHTML);

    const children = inputs.children;
    
    return children[children.length-1];
}


function createFormController() {
    console.log('createFormController()...');

    const controlContainerDiv = document.querySelector("#more-controls");

    //Button to delete container
    addDeleteButton (controlContainerDiv)

    const dropdown = createFormSizeSelector();

    controlContainerDiv.append(dropdown);
    



}

function createFormSizeSelector() {
    const inputFields = document.createElement('div');
    

    inputFields.insertAdjacentHTML('beforeend', '<div class="field"> <label class="label">Label</label> <div class="control"> <div id="dropdown-selector" class="select"> <select> <option>Select</option> </select> </div> </div> </div>');
    const dropdown = inputFields.querySelector('#dropdown-selector');
    const select = dropdown.firstElementChild;

    for(var i = 0; i < 10; i++){
        select.insertAdjacentHTML('beforeend', '<option value="' + i + '">' + i + '</option>');
    }

    dropdown.insertAdjacentHTML('beforeend', '<div id="field-inputs"></div>');

    dropdown.oninput = function(){
        const val = select.value; // value selected
    
        const inputs = dropdown.querySelector('#field-inputs'); // creates the input box for controller
        const outputs = currentDivOnCanvasClicked.querySelector('#field-outputs'); // creates the input box for HTML page

        var i = 0;
        var length = inputs.children.length;
        
        while(val > inputs.children.length) { // adds more boxes
            i++;
            var elementId = length + i;
    
            const input = addInputField(inputs, 'Heading ' + elementId);
            const output = addInputField(outputs, 'Heading ' +  elementId);
    
            console.log(input);
            console.log(output);
    
            input.onkeyup = function() {
                output.querySelector('.label').innerHTML = input.querySelector('.input').value;
            }
    
            if(i > 10) {
                console.log('infinite loop, break!');
                break;
            }
        }
    
        while(val < inputs.children.length) {
            inputs.removeChild(inputs.children[inputs.children.length-1]);
            outputs.removeChild(outputs.children[outputs.children.length-1]);
            console.log(i);
            i++
    
        }


    }


    return dropdown;


}

