"use strict";

const submitNewsLetterBtn = document.getElementById("submit-newsletter-btn");
const newsLetterContactForm = document.querySelector(".newsletter-contact-form");

newsLetterContactForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

let submitNewsLetter = () => {

  let firstName = document.querySelector(".first-name");
  let lastName = document.querySelector(".last-name");
  let email = document.querySelector(".email");

  submitNewsLetterBtn.addEventListener("click", (e) => {
    firstName = firstName.value;
    localStorage.setItem("firstName", firstName);

    lastName = lastName.value;
    localStorage.setItem("lastName", lastName);

    email = email.value;
    localStorage.setItem("email", email);
  });

  clearNewsLetterForm();
};

//clear all newsletter fields
let clearNewsLetterForm = () => {
  const inputs = document.querySelectorAll("input");

  submitNewsLetterBtn.addEventListener("click", () => {
    inputs.forEach((input) => (input.value = ""));
  });
};

submitNewsLetter();
