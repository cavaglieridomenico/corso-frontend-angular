const getCanvas = () => document.querySelector("#canvas");
const getCtx = () => getCanvas().getContext("2d");

//Start positions
var pos = { x: 0, y: 0 };

//new position from mouse event
const setPosition = (event) => {
  pos.x = event.clientX - getCanvas().offsetLeft;
  pos.y = event.clientY - getCanvas().offsetTop;
};

const draw = (event) => {
  //mouse left button must be pressed
  if (event.buttons !== 1) return;
  getCtx().beginPath();
  getCtx().moveTo(pos.x, pos.y);

  getCtx().lineWidth = 5;
  getCtx().lineCap = "round";
  getCtx().strokeStyle = "#c0392b";

  setPosition(event);
  getCtx().lineTo(pos.x, pos.y);

  getCtx().stroke(); // draw it!

  getCtx().closePath();
};

getCanvas().addEventListener("mousedown", setPosition);
getCanvas().addEventListener("mousemove", draw);

const getTurtle = () => document.querySelector("#turtle");
window.addEventListener("mousemove", (event) => {
  getTurtle().style.left = event.clientX + 10 + "px";
  getTurtle().style.top = event.clientY + "px";
});
