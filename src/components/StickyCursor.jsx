"use client"

import { useState, useEffect, useRef } from "react"

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", setFromEvent)

    return () => {
      window.removeEventListener("mousemove", setFromEvent)
    }
  }, [])

  return position
}

const StickyCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const mousePosition = useMousePosition()
  const animationRef = useRef(null)

  // Animation with improved smoothness
  useEffect(() => {
    const moveCursor = () => {
      setCursorPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.08,
        y: prev.y + (mousePosition.y - prev.y) * 0.08,
      }))
      animationRef.current = requestAnimationFrame(moveCursor)
    }

    animationRef.current = requestAnimationFrame(moveCursor)
    return () => cancelAnimationFrame(animationRef.current)
  }, [mousePosition])

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = "none"
    
    const style = document.createElement("style")
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.body.style.cursor = ""
      document.head.removeChild(style)
    }
  }, [])

  // Handle hover states
  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.querySelectorAll("a, button, div, span, input, textarea").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.querySelectorAll("a, button, div, span, input, textarea").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        left: cursorPosition.x,
        top: cursorPosition.y,
        width: isHovering ? "32px" : "20px", // Grow on hover
        height: isHovering ? "32px" : "20px", // Grow on hover
        borderRadius: "50%",
        backgroundColor: isHovering ? "transparent" : "orange",
        border: isHovering ? "2px solid orange" : "none",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "width 0.3s ease, height 0.3s ease, background-color 0.2s, border 0.2s, transform 0.08s ease-out",
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}

export default StickyCursor;

