const inputEl = document.querySelector("#validation-input");

function onValidClassAdd(event) {
  console.log(event);
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.className = "valid";
  } else {
    inputEl.className = "invalid";
  }
}

inputEl.addEventListener("blur", onValidClassAdd);
