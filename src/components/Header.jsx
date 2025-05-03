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
  const [headerLoaded, setHeaderLoaded] = useState(false)

  const techMenuRef = useRef(null)
  const techLinkRef = useRef(null)
  const outsourcingMenuRef = useRef(null)
  const outsourcingLinkRef = useRef(null)
  const consultingMenuRef = useRef(null)
  const consultingLinkRef = useRef(null)
  const industriesLinkRef = useRef(null)

  // Set header as loaded after a small delay for animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

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

    // Remove or comment out the following setTimeout block that causes navigation
    // setTimeout(() => {
    //   window.location.href = "/technology/digital-transformation"
    // }, 100)
  }

  const handleOutsourcingSectionClick = (section, e) => {
    e.preventDefault()
    setActiveOutsourcingSection(section)
    setActiveSubOption(null) // Reset sub-option when changing sections

    // No need for setTimeout or state toggling that might cause issues
  }

  const handleSubOptionClick = (option, e) => {
    e.preventDefault()
    setActiveSubOption(option)
    // Remove or comment out the following setTimeout block
    // setTimeout(() => {
    //   window.location.href = "/technology/digital-transformation/platforms"
    // }, 100)
  }

  // Header load animation variants
  const headerContainerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const logoVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.7,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  }

  const secondaryNavVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: 0.4,
      },
    },
  }

  const secondaryNavItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  }

  // Enhanced animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      clipPath: "inset(0% 0% 100% 0%)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const indicatorVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      scaleX: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const iconHoverVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -3, 3, 0],
      transition: {
        duration: 0.6,
        ease: "easeOut",
        rotate: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  }

  const dividerVariants = {
    hidden: { opacity: 0, height: "0%" },
    visible: {
      opacity: 0.5,
      height: "50%",
      transition: {
        delay: 0.5,
        duration: 0.4,
      },
    },
    hover: {
      opacity: 1,
      height: "80%",
      transition: { duration: 0.3 },
    },
  }

  const borderVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.6,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  useEffect(() => {
    // Reset sub-option when tech section changes
    setActiveSubOption(null)
  }, [activeTechSection])

  return (
    <motion.header
      className="font-met w-full relative border-b border-gray-200 z-80"
      initial="hidden"
      animate="visible"
      variants={headerContainerVariants}
    >
      <div className="container mx-auto px-4 pt-2 pb-0 flex justify-center items-center">
        <nav className="hidden md:flex items-center text-sm">
          <motion.div
            className="relative group px-2"
            variants={navItemVariants}
            onMouseEnter={() => handleMouseEnter("investors")}
            onMouseLeave={handleMouseLeave}
          >
            <FlyoutLink to="/investors" className="text-gray-400">
              <motion.span
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Investors
              </motion.span>
            </FlyoutLink>
          </motion.div>

          <motion.span
            className="text-gray-700"
            variants={dividerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            |
          </motion.span>

          <motion.div
            className="relative group px-2"
            variants={navItemVariants}
            onMouseEnter={() => handleMouseEnter("knowledge")}
            onMouseLeave={handleMouseLeave}
          >
            <FlyoutLink to="/knowledge" className="text-gray-400">
              <motion.span
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Knowledge
              </motion.span>
            </FlyoutLink>
          </motion.div>

          <motion.span
            className="text-gray-700"
            variants={dividerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            |
          </motion.span>

          <motion.div
            className="relative group px-2"
            variants={navItemVariants}
            onMouseEnter={() => handleMouseEnter("career")}
            onMouseLeave={handleMouseLeave}
          >
            <FlyoutLink to="/career" className="text-gray-400">
              <motion.span
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Career
              </motion.span>
            </FlyoutLink>
          </motion.div>

          <motion.span
            className="text-gray-700"
            variants={dividerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            |
          </motion.span>

          <motion.div
            className="relative group px-2"
            variants={navItemVariants}
            onMouseEnter={() => handleMouseEnter("gallery")}
            onMouseLeave={handleMouseLeave}
          >
            <FlyoutLink to="/gallery" className="text-gray-400">
              <motion.span
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Gallery
              </motion.span>
            </FlyoutLink>
          </motion.div>

          <motion.span
            className="text-gray-700"
            variants={dividerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            |
          </motion.span>

          <motion.div
            className="relative group px-2"
            variants={navItemVariants}
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            <FlyoutLink to="/contact-us" className="text-gray-400">
              <motion.span
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Contact Us
              </motion.span>
            </FlyoutLink>
          </motion.div>
        </nav>
      </div>

      {/* Secondary Navigation */}
      <div className="relative">
        <div className="container mx-auto">
          <motion.nav
            className="hidden md:flex items-center justify-center space-x-10 pt-2 pb-3 text-lg"
            variants={secondaryNavVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to="/" className="mr-8">
              <motion.div
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="overflow-hidden"
              >
                <img src={logoIcon || "/placeholder.svg"} alt="Imperative Logo" className="h-12 w-auto" />
              </motion.div>
            </Link>
            <motion.div className="relative" variants={secondaryNavItemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <Link
                  ref={techLinkRef}
                  to="/technology"
                  className={`text-gray-800 hover:text-orange-500 transition-colors duration-300 font-bold uppercase ${activeTechOption === "technology" ? "text-orange-500" : ""}`}
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              </motion.div>
              {/* Extended hover area to prevent gaps */}
              <div
                className="absolute -bottom-4 left-0 w-full h-4 bg-transparent"
                onMouseEnter={handleTechMouseEnter}
              ></div>
            </motion.div>

            <motion.div className="relative" variants={secondaryNavItemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <Link
                  ref={outsourcingLinkRef}
                  to="/outsourcing"
                  className={`text-gray-800 hover:text-orange-500 transition-colors duration-300 font-bold uppercase ${activeOutsourcingOption === "outsourcing" ? "text-orange-500" : ""}`}
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              </motion.div>
              {/* Extended hover area to prevent gaps */}
              <div
                className="absolute -bottom-4 left-0 w-full h-4 bg-transparent"
                onMouseEnter={handleOutsourcingMouseEnter}
              ></div>
            </motion.div>

            <motion.div className="relative" variants={secondaryNavItemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <Link
                  ref={consultingLinkRef}
                  to="/consulting"
                  className={`text-gray-800 hover:text-orange-500 transition-colors duration-300 font-bold uppercase ${activeConsultingOption === "consulting" ? "text-orange-500" : ""}`}
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              </motion.div>
              {/* Extended hover area to prevent gaps */}
              <div
                className="absolute -bottom-4 left-0 w-full h-4 bg-transparent"
                onMouseEnter={handleConsultingMouseEnter}
              ></div>
            </motion.div>

            <motion.div className="relative" variants={secondaryNavItemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <Link
                  ref={industriesLinkRef}
                  to="/industries"
                  className={`text-gray-800 hover:text-orange-500 transition-colors duration-300 font-bold uppercase ${activeIndustriesOption === "industries" ? "text-orange-500" : ""}`}
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              </motion.div>
              {/* Extended hover area to prevent gaps */}
              <div
                className="absolute -bottom-4 left-0 w-full h-4 bg-transparent"
                onMouseEnter={handleIndustriesMouseEnter}
              ></div>
            </motion.div>

            <motion.div className="relative" variants={secondaryNavItemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <Link
                  to="/company"
                  className={`text-gray-800 hover:text-orange-500 transition-colors duration-300 font-bold uppercase`}
                  onMouseEnter={() => handleMouseEnter("company")}
                  onMouseLeave={handleMouseLeave}
                >
                  Company
                  {activeMenu === "company" && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"
                      layoutId="companyIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              </motion.div>
            </motion.div>
          </motion.nav>
        </div>
      </div>
      {/* Remove this entire div block
      <div>
        <div className="container mx-auto">
          <AnimatePresence>
            {activeMenu === "company" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[480px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
            {activeMenu === "industries" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[360px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
            {activeMenu === "investors" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[-120px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
            {activeMenu === "knowledge" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[-60px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
            {activeMenu === "career" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[0px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
            {activeMenu === "gallery" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[60px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
            {activeMenu === "contact" && (
              <motion.div
                className="h-1 bg-orange-500 w-24 mx-auto relative left-[120px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={indicatorVariants}
                style={{ originX: 0 }}
              />
            )}
          </AnimatePresence>
        </div>
      </div> */}
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
              <div className="container mx-auto py-8 px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
                    <Link to="/company/leadership" className="flex flex-col items-center text-center group">
                      <motion.div className="flex-shrink-0 mb-3" whileHover="hover" variants={iconHoverVariants}>
                        <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                          <img
                            src={leadershipIcon || "/placeholder.svg"}
                            alt="Leadership Icon"
                            width={24}
                            height={24}
                          />
                        </div>
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                          Leadership
                        </h3>
                        <p className="text-sm text-gray-600">Driven by visionary minds shaping digital excellence.</p>
                      </div>
                    </Link>
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>
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
              <div className="container mx-auto py-8 px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
                    <Link to="/industries/healthcare" className="block">
                      <motion.div className="flex space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <div className="flex-shrink-0">
                          <img
                            src={healthcareIcon || "/placeholder.svg"}
                            alt="Healthcare Icon"
                            width={40}
                            height={40}
                          />
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
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
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
                            OTT platforms, digital streaming support, audience analytics, and content delivery
                            automation.
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Gallery mega menu - Updated to match the image */}
      <AnimatePresence>
        {activeMenu === "gallery" && (
          <>
            {/* Invisible connector to prevent hover gap */}
            <div
              className="absolute left-0 w-full h-4 bg-transparent z-10"
              onMouseEnter={() => handleMouseEnter("gallery")}
            ></div>

            <motion.div
              className="absolute bg-white border border-gray-200 shadow-md z-20 rounded-sm"
              style={{ top: "100%", right: "200px" }}
              onMouseEnter={() => handleMouseEnter("gallery")}
              onMouseLeave={handleMouseLeave}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <div className="py-2 px-6 min-w-[150px]">
                <div className="flex flex-col">
                  <motion.div variants={menuItemVariants}>
                    <Link
                      to="/gallery/event"
                      className="py-2 text-gray-900 hover:text-orange-500 transition-colors duration-300"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="block"
                      >
                        Event
                      </motion.span>
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link
                      to="/gallery/celebrations"
                      className="py-2 text-gray-900 hover:text-orange-500 transition-colors duration-300"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="block"
                      >
                        Celebrations
                      </motion.span>
                    </Link>
                  </motion.div>
                  <motion.div variants={menuItemVariants}>
                    <Link
                      to="/gallery/press-release"
                      className="py-2 text-gray-900 hover:text-orange-500 transition-colors duration-300"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="block"
                      >
                        Press Release
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
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
              <div className="container mx-auto py-8 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={menuItemVariants}>
                    <motion.div
                      whileHover={{ x: activeTechSection !== "digital-transformation" ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to="/technology/digital-transformation"
                        onClick={(e) => {
                          handleTechSectionClick("digital-transformation", e)
                          // Remove or comment out the following setTimeout block
                          // setTimeout(() => {
                          //   window.location.href = "/technology/digital-transformation"
                          // }, 100)
                        }}
                        className={`block ${activeTechSection === "digital-transformation" ? "text-orange-500" : "text-gray-900 hover:text-orange-500"}`}
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
                      </Link>
                    </motion.div>

                    <AnimatePresence>
                      {activeTechSection === "digital-transformation" && (
                        <motion.div
                          className="mt-6 space-y-8 "
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex space-x-8">
                            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="flex-1">
                              <Link
                                to="/technology/platforms"
                                onClick={(e) => {
                                  // Only update the state, but allow navigation
                                  setActiveSubOption("digital-platforms")
                                }}
                                className="block"
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
                              </Link>
                            </motion.div>

                            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="flex-1">
                              <Link
                                to="/technology/services"
                                onClick={(e) => {
                                  // Only update the state, but allow navigation
                                  setActiveSubOption("digital-services")
                                }}
                                className="block"
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
                                <p className="text-sm text-gray-600">
                                  Custom development, automation, and integration.
                                </p>
                              </Link>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
                    <motion.div
                      whileHover={{ x: activeTechSection !== "smart-infrastructure" ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to="/technology/smart-infrastructure"
                        onClick={(e) => {
                          handleTechSectionClick("smart-infrastructure", e)
                          // Remove or comment out the following setTimeout block
                          // setTimeout(() => {
                          //   window.location.href = "/technology/smart-infrastructure"
                          // }, 100)
                        }}
                        className={`block ${activeTechSection === "smart-infrastructure" ? "text-orange-500" : "text-gray-900 hover:text-orange-500"}`}
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
                      </Link>
                    </motion.div>

                    <AnimatePresence>
                      {activeTechSection === "smart-infrastructure" && (
                        <motion.div
                          className="mt-6"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <Link to="/technology/smart-infrastructure/products" className="block">
                              <h4 className="font-semibold text-lg mb-2 text-gray-900 hover:text-orange-500 transition-colors duration-300">
                                Imperative Smart Infra Products
                              </h4>
                              <p className="text-sm text-gray-600">
                                Industry-ready kiosks for seamless service delivery.
                              </p>
                            </Link>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
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
              <div className="container mx-auto py-8 px-8">
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
                      href="#"
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

                  <AnimatePresence mode="wait">
                    {activeOutsourcingSection === "bpo" && (
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                            staggerChildren: 0.05,
                            delayChildren: 0.1,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                          transition: {
                            duration: 0.3,
                          },
                        }}
                      >
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate="visible"
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
                        </motion.div>

                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <Link to="/outsourcing/bpo/voice-support" className="group">
                              <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                                Voice Support Services
                              </h4>
                              <p className="text-sm text-gray-600">Human-led,real-time customer assistance.</p>
                            </Link>
                          </motion.div>
                        </motion.div>

                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <Link to="/outsourcing/bpo/ai-process" className="group">
                              <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                                Ai Enabled Process Automation Platforms
                              </h4>
                              <p className="text-sm text-gray-600">Smart bots driving process and accuracy.</p>
                            </Link>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    {activeOutsourcingSection === "kpo" && (
                      <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                            staggerChildren: 0.05,
                            delayChildren: 0.1,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                          transition: {
                            duration: 0.3,
                          },
                        }}
                      >
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <Link to="/outsourcing/kpo/research-analysis" className="group">
                              <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                                Research and Analysis (R&A)
                              </h4>
                              <p className="text-sm text-gray-600">
                                Unlocking insights through data,trends and strategy
                              </p>
                            </Link>
                          </motion.div>
                        </motion.div>

                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
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
                        </motion.div>

                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
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
                        </motion.div>

                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
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
                        </motion.div>

                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
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
              <div className="container mx-auto py-8 px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div variants={menuItemVariants}>
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
                  </motion.div>

                  <motion.div variants={menuItemVariants}>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <Link to="/consulting/system-integration" className="group">
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-orange-500 transition-colors duration-300">
                          System Integration & OEM Channel Partnership
                        </h4>
                        <p className="text-sm text-gray-600">
                          Seamless integration of diverse systems and technologies
                        </p>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
