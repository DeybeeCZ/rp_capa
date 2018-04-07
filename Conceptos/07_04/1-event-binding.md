# Event Binding

Es necesario saber cuando un usuario interactúa con la aplicación. En Angular, eventos como hover, click o escribir algo usando el teclado, pueden ser usados para ejecutar lógica del componente.

El event binding en Angular es un 'one-way' binding que envía información de la vista (ha ocurrido algo) a la clase del componente.

Entre los eventos más comúnes que podemos usar se encuentran:

* focus
* blur
* submit
* scroll
* cut
* copy
* copy
* paste
* keydown
* keypress
* keyup
* mouseenter
* mousedown
* mouseup
* click
* dblclick
* drag
* dragover
* drop

Para ejecutar un método del componente cuando ocurra un evento:

```html
<menu (click)="mostrar()"></menu>
```

## Ejercicio

Crea una pequeña aplicación de Angular que tenga al menos un componente que use tres eventos de la lista de arriba o puede modificar su aplicacion toDoList y hacer que se agregue una tarea al hacer enter.
