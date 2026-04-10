import { useState, useEffect } from "react";

export default function DeliveryStatusForm({ beneficiary, onUpdate }) {
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [queuePosition, setQueuePosition] = useState("");
  const [errors, setErrors] = useState({});

  
  useEffect(() => {
    if (!beneficiary) return;

    if (beneficiary.statusClass === "status-delivered") {
      setStatus("received");
    } else if (beneficiary.statusClass === "status-queued") {
      setStatus("queue");
    } else {
      setStatus("none");
    }

    if (beneficiary.statusLabel.includes("Recebeu em")) {
      const extractedDate = beneficiary.statusLabel.replace("Recebeu em ", "");
      setDate(extractedDate);
    }

    if (beneficiary.statusLabel.includes("Posição")) {
      const pos = beneficiary.statusLabel.match(/\d+/);
      if (pos) setQueuePosition(pos[0]);
    }
  }, [beneficiary]);

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!status) {
      newErrors.status = "Selecione um status";
    }

    if (status === "received" && !date) {
      newErrors.date = "A data é obrigatória";
    }

    if (status === "queue" && !queuePosition) {
      newErrors.queue = "Informe a posição na fila";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    let statusData;

    if (status === "received") {
      statusData = {
        statusLabel: `Recebeu em ${date}`,
        statusClass: "status-delivered",
        statusIcon: "bi bi-check-circle",
        indicator: "#10b981",
      };
    }

    if (status === "queue") {
      statusData = {
        statusLabel: `Fila - Posição #${queuePosition}`,
        statusClass: "status-queued",
        statusIcon: "bi bi-clock",
        indicator: "#f59e0b",
      };
    }

    if (status === "none") {
      statusData = {
        statusLabel: "Nenhuma entrega",
        statusClass: "status-pending",
        statusIcon: "bi bi-exclamation-circle",
        indicator: "#CCCCCC",
      };
    }

    onUpdate(statusData);
  }

  return (
    <div className="delivery-status-card border p-4 rounded-3">
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
        <fieldset className="d-flex flex-column gap-3">
          <legend className="fw-bold">
            Status de Entrega - {beneficiary?.name}
          </legend>

          <label className="form-label">Situação da Entrega:</label>

          <select
            className={`form-select form-control ${errors.status ? "is-invalid" : ""}`}
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setDate("");
              setQueuePosition("");
              setErrors({});
            }}
          >
            <option value="">Selecione uma opção...</option>
            <option value="received">Concluída</option>
            <option value="queue">Aguardando</option>
            <option value="none">Sem Registros</option>
          </select>

          {errors.status && (
            <small className="text-danger">{errors.status}</small>
          )}

          {status === "received" && (
            <div className="delivery-fields">
              <label className="form-label">Data do Recebimento:</label>

              <input
                type="date"
                className={`form-control ${errors.date ? "is-invalid" : ""}`}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setErrors((prev) => ({ ...prev, date: null }));
                }}
              />

              {errors.date && (
                <small className="text-danger">{errors.date}</small>
              )}

              <small className="text-muted">
                Registre o dia da entrega
              </small>
            </div>
          )}

          {status === "queue" && (
            <div className="delivery-fields">
              <label className="form-label">Posição na fila:</label>

              <input
                type="number"
                className={`form-control ${errors.queue ? "is-invalid" : ""}`}
                min="1"
                value={queuePosition}
                onChange={(e) => {
                  setQueuePosition(e.target.value);
                  setErrors((prev) => ({ ...prev, queue: null }));
                }}
              />

              {errors.queue && (
                <small className="text-danger">{errors.queue}</small>
              )}

              <small className="text-muted">
                Informe a posição atual do beneficiário
              </small>
            </div>
          )}
        </fieldset>

        <button className="form-btn w-100" type="submit">
          Confirmar
        </button>
      </form>
    </div>
  );
}
