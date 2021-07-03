 function createTextController(){
    const controlContainerDiv = document.querySelector("#more-controls");


    //Remove previousController
    emptyControllerDiv(controlContainerDiv);

    //Start new Div
    //Create color Picker
    appendTextColorPicker(controlContainerDiv);

    //Create Bold-Italic-Underline Picker
    appendTextStylePicker(controlContainerDiv)

    //Field to modify text
    appendTextInputPicker(controlContainerDiv);

    //top-down-left-right
    appendPaddingInputPicker(controlContainerDiv)

 }

 function appendPaddingInputPicker(controlContainerDiv){

    let topPicker = createPaddingInputPicker('top');
    let downPicker = createPaddingInputPicker('down');
    let leftPicker = createPaddingInputPicker('left');
    let rightPicker = createPaddingInputPicker('right');


    //Initialize default values
    topPicker.value = currentDivOnCanvasClicked.style.paddingTop;
    downPicker.value = currentDivOnCanvasClicked.style.paddingBottom;
    leftPicker.value = currentDivOnCanvasClicked.style.paddingLeft;
    rightPicker.value = currentDivOnCanvasClicked.style.paddingRight;

    //Modify text behavior
    addListenerToTopPaddingPicker(topPicker);
    addListenerToBottomPaddingPicker(downPicker);
    addListenerToLeftPaddingPicker(leftPicker);
    addListenerToRightPaddingPicker(rightPicker);

    //append to container
    const paddingInputPickerContainer = document.createElement('div');
    paddingInputPickerContainer.setAttribute("id",'padding-input-picker-container');
    paddingInputPickerContainer.innerText = "Padding (top,down,left,right):  ";

    //add all 4 directions
    paddingInputPickerContainer.appendChild(topPicker);
    paddingInputPickerContainer.appendChild(downPicker);
    paddingInputPickerContainer.appendChild(leftPicker);
    paddingInputPickerContainer.appendChild(rightPicker);
    controlContainerDiv.appendChild(paddingInputPickerContainer);
    

 }

 /** <input id = "text-top-padding-field" class="input is-small" type="text" placeholder="top padding"> */
 function createPaddingInputPicker(direction){

    const paddingInputPicker = document.createElement('input');
    paddingInputPicker.setAttribute("id",`padding-input-picker-${direction}top-padding-field`);
    paddingInputPicker.setAttribute("class","input is-small");
    paddingInputPicker.setAttribute("type","text");
    paddingInputPicker.setAttribute("placeholder",`${direction} (px)`);

    paddingInputPicker.setAttribute('style','width:60px');
    return paddingInputPicker;

 }

 function addListenerToTopPaddingPicker(paddingField){
    paddingField.onkeyup = function (){
        console.log("modify padding value value");
         currentDivOnCanvasClicked.style.paddingTop = paddingField.value; 
    }
 }

 function addListenerToBottomPaddingPicker(paddingField){
    paddingField.onkeyup = function (){
        console.log("modify padding value value");
         currentDivOnCanvasClicked.style.paddingBottom = paddingField.value; 
    }
 }
 function addListenerToLeftPaddingPicker(paddingField){
    paddingField.onkeyup = function (){
        console.log("modify padding value value");
         currentDivOnCanvasClicked.style.paddingLeft = paddingField.value; 
    }
 }
 function addListenerToRightPaddingPicker(paddingField){
    paddingField.onkeyup = function (){
        console.log("modify padding value value");
         currentDivOnCanvasClicked.style.paddingRight = paddingField.value; 
    }
 }


 function appendTextInputPicker(controlContainerDiv){
     let textInputPicker = createTextInputPicker();
     addListenerToTextPicker(textInputPicker);

     //Create container div
     const textInputPickerContainer = document.createElement('div');
     textInputPickerContainer.setAttribute("id","text-input-picker-container");

     //Append elements
     textInputPickerContainer.appendChild(textInputPicker);
     controlContainerDiv.appendChild(textInputPickerContainer);
 }

 function addListenerToTextPicker(textInputPicker){
    textInputPicker.onkeyup = function (){
        currentDivOnCanvasClicked.innerText = textInputPicker.value;
    }
 }

 /**<input id = "text-input-field" class="input is-rounded" type="text" placeholder="Change Text"> */
 function createTextInputPicker(){
        const textInputPicker = document.createElement('input');
        textInputPicker.setAttribute("id","text-input-picker");
        textInputPicker.setAttribute("class","input is rounded");
        textInputPicker.setAttribute("type","text");
        textInputPicker.setAttribute("placeholder","Change Text");

        textInputPicker.value = currentDivOnCanvasClicked.innerText;
        return textInputPicker;
 }

 function appendTextColorPicker(controlContainerDiv){
    const textControlDiv = document.createElement('div');
    textControlDiv.setAttribute("id","color-picker-container");
    let colorPicker = addTextColorPicker();
    textControlDiv.appendChild(colorPicker);
    controlContainerDiv.appendChild(textControlDiv);
 }

 function appendTextStylePicker(controlContainerDiv){
    const textStylePickerContainer = document.createElement('div');
    textStylePickerContainer.setAttribute("id","text-style-picker-container");
    textStylePicker = addTextStylePicker();
    textStylePickerContainer.appendChild(textStylePicker);
    controlContainerDiv.appendChild(textStylePickerContainer);
 }


 // <input type="color" value="black" id = "color">
 function addTextColorPicker(){
    const colorPicker= document.createElement('input');
    colorPicker.setAttribute("type","color");
    colorPicker.setAttribute("id","text-color-picker");
    console.log("currentDivonCanvasSelected");
    console.log(currentDivOnCanvasClicked);
    colorPicker.oninput = function() {
        currentDivOnCanvasClicked.style.color = this.value;
    }
    return colorPicker;

 }

 function emptyControllerDiv(controlContainerDiv){
     controlContainerDiv.innerHTML = "";
 }

 function addTextStylePicker(){

    const textStylePicker = createTextStylePicker();
    textStylePicker.setAttribute("id","text-style-picker");
    makeTextStylePickerInteractive(textStylePicker);
    return textStylePicker;
 }

 function createTextStylePicker(){
    const textStylePickerNode = document.createElement('div');
    textStylePickerNode.innerHTML='<div class="field has-addons">  <p class="control">    <button class="button">      <span class="icon is-small">        <i class="fas fa-bold"></i>      </span>      <span>Bold</span>    </button>  </p>  <p class="control">    <button class="button">      <span class="icon is-small">        <i class="fas fa-italic"></i>      </span>      <span>Italic</span>    </button>  </p>  <p class="control">    <button class="button">      <span class="icon is-small">        <i class="fas fa-underline"></i>      </span>      <span>Underline</span>    </button>  </p></div>';
    return textStylePickerNode;
 }

 function makeTextStylePickerInteractive(textStylePickerNode){
    let children = textStylePickerNode.querySelectorAll('button');
    console.log(children);

    //Toggle Bold
    children[0].onclick = function() {
        const elementProperty = currentDivOnCanvasClicked.style.fontWeight;
        console.log(elementProperty);
        if(elementProperty != null && elementProperty != "bold") currentDivOnCanvasClicked.style.fontWeight = "bold";
        else {
            currentDivOnCanvasClicked.style.fontWeight = "normal";
        }
    }

    //Toggle Italics
    children[1].onclick = function() {
        const elementProperty = currentDivOnCanvasClicked.style.fontStyle;
        if(elementProperty != null && elementProperty != "italic") currentDivOnCanvasClicked.style.fontStyle = "italic";
        else {
            currentDivOnCanvasClicked.style.fontStyle = "normal";
        }
        
    }
    //Toggle Underline
    children[2].onclick = function() {
        const elementProperty = currentDivOnCanvasClicked.style.textDecoration;
        if(elementProperty != null && elementProperty != "underline") currentDivOnCanvasClicked.style.textDecoration = "underline";
        else {
            currentDivOnCanvasClicked.style.textDecoration = "none";
        }
    }
 }