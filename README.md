# AquaChile · Gestión de Evaluaciones Psicolaborales

MVP web académico desarrollado para la asignatura **Desarrollo Full Stack II (DSY1104)** de Duoc UC, en el contexto de **Vinculación con el Medio (VcM)**.

El proyecto aborda un caso académico asociado a AquaChile y propone una solución frontend para centralizar el registro de candidatos, la creación y seguimiento de solicitudes de evaluación psicolaboral y la consulta de indicadores del proceso.

> **Importante:** este repositorio corresponde exclusivamente a un proyecto académico. Utiliza datos ficticios o simulados y no representa un sistema oficial de AquaChile ni contiene información personal o interna real.

---

## Objetivo del MVP

Desarrollar una aplicación web en React que permita organizar y dar trazabilidad inicial al proceso de evaluaciones psicolaborales mediante un flujo centralizado:

**Candidato → Solicitud → Responsable → Estado → Evaluación → Seguimiento**

La solución busca reducir la fragmentación de la información dentro del prototipo académico y demostrar un avance funcional coherente con los requerimientos del caso VcM.

---

## Funcionalidades implementadas

### Dashboard

- Total de candidatos registrados.
- Solicitudes pendientes.
- Solicitudes en proceso.
- Evaluaciones finalizadas.
- Visualización de candidatos y solicitudes recientes.

### Gestión de candidatos

- Registro de candidatos.
- Edición de información.
- Consulta de candidatos.
- Validación de campos obligatorios.
- Validación de correo electrónico.
- Validación básica de teléfono.

### Gestión de solicitudes

- Creación de solicitudes asociadas a un candidato.
- Registro de responsable y fecha de solicitud.
- Consulta del detalle.
- Búsqueda por candidato, cargo, familia de cargo o responsable.
- Filtro por estado.
- Filtro por fecha.
- Limpieza de filtros.
- Actualización del estado de la evaluación.
- Registro de fecha de evaluación.
- Registro de observaciones o resultado general.

### Roles simulados

**Analista de Reclutamiento**

- Registrar y editar candidatos.
- Crear solicitudes.
- Consultar candidatos y solicitudes.
- Revisar detalles del proceso.

**Profesional Evaluador**

- Consultar candidatos y solicitudes.
- Gestionar evaluaciones.
- Actualizar estados.
- Registrar fecha de evaluación.
- Registrar observaciones o resultado general.

---

## Estados del proceso

Las solicitudes utilizan tres estados principales:

- `Pendiente`
- `En proceso`
- `Finalizada`

Los estados se representan visualmente mediante componentes reutilizables de Bootstrap.

---

## Navegación

La aplicación utiliza **React Router** para navegar entre las interfaces sin recargar completamente la página.

| Ruta | Vista |
|---|---|
| `/` | Dashboard |
| `/candidatos` | Gestión de candidatos |
| `/solicitudes` | Gestión y seguimiento de solicitudes |

Las rutas desconocidas redirigen automáticamente al Dashboard.

---

## Gestión de estado y persistencia

El estado principal de candidatos, solicitudes y rol simulado se administra con `useState`.

La aplicación utiliza `localStorage` como persistencia temporal del frontend, permitiendo mantener los cambios realizados durante la demostración aun después de recargar la página.

Esta persistencia es únicamente parte del MVP frontend y será reemplazada por una base de datos real en una etapa posterior.

---

## Validaciones y lógica reutilizable

Parte de la lógica fue separada de las vistas para facilitar su reutilización y prueba.

```text
src/utils/
├── filtros.js
├── indicadores.js
└── validaciones.js
```

Estas funciones permiten:

- Validar candidatos.
- Validar cambios de estado de las evaluaciones.
- Aplicar búsquedas y filtros.
- Calcular los indicadores mostrados en el Dashboard.

---

## Pruebas unitarias con Vitest

El proyecto incorpora pruebas unitarias para verificar comportamientos relevantes del frontend.

Actualmente se prueban escenarios relacionados con:

- Registro válido de candidato.
- Campos obligatorios vacíos.
- Correo electrónico inválido.
- Evaluación en proceso sin fecha.
- Evaluación finalizada sin observaciones.
- Filtro por estado.
- Búsqueda por candidato.
- Filtro por fecha.
- Cálculo de indicadores del Dashboard.

