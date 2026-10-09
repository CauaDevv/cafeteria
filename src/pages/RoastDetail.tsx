import { useState } from 'react'
import { ArrowLeft, ArrowUpRight, ShoppingBag } from 'lucide-react'
import { Link, useNavigate, useParams, useOutletContext } from 'react-router-dom'
import { roasts } from '../data/roasts'
import { formatPrice } from '../lib/format'
import { useCart } from '../store/cart'
import { uiText } from '../data/siteContent'

type Context = { onCart: () => void }
export function RoastDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { onCart } = useOutletContext<Context>()
  const roast = roasts.find((item) => item.slug === slug)
  const [size, setSize] = useState(250)
  const add = useCart((state) => state.add)
  if (!roast) return <main className="not-found" id="conteudo"><span>{uiText.roastPageNotFound}</span><h1>{uiText.detailPageNotFound}</h1><Link className="button button--primary" to="/torras">{uiText.notFoundRoasts}</Link></main>
  const price = size === 500 ? roast.price * 1.8 : roast.price
  return <main className="inner-page roast-detail-page" id="conteudo"><button className="back-link" onClick={() => navigate(-1)}><ArrowLeft aria-hidden="true" /> {uiText.backRoasts}</button><div className="roast-detail-layout"><div aria-label={`${uiText.bagIllustration} ${roast.name}`} className="roast-detail-art" role="img"><span>{uiText.coffeeOrigin}</span><b>✳</b><strong>{roast.name}</strong><small>{roast.origin}</small></div><article><p className="section-label" data-page-title={roast.name} data-page-description={roast.description}>{uiText.roastDetailLabel(roast.roastLevel, roast.origin)}</p><h1>{roast.name}</h1><p className="roast-detail-description">{roast.description}</p><div className="detail-notes">{roast.notes.map((note) => <span key={note}>{note}</span>)}</div><label className="size-label">{uiText.sizeLabel}<select onChange={(event) => setSize(Number(event.target.value))} value={size}>{uiText.sizeOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label><div className="detail-price">{formatPrice(price)}</div><button className="button button--primary" onClick={() => { add({ slug: roast.slug, name: roast.name, price }); onCart() }}><ShoppingBag aria-hidden="true" /> {uiText.addBag}</button><p className="detail-note">{uiText.roastDetailNote}</p><Link className="text-link" to="/cardapio">{uiText.menuAlso} <ArrowUpRight aria-hidden="true" /></Link></article></div></main>
}
