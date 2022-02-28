/*************
 * FUNCTIONS
 *************/

let listCours = [];
let deleteBtn, H2;

function onClick(event) {
  event.preventDefault();
  const name = document.querySelector("#toAdd").value.toLowerCase().trim();
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(name));
  listCours.appendChild(li);
  document.querySelector("form:first-of-type").reset();
  H2.textContent = `there are ${li.length} products ${
    li.length > 1 ? "s" : ""
  } in the list`;
}

function onClickDelete(event) {
  event.preventDefault();
  var popup = document.querySelector("#popup");
  popup.classList.toggle("hide");
}
function deleteOne() {
  const name = document.querySelector("#toDelete").value.toLowerCase();
  const li = listCours.getElementsByTagName(name);
  console.log(li);
  // for (i = 0; i < li.length; i++) {
  //   a = li[i].getElementsByTagName("a")[0];
  //   console.log(a);
  //   if (name == a) {
  //     li[i].remove(li);
  //   }
  // }
}

function deleteAll() {
  var list = document.querySelectorAll(".list li");
  list.forEach((li) => {
    li.remove(li);
    console.log(li);
  });
}
function closeModal() {
  document.querySelector("#popup").style.display = "none";
}
function onCancel(event) {
  if (event.target.matches("annuler")) {
    closeModal();
  } else document.querySelector("#popup").classList.toggle("hide") == "ture";
}
/*************
 * MAIN CODE
 *************/
document.addEventListener("DOMContentLoaded", () => {
  listCours = document.querySelector(".list");
  deleteBtn = document.querySelector(".hide");
  H2 = document.querySelector("section h2");
  document.querySelector("form").addEventListener("submit", onClick);
  document.querySelector("#deleteOne").addEventListener("click", onClickDelete);
  document.querySelector(".annuler").addEventListener("click", onCancel);
  document.querySelector("#delete").addEventListener("click", deleteAll);
  document.querySelector("#btnDelete").addEventListener("click", deleteOne);
});
