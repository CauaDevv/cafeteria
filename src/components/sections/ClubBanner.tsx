import { ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { clubContent } from '../../data/home'

export function ClubBanner() {
  return <section className="club-section" id="clube"><div className="club-top"><span>{clubContent.eyebrow}</span><span aria-hidden="true">✳</span><span>{clubContent.topline}</span></div><div className="club-layout"><div><h2>{clubContent.heading}<br /><em>{clubContent.accent}</em></h2><p>{clubContent.description}</p><Link className="button button--light" to="/clube">{clubContent.cta}<ArrowUpRight aria-hidden="true" /></Link></div><ul>{clubContent.benefits.map((benefit) => <li key={benefit}><Check aria-hidden="true" />{benefit}</li>)}</ul><div aria-hidden="true" className="club-stamp"><span>{clubContent.stampEyebrow}</span><strong>{clubContent.stampMain.map((line) => <span key={line}>{line}</span>)}</strong><span>{clubContent.stampFooter}</span></div></div></section>
}
