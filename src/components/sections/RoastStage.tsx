import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { roasts } from '../../data/roasts'
import { roastContent } from '../../data/home'
import { uiText } from '../../data/siteContent'
import { formatPrice } from '../../lib/format'
import { useCart } from '../../store/cart'
import { Button } from '../ui/Button'
import { SectionLabel } from '../ui/SectionLabel'

export function RoastStage({ onCart }: { onCart: () => void }) {
  const [active, setActive] = useState(1)
  const roast = roasts[active]
  const stage = useRef<HTMLDivElement>(null)
  const add = useCart((state) => state.add)
  const change = useCallback((delta: number) => setActive((current) => (current + delta + roasts.length) % roasts.length), [])
  useEffect(() => {
    const region = stage.current
    if (!region) return
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); change(-1) }
      if (event.key === 'ArrowRight') { event.preventDefault(); change(1) }
    }
    region.addEventListener('keydown', keydown)
    return () => region.removeEventListener('keydown', keydown)
  }, [change])
  const touchStart = useRef<number | null>(null)
  return <section aria-roledescription="carrossel" className="roast-section section-pad" id="torras" role="region" style={{ '--roast-color': roast.color } as React.CSSProperties}>
    <div className="roast-head"><div><SectionLabel number={roastContent.number}>{roastContent.label}</SectionLabel><h2>{roastContent.heading}</h2><p>{roastContent.description}</p></div><div aria-label={uiText.roastLabel(active + 1, roasts.length)} aria-live="polite" className="roast-counter">{uiText.timelineIndex(active)}<span> / {uiText.timelineIndex(roasts.length - 1)}</span></div></div>
    <div aria-label={uiText.carouselLabel} className="roast-stage" onPointerDown={(event) => { if (event.pointerType === 'touch') touchStart.current = event.clientX }} onPointerUp={(event) => { if (event.pointerType === 'touch' && touchStart.current !== null) { const delta = event.clientX - touchStart.current; if (Math.abs(delta) > 48) change(delta < 0 ? 1 : -1); touchStart.current = null } }} ref={stage} tabIndex={0}>
      <button aria-label={uiText.carouselPrevious} className="carousel-arrow carousel-arrow--prev" onClick={() => change(-1)}><ArrowLeft aria-hidden="true" /></button><div aria-hidden="true" className="roast-halo" /><div aria-hidden="true" className="roast-steam">〰</div>
      {/* TODO(asset): cada café receberá fotografia WebP 3:4 no lugar deste pacote ilustrado. */}
      <div aria-label={`${uiText.carouselImageAlt} ${roast.name}`} className="roast-bag" role="img"><span>{uiText.roastOrigin}</span><b>✳</b><strong>{roast.name}</strong><small>{roast.origin}</small><i>{uiText.bagWeight}</i></div>
      <article aria-live="polite" className="roast-details"><span className="roast-kicker">{uiText.roastNumber(active + 1)}</span><h3>{roast.name}</h3><p>{roast.description}</p><span className="roast-origin">{roast.origin}</span><div className="roast-level" aria-label={uiText.roastLevel(roast.roastLevel)}><span>{uiText.levelLabel}</span><div>{Array.from({ length: 5 }, (_, index) => <i className={index < roast.roastLevel ? 'filled' : ''} key={index} />)}</div></div><div className="roast-notes">{roast.notes.map((note) => <span key={note}>{note}</span>)}</div><strong className="roast-price">{uiText.priceFrom} {formatPrice(roast.price)}</strong><div className="roast-buttons"><Button onClick={() => { add({ slug: roast.slug, name: roast.name, price: roast.price }); onCart() }}><ShoppingBag aria-hidden="true" /> {uiText.addToCart}</Button><Link className="text-link" to={`/torras/${roast.slug}`}>{uiText.roastDetails} <ArrowRight aria-hidden="true" /></Link></div></article>
      <button aria-label={uiText.carouselNext} className="carousel-arrow carousel-arrow--next" onClick={() => change(1)}><ArrowRight aria-hidden="true" /></button>
    </div><div className="carousel-dots" role="group" aria-label={uiText.carouselLabel}>{roasts.map((item, index) => <button aria-current={index === active ? 'true' : undefined} aria-label={uiText.roastLinkLabel(item.name)} key={item.slug} onClick={() => setActive(index)} />)}</div>
  </section>
}
