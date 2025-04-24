"use client"

import { useState, useEffect, useRef } from "react"

export function useInView(options = { threshold: 0.1 }) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Once it's in view, keep it that way to maintain the animation state
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    }, options)

    const currentElement = ref.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [options])

  return { ref, isInView }
}
