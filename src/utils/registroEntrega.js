const CHAVE_ENTREGAS = 'resgate_verde_entregas';

function lerEntregas() {
  const conteudo = localStorage.getItem(CHAVE_ENTREGAS);

  if (!conteudo) {
    return [];
  }

  try {
    const dados = JSON.parse(conteudo);
    return Array.isArray(dados) ? dados : [];
  } catch {
    return [];
  }
}

export function registrarEntrega(novaEntrega) {
  const entregasAtuais = lerEntregas();

  const entregaComData = {
    ...novaEntrega,
    id: crypto.randomUUID(),
    registradoEm: new Date().toISOString()
  };

  entregasAtuais.push(entregaComData);
  localStorage.setItem(CHAVE_ENTREGAS, JSON.stringify(entregasAtuais));

  return entregaComData;
}

export function listarEntregasRegistradas() {
  return lerEntregas().sort((a, b) => {
    const dataA = new Date(a.registradoEm).getTime();
    const dataB = new Date(b.registradoEm).getTime();
    return dataB - dataA;
  });
}
