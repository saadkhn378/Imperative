"use client"

import { useState, useEffect } from "react"

export function CountUp({ end, start = 0, duration = 2000, delay = 0, suffix = "", isInView }) {
  const [count, setCount] = useState(start)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView || hasAnimated) return

    let startTime
    let animationId

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const runtime = timestamp - startTime
      const relativeProgress = runtime / duration

      if (relativeProgress < 1) {
        const currentCount = Math.floor(start + (end - start) * relativeProgress)
        setCount(currentCount)
        animationId = requestAnimationFrame(animate)
      } else {
        setCount(end)
        setHasAnimated(true)
      }
    }

    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(animate)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationId)
    }
  }, [isInView, hasAnimated, start, end, duration, delay])

  return `${count}${suffix}`
}
