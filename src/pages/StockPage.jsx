import { Link } from 'react-router-dom';
import { listarEntregasRegistradas } from '../utils/registroEntrega';

function StockPage() {
  const entregas = listarEntregasRegistradas();

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src="/img/logo-resgate-verde-sem-Texto-removebg.png"
                alt="Logo da plataforma Resgate Verde"
                width="50"
                height="50"
              />
              Resgate Verde
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/registro-entrega">
                    Registro de Entregas
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/fale-conosco">
                    Fale conosco
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container-fluid py-4 col-md-10">
        <h3>Gestão de Solicitações</h3>
        <p>
          Aqui você pode visualizar e editar todas as solicitações, assim como visualizar informações claras de
          quantidades disponíveis em todos os Pontos de Coleta cadastrados.
        </p>

        <div className="row g-4">
          <div className="col-sm-8">
            <div className="card shadow-sm">
              <div className="card-header">
                <h5 className="mb-0">Histórico de Solicitações</h5>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Nº Registro</th>
                        <th scope="col">Data da Solicitação</th>
                        <th scope="col">Identificação (CPF/RG/Facial)</th>
                        <th scope="col">CAD Único</th>
                        <th scope="col">Situação da Entrega</th>
                        <th scope="col" className="text-center">
                          Ações
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>REG-00123</td>
                        <td>28/10/2025</td>
                        <td>123.456.789-00</td>
                        <td>1234561</td>
                        <td>
                          <span className="badge bg-success">Entregue</span>
                        </td>
                        <td className="text-center">
                          <Link to="/registro-entrega">
                            <i className="bi bi-pencil-square" />
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <td>REG-00124</td>
                        <td>29/10/2025</td>
                        <td>12.345.672</td>
                        <td>1234561</td>
                        <td>
                          <span className="badge bg-warning text-dark">Pendente</span>
                        </td>
                        <td className="text-center">
                          <Link to="/registro-entrega">
                            <i className="bi bi-pencil-square" />
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <td>REG-00125</td>
                        <td>29/10/2025</td>
                        <td>FACE-ID: A4B8C1</td>
                        <td>1234563</td>
                        <td>
                          <span className="badge bg-danger">Cancelado</span>
                        </td>
                        <td className="text-center">
                          <Link to="/registro-entrega">
                            <i className="bi bi-pencil-square" />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="card shadow-sm mt-4">
              <div className="card-header">
                <h5 className="mb-0">Entregas registradas no app</h5>
              </div>
              <div className="card-body">
                {entregas.length === 0 ? (
                  <p className="m-0">Nenhuma entrega registrada ainda.</p>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-sm table-striped">
                      <thead>
                        <tr>
                          <th>Nº Grupo</th>
                          <th>Responsável</th>
                          <th>Data</th>
                          <th>Cestas</th>
                        </tr>
                      </thead>
                      <tbody>
                        {entregas.slice(0, 5).map((item) => (
                          <tr key={item.id}>
                            <td>{item.numeroGrupo}</td>
                            <td>{item.responsavel}</td>
                            <td>{item.dataEntrega}</td>
                            <td>{item.quantidadeCesta}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card shadow-sm">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="bi bi-box-seam me-2" />Estoque por Ponto de Coleta
                </h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-sm table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Alimento</th>
                        <th scope="col">Qtd.</th>
                        <th scope="col">Validade</th>
                        <th scope="col">Finalidade</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Arroz (5kg)</td>
                        <td>50</td>
                        <td>12/2026</td>
                        <td>
                          <span className="badge bg-info">Consumo</span>
                        </td>
                      </tr>

                      <tr>
                        <td>Feijão (1kg)</td>
                        <td>85</td>
                        <td>10/2026</td>
                        <td>
                          <span className="badge bg-info">Consumo</span>
                        </td>
                      </tr>

                      <tr>
                        <td>Tomate (kg)</td>
                        <td>15</td>
                        <td>30/10/2025</td>
                        <td>
                          <span className="badge bg-secondary">Compostagem</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container py-3 my-3 border-top">
        <p className="text-center text-muted">© 2025 Resgate Verde. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default StockPage;
