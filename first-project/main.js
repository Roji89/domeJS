"use strict";

/*************
 * FUNCTIONS
 *************/
function toggleRectangle() {
  rectangle.classList.toggle("hide");
}

function mouseOver() {
  console.log("ok In");

  rectangle.classList.add("important");
}
function doubleClick() {
  console.log("ok out");

  rectangle.classList.add("good");
}
function mouseOut() {
  rectangle.classList.remove("important", "good");
}
/*************
 * MAIN CODE
 *************/

const rectangle = document.querySelector(".rectangle");
document
  .querySelector("#toggle-rectangle")
  .addEventListener("click", toggleRectangle);

rectangle.addEventListener("mouseover", mouseOver, false);
rectangle.addEventListener("dblclick", doubleClick, false);
rectangle.addEventListener("mouseout", mouseOut, false);
