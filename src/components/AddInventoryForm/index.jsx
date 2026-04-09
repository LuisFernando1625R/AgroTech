export default function AddInventoryForm() {
  return (
    <div className="add-inventory-card">
      <form
        action="#"
        className="d-flex flex-column gap-3 m-4 p-3 border rounded"
      >
        <fieldset className="d-flex flex-column gap-3" name="inventory-info">
          <legend className="fw-bold mb-0">
            Adicionar Item ao estoque - Ponto de Coleta
          </legend>

          {/* Campo para o Nome do Item */}
          <div>
            <label htmlFor="item-name" className="form-label">
              Nome do Item
            </label>
            <input
              type="text"
              id="item-name"
              className="form-control"
              placeholder="Ex: Arroz, Feijão, Óleo..."
              required
            />
          </div>

          <div>
            <label htmlFor="item-quantity" className="form-label">
              Quantidade
            </label>
            <input
              type="number"
              id="item-quantity"
              className="form-control"
              placeholder="Digite a quantidade (ex: 10)"
              min="0"
              required
            />
            <small className="text-muted">
              Insira apenas o valor numérico disponível.
            </small>
          </div>
        </fieldset>

        <button className="btn btn-primary w-100" type="submit">
          Confirmar Cadastro de Item
        </button>
      </form>
    </div>
  );
}
