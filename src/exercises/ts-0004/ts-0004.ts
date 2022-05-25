/*DOM Elements*/
const getTitle: Function = (): HTMLHeadingElement =>
  document.querySelector("#date-getTitle");

const getInput: Function = (): HTMLInputElement =>
  document.querySelector("#number");
const getButtonTime: Function = (): HTMLButtonElement =>
  document.querySelector("#button-date");
const getMessage: Function = (): HTMLDivElement =>
  document.querySelector(".message-to-user-transparent");

const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

getInput().addEventListener("click", () => (getTitle().style.color = "unset"));

getButtonTime().addEventListener("click", () => {
  /*Clean message to user*/
  while (getMessage().hasChildNodes()) {
    getMessage().removeChild(getMessage().firstChild);
  }

  if (getInput().value === "") {
    getTitle().style.color = "red";
    return;
  }

  const number: number = parseInt(getInput().value);

  numbers.forEach((item: number) => {
    const span: any = document.createElement("span");
    span.style.marginLeft = "0.8em";
    span.textContent = number * item;
    getMessage().appendChild(span);
  });
});
