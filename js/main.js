window.addEventListener("keypress", printKeypress);

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
};

function printHexcode(e) {
  let outputPressedKeyHexcode = document.querySelector(".hexcode");
  outputPressedKeyHexcode.innerHTML = e.keyCode.toString(16);
};
