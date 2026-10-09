import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { menu } from '../../data/menu'
import { menuHighlightContent } from '../../data/home'
import { formatPrice } from '../../lib/format'
import { SectionLabel } from '../ui/SectionLabel'

export function MenuHighlight() {
  const picks = menu.filter((item) => ['capuccino', 'coado', 'cold-brew', 'bolo', 'cookie', 'pao-queijo'].includes(item.id))
  return <section className="menu-highlight section-pad" id="cardapio"><div className="section-heading"><SectionLabel number={menuHighlightContent.number}>{menuHighlightContent.label}</SectionLabel><h2>{menuHighlightContent.heading}</h2><p>{menuHighlightContent.description}</p></div><div className="menu-picks">{picks.map((item, index) => <article className="menu-pick" key={item.id}><span className={`menu-pick-art menu-pick-art--${index + 1}`} aria-hidden="true"><span>{menuHighlightContent.marks[index]}</span></span><div className="menu-pick-meta"><div><span>{item.category}</span><h3>{item.name}</h3></div><strong>{formatPrice(item.price)}</strong></div><p>{item.description}</p></article>)}</div><Link className="button button--outline menu-full-link" to="/cardapio">{menuHighlightContent.link} <ArrowUpRight aria-hidden="true" /></Link></section>
}
