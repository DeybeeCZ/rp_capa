# JavaScript
JavaScript (abreviado comúnmente JS) es un lenguaje de programación
interpretado, dialecto del estándar ECMAScript. Se define como orientado a
objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.
JS es más conocido como el lenguaje de script para páginas web, pero también
usado en muchos entornos sin navegador, tales como node.js o Apache
CouchDB.

## Pasado
JavaScript fue desarrollado originalmente por Brendan Eich de Netscape con el nombre de Mocha, renombrado a
LiveScript, y finalmente a JavaScript.

«JAVASCRIPT» es una marca registrada de Oracle Corporation. Es usada con licencia por los productos creados por
Netscape Communications y entidades actuales como la Fundación Mozilla.

En 1997 los autores propusieron JavaScript para que fuera adoptado como estándar de la ECMA(European Computer Manufacturers' Association) , organización internacional con sede en Ginebra. En junio de 1997 fue adoptado como un estándar ECMA, con el nombre de ECMAScript. Poco después también como un estándar ISO.

En junio de 2015 se cerró y publicó el estándar ECMAScript 6 que dota a JavaScript de características avanzadas
como: módulos para organización del código, verdaderas clases para programación orientada a objetos, iteradores,
generadores, entre otros.

## Presente
ES6 agrega cambios significativos en la sintaxis para escribir aplicaciones complejas, incluyendo clases y módulos.
Otras nuevas características incluyen iteradores for/of loops, generadores y generador de expresiones estilo Python,
funciones de dirección, datos binarios, colecciones (mapas, sets, mapas débiles), y proxies (metaprogramación para
objetos virtuales y wrappers).

# Typescript
TypeScript es un lenguaje de programación libre y de código abierto
desarrollado y mantenido por Microsoft. Es un superconjunto sintáctico estricto
de JavaScript, y añade la tipificación estática opcional al lenguaje
Anders Hejlsberg, arquitecto líder de C # y creador de Delphi y Turbo Pascal, ha
trabajado en el desarrollo de TypeScript.
TypeScript se puede utilizar para desarrollar aplicaciones JavaScript para la
ejecución del lado del cliente o del servidor (Node.js).

![imagen](https://raw.githubusercontent.com/DeybeeCZ/rp_capa/master/Conceptos/img/js_in_ts.png)
![imagen](https://raw.githubusercontent.com/DeybeeCZ/rp_capa/master/Conceptos/img/super_conjunto.png)

* TypeScript es un superconjunto estricto de ECMAScript 2015, que es un
superconjunto de ECMAScript 5, comúnmente denominado JavaScript.
* Así, un programa JavaScript es también un programa TypeScript válido, y un
programa TypeScript puede consumir JavaScript sin problemas.

![imagen](https://raw.githubusercontent.com/DeybeeCZ/rp_capa/master/Conceptos/img/versus.png)

Veamos una comparación de código entre JavaScript Y TypeScript
![imagen](https://raw.githubusercontent.com/DeybeeCZ/rp_capa/master/Conceptos/img/resumen_codigo.png)

## Características:
* 85% JavaScript
* ES6
* Tipado fuerte
* Se transpila a JavaScript

## Tipos de datos:
* string
* number
* boolean
* array
* objeto

## Ejemplo de código TypeScript:
```javascript
class Persona {
  fullname: string;

  constructor(fullname: string) {
    this.fullname = fullname;
  }

  async saludar() {
    console.log(`Hola ${this.fullname}`);
  }
}

let persona = new Persona('Jorge');
persona.saludar().then(() => console.log('Fin'));
```

Compilado resultaria en JavaScript?
ayudate a descubrirlo con la ayuda del siguiente [lugar](http://www.typescriptlang.org/play/)
> TypeScript viene con un linter que ayuda a producir código de mejor calidad y menos buggs

Para ver las ventajas de usar TypeScript a mayor profundidad, lee [este post](https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8).

Desde otra perspectiva, Eric Elliot habla en [este artículo](https://medium.com/javascript-scene/you-might-not-need-typescript-or-static-types-aa7cb670a77b) de que tal vez no es necesario usar TypeScript.

Algunos devs pueden pensar que al usar tipos de datos definidos se evitan muchos bugs, pero hay una gran cantidad de bugs que no se evitan por esto. Existen otras alternativas a evitar bugs como: TDD, Code Reviews, etc.
