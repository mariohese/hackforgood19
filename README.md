# Portal de Veracity News

## Descripción
Proyecto en docker que crea el portal de Veracity News

## Ficheros
Dentro de la carpeta  se encuentra todos los ficheros necesarios para el correcto despliegue de la aplicación. Posteriormente se comentarán en detalle.

### Configuracion de portal

Parametros del DockerFile para la creacion del portal de Veracity News

```
FROM node:8

WORKDIR /app

COPY portal/. /app

RUN npm install

EXPOSE 3000


CMD npm start
```

## Ejecución en producción

```
# Construir el proyecto llamando a los ficheros de configuración creados en la carpeta externa al proyecto
docker-compose -f docker-compose.yml build

# Arrancar los contenedores llamando a los ficheros de configuracón creados en la carpeta externa al proyecto
docker-compose -f docker-compose.yml up -d

```

## Enlaces relevantes
[Variables de entorno desde `docker-compose.ym`](https://docs.docker.com/compose/environment-variables/)
[Contenedor postgres](https://hub.docker.com/_/postgres/)
[Problemas con variables de entorno en el contenedor postgres](https://github.com/docker-library/postgres/issues/203)

