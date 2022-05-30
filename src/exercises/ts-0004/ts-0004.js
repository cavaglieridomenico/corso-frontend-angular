/*DOM Elements*/
var getTitle = function () {
    return document.querySelector("#date-getTitle");
};
var getInput = function () {
    return document.querySelector("#number");
};
var getButtonTime = function () {
    return document.querySelector("#button-date");
};
var getMessage = function () {
    return document.querySelector(".message-to-user-transparent");
};
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getInput().addEventListener("click", function () { return (getTitle().style.color = "unset"); });
getButtonTime().addEventListener("click", function () {
    /*Clean message to user*/
    while (getMessage().hasChildNodes()) {
        getMessage().removeChild(getMessage().firstChild);
    }
    if (getInput().value === "") {
        getTitle().style.color = "red";
        return;
    }
    var number = parseInt(getInput().value);
    numbers.forEach(function (item) {
        var span = document.createElement("span");
        span.style.marginLeft = "0.8em";
        span.textContent = number * item;
        getMessage().appendChild(span);
    });
});
