import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/style.css';

const initialRegister = {
  nome: '',
  documento: '',
  telefone: '',
  responsavel: '',
  email: '',
  senha: '',
};

const initialLogin = {
  email: '',
  senha: '',
};

export function AuthPage() {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState(initialRegister);
  const [loginForm, setLoginForm] = useState(initialLogin);

  function handleRegisterChange(event) {
    const { name, value } = event.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleLoginChange(event) {
    const { name, value } = event.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleLogin(event) {
    event.preventDefault();

    if (!loginForm.email || !loginForm.senha) {
      alert('Você ainda não tem cadastro. Por favor, cadastre-se primeiro!');
      return;
    }

    if (loginForm.email === registerForm.email && loginForm.senha === registerForm.senha) {
      navigate('/gestao-estoque');
      return;
    }

    alert('Senha ou Email errado, por favor tente novamente!');
  }

  function handleRegisterSubmit(event) {
    event.preventDefault();
    alert('Cadastro preenchido com sucesso. Agora faça o login.');
  }

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
              data-bs-target="#authNavbar"
              aria-controls="authNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="authNavbar">
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
                <div className="col-lg-6">
                  <div className="fundo-branco">
                    <h2>Cadastro</h2>
                    <form onSubmit={handleRegisterSubmit}>
                      <div className="grupo">
                        <input
                          type="text"
                          required
                          name="nome"
                          placeholder="Nome da ONG/Escola"
                          value={registerForm.nome}
                          onChange={handleRegisterChange}
                        />
                      </div>

                      <div className="grupo">
                        <input
                          type="text"
                          required
                          name="documento"
                          placeholder="CNPJ ou CPF"
                          value={registerForm.documento}
                          onChange={handleRegisterChange}
                        />
                      </div>

                      <div className="grupo">
                        <input
                          type="text"
                          required
                          name="telefone"
                          placeholder="Telefone de contato"
                          value={registerForm.telefone}
                          onChange={handleRegisterChange}
                        />
                      </div>

                      <div className="grupo">
                        <input
                          type="text"
                          required
                          name="responsavel"
                          placeholder="Nome do Responsável"
                          value={registerForm.responsavel}
                          onChange={handleRegisterChange}
                        />
                      </div>

                      <div className="grupo">
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="E-mail"
                          value={registerForm.email}
                          onChange={handleRegisterChange}
                        />
                      </div>

                      <div className="grupo">
                        <input
                          type="password"
                          required
                          name="senha"
                          placeholder="Senha"
                          value={registerForm.senha}
                          onChange={handleRegisterChange}
                        />
                      </div>

                      <div className="botoes">
                        <button type="submit" className="cadastrar">
                          Cadastrar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="fundo-branco2">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                      <div className="grupo">
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="E-mail"
                          value={loginForm.email}
                          onChange={handleLoginChange}
                        />
                      </div>

                      <div className="grupo">
                        <input
                          type="password"
                          required
                          name="senha"
                          placeholder="Senha"
                          value={loginForm.senha}
                          onChange={handleLoginChange}
                        />
                      </div>

                      <div className="botoes">
                        <button type="submit" className="entrar">
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
