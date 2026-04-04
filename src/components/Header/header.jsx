import { Link } from "react-router-dom";
import { BrandLogo } from "../BrandLogo/BrandLogo";

export default function Header() {
  return (
    <>
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

            <div className="collapse navbar-collapse" id="homeNav">
              <ul className="navbar-nav ms-auto text-center gap-3">
                <li className="nav-item my-2">
                  <a
                    className="btn-custom_2 nav-link text-light p-2"
                    href="#pontos-de-coleta"
                  >
                    Pontos de Coleta
                  </a>
                </li>
                <li className="nav-item my-2">
                  <a
                    className="btn-custom_2 nav-link text-light p-2"
                    href="https://youtu.be/51q1i9is1zg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pitch Vídeo
                  </a>
                </li>
                <li className="nav-item my-2">
                  <Link
                    className="btn-custom_2 nav-link text-light p-2"
                    to="/fale-conosco"
                  >
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
