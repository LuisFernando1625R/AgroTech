import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/gestao-estoque.css";
import { beneficiaries, stockByPoint } from "../data/inventoryData";
import { BrandLogo } from "../components/BrandLogo/BrandLogo";
import NavBarCollapse from "../components/NavBarCollapse/NavBarCollapse";
import NavItem from "../components/NavItem/NavItem";

export default function InventoryPage() {
  const [selectedPoint, setSelectedPoint] = useState("1");

  const currentStock = useMemo(
    () =>
      stockByPoint.find((point) => point.id === selectedPoint) ||
      stockByPoint[0],
    [selectedPoint],
  );

  return (
    <div className="container-app">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
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
              data-bs-target="#homeNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <NavBarCollapse>
              <NavItem link="/"> Home </NavItem>
              <NavItem link="/fale-conosco"> Fale Conosco </NavItem>
            </NavBarCollapse>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <section className="section beneficiaries-section">
          <div className="section-header">
            <div className="section-title">
              <i className="bi bi-box-seam"></i>
              <h2>Controle de Entregas</h2>
            </div>
            <p className="section-description">
              Status de entrega dos beneficiários
            </p>
          </div>

          <div className="cards-grid">
            {beneficiaries.map((beneficiary) => (
              <div className="beneficiary-card" key={beneficiary.id}>
                <div
                  className="card-status-indicator"
                  style={{ backgroundColor: beneficiary.indicator }}
                ></div>
                <div className="card-header">
                  <h3 className="card-name">{beneficiary.name}</h3>
                  <span className="card-registry">{beneficiary.registry}</span>
                </div>
                <div className="card-info">
                  <div className="info-row">
                    <span className="info-label">CPF/RG:</span>
                    <span className="info-value">{beneficiary.document}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Status:</span>
                    <span className={`status-badge ${beneficiary.statusClass}`}>
                      <i className={beneficiary.statusIcon}></i>
                      {beneficiary.statusLabel}
                    </span>
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn-action btn-update" disabled>
                    <i className="bi bi-pencil-square"></i>
                    <span>Atualizar Status</span>
                  </button>
                  <button className="btn-action btn-edit" disabled>
                    <i className="bi bi-pencil"></i>
                    <span>Editar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="section-footer">
            <button className="btn-primary" type="button">
              <i className="bi bi-plus-circle"></i>
              Adicionar Beneficiário
            </button>
          </div>
        </section>

        <section className="section estoque-section">
          <div className="section-header">
            <div className="section-title">
              <i className="bi bi-boxes"></i>
              <h2>Estoque</h2>
            </div>
            <p className="section-description">Estoque dos pontos de coleta</p>
          </div>

          <div className="estoque-container">
            <div className="tabs-header">
              <h3 className="tabs-title">Ponto de Coleta</h3>
              <div className="tabs-buttons">
                {stockByPoint.map((point) => (
                  <button
                    key={point.id}
                    type="button"
                    className="tab-btn"
                    style={
                      selectedPoint === point.id
                        ? {
                            background:
                              "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)",
                            color: "white",
                            borderColor: "transparent",
                          }
                        : undefined
                    }
                    onClick={() => setSelectedPoint(point.id)}
                  >
                    <i className="bi bi-pin-map"></i>
                    <span>{point.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="tabs-content">
              <div className="tab-pane active">
                <div className="items-list">
                  {currentStock.items.map((item) => (
                    <div
                      className="estoque-item"
                      key={`${currentStock.id}-${item.id}`}
                    >
                      <div className="item-info">
                        <h4 className="item-name">{item.name}</h4>
                        <p className="item-quantity">{item.quantity}</p>
                      </div>
                      <div className="item-indicator">
                        <span className="quantity-badge">{item.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section-footer">
            <button className="btn-primary" type="button">
              <i className="bi bi-arrow-repeat"></i>
              Atualizar Estoque
            </button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Resgate Verde. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