### Ejecutar pruebas

```bash
npm run test:run
```

Para ejecutar Vitest en modo interactivo:

```bash
npm run test
```

Las evidencias de testing se almacenan en:

```text
docs/testing/
```

---

## Tecnologías utilizadas

- React
- Vite
- Bootstrap 5
- React Router
- Vitest
- JavaScript
- HTML5
- CSS3
- localStorage

---

## Arquitectura actual

El proyecto corresponde actualmente al **frontend funcional del MVP**.

```text
UI / Pages
    ↓
Componentes reutilizables
    ↓
Estado React
    ↓
Funciones de validación, filtros e indicadores
    ↓
Datos simulados + localStorage
```

La solución está organizada por responsabilidad para mantener el código comprensible y facilitar su evolución hacia la etapa Full Stack.

---

## Estructura del proyecto

```text
aquachile-psicolaboral-mvp/
│
├── public/
│
├── src/
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
│   ├── tests/
│   │   ├── filtros.test.js
│   │   ├── indicadores.test.js
│   │   └── validaciones.test.js
│   │
│   ├── utils/
│   │   ├── filtros.js
│   │   ├── indicadores.js
│   │   └── validaciones.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── docs/
│   ├── ERS_Actualizado.md
│   └── testing/
│       ├── casos-prueba.md
│       └── vitest-resultados.png
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## Instalación y ejecución

Clonar el repositorio:

```bash
git clone <URL-DEL-REPOSITORIO>
```

Entrar al proyecto:

```bash
cd aquachile-psicolaboral-mvp
```

Instalar dependencias:

```bash
npm install
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

---

## Comandos de verificación

### Pruebas

```bash
npm run test:run
```

### Build de producción

```bash
npm run build
```

### Revisión con ESLint

```bash
npm run lint
```

---

## Alcance de la Evaluación Parcial 2

En esta etapa se encuentra implementado:

- Frontend desarrollado en React.
- Diseño responsive con Bootstrap 5.
- Componentes reutilizables.
- Props.
- Arrays y `.map()`.
- `useState`.
- Eventos.
- Búsqueda y filtros.
- Renderizado condicional.
- Formularios con validaciones.
- Navegación con React Router.
- Flujo integrado entre candidatos, solicitudes y evaluaciones.
- Datos ficticios.
- Persistencia temporal con `localStorage`.
- Pruebas unitarias con Vitest.

---

## Próxima etapa Full Stack

La Evaluación Parcial 2 corresponde a un avance del frontend. Por lo tanto, quedan fuera del alcance actual:

- Backend monolítico.
- API REST.
- Base de datos real.
- Autenticación real.
- Persistencia definitiva.
- Integración frontend/backend.
- Despliegue final Full Stack.

Estas capacidades serán incorporadas en la siguiente etapa del MVP.

---

## Correspondencia con la problemática VcM

Las funcionalidades implementadas permiten centralizar en un mismo flujo información que, dentro del caso académico, puede encontrarse fragmentada entre distintos registros.

El MVP permite consultar:

- quién es el candidato;
- a qué cargo postula;
- qué solicitud tiene asociada;
- quién es responsable de la evaluación;
- en qué estado se encuentra;
- cuándo fue solicitada y evaluada;
- qué observaciones generales se registraron.

De esta manera, el frontend aporta una primera capa de **orden, seguimiento y trazabilidad** al proceso psicolaboral planteado en el caso.

---

## Estado del proyecto

**Evaluación Parcial 2 — Frontend funcional**

- [x] React + Vite
- [x] Bootstrap 5
- [x] Diseño responsive
- [x] Componentes reutilizables
- [x] Props y `.map()`
- [x] Estado con `useState`
- [x] Eventos y condicionales
- [x] Formularios y validaciones
- [x] React Router
- [x] Búsqueda y filtros
- [x] Datos ficticios
- [x] localStorage
- [x] Vitest
- [ ] Backend
- [ ] Base de datos real
- [ ] API REST
- [ ] Integración Full Stack
- [ ] Despliegue final

---

## Autor

**Carlos Leal**  
Estudiante de Ingeniería en Informática  
Duoc UC

Proyecto académico desarrollado para **Desarrollo Full Stack II — DSY1104**.
