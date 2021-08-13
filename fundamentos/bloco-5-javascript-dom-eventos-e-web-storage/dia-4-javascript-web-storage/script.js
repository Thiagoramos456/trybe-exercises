let fontList = [
  "Monospace",
  "American Typewriter",
  "Andale Mono",
  "Arial",
  "Arial Black",
  "Arial Narrow",
  "Arial Rounded MT Bold",
  "Arial Unicode MS",
  "Avenir",
  "Avenir Next",
  "Avenir Next Condensed",
  "Baskerville",
  "Big Caslon",
  "Bodoni 72",
  "Bodoni 72 Oldstyle",
  "Bodoni 72 Smallcaps",
  "Bradley Hand",
  "Brush Script MT",
  "Chalkboard",
  "Chalkboard SE",
  "Chalkduster",
  "Charter",
  "Cochin",
  "Comic Sans MS",
  "Copperplate",
  "Courier",
  "Courier New",
  "Didot",
  "DIN Alternate",
  "DIN Condensed",
  "Futura",
  "Geneva",
  "Georgia",
  "Gill Sans",
  "Helvetica",
  "Helvetica Neue",
  "Herculanum",
  "Hoefler Text",
  "Impact",
  "Lucida Grande",
  "Luminari",
  "Marker Felt",
  "Menlo",
  "Microsoft Sans Serif",
  "Monaco",
  "Noteworthy",
  "Optima",
  "Palatino",
  "Papyrus",
  "Phosphate",
  "Rockwell",
  "Savoye LET",
  "SignPainter",
  "Skia",
  "Snell Roundhand",
  "Tahoma",
  "Times",
  "Times New Roman",
  "Trattatello",
  "Trebuchet MS",
  "Verdana",
  "Zapfino",
];

let inputArea = document.getElementById("plain-text");
let submitButton = document.getElementById("btn-submitText");
let readArea = document.querySelector(".read-area");
let colorPicker = document.getElementById("color");
let fontSizeSelector = document.getElementById("size");
let spaceLineSelector = document.getElementById("spaceLine");
let fontFamilySelector = document.getElementById("fontFamily");
let initialFontSize = "25";
let initialSpaceLine = "50";
window.onload = init;

function init() {
  fontSizeSelector.value = initialFontSize;
  spaceLineSelector.value = initialSpaceLine;
  populateFontList();

  submitButton.addEventListener("click", readText);
  colorPicker.addEventListener("input", changeColor);
  fontSizeSelector.addEventListener("input", changeFontSize);
  spaceLineSelector.addEventListener("input", changeLineSpacing);
  fontFamilySelector.addEventListener("input", changeFontFamily);
}

function populateFontList() {
  for (font of fontList) {
    let option = document.createElement("option");
    option.value = font;
    option.innerText = font;
    fontFamilySelector.appendChild(option);
  }
}

function createParagraph(text) {
  let p = document.createElement("p");
  p.className = "text";
  p.innerText = text;
  p.style.fontSize = "25px";
  p.style.lineHeight = "50px";
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
  console.log(color, text);
  text.style.color = color;
}

function changeFontSize(event) {
  let fontSize = event.target.value;
  let text = readArea.querySelector(".text");
  text.style.fontSize = fontSize + "px";
}

function changeLineSpacing(event) {
  let spaceSize = event.target.value;
  let text = readArea.querySelector(".text");
  text.style.lineHeight = spaceSize + "px";
}

function changeFontFamily(event) {
  let fontFamily = event.target.value;
  let text = readArea.querySelector(".text");
  text.style.fontFamily = fontFamily;
}
