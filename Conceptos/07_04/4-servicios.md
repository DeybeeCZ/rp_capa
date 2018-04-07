# Servicios
Son clases con un objetivo específico y claro, que nos facilitan la reutilización de código. Gracias a los servicios, la lógica dentro de los componentes se puede reducir, moviendo llamadas a apis o cualquier lógica pesada.

Los servicios permiten compartir código/data entre componentes

Para crear un servicio:
```javascript
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

}

En el componente:

import { DataService } from './data.service';

export class AppComponent {

  constructor(private dataService:DataService) {

  }

}
```

De esta manera se usa una instancia concreta de DataService, inyectandolo al componente.

Pero el inyector aun no sabe como crear DataService. El código de arriba fallará hasta que se agregue lo siguiente en el decorador del componente:
`providers: [DataService]`

## Servicio para peticiones http
Para crear un servicio que haga peticiones http, de la forma más básica, sería así:

**peticiones.service.ts**

```javascript
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PeticionesService {
  public url: string;

  constructor(private _http: Http) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPosts() {
    return this._http.get(this.url);
  }
}
```

Se usa Http para tener disponible los métodos como el get, el cual recibe la url a la cual se hará la petición.

Ahora se tiene disponible el método getPosts para usar en cualquier componente.

## Ejercicio:
Crea el servicio PeticionesService y utilizalo en un componente que muestre los posts en la pantalla.
