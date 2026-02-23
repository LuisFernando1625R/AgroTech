import { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('');

  const enviar = (event) => {
    event.preventDefault();

    const nomeAtual = nome.trim();
    const emailAtual = email.trim();
    const telefoneAtual = telefone.trim();
    const mensagemAtual = mensagem.trim();

    if (!nomeAtual || !emailAtual || !telefoneAtual || !mensagemAtual) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(emailAtual)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (!regexTelefone.test(telefoneAtual)) {
      alert('Por favor, insira um telefone válido (ex: (11) 91234-5678).');
      return;
    }

    setSucesso('Mensagem enviada com sucesso! 🌱');
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');

    setTimeout(() => {
      setSucesso('');
    }, 4000);
  };

  return (
    <section className="section_1 d-block">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex d-inline justify-content-center align-items-center">
                  <img src="/img/logo-resgate-verde-sem-Texto-removebg.png" alt="logo da empresa" className="img-fluid float-start w-50" />
                  <div>
                    <h1>𝑅𝑒𝑠𝑔𝑎𝑡𝑒 𝑉𝑒𝑟𝑑𝑒</h1>
                    <h6>Resgate, Reparta, Renove</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link className="btn-custom_2 text-decoration-none text-light p-2" to="/">
            Home
          </Link>
        </nav>
      </header>

      <div className="form-container">
        <h2>Fale Conosco</h2>
        <form id="formContato" onSubmit={enviar}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome Completo:
            </label>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Digite seu nome completo"
              pattern="^[A-Za-zÀ-ÿ]{2,}(?:\s+[A-Za-zÀ-ÿ]{2,})+$"
              required
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="exemplo@email.com"
              pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefone" className="form-label">
              Telefone:
            </label>
            <input
              type="tel"
              id="telefone"
              className="form-control"
              placeholder="(xx) xxxxx-xxxx"
              required
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">
              Mensagem:
            </label>
            <textarea
              id="mensagem"
              className="form-control"
              rows="4"
              placeholder="Digite sua mensagem"
              maxLength="500"
              required
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="reset" className="btn btn-outline-secondary" onClick={() => {
              setNome('');
              setEmail('');
              setTelefone('');
              setMensagem('');
              setSucesso('');
            }}>
              Limpar
            </button>
            <button type="submit" className="btn btn-success">
              Enviar
            </button>
          </div>

          {sucesso ? <div id="msgSucesso">{sucesso}</div> : null}
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
