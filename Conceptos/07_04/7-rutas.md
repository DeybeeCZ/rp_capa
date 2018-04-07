# Routing
Una parte fundamental de un SPA es la posibilidad de manejar las rutas (urls) a las cuales accede el usuario del sitio.

> Para que funcione el router es importante configurar primero, en html, la etiqueta `<base href="/">`

Los pasos necesarios para lograrlo son los siguientes:

1. Crear el archivo *app.routing.ts*:

```javascript
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { MenuComponent } from './menu/menu.component';
import { OtherComponent } from './other/other.component';

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'otros', component: OtherComponent },
  { path: '**', component: MenuComponent } // Page not found
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
```

Este nuevo archivo sirve la configuración básica de cada url que manejará Angular.

2. En *app.module.ts*:
```javascript
import { OtherComponent } from './other/other.component';
import { routing, appRoutingProviders } from './app.routing';

declarations = [
…
OtherComponent,
],
imports = [
  …
  routing
],
providers: [appRoutingProvider]
```

En *app.component.html*:
```html
<router-outlet></router-outlet>
```

Con esto ya se puede acceder a las urls indicadas, las cuales mostrarán la vista adecuada.

## Link a rutas

Para acceder a una url desde un enlace interno del sitio es necesario usar routerLink.

```html
<a [routerLink]="['/catalogo']">
  Catálogo
</a>
```

Para mantener un estilo 'activo' se puede agregar una clase usando routerLinkActive.

Permite agregar una clase css
`[routerLinkActive]="['activado']"`

## Ejercicio:
Crea un menú de navegación con Angular con links Inicio, catálogo y contáctanos. Configura el routing para que cada link muestre un componente distinto.

## Parámetros por la url
En la url que se agrega en la configuración del path, agregar un wildcare tipo “catalogo/:id”. El id es un comodín que aceptará cualqueir texto.

En la archivo typescript del componente ([nombre].component.ts), se debe importa Router, ActivatedRoute y Params, que vienen del paquete **@angular/router**

```javascript
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: catalogo,
  templateUrl: './catalogo.component.html'
})

export class CatalogoComponent {
  public parametro;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['id']; // Contiene el id que se pasó en la url
    })
  }
}
```
## Redirecciones con el router

Para direccionar a urls del sitio de manera programática:

`this._router.navigate(['/catalogo', '123'])`
