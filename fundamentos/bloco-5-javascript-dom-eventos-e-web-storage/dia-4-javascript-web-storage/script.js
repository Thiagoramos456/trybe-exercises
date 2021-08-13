let inputArea = document.getElementById("plain-text");
let submitButton = document.getElementById("btn-submitText");
let readArea = document.querySelector(".read-area");
let colorPicker = document.getElementById("color");

function init() {
    console.log("Cheguei");
    submitButton.addEventListener("click", readText);
    colorPicker.addEventListener("input", changeColor);
}

function createParagraph(text) {
    let p = document.createElement("p");
    p.className = "text";
    p.innerText = text;
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

window.onload = init;