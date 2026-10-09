export const navLinks = [
  { to: '/', label: 'Início' }, { to: '/torras', label: 'Nossas torras' }, { to: '/cardapio', label: 'Cardápio' },
  { to: '/nossa-historia', label: 'Nossa história' }, { to: '/unidades', label: 'Onde estamos' },
  { to: '/clube', label: 'Clube do café' }, { to: '/contato', label: 'Contato' },
]

export const footerGroups = [
  { title: 'Na casa', links: [{ label: 'Nossas torras', to: '/torras' }, { label: 'Cardápio', to: '/cardapio' }, { label: 'Clube do café', to: '/clube' }] },
  { title: 'Por aqui', links: [{ label: 'Nossa história', to: '/nossa-historia' }, { label: 'Onde estamos', to: '/unidades' }, { label: 'Fale com a gente', to: '/contato' }] },
]

export const welcomeContent = { eyebrow: 'Um mimo para começar', title: 'Seu próximo café tem um presente.', body: 'Escolha o jeito que você mais gosta de tomar café e receba uma dica especial da casa.', choices: ['Clara', 'Média', 'Escura'], groupLabel: 'Preferência de torra', selectedChoice: (choice: string) => `Boa escolha. A casa também gosta de cafés de torra ${choice.toLocaleLowerCase('pt-BR')}.`, chooseHint: 'Escolha uma preferência para ver uma dica.', openHome: 'Ver a casa', close: 'Agora não', reopen: 'Abrir novamente a oferta de boas-vindas', chip: 'Um mimo da casa' }
export const uiText = {
  defaultPageTitle: 'Café com calma', skipLink: 'Ir para o conteúdo', openMenu: 'Abrir menu', stepHistoryLink: 'Conheça nossa história',
  menuHighlightLink: 'Abrir cardápio completo', footerInviteLabel: 'Um convite', heroPromisesLabel: 'Compromissos da casa',
  timelineIndex: (index: number) => `0${index + 1}`, roastLinkLabel: (name: string) => `Ver ${name}`,
  notFoundEyebrow: '404 — ESTE CAMINHO NÃO TEM CAFÉ', clubBannerTopline: 'UMA BOA IDEIA, TODO MÊS', clubStampEyebrow: 'UM CAFÉ', clubStampMain: ['para', 'chamar', 'de seu'], clubStampFooter: '✳ TODO MÊS ✳',
  emptyCartTitle: 'Ainda tem espaço para um café.', emptyCartBody: 'Escolha uma torra ou algo gostoso do nosso cardápio.', emptyCartLink: 'Conhecer as torras', emptyCartClose: 'Fechar janela',
  orderCompleteTitle: 'Seu café já está separado.', orderCompleteBody: 'Este pedido é uma demonstração. Nenhuma cobrança ou envio foi realizado.', orderCompleteButton: 'Voltar a passear',
  menuClose: 'Fechar menu', cartLabel: (count: number) => `Abrir carrinho, ${count} itens`, menuTrigger: 'Menu',
  menuDialogLabel: 'Menu principal', navLabel: 'Navegação principal', pageNavLabel: 'Páginas do site', menuIntro: 'Um caminho para cada pausa', pickup: 'Escolher meu pedido',
  footerInvite: 'Entre para um café. Fique pela conversa.', footerLocation: 'Encontre a gente', footerCopyright: 'Feito com cuidado.', footerSignoff: 'Uma pausa de cada vez.', footerGroup1: 'Na casa', footerGroup2: 'Por aqui',
  carouselPrevious: 'Café anterior', carouselNext: 'Próximo café', carouselLabel: 'Escolha um café', roastLabel: (index: number, total: number) => `Café ${index} de ${total}`,
  priceFrom: 'A partir de', addToCart: 'Adicionar', roastDetails: 'Ver detalhes', roastLevel: (level: number) => `Nível de torra ${level} de 5`, backRoasts: 'Voltar às torras',
  addBag: 'Adicionar à sacola', bagItem: (quantity: number) => `${quantity} un.`, subtotal: 'Subtotal', checkout: 'Finalizar pedido',
  levelLabel: 'Intensidade', eachUnit: 'cada', orderTitle: 'Pedido anotado', removeItem: (name: string) => `Remover ${name}`,
  couponCode: 'CAFE10', menuCategoryLabel: 'Filtrar por categoria', menuSearchLabel: 'Buscar item', menuSearchPlaceholder: 'Buscar no cardápio', menuEmpty: 'Nenhum item encontrado. Tente outra busca.',
  menuCategories: ['Todos', 'Espressos', 'Com leite', 'Gelados', 'Doces', 'Salgados'], clubFrequency: '01 — TODO MÊS',
  storyPlaceholder: 'Linha do tempo demonstrativa: o grupo pode editar estes marcos em', timelineDataPath: 'src/data/timeline.ts', locationPlaceholder: 'Localização demonstrativa, aguardando endereço real do grupo.',
  pickupNote: 'Uma demonstração de pedido. Sem aplicativo real, por enquanto.',
  detailPageNotFound: 'Esse café ainda não está na prateleira.', notFoundTitle: 'Vamos tentar outro caminho?', notFoundHome: 'Voltar para o início', notFoundRoasts: 'Ver nossas torras',
  toast: 'A mensagem fica salva apenas nesta demonstração.', messageThankYou: 'Obrigado por escrever. Esta demonstração não envia dados para um servidor.',
  contactFormTitle: 'Conta pra gente.', contactFormIntro: 'Tem uma dúvida, uma ideia ou só quer dizer oi?', contactFormSuccess: 'Mensagem anotada!', contactFormAgain: 'Enviar outra mensagem',
  clubPricePrefix: 'A partir de', clubPriceSuffix: '/ mês', clubPlanTitle: 'Uma seleção para acompanhar seu ritual.', clubPlanDescription: 'Receba um café de origem, um cartão sobre a safra e dicas simples para preparar em casa.',
  locationCardTitle: 'A porta está aberta', cartTitle: 'Sua sacola', cartTotal: 'Total demonstrativo', discount: 'Desconto', couponLabel: 'Cupom de desconto', couponApply: 'Aplicar', couponApplied: 'Cupom aplicado: 10% de desconto.', couponInvalid: 'Cupom não reconhecido. Tente CAFE10.', couponHint: 'Use CAFE10 para 10% de desconto nesta demonstração.', decrement: 'Diminuir quantidade', increment: 'Aumentar quantidade',
  carouselImageAlt: 'Embalagem ilustrada de', bagWeight: '250 g', roastEyebrow: 'TORRA', roastOrigin: 'CAFÉ DE ORIGEM', roastNumber: (index: number) => `0${index} — TORRA`, featuredCoffee: (name: string) => `Café em destaque: ${name}`, coffeeCupAlt: 'Ilustração de uma xícara de café recém-preparado', separator: '—',
  roastPageNotFound: 'TORRA NÃO ENCONTRADA', bagIllustration: 'Embalagem ilustrada de', coffeeOrigin: 'CAFÉ DE ORIGEM', roastDetailPrefix: 'TORRA', roastDetailLabel: (level: number, origin: string) => `TORRA 0${level} — ${origin}`, sizeLabel: 'Tamanho', sizeOptions: [{ value: 250, label: '250 g · em grãos' }, { value: 500, label: '500 g · em grãos' }], roastDetailNote: 'Moagem disponível na cafeteria. Preparado em pequenos lotes.', menuAlso: 'Veja também o cardápio', timelineProgress: 'Progresso da linha do tempo',
}
