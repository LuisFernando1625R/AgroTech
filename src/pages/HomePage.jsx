import { Link } from 'react-router-dom';
import '../../css/style.css';
import { BrandLogo } from '../components/BrandLogo';
import { collectionPoints } from '../data/collectionPoints';

export function HomePage() {
  return (
    <main>
      <section className="section_1 d-block">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <BrandLogo titleClassName="titulo-subtitulo" subtitleClassName="titulo-subtitulo" />
              </Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#homeNav">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="homeNav">
                <ul className="navbar-nav ms-auto text-center">
                  <li className="nav-item my-2">
                    <a className="btn-custom_2 nav-link text-light p-2" href="#pontos-de-coleta">
                      Pontos de Coleta
                    </a>
                  </li>
                  <li className="nav-item my-2">
                    <a
                      className="btn-custom_2 nav-link text-light p-2"
                      href="https://youtu.be/IJqhsQJ3vQU"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pitch Vídeo
                    </a>
                  </li>
                  <li className="nav-item my-2">
                    <Link className="btn-custom_2 nav-link text-light p-2" to="/fale-conosco">
                      Fale Conosco
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <div className="d-flex flex-column justify-content-center align-items-center text-center section_1_titulo">
          <h1 className="display-4">𝑺𝒖𝒔𝒕𝒆𝒏𝒕𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆</h1>
          <h1 className="display-4">𝒆 𝑺𝒐𝒍𝒊𝒅𝒂𝒓𝒊𝒆𝒅𝒂𝒅𝒆 𝒆𝒎 𝑨𝒄̧𝒂̃𝒐</h1>
          <h6>Transformando alimentos e vidas</h6>
          <Link className="btn btn-custom animate__animated animate__pulse animate__infinite text-white text-decoration-none" to="/cadastro-login">
            Participe
          </Link>
        </div>
      </section>

      <section className="section-2" id="pontos-de-coleta">
        <div className="container">
          <h1 className="text-center">𝑃𝑜𝑛𝑡𝑜𝑠 𝐷𝑒 𝐶𝑜𝑙𝑒𝑡𝑎</h1>

          <div className="card-group pontos">
            {collectionPoints.map((point) => (
              <div className="card" key={point.id}>
                <iframe src={point.map} width="100%" height="350" loading="lazy" title={point.title}></iframe>

                <div className="card-body">
                  <h5 className="card-titulo">{point.title}</h5>
                  <p className="card-text">{point.address}</p>
                </div>

                <div className="card-footer">
                  <span className={`badge ${point.isOpen ? 'bg-success' : 'bg-danger'}`}>{point.isOpen ? 'Aberto' : 'Fechado'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
