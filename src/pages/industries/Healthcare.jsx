"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import HeartIcon from "../../assets/icons/heart-icon.svg"
import MonitorIcon from "../../assets/icons/monitor-icon.svg"
import UserCheckIcon from "../../assets/icons/user-check-icon.svg"
import TabletIcon from "../../assets/icons/tablet-icon.svg"
import ClockIcon from "../../assets/icons/clock-icon.svg"
import FileIcon from "../../assets/icons/file-icon.svg"
import DeviceIcon from "../../assets/icons/device-icon.svg"

// AnimatedSection Component
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  animation = "fadeIn",
  distance = 50,
  once = true,
  threshold = 0.1,
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slideUp" ? distance : 0,
      x: animation === "slideRight" ? -distance : animation === "slideLeft" ? distance : 0,
      scale: animation === "scale" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing
        when: "beforeChildren",
        staggerChildren: animation === "stagger" ? 0.1 : 0,
      },
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start("visible")
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
          controls.start("hidden")
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls, once, threshold])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

// AnimatedItem Component
const AnimatedItem = ({ children, className = "" }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

// StatCounter Component
const StatCounter = ({ title, value, description }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const duration = 2000 // 2 seconds
    const increment = Math.ceil(value / (duration / 16)) // 16ms per frame

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <h3 className="text-xl font-semibold flex items-center">
        <motion.span
          className="text-3xl font-bold text-cyan-600 mr-2"
          initial={{ scale: 0.8 }}
          animate={isVisible ? { scale: [0.8, 1.2, 1] } : { scale: 0.8 }}
          transition={{ duration: 0.5, times: [0, 0.7, 1] }}
        >
          {count}%
        </motion.span>
        {title}
      </h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="h-0.5 w-full bg-gray-200 relative">
        <motion.div
          className="h-full bg-cyan-500 absolute top-0 left-0"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${count}%` } : { width: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        ></motion.div>
      </div>
    </motion.div>
  )
}

// Main Healthcare Component
const Healthcare = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [showChat, setShowChat] = useState(true)

  useEffect(() => {
    // Ensure we start at the top of the page
    window.scrollTo(0, 0)
    setIsMounted(true)

    // Disable any scroll restoration that might be happening
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }

    // Prevent any hash-based scrolling
    if (window.location.hash) {
      window.location.hash = ""
    }
  }, [])

  // Don't render animations during initial render to prevent hydration mismatch
  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* Inline CSS */}
      <style>
        {`
  /* Healthcare-specific styles that won't interfere with the header */
  .healthcare-hero {
    position: relative;
    height: 500px;
    width: 100%;
    margin-top: 0; /* Adjust based on your header height */
  }
  
  @media (min-width: 768px) {
    .healthcare-hero {
      height: 600px;
    }
  }
  
  .healthcare-content {
    position: relative;
    z-index: 1;
  }
  
  /* Icon styling */
  .healthcare-icon {
    width: 4rem;
    height: 4rem;
    stroke: #E97F3D;
    stroke-width: 2;
    fill: none;
  }
`}
      </style>

      <div id="healthcare-top" className="font-met w-full">
        {" "}
        {/* pt-16 adds padding-top to account for header height */}
        <main className="w-full">
          {/* Hero Section */}
          <section className="healthcare-hero relative w-full">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                alt="Healthcare professionals in a hospital setting"
                className="object-cover brightness-75 w-full h-full"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center text-white"
            >
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                HEALTHCARE
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl max-w-2xl"
              >
                Digitally transforming operations to improve efficiency, patient care, and informed decision-making.
              </motion.p>
            </motion.div>

            {/* Chat Widget */}
            <div className="absolute bottom-4 right-4 z-10">
              <AnimatePresence>
                {showChat && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* Chat icon circle */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-cyan-500 z-10">
                      <svg viewBox="0 0 24 24" width="16" height="16" className="text-cyan-500">
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
                    <div className="bg-white p-3 pt-6 mt-4 rounded-xl shadow-lg w-[260px] border border-cyan-500">
                      <div className="text-center text-gray-800 text-xs font-medium leading-tight whitespace-pre-line">
                        Have a requirement? Let's chat and find the best solution for your business.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* Industry Overview Section */}
          <AnimatedSection animation="fadeIn" className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="slideRight" delay={0.2} className="md:col-span-1">
                <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1887&auto=format&fit=crop"
                    alt="Healthcare professional in a clinical setting"
                    className="object-cover w-full h-full"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slideLeft" delay={0.4} className="md:col-span-2">
                <div className="inline-block">
                  <h2 className="text-3xl font-bold mb-2">INDUSTRY OVERVIEW</h2>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="h-1 bg-cyan-500"
                  ></motion.div>
                </div>
                <p className="mt-4 mb-4">
                  The healthcare industry is undergoing a profound digital transformation—driven by the need for faster
                  workflows, improved patient outcomes, and stringent regulatory compliance. With rising patient
                  expectations and complex administrative demands, healthcare providers are under pressure to deliver
                  high-quality care while optimizing operational efficiency.
                </p>
                <p className="mb-6">
                  Imperative empowers hospitals, clinics, and healthtech innovators by delivering cutting-edge
                  automation, AI-powered verification tools, and seamless system integrations. Our solutions are
                  designed to modernize healthcare operations at every touchpoint—from digital onboarding and smart
                  kiosks to back-office optimization and workforce analytics—ensuring a future-ready, patient-centric
                  ecosystem.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md">
                    Talk To An Expert
                  </button>
                </motion.div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Empowering Healthcare Section */}
          <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
              <AnimatedSection animation="slideUp" className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Empowering Healthcare with Purpose-Built Platforms</h2>
                <p className="max-w-4xl mx-auto text-center">
                  Our key solutions empower healthcare providers with cutting-edge tools to streamline operations,
                  enhance patient experiences, and improve overall care quality. From smart automation and digital
                  onboarding to AI-driven verification and workforce tracking, we provide comprehensive, scalable
                  solutions that drive efficiency and innovation across healthcare systems.
                </p>
              </AnimatedSection>

              <AnimatedSection
                animation="stagger"
                delay={0.2}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {/* HealthBO Card */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                  >
                    <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="mb-4">
                      <img src={HeartIcon || "/placeholder.svg"} alt="Health" className="w-16 h-16" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-4 text-center">HealthBO</h3>
                    <div className="border border-cyan-500 p-4 h-full w-full">
                      <p className="text-sm text-center">
                        A unified back-office suite streamlining OPD billing, pharmacy, labs, HR, and finance for better
                        efficiency and coordination.
                      </p>
                    </div>
                  </motion.div>
                </AnimatedItem>

                {/* DigiBoarding Card */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                  >
                    <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="mb-4">
                      <img src={MonitorIcon || "/placeholder.svg"} alt="Monitor" className="w-16 h-16" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-4 text-center">DigiBoarding</h3>
                    <div className="border border-cyan-500 p-4 h-full w-full">
                      <p className="text-sm text-center">
                        A digital onboarding solution that simplifies registration, automates forms, and enables secure
                        uploads for a fast, contactless experience.
                      </p>
                    </div>
                  </motion.div>
                </AnimatedItem>

                {/* AI-KYC Verification Card */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                  >
                    <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="mb-4">
                      <img src={UserCheckIcon || "/placeholder.svg"} alt="User Verification" className="w-16 h-16" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-4 text-center">AI-KYC Verification</h3>
                    <div className="border border-cyan-500 p-4 h-full w-full">
                      <p className="text-sm text-center">
                        A unified back-office suite streamlining OPD billing, pharmacy, labs, HR, and finance for better
                        efficiency and coordination.
                      </p>
                    </div>
                  </motion.div>
                </AnimatedItem>

                {/* Smart Kiosk Solutions Card */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                  >
                    <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="mb-4">
                      <img src={TabletIcon || "/placeholder.svg"} alt="Tablet Kiosk" className="w-16 h-16" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-4 text-center">Smart Kiosk Solutions</h3>
                    <div className="border border-cyan-500 p-4 h-full w-full">
                      <p className="text-sm text-center">
                        Self-service kiosks streamline check-ins, bookings, and feedback, reducing front-desk load and
                        improving patient experience.
                      </p>
                    </div>
                  </motion.div>
                </AnimatedItem>
              </AnimatedSection>
            </div>
          </section>

          {/* Real-World Impact Section */}
          <AnimatedSection animation="fadeIn" className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left side - Images with overlay */}
                <AnimatedSection animation="slideRight" delay={0.3} className="md:col-span-5">
                  <div className="relative h-[450px] w-full">
                    {/* Top image - Surgery scene */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="absolute top-0 left-0 w-[80%] h-[310px] z-0"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1470&auto=format&fit=crop"
                        alt="Healthcare professionals in surgery"
                        className="object-cover w-full h-full"
                      />
                    </motion.div>

                    {/* Bottom image - Digital globe */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="absolute bottom-0 right-2 w-[80%] h-[270px] z-10"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1470&auto=format&fit=crop"
                        alt="Digital healthcare technology - hands holding digital globe"
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  </div>
                </AnimatedSection>

                {/* Right side - Content */}
                <AnimatedSection animation="slideLeft" delay={0.3} className="md:col-span-7">
                  <h2 className="text-3xl font-bold mb-4">Real-World Impact</h2>
                  <p className="mb-8">
                    Delivering tangible improvements in speed, accuracy, and efficiency through smart healthcare
                    solutions that optimize workflows, enhance patient interactions, and reduce administrative burden.
                  </p>

                  <div className="space-y-6">
                    <StatCounter
                      title="Faster Patient Onboarding"
                      value={60}
                      description="Streamlined digital registration processes significantly reduce wait times."
                    />

                    <StatCounter
                      title="Accurate Identity Verification"
                      value={99}
                      description="Advanced AI-powered KYC ensures secure and compliant patient onboarding."
                    />

                    <StatCounter
                      title="Reduction in Administrative Workload"
                      value={30}
                      description="Automation tools ease staff burden, allowing more focus on patient care."
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-xl font-semibold">24/7 Chatbot Support for Staff & Patients</h3>
                      <p className="text-gray-600 mb-2">
                        AI-driven assistance enhances communication and operational efficiency round the clock.
                      </p>
                      <div className="h-0.5 w-full bg-cyan-500"></div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>

          {/* Why Choose Imperative Section */}
          <AnimatedSection animation="fadeIn" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
              <AnimatedSection animation="slideUp" className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3">Why Choose Imperative</h2>
                <p className="max-w-3xl mx-auto text-center">
                  Trusted by healthcare providers for secure, scalable, and innovative digital solutions backed by 10+
                  years of industry expertise.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* 10+ Years of Healthcare Tech Expertise */}
                <AnimatedItem>
                  <div className="flex flex-col items-center text-center px-8 md:px-12 relative">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-6">
                      <img src={ClockIcon || "/placeholder.svg"} alt="Experience" className="w-16 h-16" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">10+ Years of Healthcare Tech Expertise</h3>
                    <p className="text-gray-600 mb-6">
                      Proven experience in delivering innovative, healthcare-specific solutions.
                    </p>

                    {/* Right divider (visible on desktop) */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "8rem" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1 bg-cyan-600"
                    ></motion.div>
                  </div>
                </AnimatedItem>

                {/* ISO 27001 & HIPAA Compliant */}
                <AnimatedItem>
                  <div className="flex flex-col items-center text-center px-8 md:px-12 relative">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-6">
                      <img src={FileIcon || "/placeholder.svg"} alt="Compliance" className="w-16 h-16" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">ISO 27001 & HIPAA Compliant</h3>
                    <p className="text-gray-600 mb-6">
                      Ensuring top-tier data security and regulatory compliance for patient information.
                    </p>

                    {/* Right divider (visible on desktop) */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "8rem" }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1 bg-cyan-600"
                    ></motion.div>
                  </div>
                </AnimatedItem>

                {/* Modular and Scalable Platforms */}
                <AnimatedItem>
                  <div className="flex flex-col items-center text-center px-8 md:px-12">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-6">
                      <img src={DeviceIcon || "/placeholder.svg"} alt="Scalable" className="w-16 h-16" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">Modular and Scalable Platforms</h3>
                    <p className="text-gray-600 mb-6">
                      Customizable solutions that adapt and scale as your healthcare operations grow.
                    </p>
                  </div>
                </AnimatedItem>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Tech Trends in Healthcare Section */}
          <AnimatedSection animation="fadeIn" className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <AnimatedSection animation="slideUp" className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Tech Trends in Healthcare</h2>
                <p className="max-w-4xl mx-auto text-center">
                  Emerging technologies are revolutionizing healthcare by enhancing diagnostics, streamlining patient
                  onboarding, enabling remote care, optimizing billing through predictive analytics, and automating
                  workforce operations—all aimed at delivering faster, smarter, and more personalized care.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="stagger" delay={0.3} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* AI Diagnosis &  delay={0.3} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* AI Diagnosis & Triage */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-cyan-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">AI Diagnosis & Triage</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">
                      Accelerates early detection and patient prioritization through smart algorithms.
                    </p>
                  </motion.div>
                </AnimatedItem>

                {/* Digital Onboarding */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-cyan-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">Digital Onboarding</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">Enables seamless, contactless patient registration and document submission.</p>
                  </motion.div>
                </AnimatedItem>

                {/* Telemedicine Workflows */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-cyan-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">Telemedicine Workflows</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">Supports virtual consultations and remote patient monitoring with ease.</p>
                  </motion.div>
                </AnimatedItem>

                {/* Predictive Billing Analytics */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-cyan-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">Predictive Billing Analytics</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">Forecasts billing trends and reduces revenue leakages using data insights.</p>
                  </motion.div>
                </AnimatedItem>

                {/* Workforce Automation */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-cyan-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">Workforce Automation</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">Tracks productivity and streamlines admin tasks to boost efficiency.</p>
                  </motion.div>
                </AnimatedItem>

                {/* Interoperable Systems */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-cyan-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">Interoperable Systems</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">Ensures smooth data exchange between EHRs, labs, and care platforms.</p>
                  </motion.div>
                </AnimatedItem>
              </AnimatedSection>

              {/* Call to Action */}
              <AnimatedSection
                animation="scale"
                delay={0.5}
                className="mt-16 py-12 px-6 bg-amber-50 text-center rounded-lg"
              >
                <h3 className="text-3xl font-bold mb-6">Let's Take Our Conversation Ahead</h3>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">GET IN TOUCH</button>
                </motion.div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </main>
      </div>
    </>
  )
}

export default Healthcare
