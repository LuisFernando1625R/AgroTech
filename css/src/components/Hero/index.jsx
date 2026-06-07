import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center section_1_titulo">
      <span className="rv-eyebrow rv-hero-eyebrow">
        <i className="bi bi-recycle"></i>
        Sustentabilidade • Solidariedade
      </span>

      <h1 className="display-4">𝑺𝒖𝒔𝒕𝒆𝒏𝒕𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆</h1>
      <h1 className="display-4">𝒆 𝑺𝒐𝒍𝒊𝒅𝒂𝒓𝒊𝒆𝒅𝒂𝒅𝒆 𝒆𝒎 𝑨𝒄̧𝒂̃𝒐</h1>

      <h6>Transformando alimentos e vidas</h6>

      <Link
        className="btn btn-custom animate__animated animate__pulse animate__infinite"
        to="/cadastro-login"
      >
        Participe
      </Link>

      <a href="#pontos-de-coleta" className="rv-hero-scroll" aria-label="Rolar para pontos de coleta">
        Pontos de Coleta
      </a>
    </div>
  );
}
