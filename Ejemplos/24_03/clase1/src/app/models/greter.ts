export class Greter {
    greeting:string
    constructor(greeting: string) {
        this.greeting=greeting
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}