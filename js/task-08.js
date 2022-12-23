const formEL = document.querySelector(".login-form");
const objLogPassw = {
  email: "",
  password: "",
};

formEL.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  objLogPassw.email = email.value;
  objLogPassw.password = password.value;

  //   console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
console.log(objLogPassw);
