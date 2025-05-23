"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"
// Import your image at the top
import demoImage from "../assets/images/demo.png"

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
      image: demoImage,
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
      image: demoImage,
      title: "EDUCATIONAL INTERACTIVE KIOSK",
      description:
        "Enhances learning experiences with interactive content, wayfinding capabilities, and information access for students and visitors.",
      categories: ["Educational Kiosk", "Learning Tools", "Campus Solutions"],
      primaryAction: "DISCOVER EDUCATION KIOSKS",
      secondaryAction: "Explore Educational Features",
      bgColor: "bg-orange-500", // Same orange color for all machines
    },
  ]

  // Store the original order of machines for reference
  const [originalMachines] = useState([...initialMachines])

  // Current machines in display order
  const [machines, setMachines] = useState([...initialMachines])

  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [selectedMachineId, setSelectedMachineId] = useState(initialMachines[1].id)
  const [currentDetails, setCurrentDetails] = useState(initialMachines[1])
  const [rotationDirection, setRotationDirection] = useState(null) // 'left' or 'right'
  const [clickedMachineIndex, setClickedMachineIndex] = useState(null) // Track which machine was clicked

  // Simplified approach: track display positions directly
  // This array represents which machine is in which position: [leftMachine, centerMachine, rightMachine]
  const [displayOrder, setDisplayOrder] = useState([0, 1, 2])

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
      const width = window.innerWidth
      setIsMobile(width < 768) // Increase mobile breakpoint from 640px to 768px
      setIsTablet(width >= 768 && width < 1280) // Adjust tablet range from 768px to 1280px

      // Force re-render of images when screen size changes
      setMachines([...initialMachines])
    }

    // Initial check
    checkScreenSize()

    // Add event listener
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Function to handle machine selection with enhanced smooth transition
  const handleMachineSelect = (machineId) => {
    if (isTransitioning) return

    // Find the clicked machine
    const clickedMachine = machines.find((m) => m.id === machineId)
    if (!clickedMachine) return

    // Find the index of the clicked machine in the current display order
    const clickedIndex = machines.findIndex((m) => m.id === machineId)

    // Determine which position (left, center, right) was clicked
    const clickedPosition = displayOrder.indexOf(clickedIndex)

    // If center was clicked, do nothing
    if (clickedPosition === 1) return

    setIsTransitioning(true)

    // Set the clicked machine index for animation targeting
    setClickedMachineIndex(clickedIndex)

    // Determine rotation direction based on which position was clicked
    if (clickedPosition === 0) {
      // Left machine was clicked - rotate left
      setRotationDirection("left")

      // Rotate the display order: [left, center, right] -> [right, left, center]
      const newOrder = [displayOrder[2], displayOrder[0], displayOrder[1]]
      setDisplayOrder(newOrder)

      // Update details to show the machine that was clicked (left machine)
      const leftMachine = machines[displayOrder[0]]
      setCurrentDetails(leftMachine)
      setSelectedMachineId(leftMachine.id)
    } else if (clickedPosition === 2) {
      // Right machine was clicked - rotate right
      setRotationDirection("right")

      // Rotate the display order: [left, center, right] -> [center, right, left]
      const newOrder = [displayOrder[1], displayOrder[2], displayOrder[0]]
      setDisplayOrder(newOrder)

      // Update details to show the machine that was clicked (right machine)
      const rightMachine = machines[displayOrder[2]]
      setCurrentDetails(rightMachine)
      setSelectedMachineId(rightMachine.id)
    }

    // Reset transitioning and clicked index after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
      setClickedMachineIndex(null)
      setRotationDirection(null)
    }, 800)
  }

  // Handle swipe with enhanced smooth transition
  const handleSwipe = (direction) => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setRotationDirection(direction)

    if (direction === "left") {
      // Swipe left - right machine moves to center
      const rightMachineIndex = displayOrder[2]
      const rightMachine = machines[rightMachineIndex]

      // Update details
      setCurrentDetails(rightMachine)
      setSelectedMachineId(rightMachine.id)

      // Set clicked machine for animation
      setClickedMachineIndex(rightMachineIndex)

      // Rotate the display order: [left, center, right] -> [center, right, left]
      setDisplayOrder([displayOrder[1], displayOrder[2], displayOrder[0]])
    } else if (direction === "right") {
      // Swipe right - left machine moves to center
      const leftMachineIndex = displayOrder[0]
      const leftMachine = machines[leftMachineIndex]

      // Update details
      setCurrentDetails(leftMachine)
      setSelectedMachineId(leftMachine.id)

      // Set clicked machine for animation
      setClickedMachineIndex(leftMachineIndex)

      // Rotate the display order: [left, center, right] -> [right, left, center]
      setDisplayOrder([displayOrder[2], displayOrder[0], displayOrder[1]])
    }

    // Reset transitioning after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
      setClickedMachineIndex(null)
      setRotationDirection(null)
    }, 800)
  }

  // Get position name (left, center, right) for a machine index
  const getPositionName = (index) => {
    const position = displayOrder.indexOf(index)
    return position === 0 ? "left" : position === 1 ? "center" : "right"
  }

  // Define animation variants for machine positions with enhanced smooth transition
  const getVariants = (index) => {
    // Use the same scale for all images to prevent pop effect
    const imageScale = 1.0

    // Enhanced positions with more responsive values for mobile
    const positions = {
      left: {
        scale: isMobile ? 0.85 : imageScale, // Slightly smaller on mobile
        x: isMobile ? "-42vw" : isTablet ? "-35vw" : "-20vw", // Adjusted for better mobile alignment
        y: isMobile ? 0 : isTablet ? "-2vw" : -60, // Remove vertical offset on mobile
        rotateY: isMobile ? -10 : -20, // Reduce rotation angle on mobile for better visibility
        opacity: isMobile ? 0.9 : 0.8, // Increase opacity on mobile
        zIndex: 0,
        filter: "brightness(0.95)",
      },
      center: {
        scale: isMobile ? 1.0 : imageScale, // Full size on mobile
        x: isMobile ? "-19vw" : isTablet ? "-3vw" : "0vw", // Adjusted for better mobile alignment
        y: isMobile ? "4vw" : isTablet ? "3vw" : 0,
        rotateY: 0,
        opacity: 1,
        zIndex: 10,
      },
      right: {
        scale: isMobile ? 0.85 : imageScale, // Slightly smaller on mobile
        x: isMobile ? "15vw" : isTablet ? "30vw" : "20vw", // Adjusted for better mobile alignment
        y: isMobile ? 0 : isTablet ? "-2vw" : -60, // Remove vertical offset on mobile
        rotateY: isMobile ? 10 : 20, // Reduce rotation angle on mobile for better visibility
        opacity: isMobile ? 0.9 : 0.8, // Increase opacity on mobile
        zIndex: 0,
        filter: "brightness(0.95)",
      },
    }

    // Get current position name (left, center, right) based on displayOrder
    const position = getPositionName(index)

    // Determine if this is the clicked machine
    const isClickedMachine = index === clickedMachineIndex

    // Custom animation for the clicked machine
    if (isClickedMachine) {
      return {
        animate: {
          ...positions[position],
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 12,
            mass: 0.8,
            duration: 0.8,
          },
        },
      }
    }

    // Default animations for all machines - smooth transition between positions
    return {
      animate: {
        ...positions[position],
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 12,
          mass: 0.8,
          duration: 0.8,
        },
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
  const overlapAmount = isMobile ? "2.5rem" : isTablet ? "4rem" : "6rem" // Increase mobile overlap from 1.5rem to 2.5rem

  // Header animation variants
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1.0],
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        mass: 0.8,
      },
    },
  }

  // Calculate sizes based on position to prevent pop effect
  const getImageSize = (position) => {
    if (position === "center") {
      return isMobile ? "w-40 h-60" : isTablet ? "w-44 h-60" : "w-48 h-100" // Adjusted center image size for mobile
    } else {
      return isMobile ? "w-24 h-36" : isTablet ? "w-40 h-56" : "w-48 h-full" // Increased side image size for better visibility
    }
  }

  // Get the full title for the machine at the given position
  const getTitleForPosition = (position) => {
    if (position === "left") {
      return machines[displayOrder[0]].title
    } else if (position === "center") {
      return machines[displayOrder[1]].title
    } else {
      return machines[displayOrder[2]].title
    }
  }

  return (
    <div className="font-met flex flex-col items-center w-full overflow-hidden">
      {/* Animated Header */}
      <motion.div
        ref={headerRef}
        className="w-full text-center mb-8 sm:mb-10 md:mb-15 px-4 sm:px-6 md:px-8 overflow-hidden"
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
                duration: 0.8,
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
        {/* 3D perspective container with deeper perspective for more dramatic rotation */}
        <div
          className="w-full relative z-10"
          style={{ perspective: isMobile ? "1500px" : "2000px" }} // Reduced perspective on mobile
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Machine slider section with 3D transitions */}
          <div
            className="flex justify-center items-center gap-0 px-2 sm:px-4 min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[360px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {machines.map((machine, index) => {
              const position = getPositionName(index)
              const isSideImage = position !== "center"
              const isCenter = position === "center"
              const isClickedMachine = index === clickedMachineIndex
              const imageSize = getImageSize(position)
              const variants = getVariants(index)
              const fullTitle = machine.title
              const shortTitle = fullTitle.split(" ")[0] // First word of the title

              return (
                <motion.div
                  key={`${machine.id}-${index}`}
                  className="cursor-pointer flex flex-col items-center absolute"
                  animate={variants.animate}
                  whileHover={
                    !isCenter && !isMobile
                      ? {
                          opacity: 0.95,
                          filter: "brightness(1.1)",
                          transition: { duration: 0.2 },
                        }
                      : {}
                  }
                  onClick={() => handleMachineSelect(machine.id)}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                    zIndex: isClickedMachine ? 20 : isCenter ? 10 : 0,
                    left: "50%", // Center all items
                    marginLeft: isMobile ? "0" : "-5%", // No offset on mobile
                    transform: isMobile ? "translateX(-50%)" : "none", // Center properly on mobile
                  }}
                >
                  {/* Title above side images only - normal color */}
                  {isSideImage && (
                    <motion.div
                      className="mb-1 sm:mb-2 text-center"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <h3 className="text-xs sm:text-sm font-semibold truncate max-w-24 sm:max-w-28 md:max-w-32 lg:max-w-40">
                        {shortTitle} {/* Display only the first word of the title */}
                      </h3>
                    </motion.div>
                  )}

                  <motion.div
                    className={`
                      relative
                      ${imageSize}
                      ${isCenter ? "rounded-t-lg" : "rounded-lg"} overflow-hidden
                      ${isMobile ? "" : ""} 
                      ${isMobile && !isCenter ? "mx-2" : ""}
                    `}
                  >
                    <img
                      src={machine.image || "/placeholder.svg"}
                      alt={`Kiosk ${machine.id}`}
                      className={`w-full h-full ${isMobile ? "object-contain" : "object-cover"}`}
                      style={{
                        backfaceVisibility: "hidden",
                        // Same brightness for all images to prevent pop effect
                        filter: isMobile ? "brightness(1.1)" : "brightness(1)",
                      }}
                      onError={(e) => {
                        console.error("Image failed to load:", e)
                        e.currentTarget.src = "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=300"
                      }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Featured machine details section - consistently orange for all machines */}
        <div
          className="w-full bg-orange-500 text-white p-4 sm:p-6 md:p-8 relative
          rounded-t-none border-t-0 shadow-lg mt-6 sm:mt-8"
          style={{
            marginTop: `-${overlapAmount}`,
            clipPath: "polygon(0 15px, 100% 15px, 100% 100%, 0% 100%)",
            width: "100%", // Change from 100vw to 100% to prevent horizontal scrolling issues
            maxWidth: "100vw",
            marginLeft: isMobile ? "0" : "calc(-50vw + 50%)", // Don't use negative margins on mobile
            left: 0,
            right: 0,
            position: "relative",
            boxSizing: "border-box",
          }}
        >
          <div className="max-w-6xl mx-auto pt-6 sm:pt-8 md:pt-10 px-3 sm:px-4 md:px-6">
            {/* Two-column layout for details - responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {/* Left column: Title, Description, Primary Action - Center on mobile, right-aligned on larger screens */}
              <div className="flex flex-col px-4 lg:pr-20 text-center lg:text-right">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {currentDetails.title}
                </h2>
                <p className="text-sm md:text-base mb-3 sm:mb-4 md:mb-6 flex-grow">{currentDetails.description}</p>
                <div className="mt-auto flex justify-center lg:justify-end">
                  <motion.button
                    className="w-full sm:w-auto bg-orange-500 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold border-2 border-white text-sm sm:text-base md:text-lg shadow-md hover:bg-white hover:text-orange-500 active:bg-white active:text-orange-500 transition-all duration-100 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {currentDetails.primaryAction}
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>

              {/* Right column: Categories - Center on mobile, right-aligned on larger screens */}
              <div className="flex flex-col justify-center items-center lg:items-end px-4 lg:pr-20 mb-10 sm:mb-20">
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 justify-center lg:justify-end w-full">
                  {currentDetails.categories.map((category, index) => (
                    <motion.button
                      key={index}
                      className="bg-orange-500 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-full border-2 border-white text-xs sm:text-sm md:text-base font-medium shadow-sm hover:bg-white hover:text-orange-500 active:bg-white active:text-orange-500 transition-all duration-100"
                      whileHover={{ scale: 1.08, boxShadow: "0 3px 10px rgba(0,0,0,0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MachineSlider;
