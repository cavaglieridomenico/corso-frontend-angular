import { getMonth, getGreeting } from "../../assets/utils/date-management.js";

/*DOM Elements*/
const getModalContainer = () =>
  document.querySelector(".table-modal-container");
const getCloseModal = () => document.querySelector(".close-modal");
const getModal = () => document.querySelector(".table-modal");
const getLoginSection = () => document.querySelector("#login");

const user = {
  name: prompt("Please, insert your name."),
};

const date = () => new Date();

while (user.name === null || user.name === "") {
  user.name = prompt("Please, insert your name.");
}

getCloseModal().addEventListener("click", () => {
  getModalContainer().classList.add("hidden");
});

const setGreetUserModal = () => {
  if (!user.name) return;
  getModalContainer().classList.remove("hidden");
  getModal().innerHTML = `
<h1>Welcome ${user.name}.</h1>
`;
};

const setGreetUser = () => {
  if (!user.name) return;
  getLoginSection().innerHTML = `
<p>${date().getDate()} ${getMonth(
    date().getMonth()
  )} ${date().getFullYear()}</p>
<h1>${getGreeting(date().getHours())} ${user.name}</h1>
<span>Nota: i tuoi dati sono salvati nel Session Storage del browser.</span>
<span>Per accedere premere F12.</span>
`;
};

const setStorageUserData = () => {
  if (!user.name) return;
  window.sessionStorage.setItem("user", JSON.stringify(user));
};

setGreetUserModal();
setGreetUser();
setStorageUserData();
