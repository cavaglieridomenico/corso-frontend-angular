/*DOM Elements*/
const getTitle = () => document.querySelector("#date-title");
const getInput = () => document.querySelector("#user-number");
const getBtnAddNumber = () => document.querySelector("#add-number");
const getMessage = () => document.querySelector(".message-to-user-transparent");
const getBtnSortNumbers = () => document.querySelector("#sort-numbers");

/*Closure*/
const list = [];

getInput().addEventListener("click", () => (getTitle().style.color = "unset"));

getBtnAddNumber().addEventListener("click", () => {
  if (!getInput().value) {
    getTitle().style.color = "red";
    return;
  }
  list.push(parseFloat(getInput().value));
  getMessage().textContent = list;
});

getBtnSortNumbers().addEventListener("click", () => {
  getMessage().textContent = list.sort((a, b) => a - b);
});
