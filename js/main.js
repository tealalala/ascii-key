window.addEventListener("keypress", printKeypress);

function printKeypress(e) {
  // console.log(e);
  // console.log(e.key);
  var pressedKey = e.key;
  var outputPressedKey = document.querySelector(".letter");
  outputPressedKey.innerHTML = pressedKey;
};
