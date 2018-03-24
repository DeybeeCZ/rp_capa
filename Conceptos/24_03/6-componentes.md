# Ciclo de vida de un componente
![Lifecycle](https://raw.githubusercontent.com/DeybeeCZ/rp_capa/master/Conceptos/img/lifecycle.png)

Las instancias de directivas y componentes tienen un ciclo de vida en el cual Angular los crea, actualiza y destruye.

* ngOnChanges: Cuando un input cambia de valor
* ngOnInit: Después del **primer** ngOnChanges
* ngDoCheck: Después de cada cambio detectado
* ngAfterContentInit: Después de que el contenido del componente ha sido inicializado
* ngAfterContentChecked: Después de cada check del contenido del componente
* ngAfterViewInit: Después de que la vista del componente haya sido inicializada
ngAfterViewChecked: Después del check de la vista del componente after every check of a component's view(s)
* ngOnDestroy - Justo antes de que se destruya el componente

## Ejercicio
Imprimir en consola “Me estoy creando" cuando un componente esté ejecutando su método ngOnInit y “Ya me creé” cuando ya se cargó en el DOM.
