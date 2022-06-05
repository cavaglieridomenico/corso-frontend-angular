class GeometricFigure {
  constructor(nome, sideMeasurament) {
    this.nome = nome;
    this.sideMeasurament = sideMeasurament;
  }
  getPerimeter() {}
  print() {}
  getStyleClass() {}
}

class Square extends GeometricFigure {
  getPerimeter() {
    return this.sideMeasurament * 4;
  }
  print() {
    return `${this.nome} with a perimeter of ${this.getPerimeter()}px`;
  }
  getStyleClass() {
    return "square";
  }
}
export let square = new Square("Square", 100);

class Circle extends GeometricFigure {
  getPerimeter() {
    return this.sideMeasurament * 3.14;
  }
  print() {
    return `${this.nome} with a circumference of ${this.getPerimeter()}px`;
  }
  getStyleClass() {
    return "circle";
  }
}
export let circle = new Circle("Circle", 100);

class Trapezoid extends GeometricFigure {
  constructor(baseMaggiore, baseMinore, lato1, lato2, nome, sideMeasurament) {
    super(nome, sideMeasurament);
    this.baseMaggiore = baseMaggiore;
    this.baseMinore = baseMinore;
    this.lato1 = lato1;
    this.lato2 = lato2;
  }
  getPerimeter() {
    return this.baseMaggiore + this.baseMinore + this.lato1 + this.lato2;
  }
  print() {
    return `${this.nome} with a perimeter of ${this.getPerimeter()}px`;
  }
  getStyleClass() {
    return "trapezoid";
  }
}
export let trapezoid = new Trapezoid(125, 100, 25, 25, "Trapezoid");

class Rhombus extends GeometricFigure {
  getPerimeter() {
    return this.sideMeasurament * 4;
  }
  print() {
    return `${this.nome} with a perimeter of ${this.getPerimeter()}px`;
  }
  getStyleClass() {
    return "rhombus";
  }
}
export let rhombus = new Rhombus("Rhombus", 100);

class Octagon extends GeometricFigure {
  getPerimeter() {
    return this.sideMeasurament * 8;
  }
  print() {
    return `${this.nome} with a perimeter of ${this.getPerimeter()}px`;
  }
  getStyleClass() {
    return "octagon";
  }
}
export let octagon = new Octagon("Octagon", 100);
