# Configuración de entornos de prueba y produccion

Cuando se habla sobre generar diferentes entornos de prueba, se presentan varias preguntas
* ¿Usaremos variables de entorno (ENV)?
* ¿Haremos la configuración de forma manual?
* ¿Tendremos archivos de configuración?

para darle respuesta a todas estas preguntas surge **angular-cli**, quien al generar proyectos
de forma predeterminada genera al menos 2 ambientes, uno de desarrollo y uno de produción.

Si aun no, creaste un proyecto con angular-cli solo debes ejecutar el siguiente comando:
```
ng new <nombre_proyecto>
```
## Comprobando los ambientes
Ahora que tenemos creado nuestro proyecto podremos verificar la existencia de un directorio
```
ls src/environments
```
Dentro de esta carpeta, encontraremos 2 archivos
```
environments
├── enviroment.prod.ts
└── enviroment.ts
```
dentro de los cuales podremos definir los valores que usaremos en cada uno de los ambientes.

Para poder hacer uso de esta constante, segun el ambiente. Solo debes importarla desde donde la necesites
llamando a **enviroment**
```
import { environment } from '../environments/environment'

environment.variable
```
Ahora solo nos queda compilar y ejecutar segun el ambiente. Cuando ejecutamos el comando:
```
ng build
```
lo que estamos haciendo en compilar pero con el ambiente desarrollo por defecto, para poder visualizar las variables
del ambiente de produccion, solo debemos hacer lo siguiente:
```
ng build --env=prod
```
o ejecutamos
```
ng serve --env=prod
```
## Nuevos ambientes
Para nuevos ambientes, solo debe agregar un nuevo alias dentro de la variable enviroments del archivo **angular-cli.json**
y crear un nuevo archivo dentro de enviroment con la siguiente estructura:
```
enviroment.<alias>.ts
```

## Ejercicio
Construir una aplicación que cuente con 3 ambientes (desarrollo,qa,produccion) y que para cada uno se visualice un titulo y mensaje diferente de bienvenida.
