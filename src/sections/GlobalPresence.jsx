"use client"

import { useEffect, useState } from "react"

export default function GlobalPresence() {
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
        className="text-center py-6 mt-10 mb-2 transition-all duration-1000 ease-in-out"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block">
          IMPERATIVES GLOBAL PRESENCE
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
          src="https://s3-alpha-sig.figma.com/img/94ad/9564/b3b7d6da2246d5518b7e884020648354?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XSxgOq-1F0qWydC-Pq6S2KEmUTyj1VSq54ZocyXBKGwfdXheKMJU1U2f81vwMW8Jp22MmUYL1Tn-lNS9STrvIMz1bPOrGoQpCdNsj-JcMux2PP78IxTYTUzUeaEpyYoFVV0gHifZXKePM~iHfXTVFHOBAbfxIhGDFvrqBSOQag2kgamT0RXQY1mfICf8NxIb8paUy4GWH2Z7gkE00L6Tn62OFj3vTiGzqDX8LWWSNtznUhDbDn-fwABTQkXdHsIAV4tv~cOoLREo8csmDj1-VcOJJVtKYmTgA08hPaBJBMrtT6fXY8oTkCvZBKl1UPaXb1MDvEovXpJkICzEh~g3iw__"
          alt="Imperatives Group Companies Infographic"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}
