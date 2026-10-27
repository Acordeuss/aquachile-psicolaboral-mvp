export function filtrarSolicitudes(
  solicitudes,
  busqueda,
  filtroEstado,
  filtroFecha
) {
  const textoBusqueda =
    busqueda.trim().toLowerCase();

  return solicitudes.filter(solicitud => {
    const texto =
      `${solicitud.candidatoNombre} ${solicitud.cargo} ${solicitud.familiaCargo} ${solicitud.responsable}`
        .toLowerCase();

    const coincideBusqueda =
      !textoBusqueda ||
      texto.includes(textoBusqueda);

    const coincideEstado =
      !filtroEstado ||
      solicitud.estado === filtroEstado;

    const coincideFecha =
      !filtroFecha ||
      solicitud.fechaSolicitud === filtroFecha;

    return (
      coincideBusqueda &&
      coincideEstado &&
      coincideFecha
    );
  });
}
