import { timeline } from '../../data/timeline'
import { timelineContent } from '../../data/home'
import { SectionLabel } from '../ui/SectionLabel'
import { uiText } from '../../data/siteContent'

export function Timeline() {
  return <section aria-label={timelineContent.ariaLabel} className="timeline-section section-pad" id="historia"><div className="timeline-head"><SectionLabel number={timelineContent.number}>{timelineContent.label}</SectionLabel><h2>{timelineContent.heading}</h2><p>{timelineContent.description}</p></div><div className="timeline-track">{timeline.map((entry, index) => <article className="timeline-card" key={entry.year}><span className="timeline-node">{uiText.timelineIndex(index)}</span><span className="timeline-year">{entry.year}</span><div aria-hidden="true" className={`timeline-art timeline-art--${index + 1}`}><span>✳</span></div><h3>{entry.title}</h3><p>{entry.text}</p></article>)}</div><div aria-hidden="true" className="timeline-progress"><span /></div></section>
}
