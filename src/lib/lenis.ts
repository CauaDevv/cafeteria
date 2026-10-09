import Lenis from 'lenis'

export function createPageScroll(reducedMotion: boolean) {
  if (reducedMotion) return () => undefined

  const lenis = new Lenis({ lerp: 0.07, smoothWheel: true })
  let frame = 0
  const tick = (time: number) => {
    lenis.raf(time)
    frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)

  return () => {
    cancelAnimationFrame(frame)
    lenis.destroy()
  }
}
