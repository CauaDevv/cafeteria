import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroContent } from '../../data/home'
import { roasts } from '../../data/roasts'
import { formatPrice } from '../../lib/format'
import { BeanPhysics } from './BeanPhysics'
import { uiText } from '../../data/siteContent'

export function Hero() {
  const featured = roasts[1]
  return <section className="hero-section" id="inicio">
    <BeanPhysics />
    <div aria-hidden="true" className="hero-grain hero-grain--one">✳</div><div aria-hidden="true" className="hero-grain hero-grain--two">✳</div><div aria-hidden="true" className="hero-grain hero-grain--three">✳</div>
    <div className="hero-copy"><p className="eyebrow"><Sparkles aria-hidden="true" />{heroContent.eyebrow}</p><h1><span>{heroContent.heading}</span><span><em>{heroContent.accent}</em></span></h1><p className="hero-description">{heroContent.description}</p>
      <div className="hero-actions"><Link className="button button--primary" to="/cardapio">{heroContent.primary}<ArrowUpRight aria-hidden="true" /></Link><Link className="text-link" to="/unidades">{heroContent.secondary}<ArrowUpRight aria-hidden="true" /></Link></div>
      <ul aria-label={heroContent.promisesLabel} className="hero-promises">{heroContent.promises.map((promise) => <li key={promise}>{promise}</li>)}</ul>
    </div>
    <div aria-label={uiText.coffeeCupAlt} className="hero-art" role="img">
      <div aria-hidden="true" className="hero-sun" /><div aria-hidden="true" className="hero-ring hero-ring--outer" /><div aria-hidden="true" className="hero-ring hero-ring--inner" />
      <svg aria-hidden="true" className="hero-cup" viewBox="0 0 480 440" focusable="false">
        <path className="cup-steam" d="M194 122c-20-25 18-31 0-56m48 56c-20-25 18-31 0-56m48 56c-20-25 18-31 0-56" />
        <ellipse className="cup-shadow" cx="246" cy="351" rx="149" ry="30" />
        <ellipse className="cup-saucer" cx="237" cy="354" rx="173" ry="25" />
        <ellipse className="cup-saucer-center" cx="237" cy="352" rx="106" ry="13" />
        <path className="cup-handle" d="M341 207h32c42 0 52 72 7 93l-45 20" />
        <path className="cup-body" d="M112 172h250l-25 141c-7 39-35 61-99 61s-92-22-99-61z" />
        <ellipse className="cup-rim" cx="237" cy="174" rx="125" ry="28" />
        <ellipse className="cup-coffee" cx="237" cy="174" rx="104" ry="18" />
        <path className="cup-highlight" d="M146 210c5 46 13 85 29 108" />
        <ellipse className="cup-bean cup-bean--one" cx="84" cy="315" rx="14" ry="8" transform="rotate(-28 84 315)" />
        <ellipse className="cup-bean cup-bean--two" cx="393" cy="337" rx="12" ry="7" transform="rotate(26 393 337)" />
      </svg>
      <div className="floating-note"><span>{heroContent.featuredLabel}</span><strong>{featured.name}</strong><small>{uiText.priceFrom} {formatPrice(featured.price)}</small></div>
      <span aria-hidden="true" className="hero-stamp">{heroContent.stampLine1}<br />{heroContent.stampLine2} <span>✳</span></span>
    </div>
    <a className="scroll-cue" href="#depoimentos"><span>{heroContent.scrollCue}</span><ArrowDown aria-hidden="true" /></a>
    <div className="hero-index">{heroContent.slideNumber} <span>{uiText.separator}</span> {heroContent.slideCount}</div>
  </section>
}
