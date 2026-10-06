# AquaChile · MVP Gestión de Evaluaciones Psicolaborales

Proyecto académico desarrollado para la asignatura **Full Stack II - DSY1104** de Duoc UC.

El proyecto aborda un caso académico asociado a AquaChile y propone un MVP web para centralizar y organizar el proceso de evaluaciones psicolaborales.

> Este repositorio corresponde exclusivamente a un proyecto académico y utiliza información ficticia o simulada. No representa un sistema oficial de AquaChile ni contiene datos internos o personales reales.

## Objetivo

Desarrollar una aplicación web que permita gestionar de forma centralizada:

- candidatos
- solicitudes de evaluación
- responsables
- estados del proceso
- fechas de evaluación
- observaciones generales
- indicadores del proceso

La solución busca demostrar cómo una aplicación Full Stack puede apoyar la digitalización inicial de un flujo administrativo.

## Funcionalidades actuales

### Analista de Reclutamiento

- Registrar candidatos
- Editar información de candidatos
- Consultar candidatos
- Crear solicitudes de evaluación
- Consultar solicitudes
- Buscar y filtrar registros

### Profesional Evaluador

- Consultar candidatos
- Consultar solicitudes
- Registrar fecha de evaluación
- Agregar observaciones
- Actualizar estado de la evaluación

## Estados del proceso

- Pendiente
- En proceso
- Finalizada

## Dashboard

La aplicación incluye indicadores dinámicos para:

- Total de candidatos
- Solicitudes pendientes
- Solicitudes en proceso
- Evaluaciones finalizadas

## Tecnologías utilizadas

- React
- Vite
- Bootstrap 5
- JavaScript
- HTML5
- CSS3
- LocalStorage

## Arquitectura actual

Actualmente el proyecto corresponde al frontend funcional del MVP.

Los datos se almacenan temporalmente mediante LocalStorage y datos simulados.

La siguiente etapa contempla:

- Backend monolítico
- API REST
- Base de datos
- Persistencia real
- Integración frontend/backend

El frontend se encuentra organizado por responsabilidad:

- **components/**: componentes reutilizables de la interfaz.
- **pages/**: vistas principales del sistema.
- **data/**: datos ficticios utilizados durante la etapa de prototipado.
- **App.jsx**: componente principal encargado de coordinar el estado general de la aplicación.
- **main.jsx**: punto de entrada de React.
- **index.css**: estilos globales y ajustes responsive.

## Componentes principales

| Archivo | Función |
|---|---|
| `AppNavbar.jsx` | Barra de navegación y selección de rol simulado |
| `CandidatoCard.jsx` | Presentación resumida de candidatos |
| `EstadoBadge.jsx` | Representación visual del estado de una solicitud |
| `IndicadorCard.jsx` | Tarjetas de indicadores utilizadas en el dashboard |
| `SolicitudCard.jsx` | Presentación resumida de solicitudes |
| `CandidatosPage.jsx` | Registro, edición y consulta de candidatos |
| `DashboardPage.jsx` | Indicadores y resumen general del proceso |
| `SolicitudesPage.jsx` | Creación, búsqueda, filtrado y gestión de solicitudes |
| `mockData.js` | Datos ficticios utilizados para demostrar el funcionamiento del MVP |

## 📁 Estructura del proyecto

```text
aquachile-psicolaboral-mvp/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── AppNavbar.jsx
│   │   ├── CandidatoCard.jsx
│   │   ├── EstadoBadge.jsx
│   │   ├── IndicadorCard.jsx
│   │   └── SolicitudCard.jsx
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── pages/
│   │   ├── CandidatosPage.jsx
│   │   ├── DashboardPage.jsx
│   │   └── SolicitudesPage.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
