const body = document.getElementsByTagName("body")[0];
const numberButtons = document.querySelectorAll("[data-number]"); // number btn 1,2,3 etc
const operationButtons = document.querySelectorAll("[data-operation]"); // operation btn +,-,/,*
const equalsButton = document.querySelector("[data-equals]"); // = btn
const deleteButton = document.querySelector("[data-delete]"); // DEL btn
const allClearButton = document.querySelector("[data-all-clear]"); // RESET btn
const currentOperand = document.querySelector("[data-current-operand]");
const previousOperand = document.querySelector("[data-previous-operand]");
const ball = document.querySelector(".ball");
const switch_theme = document.querySelector(".switch");
let theme = 1;
let output = "";
numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.innerText);
    let arr = new Array();
    previousOperand.innerText += btn.innerText;
  });
});
allClearButton.addEventListener("click", () => {
  currentOperand.innerText = "";
  previousOperand.innerText = "";
});
deleteButton.addEventListener("click", () => {
  console.log(1);

  let lastChar = previousOperand.innerText;
  let newStr;
  if (lastChar.length != 0) {
    newStr = lastChar.substring(0, lastChar.length - 1);
    previousOperand.innerText = newStr;
  } else {
    return;
  }
});

operationButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.innerText);
    previousOperand.innerText += btn.innerText.toString();
  });
});
equalsButton.addEventListener("click", () => {
  output = eval(previousOperand.innerText);
  previousOperand.innerText = output;
});

ball.addEventListener("click", () => {
  theme++;

  switch (theme) {
    case 2:
      switch_theme.classList.add("justify-center");
      body.classList.remove("theme-1");
      body.classList.add("theme-2");
      break;
    case 3:
      switch_theme.classList.remove("justify-center");
      switch_theme.classList.add("justify-end");
      body.classList.remove("theme-2");
      body.classList.add("theme-3");
      break;
    case 4:
      switch_theme.classList.remove("justify-end");
      body.classList.remove("theme-3");
      body.classList.add("theme-1");
      theme = 1;
      break;
    default:
      theme = 1;
      break;
  }
});
