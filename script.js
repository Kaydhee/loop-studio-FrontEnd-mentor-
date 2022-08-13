"use strict";

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileNav = document.querySelector(".mobile-nav");

const openNavMenu = function () {
  mobileNav.classList.remove("hidden");
};

const closeNavMenu = function () {
  mobileNav.classList.add("hidden");
};

openMenu.addEventListener("click", openNavMenu);
closeMenu.addEventListener("click", closeNavMenu);
