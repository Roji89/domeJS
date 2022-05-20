"use strict";

/*************
 * FUNCTIONS
 *************/
var game = [];
let gamerChoises = [];
var selectR = document.getElementById("rooms");
var selectW = document.getElementById("weapons");
var selectS = document.getElementById("suspects");
var res = [];
var answerList = [];
// in this function i create the random choices for the game to get the random
function createRandomChoice() {
  const suspect = Math.floor(Math.random() * datas.suspects.length);
  const weapon = parseInt(Math.random() * datas.weapons.length);
  const room = parseInt(Math.random() * datas.rooms.length);
  game = [datas.suspects[suspect], datas.weapons[weapon], datas.rooms[room]];
  console.log(game);
  //to see the result and be able to compare the result!
}

//here i created the option for each selector!
function onClickSuspect() {
  datas.suspects.forEach((element) => {
    var option = document.createElement("option");
    option.innerText = element;
    selectS.appendChild(option);
  });
}

function onClickWeapon() {
  datas.weapons.forEach((element) => {
    var option = document.createElement("option");
    option.innerText = element;
    selectW.appendChild(option);
  });
}

function onClickRoom() {
  datas.rooms.forEach((element) => {
    var option = document.createElement("option");
    option.innerText = element;
    selectR.appendChild(option);
  });
}

//i created this function to see if we
function compareValues(game, res) {
  return game === res ? "✅" : "❌";
}

// in this part i put the listner on click to remove the form then
function submitForm() {
  var removeForm = document.querySelector("form");
  removeForm.remove();
  res = [selectS.value, selectW.value, selectR.value];
  let gameRes = false;
  const div = document.querySelector("body");
  console.log("res", res);
  console.log(typeof game);
  console.log(typeof res);
  // i created var to compare randome game value and the value which player choosed!
  var comparedValues = [
    compareValues(game[0], res[0]),
    compareValues(game[1], res[1]),
    compareValues(game[2], res[2]),
  ];
  // here if the answer is correct so it will put gameres correct
  if (!comparedValues.includes("❌")) {
    gameRes = true;
  }
  // now add the table which containes the result of the game
  div.insertAdjacentHTML(
    "beforeend",
    `<div>
    <div margin="10px">
      <span >c'est ${res[0]} qui a tué le Docteur LENOIR avec la/le ${
      res[1]
    }dans le/le ${res[2]}</span> 
      </div>
      <table> 
      <tr>
        <th>suspec</th><th>Weapon</th><th>Room</th>
      <tr> 
      <tr>
        <td>
          ${selectS.value}
        </td>
        <td> 
          ${selectW.value} 
        </td>
        <td> 
        ${selectR.value}
        </td>
      </tr> 
      <tr><td> 
      ${compareValues(game[0], res[0])} 
      </td><td> 
      ${compareValues(game[1], res[1])} 
      </td><td> 
      ${compareValues(game[2], res[2])} 
      </td></tr> 
      </table>
      <h3 >${gameRes ? "vous avez vu juste! BRAVO" : "ET c'est raté"}</h3> 
      <div margin="10px">
      <span >${
        gameRes
          ? ""
          : `c'est ${game[0]} qui a tué le Docteur LENOIR avec la/le ${game[1]}dans le/le ${game[2]}`
      }</span> 
      </div>
      </div>`
  );
}

/*************
 * MAIN CODE
 *************/
document.addEventListener("DOMContentLoaded", () => {
  createRandomChoice();
  onClickSuspect();
  onClickWeapon();
  onClickRoom();
  document.querySelector("#accusation").addEventListener("click", submitForm);
});
