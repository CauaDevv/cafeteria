import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { appContent } from '../../data/home'
import { SectionLabel } from '../ui/SectionLabel'

export function AppShowcase() {
  return <section className="app-section section-pad" id="pedido"><div className="app-copy"><SectionLabel number={appContent.number}>{appContent.label}</SectionLabel><h2>{appContent.heading}<br /><em>{appContent.accent}</em></h2><p>{appContent.description}</p><ul>{appContent.benefits.map((benefit) => <li key={benefit}><Check aria-hidden="true" />{benefit}</li>)}</ul><Link className="button button--primary" to="/contato">{appContent.cta}<ArrowUpRight aria-hidden="true" /></Link><small>{appContent.note}</small></div><div className="phone-scene"><div aria-hidden="true" className="phone-orbit" /><div aria-label={appContent.phoneAlt} className="phone-mockup" role="img"><div className="phone-top"><span>{appContent.phoneTime}</span><span>{appContent.phoneSignal}</span></div><div className="phone-content"><span className="phone-greeting">{appContent.phoneGreeting}</span><strong>{appContent.phoneHeadline}</strong><div className="phone-coffee"><span>{appContent.phoneIcon}</span><div><strong>{appContent.phoneProduct}</strong><small>{appContent.phoneDetail}</small></div><b>{appContent.phonePrice}</b></div><div className="phone-button">{appContent.phoneCta}<ArrowUpRight aria-hidden="true" /></div></div></div><span aria-hidden="true" className="phone-note">{appContent.noteStamp}<span>↗</span></span></div></section>
}
