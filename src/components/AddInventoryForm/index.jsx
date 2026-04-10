import { useState } from "react";

export default function AddInventoryForm({ onAdd }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Nome do item é obrigatório";
    }

    if (!quantity) {
      newErrors.quantity = "Quantidade é obrigatória";
    } else if (Number(quantity) <= 0) {
      newErrors.quantity = "Quantidade deve ser maior que zero";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
    };

    onAdd?.(newItem);

    // limpar formulário
    setName("");
    setQuantity("");
    setErrors({});
  }

  return (
    <div className="add-inventory-card">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-3 m-4 p-3 border rounded"
      >
        <fieldset className="d-flex flex-column gap-3">
          <legend className="fw-bold mb-0">
            Adicionar Item ao estoque - Ponto de Coleta
          </legend>

          <div>
            <label className="form-label">Nome do Item</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: null }));
              }}
              placeholder="Ex: Arroz, Feijão, Óleo..."
            />

            {errors.name && (
              <small className="text-danger">{errors.name}</small>
            )}
          </div>

          <div>
            <label className="form-label">Quantidade</label>
            <input
              type="number"
              className={`form-control ${errors.quantity ? "is-invalid" : ""}`}
              value={quantity}
              min="0"
              onChange={(e) => {
                setQuantity(e.target.value);
                setErrors((prev) => ({ ...prev, quantity: null }));
              }}
              placeholder="Digite a quantidade (ex: 10)"
            />

            {/* descrição OU erro */}
            {errors.quantity ? (
              <small className="text-danger">{errors.quantity}</small>
            ) : (
              <small className="text-muted">
                Insira apenas o valor numérico disponível.
              </small>
            )}
          </div>
        </fieldset>

        <button className="btn btn-primary w-100" type="submit">
          Confirmar Cadastro de Item
        </button>
      </form>
    </div>
  );
}
