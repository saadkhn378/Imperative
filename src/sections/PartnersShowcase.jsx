"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import { useInView } from "../hooks/useInView"

// ===== COMPANY DATA =====
// This data can be easily extended by adding more companies to any category
const COMPANY_DATA = {
  TRUSTED_BY: [
    { name: "RBI", domain: "rbi.org.in" },
    { name: "SBI", domain: "sbi.co.in" },
    { name: "UBI", domain: "unionbankofindia.co.in" },
    { name: "BOB", domain: "bankofbaroda.in" },
    { name: "INDUS", domain: "indusind.com" },
    { name: "IDFC", domain: "idfcfirstbank.com" },
    { name: "CSB", domain: "csb.co.in" },
    { name: "FED", domain: "fedfina.com" },
    { name: "COSMOS", domain: "cosmosbank.com" },
    // Add more trusted companies here
  ],
  PARTNERS: [
    { name: "JPMorgan Chase", domain: "jpmorganchase.com" },
    { name: "Bank of America", domain: "bankofamerica.com" },
    { name: "Wells Fargo", domain: "wellsfargo.com" },
    { name: "Citigroup", domain: "citigroup.com" },
    { name: "Goldman Sachs", domain: "goldmansachs.com" },
    { name: "Intel", domain: "intel.com" },
    { name: "Oracle", domain: "oracle.com" },
    { name: "Salesforce", domain: "salesforce.com" },
    // Add more partner companies here
  ],
  MEMBERS: [
    { name: "Walmart", domain: "walmart.com" },
    { name: "Target", domain: "target.com" },
    { name: "Costco", domain: "costco.com" },
    { name: "Home Depot", domain: "homedepot.com" },
    { name: "Lowe's", domain: "lowes.com" },
    { name: "Best Buy", domain: "bestbuy.com" },
    { name: "Kroger", domain: "kroger.com" },
    { name: "Walgreens", domain: "walgreens.com" },
    // Add more member companies here
  ],
  EMPANELED_FINTECH: [
    { name: "PayPal", domain: "paypal.com" },
    { name: "Square", domain: "squareup.com" },
    { name: "Stripe", domain: "stripe.com" },
    { name: "Robinhood", domain: "robinhood.com" },
    { name: "Coinbase", domain: "coinbase.com" },
    { name: "Plaid", domain: "plaid.com" },
    { name: "Chime", domain: "chime.com" },
    { name: "Affirm", domain: "affirm.com" },
    // Add more fintech companies here
  ],
  EMPANELED_VENDOR: [
    { name: "Disney", domain: "disney.com" },
    { name: "Comcast", domain: "comcast.com" },
    { name: "AT&T", domain: "att.com" },
    { name: "Verizon", domain: "verizon.com" },
    { name: "T-Mobile", domain: "t-mobile.com" },
    { name: "General Electric", domain: "ge.com" },
    { name: "Johnson & Johnson", domain: "jnj.com" },
    { name: "Procter & Gamble", domain: "pg.com" },
    // Add more vendor companies here
  ],
}

// ===== TAB CONFIGURATION =====
// Map of tab keys to display labels
const TAB_LABELS = {
  TRUSTED_BY: "TRUSTED BY",
  PARTNERS: "PARTNERS",
  MEMBERS: "MEMBERS",
  EMPANELED_FINTECH: "EMPANELED FINTECH WITH",
  EMPANELED_VENDOR: "EMPANELED VENDER WITH",
  // Add more tabs here
}

