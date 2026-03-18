export const beneficiaries = [
  {
    id: 1,
    name: 'Maria Silva Santos',
    registry: 'REG-245',
    document: '123.456.789-00',
    statusLabel: 'Nenhuma entrega',
    statusClass: 'status-pending',
    statusIcon: 'bi bi-exclamation-circle',
    indicator: '#CCCCCC',
  },
  {
    id: 2,
    name: 'João Pedro Oliveira',
    registry: 'REG-512',
    document: '987.654.321-11',
    statusLabel: 'Recebeu em 20/02/2026',
    statusClass: 'status-delivered',
    statusIcon: 'bi bi-check-circle',
    indicator: '#10b981',
  },
  {
    id: 3,
    name: 'Ana Costa Ferreira',
    registry: 'REG-789',
    document: '456.789.123-22',
    statusLabel: 'Fila - Posição #1',
    statusClass: 'status-queued',
    statusIcon: 'bi bi-clock',
    indicator: '#f59e0b',
  },
];

export const stockByPoint = [
  {
    id: '1',
    name: 'Centro Comunitário Primavera',
    items: [
      { id: 1, name: 'Arroz Integral', quantity: '45 kg', badge: '45' },
      { id: 2, name: 'Feijão Carioca', quantity: '32 kg', badge: '32' },
      { id: 3, name: 'Óleo de Soja', quantity: '18 L', badge: '18' },
    ],
  },
  {
    id: '2',
    name: 'Ginásio Municipal',
    items: [
      { id: 1, name: 'Macarrão Integral', quantity: '28 kg', badge: '28' },
      { id: 2, name: 'Leite em Pó', quantity: '22 caixas', badge: '22' },
      { id: 3, name: 'Açúcar Cristal', quantity: '15 kg', badge: '15' },
    ],
  },
  {
    id: '3',
    name: 'Boa Vista',
    items: [
      { id: 1, name: 'Flocão de Milho', quantity: '52 unidades', badge: '52' },
      { id: 2, name: 'Biscoito Cream Cracker', quantity: '38 pacotes', badge: '38' },
      { id: 3, name: 'Café', quantity: '42 pacotes', badge: '42' },
    ],
  },
];
