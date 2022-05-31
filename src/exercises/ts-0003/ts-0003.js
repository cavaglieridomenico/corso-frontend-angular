var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*DOM Elements*/
var getInput = function () { return document.querySelector("#number"); };
var getButton = function () { return document.querySelector("#button-date"); };
var getMessageSquare = function () { return document.querySelector(".square"); };
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(nome, misuraLato) {
        this.nome = nome;
        this.misuraLato = misuraLato;
    }
    FiguraGeometrica.prototype.getPerimetro = function () { };
    ;
    FiguraGeometrica.prototype.print = function () { };
    ;
    return FiguraGeometrica;
}());
var Cerchio = /** @class */ (function (_super) {
    __extends(Cerchio, _super);
    function Cerchio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cerchio.prototype.getPerimetro = function () {
        return this.misuraLato * 3.14;
    };
    Cerchio.prototype.print = function () {
        console.log("Questa figura \u00E8 un ".concat(this.nome, " di circonferenza ").concat(this.getPerimetro(), "px"));
    };
    return Cerchio;
}(FiguraGeometrica));
var cerchio = new Cerchio("cerchio", 3);
cerchio.print();
var Rombo = /** @class */ (function (_super) {
    __extends(Rombo, _super);
    function Rombo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rombo.prototype.getPerimetro = function () {
        return this.misuraLato * 4;
    };
    Rombo.prototype.print = function () {
        console.log("Questa figura \u00E8 un ".concat(this.nome, " di perimetro ").concat(this.getPerimetro(), "px"));
    };
    return Rombo;
}(FiguraGeometrica));
var rombo = new Rombo("rombo", 10);
rombo.print();
var Decagono = /** @class */ (function (_super) {
    __extends(Decagono, _super);
    function Decagono() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Decagono.prototype.getPerimetro = function () {
        return this.misuraLato * 10;
    };
    Decagono.prototype.print = function () {
        console.log("Questa figura \u00E8 un ".concat(this.nome, " di perimetro ").concat(this.getPerimetro(), "px"));
    };
    return Decagono;
}(FiguraGeometrica));
var decagono = new Decagono("decagono", 10);
decagono.print();
var Trapezio = /** @class */ (function (_super) {
    __extends(Trapezio, _super);
    function Trapezio(baseMaggiore, baseMinore, lato1, lato2, nome, misuraLato) {
        var _this = _super.call(this, nome, misuraLato) || this;
        _this.baseMaggiore = baseMaggiore;
        _this.baseMinore = baseMinore;
        _this.lato1 = lato1;
        _this.lato2 = lato2;
        return _this;
    }
    Trapezio.prototype.getPerimetro = function () {
        return this.baseMaggiore + this.baseMinore + this.lato1 + this.lato2;
    };
    Trapezio.prototype.print = function () {
        console.log("Questa figura \u00E8 un ".concat(this.nome, " di perimetro ").concat(this.getPerimetro(), "px"));
    };
    return Trapezio;
}(FiguraGeometrica));
var trapezio = new Trapezio(10, 8, 11, 8, "trapezio");
trapezio.print();
