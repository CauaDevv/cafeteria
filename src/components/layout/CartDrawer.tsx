import { ArrowRight, Check, Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { Modal } from '../ui/Modal'
import { useCart } from '../../store/cart'
import { formatPrice } from '../../lib/format'
import { uiText } from '../../data/siteContent'

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [complete, setComplete] = useState(false)
  const [coupon, setCoupon] = useState('')
  const [couponState, setCouponState] = useState<'idle' | 'valid' | 'invalid'>('idle')
  const items = useCart((state) => state.items)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = couponState === 'valid' ? subtotal * 0.9 : subtotal
  return <Modal open={open} onClose={() => { setComplete(false); onClose() }} title={complete ? uiText.orderTitle : uiText.cartTitle} labelledBy="cart-title">
    <div className="cart-content">
      {complete ? <div aria-live="polite" className="cart-empty"><span className="empty-cup"><Check aria-hidden="true" /></span><h3>{uiText.orderCompleteTitle}</h3><p>{uiText.orderCompleteBody}</p><button className="button button--primary" onClick={() => { useCart.getState().clear(); setComplete(false); onClose() }}>{uiText.orderCompleteButton} <ArrowRight aria-hidden="true" /></button></div> : null}
      {!complete && items.length === 0 ? <div className="cart-empty"><span className="empty-cup"><ShoppingBag aria-hidden="true" /></span><h3>{uiText.emptyCartTitle}</h3><p>{uiText.emptyCartBody}</p><a className="text-link" href="/torras" onClick={onClose}>{uiText.emptyCartLink} <ArrowRight aria-hidden="true" /></a></div> : null}
      {!complete && items.length > 0 ? <>
        <ul className="cart-items">{items.map((item) => <li key={item.slug}><div><strong>{item.name}</strong><span>{formatPrice(item.price)} {uiText.eachUnit}</span></div><div className="quantity-controls"><button aria-label={`${uiText.decrement} ${item.name}`} onClick={() => item.quantity === 1 ? useCart.getState().remove(item.slug) : useCart.getState().change(item.slug, -1)}><Minus aria-hidden="true" /></button><span>{uiText.bagItem(item.quantity)}</span><button aria-label={`${uiText.increment} ${item.name}`} onClick={() => useCart.getState().change(item.slug, 1)}><Plus aria-hidden="true" /></button><button aria-label={uiText.removeItem(item.name)} onClick={() => useCart.getState().remove(item.slug)}><X aria-hidden="true" /></button></div></li>)}</ul>
        <form className="coupon-form" onSubmit={(event) => { event.preventDefault(); const valid = coupon.trim().toLocaleUpperCase('pt-BR') === uiText.couponCode; setCouponState(valid ? 'valid' : 'invalid') }}><label htmlFor="coupon-code">{uiText.couponLabel}</label><div><input id="coupon-code" onChange={(event) => { setCoupon(event.target.value); setCouponState('idle') }} value={coupon} /><button className="button button--outline" type="submit">{uiText.couponApply}</button></div><p aria-live="polite" className={couponState === 'invalid' ? 'coupon-message is-error' : 'coupon-message'}>{couponState === 'valid' ? uiText.couponApplied : couponState === 'invalid' ? uiText.couponInvalid : uiText.couponHint}</p></form>
        <div className="cart-total"><span>{uiText.subtotal}</span><strong>{formatPrice(subtotal)}</strong></div>{couponState === 'valid' ? <div className="cart-total cart-total--discount"><span>{uiText.discount}</span><strong>-{formatPrice(subtotal * 0.1)}</strong></div> : null}<div className="cart-total"><span>{uiText.cartTotal}</span><strong>{formatPrice(total)}</strong></div>
        <button className="button button--primary checkout-button" onClick={() => setComplete(true)} type="button">{uiText.checkout} <ArrowRight aria-hidden="true" /></button>
      </> : null}
    </div>
  </Modal>
}
