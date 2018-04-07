# Directivas
Son funcionalidades aplicables al DOM y a los elementos HTML en las plantillas de un componente. Por ejemplo una directiva puede servir para controlar que un div se muestre o no o recorrer un array en la vista (directivas estructurales, estructuras condicionales y de control) o incluso también puede servir para darle una un estilo u otro a un elemento del HTML o también para interactuar con el modelo de datos del componente.

Existen directivas nativas (ya incluidas en Angular) y se puede crear nuevas directivas con funcionalidad personalizada.

## Directivas nativas
* **ngIf**: Permite usar una condición para mostrar u ocultar algo

  Ejemplo:
  ```html
  <p *ngIf="admin === true">
    La clave es: P@ssw0rd
  </p>
  ```

* **click**: Permite ejecutar algo en el evento click del componente

  Ejemplo:
  ```html
  <button (click)="activarAdmin()">
    Activar administrador
  </button>
  ```

## Ejercicio

Crea un componente que muestre un menú de navegación en donde un enlace se encuentre oculto y solo se muestre cuando se haga click en un botón "Mostrar enlace".

* **ngFor**: Permite recorrer arreglos de datos.

  Ejemplo: Teniendo dentro del componente un arreglo `public listaEnlaces =  ['Inicio', 'Contáctanos', '']` en el template del componente se pueden mostrar los enlaces de la siguiente manera:
  ```html
  <h1>{{titulo}}</h1>
  <ul>
    <li *ngFor="let enlace of listaEnlaces">
      {{enlace}}
    </li>
  </ul>
  ```

## Otras directivas nativas

* **ngSwitch**: Permite manejar múltiples condicionales

  Ejemplo:
  ```html
  <div [ngSwitch]="color">
    <span *ngSwitchCase="’rojo’">Es rojo</span>
    <span *ngSwitchCase="’verde’">Es verde</span>
    <span *ngSwitchCase="’azul’">Es azul</span>
  </div>
  ```
* **ngStyle**: Permite ingresar reglas de estilos para el componente, en forma de objeto de JavaScript

  Ejemplo:
  ```html
  <div [ngStyle]="{
    'background': 'red',
    'color': 'white'
  }">
  ```

* **ngClass**: Permite que el componente tenga ciertas clases de css si se cumplen las condiciones precisadas.

  Ejemplo:
  ```html
  <div [ngClass]="{
    azulado: colorSeleccionado === 'azul',
    verdoso: colorSeleccionado === 'verde'
  }">
  ```

## Ejercicio
Crear un componente que permite escribir un color dentro de una caja de texto (#4ef54e o red) y que cambie el color de fondo de una caja `<div>`. (Pista: Se puede usar las directivas ngModel y ngStyle)
