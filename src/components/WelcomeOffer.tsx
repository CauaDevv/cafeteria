import { useEffect, useState } from 'react'
import { ArrowUpRight, Coffee } from 'lucide-react'
import { Modal } from './ui/Modal'
import { welcomeContent } from '../data/siteContent'

export function WelcomeOffer() {
  const [open, setOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [choice, setChoice] = useState('')
  useEffect(() => {
    if (sessionStorage.getItem('welcome-seen')) return
    const timer = window.setTimeout(() => setOpen(true), 6500)
    return () => window.clearTimeout(timer)
  }, [])
  const close = () => { sessionStorage.setItem('welcome-seen', 'true'); setOpen(false); setDismissed(true) }
  return <>
    {dismissed && <button aria-label={welcomeContent.reopen} className="welcome-chip" onClick={() => setOpen(true)}><Coffee aria-hidden="true" /><span>{welcomeContent.chip}</span></button>}
    <Modal open={open} onClose={close} title={welcomeContent.title}>
      <div className="welcome-content"><p>{welcomeContent.eyebrow}</p><span className="welcome-cup"><Coffee aria-hidden="true" /></span><p>{welcomeContent.body}</p><div aria-label={welcomeContent.groupLabel} className="welcome-choices" role="group">{welcomeContent.choices.map((item) => <button aria-pressed={choice === item} className={choice === item ? 'is-active' : ''} key={item} onClick={() => setChoice(item)}>{item}</button>)}</div><p aria-live="polite" className="welcome-reply">{choice ? welcomeContent.selectedChoice(choice) : welcomeContent.chooseHint}</p><button className="button button--primary" onClick={close}>{welcomeContent.openHome} <ArrowUpRight aria-hidden="true" /></button><button className="welcome-dismiss" onClick={close}>{welcomeContent.close}</button></div>
    </Modal>
  </>
}
