# Inyección de dependencias (DI)

Es un patrón de diseño muy importante utilizado en Angular, que contiene su propio framework para esto.

Sin inyección de dependencias, los propios componentes deberían instanciar sus copias de las clases que quieran usar. Si las clases cambian su forma de construirse, el componente también tendría que cambiar su forma de instanciarlos. Esto es difícil de mantener debido a su inflexibilidad.

En Angular se inyecta una dependencia agregandolo al decorador del componente como provider y usandolo en el constructor:
```javascript
providers: [FooService]

constructor(private fooService:FooService) {
 ...
}
```
