function addInputField(inputs, heading){
    var fieldHTML = '<div class="field">'
        + '<label for="" class="label">' + heading + '</label>'
        + '<input type="email" placeholders="input" class="input" required>'
        + '</div>';

    inputs.insertAdjacentHTML('beforeend', fieldHTML);

    const children = inputs.children;
    
    return children[children.length-1];
}

const dropdown = document.querySelector('#dropdown-selector');
//add another id
dropdown.setAttribute('id','dropdown-selector form-selector')
const select = dropdown.firstElementChild;

console.log(select);

for(var i = 0; i < 10; i++){
    select.insertAdjacentHTML('beforeend', '<option value="' + i + '">' + i + '</option>');
}

console.log(select);

dropdown.oninput = function(){
    const val = select.value; // value selected

    const inputs = document.querySelector('#field-inputs'); // creates the input box for controller
    const outputs = document.querySelector('#field-outputs'); // creates the input box for HTML page
    console.log(outputs);

    if(val > inputs.children.length){
        console.log('greater');
    }
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


