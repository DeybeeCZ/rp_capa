# Definición de componentes

Toda una aplicación de angular está compuesta por componentes:
* Componente header
* Componente menu
* Componente avatar, etc

Los componentes pueden ir dentro de otros componentes e ir formando toda la estructura de una aplicación web.

En el proyecto de Angular CLI, **app.component.ts** es el componente principal de la aplicación.

## Componentes Básicos.

Para crear un componente en Angular debemos seguir los siguientes pasos:

1. Crear una carpeta dentro de `/src/app` con el nombre del componente. Ejemplo 'menu'

2. Dentro de la carpeta del componente se crea un archivo `[nombre-componente].component.ts`

> La extensión .ts significa que es un archivo de TypeScript

3. Dentro del archivo .ts agregamos como primera línea `import { Component } from '@angular/core';`. Esta línea importa el módulo Component que se usa como decorador para darle funcionalidad extra e incluir las relaciones de la clase que se crea más abajo en el mismo archivo.

4. Se incluye el decorador de la siguiente manera:

```javascript
@Component({
  selector: 'menu',
  templateUrl: './menu.component.html'
})
```

* selector: Indica con que etiqueta se representará el componente
* templateUrl: Permite asignarle un template (plantilla) al componente, usando un archivo html
* stylesUrl: Contiene un arreglo con archivos de estilos que van a darle diseño visual al componente (colores, tamaños, posiciones). Estos estilos estan aislados de los estilos de otros componentes.

5. Se crea la clase del componente usando la keyword `class` de JavaScript:

```javascript
export class MenuComponent {
  public titulo = 'Menú principal';
}
```

> También se está exportando la misma clase con la keyword `export`. De esta manera, la clase se puede usar en otro archivo.

6. Es necesario crear el archivo para el template definido en el decorador. Para el mismo ejemplo, se crearía el archivo `menu.component.html` al lado del archivo .ts con la siguiente forma:

```html
<h1>{{titulo}}</h1>
<ul>
  <li>Home</li>
  <li>Productos</li>
  <li>Contáctanos</li>
</ul>
```

7. Para que el componente pueda ser usado, es necesario registralo en el archivp `app.module.ts`:

```javascript
// ...
declarations: [
  AppComponent,
  MenuComponent,
],
// ...
```

8. Finalmente, en cualquier lugar del archivo `app.component.html` se puede incluir el componente creado. Para el ejemplo, se incluiría `<menu></menu>`

> Si se está ejecutando el servidor y LiveReload del proyecto, al guardar nuestros cambios la página ejecutada se debe recargar automáticamente, mostrando los nuevos cambios realizados

> Los componentes de Angular son reutilizables

## Ejercicio

Crea un componente reutilizable <empleados> que muestre un título enviado desde la clase.
