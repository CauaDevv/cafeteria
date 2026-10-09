import { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { site } from './config/site'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { CartDrawer } from './components/layout/CartDrawer'
import { useReducedMotion } from './hooks/useReducedMotion'
import { useCart } from './store/cart'
import { createPageScroll } from './lib/lenis'
import { WelcomeOffer } from './components/WelcomeOffer'
import { ScrollEnhancements } from './components/sections/ScrollEnhancements'
import { uiText } from './data/siteContent'

export function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const location = useLocation()
  const closeCart = useCallback(() => setCartOpen(false), [])
  const count = useCart((state) => state.items.reduce((total, item) => total + item.quantity, 0))

  useEffect(() => createPageScroll(reducedMotion), [reducedMotion])
  useEffect(() => {
    const current = location.pathname === '/' ? undefined : document.querySelector<HTMLElement>('[data-page-title]')
    const title = current?.dataset.pageTitle ?? uiText.defaultPageTitle
    document.title = `${title} — ${site.name}`
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (description) description.content = current?.dataset.pageDescription ?? site.description
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' })
  }, [location, reducedMotion])

  return <>
    <Header cartCount={count} onCart={() => setCartOpen(true)} />
    <Outlet context={{ onCart: () => setCartOpen(true) }} />
    <ScrollEnhancements />
    <Footer />
    <CartDrawer open={cartOpen} onClose={closeCart} />
    <WelcomeOffer />
  </>
}
