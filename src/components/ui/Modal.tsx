import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { uiText } from '../../data/siteContent'

export function Modal({ open, onClose, title, children, labelledBy }: { open: boolean; onClose: () => void; title: string; children: ReactNode; labelledBy?: string }) {
  const dialog = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const focusable = () => dialog.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    focusable()?.[0]?.focus()
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        const items = focusable()
        if (!items?.length) return
        if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items[items.length - 1].focus() }
        else if (!event.shiftKey && document.activeElement === items[items.length - 1]) { event.preventDefault(); items[0].focus() }
      }
    }
    document.addEventListener('keydown', keydown)
    return () => { document.removeEventListener('keydown', keydown); previous?.focus() }
  }, [open, onClose])
  if (!open) return null
  return <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <div aria-labelledby={labelledBy ?? 'modal-title'} aria-modal="true" className="modal-panel" ref={dialog} role="dialog">
      <button aria-label={uiText.emptyCartClose} className="icon-button modal-close" onClick={onClose}><X aria-hidden="true" /></button>
      <h2 id={labelledBy ?? 'modal-title'}>{title}</h2>{children}
    </div>
  </div>
}
