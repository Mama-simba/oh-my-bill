let hamburger = document.getElementById("hamburger");
let sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
});

/* SLIDER */

function showEstimationSection() {
  secondPoint.classList.add("active");
  firstPoint.classList.add("active");
  counterSection.style.display = "none";
  estimationSection.style.display = "block";
}

function showCounterSection() {
  firstPoint.classList.toggle("active");
  secondPoint.classList.remove("active");
  counterSection.style.display = "flex";
  estimationSection.style.display = "none";
}

let firstPoint = document.querySelector(".point1");
let secondPoint = document.querySelector(".point2");
let counterSection = document.querySelector(".counter");
let estimationSection = document.querySelector(".estimations");

secondPoint.addEventListener("click", showEstimationSection);
firstPoint.addEventListener("click", showCounterSection);
