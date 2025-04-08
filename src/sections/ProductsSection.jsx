"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { businessProducts, itServices } from "../data/productsData"
import TabComponent from "../components/TabComponent"
import ProductsList from "../components/ProductsList"

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("business")
  const [hoveredId, setHoveredId] = useState(null)

  // Reset hovered state when changing tabs
  useEffect(() => {
    setHoveredId(null)
  }, [activeTab])

  return (
    <>
      <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "business" ? (
            <ProductsList products={businessProducts} hoveredId={hoveredId} setHoveredId={setHoveredId} />
          ) : (
            <ProductsList products={itServices} hoveredId={hoveredId} setHoveredId={setHoveredId} />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default ProductsSection

