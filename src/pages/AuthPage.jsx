import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AuthPage() {
  const navigate = useNavigate();

  const [cadastro, setCadastro] = useState({
    nome: '',
    cpf: '',
    tel: '',
    nomeResponsavel: '',
    emailCadastro: '',
    senhaCadastro: ''
  });

  const [login, setLogin] = useState({
    emailLogin: '',
    emailSenha: ''
  });

  const handleCadastrar = () => {
    alert('Cadastro registrado localmente. Agora faça login.');
  };

  const handleEntrar = () => {
    if (!login.emailLogin || !login.emailSenha) {
      alert('Você ainda não tem cadastro. Por favor, cadastre-se primeiro!');
      return;
    }

    if (login.emailLogin === cadastro.emailCadastro && login.emailSenha === cadastro.senhaCadastro) {
      navigate('/estoque');
      return;
    }

    alert('Senha ou Email errado, por favor tente novamente!');
  };

  return (
    <main>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                  <Link className="nav-link" to="/fale-conosco">
                    Fale conosco
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 ">
                  <div className="fundo-branco">
                    <h2>Cadastro</h2>
                    <form>
                      <div className="grupo">
                        <input
                          type="text"
                          required
                          id="nome"
                          placeholder="Nome da ONG/Escola"
                          value={cadastro.nome}
                          onChange={(event) => setCadastro((valorAtual) => ({ ...valorAtual, nome: event.target.value }))}
                        />
                      </div>

                      <div className="grupo">
                        <input
                          type="text"
                          required
                          id="cpf"
                          placeholder="CNPJ ou CPF"
                          value={cadastro.cpf}
                          onChange={(event) => setCadastro((valorAtual) => ({ ...valorAtual, cpf: event.target.value }))}
                        />
                      </div>

                      <div className="grupo">
                        <input
                          type="text"
                          required
                          id="tel"
                          placeholder="Telefone de contato"
                          value={cadastro.tel}
                          onChange={(event) => setCadastro((valorAtual) => ({ ...valorAtual, tel: event.target.value }))}
                        />
                      </div>

                      <div className="grupo">
                        <input
                          type="text"
                          required
                          id="nomeResponsavel"
                          placeholder="Nome do Responsável"
                          value={cadastro.nomeResponsavel}
                          onChange={(event) =>
                            setCadastro((valorAtual) => ({ ...valorAtual, nomeResponsavel: event.target.value }))
                          }
                        />
                      </div>

                      <div className="grupo">
                        <input
                          type="email"
                          required
                          id="emailCadastro"
                          placeholder="E-mail"
                          value={cadastro.emailCadastro}
                          onChange={(event) =>
                            setCadastro((valorAtual) => ({ ...valorAtual, emailCadastro: event.target.value }))
                          }
                        />
                      </div>
                      <div className="grupo">
                        <input
                          type="password"
                          required
                          id="senhaCadastro"
                          placeholder="Senha"
                          value={cadastro.senhaCadastro}
                          onChange={(event) =>
                            setCadastro((valorAtual) => ({ ...valorAtual, senhaCadastro: event.target.value }))
                          }
                        />
                      </div>

                      <div className="botoes">
                        <button type="button" className="cadastrar" onClick={handleCadastrar}>
                          Cadastrar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="fundo-branco2">
                    <h2>Login</h2>
                    <form>
                      <div className="grupo">
                        <input
                          type="email"
                          required
                          id="emailLogin"
                          placeholder="E-mail"
                          value={login.emailLogin}
                          onChange={(event) => setLogin((valorAtual) => ({ ...valorAtual, emailLogin: event.target.value }))}
                        />
                      </div>

                      <div className="grupo">
                        <input
                          type="password"
                          required
                          id="emailSenha"
                          placeholder="Senha"
                          value={login.emailSenha}
                          onChange={(event) => setLogin((valorAtual) => ({ ...valorAtual, emailSenha: event.target.value }))}
                        />
                      </div>
                      <div className="botoes">
                        <button type="button" className="entrar" onClick={handleEntrar}>
                          Entrar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;
