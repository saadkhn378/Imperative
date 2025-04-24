"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Hero() {
  const [showChat, setShowChat] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set page as loaded
    setIsLoaded(true)

    // Show chat bubble after a delay
    const timer = setTimeout(() => {
      setShowChat(true)
    }, 2000) // 2 second delay

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.main
      className="font-met flex min-h-screen flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section - Image Only */}
      <motion.div
        className="relative w-full h-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Using a regular img tag for better control over aspect ratio */}
        <img
          src="https://s3-alpha-sig.figma.com/img/46c0/ec8b/e37a464c6373623c3eebc182d1e1173b?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JNRvuhBkERoRHgmVWGDccFICCv5Rk0ea4qf1SR90yWSYr8m8N23uMTY633dSh~yyUq7Aik4D0CRNHKy7goKlcs68Ifyd5vmAC~2IKcaD2iwZjw9gsMAHq0avPHYj~-Il18TWZFhnK3t4i8sKpSuLOh6AZLL1ESe0iguQJXttegAmwvDo5J79~nzU3fUKtPWcsiukQWb83DjkGM5DYhPgYe1CGyONLlFQtOfb5nXa9UM64itHPMO8jBn8KsIrWC~VFUVRArIY4ZkH0Oc8HOzazxVXniph1~qEc0Mh6Bfe0NQdnslcszzqVSEop2syPryycX75dHbzFniLR5Gx12s9WA__"
          alt="Hero image"
          className="w-full h-auto"
        />

        {/* Chat Widget */}
        <div className="absolute bottom-4 right-4 z-50">
          <AnimatePresence>
            {showChat && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Chat icon circle */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-orange-500 z-10">
                  <svg viewBox="0 0 24 24" width="16" height="16" className="text-orange-500">
                    <path
                      fill="currentColor"
                      d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"
                    />
                    <path
                      fill="currentColor"
                      d="M14 10c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-6 0c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1z"
                    />
                  </svg>
                </div>

                {/* Chat bubble */}
                <div className="bg-white p-3 pt-6 mt-4 rounded-xl shadow-lg w-[260px] border border-gray-100">
                  <div className="text-center text-gray-800 text-xs font-medium leading-tight whitespace-pre-line">
                    Have a requirement? Let's chat and find the best solution for your business.
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Company Info Section */}
      <motion.div
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-2">WE ARE</h2>
              <h3 className="text-3xl font-bold border-b-2 border-orange-500 pb-4 mb-6 inline-block">
                IMPERATIVE BUSINESS VENTURES LIMITED
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With over 14+ years of industry experience and a 1200+ strong team, Imperative has empowered 60+ clients
                through transformative solutions in IT, AI, outsourcing, and consulting. Our deep domain expertise
                across BFSI, Healthcare, Retail, and the Public Sector positions us as a trusted partner in scalable
                digital innovation.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Left side: One tall portrait image (takes full height) */}
                <motion.div className="relative h-full" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <img
                    src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Modern skyscrapers with orange element"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Right side: Two landscape images stacked vertically */}
                <div className="grid grid-rows-2 gap-4 h-90">
                  {/* Top right: Landscape image looking up at skyscrapers */}
                  <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <img
                      src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                      alt="Looking up at skyscrapers"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Bottom right: Landscape image of blue glass building */}
                  <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <img
                      src="https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      alt="Blue glass building from below"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  )
}

export default Hero
