"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import BagIcon from "../../assets/icons/bag-icon.svg"
import WifiIcon from "../../assets/icons/wifi-icon.svg"
import VirusIcon from "../../assets/icons/virus-icon.svg"
import MultiIcon from "../../assets/icons/multi-icon.svg"
import ScanIcon from "../../assets/icons/scan-icon.svg"
import CircleIcon from "../../assets/icons/Circle-icon.svg"
import InsightIcon from "../../assets/icons/insight-icon.svg"

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
          className="text-3xl font-bold text-orange-500 mr-2"
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
          className="h-full bg-orange-500 absolute top-0 left-0"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${count}%` } : { width: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        ></motion.div>
      </div>
    </motion.div>
  )
}

// Main Healthcare Component
const Retail = () => {
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
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
                alt="Digital retail and e-commerce concept with shopping cart and laptop"
                className="object-cover brightness-75 w-full h-full"
                style={{ backgroundColor: "#004d56" }} // Dark teal background to match the image
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
                RETAIL & E-COMMERCE
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl max-w-2xl"
              >
               Empowering retail with AI-driven automation to enhance customer experiences and streamline operations
               for greater efficiency and satisfaction.
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
                    <div className="bg-white p-3 pt-6 mt-4 rounded-xl shadow-lg w-[260px] border border-orange-500">
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
                    src="https://images.unsplash.com/photo-1739989934228-e74afa40eca2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="E-commerce shopping cart on laptop screen"
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
                    className="h-1 bg-orange-500"
                  ></motion.div>
                </div>
                <p className="mt-4 mb-4">
                This technological shift is not just redefining how consumers shop, but also how retailers
                  operate—demanding agile infrastructures, data-driven decision-making, and real-time responsiveness to
                  market trends. With Imperative's scalable and modular platforms, businesses can unlock powerful
                  insights, reduce operational silos, and ensure a seamless flow of information across departments,
                  enabling faster go-to-market strategies and enhanced customer engagement.
                </p>
                <p className="mb-6">
                From intelligent checkout systems and smart recommendation engines to automated support and predictive
                  demand forecasting, Imperative equips retailers with the digital backbone needed to thrive in a
                  hyper-competitive, customer-first economy.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-md">
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
      <h2 className="text-3xl font-bold mb-4">Retail & E-Commerce Solutions</h2>
      <p className="max-w-4xl mx-auto text-center">
      Discover a range of AI-powered solutions crafted to streamline retail operations and deliver seamless,
                  personalized shopping experiences. From backend efficiency to front-end engagement, our tools are
                  designed to drive growth and enhance customer satisfaction.
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
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full"
        >
          <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="mb-4">
            <img src={BagIcon || "/placeholder.svg"} alt="Health" className="w-16 h-16" />
          </motion.div>
          <h3 className="text-lg font-semibold mb-4 text-center">RetailBO</h3>
          <div className="border border-orange-500 p-4 w-full flex-grow flex items-center">
            <p className="text-sm text-center">
            End-to-end back-office management: inventory, orders, returns, customer support.
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
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full"
        >
          <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="mb-4">
            <img src={WifiIcon || "/placeholder.svg"} alt="Monitor" className="w-16 h-16" />
          </motion.div>
          <h3 className="text-lg font-semibold mb-4 text-center">Smart Checkout</h3>
          <div className="border border-orange-500 p-4 w-full flex-grow flex items-center">
            <p className="text-sm text-center">
            AI-powered checkout experience with personalized recommendations.
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
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full"
        >
          <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="mb-4">
            <img src={VirusIcon || "/placeholder.svg"} alt="User Verification" className="w-16 h-16" />
          </motion.div>
          <h3 className="text-lg font-semibold mb-4 text-center">AI fraud detection</h3>
          <div className="border border-orange-500 p-4 w-full flex-grow flex items-center">
            <p className="text-sm text-center">
            Detect and prevent fraudulent transactions using machine learning.
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
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center h-full"
        >
          <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="mb-4">
            <img src={MultiIcon || "/placeholder.svg"} alt="Tablet Kiosk" className="w-16 h-16" />
          </motion.div>
          <h3 className="text-lg font-semibold mb-4 text-center">Omnichannel Integration</h3>
          <div className="border border-orange-500 p-4 w-full flex-grow flex items-center">
            <p className="text-sm text-center">
            Seamless integration of in-store and online sales channels.
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
                        src="https://plus.unsplash.com/premium_photo-1682503147228-25f40121574e?q=80&w=1470&auto=format&fit=crop"
                        alt="Woman shopping with digital retail experience overlay"
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
                        src="https://plus.unsplash.com/premium_photo-1739315914931-0589ca36e8fb?q=80&w=1470&auto=format&fit=crop"
                        alt="Shopping cart with globe representing global e-commerce"
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  </div>
                </AnimatedSection>

                {/* Right side - Content */}
                <AnimatedSection animation="slideLeft" delay={0.3} className="md:col-span-7">
                  <h2 className="text-3xl font-bold mb-4">Real-World Impact</h2>
                  <p className="mb-8">
                  Our solutions have consistently delivered measurable results, enhancing operational efficiency,
                    increasing sales, and improving customer satisfaction for retail businesses.
                  </p>

                  <div className="space-y-6">
                    <StatCounter
                      title="Increase in Online Sales Conversion Rates"
                      value={50}
                      description=" Boosted online sales by 50% with optimized journeys and recommendations."
                    />

                    <StatCounter
                      title="Reduction in Cart Abandonment"
                      value={30}
                      description=" Cut cart abandonment by 30% with personalized checkout and smoother processes."
                    />

                    <StatCounter
                      title="Improvement in Inventory Turnover"
                      value={25}
                      description="Improved inventory management, boosting turnover by 25%."
                    />

<StatCounter
                      title="Fraud Detection Accuracy in Transactions"
                      value={99}
                      description="Achieved 99% fraud detection accuracy with AI-driven solutions."
                    />

                    
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
                With over 15 years of experience in retail digitization, Imperative offers secure, scalable, and
                  innovative solutions that seamlessly integrate operations, enhance customer experiences, and drive
                  growth across both online and in-store channels.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* 10+ Years of Healthcare Tech Expertise */}
                <AnimatedItem>
                  <div className="flex flex-col items-center text-center px-8 md:px-12 relative">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-6">
                      <img src={ScanIcon || "/placeholder.svg"} alt="Experience" className="w-16 h-16" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">15+ years in retail digitization</h3>
                    <p className="text-gray-600 mb-6">
                    With 15+ years of experience, we innovate retail operations through advanced technology.
                    </p>

                    {/* Right divider (visible on desktop) */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "8rem" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1 bg-orange-500"
                    ></motion.div>
                  </div>
                </AnimatedItem>

                {/* ISO 27001 & HIPAA Compliant */}
                <AnimatedItem>
                  <div className="flex flex-col items-center text-center px-8 md:px-12 relative">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-6">
                      <img src={CircleIcon || "/placeholder.svg"} alt="Compliance" className="w-16 h-16" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">Unified Omnichannel Retail Solutions</h3>
                    <p className="text-gray-600 mb-6">
                    Seamlessly integrate online and in-store channels for a unified retail journey.
                    </p>

                    {/* Right divider (visible on desktop) */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "8rem" }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1 bg-orange-500"
                    ></motion.div>
                  </div>
                </AnimatedItem>

                {/* Modular and Scalable Platforms */}
                <AnimatedItem>
                  <div className="flex flex-col items-center text-center px-8 md:px-12">
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-6">
                      <img src={InsightIcon || "/placeholder.svg"} alt="Scalable" className="w-16 h-16" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">AI for Smarter Decisions & Insights</h3>
                    <p className="text-gray-600 mb-6">
                    Our AI tools drive smarter decisions and customer insights.
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
                <h2 className="text-3xl font-bold mb-4">Retail Tech Trends</h2>
                <p className="max-w-4xl mx-auto text-center">
                Retail tech trends are shaping the future of shopping by integrating advanced technologies like AI,
                voice commerce, and predictive analytics to enhance customer experiences and operational efficiency.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="stagger" delay={0.3} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* AI Diagnosis &  delay={0.3} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* AI Diagnosis & Triage */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-orange-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">AI-powered recommendations</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">
                    Boost engagement with AI-driven product suggestions.
                    </p>
                  </motion.div>
                </AnimatedItem>

                {/* Digital Onboarding */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-orange-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">Voice Commerce</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">Enable shopping through voice commands using virtual assistants and smart speakers.</p>
                  </motion.div>
                </AnimatedItem>

                {/* Telemedicine Workflows */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-orange-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">Tailored shopping experiences</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">Tailor the shopping journey to individual customer needs and preferences.</p>
                  </motion.div>
                </AnimatedItem>

                {/* Predictive Billing Analytics */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-orange-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">Smart Inventory Management</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">Use automation and real-time data to optimize stock levels and reduce waste.</p>
                  </motion.div>
                </AnimatedItem>

                {/* Workforce Automation */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-orange-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">Predictive demand forecasting</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">Leverage data to anticipate future demand and optimize inventory planning.</p>
                  </motion.div>
                </AnimatedItem>

                {/* Interoperable Systems */}
                <AnimatedItem>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-orange-500 text-white p-6 text-center"
                  >
                    <div className="inline-block">
                      <h3 className="text-xl font-semibold mb-2">Augmented Reality (AR) Shopping</h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-0.5 bg-white"
                      ></motion.div>
                    </div>
                    <p className="mt-3">Enhance the shopping experience with virtual try-ons and interactive product displays.</p>
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
                  <button className="bg-orange-500 hover:bg-orange-700 text-white px-8 py-6 text-lg">GET IN TOUCH</button>
                </motion.div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </main>
      </div>
    </>
  )
}

export default Retail;
