//Math
const getSum = (a: number, b: number): number => parseFloat((a + b).toFixed(1));
const getSub = (a: number, b: number): number => parseFloat((a - b).toFixed(1));
const getMult = (a: number, b: number): number =>
  parseFloat((a * b).toFixed(1));
const getDiv = (a: number, b: number): number => parseFloat((a / b).toFixed(1));

//Validation
const isInvalidNumber = (input: any): boolean => {
  return typeof input !== "number" || isNaN(input);
};

//DOM Elements
const getNumber1 = (): any => document.querySelector("#number-1");
const getNumber2 = (): any => document.querySelector("#number-2");
const getSelectOperator = (): any => document.querySelector("#select-operator");
const getEqual = (): any => document.querySelector("#equal");
const getResult = (): any => document.querySelector("#result");

getNumber1().addEventListener("click", () => {
  const userValue = prompt("Hello, choose a number!");
  getNumber1().textContent = userValue;
});

getNumber2().addEventListener("click", () => {
  const userValue = prompt("Hello, choose an integer number!");
  getNumber2().textContent = userValue;
});

const getMathResult = (number1: number, number2: number): void => {
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
  let number1: number = parseFloat(getNumber1().innerText.replace(",", "."));
  let number2: number = parseFloat(getNumber2().innerText.replace(",", "."));

  if (isInvalidNumber(number1) || isInvalidNumber(number2)) {
    window.alert("Please choose two valid numbers!");
    return;
  }

  getMathResult(number1, number2);
});
