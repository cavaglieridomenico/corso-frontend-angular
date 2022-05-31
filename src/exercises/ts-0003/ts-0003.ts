
class FiguraGeometrica {
	protected nome: string;
    protected misuraLato?: number;


	constructor(nome: string, misuraLato: number) {
        this.nome = nome;
		this.misuraLato = misuraLato;
    }
	getPerimetro() {};
	print() {};
}

class Cerchio extends FiguraGeometrica {
	getPerimetro(): number {
		return this.misuraLato * 3.14;
	}
	print() {
		console.log(`Questa figura è un ${this.nome} di circonferenza ${this.getPerimetro()}px` )
	}
}

let cerchio = new Cerchio ("cerchio",3)
cerchio.print();

class Rombo extends FiguraGeometrica {
	getPerimetro(): number {
		return this.misuraLato *4;
	}
	print() {
		console.log(`Questa figura è un ${this.nome} di perimetro ${this.getPerimetro()}px` )
	}
}

let rombo = new Rombo("rombo", 10);
rombo.print();

class Decagono extends FiguraGeometrica {
	getPerimetro(): number {
		return this.misuraLato * 10;
	}
	print() {
		console.log(`Questa figura è un ${this.nome} di perimetro ${this.getPerimetro()}px` )
	}
}

let decagono = new Decagono(  "decagono", 10,);
decagono.print();

class Trapezio extends FiguraGeometrica {
	protected baseMaggiore: number;
	protected baseMinore: number;
	protected lato1: number;
	protected lato2: number;
	constructor(baseMaggiore: number, baseMinore: number, lato1: number, lato2: number, nome: string, misuraLato?: number) {
		super( nome, misuraLato);
		this.baseMaggiore = baseMaggiore;
		this.baseMinore= baseMinore;
		this.lato1 = lato1;
		this.lato2 = lato2;
	}
	getPerimetro(): number {
		return this.baseMaggiore + this.baseMinore + this.lato1 + this.lato2;
	}
	print() {
		console.log(`Questa figura è un ${this.nome} di perimetro ${this.getPerimetro()}px` )
	}
}

let trapezio = new Trapezio( 10, 8, 11, 8, "trapezio");
trapezio.print();