import { useState } from "react";

export default function AddBeneficiaryForm({ onAdd }) {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    const cleanDoc = document.replace(/\D/g, "");

    if (!name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!cleanDoc) {
      newErrors.document = "Documento é obrigatório";
    } else if (
      !(
        cleanDoc.length === 11 ||
        (cleanDoc.length >= 7 && cleanDoc.length <= 9)
      )
    ) {
      newErrors.document = "CPF deve ter 11 dígitos ou RG entre 7 e 9";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    const newBeneficiary = {
      id: Date.now(),
      name,
      document,
      registry: `REG-${Date.now().toString().slice(-5)}`, //mock de numero de registro -> usa um ts de agora como identificador
      statusLabel: "Nenhuma entrega",
      statusClass: "status-pending",
      statusIcon: "bi bi-exclamation-circle",
      indicator: "#CCCCCC",
    };

    onAdd?.(newBeneficiary);

    // limpar form
    setName("");
    setDocument("");
    setErrors({});
  }

  return (
    <div className="add form-card">
      <form
        onSubmit={handleSubmit}
        className="form-add-beneficiary d-flex flex-column gap-4"
      >
        <fieldset className="d-flex flex-column gap-3">
          <legend className="fw-bold">
            Dados pessoais
          </legend>

          <label className="form-label">Nome:</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({ ...prev, name: null }));
            }}
            placeholder="Digite seu nome completo"
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

          {/* deixei comentado por ser um campo cujo valor estamos gerando automaticamente, entao para o usuario nao faz muita diferenca */}
          {/* <input
            type="text"
            value="Será gerado automaticamente"
            readOnly
            className="form-control"
          /> */}
        </fieldset>

        <button className="form-btn" type="submit">
          Confirmar Cadastro
        </button>
      </form>
    </div>
  );
}
