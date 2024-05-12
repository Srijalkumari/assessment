"use strict";
const sizeOption = document.querySelector(".size-option");

sizeOption.addEventListener("click", function (e) {
  if (e.target.tagName === "DIV") {
    const selectedSize = sizeOption.querySelector(".selected");
    if (selectedSize) {
      selectedSize.classList.remove("selected");
    }
    if (selectedSize !== e.target) {
      e.target.classList.add("selected");
    }
  }
});
