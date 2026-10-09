import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, MapPin, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { menu, type MenuCategory } from '../data/menu'
import { roasts } from '../data/roasts'
import { locations } from '../data/locations'
import { timeline } from '../data/timeline'
import { routeContent } from '../data/pages'
import { formatPrice } from '../lib/format'
import { useCart } from '../store/cart'
import { uiText } from '../data/siteContent'

type PageId = 'roasts' | 'menu' | 'story' | 'locations' | 'club' | 'contact'
const categories: Array<'Todos' | MenuCategory> = uiText.menuCategories as Array<'Todos' | MenuCategory>
type RouteCopy = { eyebrow: string; title: string; description: string; intro?: string; benefits?: readonly string[]; cta?: string; note?: string; formEyebrow?: string; nameLabel?: string; emailLabel?: string; subjectLabel?: string; subjects?: readonly string[]; messageLabel?: string; submit?: string }

export function RoutePage({ page }: { page: PageId }) {
  const content: RouteCopy = routeContent[page]
  const [category, setCategory] = useState<'Todos' | MenuCategory>('Todos')
  const [query, setQuery] = useState('')
  const [sent, setSent] = useState(false)
  const add = useCart((state) => state.add)
  const filtered = menu.filter((item) => (category === 'Todos' || item.category === category) && item.name.toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR')))

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (event.currentTarget.reportValidity()) setSent(true)
  }

  return <main className="inner-page" id="conteudo">
    <header className="inner-hero"><p className="section-label">{content.eyebrow}</p><h1 data-page-title={content.title} data-page-description={content.description}>{content.title}</h1><p>{content.description}</p></header>
    {page === 'roasts' && <section className="inner-section roast-grid">{roasts.map((roast, index) => <article className="roast-tile" key={roast.slug}><Link aria-label={uiText.roastLinkLabel(roast.name)} to={`/torras/${roast.slug}`}><div className={`roast-tile-art art--${index + 1}`}><span>✳</span><strong>{roast.name}</strong><small>{roast.origin}</small></div><div className="roast-tile-info"><div><h2>{roast.name}</h2><p>{roast.notes.join(' · ')}</p></div><strong>{formatPrice(roast.price)}</strong></div></Link><button className="button button--outline" onClick={() => add({ slug: roast.slug, name: roast.name, price: roast.price })}>{uiText.addBag}</button></article>)}</section>}
    {page === 'menu' && <section className="inner-section"><div className="menu-filter-row"><div aria-label={uiText.menuCategoryLabel} className="filter-chips" role="group">{categories.map((item) => <button aria-pressed={category === item} className={category === item ? 'is-active' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="menu-search"><Search aria-hidden="true" /><span className="visually-hidden">{uiText.menuSearchLabel}</span><input onChange={(event) => setQuery(event.target.value)} placeholder={uiText.menuSearchPlaceholder} value={query} /></label></div><div className="menu-list">{filtered.map((item) => <article className="menu-row" key={item.id}><span className="menu-row-art" aria-hidden="true">✳</span><div><h2>{item.name}</h2><p>{item.description}</p><span className="menu-row-category">{item.category} {item.tags.length ? ` · ${item.tags.join(' · ')}` : ''}</span></div><strong>{formatPrice(item.price)}</strong></article>)}</div>{filtered.length === 0 && <p>{uiText.menuEmpty}</p>}</section>}
    {page === 'story' && <section className="inner-section story-page"><p className="story-intro">{content.intro}</p><div className="story-moments">{timeline.map((item, index) => <article key={item.year}><span>{uiText.timelineIndex(index)} — {item.year}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}</div><p className="decision-note">{uiText.storyPlaceholder} <code>{uiText.timelineDataPath}</code>.</p></section>}
    {page === 'locations' && <section className="inner-section location-grid">{locations.map((location) => <article className="location-card" key={location.name}><div className="location-map"><MapPin aria-hidden="true" /><span>{location.mapLabel}</span></div><div><p className="section-label">{location.city}</p><h2>{location.name}</h2><p>{location.address}</p><p>{location.hours}</p><span className="decision-note">{uiText.locationPlaceholder}</span></div></article>)}</section>}
    {page === 'club' && <section className="inner-section club-page"><div className="club-plan"><span>{uiText.clubFrequency}</span><h2>{uiText.clubPlanTitle}</h2><p>{uiText.clubPlanDescription}</p><strong>{uiText.clubPricePrefix} {formatPrice(68)} {uiText.clubPriceSuffix}</strong><ul>{(content.benefits ?? []).map((benefit) => <li key={benefit}><Check aria-hidden="true" />{benefit}</li>)}</ul><Link className="button button--primary" to="/contato">{content.cta} <ArrowUpRight aria-hidden="true" /></Link><small>{content.note}</small></div></section>}
    {page === 'contact' && <section className="inner-section contact-page"><div><p className="section-label">{content.formEyebrow}</p><h2>{uiText.contactFormTitle}</h2><p>{uiText.contactFormIntro} {uiText.toast}</p></div>{sent ? <div aria-live="polite" className="form-success"><Check aria-hidden="true" /><h2>{uiText.contactFormSuccess}</h2><p>{uiText.messageThankYou}</p><button className="button button--outline" onClick={() => setSent(false)}>{uiText.contactFormAgain}</button></div> : <form className="contact-form" onSubmit={submit}><label>{content.nameLabel}<input autoComplete="name" maxLength={80} name="name" required /></label><label>{content.emailLabel}<input autoComplete="email" maxLength={120} name="email" required type="email" /></label><label>{content.subjectLabel}<select defaultValue={content.subjects?.[0]} name="subject">{content.subjects?.map((subject) => <option key={subject}>{subject}</option>)}</select></label><label>{content.messageLabel}<textarea maxLength={800} minLength={10} name="message" required rows={5} /></label><button className="button button--primary" type="submit">{content.submit} <ArrowUpRight aria-hidden="true" /></button></form>}</section>}
  </main>
}
