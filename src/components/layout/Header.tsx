import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, ShoppingBag, X } from 'lucide-react'
import { site } from '../../config/site'
import { navLinks } from '../../data/siteContent'
import { uiText } from '../../data/siteContent'

export function Header({ onCart, cartCount }: { onCart: () => void; cartCount: number }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update(); window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const target = document.querySelector<HTMLElement>('.menu-close')
    target?.focus()
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'Tab') {
        const nodes = document.querySelectorAll<HTMLElement>('.menu-overlay button, .menu-overlay a')
        if (event.shiftKey && document.activeElement === nodes[0]) { event.preventDefault(); nodes[nodes.length - 1]?.focus() }
        else if (!event.shiftKey && document.activeElement === nodes[nodes.length - 1]) { event.preventDefault(); nodes[0]?.focus() }
      }
    }
    document.addEventListener('keydown', keydown)
    return () => { document.removeEventListener('keydown', keydown); previous?.focus() }
  }, [open])
  return <>
    <a className="skip-link" href="#conteudo">{uiText.skipLink}</a>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Link aria-label={`${site.name}, início`} className="brand" to="/">
        <span className="brand-mark" aria-hidden="true">✳</span><span className="brand-name">{site.name}</span>
      </Link>
        <nav aria-label={uiText.navLabel} className="desktop-nav">{navLinks.slice(0, 4).map((link) => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}</nav>
      <div className="header-actions">
        <button aria-label={uiText.cartLabel(cartCount)} className="icon-button cart-trigger" onClick={onCart}><ShoppingBag aria-hidden="true" /><span>{cartCount}</span></button>
        <button aria-controls="menu-overlay" aria-expanded={open} aria-label={open ? uiText.menuClose : uiText.openMenu} className="menu-trigger" onClick={() => setOpen((value) => !value)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}<span>{open ? uiText.menuClose : uiText.menuTrigger}</span></button>
      </div>
    </header>
    {open && <div aria-label={uiText.menuDialogLabel} className="menu-overlay" id="menu-overlay" role="dialog" aria-modal="true">
      <div className="menu-top"><Link aria-label={`${site.name}, início`} className="brand" to="/"><span aria-hidden="true" className="brand-mark">✳</span><span className="brand-name">{site.name}</span></Link><button aria-label={uiText.menuClose} className="icon-button menu-close" onClick={() => setOpen(false)}><X aria-hidden="true" /></button></div>
      <p className="section-label">{uiText.menuIntro}</p>
      <nav aria-label={uiText.pageNavLabel} className="overlay-links">{navLinks.map((link, index) => <Link key={link.to} onClick={() => setOpen(false)} to={link.to}><span>{uiText.timelineIndex(index)}</span>{link.label}<ArrowUpRight aria-hidden="true" /></Link>)}</nav>
      <div className="menu-bottom"><p>{site.tagline}</p><Link to="/cardapio" onClick={() => setOpen(false)}>{uiText.pickup} <ArrowUpRight aria-hidden="true" /></Link></div>
    </div>}
  </>
}
