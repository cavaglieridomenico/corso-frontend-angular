/*DOM Elements*/
const getTitle = (): HTMLHeadingElement => document.querySelector("h3");
const getInput = (): HTMLInputElement => document.querySelector("#number");
const getButton = (): HTMLButtonElement => document.querySelector("#button-date");
const getMessage = (): HTMLDivElement => document.querySelector(".message-to-user-transparent");

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

  const number: number = parseInt(getInput().value);

  const getFactor = (num: number): number => {
    if (num <= 1) return 1;
    return num * getFactor(num - 1);
  };

  getMessage().textContent = getFactor(number).toString();
});
