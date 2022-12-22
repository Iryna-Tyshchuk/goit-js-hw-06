function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector(".js-create-btn");
const btnDestroyEl = document.querySelector(".js-destroy-btn");
const divCreateBoxesEl = document.querySelector("#boxes");

let widthtEl = 30;
let heightEl = 30;
let htmlContent = [];
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = "30px"; //не знаю як придумати збільшити розмір на кожній ітераціі
    newDiv.style.height = "30px";
    newDiv.style.borderRadius = "5px";
    htmlContent.push(newDiv);
  }
  divCreateBoxesEl.append(...htmlContent);
}

function destroyBoxes() {
  divCreateBoxesEl.innerHTML = "";
}
btnCreateEl.addEventListener("click", () => createBoxes(Number(inputEl.value)));

btnDestroyEl.addEventListener("click", destroyBoxes);
