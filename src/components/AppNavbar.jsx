function AppNavbar({
  rol,
  setRol
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">

      <div className="container">

        <a
          className="navbar-brand fw-bold"
          href="#inicio"
        >
          AquaChile · Psicolaboral
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir navegación"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="menuPrincipal"
        >

          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <a
              className="nav-link"
              href="#inicio"
            >
              Inicio
            </a>

            <a
              className="nav-link"
              href="#candidatos"
            >
              Candidatos
            </a>

            <a
              className="nav-link"
              href="#solicitudes"
            >
              Solicitudes
            </a>

            <select
              className="form-select form-select-sm ms-lg-3 mt-2 mt-lg-0"
              style={{
                width: "220px"
              }}
              value={rol}
              onChange={evento =>
                setRol(
                  evento.target.value
                )
              }
            >
              <option value="Analista de Reclutamiento">
                Analista de Reclutamiento
              </option>

              <option value="Profesional Evaluador">
                Profesional Evaluador
              </option>
            </select>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default AppNavbar;