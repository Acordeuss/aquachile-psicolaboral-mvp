
function IndicadorCard({ valor, titulo }) {
  return (
    <div className="col-6 col-lg-3">
      <div className="card h-100 border-0 shadow-sm indicador-card">
        <div className="card-body p-4">
          <h2 className="display-6 fw-bold mb-1">
            {valor}
          </h2>

          <p className="text-secondary mb-0">
            {titulo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndicadorCard;