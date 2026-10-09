import { useEffect, useRef } from 'react'
import type MatterTypes from 'matter-js'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { site } from '../../config/site'

export function BeanPhysics() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section || reduced || window.matchMedia('(max-width: 740px)').matches) return

    let disposed = false
    let cleanup = () => undefined
    void import('matter-js').then(({ default: Matter }) => {
      if (disposed || !canvasRef.current || !sectionRef.current) return
      const engine = Matter.Engine.create()
      engine.gravity.y = 1
      const renderer = Matter.Render.create({
        canvas,
        engine,
        options: { width: 1, height: 1, wireframes: false, background: 'transparent', pixelRatio: Math.min(window.devicePixelRatio || 1, 1.5) },
      })
      const runner = Matter.Runner.create()
      const mouse = Matter.Mouse.create(canvas)
      const drag = Matter.MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.18, render: { visible: false } } })
      Matter.Composite.add(engine.world, drag)
      const colors = [site.colors.caramel, site.colors.roast, site.colors.accent]
      let floor: MatterTypes.Body | undefined
      const resize = () => {
        const bounds = section.getBoundingClientRect()
        const width = bounds.width
        const height = bounds.height
        canvas.width = width * Math.min(window.devicePixelRatio || 1, 1.5)
        canvas.height = height * Math.min(window.devicePixelRatio || 1, 1.5)
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
        renderer.options.width = width
        renderer.options.height = height
        renderer.bounds.max.x = width
        renderer.bounds.max.y = height
        if (floor) Matter.Composite.remove(engine.world, floor)
        floor = Matter.Bodies.rectangle(width / 2, height + 22, width + 80, 44, { isStatic: true, render: { fillStyle: 'transparent' } })
        Matter.Composite.add(engine.world, floor)
        Matter.Mouse.setScale(mouse, { x: 1, y: 1 })
      }
      resize()
      const bodies = Array.from({ length: 28 }, (_, index) => {
        const radius = 7 + (index % 5) * 2
        const bean = Matter.Bodies.circle(section.getBoundingClientRect().width * (0.08 + Math.random() * 0.84), -section.getBoundingClientRect().height * Math.random(), radius, {
          restitution: 0.75, friction: 0.04, frictionAir: 0.007,
          render: { fillStyle: colors[index % colors.length], strokeStyle: 'transparent' },
        })
        Matter.Body.setAngle(bean, Math.random() * Math.PI)
        return bean
      })
      Matter.Composite.add(engine.world, bodies)
      const visible = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { Matter.Runner.run(runner, engine); Matter.Render.run(renderer) }
        else { Matter.Runner.stop(runner); Matter.Render.stop(renderer) }
      }, { threshold: 0.01 })
      visible.observe(section)
      const observer = new ResizeObserver(resize)
      observer.observe(section)
      cleanup = () => {
        visible.disconnect(); observer.disconnect()
        Matter.Render.stop(renderer); Matter.Runner.stop(runner)
        Matter.Composite.clear(engine.world, false); Matter.Engine.clear(engine)
        renderer.canvas.remove()
      }
    })
    return () => { disposed = true; cleanup() }
  }, [reduced])

  if (reduced) return null
  return <section aria-hidden="true" className="bean-physics" ref={sectionRef}><canvas ref={canvasRef} /></section>
}
