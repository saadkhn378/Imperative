"use client"

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Search, PhoneCall, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/images/logo.png"
// Add React Icons import - including additional icon sets for Know Us section
import {
  FaCode,
  FaDatabase,
  FaCloudUploadAlt,
  FaMobileAlt,
  FaLaptopCode,
  FaBrain,
  FaCalendarAlt,
  FaUsers,
  FaTrophy,
  FaHandshake,
} from "react-icons/fa"
import { BiBuilding, BiUserCircle, BiGroup, BiTrophy } from "react-icons/bi"
import {
  GiFactory,
  GiHealthNormal,
  GiBank,
  GiShoppingBag,
  GiTruck,
  GiWorld,
  GiOfficeChair,
  GiOrganigram,
  GiTeamIdea,
  GiGrowth,
} from "react-icons/gi"

// FlyoutLink component for regular menu items
const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false)

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="group relative h-fit w-fit">
      <Link to={href} className="relative text-black hover:text-orange-500 transition-colors duration-300">
        {children}
        <span
          style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-orange-500 transition-transform duration-300 ease-out"
        />
      </Link>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          style={{ x: "-50%" }}
          className="absolute left-1/2 top-12 bg-white text-black shadow-md rounded-md z-50"
        >
          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
          <FlyoutContent />
        </motion.div>
      )}
    </div>
  )
}

