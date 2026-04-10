import { useState, useEffect } from "react";

export default function UpdateBeneficiaryInfo({ beneficiary, onSave }) {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!beneficiary) return;

    setName(beneficiary.name || "");
    setDocument(beneficiary.document || "");
  }, [beneficiary]);

  function validate() {
    const newErrors = {};
    const cleanDoc = document.replace(/\D/g, "");

    if (!name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!document.trim()) {
      newErrors.document = "Documento é obrigatório";
    } if (!cleanDoc) {
      newErrors.document = "Documento é obrigatório";
    } else if (!(cleanDoc.length === 11 || (cleanDoc.length >= 7 && cleanDoc.length <= 9))) {
      newErrors.document = "CPF deve ter 11 dígitos ou RG entre 7 e 9";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    onSave({
      name,
      document,
    });
  }

  return (
    <div className="update-info form-card">
      <form
        onSubmit={handleSubmit}
        className="update-beneficiary-info d-flex flex-column gap-4"
      >
        <fieldset className="d-flex flex-column gap-2">
          <legend className="fw-bold">Alterar Dados Cadastrais</legend>

          <label className="form-label">Nome:</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({ ...prev, name: null }));
            }}
            placeholder="Nome completo"
          />

          {errors.name && (
            <small className="text-danger">{errors.name}</small>
          )}

          <label className="form-label">RG ou CPF:</label>
          <input
            type="text"
            className={`form-control ${errors.document ? "is-invalid" : ""}`}
            value={document}
            onChange={(e) => {
              setDocument(e.target.value);
              setErrors((prev) => ({ ...prev, document: null }));
            }}
            placeholder="Digite apenas números"
          />

          {errors.document && (
            <small className="text-danger">{errors.document}</small>
          )}

          <input
            type="text"
            value={beneficiary?.registry || ""}
            readOnly
            className="form-control"
          />
        </fieldset>

        <button className="form-btn" type="submit">
          Confirmar Alterações
        </button>
      </form>
    </div>
  );
}
