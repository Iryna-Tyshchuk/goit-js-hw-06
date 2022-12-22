const inputEl = document.querySelector("#font-size-control");
const textSizeEl = document.querySelector("#text");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onInputValue(event) {
  textSizeEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
  textSizeEl.style.color = getRandomHexColor();
}
inputEl.addEventListener("input", onInputValue);
