let inputArea = document.getElementById("plain-text");
let submitButton = document.getElementById("btn-submitText");
let readArea = document.querySelector(".read-area")

function init() {
    console.log("Cheguei");
    submitButton.addEventListener("click", readText);
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

window.onload = init;