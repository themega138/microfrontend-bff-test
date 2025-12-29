# Monorepo: NestJS BFF + Angular Microfrontend

Este repositorio contiene una estructura de monorepo con:

- **BFF en NestJS** que expone endpoints dummy y persiste datos en MongoDB.
- **Microfrontends en Angular con Nx + Module Federation**: un shell y dos remotos (Dashboard y Reports) que consumen el BFF usando **NgRx**.
- **Docker + PM2** para levantar los servicios de forma consistente.

## Requisitos previos

### Opción A: Todo con Docker (recomendado)
- [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/)

### Opción B: Ejecutar localmente
- Node.js 20+
- npm 9+
- MongoDB 7+ (local o en Docker)
- Angular CLI 17 (`npm i -g @angular/cli`)

## Estructura del repo

```
.
├── apps
│   ├── bff
│   └── microfrontend
│       ├── apps
│       │   ├── shell
│       │   ├── dashboard
│       │   └── reports
│       ├── nx.json
│       └── tsconfig.base.json
├── docker
│   ├── Dockerfile.bff
│   ├── Dockerfile.microfrontend
│   └── pm2.ecosystem.config.js
├── docker-compose.yml
└── package.json
```

## Instalación

### Con Docker (todo en contenedores)

1. Construir y levantar servicios:
   ```bash
   docker compose up --build
   ```

2. Servicios disponibles:
   - **BFF**: http://localhost:3000/api
   - **Shell**: http://localhost:4200
   - **Dashboard remoto**: http://localhost:4201
   - **Reports remoto**: http://localhost:4202
   - **MongoDB**: mongodb://localhost:27017/bff

### Local (sin Docker)

1. Instalar dependencias:
   ```bash
   npm install
   npm --workspace apps/bff install
   npm --workspace apps/microfrontend install
   ```

2. Levantar MongoDB (si no tienes uno ya):
   ```bash
   docker run --name mongo -p 27017:27017 -d mongo:7
   ```

3. Ejecutar el BFF:
   ```bash
   npm --workspace apps/bff run build
   MONGO_URL=mongodb://localhost:27017/bff npm --workspace apps/bff run start
   ```

4. Ejecutar el microfrontend con Nx (shell + remotos):
   ```bash
   npm --workspace apps/microfrontend run serve:dashboard
   npm --workspace apps/microfrontend run serve:reports
   npm --workspace apps/microfrontend run serve:shell
   ```

## Uso del BFF

### Endpoints dummy
- **GET** `/api/dummy`
  ```json
  {
    "message": "Hola desde el BFF",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

- **GET** `/api/items`
  ```json
  [
    {
      "name": "Item 1",
      "description": "Texto opcional"
    }
  ]
  ```

- **POST** `/api/items`
  ```json
  {
    "name": "Nuevo item",
    "description": "Detalle"
  }
  ```

## Uso del microfrontend (Nx + Module Federation)

El shell carga dos remotos usando **Module Federation**:
- **Dashboard (remote)** consume `GET /api/dummy` con NgRx.
- **Reports (remote)** consume `GET /api/items` con NgRx.

Puertos usados:
- Shell: `http://localhost:4200`
- Dashboard: `http://localhost:4201`
- Reports: `http://localhost:4202`

## PM2

Los contenedores usan **PM2** para administrar procesos:
- Configuración: `docker/pm2.ecosystem.config.js`
- Servicios: `bff`, `microfrontend-shell`, `microfrontend-dashboard`, `microfrontend-reports`

## Comandos útiles

- Levantar todo con Docker:
  ```bash
  docker compose up --build
  ```

- Parar servicios:
  ```bash
  docker compose down
  ```

- Ver logs del BFF:
  ```bash
  docker compose logs -f bff
  ```

- Ver logs del microfrontend:
  ```bash
  docker compose logs -f microfrontend
  ```

## Notas

- El BFF está configurado para usar `mongodb://mongo:27017/bff` dentro de Docker.
- El microfrontend espera el BFF en `http://localhost:3000`.
