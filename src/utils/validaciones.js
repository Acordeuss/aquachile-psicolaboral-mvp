export function validarCandidato(formulario) {
  if (
    !formulario.nombre.trim() ||
    !formulario.correo.trim() ||
    !formulario.telefono.trim() ||
    !formulario.cargo.trim() ||
    !formulario.familiaCargo.trim()
  ) {
    return "Todos los campos son obligatorios.";
  }

  const regexCorreo =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexCorreo.test(formulario.correo)) {
    return "Ingrese un correo electrónico válido.";
  }

  if (formulario.telefono.trim().length < 8) {
    return "Ingrese un número de teléfono válido.";
  }

  return "";
}

export function validarEvaluacion(solicitud) {
  if (
    solicitud.estado !== "Pendiente" &&
    !solicitud.fechaEvaluacion
  ) {
    return "Debe ingresar la fecha de evaluación para continuar con este estado.";
  }

  if (
    solicitud.estado === "Finalizada" &&
    !(solicitud.observaciones || "").trim()
  ) {
    return "Para finalizar una evaluación debe registrar observaciones o un resultado general.";
  }

  return "";
}
