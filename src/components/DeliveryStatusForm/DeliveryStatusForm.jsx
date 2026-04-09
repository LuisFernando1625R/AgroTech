export default function DeliveryStatusForm() {
  return (
    <div className="delivery-status-card border p-4 rounded-3">
      <form action="#" className="d-flex flex-column gap-4">
        <fieldset className="d-flex flex-column gap-3" name="delivery-info">
          <legend className="fw-bold">Status de Entrega</legend>

          <label htmlFor="delivery-status" className="form-label">
            Situação da Entrega:
          </label>
          <select id="delivery-status" className="form-select form-control">
            <option value="">Selecione uma opção...</option>
            <option value="received">Concluída</option>
            <option value="queue">Aguardando</option>
            <option value="none">Sem Registros</option>
          </select>

          <div className="delivery-fields">
            <label htmlFor="delivery-date" className="form-label">
              Data do Recebimento:
            </label>
            <input type="date" id="delivery-date" className="form-control" />
            <small className="text-muted">
              Registre o dia em que o item foi entregue.
            </small>
          </div>
        </fieldset>

        <button className="form-btn w-100" type="submit">
          Confirmar
        </button>
      </form>
    </div>
  );
}