// GalleryFlyout component with grid layout
const GalleryFlyout = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  // Handle mouse enter
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsGalleryOpen(true)
  }

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsGalleryOpen(false)
    }, 300) // 300ms delay before closing
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Dropdown animation variants for Framer Motion
  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, clipPath: "inset(0 0 100% 0)" },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0 0)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 15,
      clipPath: "inset(0 0 100% 0)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  // Gallery items with icons
  const galleryItems = [
    {
      id: "events",
      name: "Events",
      description: "Our corporate and community events",
      icon: FaCalendarAlt,
    },
    {
      id: "team-activities",
      name: "Team Activities",
      description: "Our team building and social activities",
      icon: FaUsers,
    },
    {
      id: "awards-ceremonies",
      name: "Awards Ceremonies",
      description: "Celebrating our achievements",
      icon: FaTrophy,
    },
    {
      id: "partnerships",
      name: "Partnerships",
      description: "Collaborations and strategic alliances",
      icon: FaHandshake,
    },
  ]

  return (
    <div
      ref={dropdownRef}
      className="relative h-fit w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to="/gallery"
        className={`relative text-black hover:text-orange-500 transition-colors duration-300 ${
          isGalleryOpen ? "text-orange-500" : ""
        }`}
      >
        Gallery
        <span
          style={{ transform: isGalleryOpen ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-orange-500 transition-transform duration-300 ease-out"
        />
      </Link>

      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-0 right-0 top-[72px] bg-white z-40 w-full shadow-md"
          >
            <div className="container relative mx-auto px-4 py-6">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.id}
                        to={`/gallery/${item.id}`}
                        className="flex flex-col items-center text-center p-4 rounded-md hover:bg-gray-50 transition-colors duration-300 group"
                        onClick={() => setIsGalleryOpen(false)}
                      >
                        <div className="mb-3 text-3xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
                          <Icon />
                        </div>
                        <h3 className="text-lg font-bold mb-1 group-hover:text-orange-500 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// OurVenturesFlyout component with grid layout
const OurVenturesFlyout = () => {
  const [isVenturesOpen, setIsVenturesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  // Handle mouse enter
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsVenturesOpen(true)
  }

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVenturesOpen(false)
    }, 300) // 300ms delay before closing
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Dropdown animation variants for Framer Motion
  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, clipPath: "inset(0 0 100% 0)" },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0 0)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 15,
      clipPath: "inset(0 0 100% 0)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  // Our Ventures data with icons
  const venturesItems = [
    {
      id: "group-companies",
      name: "Group Companies",
      description: "Our family of businesses",
      icon: GiOrganigram,
      category: "companies",
    },
    {
      id: "strategic-partnerships",
      name: "Strategic Partnerships",
      description: "Collaborations that drive growth",
      icon: GiTeamIdea,
      category: "companies",
    },
    {
      id: "global-presence",
      name: "Global Presence",
      description: "Our operations around the world",
      icon: GiWorld,
      category: "companies",
    },
    {
      id: "innovation-labs",
      name: "Innovation Labs",
      description: "Where we create the future",
      icon: GiGrowth,
      category: "companies",
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      description: "Innovative production solutions",
      icon: GiFactory,
      category: "industries",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      description: "Digital transformation in healthcare",
      icon: GiHealthNormal,
      category: "industries",
    },
    {
      id: "banking-finance",
      name: "Banking & Finance",
      description: "Financial technology solutions",
      icon: GiBank,
      category: "industries",
    },
    {
      id: "retail",
      name: "Retail",
      description: "Transforming shopping experiences",
      icon: GiShoppingBag,
      category: "industries",
    },
    {
      id: "logistics",
      name: "Logistics",
      description: "Optimizing supply chains",
      icon: GiTruck,
      category: "industries",
    },
    {
      id: "professional-services",
      name: "Professional Services",
      description: "Expertise across industries",
      icon: GiOfficeChair,
      category: "industries",
    },
  ]

  // Group ventures by category
  const companiesItems = venturesItems.filter((item) => item.category === "companies")
  const industriesItems = venturesItems.filter((item) => item.category === "industries")

  return (
    <div
      ref={dropdownRef}
      className="relative h-fit w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to="/our-ventures"
        className={`relative text-black hover:text-orange-500 transition-colors duration-300 ${
          isVenturesOpen ? "text-orange-500" : ""
        }`}
      >
        Our Ventures
        <span
          style={{ transform: isVenturesOpen ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-orange-500 transition-transform duration-300 ease-out"
        />
      </Link>

      <AnimatePresence>
        {isVenturesOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-0 right-0 top-[72px] bg-white z-40 w-full shadow-md"
          >
            <div className="container relative mx-auto px-4 py-8">
              <div className="max-w-6xl mx-auto">
                {/* Companies Section */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-orange-500 mb-4 border-b border-orange-200 pb-2">
                    Our Companies
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {companiesItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.id}
                          to={`/our-ventures/${item.id}`}
                          className="flex flex-col items-center text-center p-4 rounded-md hover:bg-gray-50 transition-colors duration-300 group"
                          onClick={() => setIsVenturesOpen(false)}
                        >
                          <div className="mb-3 text-3xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
                            <Icon />
                          </div>
                          <h3 className="text-lg font-bold mb-1 group-hover:text-orange-500 transition-colors duration-300">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Industries Section */}
                <div>
                  <h2 className="text-xl font-bold text-orange-500 mb-4 border-b border-orange-200 pb-2">
                    Industries We Serve
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {industriesItems.map((item) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={item.id}
                          to={`/our-ventures/${item.id}`}
                          className="flex flex-col items-center text-center p-4 rounded-md hover:bg-gray-50 transition-colors duration-300 group"
                          onClick={() => setIsVenturesOpen(false)}
                        >
                          <div className="mb-3 text-3xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
                            <Icon />
                          </div>
                          <h3 className="text-lg font-bold mb-1 group-hover:text-orange-500 transition-colors duration-300">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// KnowUsFlyout component with icons
const KnowUsFlyout = () => {
  const [isKnowUsOpen, setIsKnowUsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  // Handle mouse enter
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsKnowUsOpen(true)
  }

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsKnowUsOpen(false)
    }, 300) // 300ms delay before closing
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Dropdown animation variants for Framer Motion
  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, clipPath: "inset(0 0 100% 0)" },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0 0)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 15,
      clipPath: "inset(0 0 100% 0)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  // Know Us data with icons
  const knowUsItems = [
    {
      id: "overview",
      name: "Overview",
      description: "Learn about our company at a glance",
      icon: BiBuilding,
    },
    {
      id: "leadership-team",
      name: "Leadership Team",
      description: "Meet our executive leadership",
      icon: BiUserCircle,
    },
    {
      id: "our-team",
      name: "Our Team",
      description: "The people behind our success",
      icon: BiGroup,
    },
    {
      id: "awards-recognitions",
      name: "Awards & Recognitions",
      description: "Our achievements and accolades",
      icon: BiTrophy,
    },
  ]

  return (
    <div
      ref={dropdownRef}
      className="relative h-fit w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to="/know-us"
        className={`relative text-black hover:text-orange-500 transition-colors duration-300 ${
          isKnowUsOpen ? "text-orange-500" : ""
        }`}
      >
        Know Us
        <span
          style={{ transform: isKnowUsOpen ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-orange-500 transition-transform duration-300 ease-out"
        />
      </Link>

      <AnimatePresence>
        {isKnowUsOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-0 right-0 top-[72px] bg-white z-40 w-full shadow-md"
          >
            <div className="container relative mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
                {knowUsItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.id}
                      to={`/know-us/${item.id}`}
                      className="flex flex-col items-center text-center p-4 rounded-md group hover:bg-gray-50 transition-colors duration-300"
                      onClick={() => setIsKnowUsOpen(false)}
                    >
                      <div className="mb-3 text-3xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
                        <Icon />
                      </div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-orange-500 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ProductFlyout component for the Products menu item
const ProductFlyout = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  // Handle mouse enter on the dropdown wrapper
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsProductsOpen(true)
  }

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false)
    }, 300) // 300ms delay before closing
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Dropdown animation variants for Framer Motion
  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, clipPath: "inset(0 0 100% 0)" },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0 0)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 15,
      clipPath: "inset(0 0 100% 0)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  // Product data
  const products = [
    {
      id: "impbot",
      name: { prefix: "Imp", suffix: "Bot" },
      description: "Robotic Process Automation",
    },
    {
      id: "impcap",
      name: { prefix: "Imp", suffix: "Cap+" },
      description: "Data Capture With AI/ML",
      hasPlus: true,
    },
    {
      id: "impbi",
      name: { prefix: "Imp", suffix: "BI" },
      description: "Business Intelligence & Data Visualization",
    },
    {
      id: "impai",
      name: { prefix: "Imp", suffix: "AI" },
      description: "Text Analytics & Pattern Detection Platform",
    },
    {
      id: "impdiscovery",
      name: { prefix: "Imp", suffix: "Discovery" },
      description: "Search effortlessly across data sources",
    },
    {
      id: "trade-finance",
      name: { prefix: "", suffix: "Trade Finance", allRed: true },
      description: "Smart Business Accelerator for Trade Finance",
      isTwoLines: true,
    },
    {
      id: "finato",
      name: { prefix: "", suffix: "FINATO", allRed: true },
      description: "CFO Backoffice Transformation",
    },
    {
      id: "impagent",
      name: { prefix: "Imp", suffix: "Agent" },
      description: "Go beyond rule-based automation with AI Agents",
    },
  ]
  return (
    <div
      ref={dropdownRef}
      className="relative h-fit w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to="/products"
        className={`relative text-black hover:text-orange-500 transition-colors duration-300 ${
          isProductsOpen ? "text-orange-500" : ""
        }`}
      >
        Products
        <span
          style={{ transform: isProductsOpen ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-orange-500 transition-transform duration-300 ease-out"
        />
      </Link>

      <AnimatePresence>
        {isProductsOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-0 right-0 top-[72px] bg-white z-40 w-full shadow-md"
          >
            <div className="container relative mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="flex flex-col items-center text-center p-4 rounded-md group"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    <div className="mb-2">
                      <div className="text-sm text-gray-700">IMPERATIVE</div>
                      {product.isTwoLines ? (
                        <>
                          <div className="text-3xl font-bold">
                            <span className="text-orange-500">{product.name.suffix.split(" ")[0]}</span>
                          </div>
                          <div className="text-3xl font-bold">
                            <span className="text-orange-500">{product.name.suffix.split(" ")[1]}</span>
                          </div>
                        </>
                      ) : (
                        <div className="text-3xl font-bold">
                          {!product.name.allRed && <span className="text-black">{product.name.prefix}</span>}
                          <span className="text-orange-500">{product.name.suffix}</span>
                          {product.hasPlus && <span className="text-orange-500 text-2xl align-top">+</span>}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 group-hover:text-orange-500 transition-colors duration-300">
                      {product.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ServicesFlyout component with icons
const ServicesFlyout = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  // Handle mouse enter
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsServicesOpen(true)
  }

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 300) // 300ms delay before closing
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Dropdown animation variants for Framer Motion
  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, clipPath: "inset(0 0 100% 0)" },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0 0)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: 15,
      clipPath: "inset(0 0 100% 0)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  // Services data with icons
  const services = [
    {
      id: "web-development",
      name: "Web Development",
      description: "Responsive and modern web applications",
      icon: FaCode,
    },
    {
      id: "database-solutions",
      name: "Database Solutions",
      description: "Reliable and scalable database architecture",
      icon: FaDatabase,
    },
    {
      id: "cloud-services",
      name: "Cloud Services",
      description: "Secure cloud hosting and migration",
      icon: FaCloudUploadAlt,
    },
    {
      id: "mobile-development",
      name: "Mobile Development",
      description: "Native and cross-platform mobile apps",
      icon: FaMobileAlt,
    },
    {
      id: "enterprise-solutions",
      name: "Enterprise Solutions",
      description: "End-to-end business applications",
      icon: FaLaptopCode,
    },
    {
      id: "ai-consulting",
      name: "AI Consulting",
      description: "Cutting-edge artificial intelligence integration",
      icon: FaBrain,
    },
  ]

  return (
    <div
      ref={dropdownRef}
      className="relative h-fit w-fit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to="/services"
        className={`relative text-black hover:text-orange-500 transition-colors duration-300 ${
          isServicesOpen ? "text-orange-500" : ""
        }`}
      >
        Services
        <span
          style={{ transform: isServicesOpen ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-orange-500 transition-transform duration-300 ease-out"
        />
      </Link>

      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-0 right-0 top-[72px] bg-white z-40 w-full shadow-md"
          >
            <div className="container relative mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="flex flex-col items-center text-center p-4 rounded-md group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="mb-4 text-4xl text-orange-500">
                        <Icon />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <p className="text-gray-600 group-hover:text-orange-500 transition-colors duration-300">
                        {service.description}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [showSearch, setShowSearch] = useState(false)

  // Create a shared data structure for menu items to ensure consistency between mobile and desktop
  const menuData = {
    knowUs: {
      name: "Know Us",
      path: "/know-us",
      items: [
        {
          id: "overview",
          name: "Overview",
          description: "Learn about our company at a glance",
          icon: BiBuilding,
        },
        {
          id: "leadership-team",
          name: "Leadership Team",
          description: "Meet our executive leadership",
          icon: BiUserCircle,
        },
        {
          id: "our-team",
          name: "Our Team",
          description: "The people behind our success",
          icon: BiGroup,
        },
        {
          id: "awards-recognitions",
          name: "Awards & Recognitions",
          description: "Our achievements and accolades",
          icon: BiTrophy,
        },
      ],
    },
    ventures: {
      name: "Our Ventures",
      path: "/our-ventures",
      items: [
        {
          id: "group-companies",
          name: "Group Companies",
          description: "Our family of businesses",
          icon: GiOrganigram,
        },
        {
          id: "strategic-partnerships",
          name: "Strategic Partnerships",
          description: "Collaborations that drive growth",
          icon: GiTeamIdea,
        },
        {
          id: "global-presence",
          name: "Global Presence",
          description: "Our operations around the world",
          icon: GiWorld,
        },
        {
          id: "innovation-labs",
          name: "Innovation Labs",
          description: "Where we create the future",
          icon: GiGrowth,
        },
        {
          id: "manufacturing",
          name: "Manufacturing",
          description: "Innovative production solutions",
          icon: GiFactory,
        },
        {
          id: "healthcare",
          name: "Healthcare",
          description: "Digital transformation in healthcare",
          icon: GiHealthNormal,
        },
        {
          id: "banking-finance",
          name: "Banking & Finance",
          description: "Financial technology solutions",
          icon: GiBank,
        },
        {
          id: "retail",
          name: "Retail",
          description: "Transforming shopping experiences",
          icon: GiShoppingBag,
        },
        {
          id: "logistics",
          name: "Logistics",
          description: "Optimizing supply chains",
          icon: GiTruck,
        },
        {
          id: "professional-services",
          name: "Professional Services",
          description: "Expertise across industries",
          icon: GiOfficeChair,
        },
      ],
    },
    products: {
      name: "Products",
      path: "/products",
      items: [
        {
          id: "impbot",
          name: "ImpBot",
          description: "Robotic Process Automation",
        },
        {
          id: "impcap",
          name: "ImpCap+",
          description: "Data Capture With AI/ML",
        },
        {
          id: "impbi",
          name: "ImpBI",
          description: "Business Intelligence & Data Visualization",
        },
        {
          id: "impai",
          name: "ImpAI",
          description: "Text Analytics & Pattern Detection Platform",
        },
        {
          id: "impdiscovery",
          name: "ImpDiscovery",
          description: "Search effortlessly across data sources",
        },
        {
          id: "trade-finance",
          name: "Trade Finance",
          description: "Smart Business Accelerator for Trade Finance",
        },
        {
          id: "finato",
          name: "FINATO",
          description: "CFO Backoffice Transformation",
        },
        {
          id: "impagent",
          name: "ImpAgent",
          description: "Go beyond rule-based automation with AI Agents",
        },
      ],
    },
    services: {
      name: "Services",
      path: "/services",
      items: [
        {
          id: "web-development",
          name: "Web Development",
          description: "Responsive and modern web applications",
          icon: FaCode,
        },
        {
          id: "database-solutions",
          name: "Database Solutions",
          description: "Reliable and scalable database architecture",
          icon: FaDatabase,
        },
        {
          id: "cloud-services",
          name: "Cloud Services",
          description: "Secure cloud hosting and migration",
          icon: FaCloudUploadAlt,
        },
        {
          id: "mobile-development",
          name: "Mobile Development",
          description: "Native and cross-platform mobile apps",
          icon: FaMobileAlt,
        },
        {
          id: "enterprise-solutions",
          name: "Enterprise Solutions",
          description: "End-to-end business applications",
          icon: FaLaptopCode,
        },
        {
          id: "ai-consulting",
          name: "AI Consulting",
          description: "Cutting-edge artificial intelligence integration",
          icon: FaBrain,
        },
      ],
    },
    gallery: {
      name: "Gallery",
      path: "/gallery",
      items: [
        {
          id: "events",
          name: "Events",
          description: "Our corporate and community events",
          icon: FaCalendarAlt,
        },
        {
          id: "team-activities",
          name: "Team Activities",
          description: "Our team building and social activities",
          icon: FaUsers,
        },
        {
          id: "awards-ceremonies",
          name: "Awards Ceremonies",
          description: "Celebrating our achievements",
          icon: FaTrophy,
        },
        {
          id: "partnerships",
          name: "Partnerships",
          description: "Collaborations and strategic alliances",
          icon: FaHandshake,
        },
      ],
    },
    investors: {
      name: "Investors",
      path: "/investors",
      items: [],
    },
  }

  // Create an array of menu items for rendering
  const menuItems = [
    { key: "knowUs", component: KnowUsFlyout },
    { key: "ventures", component: OurVenturesFlyout },
    { key: "products", component: ProductFlyout },
    { key: "services", component: ServicesFlyout },
    { key: "gallery", component: GalleryFlyout },
    { key: "investors", component: null },
  ]

  // Variables to track if any dropdown is open
  const isAnyDropdownOpen = isOpen || showSearch || openDropdown !== null

  // Modified scroll behavior - don't lock body scroll
  useEffect(() => {
    // We're removing the body overflow-hidden class to allow scrolling
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <header
      className={`font-met bg-white shadow-md ${
        isAnyDropdownOpen ? "fixed" : "sticky"
      } top-0 left-0 right-0 w-full z-50`}
      style={{ position: "relative" }} // Force relative positioning
    >
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center text-black">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="h-15 mr-2" />
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-6 relative">
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => {
              const menuInfo = menuData[item.key]
              if (item.component) {
                const Component = item.component
                return <Component key={menuInfo.name} />
              } else {
                return (
                  <FlyoutLink
                    key={menuInfo.name}
                    href={menuInfo.path}
                    FlyoutContent={() =>
                      menuInfo.items.length > 0 ? (
                        <div className="w-48 bg-white shadow-md rounded-md z-50">
                          {menuInfo.items.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={`${menuInfo.path}/${subItem.id}`}
                              className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-500 transition-colors duration-300"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ) : null
                    }
                  >
                    {menuInfo.name}
                  </FlyoutLink>
                )
              }
            })}
          </nav>

          {/* Phone Icon with Animated Contact Us Tooltip (Now Clickable) */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden md:flex relative group">
            <PhoneCall size={24} className="text-orange-500" />
            <Link
              to="/contact"
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-orange-500 text-white text-center p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Join Us Link */}
          <Link
            to="/join-us"
            className="hidden md:flex hover:text-orange-500 text-black transition-colors duration-300"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button with Search */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            className={`p-2 rounded-full ${
              isOpen ? "bg-orange-100 text-orange-500" : "text-gray-700 hover:bg-gray-100"
            } transition-colors duration-200`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Search Icon */}
          <button
            className={`p-2 rounded-full ${
              showSearch ? "bg-orange-100 text-orange-500" : "text-gray-700 hover:bg-gray-100"
            } transition-colors duration-200`}
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Toggle search"
          >
            <Search size={22} />
          </button>
        </div>
      </div>

      {/* Search Bar (Mobile Only) */}
      {showSearch && (
        <div className="p-4 bg-white shadow-md flex items-center justify-center md:hidden relative">
          <div className="relative w-full max-w-md flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="p-3 pl-10 border border-orange-200 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-r-lg transition-colors duration-300 flex items-center justify-center"
              aria-label="Submit search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-md p-4 z-50 max-h-[80vh] overflow-y-auto rounded-b-lg relative"
            style={{ position: "absolute", width: "100%" }}
          >
            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const menuInfo = menuData[item.key]
                return (
                  <div key={menuInfo.name} className="border-b border-gray-100 last:border-b-0">
                    <div
                      className={`flex justify-between items-center py-3 px-2 rounded-lg ${
                        openDropdown === index ? "bg-orange-50" : "hover:bg-gray-50"
                      } transition-colors duration-200`}
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    >
                      <Link
                        to={menuInfo.path}
                        className={`block font-medium ${openDropdown === index ? "text-orange-500" : "text-gray-800"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {menuInfo.name}
                      </Link>
                      {menuInfo.items.length > 0 && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            openDropdown === index ? "rotate-180 text-orange-500" : "rotate-0 text-gray-500"
                          }`}
                        />
                      )}
                    </div>

                    <AnimatePresence>
                      {openDropdown === index && menuInfo.items.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 pr-2 py-2 bg-gray-50 rounded-lg mt-1 mb-2"
                        >
                          <div className="grid grid-cols-1 gap-1">
                            {menuInfo.items.map((subItem) => {
                              const Icon = subItem.icon
                              return (
                                <Link
                                  key={subItem.id}
                                  to={`${menuInfo.path}/${subItem.id}`}
                                  className="flex items-center py-2 px-3 text-gray-700 hover:text-orange-500 hover:bg-white rounded-md transition-colors duration-200 text-sm"
                                  onClick={() => {
                                    setIsOpen(false)
                                    setOpenDropdown(null)
                                  }}
                                >
                                  {Icon && (
                                    <span className="mr-2 text-orange-500">
                                      <Icon size={16} />
                                    </span>
                                  )}
                                  {subItem.name}
                                </Link>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {/* Join Us Link - Enhanced */}
            <div className="mt-2 pt-2 border-t border-gray-100">
              <Link
                to="/join-us"
                className="flex items-center py-2 px-4 text-gray-800 hover:text-orange-500 transition-colors duration-200 rounded-lg hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Join Us
              </Link>
            </div>

            {/* Mobile Contact Us Button - Enhanced */}
            <div className="mt-2">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-orange-500 text-white text-center py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                onClick={() => setIsOpen(false)}
              >
                <PhoneCall size={18} />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  )
}

export default Header
