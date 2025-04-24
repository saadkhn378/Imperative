"use client"

import { useEffect, useState } from "react"

export default function GroupCompani() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set isLoaded to true after component mounts
    // Small timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="font-met flex flex-col min-h-screen">
      {/* Header with transition */}
      <div
        className="text-center py-6 mb-8 transition-all duration-1000 ease-in-out"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block">
          IMPERATIVES GROUP COMPANIES
          <div
            className="h-[2px] bg-amber-400/70 mt-2 transition-all duration-1000 ease-in-out"
            style={{
              width: isLoaded ? "100%" : "0%",
              opacity: isLoaded ? 1 : 0,
            }}
          ></div>
        </h1>
      </div>

      {/* Image with transition */}
      <div
        className="flex-1 w-full transition-all duration-1000 ease-in-out"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/com-8yc9XP0UIcyfWgLApycmNOOHG4kSpo.png"
          alt="Imperatives Group Companies Infographic"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}
