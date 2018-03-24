# Conceptos básicos

## El Patron MVVM

MVVM es un sucesor de otro patrón bien conocido y exitoso como es el Model View Controller (MVC). MVC nació (como tantos otros patrones bien conocidos y exitosos) en el mundo de Smalltalk hace más de treinta años. Al usar MVC la aplicación se compone de tres tipos de objetos, con responsabilidades bien claras y diferenciadas:

### MVC
* El **modelo**. Habitualmente hay un solo modelo por aplicación. El modelo es responsable de todos los datos de la aplicación y de la lógica de negocios relacionada.
* La **vista** o vistas. Una o más representaciones para el usuario final del modelo de la aplicación. La vista es responsable de mostrar los datos al usuario y de permitir la manipulación de los datos de la aplicación.
* El **controlador** o controladores. Habitualmente hay un controlador por vista, aunque no es raro ver un controlador por entidad de dominio controlando varias vistas. El controlador es responsable de transferir datos desde el modelo hacia la vista asociada y viceversa. También es responsable de implementar el comportamiento de la vista para responder a las acciones de los usuarios.
![Patrón MVC](https://fernandomachadopiriz.files.wordpress.com/2010/06/image.png)

### MVVM
* El **modelo**. Lo mismo que en MVC.
* La **vista** o vistas. Igual que en MVC.
* El **modelo-vista**. Uno o más por vista. El modelo-vista es responsable de implementar el comportamiento de la vista para responder a las acciones del usuario y de exponer los datos del modelo de forma tal que sea fácil usar bindings en la vista.
![Patrón MVVM](https://fernandomachadopiriz.files.wordpress.com/2010/06/image1.png)


![Arquitectura de Angular 4](https://raw.githubusercontent.com/DeybeeCZ/rp_capa/master/Conceptos/img/angular4-arch.jpg)

### Componentes

Un componente controla una porción de la aplicación. Todo lo que se puede ver en pantalla es controlado y gestionado por este tipo de elementos.

La lógica de un componente dentro una clase en Angular 4 es la que da soporte a una vista interactuando con ella a través de una API con propiedades y métodos.

El componente hace de mediador entre la vista (a través de la plantilla) y la lógica de la app donde se incluirá el modelo de datos (es decir, una especie de controlador).

### Templates

Los templates definen la vista de los componentes junto con la estructura del contenido que reside dentro de ellos.

Los templates son html con sintaxis especial de Angular, que funcionan con el data binding y las directivas.

### Decoradores y metadatos

Los decoradores (patrón de diseño) son utilizados en Angular para configurar dinámicamente atributos/metadatos de los componentes (clases).

Los metadatos describen las clases y también sus relaciones. Por ejemplo, si tenemos un componente y también un template, el metadato es el encargado de decirle a Angular que ese componente y ese template van juntos.

### Servicios

Son clases con un objetivo claro, que facilitan la reutilización.

Son un tipo de componente dentro de la arquitectura de Angular 4 y mediante la inyección de dependencias los podemos usar en otros componentes.

### Providers

Son servicios que nos proveen de datos o funcionalidades mediante sus métodos. Existen providers/servicios
propios de Angular y también pueden ser creados de forma personalizada.

### Directivas

Son funcionalidades aplicables al DOM (Document Object Model) y a los elementos HTML en el template de un componente. Por ejemplo, una directiva puede servir para controlar que un div se muestre o no o recorrer un array en la vista (directivas estructurales, estructuras condicionales y de control) o incluso también puede servir para darle un estilo u otro a un elemento del HTML o para interactuar con el modelo de datos del componente.

Básicamente son nuevos atributos para aplicarle a cualquier cosa en nuestra plantilla/vista.

Existe más información sobre la arquitectura de Angular 4 en la [documentación ofical](https://angular.io/guide/architecture).
