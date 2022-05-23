/*DOM Elements*/
const getTitle = () => document.querySelector("h3");
const getInput = () => document.querySelector("#number");
const getButton = () => document.querySelector("#button-date");
const getMessage = () => document.querySelector(".message-to-user-transparent");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

getInput().addEventListener("click", () => (getTitle().style.color = "unset"));

getButton().addEventListener("click", () => {
  /*Clean message to user*/
  while (getMessage().hasChildNodes()) {
    getMessage().removeChild(getMessage().firstChild);
  }

  if (getInput().value === "") {
    getTitle().style.color = "red";
    return;
  }

  const number = parseInt(getInput().value);

  const getFactor = (num) => {
    if (num <= 1) return 1;
    return num * getFactor(num - 1);
  };

  getMessage().textContent = getFactor(number);
});
