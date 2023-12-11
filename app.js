"use strict";

const sideBarBtn = document.querySelector(".hambergur-menu");
const closeBarBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

sideBarBtn.addEventListener("click", () => {
  sideBar.classList.toggle("show-side");
});

closeBarBtn.addEventListener("click", () => {
  sideBar.classList.remove("show-side");
});