"use strict";

const submitNewsLetterBtn = document.getElementById("submit-newsletter-btn");
const newsLetterContactForm = document.querySelector(".newsletter-contact-form");

newsLetterContactForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

const submitNewsLetter = () => {

  submitNewsLetterBtn.addEventListener("click", (e) => {
  
    const firstName = document.querySelector(".first-name").value;
    const lastName = document.querySelector(".last-name").value;
    const email = document.querySelector(".email").value;

    
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
  });

  clearNewsLetterForm();
};

//clear all newsletter fields
const clearNewsLetterForm = () => {
  const inputs = document.querySelectorAll("input");

  submitNewsLetterBtn.addEventListener("click", () => {
    inputs.forEach((input) => (input.value = ""));
  });
};

submitNewsLetter();
