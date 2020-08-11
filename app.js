const contactForm = document.getElementById("contact-form");
const submitForm = document.getElementById("btn2");

getCrisisOption = () => {
  const hotlineForm = document.getElementById("hotline-form");
  const results = document.getElementById("results");

  let result = hotlineForm.value;
  console.log(result);

  if (result === "Suicide") {
    results.innerHTML = `${result}: (800) 273-TALK (8255)`;
  }
  if (result === "Depression") {
    results.innerHTML = `${result}: (800)-662-HELP (4357)`;
  }
  if (result === "Substance Abuse") {
    results.innerHTML = `${result}: (800)-662-4357`;
  }
  if (result === "Domestic Violence") {
    results.innerHTML = `${result}: (800) 799-7233`;
  }
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitResourceForm = () => {
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let email = document.getElementById("email");

  submitForm.addEventListener("click", (e) => {
    firstName = firstName.value;
    localStorage.setItem("firstName", firstName);

    lastName = lastName.value;
    localStorage.setItem("lastName", lastName);

    email = email.value;
    localStorage.setItem("email", email);
  });
  clearForm();
};

clearForm = () => {
  const inputs = document.querySelectorAll("input");
  submitForm.addEventListener("click", () => {
    inputs.forEach((input) => (input.value = ""));
  });
};

getCrisisOption();
submitResourceForm();
