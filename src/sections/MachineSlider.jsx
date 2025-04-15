"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"
// Import your image at the top
import demoImage from "../assets/images/demo.png"
import eduImage from "../assets/images/edu.png"
import healthImage from "../assets/images/heath.png"

const MachineSlider = () => {
  // Initial machines data - all with the same orange color
  const initialMachines = [
    {
      id: 1,
      image: demoImage,
      title: "CASH AND CHEQUE DEPOSIT KIOSK",
      description:
        "Facilitates quick and secure deposits of cash and cheques, improving teller efficiency and reducing wait time for customers.",
      categories: ["Banking Kiosk", "Financial Services", "Self-Service"],
      primaryAction: "EXPLORE ALL KIOSK'S",
      secondaryAction: "Explore Kiosk Offerings",
      bgColor: "bg-orange-500", // Same orange color for all machines
    },
    {
      id: 2,
      image: healthImage,
      title: "HEALTHCARE INFORMATION KIOSK",
      description:
        "Streamlines patient check-in, provides medical information, and reduces administrative burden on healthcare staff.",
      categories: ["Healthcare Kiosk", "Medical Services", "Patient Experience"],
      primaryAction: "VIEW HEALTHCARE SOLUTIONS",
      secondaryAction: "Explore Healthcare Options",
      bgColor: "bg-orange-500", // Same orange color for all machines
    },
    {
      id: 3,
      image: eduImage,
      title: "EDUCATIONAL INTERACTIVE KIOSK",
      description:
        "Enhances learning experiences with interactive content, wayfinding capabilities, and information access for students and visitors.",
      categories: ["Educational Kiosk", "Learning Tools", "Campus Solutions"],
      primaryAction: "DISCOVER EDUCATION KIOSKS",
      secondaryAction: "Explore Educational Features",
      bgColor: "bg-orange-500", // Same orange color for all machines
    },
  ]

  const [machines, setMachines] = useState(initialMachines)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [selectedMachineId, setSelectedMachineId] = useState(initialMachines[1].id)
  const [currentDetails, setCurrentDetails] = useState(initialMachines[1])

  // Refs and animations for header
  const headerRef = useRef(null)
  const headerControls = useAnimation()
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 })

  // Animate header when in view
  useEffect(() => {
    if (isHeaderInView) {
      headerControls.start("visible")
    }
  }, [isHeaderInView, headerControls])

  // Check screen size on mount and resize with improved breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }

    // Initial check
    checkScreenSize()

    // Add event listener
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Function to handle machine selection with optimized transition
  const handleMachineSelect = (machineId) => {
    if (isTransitioning || selectedMachineId === machineId) return

    setIsTransitioning(true)

    // Find the clicked machine to immediately update details
    const clickedMachine = machines.find((m) => m.id === machineId)
    if (clickedMachine) {
      // Update details immediately for smoother experience
      setCurrentDetails(clickedMachine)
    }

    // Find the index of the clicked machine
    const clickedIndex = machines.findIndex((machine) => machine.id === machineId)
    // Find the index of the current center machine
    const centerIndex = 1

    if (clickedIndex !== centerIndex) {
      // Create a new array for the rotation effect
      const newMachines = [...machines]

      // If clicking the left machine (index 0)
      if (clickedIndex === 0) {
        // Move left to center, center to right
        ;[newMachines[0], newMachines[1], newMachines[2]] = [newMachines[2], newMachines[0], newMachines[1]]
      }
      // If clicking the right machine (index 2)
      else if (clickedIndex === 2) {
        // Move right to center, center becomes left
        ;[newMachines[0], newMachines[1], newMachines[2]] = [newMachines[1], newMachines[2], newMachines[0]]
      }

      // Apply the rotation effect immediately
      setMachines(newMachines)
      setSelectedMachineId(machineId)

      // Reset transitioning after a shorter animation time
      setTimeout(() => {
        setIsTransitioning(false)
      }, 400)
    } else {
      // If clicking the center machine, just reset the transition state
      setIsTransitioning(false)
    }
  }

  // Handle swipe with optimized transition - only triggered by explicit user swipe
  const handleSwipe = (direction) => {
    if (isTransitioning) return

    setIsTransitioning(true)

    // Create a new array for the rotation effect
    const newMachines = [...machines]
    let targetMachine

    if (direction === "left") {
      // Rotate left: right becomes center, center becomes left, left becomes right
      ;[newMachines[0], newMachines[1], newMachines[2]] = [newMachines[1], newMachines[2], newMachines[0]]
      targetMachine = newMachines[1]
    } else if (direction === "right") {
      // Rotate right: left becomes center, center becomes right, right becomes left
      ;[newMachines[0], newMachines[1], newMachines[2]] = [newMachines[2], newMachines[0], newMachines[1]]
      targetMachine = newMachines[1]
    }

    // Update details immediately for smoother experience
    if (targetMachine) {
      setCurrentDetails(targetMachine)
      setSelectedMachineId(targetMachine.id)
    }

    // Apply the rotation immediately
    setMachines(newMachines)

    // Reset transitioning after a shorter animation time
    setTimeout(() => {
      setIsTransitioning(false)
    }, 400)
  }

  // Define animation variants for machine positions - adjusted to prevent center image from popping
  const getVariants = (index) => {
    // Default positions - adjusted for better consistency across screen sizes
    const positions = {
      left: {
        scale: isMobile ? 0.8 : isTablet ? 0.85 : 0.9, // Increased scale for side images
        x: isMobile ? "-15vw" : isTablet ? "-16vw" : "-18vw", // Adjusted position for better spacing
        y: 0,
        rotateY: isMobile ? -15 : -20, // Less rotation on smaller screens
        opacity: 0.8, // Increased opacity for better visibility
        zIndex: 0,
      },
      center: {
        scale: isMobile ? 0.95 : 1, // Slightly reduced scale on mobile to prevent popping
        x: "0vw",
        y: 0,
        rotateY: 0,
        opacity: 1,
        zIndex: 10,
      },
      right: {
        scale: isMobile ? 0.8 : isTablet ? 0.85 : 0.9, // Increased scale for side images
        x: isMobile ? "15vw" : isTablet ? "16vw" : "18vw", // Adjusted position for better spacing
        y: 0,
        rotateY: isMobile ? 15 : 20, // Less rotation on smaller screens
        opacity: 0.8, // Increased opacity for better visibility
        zIndex: 0,
      },
    }

    const positionNames = ["left", "center", "right"]
    const position = positionNames[index]

    return {
      initial: {
        ...positions[position],
        opacity: 0,
        rotateY: position === "left" ? -90 : position === "right" ? 90 : 0,
      },
      animate: {
        ...positions[position],
        opacity: positions[position].opacity,
      },
      exit: {
        ...positions[position === "left" ? "right" : position === "right" ? "left" : "center"],
        opacity: 0,
        rotateY: position === "left" ? 90 : position === "right" ? -90 : 0,
      },
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 18,
        mass: 0.8,
        duration: 0.4,
      },
    }
  }

  // Handle touch events for mobile swipe - only on the machine area
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleSwipe("left")
    } else if (isRightSwipe) {
      handleSwipe("right")
    }
  }

  // Calculate overlap amount for design - responsive based on screen size
  const overlapAmount = isMobile ? "1.5rem" : isTablet ? "2rem" : "3rem"

  // Header animation variants
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* Animated Header */}
      <motion.div
        ref={headerRef}
        className="w-full text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6 md:px-8 overflow-hidden"
        initial="hidden"
        animate={headerControls}
        variants={headerVariants}
      >
        <div className="inline-block relative pb-4">
          {/* Animated underline that appears after text animation */}
          <motion.div
            className="absolute h-1 bg-orange-500 bottom-0 left-0 right-0"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: 1,
              opacity: 1,
              transition: {
                delay: 0.8,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            style={{ transformOrigin: "left", zIndex: 1 }}
          />

          <motion.h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight relative z-10">
            {/* Split text into words for staggered animation */}
            {"TRANSFORMING TRANSACTIONS WITH SELF-SERVICE & AUTOMATION".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mx-1"
                variants={wordVariants}
                style={{ transformOrigin: "bottom" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </motion.div>

      {/* Container with relative positioning for content flow */}
      <div className="w-full relative">
        {/* 3D perspective container */}
        <div
          className="w-full relative z-10"
          style={{ perspective: "1500px" }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Machine slider section with 3D transitions */}
          <div
            className="flex justify-center items-center gap-0 px-2 sm:px-4 min-h-[200px] sm:min-h-[240px] md:min-h-[300px] lg:min-h-[340px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {machines.map((machine, index) => {
              const { initial, animate, exit, transition } = getVariants(index)
              const isSideImage = index !== 1
              const isCenter = index === 1

              return (
                <motion.div
                  key={`${machine.id}-${index}`}
                  className="cursor-pointer flex flex-col items-center"
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  transition={transition}
                  whileHover={!isCenter && !isMobile ? { opacity: 0.9, scale: animate.scale * 1.05 } : {}}
                  onClick={() => handleMachineSelect(machine.id)}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: index === 0 ? "right center" : index === 2 ? "left center" : "center center",
                  }}
                >
                  {/* Title above side images only - normal color */}
                  {isSideImage && (
                    <div className="mb-1 sm:mb-2 text-center">
                      <h3 className="text-xs sm:text-sm font-semibold truncate max-w-20 sm:max-w-28 md:max-w-32 lg:max-w-40">
                        {machine.title.split(" ")[0]} {/* Display only the first word of the title */}
                      </h3>
                    </div>
                  )}

                  <div
                    className={`
                      relative transition-all duration-300
                      ${
                        isCenter
                          ? "w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-68 lg:w-56 lg:h-84"
                          : "w-24 h-36 sm:w-32 sm:h-44 md:w-40 md:h-56 lg:w-48 lg:h-68"
                      }
                      ${isCenter ? "rounded-t-lg" : "rounded-lg"} overflow-hidden
                    `}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src={machine.image || "/placeholder.svg"}
                      alt={`Kiosk ${machine.id}`}
                      className="w-full h-full object-cover shadow-md"
                      style={{ backfaceVisibility: "hidden" }}
                      onError={(e) => {
                        console.error("Image failed to load:", e)
                        e.currentTarget.src = "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=300"
                      }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Featured machine details section - consistently orange for all machines */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDetails.id}
            className="w-full bg-orange-500 text-white p-4 sm:p-6 md:p-8 relative
            rounded-t-none border-t-0 shadow-lg mt-6 sm:mt-8"
            style={{
              marginTop: `-${overlapAmount}`,
              clipPath: "polygon(0 15px, 100% 15px, 100% 100%, 0% 100%)",
              width: "100vw",
              marginLeft: "calc(-50vw + 50%)",
              left: 0,
              right: 0,
              position: "relative",
              boxSizing: "border-box",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.1 }}
          >
            <div className="max-w-6xl mx-auto pt-6 sm:pt-8 md:pt-10 px-3 sm:px-4 md:px-6">
              {/* Two-column layout for details - responsive grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
                {/* Left column: Title, Description, Primary Action */}
                <div className="flex flex-col">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                    {currentDetails.title}
                  </h2>
                  <p className="text-sm md:text-base mb-4 sm:mb-5 md:mb-6 flex-grow">{currentDetails.description}</p>
                  <div className="mt-auto">
                    <motion.button
                      className="w-full sm:w-auto bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold border-2 border-white text-sm sm:text-base md:text-lg shadow-md hover:bg-white hover:text-black active:bg-white active:text-black transition-all duration-100 flex items-center justify-center sm:justify-start gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {currentDetails.primaryAction}
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Right column: Categories only - with orange background color for all machines */}
                <div className="flex flex-col justify-center items-start mt-5 lg:mt-0">
                  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-start w-full">
                    {currentDetails.categories.map((category, index) => (
                      <motion.button
                        key={index}
                        className="bg-orange-500 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-full border-2 border-white text-xs sm:text-sm md:text-base font-medium shadow-sm hover:bg-white hover:text-black active:bg-white active:text-black transition-all duration-100"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MachineSlider
