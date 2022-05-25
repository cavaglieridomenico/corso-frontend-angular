/*DOM Elements*/
var title = document.querySelector("#date-title");
var getInput = document.querySelector("#number");
var getButtonTime = document.querySelector("#button-date");
var getMessage = document.querySelector(".message-to-user-transparent");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getInput.addEventListener("click", function () { return (title.style.color = "unset"); });
getButtonTime.addEventListener("click", function () {
    /*Clean message to user*/
    while (getMessage.hasChildNodes()) {
        getMessage.removeChild(getMessage.firstChild);
    }
    if (getInput.value === "") {
        title.style.color = "red";
        return;
    }
    var number = parseInt(getInput.value);
    numbers.forEach(function (item) {
        var span = document.createElement("span");
        span.style.marginLeft = "0.8em";
        span.textContent = number * item;
        getMessage.appendChild(span);
    });
});
