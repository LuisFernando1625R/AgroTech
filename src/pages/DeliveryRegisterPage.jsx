import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrarEntrega } from '../utils/registroEntrega';

function DeliveryRegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    numeroGrupo: '',
    responsavel: '',
    dataEntrega: '',
    quantidadeCesta: '',
    numeroEntrega: '',
    comentarios: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    registrarEntrega(formData);
    alert('Registro de entrega realizado com sucesso!!!');
    navigate('/estoque');
  };

  return (
    <div className="container-fluid p-0">
      <header className="header-registro d-flex align-items-center">
        <img
          src="/img/logo-resgate-verde-sem-Texto-removebg.png"
          alt="Logo da plataforma Resgate Verde"
          width="50"
          height="50"
        />
        <h1 className="h3 m-0 ms-2">Registro de Entrega - Cesta Familiar</h1>
      </header>
      <main className="m-4">
        <form id="form-entrega" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Número de registro do grupo</label>
            <input
              type="text"
              id="numero-grupo"
              className="form-control"
              placeholder="Ex: FAM-1234"
              required
              value={formData.numeroGrupo}
              onChange={(event) => setFormData((atual) => ({ ...atual, numeroGrupo: event.target.value }))}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Responsável pela entrega</label>
            <input
              type="text"
              id="responsavel"
              className="form-control"
              placeholder="Nome do responsável"
              required
              value={formData.responsavel}
              onChange={(event) => setFormData((atual) => ({ ...atual, responsavel: event.target.value }))}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Data de entrega</label>
            <input
              type="date"
              id="data-entrega"
              className="form-control"
              required
              value={formData.dataEntrega}
              onChange={(event) => setFormData((atual) => ({ ...atual, dataEntrega: event.target.value }))}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Quantidade de cestas</label>
            <input
              type="number"
              id="qntde-cesta"
              className="form-control"
              placeholder="Ex.: 4 pessoas = 1 cesta"
              required
              value={formData.quantidadeCesta}
              onChange={(event) => setFormData((atual) => ({ ...atual, quantidadeCesta: event.target.value }))}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Número de registro de entrega</label>
            <input
              type="number"
              id="numero-entrega"
              className="form-control"
              required
              value={formData.numeroEntrega}
              onChange={(event) => setFormData((atual) => ({ ...atual, numeroEntrega: event.target.value }))}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Comentários</label>
            <textarea
              id="comentarios"
              className="form-control"
              rows="3"
              value={formData.comentarios}
              onChange={(event) => setFormData((atual) => ({ ...atual, comentarios: event.target.value }))}
            />
          </div>

          <div className="container row botoes_form">
            <button type="button" className="btn btn-outline-secondary col-sm-6" onClick={() => navigate('/estoque')}>
              Voltar
            </button>
            <button type="submit" className="btn btn-success col-sm-6">
              Confirmar registro de entrega
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default DeliveryRegisterPage;
