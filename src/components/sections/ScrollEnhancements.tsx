import { useEffect } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function ScrollEnhancements() {
  const reduced = useReducedMotion()
  useEffect(() => {
    if (reduced || !window.matchMedia('(min-width: 1100px)').matches) return
    let context: { revert: () => void } | undefined
    let cancelled = false
    void import('gsap').then(async ({ gsap }) => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      const track = document.querySelector<HTMLElement>('.timeline-track')
      const section = document.querySelector<HTMLElement>('.timeline-section')
      if (!track || !section || track.scrollWidth <= track.clientWidth) return
      track.style.gridAutoColumns = 'minmax(16rem, 22vw)'
      const head = section.querySelector<HTMLElement>('.timeline-head')
      if (head) head.style.flex = '0 0 27rem'
      section.style.minHeight = '100svh'
      section.style.alignContent = 'center'
      context = gsap.context(() => {
        gsap.to(track, { x: () => -(track.scrollWidth - section.clientWidth + 40), ease: 'none', scrollTrigger: { trigger: section, start: 'top top', end: () => `+=${track.scrollWidth - section.clientWidth + 40}`, pin: true, scrub: 0.7, invalidateOnRefresh: true, onUpdate: (self) => { const bar = section.querySelector<HTMLElement>('.timeline-progress span'); if (bar) bar.style.transform = `scaleX(${self.progress})` } } })
      }, section)
    })
    return () => { cancelled = true; context?.revert(); const track = document.querySelector<HTMLElement>('.timeline-track'); const section = document.querySelector<HTMLElement>('.timeline-section'); const head = section?.querySelector<HTMLElement>('.timeline-head'); if (track) track.style.gridAutoColumns = ''; if (head) head.style.flex = ''; if (section) { section.style.minHeight = ''; section.style.alignContent = '' } }
  }, [reduced])
  return null
}
