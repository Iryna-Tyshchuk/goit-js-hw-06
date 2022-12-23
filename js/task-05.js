const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-span"),
};
refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
  if (event.currentTarget.value.length === 0) {
    refs.nameLabel.textContent = "Anonimous";
  }
}
