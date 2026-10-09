export const coffeeBuilderContent = {
  number: '07',
  eyebrow: 'Da bancada da casa',
  title: 'Monte seu café.',
  description: 'Escolha a bebida, ajeite do seu jeito e imagine a primeira prosa da manhã.',
  chooseLabel: '01 · Escolha a bebida',
  customLabel: '02 · Ajeite a xícara',
  resultLabel: '03 · Sua ficha de pedido',
  chooseHint: 'Toque numa receita para começar a montar.',
  customizationHint: 'Cada escolha já muda o retrato e o preço do seu café.',
  resultTitle: 'Seu café tá pronto.',
  resultHint: 'A gente prepara assim que você chegar à casa.',
  sizeLabel: 'Tamanho',
  milkLabel: 'Leite',
  sugarLabel: 'Açúcar',
  temperatureLabel: 'Temperatura',
  extrasLabel: 'Um agrado a mais',
  noExtras: 'Só o café, por favor',
  continue: 'Ajeitar a xícara',
  back: 'Voltar às bebidas',
  finish: 'Ver meu café',
  add: 'Adicionar ao pedido',
  added: 'Café anotado na sua comanda.',
  restart: 'Montar outro café',
  cupAlt: 'Ilustração da bebida escolhida',
  summary: 'Resumo do seu café',
  total: 'Total',
  choicesLabel: 'Receitas de café da casa',
  extrasChoiceLabel: 'Escolha adicionais para sua bebida',
} as const

export const coffeeDrinks = [
  { id: 'coado', name: 'Coado da casa', description: 'Filtrado na hora, leve e perfumado.', price: 10, tone: 'coffee' },
  { id: 'rapadura', name: 'Café com rapadura', description: 'Doçura de engenho com café passado.', price: 13, tone: 'cane' },
  { id: 'cappuccino', name: 'Cappuccino', description: 'Espresso, leite cremoso e canela.', price: 16, tone: 'milk' },
  { id: 'coco', name: 'Leite de coco', description: 'Café, leite de coco e um sopro de canela.', price: 15, tone: 'coconut' },
  { id: 'chocolate', name: 'Cacau do sertão', description: 'Espresso, chocolate e um toque de rapadura.', price: 18, tone: 'cocoa' },
] as const

export const coffeeSizes = [
  { id: 'pequeno', name: 'Pequeno', price: 0 },
  { id: 'medio', name: 'Médio', price: 3 },
  { id: 'grande', name: 'Grande', price: 6 },
] as const

export const coffeeMilks = [
  { id: 'sem-leite', name: 'Sem leite', price: 0 },
  { id: 'integral', name: 'Integral', price: 0 },
  { id: 'coco', name: 'Leite de coco', price: 3 },
  { id: 'aveia', name: 'Aveia', price: 4 },
] as const

export const coffeeSugars = [
  { id: 'sem-acucar', name: 'Sem açúcar', price: 0 },
  { id: 'pouco-acucar', name: 'Pouquinho', price: 0 },
  { id: 'rapadura', name: 'Rapadura', price: 2 },
] as const

export const coffeeTemperatures = [
  { id: 'quente', name: 'Quentinho', price: 0 },
  { id: 'gelado', name: 'Com gelo', price: 2 },
] as const

export const coffeeExtras = [
  { id: 'canela', name: 'Canela', price: 1 },
  { id: 'paçoca', name: 'Farofa de paçoca', price: 3 },
  { id: 'queijo', name: 'Queijo coalho', price: 4 },
] as const
