# gt-backend-2024

Backend para una aplicacion web sobre ventas de productos de un local o tienda.


## Integrantes de Equipo

Juan David Guarecuco Fernandez
### Especificaciones técnicas / Referencias

- Documentación oficial `https://expressjs.com/` 

#### Requerimientos previos:

- NodeJS
- Npm

#### Branches

- master -> Production Service`https://example.com/api`
- master -> Production Local ```http://localhost:3800/api```
- develop -> Develop Service `https://example.com/api`
- develop -> Develop Local ```http://localhost:3800/api```

### Configurar el entorno de desarrollo

### Instalación y configuración
- Pasos de ejecucion:

1. Clonar el repositorio en tu máquina local con el comando 
```
git clone https://github.com/Zedmous/test-bk-datanet.git
```
2. Apuntar al directorio en la consola al proyecto con el comando 
```
cd datanet-bk-test
```
2. Instalar las dependencias necesarias con el comando 
```
npm install
```
3. Configurar las variables de entornos, usa el archivo `.env.example` 
copia pegalo renombra el nombre dejandole solo `.env` y colocale los valores correspodnientes
4. Ejecutar el servidor de desarrollo con el comando 
```
npm run dev
```
4. Ejercutar el servidor de produccion con el comando (previamente debes compilarlo con el comando `npm run comp`)
```
npm run start
```

#### Comandos para desplegar funciones.

| °   | Comando             | Descripción                                                            | Notas |
| --- | ------------------- | ---------------------------------------------------------------------- | ----- |
| 1   | `npm run dev`       | Ejecutar compilación de la aplicación y ejecutarla en modo desarrollo  |
| 2   | `npm run comp`      | Ejecutar la compilacion del proyecto                                   |
| 3   | `npm run start`     | Ejecutar la aplicación en producción                                   |

### Folder Structure

```
├──src:
|   ├──config:
|   │   ├── index.ts
|   │   ├── *.config.ts
|   ├──controllers:
|   │   ├──index.ts
|   │   ├── *.controller.ts
|   ├──helpers:
|   │   ├── ...
|   ├──interfaces:
|   │   ├──index.ts
|   │   ├── *.interface.ts
|   ├──middlewares:
|   │   ├── ...
|   ├──models:
|   │   ├──index.ts
|   │   ├── *.model.ts
|   ├──routes:
|   │   ├──index.ts
|   │   ├── *.route.ts
|   ├──server:
|   │   ├──server.ts
|   ├──services:
|   │   ├── *.service.ts
|   ├─validators:
|   │   ├──index.ts
|   │   ├── *.validator.ts
|   ├──app.ts
├──.env.example
├──.gitignore
├──package-lock.json
├──package.json
├──README.md
├──tsconfig.json
├──tslint.json
```

### Notas

- La aplicación fue creada por medio de express.
- Se debe crear la base de datos previeamente antes de ejecutar el comando npm run dev, y el nombre que se crea debe usarse en los env.
- Se debe crear el archivo .env

| °   | Paquete                            | Versión         |
| --- | ---------------------------------- | --------------- |
|  1  | `cors`                             | `^2.8.5`        |
|  2  | `dotenv`                           | `^16.4.5`       |
|  3  | `express`                          | `^4.19.2`       |
|  4  | `express-validator`                | `^7.1.0`        |
|  5  | `mysql2`                           | `^3.10.1`       |
|  6  | `sequelize`                        | `^6.37.3`       |
|  7  | `swagger-jsdoc`                    | `^6.2.8`        |
|  8  | `swagger-ui-express`               | `^5.0.1`        |


### Documentacion de la Api y Pruebas en Swagger
- local -> 
```
http://localhost:3800/swagger
```
