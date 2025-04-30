"use client"

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

// Import icons from assets
import logoIcon from "../assets/images/logo.png"
import FlyoutLink from "./FlyoutLink"
import aboutUsIcon from "../assets/icons/global-icon.svg"
import leadershipIcon from "../assets/icons/leader-icon.svg"
import awardsIcon from "../assets/icons/award-icon.svg"
import groupCompaniesIcon from "../assets/icons/globalcom-icon.svg"
import globalFootprintIcon from "../assets/icons/globalcom-icon.svg"
import bfsiIcon from "../assets/icons/BFSI.svg"
import healthcareIcon from "../assets/icons/healthcare-icon.svg"
import educationIcon from "../assets/icons/education-icon.svg"
import telecomIcon from "../assets/icons/telecom-icon.svg"
import retailIcon from "../assets/icons/retail-icon.svg"
import governmentIcon from "../assets/icons/government-icon.svg"
import mediaIcon from "../assets/icons/media-icon.svg"
import logisticsIcon from "../assets/icons/logistics-icon.svg"
import travelIcon from "../assets/icons/travel-icon.svg"

const Header = () => {
  const [hoverTimeout, setHoverTimeout] = useState(null)
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeTechOption, setActiveTechOption] = useState(null)
  const [activeOutsourcingOption, setActiveOutsourcingOption] = useState(null)
  const [activeConsultingOption, setActiveConsultingOption] = useState(null)
  const [activeIndustriesOption, setActiveIndustriesOption] = useState(null)
  const [activeTechSection, setActiveTechSection] = useState("digital-transformation")
  const [activeOutsourcingSection, setActiveOutsourcingSection] = useState("bpo")
  const [activeSubOption, setActiveSubOption] = useState(null)

  const techMenuRef = useRef(null)
  const techLinkRef = useRef(null)
  const outsourcingMenuRef = useRef(null)
  const outsourcingLinkRef = useRef(null)
  const consultingMenuRef = useRef(null)
  const consultingLinkRef = useRef(null)
  const industriesLinkRef = useRef(null)

  // Handle clicks outside to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        techMenuRef.current &&
        !techMenuRef.current.contains(event.target) &&
        techLinkRef.current &&
        !techLinkRef.current.contains(event.target)
      ) {
        setActiveTechOption(null)
      }

      if (
        outsourcingMenuRef.current &&
        !outsourcingMenuRef.current.contains(event.target) &&
        outsourcingLinkRef.current &&
        !outsourcingLinkRef.current.contains(event.target)
      ) {
        setActiveOutsourcingOption(null)
      }

      if (
        consultingMenuRef.current &&
        !consultingMenuRef.current.contains(event.target) &&
        consultingLinkRef.current &&
        !consultingLinkRef.current.contains(event.target)
      ) {
        setActiveConsultingOption(null)
      }

      if (industriesLinkRef.current && !industriesLinkRef.current.contains(event.target)) {
        setActiveIndustriesOption(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleMouseEnter = (menu) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    // Close all secondary navigation menus when hovering over primary navigation
    setActiveTechOption(null)
    setActiveOutsourcingOption(null)
    setActiveConsultingOption(null)
    setActiveIndustriesOption(null)
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null)
    }, 300) // Delay before closing menu

    setHoverTimeout(timeout)
  }

  const handleTechMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    // Close other menus when hovering over technology
    setActiveMenu(null)
    setActiveOutsourcingOption(null)
    setActiveConsultingOption(null)
    setActiveIndustriesOption(null)
    setActiveTechOption("technology")
  }

  const handleTechMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveTechOption(null)
    }, 500) // Longer delay for tech menu to give more time to move to the menu

    setHoverTimeout(timeout)
  }

  const handleOutsourcingMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    // Close other menus when hovering over outsourcing
    setActiveMenu(null)
    setActiveTechOption(null)
    setActiveConsultingOption(null)
    setActiveIndustriesOption(null)
    setActiveOutsourcingOption("outsourcing")
  }

  const handleOutsourcingMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveOutsourcingOption(null)
    }, 500) // Longer delay for outsourcing menu to give more time to move to the menu

    setHoverTimeout(timeout)
  }

  const handleConsultingMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    // Close other menus when hovering over consulting
    setActiveMenu(null)
    setActiveTechOption(null)
    setActiveOutsourcingOption(null)
    setActiveIndustriesOption(null)
    setActiveConsultingOption("consulting")
  }

  const handleConsultingMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveConsultingOption(null)
    }, 500) // Longer delay for consulting menu to give more time to move to the menu

    setHoverTimeout(timeout)
  }

  const handleIndustriesMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    // Close other menus when hovering over industries
    setActiveMenu(null)
    setActiveTechOption(null)
    setActiveOutsourcingOption(null)
    setActiveConsultingOption(null)
    setActiveIndustriesOption("industries")
    setActiveMenu("industries")
  }

  const handleIndustriesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveIndustriesOption(null)
      setActiveMenu(null)
    }, 500) // Longer delay for industries menu to give more time to move to the menu

    setHoverTimeout(timeout)
  }

  const handleIndustriesMenuMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setActiveIndustriesOption("industries")
    setActiveMenu("industries")
  }

  const handleSecondaryNavMouseEnter = (option) => {
    if (option !== "technology") {
      setActiveTechOption(null)
    }
    if (option !== "outsourcing") {
      setActiveOutsourcingOption(null)
    }
    if (option !== "consulting") {
      setActiveConsultingOption(null)
    }
    if (option !== "industries") {
      setActiveIndustriesOption(null)
    }
  }

  const handleTechSectionClick = (section, e) => {
    e.preventDefault()
    setActiveTechSection(section)
    setActiveSubOption(null) // Reset sub-option when changing sections
  }

  const handleOutsourcingSectionClick = (section, e) => {
    e.preventDefault()
    setActiveOutsourcingSection(section)
    setActiveSubOption(null) // Reset sub-option when changing sections
  }

  const handleSubOptionClick = (option, e) => {
    e.preventDefault()
    setActiveSubOption(option)
  }

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }

  const indicatorVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }

  const iconHoverVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <header className="font-met w-full relative border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <img src={logoIcon || "/placeholder.svg"} alt="Imperative Logo" className="h-10 w-auto" />
            </motion.div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <FlyoutLink to="/company">Company</FlyoutLink>
          </div>

          {/*1. First, remove the Industries section from the primary navigation by deleting or commenting out this block (around line 180-185):*/}
          {/*<div*/}
          {/*  className="relative group"*/}
          {/*  onMouseEnter={() => handleMouseEnter("industries")}*/}
          {/*  onMouseLeave={handleMouseLeave}*/}
          {/*>*/}
          {/*  <FlyoutLink to="/industries">Industries</FlyoutLink>*/}
          {/*</div>*/}

          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("investors")}
            onMouseLeave={handleMouseLeave}
          >
            <FlyoutLink to="/investors">Investors</FlyoutLink>
          </div>

          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("knowledge")}
            onMouseLeave={handleMouseLeave}
          >
            <FlyoutLink to="/knowledge">Knowledge</FlyoutLink>
          </div>

          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("career")}
            onMouseLeave={handleMouseLeave}
          >
            <FlyoutLink to="/career">Career</FlyoutLink>
          </div>
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("gallery")}
            onMouseLeave={handleMouseLeave}
          >
            <FlyoutLink to="/gallery">Gallery</FlyoutLink>
          </div>
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            <FlyoutLink to="/contact-us">Contact Us</FlyoutLink>
          </div>
        </nav>
      </div>

      {/* Secondary Navigation */}
      <div className="relative">
        <div className="container mx-auto">
          <nav className="hidden md:flex space-x-12 py-4">
            <div className="relative">
              <Link
                ref={techLinkRef}
                to="/technology"
                className={`text-gray-800 hover:text-orange-500 transition-colors duration-300 ${activeTechOption === "technology" ? "text-orange-500" : ""}`}
                onMouseEnter={handleTechMouseEnter}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTechOption(activeTechOption === "technology" ? null : "technology")
                  setActiveOutsourcingOption(null)
                  setActiveConsultingOption(null)
                  setActiveIndustriesOption(null)
                  setActiveMenu(null)
                }}
              >
                Technology
                {activeTechOption === "technology" && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"
                    layoutId="techIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
              {/* Extended hover area to prevent gaps */}
              <div
                className="absolute -bottom-4 left-0 w-full h-4 bg-transparent"
                onMouseEnter={handleTechMouseEnter}
              ></div>
            </div>
            <div className="relative">
              <Link
                ref={outsourcingLinkRef}
                to="/outsourcing"
                className={`text-gray-800 hover:text-orange-500 transition-colors duration-300 ${activeOutsourcingOption === "outsourcing" ? "text-orange-500" : ""}`}
                onMouseEnter={handleOutsourcingMouseEnter}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveOutsourcingOption(activeOutsourcingOption === "outsourcing" ? null : "outsourcing")
                  setActiveTechOption(null)
                  setActiveConsultingOption(null)
                  setActiveIndustriesOption(null)
                  setActiveMenu(null)
                }}
              >
                Outsourcing
                {activeOutsourcingOption === "outsourcing" && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"
                    layoutId="outsourcingIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
              {/* Extended hover area to prevent gaps */}
              <div
                className="absolute -bottom-4 left-0 w-full h-4 bg-transparent"
                onMouseEnter={handleOutsourcingMouseEnter}
              ></div>
            </div>
            <div className="relative">
              <Link
                ref={consultingLinkRef}
                to="/consulting"
                className={`text-gray-800 hover:text-orange-500 transition-colors duration-300 ${activeConsultingOption === "consulting" ? "text-orange-500" : ""}`}
                onMouseEnter={handleConsultingMouseEnter}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveConsultingOption(activeConsultingOption === "consulting" ? null : "consulting")
                  setActiveTechOption(null)
                  setActiveOutsourcingOption(null)
                  setActiveIndustriesOption(null)
                  setActiveMenu(null)
                }}
              >
                Consulting
                {activeConsultingOption === "consulting" && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"
                    layoutId="consultingIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
              {/* Extended hover area to prevent gaps */}
              <div
                className="absolute -bottom-4 left-0 w-full h-4 bg-transparent"
                onMouseEnter={handleConsultingMouseEnter}
              ></div>
            </div>
            <div className="relative">
              <Link
                ref={industriesLinkRef}
                to="/industries"
                className={`text-gray-800 hover:text-orange-500 transition-colors duration-300 ${activeIndustriesOption === "industries" ? "text-orange-500" : ""}`}
                onMouseEnter={handleIndustriesMouseEnter}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveIndustriesOption(activeIndustriesOption === "industries" ? null : "industries")
                  setActiveMenu(activeMenu === "industries" ? null : "industries")
                  setActiveTechOption(null)
                  setActiveOutsourcingOption(null)
                  setActiveConsultingOption(null)
                }}
              >
                Industries
                {activeIndustriesOption === "industries" && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"
                    layoutId="industriesIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
              {/* Extended hover area to prevent gaps */}
              <div
                className="absolute -bottom-4 left-0 w-full h-4 bg-transparent"
                onMouseEnter={handleIndustriesMouseEnter}
              ></div>
            </div>
          </nav>
        </div>
      </div>

      <div>
        <div className="container mx-auto">
          <AnimatePresence>
            {/*3. Update the position of the Industries indicator by modifying the left value in the activeMenu === "industries" motion.div (around line 290):*/}
            {activeMenu === "industries" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[0px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
            {activeMenu === "company" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[-120px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
            {activeMenu === "offerings" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[-60px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
            {activeMenu === "carrier" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[120px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
            {activeMenu === "contact" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[180px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Company mega menu */}
      <AnimatePresence>
        {activeMenu === "company" && (
          <>
            {/* Invisible connector to prevent hover gap */}
            <div
              className="absolute left-0 w-full h-4 bg-transparent z-10"
              onMouseEnter={() => handleMouseEnter("company")}
            ></div>

            <motion.div
              className="absolute left-0 w-full bg-white border-b border-gray-200 shadow-md z-20"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  <Link to="/company/about-us" className="flex flex-col items-center text-center group">
                    <motion.div className="flex-shrink-0 mb-3" whileHover="hover" variants={iconHoverVariants}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                        <img src={aboutUsIcon || "/placeholder.svg"} alt="About us Icon" width={24} height={24} />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        About us
                      </h3>
                      <p className="text-sm text-gray-600">Expanding value across borders with global presence.</p>
                    </div>
                  </Link>

                  <Link to="/company/leadership" className="flex flex-col items-center text-center group">
                    <motion.div className="flex-shrink-0 mb-3" whileHover="hover" variants={iconHoverVariants}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                        <img src={leadershipIcon || "/placeholder.svg"} alt="Leadership Icon" width={24} height={24} />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        Leadership
                      </h3>
                      <p className="text-sm text-gray-600">Driven by visionary minds shaping digital excellence.</p>
                    </div>
                  </Link>

                  <Link to="/company/awards" className="flex flex-col items-center text-center group">
                    <motion.div className="flex-shrink-0 mb-3" whileHover="hover" variants={iconHoverVariants}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                        <img src={awardsIcon || "/placeholder.svg"} alt="Awards Icon" width={24} height={24} />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        Awards & Recognitions
                      </h3>
                      <p className="text-sm text-gray-600">Celebrated for innovation, impact, and trust.</p>
                    </div>
                  </Link>

                  <Link to="/company/group-companies" className="flex flex-col items-center text-center group">
                    <motion.div className="flex-shrink-0 mb-3" whileHover="hover" variants={iconHoverVariants}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                        <img
                          src={groupCompaniesIcon || "/placeholder.svg"}
                          alt="Group Companies Icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        Group Companies
                      </h3>
                      <p className="text-sm text-gray-600">Expanding value across borders with global presence.</p>
                    </div>
                  </Link>

                  <Link to="/company/global-footprint" className="flex flex-col items-center text-center group">
                    <motion.div className="flex-shrink-0 mb-3" whileHover="hover" variants={iconHoverVariants}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                        <img
                          src={globalFootprintIcon || "/placeholder.svg"}
                          alt="Global Footprint Icon"
                          width={24}
                          height={24}
                        />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        Global Footprint
                      </h3>
                      <p className="text-sm text-gray-600">Expanding value across borders with global presence.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Industries mega menu */}
      <AnimatePresence>
        {activeMenu === "industries" && (
          <>
            {/* Invisible connector to prevent hover gap */}
            <div
              className="absolute left-0 w-full h-4 bg-transparent z-10"
              onMouseEnter={handleIndustriesMenuMouseEnter}
            ></div>

            <motion.div
              className="absolute left-0 w-full bg-white border-b border-gray-200 shadow-md z-20"
              onMouseEnter={handleIndustriesMenuMouseEnter}
              onMouseLeave={handleIndustriesMouseLeave}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Link to="/industries/bfsi" className="block">
                    <motion.div className="flex space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <div className="flex-shrink-0">
                        <img src={bfsiIcon || "/placeholder.svg"} alt="BFSI Icon" width={40} height={40} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                          BFSI
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Secure and intelligent credit processing, onboarding & reconciliation platforms.
                        </p>
                      </div>
                    </motion.div>
                  </Link>

                  <Link to="/industries/healthcare" className="block">
                    <motion.div className="flex space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <div className="flex-shrink-0">
                        <img src={healthcareIcon || "/placeholder.svg"} alt="Healthcare Icon" width={40} height={40} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                          Healthcare
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Customer support automation, onboarding verification, fraud detection, and compliance.
                        </p>
                      </div>
                    </motion.div>
                  </Link>

                  <Link to="/industries/education" className="block">
                    <motion.div className="flex space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <div className="flex-shrink-0">
                        <img
                          src={educationIcon || "/placeholder.svg"}
                          alt="Education Management Icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                          Education Management
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Fleet management, smart kiosks, tracking platforms, AI-driven delivery automation.
                        </p>
                      </div>
                    </motion.div>
                  </Link>

                  <Link to="/industries/telecom" className="block">
                    <motion.div className="flex space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <div className="flex-shrink-0">
                        <img
                          src={telecomIcon || "/placeholder.svg"}
                          alt="Telecom Services Icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                          Telecom Services
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Customer support automation, onboarding verification, fraud detection, and compliance.
                        </p>
                      </div>
                    </motion.div>
                  </Link>

                  <Link to="/industries/retail" className="block">
                    <motion.div className="flex space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <div className="flex-shrink-0">
                        <img
                          src={retailIcon || "/placeholder.svg"}
                          alt="Retail & E-Commerce Icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                          Retail & E-Commerce
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Smart kiosks, checkout automation, inventory intelligence, and customer engagement tools.
                        </p>
                      </div>
                    </motion.div>
                  </Link>

                  <Link to="/industries/government" className="block">
                    <motion.div className="flex space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <div className="flex-shrink-0">
                        <img
                          src={governmentIcon || "/placeholder.svg"}
                          alt="Government & PSU Icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                          Government & PSU
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Digital automation for public services and citizen engagement.
                        </p>
                      </div>
                    </motion.div>
                  </Link>

                  <Link to="/industries/media" className="block">
                    <motion.div className="flex space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <div className="flex-shrink-0">
                        <img
                          src={mediaIcon || "/placeholder.svg"}
                          alt="Media & Entertainment Icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                          Media & Entertainment
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          OTT platforms, digital streaming support, audience analytics, and content delivery automation.
                        </p>
                      </div>
                    </motion.div>
                  </Link>

                  <Link to="/industries/logistics" className="block">
                    <motion.div className="flex space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <div className="flex-shrink-0">
                        <img
                          src={logisticsIcon || "/placeholder.svg"}
                          alt="Logistics Services Icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                          Logistics Services
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Fleet management, smart kiosks, tracking platforms, AI-driven delivery automation.
                        </p>
                      </div>
                    </motion.div>
                  </Link>

                  <Link to="/industries/travel" className="block">
                    <motion.div className="flex space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <div className="flex-shrink-0">
                        <img
                          src={travelIcon || "/placeholder.svg"}
                          alt="Travel & Hospitality Icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                          Travel & Hospitality
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Self-service kiosks, check-in automation, smart feedback systems, and booking engines.
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeMenu === "gallery" && (
          <motion.div
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10"
            onMouseEnter={() => handleMouseEnter("gallery")}
            onMouseLeave={handleMouseLeave}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="space-y-1">
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  to="/gallery/event"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors duration-300"
                >
                  Event
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  to="/gallery/celebrations"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors duration-300"
                >
                  Celebrations
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  to="/gallery/press-release"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors duration-300"
                >
                  Press Release
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Technology options menu */}
      <AnimatePresence>
        {activeTechOption === "technology" && (
          <>
            {/* Invisible connector to prevent hover gap */}
            <div className="absolute left-0 w-full h-8 bg-transparent z-10" onMouseEnter={handleTechMouseEnter}></div>

            <motion.div
              ref={techMenuRef}
              className="absolute left-0 w-full bg-white border-b border-gray-200 shadow-md z-20"
              onMouseEnter={handleTechMouseEnter}
              onMouseLeave={handleTechMouseLeave}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <motion.a
                      href="/technology/digital-transformation"
                      onClick={(e) => handleTechSectionClick("digital-transformation", e)}
                      className={`block ${activeTechSection === "digital-transformation" ? "text-orange-500" : "text-gray-900 hover:text-orange-500"}`}
                      whileHover={{ x: activeTechSection !== "digital-transformation" ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3
                        className={`font-semibold text-lg mb-6 pb-2 inline-block transition-colors duration-300 ${
                          activeTechSection === "digital-transformation"
                            ? "border-b border-orange-500"
                            : "border-b border-gray-200"
                        }`}
                      >
                        Imperative Digital Transformation
                      </h3>
                    </motion.a>

                    <AnimatePresence>
                      {activeTechSection === "digital-transformation" && (
                        <motion.div
                          className="mt-6 space-y-8"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.a
                            href="/technology/digital-transformation/platforms"
                            onClick={(e) => handleSubOptionClick("digital-platforms", e)}
                            className="block"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <h4
                              className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                                activeSubOption === "digital-platforms"
                                  ? "text-orange-500"
                                  : "text-gray-900 hover:text-orange-500"
                              }`}
                            >
                              Digital Platforms
                            </h4>
                            <p className="text-sm text-gray-600">AI-powered platforms for every industry.</p>
                          </motion.a>

                          <motion.a
                            href="/technology/digital-transformation/services"
                            onClick={(e) => handleSubOptionClick("digital-services", e)}
                            className="block"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <h4
                              className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                                activeSubOption === "digital-services"
                                  ? "text-orange-500"
                                  : "text-gray-900 hover:text-orange-500"
                              }`}
                            >
                              Digital Services
                            </h4>
                            <p className="text-sm text-gray-600">Custom development, automation, and integration.</p>
                          </motion.a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <motion.a
                      href="/technology/smart-infrastructure"
                      onClick={(e) => handleTechSectionClick("smart-infrastructure", e)}
                      className={`block ${activeTechSection === "smart-infrastructure" ? "text-orange-500" : "text-gray-900 hover:text-orange-500"}`}
                      whileHover={{ x: activeTechSection !== "smart-infrastructure" ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3
                        className={`font-semibold text-lg mb-6 pb-2 inline-block transition-colors duration-300 ${
                          activeTechSection === "smart-infrastructure"
                            ? "border-b border-orange-500"
                            : "border-b border-gray-200"
                        }`}
                      >
                        Imperative- Smart Infrastructure
                      </h3>
                    </motion.a>

                    <AnimatePresence>
                      {activeTechSection === "smart-infrastructure" && (
                        <motion.div
                          className="mt-6"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.a
                            href="/technology/smart-infrastructure/products"
                            onClick={(e) => handleSubOptionClick("smart-infra-products", e)}
                            className="block"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <h4
                              className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                                activeSubOption === "smart-infra-products"
                                  ? "text-orange-500"
                                  : "text-gray-900 hover:text-orange-500"
                              }`}
                            >
                              Imperative Smart Infra Products
                            </h4>
                            <p className="text-sm text-gray-600">
                              Industry-ready kiosks for seamless service delivery.
                            </p>
                          </motion.a>

                          <AnimatePresence>
                            {activeSubOption === "smart-infra-products" && (
                              <motion.div
                                className="mt-4 ml-4 border-l-2 border-orange-500 pl-4 pt-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ul className="space-y-2">
                                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a
                                      href="/technology/smart-infrastructure/products/kiosks"
                                      className="text-gray-800 hover:text-orange-500 transition-colors duration-300"
                                    >
                                      Self-Service Kiosks
                                    </a>
                                  </motion.li>
                                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a
                                      href="/technology/smart-infrastructure/products/displays"
                                      className="text-gray-800 hover:text-orange-500 transition-colors duration-300"
                                    >
                                      Smart Display Solutions
                                    </a>
                                  </motion.li>
                                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <a
                                      href="/technology/smart-infrastructure/products/terminals"
                                      className="text-gray-800 hover:text-orange-500 transition-colors duration-300"
                                    >
                                      Interactive Terminals
                                    </a>
                                  </motion.li>
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Outsourcing options menu */}
      <AnimatePresence>
        {activeOutsourcingOption === "outsourcing" && (
          <>
            {/* Invisible connector to prevent hover gap */}
            <div
              className="absolute left-0 w-full h-8 bg-transparent z-10"
              onMouseEnter={handleOutsourcingMouseEnter}
            ></div>

            <motion.div
              ref={outsourcingMenuRef}
              className="absolute left-0 w-full bg-white border-b border-gray-200 shadow-md z-20"
              onMouseEnter={handleOutsourcingMouseEnter}
              onMouseLeave={handleOutsourcingMouseLeave}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="container mx-auto py-8 px-4">
                <div className="space-y-8">
                  <div>
                    <motion.a
                      href="/outsourcing/bpo"
                      onClick={(e) => handleOutsourcingSectionClick("bpo", e)}
                      className={`inline-block mr-8 ${activeOutsourcingSection === "bpo" ? "text-orange-500" : "text-gray-900 hover:text-orange-500"}`}
                      whileHover={{ x: activeOutsourcingSection !== "bpo" ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3
                        className={`font-semibold text-lg pb-2 transition-colors duration-300 ${
                          activeOutsourcingSection === "bpo" ? "border-b-2 border-orange-500" : ""
                        }`}
                      >
                        Business Process Outsourcing (BPO)
                      </h3>
                    </motion.a>
                    <motion.a
                      href="/outsourcing/kpo"
                      onClick={(e) => handleOutsourcingSectionClick("kpo", e)}
                      className={`inline-block ${activeOutsourcingSection === "kpo" ? "text-orange-500" : "text-gray-900 hover:text-orange-500"}`}
                      whileHover={{ x: activeOutsourcingSection !== "kpo" ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3
                        className={`font-semibold text-lg pb-2 transition-colors duration-300 ${
                          activeOutsourcingSection === "kpo" ? "border-b-2 border-orange-500" : ""
                        }`}
                      >
                        Knowledge Process Outsourcing (KPO)
                      </h3>
                    </motion.a>
                  </div>

                  <AnimatePresence>
                    {activeOutsourcingSection === "bpo" && (
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Link to="/outsourcing/bpo/backoffice" className="group">
                            <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                              Back-Office operations (Non-Voice)
                            </h4>
                            <p className="text-sm text-gray-600">Efficient support for core business tasks</p>
                          </Link>
                        </motion.div>

                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Link to="/outsourcing/bpo/voice-support" className="group">
                            <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                              Voice Support Services
                            </h4>
                            <p className="text-sm text-gray-600">Human-led,real-time customer assistance.</p>
                          </Link>
                        </motion.div>

                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Link to="/outsourcing/bpo/ai-process" className="group">
                            <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                              Ai Enabled Process Automation Platforms
                            </h4>
                            <p className="text-sm text-gray-600">Smart bots driving process and accuracy.</p>
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {activeOutsourcingSection === "kpo" && (
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Link to="/outsourcing/kpo/research-analysis" className="group">
                            <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                              Research and Analysis (R&A)
                            </h4>
                            <p className="text-sm text-gray-600">Unlocking insights through data,trends and strategy</p>
                          </Link>
                        </motion.div>

                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Link to="/outsourcing/kpo/research-development" className="group">
                            <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                              Research and Development (R&D)
                            </h4>
                            <p className="text-sm text-gray-600">
                              Driving innovation through design and experimentation.
                            </p>
                          </Link>
                        </motion.div>

                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Link to="/outsourcing/kpo/lpo" className="group">
                            <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                              Legal Process Outsourcing (LPO)
                            </h4>
                            <p className="text-sm text-gray-600">
                              Enabling legal support through efficient outsourcing.
                            </p>
                          </Link>
                        </motion.div>

                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Link to="/outsourcing/kpo/social-media" className="group">
                            <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                              Social Media Marketing
                            </h4>
                            <p className="text-sm text-gray-600">
                              Elevating brands with strategy,analytics and engagement
                            </p>
                          </Link>
                        </motion.div>

                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <Link to="/outsourcing/kpo/healthcare" className="group">
                            <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                              Healthcare
                            </h4>
                            <p className="text-sm text-gray-600">
                              Empowering medical services with data and digital tools.
                            </p>
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Consulting options menu */}
      <AnimatePresence>
        {activeConsultingOption === "consulting" && (
          <>
            {/* Invisible connector to prevent hover gap */}
            <div
              className="absolute left-0 w-full h-8 bg-transparent z-10"
              onMouseEnter={handleConsultingMouseEnter}
            ></div>

            <motion.div
              ref={consultingMenuRef}
              className="absolute left-0 w-full bg-white border-b border-gray-200 shadow-md z-20"
              onMouseEnter={handleConsultingMouseEnter}
              onMouseLeave={handleConsultingMouseLeave}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link to="/consulting/cyber-assurance" className="group">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        Cyber Assurance
                      </h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive security solutions to protect your digital assets
                      </p>
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link to="/consulting/system-integration" className="group">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        System Integration
                      </h4>
                      <p className="text-sm text-gray-600">Seamless integration of diverse systems and technologies</p>
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Link to="/consulting/oem-partnership" className="group">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        OEM - Channel Partnership
                      </h4>
                      <p className="text-sm text-gray-600">Strategic alliances with leading technology providers</p>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
