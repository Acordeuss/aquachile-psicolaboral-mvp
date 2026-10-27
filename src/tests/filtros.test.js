import { describe, expect, it } from "vitest";
import { filtrarSolicitudes } from "../utils/filtros";

const solicitudes = [
  {
    id: 1,
    candidatoNombre: "Ana Torres",
    cargo: "Analista",
    familiaCargo: "Profesional",
    responsable: "Evaluador 1",
    estado: "Pendiente",
    fechaSolicitud: "2026-10-01"
  },
  {
    id: 2,
    candidatoNombre: "Diego Soto",
    cargo: "Supervisor",
    familiaCargo: "Supervisión",
    responsable: "Evaluador 2",
    estado: "Finalizada",
    fechaSolicitud: "2026-10-02"
  }
];

describe("filtrarSolicitudes", () => {
  it("filtra por estado", () => {
    const resultado =
      filtrarSolicitudes(
        solicitudes,
        "",
        "Pendiente",
        ""
      );

    expect(resultado).toHaveLength(1);
    expect(resultado[0].estado).toBe("Pendiente");
  });

  it("busca por nombre de candidato", () => {
    const resultado =
      filtrarSolicitudes(
        solicitudes,
        "Ana",
        "",
        ""
      );

    expect(resultado).toHaveLength(1);
    expect(resultado[0].candidatoNombre)
      .toBe("Ana Torres");
  });

  it("filtra por fecha", () => {
    const resultado =
      filtrarSolicitudes(
        solicitudes,
        "",
        "",
        "2026-10-02"
      );

    expect(resultado).toHaveLength(1);
    expect(resultado[0].id).toBe(2);
  });
});
