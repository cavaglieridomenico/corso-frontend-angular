import {
  square,
  circle,
  trapezoid,
  rhombus,
  octagon,
} from "./geometric-figure.js";

const getBtnSquare = () => document.querySelector("#btn-square");
const getBtnCircle = () => document.querySelector("#btn-circle");
const getBtnTrapezoid = () => document.querySelector("#btn-trapezoid");
const getBtnRhombus = () => document.querySelector("#btn-rhombus");
const getBtnOctagon = () => document.querySelector("#btn-octagon");

const getFigure = () => document.querySelector("#figure");

const getResponse = () => document.querySelector("#response");

const setRemoveAllClasses = (HTMLElement) =>
  HTMLElement.classList.remove(HTMLElement.classList[0]);

const setPrintOnTheScreen = (figure) => {
  setRemoveAllClasses(getFigure());
  getFigure().classList.add(figure.getStyleClass());
  getResponse().textContent = figure.print();
};

getBtnSquare().addEventListener("click", () => {
  setPrintOnTheScreen(square);
});

getBtnCircle().addEventListener("click", () => {
  setPrintOnTheScreen(circle);
});

getBtnTrapezoid().addEventListener("click", () => {
  setPrintOnTheScreen(trapezoid);
});

getBtnRhombus().addEventListener("click", () => {
  setPrintOnTheScreen(rhombus);
});

getBtnOctagon().addEventListener("click", () => {
  setPrintOnTheScreen(octagon);
});
