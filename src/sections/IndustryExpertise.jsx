"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Building2,
  HeartPulse,
  Plane,
  ShoppingBag,
  UtensilsCrossed,
  Wifi,
  LandmarkIcon,
  GraduationCap,
  Truck,
  Film,
  CreditCard,
  Stethoscope,
  Hotel,
  BarChart3,
  ShieldCheck,
} from "lucide-react"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Industry data with icons
const industryData = {
  banking: {
    name: "Banking & Financial Services",
    icon: Building2,
    cards: [
      {
        title: "Retail Banking",
        description:
          "Enhance customer experience with AI-powered automation, fraud detection, and personalized banking services.",
        image: "https://source.unsplash.com/random/?bank,banking",
        icon: CreditCard,
      },
      {
        title: "Commercial Banking",
        description:
          "Streamline operations with automated KYC, risk management, and compliance-driven loan processing.",
        image: "https://source.unsplash.com/random/?finance,commercial",
        icon: Building2,
      },
      {
        title: "Digital Payments & FinTech",
        description: "Leverage AI-driven credit processing and innovative payment solutions for modern consumers.",
        image: "https://source.unsplash.com/random/?fintech,payment",
        icon: CreditCard,
      },
      {
        title: "Regulatory Compliance & Security",
        description: "Ensure financial data security, AML compliance, and fraud prevention with advanced technologies.",
        image: "https://source.unsplash.com/random/?security,finance",
        icon: ShieldCheck,
      },
      {
        title: "Wealth Management",
        description: "Provide personalized investment advice, portfolio management, and financial planning services.",
        image: "https://source.unsplash.com/random/?wealth,investment",
        icon: BarChart3,
      },
      {
        title: "Insurance Solutions",
        description: "Streamline claims processing, risk assessment, and policy management for insurance providers.",
        image: "https://source.unsplash.com/random/?insurance",
        icon: ShieldCheck,
      },
    ],
  },
  healthcare: {
    name: "Healthcare",
    icon: HeartPulse,
    cards: [
      {
        title: "Patient Management",
        description:
          "Streamline patient records, appointments, and care coordination with integrated digital solutions.",
        image: "https://source.unsplash.com/random/?hospital,patient",
        icon: HeartPulse,
      },
      {
        title: "Telemedicine",
        description:
          "Enable secure virtual consultations and remote patient monitoring with HIPAA-compliant platforms.",
        image: "https://source.unsplash.com/random/?telemedicine,doctor",
        icon: Stethoscope,
      },
      {
        title: "Healthcare Analytics",
        description: "Leverage data insights to improve patient outcomes, optimize operations, and reduce costs.",
        image: "https://source.unsplash.com/random/?medical,data",
        icon: BarChart3,
      },
      {
        title: "Medical Billing & Claims",
        description:
          "Automate insurance verification, claims processing, and payment reconciliation for healthcare providers.",
        image: "https://source.unsplash.com/random/?medical,billing",
        icon: CreditCard,
      },
      {
        title: "Clinical Decision Support",
        description: "AI-powered systems to assist healthcare professionals in diagnosis and treatment planning.",
        image: "https://source.unsplash.com/random/?clinical,doctor",
        icon: Stethoscope,
      },
    ],
  },
  travel: {
    name: "Travel & Hospitality",
    icon: Plane,
    cards: [
      {
        title: "Booking Systems",
        description:
          "Implement seamless reservation platforms for hotels, flights, and experiences with dynamic pricing.",
        image: "https://source.unsplash.com/random/?travel,booking",
        icon: CreditCard,
      },
      {
        title: "Guest Experience",
        description:
          "Enhance customer satisfaction with personalized services, digital check-ins, and loyalty programs.",
        image: "https://source.unsplash.com/random/?hotel,resort",
        icon: Hotel,
      },
      {
        title: "Revenue Management",
        description: "Optimize pricing strategies and inventory allocation to maximize revenue and occupancy rates.",
        image: "https://source.unsplash.com/random/?hotel,business",
        icon: BarChart3,
      },
      {
        title: "Travel Analytics",
        description:
          "Gain insights into traveler preferences, market trends, and operational efficiency opportunities.",
        image: "https://source.unsplash.com/random/?travel,data",
        icon: BarChart3,
      },
      {
        title: "Tour Operations",
        description: "Manage guides, itineraries, and group bookings with specialized tour management software.",
        image: "https://source.unsplash.com/random/?tour,guide",
        icon: Plane,
      },
      {
        title: "Airline Solutions",
        description: "Optimize crew scheduling, flight operations, and passenger services for airlines.",
        image: "https://source.unsplash.com/random/?airline,airport",
        icon: Plane,
      },
    ],
  },
  retail: {
    name: "Retail & E-Commerce",
    icon: ShoppingBag,
    cards: [
      {
        title: "Omnichannel Retail",
        description: "Create seamless shopping experiences across online, mobile, and physical store environments.",
        image: "https://source.unsplash.com/random/?retail,store",
        icon: ShoppingBag,
      },
      {
        title: "Inventory Management",
        description: "Optimize stock levels, reduce carrying costs, and prevent stockouts with AI-powered forecasting.",
        image: "https://source.unsplash.com/random/?warehouse,inventory",
        icon: ShoppingBag,
      },
      {
        title: "Customer Analytics",
        description:
          "Understand shopping behaviors and preferences to deliver personalized marketing and recommendations.",
        image: "https://source.unsplash.com/random/?shopping,data",
        icon: BarChart3,
      },
      {
        title: "Digital Storefronts",
        description:
          "Build engaging e-commerce platforms with intuitive UX, secure payments, and efficient fulfillment.",
        image: "https://source.unsplash.com/random/?ecommerce,online",
        icon: ShoppingBag,
      },
      {
        title: "Merchandising Optimization",
        description:
          "Data-driven product placement, pricing, and promotions to maximize sales and customer satisfaction.",
        image: "https://source.unsplash.com/random/?retail,display",
        icon: ShoppingBag,
      },
    ],
  },
  food: {
    name: "Food & Beverages",
    icon: UtensilsCrossed,
    cards: [
      {
        title: "Supply Chain Management",
        description:
          "Ensure food safety and quality with end-to-end traceability and temperature monitoring solutions.",
        image: "https://source.unsplash.com/random/?food,supply",
        icon: Truck,
      },
      {
        title: "Restaurant Operations",
        description: "Streamline kitchen workflows, order management, and table service with integrated POS systems.",
        image: "https://source.unsplash.com/random/?restaurant,kitchen",
        icon: UtensilsCrossed,
      },
      {
        title: "Delivery Optimization",
        description:
          "Enhance last-mile delivery with route planning, real-time tracking, and contactless handover options.",
        image: "https://source.unsplash.com/random/?food,delivery",
        icon: Truck,
      },
      {
        title: "Customer Engagement",
        description: "Build loyalty with personalized offers, digital menus, and seamless online ordering experiences.",
        image: "https://source.unsplash.com/random/?restaurant,customer",
        icon: UtensilsCrossed,
      },
      {
        title: "Food Production",
        description: "Optimize manufacturing processes, quality control, and compliance for food producers.",
        image: "https://source.unsplash.com/random/?food,factory",
        icon: UtensilsCrossed,
      },
    ],
  },
  telecom: {
    name: "Telecom Services",
    icon: Wifi,
    cards: [
      {
        title: "Network Operations",
        description: "Monitor and optimize network performance, capacity planning, and service quality management.",
        image: "https://source.unsplash.com/random/?network,telecom",
        icon: Wifi,
      },
      {
        title: "Customer Experience",
        description:
          "Enhance subscriber satisfaction with self-service portals, personalized plans, and digital support.",
        image: "https://source.unsplash.com/random/?mobile,customer",
        icon: Wifi,
      },
      {
        title: "Billing & Revenue",
        description: "Implement flexible charging models, subscription management, and payment processing systems.",
        image: "https://source.unsplash.com/random/?billing,telecom",
        icon: CreditCard,
      },
      {
        title: "5G & IoT Solutions",
        description: "Develop next-generation connectivity applications for smart cities, industries, and consumers.",
        image: "https://source.unsplash.com/random/?5g,technology",
        icon: Wifi,
      },
      {
        title: "Telecom Infrastructure",
        description: "Plan, deploy, and maintain physical and virtual infrastructure for telecommunications networks.",
        image: "https://source.unsplash.com/random/?tower,telecom",
        icon: Wifi,
      },
    ],
  },
  public: {
    name: "Public Sector & Government",
    icon: LandmarkIcon,
    cards: [
      {
        title: "Citizen Services",
        description:
          "Digitize public services with user-friendly portals, mobile applications, and secure authentication.",
        image: "https://source.unsplash.com/random/?government,citizen",
        icon: LandmarkIcon,
      },
      {
        title: "Smart City Solutions",
        description: "Implement IoT-based infrastructure monitoring, traffic management, and public safety systems.",
        image: "https://source.unsplash.com/random/?smartcity,urban",
        icon: Building2,
      },
      {
        title: "Government Operations",
        description: "Streamline administrative processes, document management, and inter-agency collaboration.",
        image: "https://source.unsplash.com/random/?government,office",
        icon: LandmarkIcon,
      },
      {
        title: "Public Health Systems",
        description:
          "Support healthcare delivery, disease surveillance, and emergency response with integrated platforms.",
        image: "https://source.unsplash.com/random/?publichealth,medical",
        icon: HeartPulse,
      },
      {
        title: "Social Services",
        description: "Manage benefits distribution, case management, and outreach programs for vulnerable populations.",
        image: "https://source.unsplash.com/random/?community,service",
        icon: LandmarkIcon,
      },
    ],
  },
  education: {
    name: "Education Management",
    icon: GraduationCap,
    cards: [
      {
        title: "Learning Management",
        description: "Deliver engaging online courses, assessments, and student progress tracking for remote learning.",
        image: "https://source.unsplash.com/random/?education,online",
        icon: GraduationCap,
      },
      {
        title: "School Administration",
        description:
          "Simplify enrollment, scheduling, attendance, and resource allocation for educational institutions.",
        image: "https://source.unsplash.com/random/?school,admin",
        icon: GraduationCap,
      },
      {
        title: "Student Analytics",
        description:
          "Identify at-risk students, personalize learning paths, and measure educational outcomes effectively.",
        image: "https://source.unsplash.com/random/?student,data",
        icon: BarChart3,
      },
      {
        title: "Campus Management",
        description: "Coordinate facilities, security, events, and communications across educational campuses.",
        image: "https://source.unsplash.com/random/?campus,university",
        icon: Building2,
      },
      {
        title: "Research Management",
        description: "Track grants, publications, and collaborative projects for higher education institutions.",
        image: "https://source.unsplash.com/random/?research,academic",
        icon: GraduationCap,
      },
    ],
  },
  logistics: {
    name: "Logistics Services",
    icon: Truck,
    cards: [
      {
        title: "Supply Chain Visibility",
        description: "Track shipments in real-time, monitor inventory levels, and optimize warehouse operations.",
        image: "https://source.unsplash.com/random/?logistics,warehouse",
        icon: Truck,
      },
      {
        title: "Route Optimization",
        description: "Reduce delivery times and fuel consumption with AI-powered route planning and fleet management.",
        image: "https://source.unsplash.com/random/?delivery,route",
        icon: Truck,
      },
      {
        title: "Warehouse Automation",
        description:
          "Implement robotics, IoT sensors, and smart inventory systems for efficient fulfillment operations.",
        image: "https://source.unsplash.com/random/?warehouse,automation",
        icon: Building2,
      },
      {
        title: "Last-Mile Delivery",
        description:
          "Enhance customer satisfaction with precise delivery windows, real-time tracking, and proof of delivery.",
        image: "https://source.unsplash.com/random/?delivery,package",
        icon: Truck,
      },
      {
        title: "Freight Management",
        description:
          "Coordinate multimodal transportation, customs clearance, and international shipping documentation.",
        image: "https://source.unsplash.com/random/?freight,shipping",
        icon: Truck,
      },
    ],
  },
  media: {
    name: "Media & Entertainment",
    icon: Film,
    cards: [
      {
        title: "Content Management",
        description: "Organize, distribute, and monetize digital content across multiple platforms and devices.",
        image: "https://source.unsplash.com/random/?media,content",
        icon: Film,
      },
      {
        title: "Streaming Services",
        description: "Deliver high-quality video and audio content with personalized recommendations and analytics.",
        image: "https://source.unsplash.com/random/?streaming,video",
        icon: Film,
      },
      {
        title: "Audience Engagement",
        description: "Build loyal communities with interactive features, social integration, and targeted content.",
        image: "https://source.unsplash.com/random/?audience,entertainment",
        icon: Film,
      },
      {
        title: "Digital Rights Management",
        description: "Protect intellectual property and manage licensing across global distribution channels.",
        image: "https://source.unsplash.com/random/?copyright,digital",
        icon: ShieldCheck,
      },
      {
        title: "Production Management",
        description:
          "Coordinate creative teams, schedules, and resources for film, TV, and digital content production.",
        image: "https://source.unsplash.com/random/?film,production",
        icon: Film,
      },
    ],
  },
}

