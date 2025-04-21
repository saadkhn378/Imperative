"use client"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { X } from "lucide-react"

// Import Swiper and modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechInnovate",
    content:
      "Working with this team has transformed our business processes. Their innovative solutions helped us increase efficiency by 40% in just three months.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Director of Operations",
    company: "GlobalSystems",
    content:
      "The attention to detail and customer service is exceptional. They don't just deliver a product, they become a valuable partner in your success.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Marketing Lead",
    company: "BrandExperts",
    content:
      "I've worked with many service providers, but none have delivered the level of quality and innovation that this team consistently provides.",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CEO",
    company: "InnovateNow",
    content:
      "Since partnering with this team, our customer satisfaction scores have increased by 35%. Their ability to understand our needs and deliver solutions is unmatched.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Jennifer Park",
    role: "Product Manager",
    company: "TechSolutions",
    content:
      "The team's dedication to quality and innovation has helped us launch our product ahead of schedule. Their expertise and guidance were invaluable throughout the process.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Robert Thompson",
    role: "VP of Engineering",
    company: "CloudSecure",
    content:
      "Their cybersecurity expertise is unparalleled. They identified vulnerabilities we weren't even aware of and implemented robust solutions that have protected our data from multiple attempted breaches.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    role: "Chief Financial Officer",
    company: "FinTech Innovations",
    content:
      "The ROI on our investment with this team has been remarkable. Their financial software solutions streamlined our operations, reduced errors by 75%, and ultimately increased our bottom line by 28% year-over-year.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
]

const TestimonialSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const swiperRef1 = useRef(null)
  const swiperRef2 = useRef(null)
  const mobileSwiperRef1 = useRef(null)
  const mobileSwiperRef2 = useRef(null)

  // State to track selected testimonial
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)

  // Function to pause all swipers
  const pauseAllSwipers = () => {
    if (swiperRef1.current?.swiper) {
      swiperRef1.current.swiper.autoplay.stop()
    }
    if (swiperRef2.current?.swiper) {
      swiperRef2.current.swiper.autoplay.stop()
    }
    if (mobileSwiperRef1.current?.swiper) {
      mobileSwiperRef1.current.swiper.autoplay.stop()
    }
    if (mobileSwiperRef2.current?.swiper) {
      mobileSwiperRef2.current.swiper.autoplay.stop()
    }
  }

  // Function to resume all swipers
  const resumeAllSwipers = () => {
    if (swiperRef1.current?.swiper) {
      swiperRef1.current.swiper.autoplay.start()
    }
    if (swiperRef2.current?.swiper) {
      swiperRef2.current.swiper.autoplay.start()
    }
    if (mobileSwiperRef1.current?.swiper) {
      mobileSwiperRef1.current.swiper.autoplay.start()
    }
    if (mobileSwiperRef2.current?.swiper) {
      mobileSwiperRef2.current.swiper.autoplay.start()
    }
  }

  // Handle testimonial click
  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial)
    pauseAllSwipers()
  }

  // Handle close modal
  const handleCloseModal = () => {
    setSelectedTestimonial(null)
    resumeAllSwipers()
  }

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  }

  // Overlay animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  // Particle animation for testimonial cards
  const ParticlesOverlay = () => {
    const particlesRef = useRef(null)

    useEffect(() => {
      const particles = []
      const numParticles = 8
      const container = particlesRef.current

      if (!container) return

      // Create particles
      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div")
        particle.className = "absolute rounded-full bg-orange-500/10 pointer-events-none"

        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`

        // Random starting position
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`

        container.appendChild(particle)
        particles.push(particle)

        // Animate each particle
        gsap.to(particle, {
          x: `${(Math.random() - 0.5) * 100}`,
          y: `${(Math.random() - 0.5) * 100}`,
          opacity: 0,
          duration: 2 + Math.random() * 3,
          ease: "power1.out",
          onComplete: () => {
            if (container && container.contains(particle)) {
              container.removeChild(particle)
            }
          },
        })
      }

      return () => {
        particles.forEach((particle) => {
          if (container && container.contains(particle)) {
            container.removeChild(particle)
          }
        })
      }
    }, [])

    return <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10" />
  }

  // Testimonial Card component
  const TestimonialCard = ({ testimonial, onClick, className = "" }) => (
    <motion.div
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={() => onClick(testimonial)}
    >
      <div className="font-met p-6 flex flex-row items-start gap-4 relative h-full">
        {/* Image */}
        <div className="flex-shrink-0">
          {testimonial.image ? (
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xl font-semibold">{testimonial.name.charAt(0)}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="font-medium text-gray-900 mb-1">{testimonial.name}</div>
          <div className="text-sm text-gray-600 mb-4">
            {testimonial.role}, {testimonial.company}
          </div>
          <p className="text-gray-700 line-clamp-4 h-24 overflow-hidden">"{testimonial.content}"</p>
        </div>

        <ParticlesOverlay />
      </div>
    </motion.div>
  )

  // Mobile Testimonial Card component
  const MobileTestimonialCard = ({ testimonial, onClick }) => (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-auto cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={() => onClick(testimonial)}
    >
      <div className="p-4 flex flex-col relative h-full">
        <div className="flex items-start gap-3 mb-2">
          {/* Image */}
          <div className="flex-shrink-0">
            {testimonial.image ? (
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg font-semibold">{testimonial.name.charAt(0)}</span>
              </div>
            )}
          </div>

          {/* Name and role */}
          <div>
            <div className="font-medium text-gray-900 text-sm">{testimonial.name}</div>
            <div className="text-xs text-gray-600">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>

        {/* Content */}
        <p className="text-sm text-gray-700 line-clamp-3 mt-2">"{testimonial.content}"</p>
        <ParticlesOverlay />
      </div>
    </motion.div>
  )

  return (
    <section className="font-met py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-medium text-orange-600 mb-4"
            variants={itemVariants}
          >
            Testimonials
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={itemVariants}>
            What Our Clients Say
          </motion.h2>
          <motion.p className="text-gray-600" variants={itemVariants}>
            Discover why businesses choose us for their technology needs
          </motion.p>
        </motion.div>

        {/* Auto-sliding testimonials for larger screens */}
        <div className="hidden md:block relative">
          {/* First row - left to right */}
          <div className="mb-8">
            <Swiper
              ref={swiperRef1}
              slidesPerView={1}
              spaceBetween={24}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              modules={[Autoplay]}
              className="testimonial-swiper"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                }
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={`row1-${testimonial.id}`}>
                  <TestimonialCard testimonial={testimonial} onClick={handleTestimonialClick} className="h-[200px]" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Second row - right to left */}
          <div>
            <Swiper
              ref={swiperRef2}
              slidesPerView={1}
              spaceBetween={24}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              modules={[Autoplay]}
              className="testimonial-swiper"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                }
              }}
            >
              {[...testimonials].reverse().map((testimonial) => (
                <SwiperSlide key={`row2-${testimonial.id}`}>
                  <TestimonialCard testimonial={testimonial} onClick={handleTestimonialClick} className="h-[200px]" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Grid layout for medium screens - hidden on larger and smaller screens */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-6">
          {testimonials.slice(0, 4).map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              onClick={() => handleTestimonialClick(testimonial)}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-lg font-semibold">{testimonial.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>

                  {/* Name and role */}
                  <div>
                    <div className="font-medium text-gray-900 mb-1">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm text-gray-700 italic">"{testimonial.content}"</p>
                <ParticlesOverlay />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile auto-scrolling testimonials */}
        <div className="sm:hidden mt-6">
          {/* First row - left to right */}
          <div className="mb-6">
            <Swiper
              ref={mobileSwiperRef1}
              slidesPerView={1}
              spaceBetween={16}
              speed={8000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              modules={[Autoplay]}
              className="testimonial-swiper"
              breakpoints={{
                480: {
                  slidesPerView: 1.2,
                }
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={`mobile-row1-${testimonial.id}`}>
                  <MobileTestimonialCard testimonial={testimonial} onClick={handleTestimonialClick} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Second row - right to left */}
          <div>
            <Swiper
              ref={mobileSwiperRef2}
              slidesPerView={1}
              spaceBetween={16}
              speed={8000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              modules={[Autoplay]}
              className="testimonial-swiper"
              breakpoints={{
                480: {
                  slidesPerView: 1.2,
                }
              }}
            >
              {[...testimonials].reverse().map((testimonial) => (
                <SwiperSlide key={`mobile-row2-${testimonial.id}`}>
                  <MobileTestimonialCard testimonial={testimonial} onClick={handleTestimonialClick} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Testimonial Modal */}
        <AnimatePresence>
          {selectedTestimonial && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/60 z-50"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={handleCloseModal}
              />

              {/* Modal */}
              <motion.div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl z-50 w-[90%] max-w-md overflow-hidden"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="relative p-6">
                  {/* Close button */}
                  <button
                    className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={handleCloseModal}
                  >
                    <X size={20} className="text-gray-600" />
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    {/* Image */}
                    {selectedTestimonial.image ? (
                      <img
                        src={selectedTestimonial.image || "/placeholder.svg"}
                        alt={selectedTestimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-xl font-semibold">
                          {selectedTestimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Name and role */}
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{selectedTestimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {selectedTestimonial.role}, {selectedTestimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Full testimonial content */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic">"{selectedTestimonial.content}"</p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Swiper custom styles */}
      <style>
        {`
        .testimonial-swiper {
          width: 100%;
          padding-top: 20px;
          padding-bottom: 50px;
          overflow: visible;
        }
        
        .swiper-pagination {
          bottom: 0 !important;
        }
        
        .swiper-pagination-bullet {
          background: #f97316;
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px;
          border-radius: 10px;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: #f97316;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        `}
      </style>
    </section>
  )
}

export default TestimonialSection