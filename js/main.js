window.addEventListener("keypress", printKeypress);

var historyArr = [];
console.log(`Before: ${historyArr}`);

function printKeypress(e) {
  console.log(e);
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
    console.log(`elRemove: ${elRemove}`);
    console.log(`parentNode: ${parent}`);
    console.log(`historyArr: ${historyArr}`);
  }

  var el = document.querySelector(".history-items");
  var newEl = document.createElement("span");
  var createEl = document.createTextNode(e.key);
  newEl.appendChild(createEl);
  el.appendChild(newEl);

  console.log(el);
  console.log(newEl);
  console.log(createEl);

  console.log(`After: ${historyArr}`);
};
