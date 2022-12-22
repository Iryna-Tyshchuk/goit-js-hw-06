function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorInfo = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

function changeBodyBg(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorInfo.textContent = document.body.style.backgroundColor;
}

btnEl.addEventListener("click", changeBodyBg);
