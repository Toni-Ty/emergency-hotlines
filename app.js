const contactForm = document.getElementById("contact-form");
const submitForm = document.getElementById("submit-btn");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

let submitResourceForm = () => {
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

let clearForm = () => {
  const inputs = document.querySelectorAll("input");
  submitForm.addEventListener("click", () => {
    inputs.forEach((input) => (input.value = ""));
  });
};

submitResourceForm();
