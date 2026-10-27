export function obtenerIndicadores(
  candidatos,
  solicitudes
) {
  return {
    candidatos: candidatos.length,

    pendientes: solicitudes.filter(
      solicitud =>
        solicitud.estado === "Pendiente"
    ).length,

    enProceso: solicitudes.filter(
      solicitud =>
        solicitud.estado === "En proceso"
    ).length,

    finalizadas: solicitudes.filter(
      solicitud =>
        solicitud.estado === "Finalizada"
    ).length
  };
}
