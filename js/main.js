window.addEventListener("keypress", printKeypress);

var historyArr = [];
// console.log(`Before: ${historyArr}`);

function printKeypress(e) {
  // console.log(e);
  // console.log(e.key);
  let pressedKey = e.key;
  let pressedKeyCode = e.keyCode;
  let pressedKeyDecimal = e.charCode;

  // KeyOutput
  let outputPressedKey = document.querySelector(".letter");
  outputPressedKey.innerHTML = pressedKey;

  // Keycode Output
  let outputPressedKeyCode = document.querySelector(".keycode");
  outputPressedKeyCode.innerHTML = pressedKeyCode;

  // Decimal Code Output
  let outputPressedKeyDecimal = document.querySelector(".decimal-code");
  outputPressedKeyDecimal.innerHTML = pressedKeyDecimal;

  // Hexcode Output
  printHexcode(e);

  // Print History to DOM
  printHistoryToDOM(e);
};

function printHexcode(e) {
  let outputPressedKeyHexcode = document.querySelector(".hexcode");
  outputPressedKeyHexcode.innerHTML = e.keyCode.toString(16);
};

function printHistoryToDOM(e) {
  historyArr.push(e.key);
  if (historyArr.length > 10) {
    // historyArr.shift();
    historyArr.shift();
    var elRemove = document.querySelector("span");
    var parent = elRemove.parentNode.removeChild(elRemove);
    // console.log(`elRemove: ${elRemove}`);
    // console.log(`parentNode: ${parent}`);
    // console.log(`historyArr: ${historyArr}`);
  }

  var el = document.querySelector(".history-items");
  var newEl = document.createElement("span");
  var createEl = document.createTextNode(e.key);
  newEl.appendChild(createEl);
  el.appendChild(newEl);

  // console.log(el);
  // console.log(newEl);
  // console.log(createEl);
  //
  // console.log(`After: ${historyArr}`);
};


/////////////////

document.querySelector(".proceed-to-form-arrow").addEventListener("click", downArrowIsClicked);

function downArrowIsClicked(e) {
  location.href = "#ascii-form";
};


////////////////

document.querySelector("#submit-form").addEventListener("click", submitASCIItoTable);

function submitASCIItoTable(e) {
    console.log("successful click: submit-form");
    console.log(e);
    var checkValue = document.querySelector(".ascii-input").value;
    console.log(checkValue);

    var table = document.querySelector(".table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML += "1";
    cell2.innerHTML += "1";
    cell3.innerHTML += "1";
    cell4.innerHTML += "1";
};
