import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main>
      <section className="section_1 d-block">
        <header>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <img
                  src="/img/logo-resgate-verde-sem-Texto-removebg.png"
                  alt="logo da empresa"
                  className="img-fluid"
                  style={{ width: '60px' }}
                />
                <div className="ms-2 ">
                  <h1 className="titulo-subtitulo">𝑅𝑒𝑠𝑔𝑎𝑡𝑒 𝑉𝑒𝑟𝑑𝑒</h1>
                  <h6 className="titulo-subtitulo">Resgate, Reparta, Renove</h6>
                </div>
              </Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto text-center">
                  <li className="nav-item my-2">
                    <a className="btn-custom_2 nav-link text-light p-2" href="#pontos-de-coleta">
                      Pontos de Coleta
                    </a>
                  </li>

                  <li className="nav-item my-2">
                    <a className="btn-custom_2 nav-link text-light p-2" href="https://youtu.be/IJqhsQJ3vQU" target="_blank" rel="noreferrer">
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
          <h1 className="display-4">𝑺𝒖𝒔𝒕𝒆𝒏𝒕𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆 𝒆 </h1>
          <h1 className="display-4">𝑺𝒐𝒍𝒊𝒅𝒂𝒓𝒊𝒆𝒅𝒂𝒅𝒆 𝒆𝒎 𝑨𝒄̧𝒂̃𝒐 </h1>
          <h6>𝖳𝗋𝖺𝗇𝗌𝖿𝗈𝗋𝗆𝖺𝗇𝖽𝗈 𝖺𝗅𝗂𝗆𝖾𝗇𝗍𝗈𝗌 𝖾 𝗍𝗋𝖺𝗇𝖿𝗈𝗋𝗆𝖺𝗇𝖽𝗈 𝗏𝗂𝖽𝖺𝗌</h6>
          <Link className="btn btn-custom animate__animated animate__pulse animate__infinite text-decoration-none text-white" to="/cadastro-login">
            Participe
          </Link>
        </div>
      </section>

      <section className="section-2" id="pontos-de-coleta">
        <div className="container">
          <h1 className="text-center">𝑃𝑜𝑛𝑡𝑜𝑠 𝐷𝑒 𝐶𝑜𝑙𝑒𝑡𝑎</h1>
          <div className="card-group pontos" data-aos="fade-up">
            <div className="card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.715676450626!2d-46.438865!3d-23.582215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6743d9a95fb7%3A0x57b364a7e6c1b9c!2sR.%20Flores%20da%20Primavera%2C%20638%20-%20Conj.%20Promorar%20Rio%20Claro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008395-325!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="350"
                allowFullScreen
                loading="lazy"
                title="Centro Comunitário Primavera"
              />
              <div className="card-body">
                <h5 className="card-titulo">Centro Comunitário Primavera</h5>
                <p className="card-text">
                  R. Flores da Primavera, 638 - Conj. Promorar Rio Claro, São Paulo - SP, 08395-325
                </p>
              </div>
              <div className="card-footer">
                <span className="badge bg-success">Aberto</span>
              </div>
            </div>

            <div className="card">
              <iframe
                src="https://www.google.com/maps?q=Avenida+dos+Metalúrgicos+1262+Cidade+Tiradentes+São+Paulo&output=embed"
                width="100%"
                height="350"
                allowFullScreen
                loading="lazy"
                title="Ginásio Municipal"
              />
              <div className="card-body">
                <h5 className="card-titulo">Ginásio Municipal</h5>
                <p className="card-text">Avenida dos Metalúrgicos, 1262 — Cidade Tiradentes — CEP 08471-000</p>
              </div>
              <div className="card-footer">
                <span className="badge bg-success">Aberto</span>
              </div>
            </div>

            <div className="card">
              <iframe
                src="https://www.google.com/maps?q=R.+Bela+Vista+98+Alto+da+Boa+Vista+São+Paulo&output=embed"
                width="100%"
                height="350"
                allowFullScreen
                loading="lazy"
                title="Boa Vista"
              />
              <div className="card-body">
                <h5 className="card-titulo">Boa Vista</h5>
                <p className="card-text">R. Bela Vista, 98 - Alto da Boa Vista, São Paulo - SP, 04709-001</p>
              </div>
              <div className="card-footer">
                <span className="badge bg-danger">Fechado</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
