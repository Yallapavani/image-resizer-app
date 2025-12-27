let imageElement = document.getElementById("image");
let defaultImageWidth = 200;
imageElement.style.width = defaultImageWidth;

let warningMessage = document.getElementById("warningMessage");
let imageWidthElement = document.getElementById("imageWidth");

let midWidth = 100;
let maxWidth = 300;

imageElement.style.width = defaultImageWidth + "px";
imageWidthElement.textContent = defaultImageWidth + "px";

function increment() {
    if (defaultImageWidth < maxWidth) {
        defaultImageWidth += 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidthElement.textContent = defaultImageWidth + "px";
        warningMessage.textContent = "";
    } else {
        warningMessage.textContent = "Can't increase more than 300px";
    }
}

function decrement() {
    if (defaultImageWidth > midWidth) {
        defaultImageWidth -= 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidthElement.textContent = defaultImageWidth + "px";
        warningMessage.textContent = "";
    } else {
        warningMessage.textContent = "Can't decrease less than 100px";
    }
}