function PartnersShowcase() {
  const [activeTab, setActiveTab] = useState(Object.keys(TAB_LABELS)[0])
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const { ref: showcaseRef, isInView } = useInView({ threshold: 0.2 })

  // Refs for each swiper instance
  const swiperRefs = [useRef(null), useRef(null)]
  const [swipersInitialized, setSwipersInitialized] = useState(false)

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

  // Start/stop swipers based on visibility
  useEffect(() => {
    if (isInView) {
      // Initialize swipers when in view
      swiperRefs.forEach((ref) => {
        if (ref.current && ref.current.swiper) {
          ref.current.swiper.autoplay.start()
        }
      })
      setSwipersInitialized(true)
    } else if (swipersInitialized) {
      // Pause swipers when out of view
      swiperRefs.forEach((ref) => {
        if (ref.current && ref.current.swiper) {
          ref.current.swiper.autoplay.stop()
        }
      })
    }
  }, [isInView, swipersInitialized])

  // Function to generate a logo URL
  const getLogoUrl = (company) => {
    return `https://logo.clearbit.com/${company.domain}`
  }

  // Get companies for the active tab
  const getActiveTabCompanies = () => {
    return COMPANY_DATA[activeTab] || []
  }

  // Get all logos for the active tab
  const getLogosForActiveTab = () => {
    const activeCompanies = getActiveTabCompanies()

    // If we don't have any companies, return empty array
    if (activeCompanies.length === 0) {
      return []
    }

    return activeCompanies.map((company) => ({
      name: company.name,
      src: getLogoUrl(company),
    }))
  }

  // Split logos into two roughly equal rows
  const allLogos = getLogosForActiveTab()
  const midpoint = Math.ceil(allLogos.length / 2)
  const row1Logos = allLogos.slice(0, midpoint)
  const row2Logos = allLogos.slice(midpoint)

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
        width: "140px",
        height: "80px",
        padding: "8px",
        imageSize: 120,
      }
    }
    if (isTablet) {
      return {
        width: "180px",
        height: "100px",
        padding: "10px",
        imageSize: 150,
      }
    }
    return {
      width: "240px",
      height: "120px",
      padding: "12px",
      imageSize: 200,
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
      spaceBetween: isMobile ? 16 : 32,
      speed: baseSpeed + index * 500,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: index % 2 === 1,
        // Only start autoplay when in view
        enabled: isInView,
      },
      allowTouchMove: false, // Disable touch/drag
    }
  }

  // Create logo slide
  const createLogoSlide = (logo, index, rowIndex) => (
    <SwiperSlide key={`row${rowIndex}-${index}`} style={{ width: "auto" }}>
      <div
        className="logo-card flex-shrink-0 flex items-center justify-center bg-white rounded-md shadow-sm border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:z-10"
        style={{
          width: cardDimensions.width,
          height: cardDimensions.height,
          padding: cardDimensions.padding,
        }}
      >
        <div className="logo-container relative w-full h-full flex items-center justify-center">
          <img
            src={logo.src || "/placeholder.svg"}
            alt={logo.name}
            className="logo-image transition-transform duration-300 ease-in-out"
            style={{
              maxHeight: "100%",
              width: "auto",
              maxWidth: "90%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
            }}
            onError={handleImageError}
          />
          <div className="logo-overlay absolute inset-0 opacity-0 bg-black/70 rounded-md flex items-center justify-center transition-opacity duration-300">
            <p className="text-white text-xs sm:text-sm text-center px-1">{logo.name}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  )

  // Function to ensure we have enough logos for a smooth carousel
  const ensureEnoughLogos = (logos) => {
    // If we have fewer than 4 logos, duplicate them to ensure smooth scrolling
    if (logos.length < 4) {
      const duplicatedLogos = [...logos]
      while (duplicatedLogos.length < 8) {
        duplicatedLogos.push(...logos)
      }
      return duplicatedLogos
    }
    return logos
  }

  // Ensure we have enough logos for each row
  const row1LogosExtended = ensureEnoughLogos(row1Logos)
  const row2LogosExtended = ensureEnoughLogos(row2Logos)

  return (
    <>
      <style>
        {`
          /* ===== SWIPER FADE EFFECT STYLES ===== */
          .marquee-container {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          
          .fade-overlay-left,
          .fade-overlay-right {
            position: absolute;
            top: 0;
            height: 100%;
            width: 120px;
            pointer-events: none;
            z-index: 20;
          }
          
          .fade-overlay-left {
            left: 0;
            background: linear-gradient(to right, #ffffff 20%, rgba(255, 255, 255, 0) 100%);
          }
          
          .fade-overlay-right {
            right: 0;
            background: linear-gradient(to left, #ffffff 20%, rgba(255, 255, 255, 0) 100%);
          }
          
          /* ===== LOGO HOVER EFFECTS ===== */
          .logo-card:hover .logo-image {
            transform: scale(1.1);
          }
          
          .logo-card:hover .logo-overlay {
            opacity: 1;
          }
          
          /* Swiper Marquee Customizations */
          .swiper-marquee {
            overflow: visible !important;
          }
          
          .swiper-marquee .swiper-wrapper {
            transition-timing-function: linear !important;
          }
          
          /* Heading Animation */
          .heading-animate {
            opacity: 0;
            transform: translateY(20px);
            animation-name: fadeInUp;
            animation-duration: 1s;
            animation-timing-function: ease;
            animation-fill-mode: forwards;
            animation-play-state: paused;
          }
          
          .heading-animate.in-view {
            animation-play-state: running;
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
            animation-name: expandLine;
            animation-duration: 1.5s;
            animation-timing-function: ease;
            animation-fill-mode: forwards;
            animation-delay: 0.5s;
            animation-play-state: paused;
          }
          
          .heading-underline.in-view {
            animation-play-state: running;
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

      <div ref={showcaseRef} className="font-met w-full max-w-[100vw] px-2 sm:px-4 py-6 sm:py-8 overflow-hidden">
        {/* Main Heading with Animation */}
        <div className="text-center mb-6 sm:mb-8 overflow-hidden">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide px-2 heading-animate ${isInView ? "in-view" : ""}`}
          >
            ACHIEVING EXCELLENCE TOGETHER
          </h1>
          <div className="heading-underline-container">
            <div className={`heading-underline ${isInView ? "in-view" : ""}`}></div>
          </div>
        </div>

        {/* ===== CATEGORY TABS SECTION ===== */}
        <div className="flex overflow-x-auto pb-2 sm:flex-wrap sm:justify-center gap-1 sm:gap-2 md:gap-6 mb-6 sm:mb-10 no-scrollbar">
          {Object.entries(TAB_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === key
                  ? "text-orange-500 border-b-2 border-orange-500 scale-105"
                  : "text-gray-700 hover:text-orange-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ===== LOGO MARQUEE SECTION ===== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
            variants={contentVariants}
            className="space-y-10 sm:space-y-16 md:space-y-20"
          >
            {/* Row 1 */}
            {row1LogosExtended.length > 0 && (
              <motion.div variants={rowVariants} className="w-full">
                <div className="marquee-container">
                  <div className="fade-overlay-left"></div>
                  <Swiper
                    ref={swiperRefs[0]}
                    {...getSwiperSettings(0)}
                    className="swiper-marquee"
                    onMouseEnter={() => {
                      if (!isMobile && isInView && swiperRefs[0].current && swiperRefs[0].current.swiper) {
                        swiperRefs[0].current.swiper.autoplay.stop()
                      }
                    }}
                    onMouseLeave={() => {
                      if (!isMobile && isInView && swiperRefs[0].current && swiperRefs[0].current.swiper) {
                        swiperRefs[0].current.swiper.autoplay.start()
                      }
                    }}
                  >
                    {row1LogosExtended.map((logo, index) => createLogoSlide(logo, index, 1))}
                    {/* Duplicate logos for smoother loop */}
                    {row1LogosExtended.map((logo, index) => createLogoSlide(logo, index + row1LogosExtended.length, 1))}
                  </Swiper>
                  <div className="fade-overlay-right"></div>
                </div>
              </motion.div>
            )}

            {/* Row 2 */}
            {row2LogosExtended.length > 0 && (
              <motion.div variants={rowVariants} className="w-full">
                <div className="marquee-container">
                  <div className="fade-overlay-left"></div>
                  <Swiper
                    ref={swiperRefs[1]}
                    {...getSwiperSettings(1)}
                    className="swiper-marquee"
                    onMouseEnter={() => {
                      if (!isMobile && isInView && swiperRefs[1].current && swiperRefs[1].current.swiper) {
                        swiperRefs[1].current.swiper.autoplay.stop()
                      }
                    }}
                    onMouseLeave={() => {
                      if (!isMobile && isInView && swiperRefs[1].current && swiperRefs[1].current.swiper) {
                        swiperRefs[1].current.swiper.autoplay.start()
                      }
                    }}
                  >
                    {row2LogosExtended.map((logo, index) => createLogoSlide(logo, index, 2))}
                    {/* Duplicate logos for smoother loop */}
                    {row2LogosExtended.map((logo, index) => createLogoSlide(logo, index + row2LogosExtended.length, 2))}
                  </Swiper>
                  <div className="fade-overlay-right"></div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}

export default PartnersShowcase
