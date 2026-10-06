
function CandidatoCard({
  nombre,
  correo,
  telefono,
  cargo,
  familiaCargo
}) {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h3 className="h5 mb-1">{nombre}</h3>
              <span className="badge text-bg-light border">
                {familiaCargo}
              </span>
            </div>
          </div>

          <p className="mb-2">
            <strong>Cargo:</strong><br />
            <span className="text-secondary">{cargo}</span>
          </p>

          <p className="mb-2 small">
            <strong>Correo:</strong><br />
            {correo}
          </p>

          <p className="mb-0 small">
            <strong>Teléfono:</strong><br />
            {telefono}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CandidatoCard;
