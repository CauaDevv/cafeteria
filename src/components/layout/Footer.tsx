import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../../config/site'
import { footerGroups } from '../../data/siteContent'
import { uiText } from '../../data/siteContent'

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-top"><div className="footer-brand"><Link aria-label={`${site.name}, início`} className="brand" to="/"><span aria-hidden="true" className="brand-mark">✳</span><span className="brand-name">{site.name}</span></Link><p>{site.tagline}</p></div>
      {footerGroups.map((group, index) => <div className="footer-group" key={group.title}><h2>{index === 0 ? uiText.footerGroup1 : uiText.footerGroup2}</h2>{group.links.map((link) => <Link key={link.label} to={link.to}>{link.label}</Link>)}</div>)}
      <div className="footer-note"><span>{uiText.footerInviteLabel}</span><p>{uiText.footerInvite}</p><Link to="/unidades">{uiText.footerLocation} <ArrowUpRight aria-hidden="true" /></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}. {uiText.footerCopyright}</span><span>{uiText.footerSignoff}</span></div>
  </footer>
}
