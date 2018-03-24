# Configuración del entorno de desarrollo
Para poder configurar nuestro ambiente de desarrollo y poder trabajar con angular4, lo primero que necesitaremos
tener instalado son [Node.js® y npm](https://nodejs.org/en/download/), lo ideal es trabajar con una version LTS(Long Term Support)
pues será la versión estable a la que se le dará soporte por un largo periodo.

Si no sabes como verificar si ya tienes alguna version de nodejs instalada puedes usar el siguiente comando desde tu terminal:
```
node -v
```

Lo mismo para el caso de no saber si se tiene instalado npm
```
npm -v
```

El siguiente paso seria instalar [Angular CLI](https://cli.angular.io/) globalmente con la ayuda de npm
```
npm install -g @angular/cli
```

## Ejercicio
Verificar que todos tengan instalado correctamente nodejs, npm y angular CLI


## Cliente de angular
Para una mayor facilidad al momento de gestionar un proyecto, ahora utilizaremos la ayuda de [**@angular-cli**](https://cli.angular.io/), para instalarlo solo usaremos el siguiente comando:

```
npm install -g @angular/cli
```

## Creación de un proyecto
Ahora que tenemos instalado el cliente de angular, solo debemos usar el siguiente comando para poder crear un nuevo proyecto:
```
ng new <nombre proyecto>
```
Para la creación del proyecto, existen multiples parametros que nos ayudaran, para tener una visión más clara de esto podemos usar el siguiente comando:
```
ng new --help
```
## Ejercicio 2
Crea un nuevo proyecto con el cliente de angular, dicho proyecto deberia tener un archivo routing

## Generación de un componente
Con la ayuda de **ng** procederemos a crear un componente, para poder crearlo solo debemos ejecutar lo siguiente:
```
ng generate component <nombre>
```
## Generación de un servicio
Para crear un servicio solo necesitamos ejecutar el siguiente comando:
```
ng generate service <nombre>
```

## Generación de una clase
Para crear una clase solo necesitamos ejecutar el siguiente comando:
```
ng generate class <nombre>
```

## Ejercicio 3
Dentro del proyecto creado en el ejercicio 1, crear componentes, modelos y clases, con la siguiente estructura
```
App
├── Components
│   └── menu-top
│       ├── menutop.component.ts
│       ├── menutop.component.spec.ts
│       ├── menutop.component.html
│       └── menutop.component.css
├── Models
│   └── menu
│       ├── menu.model.spec.ts
│       └── menu.model.ts
│   └── item
│       ├── item.model.spec.ts
│       └── item.model.ts
├── Services
│   └── menu.service.ts
│   └── menu.service.ts
└── ....
```
