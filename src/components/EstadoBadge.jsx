
function EstadoBadge({ estado }) {
  const clases = {
    Pendiente: "text-bg-warning",
    "En proceso": "text-bg-info",
    Finalizada: "text-bg-success"
  };

  return (
    <span className={`badge ${clases[estado] || "text-bg-secondary"}`}>
      {estado}
    </span>
  );
}

export default EstadoBadge;