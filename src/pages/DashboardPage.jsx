
import IndicadorCard from "../components/IndicadorCard";
import CandidatoCard from "../components/CandidatoCard";
import SolicitudCard from "../components/SolicitudCard";
import { Link } from "react-router-dom";
import { obtenerIndicadores } from "../utils/indicadores";

function DashboardPage({ candidatos, solicitudes }) {
  const resumen =
    obtenerIndicadores(
      candidatos,
      solicitudes
    );

  const indicadores = [
    {
      id: 1,
      valor: resumen.candidatos,
      titulo: "Candidatos"
    },
    {
      id: 2,
      valor: resumen.pendientes,
      titulo: "Pendientes"
    },
    {
      id: 3,
      valor: resumen.enProceso,
      titulo: "En proceso"
    },
    {
      id: 4,
      valor: resumen.finalizadas,
      titulo: "Finalizadas"
    }
  ];

  return (
    <main id="inicio" className="container py-5">
      <section className="mb-4">
        <p className="text-primary fw-semibold mb-1">
          Proyecto VcM · Full Stack II
        </p>

        <h1 className="display-6 fw-bold mb-2">
          Gestión de Evaluaciones Psicolaborales
        </h1>

        <p className="text-secondary">
          MVP académico para centralizar candidatos,
          solicitudes y evaluaciones psicolaborales.
        </p>
      </section>

      <section className="row g-3 mb-5">
        {indicadores.map(indicador => (
          <IndicadorCard
            key={indicador.id}
            valor={indicador.valor}
            titulo={indicador.titulo}
          />
        ))}
      </section>

      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 mb-0">
            Candidatos recientes
          </h2>

          <Link
            to="/candidatos"
            className="btn btn-sm btn-outline-primary"
          >
            Ver candidatos
          </Link>
        </div>

        <div className="row g-3">
          {candidatos.slice(-3).reverse().map(candidato => (
            <CandidatoCard
              key={candidato.id}
              nombre={candidato.nombre}
              correo={candidato.correo}
              telefono={candidato.telefono}
              cargo={candidato.cargo}
              familiaCargo={candidato.familiaCargo}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 mb-0">
            Solicitudes recientes
          </h2>

          <Link
            to="/solicitudes"
            className="btn btn-sm btn-outline-primary"
          >
            Ver solicitudes
          </Link>
        </div>

        <div className="row g-3">
          {solicitudes.slice(-3).reverse().map(solicitud => (
            <SolicitudCard
              key={solicitud.id}
              candidato={solicitud.candidatoNombre}
              cargo={solicitud.cargo}
              responsable={solicitud.responsable}
              estado={solicitud.estado}
              fecha={solicitud.fechaSolicitud}
            />
          ))}
        </div>
        <div className="alert alert-light border mt-3 mb-0">
  <strong>Modo demostración:</strong>{" "}
  utiliza el selector superior para cambiar entre
  Analista de Reclutamiento y Profesional Evaluador.
</div>
      </section>
    </main>
  );
}

export default DashboardPage;
