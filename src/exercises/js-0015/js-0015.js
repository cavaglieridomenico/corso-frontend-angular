//DOM Elements
const getMessage1 = () => document.querySelector(".message1");
const getTextArea = () => document.querySelector("#sentence");
const getMessage2 = () => document.querySelector(".message2");
const getInput = () => document.querySelector("#keyword");
const getForm = () => document.querySelector("form");

//Reset input errors
getTextArea().addEventListener(
  "click",
  () => (getMessage1().style.color = "unset")
);
getInput().addEventListener(
  "click",
  () => (getMessage2().style.color = "unset")
);

const isUpperCase = (letter) =>
  letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90;

const isLowerCase = (letter) =>
  letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122;

/**
 * Given a message and a keyword, the encrypted message returns
 * @param {string} sentence
 * @param {string} keyword
 * @returns string
 */
const getEncryptedMessage = (sentence, keyword) => {
  let encryptedMessage = "";
  for (let i = 0, j = 0; i < sentence.length; i++) {
    let currentLetter = sentence[i];
    if (isUpperCase(currentLetter)) {
      let upperLetter =
        (currentLetter.charCodeAt() -
          65 +
          (keyword[j % keyword.length].toUpperCase().charCodeAt() - 65)) %
        26;
      encryptedMessage += String.fromCharCode(upperLetter + 65);
      j++;
    } else if (isLowerCase(currentLetter)) {
      let lowerLetter =
        (currentLetter.charCodeAt() -
          97 +
          (keyword[j % keyword.length].toUpperCase().charCodeAt() - 97)) %
        26;
      encryptedMessage += String.fromCharCode(lowerLetter + 97);
      j++;
    } else {
      encryptedMessage += currentLetter;
    }
  }
  return encryptedMessage;
};

getForm().addEventListener("submit", (event) => {
  event.preventDefault();
  if (getTextArea().value === "") {
    getMessage1().style.color = "red";
    return;
  }
  if (getInput().value === "") {
    getMessage2().style.color = "red";
    return;
  }
  getTextArea().value = getEncryptedMessage(
    getTextArea().value,
    getInput().value
  );
});
