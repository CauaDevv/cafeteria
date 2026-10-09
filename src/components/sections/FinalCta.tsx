import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { finalCta } from '../../data/home'

export function FinalCta() {
  return <section className="final-cta"><div className="final-cta-orb" aria-hidden="true" /><p>{finalCta.eyebrow}</p><h2>{finalCta.heading}<br /><em>{finalCta.accent}</em></h2><div className="final-cta-actions"><Link className="button button--primary" to="/cardapio">{finalCta.primary}<ArrowUpRight aria-hidden="true" /></Link><Link className="text-link" to="/unidades"><MapPin aria-hidden="true" />{finalCta.secondary}</Link></div><span aria-hidden="true" className="final-cta-mark">✳</span></section>
}
