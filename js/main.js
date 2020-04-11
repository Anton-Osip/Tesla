"use strict";
//slider
const imgSlider = document.querySelector(".img-slider");

const pref = document.querySelector("#pref");
const next = document.querySelector("#next");
const textNum = document.querySelector("#num");
const dot = document.querySelectorAll(".dot");

let num = 1;

next.addEventListener("click", function () {
  if (num == 3) {
    num = 0;
  }
  num += 1;
  visual(num);
  inin(num);
  check(num);
});
pref.addEventListener("click", function () {
  if (num == 1) {
    num = 4;
  }
  num -= 1;
  visual(num);
  inin(num);
  check(num);
});
function visual(num) {
  imgSlider.style.backgroundImage = "url(img/slider" + num + ".jpg)";
}
function inin(num) {
  let str = "0" + num;
  textNum.innerHTML = str;
}
function check(num) {
  dot[num - 1].classList.add("active");
  switch (num) {
    case 1:
      dot[1].classList.remove("active");
      dot[2].classList.remove("active");
      break;
    case 2:
      dot[0].classList.remove("active");
      dot[2].classList.remove("active");
      break;
    case 3:
      dot[0].classList.remove("active");
      dot[1].classList.remove("active");
      break;
  }
}

//menu
const menu = document.querySelector("#menu");
const menuBlock = document.querySelector("#menuBlock");
menu.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
  menuBlock.classList.toggle("menu-block-active");
});
