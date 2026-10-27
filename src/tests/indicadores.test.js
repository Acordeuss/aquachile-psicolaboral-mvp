import { describe, expect, it } from "vitest";
import { obtenerIndicadores } from "../utils/indicadores";

describe("obtenerIndicadores", () => {
  it("calcula correctamente el resumen del dashboard", () => {
    const candidatos = [
      { id: 1 },
      { id: 2 }
    ];

    const solicitudes = [
      { estado: "Pendiente" },
      { estado: "Pendiente" },
      { estado: "En proceso" },
      { estado: "Finalizada" }
    ];

    expect(
      obtenerIndicadores(
        candidatos,
        solicitudes
      )
    ).toEqual({
      candidatos: 2,
      pendientes: 2,
      enProceso: 1,
      finalizadas: 1
    });
  });
});
