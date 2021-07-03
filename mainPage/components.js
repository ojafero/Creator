
//Reusable Componenets
function createTextInputFieldComponent(idToSetDiv,classToSetToDiv,placeholderText){
    const textInputPicker = document.createElement('input');
    textInputPicker.setAttribute("id",`${idToSetDiv}`);
    textInputPicker.setAttribute("class",`${classToSetToDiv}`);
    textInputPicker.setAttribute("type","text");
    textInputPicker.setAttribute("placeholder",`${placeholderText}`);
    return textInputPicker;
}