// Main Industry Expertise Component
const IndustryExpertise = () => {
  // State to track the selected industry
  const [selectedIndustry, setSelectedIndustry] = useState("banking")
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)
  const buttonsRef = useRef(null)

  // Check for mobile screen size - improved implementation
  useEffect(() => {
    // Function to check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    // Set initial state immediately
    if (typeof window !== "undefined") {
      // Set initial state immediately
      checkMobile()

      // Add event listener with debounce for better performance
      let resizeTimer
      const handleResize = () => {
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(checkMobile, 100)
      }

      window.addEventListener("resize", handleResize)

      // Cleanup
      return () => {
        clearTimeout(resizeTimer)
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Get the current industry data
  const currentIndustry = industryData[selectedIndustry]

  // Check if we need scrolling (more than 4 cards)
  const hasMoreCards = currentIndustry.cards.length > 4

  // Animation variants for buttons
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  }

  // Animation variants for heading and description
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: 0.2,
        duration: 0.8,
      },
    },
  }

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.05,
      },
    },
  }

  const buttonItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  // Set loaded state after initial render
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Initialize GSAP animations on component mount
  useEffect(() => {
    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-6 font-[Inter,sans-serif]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Text and Industry Buttons */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <motion.h2
              className="text-4xl font-bold tracking-tight text-gray-900"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={headingVariants}
            >
              Industry Expertise Tailored For Your Business
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={descriptionVariants}
            >
              Our deep industry knowledge allows us to design customized solutions that drive efficiency, innovation,
              and growth. With a keen understanding of market dynamics, we empower businesses to stay ahead in an
              evolving digital landscape.
            </motion.p>
          </div>

          <motion.div
            ref={buttonsRef}
            className="flex flex-wrap gap-3 justify-center sm:justify-start mb-0"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={buttonContainerVariants}
          >
            {Object.keys(industryData).map((industry) => {
              const IndustryIcon = industryData[industry].icon
              return (
                <motion.button
                  key={industry}
                  className={`industry-button ${
                    isMobile
                      ? "w-12 h-12 p-0 rounded-full flex items-center justify-center"
                      : "px-4 py-2 rounded-full font-medium flex items-center gap-2"
                  } transition-colors duration-200 ${
                    selectedIndustry === industry
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-orange-100 hover:bg-orange-200 text-orange-800"
                  }`}
                  onClick={() => setSelectedIndustry(industry)}
                  variants={buttonItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  title={industryData[industry].name}
                >
                  <IndustryIcon className={isMobile ? "w-5 h-5" : "w-4 h-4"} />
                  {!isMobile && <span>{industryData[industry].name}</span>}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Display selected industry title on mobile */}
          {isMobile && (
            <motion.div
              className="w-full text-center mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
              }}
              key={selectedIndustry}
            >
              <h3 className="text-xl font-medium text-orange-800">{industryData[selectedIndustry].name}</h3>
            </motion.div>
          )}
        </div>

        {/* Right Column - Industry Cards with hidden scrollbar */}
        <div className="relative">
          <div
            className="overflow-y-auto scrollbar-hidden"
            style={{
              height: hasMoreCards ? "450px" : "auto", // Fixed height only if more than 4 cards
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                {currentIndustry.cards.map((card, index) => {
                  const CardIcon = card.icon
                  return (
                    <motion.div
                      key={`${selectedIndustry}-${index}`}
                      className="relative overflow-hidden rounded-lg h-[200px]"
                      custom={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        },
                      }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="w-full h-full relative overflow-hidden">
                        <motion.img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                          loading={index < 4 ? "eager" : "lazy"}
                          whileHover={{
                            scale: 1.1,
                            transition: {
                              duration: 0.7,
                              ease: [0.25, 0.1, 0.25, 1.0],
                            },
                          }}
                        />
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-black bg-opacity-70 p-6 flex flex-col justify-end"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: 0.1 + index * 0.05,
                            duration: 0.4,
                            ease: "easeOut",
                          },
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <CardIcon className="w-5 h-5 text-orange-500" />
                          <h3 className="text-xl font-bold text-white">{card.title}</h3>
                        </div>
                        <p className="text-sm text-white">{card.description}</p>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtle scroll hint if there are more cards */}
          {hasMoreCards && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none flex justify-center items-end pb-2"></div>
          )}
        </div>
      </div>
    </section>
  )
}

export default IndustryExpertise
