namespace Geometria {
  const pigreco = 3.14;
  const constAreaOttagono = 4.828;

  export class Quadrato {
    lato: number;
    constructor(lato: number) {
      this.lato = lato;
    }

    getPerimetro() {
      return this.lato * 4;
    }

    getArea() {
      return this.lato * this.lato;
    }
  }

  export class Cerchio {
    raggio: number;
    constructor(raggio: number) {
      this.raggio = raggio;
    }

    getPerimetro() {
      return this.raggio * pigreco;
    }

    getArea() {
      return this.raggio * this.raggio * pigreco;
    }
  }

  export class Rombo {
    lato: number;
    base: number;
    altezza: number;
    constructor(lato: number, base: number, altezza: number) {
      this.lato = lato;
      this.base = base;
      this.altezza = altezza;
    }

    getPerimetro() {
      return this.lato * 4;
    }

    getArea() {
      return this.base * this.altezza;
    }
  }

  export class Trapezio {
    lato1: number;
    lato2: number;
    baseMinore: number;
    baseMaggiore: number;
    altezza: number;
    constructor(
      lato1: number,
      lato2: number,
      baseMinore: number,
      baseMaggiore: number,
      altezza: number
    ) {
      this.lato1 = lato1;
      this.lato2 = lato2;
      this.baseMinore = baseMinore;
      this.baseMaggiore = baseMaggiore;
      this.altezza = altezza;
    }

    getPerimetro() {
      return this.lato1 + this.lato2 + this.baseMinore + this.baseMaggiore;
    }

    getArea() {
      return (this.baseMinore * this.baseMaggiore * this.altezza) / 2;
    }
  }

  export class Ottagono {
    lato: number;
    constructor(lato: number) {
      this.lato = lato;
    }

    getPerimetro() {
      return this.lato * 8;
    }

    getArea() {
      return this.lato * this.lato * constAreaOttagono;
    }
  }
}

const quadrato = new Geometria.Quadrato(5);
console.log(`Perimetro del quadrato: ${quadrato.getPerimetro()}`);
console.log(`Area del quadrato: ${quadrato.getArea()}`);

const cerchio = new Geometria.Cerchio(5);
console.log(`Circonferenza del cerchio: ${cerchio.getPerimetro()}`);
console.log(`Area del cerchio: ${cerchio.getArea()}
  `);

const rombo = new Geometria.Rombo(5, 4, 7);
console.log(`Perimetro del rombo: ${rombo.getPerimetro()}`);
console.log(`Area del rombo: ${rombo.getArea()}`);

const trapezio = new Geometria.Trapezio(5, 6, 4, 7, 4);
console.log(`Perimetro del trapezio: ${trapezio.getPerimetro()}`);
console.log(`Area del trapezio: ${trapezio.getArea()}`);

const ottagono = new Geometria.Ottagono(5);
console.log(`Perimetro del ottagono: ${ottagono.getPerimetro()}`);
console.log(`Area del ottagono: ${ottagono.getArea()}`);
