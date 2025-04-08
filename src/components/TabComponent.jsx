"use client"

import { motion } from "framer-motion"
import { useMediaQuery } from "../hooks/useMediaQuery"

const TabComponent = ({ activeTab, setActiveTab }) => {
  const isMobile = useMediaQuery("(max-width: 640px)")

  return (
    <div className="font-met flex justify-center mb-6 sm:mb-8">
      <div
        className={`grid w-full ${isMobile ? "max-w-full px-2" : "max-w-md"} grid-cols-2 bg-slate-100 rounded-lg p-1`}
      >
        <TabButton
          isActive={activeTab === "business"}
          onClick={() => setActiveTab("business")}
          label={isMobile ? "Business" : "Business Process & Automation"}
        />
        <TabButton
          isActive={activeTab === "it"}
          onClick={() => setActiveTab("it")}
          label={isMobile ? "IT Services" : "IT Services & Infrastructure"}
        />
      </div>
    </div>
  )
}

const TabButton = ({ isActive, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
        isActive ? "text-white" : "text-slate-700 hover:text-slate-900"
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-orange-600 rounded-md"
          initial={false}
          transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  )
}

export default TabComponent

