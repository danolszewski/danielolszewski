const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconTree = document.querySelector(".fa-tree");
const logo = document.querySelector(".logo");
const menu = document.querySelector("ul");

burger.addEventListener("click", function () {
  iconBurger.classList.toggle("off");
  iconTree.classList.toggle("off");
  logo.classList.toggle("show");
  menu.classList.toggle("show");
})