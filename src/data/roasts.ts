import { site } from '../config/site'

export type Roast = {
  slug: string
  name: string
  origin: string
  roastLevel: 1 | 2 | 3 | 4 | 5
  notes: string[]
  color: string
  price: number
  description: string
}

export const roasts: Roast[] = [
  { slug: 'mandacaru', name: 'Mandacaru', origin: 'Chapada Diamantina · BA', roastLevel: 2, notes: ['Rapadura', 'Caju', 'Mel'], color: site.colors.sol, price: 42, description: 'Café doce e perfumado, com um tantinho de fruta madura.' },
  { slug: 'rapadura', name: 'Rapadura', origin: 'Baturité · CE', roastLevel: 3, notes: ['Rapadura', 'Castanha', 'Cacau'], color: site.colors.accent, price: 39, description: 'Corpo macio e doçura de engenho para acompanhar a prosa.' },
  { slug: 'lampiao', name: 'Lampião', origin: 'Matas de Minas · MG', roastLevel: 4, notes: ['Chocolate', 'Laranja', 'Melado'], color: site.colors.roast, price: 45, description: 'Uma xícara valente: chocolate, fruta e final comprido.' },
  { slug: 'xique-xique', name: 'Xique-xique', origin: 'Mogiana · SP', roastLevel: 3, notes: ['Caju', 'Mel', 'Jasmim'], color: site.colors.cacto, price: 38, description: 'Leve e floral, como sombra fresca depois do meio-dia.' },
  { slug: 'chuva-no-sertao', name: 'Chuva no Sertão', origin: 'Chapada Diamantina · BA', roastLevel: 1, notes: ['Rapadura', 'Camomila', 'Maçã'], color: site.colors.poente, price: 48, description: 'Delicada, limpa e cheia de doçura, igual primeira chuva.' },
  { slug: 'por-do-sol', name: 'Pôr do Sol', origin: 'Baturité · CE', roastLevel: 4, notes: ['Cacau', 'Amêndoa', 'Canela'], color: site.colors.areia, price: 36, description: 'Um café redondo e acolhedor para fechar a tarde devagar.' },
]
