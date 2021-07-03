 function createTextController(){
    const controlContainerDiv = document.querySelector("#more-controls");


    //Remove previousController
    emptyControllerDiv(controlContainerDiv);

    //Start new Div
    const textControlDiv = document.createElement('div');
    textControlDiv.setAttribute("id","more-controls");
    let colorPicker = addTextColorPicker();
    textControlDiv.appendChild(colorPicker);
    controlContainerDiv.appendChild(textControlDiv);
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