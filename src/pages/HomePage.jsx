import { Link } from "react-router-dom";
import "../../css/style.css";
import { BrandLogo } from "../components/BrandLogo";
import NavItem from "../components/NavItem";
import NavBarCollapse from "../components/NavBarCollapse";
import { collectionPoints } from "../data/collectionPoints";
import Hero from "../components/Hero";

export function HomePage() {
  return (
    <main>
      {/* ===================== HERO ===================== */}
      <section className="section_1 d-flex flex-column">
        <div className="rv-hero-orbits"></div>

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
                <NavItem link="#pontos-de-coleta"> Pontos de Coleta </NavItem>
                <NavItem link="https://youtu.be/51q1i9is1zg" target="_blank"> Pitch Vídeo </NavItem>
                <NavItem link="/fale-conosco"> Fale Conosco </NavItem>
              </NavBarCollapse>
            </div>
          </nav>
        </header>

        <Hero />
      </section>

      {/* ===================== PILARES (slogan: Resgate, Reparta, Renove) ===================== */}
      <section className="rv-pillars">
        <div className="rv-pillars__head">
          <span className="rv-eyebrow rv-eyebrow--solid">
            <i className="bi bi-stars"></i>
            Nossa Essência
          </span>
          <h2 className="rv-section-title mt-3">Resgate, Reparta, Renove</h2>
          <p className="rv-section-lead">
            Três passos simples que movem nossa missão e transformam alimentos
            que seriam descartados em refeições para quem mais precisa.
          </p>
        </div>

        <div className="rv-pillars__grid">
          <article className="rv-pillar-card">
            <div className="rv-pillar-card__icon">
              <i className="bi bi-basket3-fill"></i>
            </div>
            <h3>Resgate</h3>
            <p>
              Coletamos alimentos saudáveis em supermercados, feiras e
              restaurantes que ainda têm muito valor para oferecer e seriam
              desperdiçados.
            </p>
          </article>

          <article className="rv-pillar-card">
            <div className="rv-pillar-card__icon">
              <i className="bi bi-people-fill"></i>
            </div>
            <h3>Reparta</h3>
            <p>
              Distribuímos a doação para ONGs, escolas e famílias por meio dos
              nossos pontos de coleta espalhados por toda a cidade.
            </p>
          </article>

          <article className="rv-pillar-card">
            <div className="rv-pillar-card__icon">
              <i className="bi bi-arrow-repeat"></i>
            </div>
            <h3>Renove</h3>
            <p>
              Reduzimos o desperdício, fortalecemos comunidades e renovamos a
              relação das pessoas com o alimento — um ciclo verde de impacto
              real.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== PONTOS DE COLETA ===================== */}
      <section className="section-2" id="pontos-de-coleta">
        <div className="container">
          <div className="text-center">
            <span className="rv-eyebrow rv-eyebrow--solid">
              <i className="bi bi-geo-alt-fill"></i>
              Onde estamos
            </span>
            <h1 className="mt-3">𝑃𝑜𝑛𝑡𝑜𝑠 𝐷𝑒 𝐶𝑜𝑙𝑒𝑡𝑎</h1>
            <p className="section-2__subtitle">
              Encontre o ponto mais próximo de você e participe da rede do
              Resgate Verde.
            </p>
          </div>

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

      {/* ===================== FOOTER ===================== */}
      <footer className="rv-footer">
        <div className="rv-footer__inner">
          <div className="rv-footer__top">
            <div className="rv-footer__brand">
              <img
                src="/img/logo-resgate-verde-sem-Texto-removebg.png"
                alt="Logo Resgate Verde"
              />
              <div className="rv-footer__brand-text">
                <h4>𝑅𝑒𝑠𝑔𝑎𝑡𝑒 𝑉𝑒𝑟𝑑𝑒</h4>
                <span>Resgate, Reparta, Renove</span>
              </div>
            </div>

            <nav className="rv-footer__links" aria-label="Navegação do rodapé">
              <a href="#pontos-de-coleta">Pontos de Coleta</a>
              <Link to="/fale-conosco">Fale Conosco</Link>
              <Link to="/cadastro-login">Participe</Link>
              <a
                href="https://youtu.be/51q1i9is1zg"
                target="_blank"
                rel="noreferrer"
              >
                Pitch Vídeo
              </a>
            </nav>
          </div>

          <div className="rv-footer__bottom">
            <p>© 2026 Resgate Verde — Todos os direitos reservados.</p>
            <div className="rv-footer__socials" aria-label="Redes sociais">
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
