import { useState } from "react";

function CandidatosPage({
  candidatos,
  onAgregar,
  onActualizar,
  rol
}) {
  const formularioVacio = {
    nombre: "",
    correo: "",
    telefono: "",
    cargo: "",
    familiaCargo: ""
  };

  const [mostrarFormulario, setMostrarFormulario] =
    useState(false);

  const [modoEdicion, setModoEdicion] =
    useState(false);

  const [mensaje, setMensaje] =
    useState("");

  const [formulario, setFormulario] =
    useState(formularioVacio);

  function manejarCambio(evento) {
    const { name, value } = evento.target;

    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  function limpiarFormulario() {
    setFormulario(formularioVacio);
    setModoEdicion(false);
    setMostrarFormulario(false);
    setMensaje("");
  }

  function abrirNuevoCandidato() {
    setFormulario(formularioVacio);
    setModoEdicion(false);
    setMensaje("");
    setMostrarFormulario(true);
  }

  function editarCandidato(candidato) {
    setFormulario({
      ...candidato
    });

    setModoEdicion(true);
    setMensaje("");
    setMostrarFormulario(true);

    setTimeout(() => {
      document
        .getElementById("formulario-candidato")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }, 50);
  }

  function manejarSubmit(evento) {
    evento.preventDefault();

    setMensaje("");

    if (
      !formulario.nombre.trim() ||
      !formulario.correo.trim() ||
      !formulario.telefono.trim() ||
      !formulario.cargo.trim() ||
      !formulario.familiaCargo.trim()
    ) {
      setMensaje(
        "Todos los campos son obligatorios."
      );
      return;
    }

    const regexCorreo =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexCorreo.test(formulario.correo)) {
      setMensaje(
        "Ingrese un correo electrónico válido."
      );
      return;
    }

    if (formulario.telefono.trim().length < 8) {
      setMensaje(
        "Ingrese un número de teléfono válido."
      );
      return;
    }

    if (modoEdicion) {
      onActualizar(formulario);
    } else {
      onAgregar(formulario);
    }

    limpiarFormulario();
  }

  const esAnalista =
    rol === "Analista de Reclutamiento";

  return (
    <section
      id="candidatos"
      className="page-section bg-body-tertiary"
    >
      <div className="container py-5">

        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <p className="text-primary fw-semibold mb-1">
              Gestión
            </p>

            <h2 className="h3 fw-bold mb-1">
              Candidatos
            </h2>

            <p className="text-secondary mb-0">
              Registro, edición y consulta de candidatos.
            </p>
          </div>

          {esAnalista && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={abrirNuevoCandidato}
            >
              + Registrar candidato
            </button>
          )}
        </div>

        {!esAnalista && (
          <div className="alert alert-info">
            El Profesional Evaluador puede consultar
            candidatos, pero el registro y edición
            corresponden al Analista de Reclutamiento.
          </div>
        )}

        {mostrarFormulario && esAnalista && (
          <div
            id="formulario-candidato"
            className="card border-0 shadow-sm mb-4"
          >
            <div className="card-body p-4">

              <h3 className="h5 mb-4">
                {modoEdicion
                  ? "Editar candidato"
                  : "Nuevo candidato"}
              </h3>

              {mensaje && (
                <div className="alert alert-danger">
                  {mensaje}
                </div>
              )}

              <form onSubmit={manejarSubmit}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">
                      Nombre completo
                    </label>

                    <input
                      type="text"
                      name="nombre"
                      className="form-control"
                      value={formulario.nombre}
                      onChange={manejarCambio}
                      placeholder="Ej: Laura Pérez"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Correo electrónico
                    </label>

                    <input
                      type="email"
                      name="correo"
                      className="form-control"
                      value={formulario.correo}
                      onChange={manejarCambio}
                      placeholder="correo@ejemplo.cl"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Teléfono
                    </label>

                    <input
                      type="text"
                      name="telefono"
                      className="form-control"
                      value={formulario.telefono}
                      onChange={manejarCambio}
                      placeholder="+56912345678"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Cargo
                    </label>

                    <input
                      type="text"
                      name="cargo"
                      className="form-control"
                      value={formulario.cargo}
                      onChange={manejarCambio}
                      placeholder="Ej: Analista de Sistemas"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Familia de cargo
                    </label>

                    <select
                      name="familiaCargo"
                      className="form-select"
                      value={formulario.familiaCargo}
                      onChange={manejarCambio}
                    >
                      <option value="">
                        Seleccione...
                      </option>

                      <option value="Profesional">
                        Profesional
                      </option>

                      <option value="Supervisión">
                        Supervisión
                      </option>

                      <option value="Técnico">
                        Técnico
                      </option>

                      <option value="Operacional">
                        Operacional
                      </option>

                      <option value="Jefatura">
                        Jefatura
                      </option>
                    </select>
                  </div>

                </div>

                <div className="d-flex gap-2 mt-4">
                  <button
                    type="submit"
                    className="btn btn-success"
                  >
                    {modoEdicion
                      ? "Guardar cambios"
                      : "Guardar candidato"}
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={limpiarFormulario}
                  >
                    Cancelar
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

        <div className="card border-0 shadow-sm">
          <div className="table-responsive">

            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Teléfono</th>
                  <th>Cargo</th>
                  <th>Familia</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {candidatos.map(candidato => (
                  <tr key={candidato.id}>
                    <td>
                      <strong>
                        {candidato.nombre}
                      </strong>
                    </td>

                    <td>
                      {candidato.correo}
                    </td>

                    <td>
                      {candidato.telefono}
                    </td>

                    <td>
                      {candidato.cargo}
                    </td>

                    <td>
                      <span className="badge text-bg-light border">
                        {candidato.familiaCargo}
                      </span>
                    </td>

                    <td className="text-end">
                      {esAnalista && (
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                          onClick={() =>
                            editarCandidato(candidato)
                          }
                        >
                          Editar
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {candidatos.length === 0 && (
              <div className="text-center py-5 text-secondary">
                No existen candidatos registrados.
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default CandidatosPage;