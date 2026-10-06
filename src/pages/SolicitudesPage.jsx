import { useState } from "react";
import EstadoBadge from "../components/EstadoBadge";

function obtenerFechaActualLocal() {
  const hoy = new Date();

  const anio = hoy.getFullYear();
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  const dia = String(hoy.getDate()).padStart(2, "0");

  return `${anio}-${mes}-${dia}`;
}

function SolicitudesPage({
  candidatos,
  solicitudes,
  onAgregar,
  onActualizar,
  rol
}) {
  const [mostrarFormulario, setMostrarFormulario] =
    useState(false);

  const [mensaje, setMensaje] =
    useState("");

  const [mensajeEvaluacion, setMensajeEvaluacion] =
    useState("");

  const [busqueda, setBusqueda] =
    useState("");

  const [filtroEstado, setFiltroEstado] =
    useState("");

  const [filtroFecha, setFiltroFecha] =
    useState("");

  const [
    solicitudSeleccionada,
    setSolicitudSeleccionada
  ] = useState(null);

  const [formulario, setFormulario] =
    useState({
      candidatoId: "",
      responsable: "",
      fechaSolicitud: obtenerFechaActualLocal()
    });

  const esAnalista =
    rol === "Analista de Reclutamiento";

  const esEvaluador =
    rol === "Profesional Evaluador";

  function manejarFormulario(evento) {
    const { name, value } = evento.target;

    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  function abrirNuevaSolicitud() {
    setMensaje("");
    setMostrarFormulario(true);
  }

  function cerrarFormulario() {
    setMensaje("");
    setMostrarFormulario(false);
  }

  function crearSolicitud(evento) {
    evento.preventDefault();

    setMensaje("");

    if (
      !formulario.candidatoId ||
      !formulario.responsable.trim() ||
      !formulario.fechaSolicitud
    ) {
      setMensaje(
        "Complete todos los campos de la solicitud."
      );
      return;
    }

    const candidato = candidatos.find(
      item =>
        item.id ===
        Number(formulario.candidatoId)
    );

    if (!candidato) {
      setMensaje(
        "No se encontró el candidato seleccionado."
      );
      return;
    }

    onAgregar({
      candidatoId: candidato.id,
      candidatoNombre: candidato.nombre,
      cargo: candidato.cargo,
      familiaCargo: candidato.familiaCargo,
      fechaSolicitud:
        formulario.fechaSolicitud,
      responsable:
        formulario.responsable.trim(),
      estado: "Pendiente",
      fechaEvaluacion: "",
      observaciones: ""
    });

    setFormulario({
      candidatoId: "",
      responsable: "",
      fechaSolicitud:
        obtenerFechaActualLocal()
    });

    setMostrarFormulario(false);
    setMensaje("");
  }

  function abrirGestion(solicitud) {
    setMensajeEvaluacion("");

    setSolicitudSeleccionada({
      ...solicitud
    });

    setTimeout(() => {
      document
        .getElementById(
          "gestion-evaluacion"
        )
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }, 50);
  }

  function cambiarGestion(evento) {
    const { name, value } =
      evento.target;

    setSolicitudSeleccionada({
      ...solicitudSeleccionada,
      [name]: value
    });
  }

  function guardarEvaluacion(evento) {
    evento.preventDefault();

    setMensajeEvaluacion("");

    if (
      !esEvaluador ||
      !solicitudSeleccionada
    ) {
      return;
    }

    if (
      solicitudSeleccionada.estado !==
        "Pendiente" &&
      !solicitudSeleccionada
        .fechaEvaluacion
    ) {
      setMensajeEvaluacion(
        "Debe ingresar la fecha de evaluación para continuar con este estado."
      );
      return;
    }

    if (
      solicitudSeleccionada.estado ===
        "Finalizada" &&
      !(
        solicitudSeleccionada
          .observaciones || ""
      ).trim()
    ) {
      setMensajeEvaluacion(
        "Para finalizar una evaluación debe registrar observaciones o un resultado general."
      );
      return;
    }

    onActualizar({
      ...solicitudSeleccionada,
      observaciones: (
        solicitudSeleccionada
          .observaciones || ""
      ).trim()
    });

    setSolicitudSeleccionada(null);
    setMensajeEvaluacion("");
  }

  const solicitudesFiltradas =
    solicitudes.filter(
      solicitud => {
        const texto =
          `${
            solicitud.candidatoNombre
          } ${
            solicitud.cargo
          } ${
            solicitud.familiaCargo
          } ${
            solicitud.responsable
          }`
            .toLowerCase();

        const coincideBusqueda =
          texto.includes(
            busqueda.toLowerCase()
          );

        const coincideEstado =
          !filtroEstado ||
          solicitud.estado ===
            filtroEstado;

        const coincideFecha =
          !filtroFecha ||
          solicitud.fechaSolicitud ===
            filtroFecha;

        return (
          coincideBusqueda &&
          coincideEstado &&
          coincideFecha
        );
      }
    );

  return (
    <section
      id="solicitudes"
      className="page-section"
    >
      <div className="container py-5">

        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">

          <div>
            <p className="text-primary fw-semibold mb-1">
              Seguimiento
            </p>

            <h2 className="h3 fw-bold mb-1">
              Solicitudes
            </h2>

            <p className="text-secondary mb-0">
              Gestión del proceso de
              evaluación psicolaboral.
            </p>
          </div>

          {esAnalista && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={
                mostrarFormulario
                  ? cerrarFormulario
                  : abrirNuevaSolicitud
              }
            >
              {mostrarFormulario
                ? "Cerrar formulario"
                : "+ Nueva solicitud"}
            </button>
          )}

        </div>

        {esEvaluador && (
          <div className="alert alert-info">
            Como Profesional Evaluador
            puedes consultar solicitudes,
            registrar información de
            evaluación y actualizar sus
            estados.
          </div>
        )}

        {esAnalista && (
          <div className="alert alert-light border">
            Como Analista de Reclutamiento
            puedes crear solicitudes,
            consultar registros y revisar
            sus detalles.
          </div>
        )}

        {mostrarFormulario &&
          esAnalista && (
          <div className="card border-0 shadow-sm mb-4">

            <div className="card-body p-4">

              <h3 className="h5 mb-4">
                Crear solicitud de
                evaluación
              </h3>

              {mensaje && (
                <div className="alert alert-danger">
                  {mensaje}
                </div>
              )}

              {candidatos.length ===
              0 ? (
                <div className="alert alert-warning">
                  Debe registrar al menos
                  un candidato antes de
                  crear una solicitud.
                </div>
              ) : (
                <form
                  onSubmit={
                    crearSolicitud
                  }
                >
                  <div className="row g-3">

                    <div className="col-lg-5">
                      <label className="form-label">
                        Candidato
                      </label>

                      <select
                        name="candidatoId"
                        className="form-select"
                        value={
                          formulario
                            .candidatoId
                        }
                        onChange={
                          manejarFormulario
                        }
                      >
                        <option value="">
                          Seleccione...
                        </option>

                        {candidatos.map(
                          candidato => (
                            <option
                              key={
                                candidato.id
                              }
                              value={
                                candidato.id
                              }
                            >
                              {
                                candidato.nombre
                              }
                              {" — "}
                              {
                                candidato.cargo
                              }
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    <div className="col-lg-4">
                      <label className="form-label">
                        Profesional
                        responsable
                      </label>

                      <input
                        type="text"
                        name="responsable"
                        className="form-control"
                        value={
                          formulario
                            .responsable
                        }
                        onChange={
                          manejarFormulario
                        }
                        placeholder="Ej: María González"
                      />
                    </div>

                    <div className="col-lg-3">
                      <label className="form-label">
                        Fecha solicitud
                      </label>

                      <input
                        type="date"
                        name="fechaSolicitud"
                        className="form-control"
                        value={
                          formulario
                            .fechaSolicitud
                        }
                        onChange={
                          manejarFormulario
                        }
                      />
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="btn btn-success mt-4"
                  >
                    Crear solicitud
                  </button>
                </form>
              )}

            </div>
          </div>
        )}

        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">

            <div className="row g-3">

              <div className="col-lg-6">
                <label className="form-label">
                  Buscar
                </label>

                <input
                  type="search"
                  className="form-control"
                  placeholder="Candidato, cargo, familia o responsable..."
                  value={busqueda}
                  onChange={evento =>
                    setBusqueda(
                      evento.target
                        .value
                    )
                  }
                />
              </div>

              <div className="col-md-6 col-lg-3">
                <label className="form-label">
                  Estado
                </label>

                <select
                  className="form-select"
                  value={filtroEstado}
                  onChange={evento =>
                    setFiltroEstado(
                      evento.target
                        .value
                    )
                  }
                >
                  <option value="">
                    Todos
                  </option>

                  <option value="Pendiente">
                    Pendiente
                  </option>

                  <option value="En proceso">
                    En proceso
                  </option>

                  <option value="Finalizada">
                    Finalizada
                  </option>
                </select>
              </div>

              <div className="col-md-6 col-lg-3">
                <label className="form-label">
                  Fecha de solicitud
                </label>

                <input
                  type="date"
                  className="form-control"
                  value={filtroFecha}
                  onChange={evento =>
                    setFiltroFecha(
                      evento.target
                        .value
                    )
                  }
                />
              </div>

            </div>

            {(
              busqueda ||
              filtroEstado ||
              filtroFecha
            ) && (
              <div className="mt-3">

                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => {
                    setBusqueda("");
                    setFiltroEstado("");
                    setFiltroFecha("");
                  }}
                >
                  Limpiar filtros
                </button>

              </div>
            )}

          </div>
        </div>

        <div className="card border-0 shadow-sm mb-5">

          <div className="table-responsive">

            <table className="table table-hover align-middle mb-0">

              <thead className="table-light">
                <tr>
                  <th>Candidato</th>
                  <th>Cargo</th>
                  <th>Familia</th>
                  <th>Fecha</th>
                  <th>Responsable</th>
                  <th>Estado</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                {solicitudesFiltradas.map(
                  solicitud => (
                    <tr
                      key={
                        solicitud.id
                      }
                    >

                      <td>
                        <strong>
                          {
                            solicitud
                              .candidatoNombre
                          }
                        </strong>
                      </td>

                      <td>
                        {
                          solicitud.cargo
                        }
                      </td>

                      <td>
                        {
                          solicitud
                            .familiaCargo
                        }
                      </td>

                      <td>
                        {
                          solicitud
                            .fechaSolicitud
                        }
                      </td>

                      <td>
                        {
                          solicitud
                            .responsable
                        }
                      </td>

                      <td>
                        <EstadoBadge
                          estado={
                            solicitud
                              .estado
                          }
                        />
                      </td>

                      <td className="text-end">

                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                          onClick={() =>
                            abrirGestion(
                              solicitud
                            )
                          }
                        >
                          {esEvaluador
                            ? "Gestionar"
                            : "Ver detalle"}
                        </button>

                      </td>

                    </tr>
                  )
                )}

              </tbody>
            </table>

            {solicitudesFiltradas
              .length === 0 && (
              <div className="text-center text-secondary py-5">
                No se encontraron
                solicitudes.
              </div>
            )}

          </div>
        </div>

        {solicitudSeleccionada && (
          <div
            id="gestion-evaluacion"
            className="card border-0 shadow-sm"
          >

            <div className="card-header bg-dark text-white">

              <strong>
                {esEvaluador
                  ? "Gestión de evaluación"
                  : "Detalle de solicitud"}
              </strong>

            </div>

            <div className="card-body p-4">

              <div className="mb-4">

                <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-3">

                  <div>
                    <h3 className="h5 mb-1">
                      {
                        solicitudSeleccionada
                          .candidatoNombre
                      }
                    </h3>

                    <p className="text-secondary mb-0">
                      {
                        solicitudSeleccionada
                          .cargo
                      }
                      {" · "}
                      {
                        solicitudSeleccionada
                          .familiaCargo
                      }
                    </p>
                  </div>

                  <EstadoBadge
                    estado={
                      solicitudSeleccionada
                        .estado
                    }
                  />

                </div>

                <div className="row g-3">

                  <div className="col-md-6">
                    <p className="small mb-0">
                      <strong>
                        Responsable:
                      </strong>{" "}
                      {
                        solicitudSeleccionada
                          .responsable
                      }
                    </p>
                  </div>

                  <div className="col-md-6">
                    <p className="small mb-0">
                      <strong>
                        Fecha de solicitud:
                      </strong>{" "}
                      {
                        solicitudSeleccionada
                          .fechaSolicitud
                      }
                    </p>
                  </div>

                </div>

              </div>

              {!esEvaluador && (
                <div className="alert alert-secondary">
                  Vista de solo lectura.
                  La actualización de la
                  evaluación corresponde al
                  Profesional Evaluador.
                </div>
              )}

              {mensajeEvaluacion && (
                <div className="alert alert-danger">
                  {mensajeEvaluacion}
                </div>
              )}

              <form
                onSubmit={
                  guardarEvaluacion
                }
              >

                <div className="row g-3">

                  <div className="col-md-4">
                    <label className="form-label">
                      Estado
                    </label>

                    <select
                      name="estado"
                      className="form-select"
                      value={
                        solicitudSeleccionada
                          .estado
                      }
                      disabled={
                        !esEvaluador
                      }
                      onChange={
                        cambiarGestion
                      }
                    >
                      <option value="Pendiente">
                        Pendiente
                      </option>

                      <option value="En proceso">
                        En proceso
                      </option>

                      <option value="Finalizada">
                        Finalizada
                      </option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">
                      Fecha evaluación
                    </label>

                    <input
                      type="date"
                      name="fechaEvaluacion"
                      className="form-control"
                      value={
                        solicitudSeleccionada
                          .fechaEvaluacion ||
                        ""
                      }
                      disabled={
                        !esEvaluador
                      }
                      onChange={
                        cambiarGestion
                      }
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Observaciones o
                      resultado general
                    </label>

                    <textarea
                      name="observaciones"
                      className="form-control"
                      rows="4"
                      value={
                        solicitudSeleccionada
                          .observaciones ||
                        ""
                      }
                      disabled={
                        !esEvaluador
                      }
                      onChange={
                        cambiarGestion
                      }
                      placeholder="Registrar antecedentes generales de la evaluación..."
                    />
                  </div>

                </div>

                <div className="d-flex gap-2 mt-4">

                  {esEvaluador && (
                    <button
                      type="submit"
                      className="btn btn-success"
                    >
                      Guardar evaluación
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setSolicitudSeleccionada(
                        null
                      );

                      setMensajeEvaluacion(
                        ""
                      );
                    }}
                  >
                    {esEvaluador
                      ? "Cancelar"
                      : "Cerrar"}
                  </button>

                </div>

              </form>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default SolicitudesPage;