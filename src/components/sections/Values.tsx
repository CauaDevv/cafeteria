import { Coffee, Heart, Leaf, MapPin, Package, Sun } from 'lucide-react'
import { values, valuesContent } from '../../data/home'
import { SectionLabel } from '../ui/SectionLabel'
import { uiText } from '../../data/siteContent'

const icons = [Coffee, Leaf, MapPin, Heart, Package, Sun]
export function Values() {
  return <section className="values-section section-pad" id="jeito-da-casa"><div className="section-heading"><SectionLabel number={valuesContent.number}>{valuesContent.label}</SectionLabel><h2>{valuesContent.heading}</h2><p>{valuesContent.description}</p></div><div className="values-grid">{values.map((value, index) => { const Icon = icons[index]; return <article className="value-card" key={value.title}><span className="value-icon"><Icon aria-hidden="true" /></span><span className="value-number">{uiText.timelineIndex(index)}</span><h3>{value.title}</h3><p>{value.description}</p></article> })}</div></section>
}
