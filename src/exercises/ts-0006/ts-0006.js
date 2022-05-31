/*DOM Elements*/
var getTitle = function () { return document.querySelector("h3"); };
var getInput = function () { return document.querySelector("#number"); };
var getButton = function () { return document.querySelector("#button-date"); };
var getMessage = function () { return document.querySelector(".message-to-user-transparent"); };
getInput().addEventListener("click", function () { return (getTitle().style.color = "unset"); });
getButton().addEventListener("click", function () {
    /*Clean message to user*/
    while (getMessage().hasChildNodes()) {
        getMessage().removeChild(getMessage().firstChild);
    }
    if (getInput().value === "") {
        getTitle().style.color = "red";
        return;
    }
    var number = parseInt(getInput().value);
    var getFactor = function (num) {
        if (num <= 1)
            return 1;
        return num * getFactor(num - 1);
    };
    getMessage().textContent = getFactor(number).toString();
});
