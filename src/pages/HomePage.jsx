import { Link } from "react-router-dom";
import "../../css/style.css";
import { BrandLogo } from "../components/BrandLogo/BrandLogo";
import NavItem from "../components/NavItem/NavItem";
import NavBarCollapse from "../components/NavBarCollapse/NavBarCollapse";
import { collectionPoints } from "../data/collectionPoints";
import Hero from "../components/Hero/Hero";

export function HomePage() {
  return (
    <main>
      <section className="section_1 d-block">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <BrandLogo
                  titleClassName="titulo-subtitulo"
                  subtitleClassName="titulo-subtitulo"
                />
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
                <NavItem link="#pontos-de-coleta">Pontos de Coleta</NavItem>
                <NavItem link="https://youtu.be/51q1i9is1zg" target="_blank">
                  Pitch Vídeo
                </NavItem>
                <NavItem link="/fale-conosco">Fale Conosco</NavItem>
              </NavBarCollapse>
            </div>
          </nav>
        </header>

        <Hero />
      </section>

      <section className="section-2" id="pontos-de-coleta">
        <div className="container">
          <h1 className="text-center">𝑃𝑜𝑛𝑡𝑜𝑠 𝐷𝑒 𝐶𝑜𝑙𝑒𝑡𝑎</h1>

          <div className="card-group pontos">
            {collectionPoints.map((point) => (
              <div className="card" key={point.id}>
                <iframe
                  src={point.map}
                  width="100%"
                  height="350"
                  loading="lazy"
                  title={point.title}
                ></iframe>

                <div className="card-body">
                  <h5 className="card-titulo">{point.title}</h5>
                  <p className="card-text">{point.address}</p>
                </div>

                <div className="card-footer">
                  <span
                    className={`badge ${point.isOpen ? "bg-success" : "bg-danger"}`}
                  >
                    {point.isOpen ? "Aberto" : "Fechado"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
