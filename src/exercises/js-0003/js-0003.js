import { counter } from "./counter.js";
/*DOM elements*/
const getPause = () => document.querySelector("#pause");
const getStart = () => document.querySelector("#start");

const getColors = () => {
  return ["red", "blue", "green", "yellow", "orange"];
};

/*Counter setting that controls the color changer*/
const limit = () => getColors().length - 1;
const setCounter = counter(limit());

let interval = setInterval(() => {
  setCounter.increase();
  document.body.style.background = getColors()[setCounter.getValue()];
}, 1000);

getPause().addEventListener("click", () => {
  clearInterval(interval);
});
getStart().addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    setCounter.increase();
    document.body.style.background = getColors()[setCounter.getValue()];
  }, 1000);
});
