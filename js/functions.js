import Circle from "./class/Circle.js";
import Line from "./class/Line.js";
import Rectangle from "./class/Rectangle.js";
import Square from "./class/Square.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const x_input = document.querySelector("#x");
const y_input = document.querySelector("#y");
const draw_button = document.querySelector("button");
const radio_form = document.querySelector("form");
const line_width_input = document.querySelector("input[type=number]");
const color_input = document.querySelector("input[type=color]");

const updateUi = (label3, label4) => {
  document.querySelector("div#third label").innerHTML = label3;

  if (label4) {
    const fourthLabel = document.querySelector("div#fourth label");
    fourthLabel.innerHTML = label4;
    fourthLabel.style.display = "inline-block";
    document.querySelector("div#fourth input").style.display = "inline-block";
  } else {
    document.querySelector("div#fourth label").style.display = "none";
    document.querySelector("div#fourth input").style.display = "none";
  }
};

radio_form.addEventListener("change", () => {
  const shape = radio_form["shape"].value;
  switch (shape) {
    case "line":
      updateUi("x2", "y2");
      break;
    case "circle":
      updateUi("width:");
      break;
    case "rectangle":
      updateUi("width:", "height:");
      break;
    case "square":
      updateUi("width:");
      break;
  }
});

draw_button.addEventListener("click", () => {
  const shape = radio_form["shape"].value;
  switch (shape) {
    case "line":
      drawLine();
      break;
    case "circle":
      drawCircle();
      break;
    case "rectangle":
      drawRectangle();
      break;
    case "square":
      drawSquare();
      break;
  }
});

const drawCircle = () => {
  const x = x_input.value;
  const y = y_input.value;
  const width = document.querySelector("div#third input").value;
  const lineWidth = line_width_input.value;
  const circle = new Circle(x, y, width / 2);
  circle.lineWidth = lineWidth;
  circle.color = color_input.value;
  circle.draw(ctx);
};

const drawLine = () => {
  const x = x_input.value;
  const y = y_input.value;
  const x2 = document.querySelector("div#third input").value;
  const y2 = document.querySelector("div#fourth input").value;
  const lineWidth = line_width_input.value;
  const line = new Line(x, y, x2, y2);
  line.lineWidth = lineWidth;
  line.color = color_input.value;
  line.draw(ctx);
};

const drawRectangle = () => {
  const x = x_input.value;
  const y = y_input.value;
  const width = document.querySelector("div#third input").value;
  const height = document.querySelector("div#fourth input").value;
  const lineWidth = line_width_input.value;
  const rectangle = new Rectangle(x, y, width, height);
  rectangle.lineWidth = lineWidth;
  rectangle.color = color_input.value;
  rectangle.draw(ctx);
};

const drawSquare = () => {
  const x = x_input.value;
  const y = y_input.value;
  const width = document.querySelector("div#third input").value;
  const lineWidth = line_width_input.value;
  const square = new Square(x, y, width);
  square.lineWidth = lineWidth;
  square.color = color_input.value;
  square.draw(ctx);
};
