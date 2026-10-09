import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = { slug: string; name: string; price: number; quantity: number }
type CartState = {
  items: CartItem[]
  add: (item: Omit<CartItem, 'quantity'>) => void
  remove: (slug: string) => void
  change: (slug: string, amount: number) => void
  clear: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (item) => set((state) => {
        const current = state.items.find((entry) => entry.slug === item.slug)
        return { items: current ? state.items.map((entry) => entry.slug === item.slug ? { ...entry, quantity: entry.quantity + 1 } : entry) : [...state.items, { ...item, quantity: 1 }] }
      }),
      change: (slug, amount) => set((state) => ({ items: state.items.map((item) => item.slug === slug ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item) })),
      remove: (slug) => set((state) => ({ items: state.items.filter((item) => item.slug !== slug) })),
      clear: () => set({ items: [] }),
    }),
    { name: 'cafeteria-cart' },
  ),
)
