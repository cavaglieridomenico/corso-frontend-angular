"use strict";
/*DOM Elements*/
const getMessageToUser = () => document.querySelector(".message-to-user-text");
const getForm = () => document.querySelector("#form");
const getBrandName = () => document.querySelector("#brand-name");
const getButton = () => document.querySelector(".button");
const getInfo = () => document.querySelector(".icon-hint");
const getResponseSearch = () => document.querySelector(".response-search-container");
const getAdminName = [
    { name: "giovanni", role: "student", grade: "junior" },
    { name: "domenico", role: "student", grade: "junior" },
    { name: "daniele", role: "student", grade: "junior" },
    { name: "francesco", role: "student", grade: "junior" },
    { name: "cristiano", role: "student", grade: "junior" },
    { name: "emilia", role: "student", grade: "junior" },
    { name: "marco", role: "student", grade: "junior" },
    { name: "gabriele", role: "student", grade: "junior" },
];
/**
 * Print message to user
 * @param {string} color
 * @param {string} text
 */
const setMessageToUser = (color = "unset", text = "Please, enter your name.") => {
    getMessageToUser().style.color = color;
    getMessageToUser().textContent = text;
};
/*Reset messages to the user at the new attempt*/
getBrandName().addEventListener("click", () => {
    setMessageToUser("unset", "Please, enter your name.");
    getResponseSearch().textContent = "";
});
/*Show tip*/
getInfo().addEventListener("click", () => setMessageToUser("unset", "Access allowed only to course members..."));
/*Submit name*/
getForm().addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = getBrandName().value.toLowerCase().trim();
    if (!inputValue) {
        setMessageToUser("red");
        return;
    }
    const filteredList = getAdminName.filter((item) => item.name === inputValue);
    if (filteredList.length === 0) {
        setMessageToUser("red", "Sorry, access denied...");
    }
    else {
        setMessageToUser("unset");
        while (getResponseSearch().hasChildNodes()) {
            getResponseSearch().removeChild(getResponseSearch().firstChild);
        }
        const ul = document.createElement("ul");
        getResponseSearch().appendChild(ul);
        filteredList.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `Name: ${item.name.toUpperCase()}
         | Role: ${item.role.toUpperCase()}
         | Grade: ${item.grade.toUpperCase()}`;
            ul.appendChild(li);
        });
    }
});
