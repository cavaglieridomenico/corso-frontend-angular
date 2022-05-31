/*DOM Elements*/
const getButton = (): HTMLButtonElement => document.querySelector("#button-date");
const getMessage = (): HTMLDivElement => document.querySelector(".message-to-user-transparent");

/*URL*/
const WS_BASE_URL_1: string = 'https://api.nasa.gov/planetary/apod?api_key=';
const API_KEY: string = "SCjtDCGzuwEAUJyChKMvfN6hi3KGRolrHDQ8U4Ax";

/**
 * HTTP POST request with form data
 * @param {string} url
 */
 const fetchData = (url: string, param: string) => {

  getMessage().innerHTML = "Loading...";
  fetch(url+param)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error: response.status === ${response.status}`);
      }
    })
    .then((data) => {
      console.log(data);
      getMessage().innerHTML = `
      <h3 style="margin-bottom: 0">${data.title}</h3>
      <p style="font-size: 0.6em; text-align: justify">${data.explanation}</p>
      <span style="font-size: 0.6em">-Copyright: ${data.copyright}, ${data.date} (Service version: ${data.service_version})-</span>
      `;
    })
    .catch((error) => {
      console.log(error);
      getMessage().innerHTML = `Sorry, something went wrong... try later!`;
    });
};

getButton().addEventListener("click", () => {
  /*Clean message to user*/
  while (getMessage().hasChildNodes()) {
    getMessage().removeChild(getMessage().firstChild);
  }

  fetchData(WS_BASE_URL_1, API_KEY);
});


