const questions = document.getElementsByClassName("single-question");
const answers = document.getElementsByClassName("answer-text");
const buttons = document.querySelectorAll(".question-icon-box p");

for (let i = 0; i < answers.length; i++) {
  questions[i].addEventListener("click", () => {
    changeButton(buttons[i]);
    answers[i].classList.toggle("show-answer");
  });
}

function changeButton(button) {
  if (button.innerText === "-") {
    button.innerText = "+";
  } else {
    button.innerText = "-";
  }
}

// Code for Sidemenu

const menuBar = document.querySelector(".menu-bars");
const sideMenu = document.querySelector(".side-menu");
const companyLogo = document.querySelector(".company-logo");
menuBar.addEventListener("click", () => {
  sideMenu.classList.toggle("visible");
});
companyLogo.addEventListener("click", () => {
  sideMenu.classList.toggle("visible");
});
