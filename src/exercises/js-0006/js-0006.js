import { getSelectionSort } from "../../utils/sorting/sorting.js";

/*DOM Elements*/
const getButton = () => document.querySelector("#button-date");
const getMessage = () => document.querySelector(".message-to-user-transparent");

const numbers = [90, 77, 150, 34, 3, 80, 9];

getMessage().textContent = numbers;

getButton().addEventListener("click", () => {
  getMessage().textContent = getSelectionSort(numbers);
});
