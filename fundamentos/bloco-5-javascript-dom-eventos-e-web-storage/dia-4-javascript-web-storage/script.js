let inputArea = document.getElementById("plain-text");
let submitButton = document.getElementById("btn-submitText");
let readArea = document.querySelector(".read-area");
let colorPicker = document.getElementById("color");
let fontSizeSelector =  document.getElementById("size");
let initialFontSize = "25";

function init() {
    fontSizeSelector.value = initialFontSize;
    submitButton.addEventListener("click", readText);
    colorPicker.addEventListener("input", changeColor);
    fontSizeSelector.addEventListener("input", changeFontSize);
}

function createParagraph(text) {
    let p = document.createElement("p");
    p.className = "text";
    p.innerText = text;
    p.style.fontSize = "25px";
    return p;
}

function readText() {
    let plainText = inputArea.value;
    let paragraph = createParagraph(plainText);
    inputArea.remove();
    submitButton.remove();
    readArea.appendChild(paragraph);
}

function changeColor(event) {
    let color = event.target.value;
    let text = readArea.querySelector(".text");
    console.log(color, text)
    text.style.color = color;
}

function changeFontSize(event) {
    let fontSize = event.target.value;
    let text = readArea.querySelector(".text");
    text.style.fontSize = fontSize + "px";
}

window.onload = init;