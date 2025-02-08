# gt-backend-2024

Backend para una aplicacion web para administrar un complejo turistico


## Integrantes de Equipo

Juan David Guarecuco Fernandez GitHub: Juanitoxxplay
### Especificaciones técnicas / Referencias

- Documentación oficial `https://expressjs.com/` 

#### Requerimientos previos:

- NodeJS
- Npm

#### Branches
- master -> Production Local ```http://localhost:3800/api```
- develop -> Develop Local ```http://localhost:3800/api```

### Configurar el entorno de desarrollo

### Instalación y configuración
- Pasos de ejecucion:

1. Clonar el repositorio en tu máquina local con el comando 
```
git clone https://github.com/juanitoxxplay/gt-backend-2024.git
```
2. Apuntar al directorio en la consola al proyecto con el comando 
```
cd gt-backend-2024
```
2. Instalar las dependencias necesarias con el comando 
```
npm install
```
3. Configurar las variables de entornos, usa el archivo `.env.example` 
copia pegalo renombra el nombre dejandole solo `.env` y colocale los valores correspondientes

4. Ejecutar el servidor de desarrollo con el comando 
```
npm run dev
```


#### Comandos para desplegar funciones.

| °   | Comando             | Descripción                                                            | Notas |
| --- | ------------------- | ---------------------------------------------------------------------- | ----- |
| 1   | `npm run dev`       | Ejecutar compilación de la aplicación y ejecutarla en modo desarrollo  |
| 2   | `npm run comp`      | Ejecutar la compilacion del proyecto                                   |
                                  

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
```
const syncModels = async () => {
  /* Colocar alter en falso en caso de que se valla a reiniciar la api
   * constantemente, a menos que se valla a reiniciar por alguna modificación
   * hecha en los modelos. De lo contrario la base de datos se podría
   * sobrecargar de índices con cada reinicio de la api,
   * y esto eventualmente podría causar errores
   * al consultar a tavés de la api
   */ 
  await db.sync({ alter: true });
  try {
  } catch (error) {
    console.error(error);
  }
};
```