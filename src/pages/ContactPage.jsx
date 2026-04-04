import { useState } from "react";
import "../../css/style.css";
import { BrandLogo } from "../components/BrandLogo/BrandLogo";
import NavItem from "../components/NavItem/NavItem";
import { validateContactForm } from "../utils/validation";
import NavBarCollapse from "../components/NavBarCollapse/NavBarCollapse";
import { Link } from "react-router-dom";
import Toggler from "../components/Toggler/Toggler";

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
    <section className="section_1 d-block">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <BrandLogo
                titleClassName="titulo-subtitulo"
                subtitleClassName="titulo-subtitulo"
              />
            </Link>
            <Toggler />
            <NavBarCollapse id="inventoryNavbar">
              <NavItem link="/">Home</NavItem>
              <NavItem link="/fale-conosco">Fale Conosco</NavItem>
            </NavBarCollapse>
          </div>
        </nav>
      </header>

      <div className="form-container">
        <h2>Fale Conosco</h2>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome Completo:
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
              E-mail:
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
              Telefone:
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
              Mensagem:
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

          <div className="d-flex justify-content-between">
            <button type="reset" className="btn btn-outline-secondary">
              Limpar
            </button>
            <button type="submit" className="btn btn-success">
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
    </section>
  );
}
