import {
  isInvalidNumber,
  getSum,
  getSub,
  getMult,
  getDiv,
} from "../../assets/utils/number-management.js";
//DOM Elements
const getNumber1 = () => document.querySelector("#number-1");
const getNumber2 = () => document.querySelector("#number-2");
const getSelectOperator = () => document.querySelector("#select-operator");
const getEqual = () => document.querySelector("#equal");
const getResult = () => document.querySelector("#result");

getNumber1().addEventListener("click", (event) => {
  const userValue = prompt("Hello, choose a number!");
  getNumber1().textContent = userValue;
});

getNumber2().addEventListener("click", (event) => {
  const userValue = prompt("Hello, choose an integer number!");
  getNumber2().textContent = userValue;
});

const getMathResult = (number1, number2) => {
  switch (getSelectOperator().value) {
    case "+":
      getResult().innerHTML = getSum(number1, number2);
      break;
    case "-":
      getResult().innerHTML = getSub(number1, number2);
      break;
    case "*":
      getResult().innerHTML = getMult(number1, number2);
      break;
    case "/":
      getResult().innerHTML = getDiv(number1, number2);
      break;
  }
};

getEqual().addEventListener("click", () => {
  let number1 = parseFloat(getNumber1().innerText.replace(",", "."));
  let number2 = parseFloat(getNumber2().innerText.replace(",", "."));

  console.log(getSum(number1, number2));
  if (isInvalidNumber(number1) || isInvalidNumber(number2)) {
    window.alert("Please choose two valid numbers!");
    return;
  }

  getMathResult(number1, number2);
});
