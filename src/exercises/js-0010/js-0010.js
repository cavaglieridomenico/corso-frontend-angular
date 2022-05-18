import { isValidDay, isValidMonth, isValidYear } from "./date-validation.js";

/*DOM Elements*/
const getDay = () => document.querySelector("#day");
const getMonth = () => document.querySelector("#month");
const getYear = () => document.querySelector("#year");
const getButton = () => document.querySelector("#button-date");
const getTitle = () => document.querySelector("#date-title");
const getMessage = () => document.querySelector(".message-to-user");
const getAllInput = () => document.querySelectorAll("input");

const resetTitleColor = () => {
  for (let item of getAllInput()) {
    item.addEventListener("click", () => (getTitle().style.color = "unset"));
  }
};

resetTitleColor();

getButton().addEventListener("click", () => {
  if (
    getDay().value === "" ||
    getMonth().value === "" ||
    getYear().value === ""
  ) {
    getTitle().style.color = "red";
    return;
  }

  getTitle().style.color = "unset";

  const day = getDay().value;
  const month = getMonth().value;
  const year = getYear().value;

  if (!isValidDay(day) || !isValidMonth(month) || !isValidYear(year)) {
    getMessage().innerHTML = "Please, enter a valid date format.";
    return;
  }

  const userDate = {};
  userDate.day = day;
  userDate.month = month;
  userDate.year = year;

  getMessage().innerHTML = `<span>The date format is correct: </span> <span>${userDate.day} / ${userDate.month} / ${userDate.year}</span>`;
});
