"use client"

import { useState, useEffect, useRef } from "react"
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram, FaYoutube, FaChevronDown } from "react-icons/fa"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import logo from "../assets/images/logo2.png"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openSection, setOpenSection] = useState(null)

  // Visibility states for each section
  const [headerVisible, setHeaderVisible] = useState(false)
  const [socialVisible, setSocialVisible] = useState(false)
  const [accordionVisible, setAccordionVisible] = useState(false)
  const [copyrightVisible, setCopyrightVisible] = useState(false)

  // Desktop footer visibility
  const [desktopVisible, setDesktopVisible] = useState(false)

  // Animation controls
  const controls = useAnimation()

  // Refs for each section
  const headerRef = useRef(null)
  const socialRef = useRef(null)
  const accordionRef = useRef(null)
  const copyrightRef = useRef(null)
  const desktopRef = useRef(null)

  // Set up intersection observers for each section
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const socialObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSocialVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const accordionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAccordionVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const copyrightObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCopyrightVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    const desktopObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDesktopVisible(true)
          controls.start("visible")
        }
      },
      { threshold: 0.1 },
    )

    // Observe elements if they exist
    if (headerRef.current) headerObserver.observe(headerRef.current)
    if (socialRef.current) socialObserver.observe(socialRef.current)
    if (accordionRef.current) accordionObserver.observe(accordionRef.current)
    if (copyrightRef.current) copyrightObserver.observe(copyrightRef.current)
    if (desktopRef.current) desktopObserver.observe(desktopRef.current)

    // Cleanup
    return () => {
      if (headerRef.current) headerObserver.unobserve(headerRef.current)
      if (socialRef.current) socialObserver.unobserve(socialRef.current)
      if (accordionRef.current) accordionObserver.unobserve(accordionRef.current)
      if (copyrightRef.current) copyrightObserver.unobserve(copyrightRef.current)
      if (desktopRef.current) desktopObserver.unobserve(desktopRef.current)
    }
  }, [controls])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribed with email:", email)
    setIsSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setIsSubmitted(false)
    }, 3000)
  }

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null)
    } else {
      setOpenSection(section)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  const listItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    }),
  }

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    }),
  }

  return (
    <footer className="font-met bg-black text-white py-8 sm:py-16 px-4 sm:px-6 overflow-hidden relative">
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Mobile View */}
        <div className="lg:hidden">
          {/* Logo and Newsletter */}
          <motion.div
            ref={headerRef}
            className="flex flex-col items-center text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
          >
            <img src={logo || "/placeholder.svg"} alt="Imperative Logo" className="w-40 mb-4" />

            {/* Newsletter - Compact for mobile */}
            <div className="w-full max-w-xs mt-4">
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Subscribe to newsletter"
                  className="bg-transparent border-b border-gray-600 py-2 px-2 w-full text-sm text-white focus:outline-none focus:border-white transition-colors duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.button
                  type="submit"
                  className="ml-2 p-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </form>
              <AnimatePresence>
                {isSubmitted && (
                  <motion.span
                    className="text-green-400 text-xs mt-1 block"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    Thank you for subscribing!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            ref={socialRef}
            className="flex justify-center space-x-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={socialVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 50 }}
          >
            {[
              { icon: FaFacebookF, link: "#" },
              { icon: FaYoutube, link: "#" },
              { icon: FaWhatsapp, link: "#" },
              { icon: FaInstagram, link: "#" },
              { icon: FaTwitter, link: "#" },
            ].map(({ icon: Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
                initial={{ opacity: 1 }}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Accordion Sections for Mobile */}
          <motion.div
            ref={accordionRef}
            className="border-t border-gray-800 divide-y divide-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={accordionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 50 }}
          >
            {/* Company Section */}
            <div className="py-3">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleSection("company")}
              >
                <h3 className="text-base font-semibold">COMPANY</h3>
                <FaChevronDown
                  className={`transition-transform duration-300 ${openSection === "company" ? "rotate-180" : ""}`}
                  size={14}
                />
              </button>
              <AnimatePresence>
                {openSection === "company" && (
                  <motion.ul
                    className="mt-2 space-y-1 pl-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {["Home", "About Us", "Products", "Services", "Industries"].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-sm text-gray-300 hover:text-white block py-1">
                          {item}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* List Section */}
            <div className="py-3">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleSection("list")}
              >
                <h3 className="text-base font-semibold">LIST</h3>
                <FaChevronDown
                  className={`transition-transform duration-300 ${openSection === "list" ? "rotate-180" : ""}`}
                  size={14}
                />
              </button>
              <AnimatePresence>
                {openSection === "list" && (
                  <motion.ul
                    className="mt-2 space-y-1 pl-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {["Our Ventures", "Achievements", "Testimonial", "Our Team", "Awards"].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-sm text-gray-300 hover:text-white block py-1">
                          {item}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Section */}
            <div className="py-3">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleSection("contact")}
              >
                <h3 className="text-base font-semibold">CONTACT US</h3>
                <FaChevronDown
                  className={`transition-transform duration-300 ${openSection === "contact" ? "rotate-180" : ""}`}
                  size={14}
                />
              </button>
              <AnimatePresence>
                {openSection === "contact" && (
                  <motion.div
                    className="mt-2 space-y-3 pl-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start">
                      <svg
                        className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-xs text-gray-300">
                        Imperative Business Ventures Limited, 209 – A Wing, Centrum Business Square, Thane (West),
                        Maharashtra - 400604
                      </p>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a href="mailto:info@theimperative.in" className="text-xs text-gray-300 hover:text-white">
                        info@theimperative.in
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a href="tel:+912262558700" className="text-xs text-gray-300 hover:text-white">
                        +91-22-62558700
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Desktop View */}
        <motion.div
          ref={desktopRef}
          className="hidden lg:grid lg:grid-cols-4 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={desktopVisible ? "visible" : "hidden"}
        >
          {/* First Column - Logo and Description */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.img
              src={logo || "/placeholder.svg"}
              alt="Imperative Logo"
              className="w-48"
              initial={{ opacity: 0, y: -20 }}
              animate={desktopVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            <motion.h3
              className="text-xl font-semibold mt-8"
              variants={itemVariants}
              initial={{ opacity: 0, x: -20 }}
              animate={desktopVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              World Class Service
            </motion.h3>
            <motion.p
              className="text-sm text-gray-300 leading-relaxed"
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={desktopVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              To be a world-class back office service provider, appreciated for consistently offering a measurable and
              dependable value proposition for business.
            </motion.p>

            <motion.div
              className="mt-10"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={desktopVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.h3 className="text-lg font-semibold mb-4" variants={itemVariants}>
                SUBSCRIBE TO NEWSLETTER
              </motion.h3>
              <form onSubmit={handleSubmit} className="flex">
                <motion.div className="relative w-full" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent border-b border-gray-600 py-2 px-0 w-full text-white focus:outline-none focus:border-white transition-colors duration-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.span
                        className="absolute -bottom-6 left-0 text-green-400 text-xs"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        Thank you for subscribing!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.button
                  type="submit"
                  className="ml-2"
                  whileHover={{ x: 5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Second Column - Company Links */}
          <motion.div className="md:ml-10" variants={itemVariants}>
            <motion.h3
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={desktopVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              COMPANY
            </motion.h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Services", "Industries"].map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  variants={listItemVariants}
                  whileHover={{ x: 10, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Third Column - List Links */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={desktopVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              LIST
            </motion.h3>
            <ul className="space-y-4">
              {["Our Ventures", "Achievements", "Testimonial", "Our Team", "Awards"].map((item, i) => (
                <motion.li
                  key={item}
                  custom={i}
                  variants={listItemVariants}
                  whileHover={{ x: 10, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Fourth Column - Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={desktopVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              CONTACT US
            </motion.h3>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={desktopVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div className="flex" variants={itemVariants} whileHover={{ x: 5 }}>
                <svg className="w-6 h-6 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm text-gray-300">
                  Imperative Business Ventures Limited
                  <br />
                  209 – A Wing, Centrum Business Square, Road
                  <br />
                  No 16, Near Lotus IT Park, Wagle Estate, Thane
                  <br />
                  (West), Maharashtra - 400604
                </p>
              </motion.div>

              <motion.div
                className="flex items-center"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <motion.a
                  href="mailto:info@theimperative.in"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  info@theimperative.in
                </motion.a>
              </motion.div>

              <motion.div
                className="flex items-center"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <motion.a
                  href="tel:+912262558700"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  +91-22-62558700
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={desktopVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.h3 className="text-lg font-semibold mb-4" variants={itemVariants}>
                FOLLOW US
              </motion.h3>
              <div className="flex space-x-6">
                {[
                  { icon: FaFacebookF, link: "#" },
                  { icon: FaYoutube, link: "#" },
                  { icon: FaWhatsapp, link: "#" },
                  { icon: FaInstagram, link: "#" },
                  { icon: FaTwitter, link: "#" },
                ].map(({ icon: Icon, link }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                    initial={{ opacity: 1 }}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright section */}
        <motion.div
          ref={copyrightRef}
          className="mt-6 pt-4 border-t border-gray-800 text-center text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={copyrightVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Imperative Business Ventures Limited. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
