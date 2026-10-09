import { useEffect, useRef, useState } from 'react'
import { Pause, Play, Star } from 'lucide-react'
import { reviews } from '../../data/reviews'
import { reviewsContent } from '../../data/home'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function ReviewCards({ duplicate = false }: { duplicate?: boolean }) {
  return <div aria-hidden={duplicate} className="reviews-track-group">
    {reviews.map((review) => (
      <article className="review-card" key={`${review.author}${duplicate ? '-duplicado' : ''}`}>
        <div aria-label={reviewsContent.ratingLabel} className="review-stars" role="img">{Array.from({ length: 5 }, (_, index) => <Star aria-hidden="true" fill="currentColor" key={index} />)}</div>
        <blockquote>{reviewsContent.openQuote}{review.quote}{reviewsContent.closeQuote}</blockquote>
        <p>{review.author}<span>{review.detail}</span></p>
      </article>
    ))}
  </div>
}

export function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const isMoving = isVisible && !isPaused && !reducedMotion

  return <section className="reviews-section" id="depoimentos" ref={sectionRef}>
    <div className="reviews-heading">
      <div><p className="section-label">{reviewsContent.label}</p><h2>{reviewsContent.heading}</h2></div>
      <button aria-label={isPaused ? reviewsContent.resumeLabel : reviewsContent.pauseLabel} aria-pressed={isPaused} className="reviews-motion-toggle" disabled={reducedMotion} onClick={() => setIsPaused((paused) => !paused)} type="button">
        {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      </button>
    </div>
    <div aria-label={reviewsContent.trackLabel} className={`reviews-marquee${isMoving ? ' is-moving' : ''}${reducedMotion ? ' is-static' : ''}`} role="region" tabIndex={0}>
      <div className="reviews-track">
        <ReviewCards />
        <ReviewCards duplicate />
      </div>
    </div>
    <span aria-hidden="true" className="reviews-side-note">{reviewsContent.sideNote}</span>
  </section>
}
