"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const RecentBlog = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set isLoaded to true after a small delay to ensure the page is fully rendered
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="font-met container mx-auto px-8 md:px-16 lg:px-24 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-10 inline-block"
      >
        <motion.h2
          initial={{ y: -30 }}
          animate={isLoaded ? { y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.1,
          }}
          className="text-3xl font-bold relative inline-block"
        >
          RECENT BLOG POSTS
          <motion.span
            initial={{ width: 0 }}
            animate={isLoaded ? { width: "100%" } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-0 left-0 h-[2px] bg-orange-300"
          ></motion.span>
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
      >
        {/* Left large blog post */}
        <div className="flex flex-col h-full">
          <motion.div
            className="mb-6 flex-grow overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
              alt="Office space with desks and chairs"
              className="object-cover w-full h-[350px]"
            />
          </motion.div>
          <div>
            <div className="text-orange-500 mb-2 text-sm font-medium">Sunday, 1 Jan 2025</div>
            <h3 className="text-2xl font-bold mb-3">Streamlining Patient Onboarding with HealthBO</h3>
            <p className="text-gray-700 text-base">
              Discover how a multispeciality hospital automated OPD and billing, cutting turnaround time by 35%.
            </p>
          </div>
        </div>

        {/* Right stacked blog posts */}
        <div className="flex flex-col justify-between h-full">
          {/* First right blog post */}
          <div className="flex flex-col md:flex-row gap-5 mb-8">
            <motion.div
              className="md:w-1/2 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="People working in an office"
                className="object-cover w-full h-[170px]"
              />
            </motion.div>
            <div className="md:w-1/2">
              <div className="text-orange-500 mb-2 text-sm font-medium">Sunday, 1 Jan 2025</div>
              <h3 className="text-xl font-bold mb-2">Automating KYC & Compliance with OCR Stack</h3>
              <p className="text-gray-700 text-base">
                A major telecom player eliminated manual errors and improved KYC turnaround using Aadhaar Masking & OCR
                APIs.
              </p>
            </div>
          </div>

          {/* Second right blog post */}
          <div className="flex flex-col md:flex-row gap-5">
            <motion.div
              className="md:w-1/2 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?q=80&w=2070&auto=format&fit=crop"
                alt="Retail store interior"
                className="object-cover w-full h-[170px]"
              />
            </motion.div>
            <div className="md:w-1/2">
              <div className="text-orange-500 mb-2 text-sm font-medium">Sunday, 1 Jan 2025</div>
              <h3 className="text-xl font-bold mb-2">Driving Retail Efficiency with ImperaPOS</h3>
              <p className="text-gray-700 text-base">
                From stock management to billing, learn how retailers achieved 99% inventory accuracy using ImperaPOS.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom full-width blog post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mb-6"
      >
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="md:w-1/2 overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
              alt="Digital screen showing climate data"
              className="object-cover w-full h-[350px]"
            />
          </motion.div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="text-orange-500 mb-2 text-sm font-medium">Sunday, 1 Jan 2025</div>
            <h3 className="text-2xl font-bold mb-3">Smart Kiosk Deployment in Government Offices</h3>
            <p className="text-gray-700 text-base">
              Explore how self-service kiosks improved citizen service delivery and reduced wait times in PSU offices.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default RecentBlog
