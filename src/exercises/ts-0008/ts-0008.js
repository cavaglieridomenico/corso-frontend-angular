/*DOM Elements*/
var getButton = function () { return document.querySelector("#button-date"); };
var getMessage = function () { return document.querySelector(".message-to-user-transparent"); };
/*URL*/
var WS_BASE_URL_1 = 'https://api.nasa.gov/planetary/apod?api_key=';
var API_KEY = "SCjtDCGzuwEAUJyChKMvfN6hi3KGRolrHDQ8U4Ax";
/**
 * HTTP POST request with form data
 * @param {string} url
 */
var fetchData = function (url, param) {
    getMessage().innerHTML = "Loading...";
    fetch(url + param)
        .then(function (response) {
        console.log(response);
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Error: response.status === ".concat(response.status));
        }
    })
        .then(function (data) {
        console.log(data);
        getMessage().innerHTML = "\n      <h3 style=\"margin-bottom: 0\">".concat(data.title, "</h3>\n      <p style=\"font-size: 0.6em; text-align: justify\">").concat(data.explanation, "</p>\n      <span style=\"font-size: 0.6em\">-Copyright: ").concat(data.copyright, ", ").concat(data.date, " (Service version: ").concat(data.service_version, ")-</span>\n      ");
    })["catch"](function (error) {
        console.log(error);
        getMessage().innerHTML = "Sorry, something went wrong... try later!";
    });
};
getButton().addEventListener("click", function () {
    /*Clean message to user*/
    while (getMessage().hasChildNodes()) {
        getMessage().removeChild(getMessage().firstChild);
    }
    fetchData(WS_BASE_URL_1, API_KEY);
});
