const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export function validateContactForm({ nome, email, telefone, mensagem }) {
  if (!nome || !email || !telefone || !mensagem) {
    return 'Por favor, preencha todos os campos antes de enviar.';
  }

  if (!emailRegex.test(email)) {
    return 'Por favor, insira um e-mail válido.';
  }

  if (!phoneRegex.test(telefone)) {
    return 'Por favor, insira um telefone válido (ex: (11) 91234-5678).';
  }

  return null;
}
