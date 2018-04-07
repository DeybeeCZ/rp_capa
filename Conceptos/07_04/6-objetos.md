# Objetos

## 1. Clases
El JavaScript tradicional utiliza funciones y herencia basada en prototipos para crear componentes reutilizables, pero esto puede parecer un poco incómodo para los programadores más cómodos con un enfoque orientado a objetos, donde las clases heredan funcionalidad y objetos se construyen a partir de estas clases. A partir de ECMAScript 2015, también conocido como ECMAScript 6, los programadores JavaScript podrán construir sus aplicaciones utilizando este enfoque orientado a objetos basado en clases.

Veamos un ejemplo sencillo de una clase :
```
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```
### 1.1 Herencia
En TypeScript, podemos utilizar patrones orientados a objetos comunes. Por supuesto, uno de los patrones más fundamentales en la programación basada en clases es ser capaz de extender las clases existentes para crear nuevas usando la herencia.
```
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```
### 1.2 Modificadores públicos, privados y protegidos
Si está familiarizado con clases en otros idiomas, puede haber notado en los ejemplos anteriores que no hemos tenido que usar la palabra publicpara lograr esto; Por ejemplo, C # requiere que cada miembro sea explícitamente etiquetado publicpara ser visible. En TypeScript, cada miembro es public de forma predeterminada.
* **Public :** se declaran así de forma predeterminada

```
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```
* **Private :** No se puede acceder desde fuera de la clase que lo contiene

```
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // Error: 'name' is private;
```
Cuando declaramos clases con ambitos privados o protected, nos aseguramos que podamos asignar clases compatibles.

```
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // Error: 'Animal' and 'Employee' are not compatible
```

* **Protected :** Actúa como el modificador private, con la excepción de que los miembros declarados protected también pueden ser accedidos por clases deribadas o herederas

```
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
```

* **Solo Lectura :** Puede hacer propiedades de sólo lectura utilizando la palabra clave **readonly**. Las propiedades Readonly deben ser inicializadas en su declaración o en el constructor.

```
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.
```

### Ejercicio
Crea un clase padre **animal** y sus respectivas clases hijAs para poder crear **vertebrados**, **mamiferos**, **oviparos** y lista 2 animales de cada tipo.

## 2. Interfases
Uno de los principios básicos de TypeScript es que la comprobación de tipos se centra en la forma que tienen los valores.
En TypeScript, las interfaces cumplen el rol de nombrar estos tipos y son una forma poderosa de definir contratos dentro de su código, así como contratos con código fuera de su proyecto.

Veamos el ejemplo más simple de una interfaz
```
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

Ahora escribiremos un nuevo ejemplo pero usando la interfaz
```
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```
### 2.1 Propiedades opcionales
No todas las propiedades de una interfaz pueden ser requeridas. Algunos existen bajo ciertas condiciones o pueden no estar allí en absoluto
```
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
```

### 2.2 Propiedades de solo Lectura
Algunas propiedades sólo deben ser modificables cuando se crea un objeto por primera vez. Puede especificar esto poniendo readonlyantes del nombre de la propiedad:
```
interface Point {
    readonly x: number;
    readonly y: number;
}
```
entonces generaria un error si intentamos modificar uno de los valores
```
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```
### 2.3 Interfaces con funciones
Las interfaces son capaces de describir la amplia gama de formas que pueden tomar los objetos JavaScript. Además de describir un objeto con propiedades, las interfaces también son capaces de describir tipos de funciones.
```
interface SearchFunc {
    (source: string, subString: string): boolean;
}
```
pero a diferencia de los objetos creados dentro de una interfaz, las funciones no necesitan obligatoriamente que se les llame de la misma
forma a los parametros de entrada, los asociará por la posición. Así que podriamos llamarla de la siguiente manera
```
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
```

## Ejercicio 2
Favor de crear las interfaces, necesarias para la validación de las clases creadas en el ejercicio anterior
