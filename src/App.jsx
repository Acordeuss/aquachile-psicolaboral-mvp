import { useEffect, useState } from "react";

import AppNavbar from "./components/AppNavbar";
import DashboardPage from "./pages/DashboardPage";
import CandidatosPage from "./pages/CandidatosPage";
import SolicitudesPage from "./pages/SolicitudesPage";

import {
  candidatosIniciales,
  solicitudesIniciales
} from "./data/mockData";

function obtenerDatosLocales(clave, datosIniciales) {
  try {
    const datosGuardados = localStorage.getItem(clave);

    if (datosGuardados) {
      return JSON.parse(datosGuardados);
    }
  } catch (error) {
    console.error(
      `Error al leer ${clave} desde localStorage:`,
      error
    );
  }

  return datosIniciales;
}

function App() {
  const [rol, setRol] = useState(
    "Analista de Reclutamiento"
  );

  const [candidatos, setCandidatos] = useState(() =>
    obtenerDatosLocales(
      "aquachile_candidatos",
      candidatosIniciales
    )
  );

  const [solicitudes, setSolicitudes] = useState(() =>
    obtenerDatosLocales(
      "aquachile_solicitudes",
      solicitudesIniciales
    )
  );

  useEffect(() => {
    localStorage.setItem(
      "aquachile_candidatos",
      JSON.stringify(candidatos)
    );
  }, [candidatos]);

  useEffect(() => {
    localStorage.setItem(
      "aquachile_solicitudes",
      JSON.stringify(solicitudes)
    );
  }, [solicitudes]);

  function agregarCandidato(datos) {
    const nuevoCandidato = {
      id: Date.now(),
      ...datos
    };

    setCandidatos(actuales => [
      ...actuales,
      nuevoCandidato
    ]);
  }

  function actualizarCandidato(candidatoActualizado) {
    setCandidatos(actuales =>
      actuales.map(candidato =>
        candidato.id === candidatoActualizado.id
          ? candidatoActualizado
          : candidato
      )
    );

    // Mantiene sincronizados los datos del candidato
    // dentro de las solicitudes existentes.
    setSolicitudes(actuales =>
      actuales.map(solicitud =>
        solicitud.candidatoId === candidatoActualizado.id
          ? {
              ...solicitud,
              candidatoNombre: candidatoActualizado.nombre,
              cargo: candidatoActualizado.cargo,
              familiaCargo:
                candidatoActualizado.familiaCargo
            }
          : solicitud
      )
    );
  }

  function agregarSolicitud(datos) {
    const nuevaSolicitud = {
      id: Date.now(),
      ...datos
    };

    setSolicitudes(actuales => [
      ...actuales,
      nuevaSolicitud
    ]);
  }

  function actualizarSolicitud(solicitudActualizada) {
    setSolicitudes(actuales =>
      actuales.map(solicitud =>
        solicitud.id === solicitudActualizada.id
          ? solicitudActualizada
          : solicitud
      )
    );
  }

  return (
    <>
      <AppNavbar
        rol={rol}
        setRol={setRol}
      />

      <DashboardPage
        candidatos={candidatos}
        solicitudes={solicitudes}
      />

      <CandidatosPage
        candidatos={candidatos}
        onAgregar={agregarCandidato}
        onActualizar={actualizarCandidato}
        rol={rol}
      />

      <SolicitudesPage
        candidatos={candidatos}
        solicitudes={solicitudes}
        onAgregar={agregarSolicitud}
        onActualizar={actualizarSolicitud}
        rol={rol}
      />

      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-1 fw-semibold">
            Sistema Web para la Gestión de Evaluaciones
            Psicolaborales
          </p>

          <small className="text-white-50">
            Proyecto VcM · Full Stack II · AquaChile
          </small>
        </div>
      </footer>
    </>
  );
}

export default App;