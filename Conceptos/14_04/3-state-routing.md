## Routing Avanzado
El tema de routing tiene diferentes formas de uso y hoy veremos variantes a las que ya hemos estado usando.

### Envio de parámetros
Muchas veces necesitamos construir url basandonos en parametros variables, los cuales nos serviran como fuente de información para realizar alguna función. Entonces ¿Cómo podemos enviar parametros entre las rutas de angular?

Primero necesitamos indicarle al router que recibiremos uno o mas parametros
```
const routes: Routes = [
...
{ path: 'animal/:id' , component: AnimalDetailComponent },
...
```
Una vez realizado esto, se nos brindara un observable con el que podremos trabajar en el componente asignado a esta ruta.
```
constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id= params['id'],
    ()=>console.log(`id pasado en la url: ${this.id}`))
}
```

### Rutas hijas
Dentro del desarrollo de una aplicación nos encontraremos tambien con vistas hijas dentro de las rutas.
Por ejemplo partiendo el ejemplo anterior, si tenemos una ruta **animal/:id** esta ruta podria tener hijos donde por ejemplo podamos ver detalles mas precisos.

* animal/1
    * animal/1/alimentacion
    * animal/1/nacimiento
    * animal/1/reproduccion

```
{ path:'animal/:id' , component: AnimalDetailComponent,
  children: [
    { path: '', redirectTo: 'alimentacion', pathMatch: 'full' },
    { path: 'alimentacion', component: AlimentacionComponent },
    { path: 'nacimiento', component: NacimientoComponent }
    { path: 'reproduccion', component: ReproduccionComponent }
  ]
}
```    
Ahora podremos incluir dentro del componente padre
la etiqueta
```
router-outlet
```
y llamar a las vistas hijas, sin olvidar que para usar el **routerLink** deberemos hacerlo de la siguiente forma en el componente padre
```
[routerLink]="['grid']"
```
