/* Table of Contents
 * 1 - Keypress
 *    1-1 - Print Keypresses to DOM
 *    1-2 - Print Keypress History to DOM
 * 2 - Down Arrow
 * 3 - Form
*/

///////////////////////////////////////////////////////////////

// 1 - Keypress

// 1-1 - Print Keypresses to DOM
window.addEventListener("keypress", printKeypress);
window.onkeydown = function(e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
}

let historyArr = [];

function printKeypress(e) {
  let pressedKey = e.key;
  let pressedKeyCode = e.keyCode;
  let pressedKeyDecimal = e.charCode;

  printPressedKey(e);
  printPressedKeyCode(e);
  printDecimalCode(e);
  printHexcode(e);
  printHistoryToDOM(e);
};
      function printPressedKey(e) {
        let outputPressedKey = document.querySelector(".letter");
        outputPressedKey.innerHTML = e.key;
      };

      function printPressedKeyCode(e) {
        let outputPressedKeyCode = document.querySelector(".keycode");
        outputPressedKeyCode.innerHTML = e.keyCode;
      };

      function printDecimalCode(e) {
        let outputPressedKeyDecimal = document.querySelector(".decimal-code");
        outputPressedKeyDecimal.innerHTML = e.charCode;
      };

      function printHexcode(e) {
        let outputPressedKeyHexcode = document.querySelector(".hexcode");
        outputPressedKeyHexcode.innerHTML = e.keyCode.toString(16);
      };



// 1-2 - Print Keypress History to DOM
function printHistoryToDOM(e) {
  historyArr.push(e.key);
  if (historyArr.length > 10) {
    historyArr.shift();
    let elRemove = document.querySelector("span");
    let parent = elRemove.parentNode.removeChild(elRemove);
  };

  let el = document.querySelector(".history-items");
  let newEl = document.createElement("span");
  let createEl = document.createTextNode(e.key);
  newEl.appendChild(createEl);
  el.appendChild(newEl);
};



///////////////////////////////////////////////////////////////

// 2 - Down Arrow
document.querySelector(".proceed-to-form-arrow").addEventListener("click", downArrowIsClicked);

function downArrowIsClicked(e) {
  location.href = "#ascii-form";
};

///////////////////////////////////////////////////////////////



// 3 - Form
document.querySelector("#submit-form").addEventListener("click", submitASCIItoTable);

function submitASCIItoTable(e) {
    console.log("successful click: submit-form");
    console.log(e);
    let inputValue = document.querySelector(".ascii-input").value;
    console.log(inputValue);

    if (inputValue) {
      makeTheTableRows(inputValue);
      let form = document.querySelector(".ascii-form-input").reset();
    } else if (inputValue === " ") {
      makeTheTableRows(inputValue, space);
    } else {
      return false;
    }
};
      function makeTheTableRows(inputValue) {
        let table = document.querySelector(".table");
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        if (inputValue.charCodeAt(0) === 32) {
          cell1.innerHTML += "space bar";
        } else {
          cell1.innerHTML += printPressedKeyToTable(inputValue);
        }

        cell2.innerHTML += printKeyCodeToTable(inputValue);
        cell3.innerHTML += printKeyCodeToTable(inputValue);
        cell4.innerHTML += printHexcodeToTable(inputValue);
      };

      function printPressedKeyToTable(e) {
        return e;
      };

      function printKeyCodeToTable(e) {
        return e.charCodeAt(0);
      };

      function printHexcodeToTable(e) {
        return e.charCodeAt(0).toString(16);
      };
