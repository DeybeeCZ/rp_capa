# 2 way data binding

En Angular, es posible usar/crear directivas que permitan que los cambios en el estado de la aplicación sean reflejados automáticamente en la vista, y viceversa.

Por ejemplo, se crea un componente, con su respectivo template:

```html
<input [(ngModel)]="username">

<p>Hello {{username}}!</p>
```

Al implementarlo en una aplicación de Angular, se podrá observar que cuando se escribe en la caja de texto, el valor que es escrito será el nuevo valor del modelo `username` y, a la vez que se actualiza, es reflejado de vuelta en el párrafo que lo representa.

> La directiva ngModel es una directiva nativa de Angular

Para entender con más profundidad el concepto, revisar el artículo [Two-way data binding in Angular](https://blog.thoughtram.io/angular/2016/10/13/two-way-data-binding-in-angular-2.html) de Pascal Precht.
