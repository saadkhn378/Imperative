"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Import icons from assets/icon
import BankIcon from "../../assets/icons/BFSI.svg"
import TruckIcon from "../../assets/icons/logistics-icon.svg"
import CogIcon from "../../assets/icons/data-icon.svg"

// React Functional Component Export (rfce)
function Systeminte() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("data-centre")

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  // Image data for each tab
  const tabImages = {
    "data-centre": {
      main: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      secondary: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2074&auto=format&fit=crop",
      small1: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      small2: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      title: "Data Centre Solutions",
      subtitle: "Purpose-Built Infrastructure That Powers Your Growth",
      secondaryTitle: "Hardware Design & Supply",
      secondaryDesc: "Tailored IT infra setup using OEM-grade server, storage, and networking systems.",
      small1Title: "Co-Location Services",
      small1Desc: "Run business-critical apps securely in managed, high-availability hosting environments.",
      small2Title: "Cloud Solutions",
      small2Desc: "Launch and scale enterprise-grade hybrid and public cloud ecosystems with ease.",
    },
    platforms: {
      main: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      secondary: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop",
      small1: "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop",
      small2: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
      title: "Enterprise Platforms",
      subtitle: "Scalable Software Solutions for Business Growth",
      secondaryTitle: "ERP Implementation",
      secondaryDesc: "End-to-end enterprise resource planning solutions with seamless integration.",
      small1Title: "CRM Systems",
      small1Desc: "Customer relationship management platforms that drive engagement and sales.",
      small2Title: "Analytics Dashboards",
      small2Desc: "Real-time business intelligence tools for data-driven decision making.",
    },
    "smart-city": {
      main: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2064&auto=format&fit=crop",
      secondary: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2027&auto=format&fit=crop",
      small1: "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?q=80&w=2051&auto=format&fit=crop",
      small2: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=2070&auto=format&fit=crop",
      title: "Smart City Solutions",
      subtitle: "Intelligent Urban Infrastructure for Modern Cities",
      secondaryTitle: "Surveillance Systems",
      secondaryDesc: "AI-powered monitoring solutions for enhanced public safety and security.",
      small1Title: "Traffic Management",
      small1Desc: "Intelligent traffic control systems that reduce congestion and improve flow.",
      small2Title: "Smart Utilities",
      small2Desc: "IoT-enabled utility management for water, electricity, and waste optimization.",
    },
  }

  // Custom Tab component
  const Tabs = ({ defaultValue, className, value, onValueChange, children }) => {
    return <div className={className}>{children}</div>
  }

  const TabsList = ({ className, children }) => {
    return <div className={className}>{children}</div>
  }

  const TabsTrigger = ({ value, className, children }) => {
    const isActive = value === activeTab
    const activeClass = isActive ? "text-orange-500 border-b-2 border-orange-500" : ""

    return (
      <button className={`${className} ${activeClass}`} onClick={() => setActiveTab(value)}>
        {children}
      </button>
    )
  }

  return (
    <main className="font-met flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
          alt="Smart infrastructure background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          style={{ objectFit: "cover" }}
        />
        <motion.div
          className="absolute inset-0 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                SMART INFRASTRUCTURE. POWERFUL PARTNERSHIPS. SCALABLE IMPACT.
              </h1>
              <p className="text-gray-200 max-w-[600px]">
                From AI-driven surveillance to cloud-first data centers and ERP ecosystems—Imperative integrates
                top-tier OEM and software solutions that power mission-critical operations.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <button className="mt-4 bg-transparent text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded-2xl">
                  KNOW MORE
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              className="hidden md:flex justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trends Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 relative">
              EMERGING INDUSTRY TRENDS IN SMART INFRA
              <motion.span
                className="block h-1 w-24 bg-orange-500 mx-auto mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {/* Top Row - Three-column grid for infrastructure innovation */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* AI-Led Surveillance */}
              <motion.div
                className="relative overflow-hidden rounded-lg h-64"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                  alt="AI surveillance"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-start">
                  <h3 className="font-bold text-lg mb-2 text-white">AI-Led Surveillance</h3>
                  <p className="text-sm text-gray-200">
                    Public safety systems are adopting facial recognition and behavior analytics at scale.
                  </p>
                </div>
              </motion.div>

              {/* Cloud-First Infra */}
              <motion.div
                className="relative overflow-hidden rounded-lg h-64"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
                  alt="Cloud infrastructure"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-start">
                  <h3 className="font-bold text-lg mb-2 text-white">Cloud-First Infra</h3>
                  <p className="text-sm text-gray-200">
                    Government and enterprise ERPs are moving to secure, scalable cloud platforms.
                  </p>
                </div>
              </motion.div>

              {/* Drone Intelligence */}
              <motion.div
                className="relative overflow-hidden rounded-lg h-64"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=2070&auto=format&fit=crop"
                  alt="Drone technology"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-start">
                  <h3 className="font-bold text-lg mb-2 text-white">Drone Intelligence</h3>
                  <p className="text-sm text-gray-200">
                    Logistics, agriculture, and site profiles are leveraging drone data for decision-making.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Row - Two horizontally stretched cards for foundational platforms and energy efficiency */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Sustainable Infra */}
              <motion.div
                className="relative overflow-hidden rounded-lg h-64"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                  alt="Sustainable infrastructure"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-start">
                  <h3 className="font-bold text-lg mb-2 text-white">Sustainable Infra</h3>
                  <p className="text-sm text-gray-200">
                    Solar-powered smart hubs and green data centers are leading energy-efficient transformation.
                  </p>
                </div>
              </motion.div>

              {/* Platform-as-a-Service */}
              <motion.div
                className="relative overflow-hidden rounded-lg h-64"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop"
                  alt="PaaS technology"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-start">
                  <h3 className="font-bold text-lg mb-2 text-white">Platform-as-a-Service (PaaS)</h3>
                  <p className="text-sm text-gray-200">
                    ERP, CRM, and CRM tools are moving to low-maintenance subscription models.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Solutions Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">TRUSTED SOLUTIONS. TAILORED DEPLOYMENTS.</h2>
            <p className="text-gray-600 mt-2">
              End-to-end OEM products and smart infrastructure services built for scale and performance.
            </p>
            <motion.div
              className="h-1 w-full max-w-3xl mx-auto bg-orange-500 mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </motion.div>

          {/* Solution Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Tabs
              defaultValue="data-centre"
              className="w-full mb-8"
              value={activeTab}
              onValueChange={(value) => setActiveTab(value)}
            >
              <TabsList className="w-full flex justify-center gap-4 bg-transparent h-auto p-0">
                <TabsTrigger value="data-centre" className="rounded-none px-2 py-2">
                  Resilient Data Centre Solutions
                </TabsTrigger>
                <TabsTrigger value="platforms" className="rounded-none px-2 py-2">
                  Packaged Platforms That Perform
                </TabsTrigger>
                <TabsTrigger value="smart-city" className="rounded-none px-2 py-2">
                  Smart City & Public Infra Solutions
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data Centre Solutions - Large Left Card */}
            <div className="relative overflow-hidden rounded-lg h-[500px] md:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "-main"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={tabImages[activeTab].main || ""}
                    alt={tabImages[activeTab].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 p-6 flex flex-col justify-start">
                    <motion.h3
                      className="font-bold text-2xl mb-2 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {tabImages[activeTab].title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {tabImages[activeTab].subtitle}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Stacked Cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Hardware Design & Supply */}
              <div className="relative overflow-hidden rounded-lg h-64">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab + "-secondary"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={tabImages[activeTab].secondary || ""}
                      alt={tabImages[activeTab].secondaryTitle}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 p-6 flex flex-col justify-start">
                      <motion.h3
                        className="font-bold text-xl mb-2 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {tabImages[activeTab].secondaryTitle}
                      </motion.h3>
                      <motion.p
                        className="text-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {tabImages[activeTab].secondaryDesc}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Two Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Co-Location Services */}
                <div className="relative overflow-hidden rounded-lg h-64">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab + "-small1"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={tabImages[activeTab].small1 || ""}
                        alt={tabImages[activeTab].small1Title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-start">
                        <motion.h3
                          className="font-bold text-lg mb-2 text-white"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          {tabImages[activeTab].small1Title}
                        </motion.h3>
                        <motion.p
                          className="text-sm text-gray-200"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          {tabImages[activeTab].small1Desc}
                        </motion.p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Cloud Solutions */}
                <div className="relative overflow-hidden rounded-lg h-64">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab + "-small2"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={tabImages[activeTab].small2 || ""}
                        alt={tabImages[activeTab].small2Title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-start">
                        <motion.h3
                          className="font-bold text-lg mb-2 text-white"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          {tabImages[activeTab].small2Title}
                        </motion.h3>
                        <motion.p
                          className="text-sm text-gray-200"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          {tabImages[activeTab].small2Desc}
                        </motion.p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-28 bg-gray-50 mt-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">BENEFITS OF CHOOSING IMPERATIVE IT</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-lg">
              Proactive protection, expert insights, and security that grows with your business.
            </p>
          </motion.div>

          <motion.div
            className="w-full h-1 bg-orange-500 mx-auto mb-16 max-w-3xl"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Tall card on the left */}
            <div className="col-span-1 md:col-span-4 md:row-span-2">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-auto md:h-[650px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  y: -5,
                }}
              >
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">ENTERPRISE-GRADE SECURITY</h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    Fully compliant with ISO 27001, SOC 2, and industry-specific security standards.
                  </p>
                </div>
                <div className="relative h-[320px] md:flex-1">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                    alt="Network security visualization"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Two standard cards in the center and right */}
            <div className="col-span-1 md:col-span-4">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-[320px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  y: -5,
                }}
              >
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">SEAMLESS INTEGRATION</h3>
                  <p className="text-gray-700 text-lg">
                    Compatible with all major ERP, CRM, and enterprise management systems.
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
                    alt="Data center integration"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="col-span-1 md:col-span-4">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-[320px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  y: -5,
                }}
              >
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">SCALABLE DEPLOYMENT</h3>
                  <p className="text-gray-700 text-lg">
                    Easily deployable across multiple locations and enterprise environments.
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                    alt="Server deployment"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Wide horizontal card at the bottom right */}
            <div className="col-span-1 md:col-span-8 md:col-start-5">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden h-[320px] relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  y: -5,
                }}
              >
                <div className="p-10 relative z-10 md:max-w-[55%]">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">24/7 EXPERT SUPPORT</h3>
                  <p className="text-gray-700 text-lg">
                    Round-the-clock technical assistance with dedicated account managers for enterprise clients.
                  </p>
                </div>
                <div className="absolute right-0 top-0 w-[45%] h-full hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                    alt="IT support team"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 border-b border-orange-500 pb-4 inline-block">CLIENT USE CASES</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Public Sector Bank */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className="text-orange-500 mr-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <img src={BankIcon || "/placeholder.svg"} alt="Bank Icon" width={40} height={40} />
                </motion.div>
                <h3 className="text-xl font-bold">Public Sector Bank</h3>
              </div>
              <motion.div
                className="border-t border-gray-200 pt-4"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="font-medium text-gray-800 mb-2">CBS Implementation & AMC</p>
                <p className="text-gray-600">50% faster onboarding, 2X system uptime</p>
              </motion.div>
            </motion.div>

            {/* Logistics Startup */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className="text-orange-500 mr-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <img src={TruckIcon || "/placeholder.svg"} alt="Truck Icon" width={40} height={40} />
                </motion.div>
                <h3 className="text-xl font-bold">Logistics Startup</h3>
              </div>
              <motion.div
                className="border-t border-gray-200 pt-4"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="font-medium text-gray-800 mb-2">Drone + IoT for Inventory</p>
                <p className="text-gray-600">Real-time location, 20% increase in delivery accuracy</p>
              </motion.div>
            </motion.div>

            {/* Smart City Program */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className="text-orange-500 mr-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <img src={CogIcon || "/placeholder.svg"} alt="Cog Icon" width={40} height={40} />
                </motion.div>
                <h3 className="text-xl font-bold">Smart City Program</h3>
              </div>
              <motion.div
                className="border-t border-gray-200 pt-4"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <p className="font-medium text-gray-800 mb-2">Surveillance Command Centre</p>
                <p className="text-gray-600">24/7 AI-driven threat alerts and zone tracking</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Systeminte;