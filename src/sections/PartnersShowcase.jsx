"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"

function PartnersShowcase() {
  const [activeTab, setActiveTab] = useState("TRUSTED BY")
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Refs for each swiper instance
  const swiperRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  // List of real companies for logo generation
  const companies = [
    // Tech
    { name: "Apple", domain: "apple.com" },
    { name: "Google", domain: "google.com" },
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Meta", domain: "meta.com" },
    { name: "Netflix", domain: "netflix.com" },
    { name: "Tesla", domain: "tesla.com" },
    { name: "IBM", domain: "ibm.com" },
    { name: "Intel", domain: "intel.com" },
    { name: "Oracle", domain: "oracle.com" },
    // Finance
    { name: "JPMorgan Chase", domain: "jpmorganchase.com" },
    { name: "Bank of America", domain: "bankofamerica.com" },
    { name: "Wells Fargo", domain: "wellsfargo.com" },
    { name: "Citigroup", domain: "citigroup.com" },
    { name: "Goldman Sachs", domain: "goldmansachs.com" },
    // Retail
    { name: "Walmart", domain: "walmart.com" },
    { name: "Target", domain: "target.com" },
    { name: "Costco", domain: "costco.com" },
    { name: "Home Depot", domain: "homedepot.com" },
    { name: "Lowe's", domain: "lowes.com" },
    // Media
    { name: "Disney", domain: "disney.com" },
    { name: "Comcast", domain: "comcast.com" },
    { name: "AT&T", domain: "att.com" },
    { name: "Verizon", domain: "verizon.com" },
    { name: "T-Mobile", domain: "t-mobile.com" },
    // Other
    { name: "General Electric", domain: "ge.com" },
    { name: "Johnson & Johnson", domain: "jnj.com" },
    { name: "Procter & Gamble", domain: "pg.com" },
    { name: "Coca-Cola", domain: "coca-cola.com" },
    { name: "PepsiCo", domain: "pepsico.com" },
  ]

  // Check for mobile/tablet on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const tabs = ["TRUSTED BY", "PARTNERS", "MEMBERS", "EMPANELED FINTECH WITH", "EMPANELED VENDER WITH"]

  // Function to get a random subset of companies
  const getRandomCompanies = (count) => {
    const shuffled = [...companies].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  // Function to generate a logo URL
  const getLogoUrl = (company) => {
    return `https://logo.clearbit.com/${company.domain}`
  }

  // Generate logos for each row
  const getLogos = (count) => {
    return getRandomCompanies(count).map((company) => ({
      name: company.name,
      src: getLogoUrl(company),
    }))
  }

  // Generate 4 rows of logos
  const row1Logos = getLogos(8)
  const row2Logos = getLogos(8)
  const row3Logos = getLogos(8)
  const row4Logos = getLogos(8)

  // Animation variants for tab content transitions
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  }

  // Animation variants for individual rows
  const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
    },
  }

  // Handle image loading errors
  const handleImageError = (event) => {
    const target = event.target
    const name = target.alt || "Company"
    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name,
    )}&background=random&color=fff&size=128&bold=true&format=svg`
  }

  // Calculate logo card dimensions based on screen size
  const getCardDimensions = () => {
    if (isMobile) {
      return {
        width: "90px",
        height: "50px",
        padding: "p-2",
        imageSize: 70,
      }
    }
    if (isTablet) {
      return {
        width: "110px",
        height: "60px",
        padding: "p-3",
        imageSize: 90,
      }
    }
    return {
      width: "140px",
      height: "70px",
      padding: "p-4",
      imageSize: 120,
    }
  }

  const cardDimensions = getCardDimensions()

  // Swiper settings for each row
  const getSwiperSettings = (index) => {
    const baseSpeed = isMobile ? 3000 : isTablet ? 4000 : 5000
    // Alternate direction and slightly vary speed for each row
    return {
      modules: [Autoplay],
      slidesPerView: "auto",
      loop: true,
      freeMode: true,
      spaceBetween: isMobile ? 12 : 24,
      speed: baseSpeed + index * 500,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: index % 2 === 1, // Alternate direction
      },
      allowTouchMove: false, // Disable touch/drag
    }
  }

  // Create logo slide
  const createLogoSlide = (logo, index, rowIndex) => (
    <SwiperSlide key={`row${rowIndex}-${index}`} style={{ width: "auto" }}>
      <div
        className={`flex-shrink-0 flex items-center justify-center bg-white rounded-md ${cardDimensions.padding} shadow-sm hover:shadow-md transition-shadow`}
        style={{
          width: cardDimensions.width,
          height: cardDimensions.height,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center group">
          <img
            src={logo.src || "/placeholder.svg"}
            alt={logo.name}
            style={{
              maxHeight: "100%",
              width: "auto",
              maxWidth: cardDimensions.imageSize,
              height: cardDimensions.imageSize / 2,
              objectFit: "contain",
              transition: "transform 0.3s",
            }}
            className="group-hover:scale-110"
            onError={handleImageError}
          />
          {!isMobile && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/70 rounded-md flex items-center justify-center transition-opacity duration-300">
              <p className="text-white text-xs text-center px-1">{logo.name}</p>
            </div>
          )}
        </div>
      </div>
    </SwiperSlide>
  )

  return (
    <>
      <style>
        {`
          /* Swiper Marquee Customizations */
          .swiper-marquee {
            overflow: visible !important;
          }
          
          .swiper-marquee .swiper-wrapper {
            transition-timing-function: linear !important;
          }
          
          /* Add fade edges to the marquee */
          .swiper-marquee::before,
          .swiper-marquee::after {
            content: "";
            position: absolute;
            top: 0;
            width: 50px;
            height: 100%;
            z-index: 2;
            pointer-events: none;
          }
          
          .swiper-marquee::before {
            left: 0;
            background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
          }
          
          .swiper-marquee::after {
            right: 0;
            background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
          }
          
          /* Heading Animation */
          .heading-animate {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s ease forwards;
          }
          
          .heading-underline-container {
            width: 100%;
            height: 2px;
            margin-top: 8px;
            position: relative;
            overflow: hidden;
          }
          
          .heading-underline {
            height: 100%;
            width: 0;
            background-color: #ff8c1a;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            animation: expandLine 1.5s ease forwards;
            animation-delay: 0.5s;
          }
          
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes expandLine {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }
          
          /* Hide scrollbar for Chrome, Safari and Opera */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar for IE, Edge and Firefox */
          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>

      <div className="w-full max-w-[100vw] px-2 sm:px-4 py-6 sm:py-8 overflow-hidden">
        {/* Main Heading with Animation */}
        <div className="text-center mb-6 sm:mb-8 overflow-hidden">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide px-2 heading-animate">
            ACHIEVING EXCELLENCE TOGETHER
          </h1>
          <div className="heading-underline-container">
            <div className="heading-underline"></div>
          </div>
        </div>

        {/* Category Tabs - Scrollable on mobile */}
        <div className="flex overflow-x-auto pb-2 sm:flex-wrap sm:justify-center gap-1 sm:gap-2 md:gap-6 mb-6 sm:mb-10 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab
                  ? "text-orange-500 border-b-2 border-orange-500 scale-105"
                  : "text-gray-700 hover:text-orange-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Animated Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            className="space-y-6 sm:space-y-8 md:space-y-10"
          >
            {/* Row 1 */}
            <motion.div variants={rowVariants} className="w-full">
              <Swiper
                ref={swiperRefs[0]}
                {...getSwiperSettings(0)}
                className="swiper-marquee"
                onMouseEnter={() => {
                  if (!isMobile && swiperRefs[0].current && swiperRefs[0].current.swiper) {
                    swiperRefs[0].current.swiper.autoplay.stop()
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile && swiperRefs[0].current && swiperRefs[0].current.swiper) {
                    swiperRefs[0].current.swiper.autoplay.start()
                  }
                }}
              >
                {row1Logos.map((logo, index) => createLogoSlide(logo, index, 1))}
                {/* Duplicate logos for smoother loop */}
                {row1Logos.map((logo, index) => createLogoSlide(logo, index + row1Logos.length, 1))}
              </Swiper>
            </motion.div>

            {/* Row 2 */}
            <motion.div variants={rowVariants} className="w-full">
              <Swiper
                ref={swiperRefs[1]}
                {...getSwiperSettings(1)}
                className="swiper-marquee"
                onMouseEnter={() => {
                  if (!isMobile && swiperRefs[1].current && swiperRefs[1].current.swiper) {
                    swiperRefs[1].current.swiper.autoplay.stop()
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile && swiperRefs[1].current && swiperRefs[1].current.swiper) {
                    swiperRefs[1].current.swiper.autoplay.start()
                  }
                }}
              >
                {row2Logos.map((logo, index) => createLogoSlide(logo, index, 2))}
                {/* Duplicate logos for smoother loop */}
                {row2Logos.map((logo, index) => createLogoSlide(logo, index + row2Logos.length, 2))}
              </Swiper>
            </motion.div>

            {/* Row 3 */}
            <motion.div variants={rowVariants} className="w-full">
              <Swiper
                ref={swiperRefs[2]}
                {...getSwiperSettings(2)}
                className="swiper-marquee"
                onMouseEnter={() => {
                  if (!isMobile && swiperRefs[2].current && swiperRefs[2].current.swiper) {
                    swiperRefs[2].current.swiper.autoplay.stop()
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile && swiperRefs[2].current && swiperRefs[2].current.swiper) {
                    swiperRefs[2].current.swiper.autoplay.start()
                  }
                }}
              >
                {row3Logos.map((logo, index) => createLogoSlide(logo, index, 3))}
                {/* Duplicate logos for smoother loop */}
                {row3Logos.map((logo, index) => createLogoSlide(logo, index + row3Logos.length, 3))}
              </Swiper>
            </motion.div>

            {/* Row 4 */}
            <motion.div variants={rowVariants} className="w-full">
              <Swiper
                ref={swiperRefs[3]}
                {...getSwiperSettings(3)}
                className="swiper-marquee"
                onMouseEnter={() => {
                  if (!isMobile && swiperRefs[3].current && swiperRefs[3].current.swiper) {
                    swiperRefs[3].current.swiper.autoplay.stop()
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobile && swiperRefs[3].current && swiperRefs[3].current.swiper) {
                    swiperRefs[3].current.swiper.autoplay.start()
                  }
                }}
              >
                {row4Logos.map((logo, index) => createLogoSlide(logo, index, 4))}
                {/* Duplicate logos for smoother loop */}
                {row4Logos.map((logo, index) => createLogoSlide(logo, index + row4Logos.length, 4))}
              </Swiper>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}

export default PartnersShowcase
