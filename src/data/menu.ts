export type MenuCategory = 'Espressos' | 'Com leite' | 'Gelados' | 'Doces' | 'Salgados'
export type MenuItem = { id: string; category: MenuCategory; name: string; description: string; price: number; tags: string[] }

export const menu: MenuItem[] = [
  { id: 'espresso', category: 'Espressos', name: 'Espresso Mandacaru', description: 'Curto, doce e tirado na hora.', price: 8, tags: ['Da casa'] },
  { id: 'duplo', category: 'Espressos', name: 'Espresso em dobro', description: 'Duas doses para esticar a conversa.', price: 12, tags: [] },
  { id: 'coado', category: 'Espressos', name: 'Coado no pano', description: 'Café passado devagar, como pede a prosa.', price: 10, tags: ['Coado'] },
  { id: 'rapadura', category: 'Espressos', name: 'Café com rapadura', description: 'Doçura de engenho com café fresquinho.', price: 13, tags: ['Nordestino'] },
  { id: 'latte', category: 'Com leite', name: 'Café com leite de coco', description: 'Café, leite de coco e canela.', price: 16, tags: ['Da casa'] },
  { id: 'capuccino', category: 'Com leite', name: 'Cappuccino da prosa', description: 'Espresso, leite cremoso e um sopro de canela.', price: 16, tags: ['Queridinho'] },
  { id: 'cafe-au-lait', category: 'Com leite', name: 'Café com leite', description: 'O encontro de todo dia, bem quentinho.', price: 12, tags: [] },
  { id: 'mocha', category: 'Com leite', name: 'Cacau do sertão', description: 'Chocolate da casa encontra café especial.', price: 18, tags: [] },
  { id: 'cold-brew', category: 'Gelados', name: 'Café gelado da feira', description: 'Extraído a frio para refrescar a caminhada.', price: 16, tags: ['Gelado'] },
  { id: 'tonica', category: 'Gelados', name: 'Café com cajá', description: 'Café, cajá e um toque cítrico.', price: 18, tags: ['Gelado'] },
  { id: 'iced-latte', category: 'Gelados', name: 'Leite de coco gelado', description: 'Leite de coco, gelo e espresso duplo.', price: 17, tags: ['Gelado'] },
  { id: 'suco-umbu', category: 'Gelados', name: 'Suco de umbu', description: 'Fruta da estação batida bem geladinha.', price: 14, tags: ['Da estação'] },
  { id: 'bolo-rolo', category: 'Doces', name: 'Bolo de rolo', description: 'Camadas fininhas com goiabada.', price: 14, tags: ['Feito na casa'] },
  { id: 'bolo-macaxeira', category: 'Doces', name: 'Bolo de macaxeira', description: 'Macio por dentro, douradinho por fora.', price: 13, tags: [] },
  { id: 'pe-de-moleque', category: 'Doces', name: 'Pé de moleque', description: 'Rapadura e amendoim, receita de festa.', price: 9, tags: [] },
  { id: 'queijo-coalho', category: 'Salgados', name: 'Queijo coalho assado', description: 'Dourado na chapa e servido quentinho.', price: 12, tags: ['Vegetariano'] },
  { id: 'cuscuz-ovo', category: 'Salgados', name: 'Cuscuz com ovo', description: 'Cuscuz de milho, ovo e manteiga da terra.', price: 18, tags: ['Da casa'] },
  { id: 'cuscuz-carne-sol', category: 'Salgados', name: 'Cuscuz com carne de sol', description: 'Carne de sol acebolada e queijo coalho.', price: 26, tags: ['Nordestino'] },
  { id: 'tapioca', category: 'Salgados', name: 'Tapioca de queijo coalho', description: 'Goma fresquinha, queijo tostado na hora.', price: 20, tags: ['Sem glúten'] },
]
