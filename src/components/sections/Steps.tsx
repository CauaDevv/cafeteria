import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { steps, stepsContent } from '../../data/home'
import { SectionLabel } from '../ui/SectionLabel'
import { uiText } from '../../data/siteContent'

export function Steps() {
  return <section className="steps-section section-pad" id="do-grao-a-xicara">
    <div className="steps-intro">
      <SectionLabel number={stepsContent.number}>{stepsContent.label}</SectionLabel>
      <h2>{stepsContent.heading}</h2>
      <p>{stepsContent.description}</p>
      <Link className="text-link" to="/nossa-historia">{stepsContent.historyLink} <ArrowUpRight aria-hidden="true" /></Link>
    </div>
    <div className="steps-layout">
      <div className="steps-list">
        {steps.map((step, index) => <article className="step-card" key={step.title}>
          <span className="step-index">{uiText.timelineIndex(index)} — {step.label}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>)}
      </div>
    </div>
  </section>
}
