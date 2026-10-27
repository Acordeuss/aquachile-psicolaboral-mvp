import { describe, expect, it } from "vitest";
import {
  validarCandidato,
  validarEvaluacion
} from "../utils/validaciones";

describe("validarCandidato", () => {
  it("acepta un candidato válido", () => {
    const candidato = {
      nombre: "Ana Torres",
      correo: "ana@ejemplo.cl",
      telefono: "+56912345678",
      cargo: "Analista",
      familiaCargo: "Profesional"
    };

    expect(validarCandidato(candidato)).toBe("");
  });

  it("rechaza un correo inválido", () => {
    const candidato = {
      nombre: "Ana Torres",
      correo: "correo-invalido",
      telefono: "+56912345678",
      cargo: "Analista",
      familiaCargo: "Profesional"
    };

    expect(validarCandidato(candidato))
      .toBe("Ingrese un correo electrónico válido.");
  });

  it("rechaza campos obligatorios vacíos", () => {
    const candidato = {
      nombre: "",
      correo: "",
      telefono: "",
      cargo: "",
      familiaCargo: ""
    };

    expect(validarCandidato(candidato))
      .toBe("Todos los campos son obligatorios.");
  });
});

describe("validarEvaluacion", () => {
  it("exige fecha cuando la solicitud pasa a En proceso", () => {
    const solicitud = {
      estado: "En proceso",
      fechaEvaluacion: "",
      observaciones: ""
    };

    expect(validarEvaluacion(solicitud)).not.toBe("");
  });

  it("exige observaciones para finalizar", () => {
    const solicitud = {
      estado: "Finalizada",
      fechaEvaluacion: "2026-10-20",
      observaciones: ""
    };

    expect(validarEvaluacion(solicitud)).not.toBe("");
  });
});
