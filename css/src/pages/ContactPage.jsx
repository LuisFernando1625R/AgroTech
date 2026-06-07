import { useState } from "react";
import "../../css/style.css";
import NavItem from "../components/NavItem";
import { validateContactForm } from "../utils/validation";
import NavBarCollapse from "../components/NavBarCollapse";
import { Link } from "react-router-dom";

const initialForm = {
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
};

export function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const error = validateContactForm({
      nome: form.nome.trim(),
      email: form.email.trim(),
      telefone: form.telefone.trim(),
      mensagem: form.mensagem.trim(),
    });

    if (error) {
      alert(error);
      return;
    }

    setSuccessMessage("Mensagem enviada com sucesso! 🌱");
    setForm(initialForm);

    setTimeout(() => {
      setSuccessMessage("");
    }, 4000);
  }

  function handleReset() {
    setForm(initialForm);
    setSuccessMessage("");
  }

  return (
    <main className="rv-contact-wrap d-flex flex-column">
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
              <NavItem link="/cadastro-login"> Participe </NavItem>
            </NavBarCollapse>
          </div>
        </nav>
      </header>

      <div className="rv-contact-hero">
        <span className="rv-eyebrow">
          <i className="bi bi-chat-dots"></i>
          Estamos aqui pra você
        </span>
        <h1>Fale Conosco</h1>
        <p>
          Tem alguma dúvida, sugestão ou quer fazer parte da nossa rede de
          impacto? Mande uma mensagem e responderemos o mais breve possível.
        </p>
      </div>

      <div className="form-container">
        <h2>Envie sua Mensagem</h2>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="form-control"
              placeholder="Digite seu nome completo"
              pattern="^[A-Za-zÀ-ÿ]{2,}(?:\s+[A-Za-zÀ-ÿ]{2,})+$"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="exemplo@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefone" className="form-label">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              className="form-control"
              placeholder="(xx) xxxxx-xxxx"
              value={form.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              className="form-control"
              rows="4"
              placeholder="Digite sua mensagem"
              maxLength="500"
              value={form.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="d-flex justify-content-between gap-2 mt-4">
            <button type="reset" className="btn btn-outline-secondary">
              <i className="bi bi-arrow-counterclockwise me-1"></i>
              Limpar
            </button>
            <button type="submit" className="btn btn-success">
              <i className="bi bi-send-fill me-1"></i>
              Enviar
            </button>
          </div>

          <div
            id="msgSucesso"
            style={{ display: successMessage ? "block" : "none" }}
          >
            {successMessage}
          </div>
        </form>
      </div>

      <footer className="rv-footer mt-auto">
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
              <Link to="/cadastro-login">Participe</Link>
              <Link to="/fale-conosco">Fale Conosco</Link>
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
