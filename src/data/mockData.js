
export const candidatosIniciales = [
  {
    id: 1,
    nombre: "Ana Torres",
    correo: "ana.torres@ejemplo.cl",
    telefono: "+56911111111",
    cargo: "Analista de Sistemas",
    familiaCargo: "Profesional"
  },
  {
    id: 2,
    nombre: "Diego Soto",
    correo: "diego.soto@ejemplo.cl",
    telefono: "+56922222222",
    cargo: "Supervisor de Producción",
    familiaCargo: "Supervisión"
  },
  {
    id: 3,
    nombre: "Camila Rojas",
    correo: "camila.rojas@ejemplo.cl",
    telefono: "+56933333333",
    cargo: "Operador Sala Control",
    familiaCargo: "Técnico"
  }
];

export const solicitudesIniciales = [
  {
    id: 101,
    candidatoId: 1,
    candidatoNombre: "Ana Torres",
    cargo: "Analista de Sistemas",
    familiaCargo: "Profesional",
    fechaSolicitud: "2026-10-02",
    responsable: "Evaluador 1",
    estado: "Pendiente",
    fechaEvaluacion: "",
    observaciones: ""
  },
  {
    id: 102,
    candidatoId: 2,
    candidatoNombre: "Diego Soto",
    cargo: "Supervisor de Producción",
    familiaCargo: "Supervisión",
    fechaSolicitud: "2026-10-03",
    responsable: "Evaluador 2",
    estado: "En proceso",
    fechaEvaluacion: "2026-10-08",
    observaciones: "Entrevista psicolaboral programada."
  },
  {
    id: 103,
    candidatoId: 3,
    candidatoNombre: "Camila Rojas",
    cargo: "Operador Sala Control",
    familiaCargo: "Técnico",
    fechaSolicitud: "2026-10-01",
    responsable: "Evaluador 1",
    estado: "Finalizada",
    fechaEvaluacion: "2026-10-04",
    observaciones: "Evaluación finalizada correctamente."
  }
];