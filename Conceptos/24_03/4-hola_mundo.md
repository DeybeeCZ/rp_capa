# Proyecto: Hello World

## Pre-requisitos:

* Terminal de comandos (Para windows se puede usar [Cygwin](https://www.cygwin.com/))
* NodeJS (versión recomendada: 7.#)
* NPM

## Instalación

### Instalar Angular
##### Angular Quickstart:
1. Descargar el quickstart de Angular desde su repositorio:
[github.com/angular/quickstart](https://github.com/angular/quickstart)
2. Descomprimir el zip y desde la consola de comandos ingresar al directorio donde lo hemos descomprimido: `cd angular4`
3. Instalar las dependencias necesarias para el framework con el comando: `npm install`
4. En caso tengas instalado Angular 2, debes actualizarlo a 4 con este comando:
  ```javascript
  npm install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@next --save
  ```
  Caso contrario, puedes omitir este paso.

5. Ejecutar el proyecto con el comando: `npm start`

##### Angular CLI:

1. Instalar el cliente para Angular via npm con el siguiente comando: `npm install -g @angular/cli@latest`
2. Generar la estructura básica del proyecto con el siguiente comando: `ng new nombre-proyecto`
3. Ingresar al directorio del nuevo proyecto: `cd nombre-proyecto`
4. Ejecutar el proyecto con el comando: `npm start`

> Es importante verificar el package.json de que angular/comoon esté en la versión 4 y typescript en la 2.#

> Esta opción es más recomendable ya que facilita la generación de builds y luego el deploy a producción.

## Estructura de directorios

```
├── e2e: Configuración de tests e2e
├── node_modules: Dependencias del proyecto
├── src: El código principal de nuestro proyecto con la construcción de componentes, templates, servicios, etc
│   ├── tsconfig y typings: Configuraciones necesarias de typescript
│   ├── main.ts: Carga el módulo principal de la aplicación de angular
│   ├── index.html: Página principal donde se carga el framework
│   ├── environments: Configuración de entornos de desarrollo local, producción, etc
│   ├── assets: Imágenes, estilos, etc
│   └── app
│       ├── app.module.ts: Módulo principal de la aplicación
│       ├── app.component.ts: Componente principal de la aplicación
│       ├── app.component.spec.ts: Test del componente principal
│       ├── app.component.html: Template del componente principal
│       └── app.component.css: Estilos del componente principal
├── angular-cli.json: Configuración del CLI
├── editorconfig: Configuración para el editor
├── karma: Configuración de test
├── package.json: Dependencias del proyecto y tareas de npm
├── tsconfig: Configuración de typescript, estandares (ES6), etc
└── tslint: Configuración de análisis estático (Buenas prácticas y convenciones de código)
```

> En ***app.module.ts*** se declaran los componentes que van a ser usados en la aplicación de Angular
