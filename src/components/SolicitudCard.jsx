
import EstadoBadge from "./EstadoBadge";

function SolicitudCard({
  candidato,
  cargo,
  responsable,
  estado,
  fecha
}) {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between gap-2 mb-3">
            <h3 className="h6 mb-0">{candidato}</h3>
            <EstadoBadge estado={estado} />
          </div>

          <p className="small text-secondary mb-2">
            {cargo}
          </p>

          <p className="small mb-1">
            <strong>Responsable:</strong> {responsable}
          </p>

          <p className="small mb-0">
            <strong>Solicitud:</strong> {fecha}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SolicitudCard;