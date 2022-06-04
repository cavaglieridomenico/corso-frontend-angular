var Geometria;
(function (Geometria) {
    var pigreco = 3.14;
    var constAreaOttagono = 4.828;
    var Quadrato = /** @class */ (function () {
        function Quadrato(lato) {
            this.lato = lato;
        }
        Quadrato.prototype.getPerimetro = function () {
            return this.lato * 4;
        };
        Quadrato.prototype.getArea = function () {
            return this.lato * this.lato;
        };
        return Quadrato;
    }());
    Geometria.Quadrato = Quadrato;
    var Cerchio = /** @class */ (function () {
        function Cerchio(raggio) {
            this.raggio = raggio;
        }
        Cerchio.prototype.getPerimetro = function () {
            return this.raggio * pigreco;
        };
        Cerchio.prototype.getArea = function () {
            return this.raggio * this.raggio * pigreco;
        };
        return Cerchio;
    }());
    Geometria.Cerchio = Cerchio;
    var Rombo = /** @class */ (function () {
        function Rombo(lato, base, altezza) {
            this.lato = lato;
            this.base = base;
            this.altezza = altezza;
        }
        Rombo.prototype.getPerimetro = function () {
            return this.lato * 4;
        };
        Rombo.prototype.getArea = function () {
            return this.base * this.altezza;
        };
        return Rombo;
    }());
    Geometria.Rombo = Rombo;
    var Trapezio = /** @class */ (function () {
        function Trapezio(lato1, lato2, baseMinore, baseMaggiore, altezza) {
            this.lato1 = lato1;
            this.lato2 = lato2;
            this.baseMinore = baseMinore;
            this.baseMaggiore = baseMaggiore;
            this.altezza = altezza;
        }
        Trapezio.prototype.getPerimetro = function () {
            return this.lato1 + this.lato2 + this.baseMinore + this.baseMaggiore;
        };
        Trapezio.prototype.getArea = function () {
            return (this.baseMinore * this.baseMaggiore * this.altezza) / 2;
        };
        return Trapezio;
    }());
    Geometria.Trapezio = Trapezio;
    var Ottagono = /** @class */ (function () {
        function Ottagono(lato) {
            this.lato = lato;
        }
        Ottagono.prototype.getPerimetro = function () {
            return this.lato * 8;
        };
        Ottagono.prototype.getArea = function () {
            return this.lato * this.lato * constAreaOttagono;
        };
        return Ottagono;
    }());
    Geometria.Ottagono = Ottagono;
})(Geometria || (Geometria = {}));
var quadrato = new Geometria.Quadrato(5);
console.log("Perimetro del quadrato: ".concat(quadrato.getPerimetro()));
console.log("Area del quadrato: ".concat(quadrato.getArea()));
var cerchio = new Geometria.Cerchio(5);
console.log("Circonferenza del cerchio: ".concat(cerchio.getPerimetro()));
console.log("Area del cerchio: ".concat(cerchio.getArea(), "\n  "));
var rombo = new Geometria.Rombo(5, 4, 7);
console.log("Perimetro del rombo: ".concat(rombo.getPerimetro()));
console.log("Area del rombo: ".concat(rombo.getArea()));
var trapezio = new Geometria.Trapezio(5, 6, 4, 7, 4);
console.log("Perimetro del trapezio: ".concat(trapezio.getPerimetro()));
console.log("Area del trapezio: ".concat(trapezio.getArea()));
var ottagono = new Geometria.Ottagono(5);
console.log("Perimetro del ottagono: ".concat(ottagono.getPerimetro()));
console.log("Area del ottagono: ".concat(ottagono.getArea()));
