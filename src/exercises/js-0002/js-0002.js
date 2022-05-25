/*DOM Elements*/
const getMessageToUser = () => document.querySelector(".message-to-user-text");
const getForm = () => document.querySelector("#form");
const getName = () => document.querySelector("#admin-name");
const getButton = () => document.querySelector(".button");
const getInfo = () => document.querySelector(".icon-hint");

const getAdminName = () => {
  return [
    "giovanni",
    "domenico",
    "daniele",
    "nicola",
    "cristiano",
    "emilia",
    "marco",
    "giorgio",
  ];
};

/**
 * Print message to user
 * @param {string} color
 * @param {string} text
 */
const setMessageToUser = (
  color = "unset",
  text = "Please, enter your name."
) => {
  getMessageToUser().style.color = color;
  getMessageToUser().textContent = text;
};

/*Reset messages to the user at the new attempt*/
getName().addEventListener("click", () => {
  setMessageToUser("unset", "Please, enter your name.");
});

/*Show tip*/
getInfo().addEventListener("click", () =>
  setMessageToUser("unset", "Access allowed only to course members...")
);

/*Submit name*/
getForm().addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = getName().value.toLowerCase().trim();
  if (!inputValue) {
    setMessageToUser("red");
    return;
  }
  if (getAdminName().some((item) => item === inputValue)) {
    setMessageToUser("lightGreen", `Welcome, ${inputValue.toUpperCase()}`);
  } else {
    setMessageToUser("red", "Sorry, access denied...");
  }
  getName().value = "";
});
