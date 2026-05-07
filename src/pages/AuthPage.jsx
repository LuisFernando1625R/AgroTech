import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/style.css";
import NavBarCollapse from "../components/NavBarCollapse";
import NavItem from "../components/NavItem";

const initialRegister = {
  nome: "",
  documento: "",
  telefone: "",
  responsavel: "",
  email: "",
  senha: "",
};

const initialLogin = {
  email: "",
  senha: "",
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
      alert("Você ainda não tem cadastro. Por favor, cadastre-se primeiro!");
      return;
    }

    if (
      loginForm.email === registerForm.email &&
      loginForm.senha === registerForm.senha
    ) {
      navigate("/gestao-estoque");
      return;
    }

    alert("Senha ou Email errado, por favor tente novamente!");
  }

  function handleRegisterSubmit(event) {
    event.preventDefault();
    alert("Cadastro preenchido com sucesso. Agora faça o login.");
  }

  return (
    <main className="rv-auth-wrap">
      <header>
        <nav className="navbar navbar-expand-lg rv-inner-nav">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img
                src="/img/logo-resgate-verde-sem-Texto-removebg.png"
                alt="Logo da plataforma Resgate Verde"
                width="44"
                height="44"
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

      <section className="top">
        <div className="container">
          <div className="rv-auth-intro">
            <span className="rv-eyebrow rv-eyebrow--solid">
              <i className="bi bi-people-fill"></i>
              Faça Parte
            </span>
            <h1 className="mt-3">Junte-se ao Resgate Verde</h1>
            <p>
              Cadastre sua ONG ou Escola para começar a receber doações dos
              nossos pontos de coleta. Já tem conta? Faça login para acessar
              sua área de gestão.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="fundo-branco">
                <h2><i className="bi bi-pencil-square"></i>Cadastro</h2>
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
                      <i className="bi bi-person-plus-fill"></i>
                      Cadastrar
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="fundo-branco2">
                <h2><i className="bi bi-box-arrow-in-right"></i>Login</h2>
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
                      <i className="bi bi-box-arrow-in-right"></i>
                      Entrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <Link to="/">Home</Link>
              <Link to="/fale-conosco">Fale Conosco</Link>
              <Link to="/cadastro-login">Participe</Link>
            </nav>
          </div>

          <div className="rv-footer__bottom">
            <p>© 2026 Resgate Verde — Todos os direitos reservados.</p>
            <div className="rv-footer__socials" aria-label="Redes sociais">
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
