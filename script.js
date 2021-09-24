let questionOption = document.querySelectorAll(".question-line-box");
let arrow = document.querySelectorAll(".question-arrow");
let question = document.querySelectorAll(".question");

for (let i = 0; i < questionOption.length; i++) {
  questionOption[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let result = this.nextElementSibling;
    result.classList.toggle("active");
    if ((questionOption[i].style = "active")) {
      arrow[i].classList.toggle("arrow-rotate");
      question[i].classList.toggle("question-active");
    }
  });
}

// REZERWOWE
// for (let i = 0; i < questionOption.length; i++) {
//     questionOption[i].addEventListener("click", function () {
//       this.classList.toggle("active");
//       let result = this.nextElementSibling;
//       result.classList.toggle("active");
//       if ((questionOption[i].style = "active")) {
//         arrow[i].classList.toggle("arrow-rotate");
//       }
//     });
//   }
