let display = document.querySelector("#display");

function appendToDisplay(item){
    display.value += item;
}

function clearDisplay(){
    display.value = " ";
}

function displayEqual(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}