"use client"

import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"
import { useMediaQuery } from "../hooks/useMediaQuery"

const ProductsList = ({ products, hoveredId, setHoveredId }) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [activeId, setActiveId] = useState(null)

  // Reset active card when products change or on mobile/desktop switch
  useEffect(() => {
    setActiveId(null)
  }, [products, isMobile])

  // Handle card click for mobile
  const handleCardClick = (id) => {
    if (isMobile) {
      setActiveId(activeId === id ? null : id)
    }
  }

  return (
    <div
      className={`${isMobile ? "flex flex-col space-y-2" : "flex justify-between gap-4 w-full"} mt-16 sm:mt-20 md:mt-24`}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isAnyHovered={isMobile ? activeId !== null : hoveredId !== null}
          isThisHovered={isMobile ? activeId === product.id : hoveredId === product.id}
          onHover={(hovered) => !isMobile && setHoveredId(hovered ? product.id : null)}
          onClick={() => handleCardClick(product.id)}
          isMobile={isMobile}
        />
      ))}
    </div>
  )
}

export default ProductsList
