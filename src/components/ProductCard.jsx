"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { gsap } from "gsap"

const ProductCard = ({ product, isAnyHovered, isThisHovered, onHover, onClick, isMobile }) => {
  const cardRef = useRef(null)
  const expandedRef = useRef(null)
  const imageRef = useRef(null)
  const controls = useAnimation()

  // GSAP animation for the base card
  useEffect(() => {
    if (cardRef.current) {
      if (isMobile) {
        // Mobile animation
        gsap.to(cardRef.current, {
          backgroundColor: isThisHovered ? "#000000" : "#ffffff",
          color: isThisHovered ? "#ffffff" : "#000000",
          duration: 0.3,
          ease: "power2.out",
        })
      } else {
        // Desktop animation
        gsap.to(cardRef.current, {
          width: isThisHovered ? 150 : "100%",
          backgroundColor: isThisHovered ? "#000000" : "#ffffff",
          color: isThisHovered ? "#ffffff" : "#000000",
          duration: 0.3,
          ease: "power2.out",
        })
      }
    }
  }, [isThisHovered, isMobile])

  // Width animation based on hover state (desktop only)
  useEffect(() => {
    if (!isMobile) {
      controls.start({
        width: isAnyHovered ? (isThisHovered ? "40%" : "20%") : "25%",
        transition: { duration: 0.3, ease: "easeInOut" },
      })
    }
  }, [isAnyHovered, isThisHovered, controls, isMobile])

  // Advanced image animation when hovered/active
  useEffect(() => {
    if (imageRef.current && isThisHovered) {
      // Reset animation first
      gsap.set(imageRef.current, { scale: 1.2, opacity: 0, y: 20 })

      // Create timeline for sequential animations
      const tl = gsap.timeline()

      tl.to(imageRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      }).to(
        imageRef.current,
        {
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.2",
      )

      // Add subtle continuous movement
      gsap.to(imageRef.current, {
        y: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }
  }, [isThisHovered])

  // Mobile layout
  if (isMobile) {
    return (
      <div className="w-full mb-4">
        {/* Base card - always visible and touchable */}
        <div
          ref={cardRef}
          className={`p-4 sm:p-6 rounded-lg border border-slate-200 shadow-sm cursor-pointer transition-colors duration-300 ${
            isThisHovered ? "rounded-b-none" : ""
          }`}
          onClick={onClick}
        >
          <div className="flex items-center">
            <div className="w-full">
              <h3 className="text-lg sm:text-xl font-semibold leading-tight">{product.name}</h3>
              <p className={`text-xs sm:text-sm mt-1 ${isThisHovered ? "text-gray-300" : "text-slate-500"}`}>
                {product.shortDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Expanded content - slides down on mobile */}
        <motion.div
          className="overflow-hidden rounded-b-lg border-x border-b border-slate-200 shadow-lg bg-black"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isThisHovered ? 250 : 0,
            opacity: isThisHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="relative h-[250px] w-full overflow-hidden">
            {/* Image container */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div ref={imageRef} className="w-full h-full relative opacity-0">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Product name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h2 className="text-xl sm:text-2xl font-bold">{product.name}</h2>
                </div>
              </div>
            </div>

            {/* Animated particles overlay for visual interest */}
            {isThisHovered && <ParticlesOverlay />}
          </div>
        </motion.div>
      </div>
    )
  }

  // Desktop layout
  return (
    <motion.div
      className="relative h-[300px]"
      animate={controls}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="flex relative h-full">
        {/* Base card - always visible */}
        <div
          ref={cardRef}
          className="h-full p-6 z-10 relative rounded-lg border border-slate-200 shadow-sm transition-colors duration-300"
        >
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-semibold leading-tight">{product.name}</h3>
            <p className={`text-sm mt-auto ${isThisHovered ? "text-gray-300" : "text-slate-500"}`}>
              {product.shortDesc}
            </p>
          </div>
        </div>

        {/* Expanded content with cool image animation */}
        <motion.div
          ref={expandedRef}
          className="absolute overflow-hidden rounded-lg border border-slate-200 shadow-lg bg-black"
          initial={{
            left: 140,
            opacity: 0,
            width: 0,
            height: "300px",
            top: "0px",
          }}
          animate={{
            left: 140,
            opacity: isThisHovered ? 1 : 0,
            width: isThisHovered ? "calc(100% - 130px)" : 0,
            height: isThisHovered ? "360px" : "300px", // Increase height
            top: isThisHovered ? "-30px" : "0px", // Move up to grow from both directions
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="relative h-full w-full overflow-hidden">
            {/* Image container with parallax effect */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div ref={imageRef} className="w-full h-full relative opacity-0">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Product name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold">{product.name}</h2>
                </div>
              </div>
            </div>

            {/* Animated particles overlay for visual interest */}
            {isThisHovered && <ParticlesOverlay />}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Animated particles component for visual flair
const ParticlesOverlay = () => {
  const particlesRef = useRef(null)

  useEffect(() => {
    const particles = []
    const numParticles = 15
    const container = particlesRef.current

    if (!container) return

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full bg-white/20 pointer-events-none"

      // Random size between 3px and 8px
      const size = Math.random() * 5 + 3
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      // Random starting position
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      container.appendChild(particle)
      particles.push(particle)

      // Animate each particle
      gsap.to(particle, {
        x: `${(Math.random() - 0.5) * 100}`,
        y: `${(Math.random() - 0.5) * 100}`,
        opacity: 0,
        duration: 2 + Math.random() * 3,
        ease: "power1.out",
        onComplete: () => {
          if (container && container.contains(particle)) {
            container.removeChild(particle)
          }
        },
      })
    }

    return () => {
      particles.forEach((particle) => {
        if (container && container.contains(particle)) {
          container.removeChild(particle)
        }
      })
    }
  }, [])

  return <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10" />
}

export default ProductCard
