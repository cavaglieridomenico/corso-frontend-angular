var getSelectionSort = function (list) {
    for (var i = 0; i < list.length - 1; i++) {
        var minId = i;
        for (var j = i + 1; j < list.length; j++) {
            if (list[j] < list[minId]) {
                minId = j;
            }
        }
        var temp = list[minId];
        list[minId] = list[i];
        list[i] = temp;
    }
    return list;
};
/*DOM Elements*/
var getButton = function () { return document.querySelector("#button-date"); };
var getMessageNumbers = function () { return document.querySelector(".message-to-user-transparent"); };
var getMessageStrings = function () { return document.querySelector(".strings"); };
var numbers = [90, 77, 150, 34, 3, 80, 9];
var words = ["Hello", "World", "Dog", "Cat", "Pizza"];
getMessageNumbers().innerText = numbers.toString();
getMessageStrings().innerText = words.toString();
getButton().addEventListener("click", function () {
    getMessageNumbers().textContent = getSelectionSort(numbers).toString();
    getMessageStrings().textContent = getSelectionSort(words).toString();
});
