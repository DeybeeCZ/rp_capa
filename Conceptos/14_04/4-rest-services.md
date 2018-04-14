# HTTP Rest Services

Http es un protocolo de transferencia que usamos para solicitar algo a nuestra BD
o a un API(interfaz de programación de aplicaciones), y si bien no a cambiado la forma como se llaman
con respecto a la version anterior de Angular, si a cambiado la forma en que manejamos la respuesta.

Angular hace muy sencillo poder trabajar con peticiones Http, lo que necesitamos hacer es

* Importar HttpModule en el archivo module
```
//app.module.ts
import { Httpmodule } from '@angular/http'
...
...
@NgModule({
    imports:[
    BrowserModule
    HttpModule
    ],
    ...
    })
```
* Importar desde el servicio la libreria Http
```
//book.service.ts
import { Http } from '@angular/http'
...
```
* definir el servicio en el constructor
```
export class BookService{
    constructor(private _http:Http){}
    ...
}
```
Existen diferentes metodos de envio, en un rest APi, entre los más usado encontramos :
* Get: Obtener información
```
get(url: string, options?: RequestOptionsArgs): Observable<Response>
```

* Post: Creación de un nuevo objeto
```
post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>
```
* Put: Actualización
```
put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>
```
* Delete: Eliminado de un objeto.
```
delete(url: string, options?: RequestOptionsArgs): Observable<Response>
```

El objeto RequestOptionsArgs
```
url?: string|null
 method?: string|RequestMethod|null
 search?: string|URLSearchParams|{[key: string]: any | any[]}|null
 params?: string|URLSearchParams|{[key: string]: any | any[]}|null
 headers?: Headers|null
 body?: any
 withCredentials?: boolean|null
 responseType?: ResponseContentType|null
```

### Ejercicio 1:
Crea un aplicación que permita visualizar un listado de libros,usando http services y observables. La data la podemos obtener de [AQUI](https://raw.githubusercontent.com/DeybeeCZ/rp_capa/master/extras/books.json)

[!imagen](https://raw.githubusercontent.com/DeybeeCZ/rp_capa/master/Conceptos/img/book_store_actual.png)

### Ejercicio 2:
Usar http services y observables para poder mostrar el detalle de cada uno de los libros listados en la demo anterior

[!imagen](https://raw.githubusercontent.com/DeybeeCZ/rp_capa/master/Conceptos/img/detalle_book.png)
