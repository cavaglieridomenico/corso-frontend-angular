/*DOM Elements*/
const getMessageToUser = () => document.querySelector(".message-to-user-text");
const getForm = () => document.querySelector("#form");
const getBrandName = () => document.querySelector("#brand-name");
const getButton = () => document.querySelector(".button");
const getInfo = () => document.querySelector(".icon-hint");
const getResponseSearch = () =>
  document.querySelector(".response-search-container");

const inventory = [
  {
    product: "hammer",
    brand: "beta",
    model: "destroy",
    size: "50 cm",
  },
  {
    product: "drill",
    brand: "beta",
    model: "deep 3000",
    size: "30 cm",
  },
  {
    product: "wrench",
    brand: "beta",
    model: "vibranium",
    size: "40 cm",
  },
  {
    product: "saw",
    brand: "beta",
    model: "titanium",
    size: "60 cm",
  },
];

/**
 * Print message to user
 * @param {string} color
 * @param {string} text
 */
const setMessageToUser = (
  color = "unset",
  text = "Please, enter the desired brand."
) => {
  getMessageToUser().style.color = color;
  getMessageToUser().textContent = text;
};

/*Reset messages to the user at the new attempt*/
getBrandName().addEventListener("click", () => {
  setMessageToUser("unset", "Please, enter the desired brand.");
  getResponseSearch().textContent = "";
});

/*Show tip*/
getInfo().addEventListener("click", () =>
  setMessageToUser("unset", "This shop only sells one brand: Beta...")
);

/*Submit name*/
getForm().addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = getBrandName().value.toLowerCase().trim();
  if (!inputValue) {
    setMessageToUser("red");
    return;
  }
  const filteredList = inventory.filter((item) => item.brand === inputValue);
  if (filteredList.length === 0) {
    setMessageToUser("red", "Sorry, brand not found.");
  } else {
    const ol = document.createElement("ol");
    getResponseSearch().appendChild(ol);
    filteredList.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `Product: ${item.product.toUpperCase()}
         | Model: ${item.model.toUpperCase()} | Size: ${item.size.toUpperCase()}`;
      ol.appendChild(li);
    });
  }
  getBrandName().value = "";
});
