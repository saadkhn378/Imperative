import React, { useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'

// Import all SVG icons
import bfsiIcon from '../assets/icons/BFSI.svg'
import healthcareIcon from '../assets/icons/healthcare-icon.svg'
import educationIcon from '../assets/icons/education-icon.svg'
import telecomIcon from '../assets/icons/telecom-icon.svg'
import retailIcon from '../assets/icons/retail-icon.svg'
import governmentIcon from '../assets/icons/government-icon.svg'
import mediaIcon from '../assets/icons/media-icon.svg'
import logisticsIcon from '../assets/icons/logistics-icon.svg'
import travelIcon from '../assets/icons/travel-icon.svg'

function IndustriesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -200px 0px" // Trigger earlier for smoother experience
  })
  
  const industries = [
    {
      icon: bfsiIcon,
      title: "BFSI",
      description: "Secure and intelligent credit processing, onboarding & reconciliation platforms.",
    },
    {
      icon: healthcareIcon,
      title: "Healthcare",
      description: "Back-office automation, patient records, telemedicine integration, billing & diagnostics.",
    },
    {
      icon: educationIcon,
      title: "Education Management",
      description: "Digital learning platforms, smart ID kiosks, and automation in exams & operations.",
    },
    {
      icon: telecomIcon,
      title: "Telecom Services",
      description: "Customer support automation, onboarding verification, fraud detection, and compliance.",
    },
    {
      icon: retailIcon,
      title: "Retail & E-Commerce",
      description: "Smart kiosks, checkout automation, inventory intelligence, and customer engagement tools.",
    },
    {
      icon: governmentIcon,
      title: "Government & PSU",
      description: "Digital automation for public services and citizen engagement.",
    },
    {
      icon: mediaIcon,
      title: "Media & Entertainment",
      description: "OTT platforms, digital streaming support, audience analytics, and content delivery automation.",
    },
    {
      icon: logisticsIcon,
      title: "Logistics Services",
      description: "Fleet management, smart kiosks, tracking platforms, AI-driven delivery automation.",
    },
    {
      icon: travelIcon,
      title: "Travel & Hospitality",
      description: "Self-service kiosks, check-in automation, smart feedback systems, and booking engines.",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.215, 0.61, 0.355, 1] 
      }
    }
  }

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "12rem",
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1],
        delay: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.215, 0.61, 0.355, 1],
        delay: 0.2 + i * 0.08 
      }
    }),
    hover: { 
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 0.1 
      }
    },
    hover: { 
      rotate: [0, -10, 10, -5, 0],
      scale: 1.1,
      transition: { 
        duration: 0.5,
        ease: "easeInOut" 
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        delay: 0.3 + i * 0.08
      }
    })
  }

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: i => ({ 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.4 + i * 0.08
      }
    })
  }

  return (
    <motion.div 
      ref={sectionRef}
      className="font-met py-16 px-4 md:px-6 lg:px-8 bg-white overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.h2 
            className="text-3xl font-bold relative inline-block"
            variants={headingVariants}
          >
            INDUSTRIES WE SERVE
            <motion.span 
              className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 h-[2px] bg-orange-500"
              variants={underlineVariants}
              style={{ originX: 0.5 }}
            ></motion.span>
          </motion.h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 p-8 rounded-sm flex flex-col items-start"
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div 
                  className="mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <motion.img
                    src={industry.icon}
                    alt={`${industry.title} icon`}
                    width={48}
                    height={48}
                    className="text-orange-500"
                  />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-3"
                  custom={index}
                  variants={titleVariants}
                >
                  {industry.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-700 text-sm"
                  custom={index}
                  variants={descriptionVariants}
                >
                  {industry.description}
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default IndustriesSection