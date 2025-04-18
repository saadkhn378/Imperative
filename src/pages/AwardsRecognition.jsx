"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Award, Star, Trophy, Shield, ArrowRight, Medal, Zap, Globe } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Add CSS directly in the component
const styles = `
  /* Swiper custom styles */
  .swiper {
    width: 100%;
    padding-top: 30px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: auto;
  }

  @media (min-width: 768px) {
    .swiper-slide {
      width: 500px;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--color-primary) !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-primary) !important;
  }

  .swiper-3d .swiper-slide-shadow-left,
  .swiper-3d .swiper-slide-shadow-right {
    background-image: none;
  }

  /* Featured awards carousel design */
  .featured-swiper {
    width: 100%;
    padding: 50px 0;
  }

  .featured-swiper .swiper-slide {
    width: 300px;
    height: auto;
    border-radius: 16px;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .featured-swiper .swiper-slide {
      width: 400px;
    }
  }

  .featured-swiper .swiper-pagination-bullet {
    background-color: var(--color-primary);
    opacity: 0.5;
  }

  .featured-swiper .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: var(--color-primary);
  }

  .featured-swiper .swiper-button-next,
  .featured-swiper .swiper-button-prev {
    color: var(--color-primary);
    background-color: rgba(255, 255, 255, 0.8);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .featured-swiper .swiper-button-next:after,
  .featured-swiper .swiper-button-prev:after {
    font-size: 18px;
    font-weight: bold;
  }

  .featured-swiper .swiper-button-next:hover,
  .featured-swiper .swiper-button-prev:hover {
    background-color: white;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  .featured-swiper .swiper-slide-shadow-left,
  .featured-swiper .swiper-slide-shadow-right {
    border-radius: 16px;
  }
`

// Award categories with their respective awards - expanded with more images
const awardCategories = [
  {
    id: 1,
    name: "Industry Excellence",
    icon: Trophy,
    awards: [
      {
        id: 101,
        title: "Technology Innovator of the Year",
        organization: "Tech Excellence Awards",
        year: 2023,
        description: "Recognized for groundbreaking innovations in enterprise software solutions.",
        image:
          "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 102,
        title: "Best Enterprise Solution",
        organization: "Global Software Awards",
        year: 2022,
        description: "Our flagship product Impera DMS was recognized as the leading document management solution.",
        image:
          "https://images.unsplash.com/photo-1551286923-c82d6a8ae079?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 103,
        title: "Digital Transformation Leader",
        organization: "Future Tech Summit",
        year: 2023,
        description: "Awarded for helping enterprises successfully navigate digital transformation challenges.",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "Workplace Recognition",
    icon: Star,
    awards: [
      {
        id: 201,
        title: "Top 100 Places to Work",
        organization: "Fortune Magazine",
        year: 2023,
        description: "Ranked #28 among the best employers nationwide for employee satisfaction and culture.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 202,
        title: "Best Workplace for Diversity & Inclusion",
        organization: "Workplace Equity Foundation",
        year: 2022,
        description: "Recognized for our commitment to creating an inclusive and diverse work environment.",
        image:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 203,
        title: "Employee Wellness Champion",
        organization: "Corporate Health Alliance",
        year: 2023,
        description: "Recognized for innovative employee wellness programs and work-life balance initiatives.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: 3,
    name: "Sustainability & Impact",
    icon: Shield,
    awards: [
      {
        id: 301,
        title: "Green Technology Pioneer",
        organization: "Sustainable Business Awards",
        year: 2023,
        description: "Honored for our commitment to environmentally sustainable business practices and solutions.",
        image:
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 302,
        title: "Corporate Social Responsibility Excellence",
        organization: "Impact Business Forum",
        year: 2022,
        description: "Recognized for our community initiatives and social impact programs.",
        image:
          "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 303,
        title: "Climate Action Leadership",
        organization: "Global Sustainability Council",
        year: 2023,
        description: "Awarded for our carbon-neutral operations and climate-positive technology solutions.",
        image:
          "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: 4,
    name: "Product Innovation",
    icon: Zap,
    awards: [
      {
        id: 401,
        title: "Most Innovative SaaS Solution",
        organization: "Cloud Computing Awards",
        year: 2023,
        description: "Recognized for breakthrough innovations in cloud-based enterprise solutions.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 402,
        title: "Best AI Implementation",
        organization: "Artificial Intelligence Excellence Awards",
        year: 2022,
        description: "Awarded for our innovative use of AI to solve complex business challenges.",
        image:
          "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 403,
        title: "UX Design Excellence",
        organization: "International Design Federation",
        year: 2023,
        description: "Honored for exceptional user experience design in enterprise software.",
        image:
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
]

// Featured major awards - expanded with more awards
const featuredAwards = [
  {
    id: 1,
    title: "Global Technology Leader",
    organization: "International Business Awards",
    year: 2023,
    description:
      "Imperative was named the Global Technology Leader of the Year, recognizing our innovative solutions and significant impact across industries worldwide.",
    image:
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Fastest Growing Tech Company",
    organization: "Deloitte Technology Fast 500",
    year: 2022,
    description:
      "Ranked #37 on the Deloitte Technology Fast 500 list, recognizing our exceptional revenue growth and technological innovation.",
    image:
      "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "CEO of the Year",
    organization: "Business Leadership Forum",
    year: 2023,
    description:
      "Our CEO was recognized for visionary leadership and driving unprecedented company growth and innovation.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Most Promising Startup",
    organization: "Venture Capital Association",
    year: 2021,
    description:
      "Selected from over 5,000 companies as the most promising technology startup with potential for global impact.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Excellence in Remote Work Culture",
    organization: "Future of Work Institute",
    year: 2023,
    description:
      "Recognized for building an exceptional remote-first work culture that drives productivity and employee satisfaction.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
]

// Certifications and standards - expanded
const certifications = [
  {
    id: 1,
    name: "ISO 27001",
    description: "Information Security Management",
    icon: Shield,
  },
  {
    id: 2,
    name: "ISO 9001",
    description: "Quality Management Systems",
    icon: Medal,
  },
  {
    id: 3,
    name: "CMMI Level 5",
    description: "Capability Maturity Model Integration",
    icon: Trophy,
  },
  {
    id: 4,
    name: "SOC 2 Type II",
    description: "Service Organization Control",
    icon: Shield,
  },
  {
    id: 5,
    name: "GDPR Compliant",
    description: "General Data Protection Regulation",
    icon: Shield,
  },
  {
    id: 6,
    name: "Carbon Neutral",
    description: "Certified Carbon Neutral Operations",
    icon: Globe,
  },
  {
    id: 7,
    name: "HIPAA Compliant",
    description: "Health Insurance Portability and Accountability Act",
    icon: Shield,
  },
  {
    id: 8,
    name: "ISO 14001",
    description: "Environmental Management",
    icon: Globe,
  },
]

// Custom hook for parallax effect
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

// Award Card Component with enhanced animations
const AwardCard = ({ award, index }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const y = useParallax(scrollYProgress, 20)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 },
      }}
      style={{ scale }}
      className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 h-full"
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/3 relative overflow-hidden">
          <motion.div style={{ y }} className="h-full">
            <img
              src={award.image || "https://via.placeholder.com/300x200"}
              alt={award.title}
              className="w-full h-48 md:h-full object-cover transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center transition-opacity duration-300"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-4 text-white text-center mb-4"
            >
              <Award className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm font-medium">Award Winner</p>
            </motion.div>
          </motion.div>
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-gray-500">{award.organization}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">{award.year}</span>
          </div>
          <h4 className="text-xl font-semibold mb-2 text-gray-800">{award.title}</h4>
          <p className="text-gray-600 text-sm">{award.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Animated text component using Framer Motion
const AnimatedText = ({ text, className }) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.02 }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Featured Award Carousel using Swiper
const FeaturedAwardCarousel = ({ awards }) => {
  return (
    <div className="featured-awards-carousel">
      <div className="mb-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 inline-block relative"
        >
          Featured Achievements
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-primary absolute bottom-0 left-0 right-0"
          />
        </motion.h3>
      </div>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        cardsEffect={{
          perSlideOffset: 8,
          perSlideRotate: 2,
          rotate: true,
          slideShadows: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="featured-swiper"
      >
        {awards.map((award) => (
          <SwiperSlide key={award.id} className="py-5 px-2">
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 h-full transition-all duration-300"
            >
              <div className="relative h-64 md:h-72">
                <img
                  src={award.image || "https://via.placeholder.com/800x400"}
                  alt={award.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end">
                  <div className="p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center mb-3"
                    >
                      <div className="bg-primary/90 p-2 rounded-full mr-3">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-white/90">{award.organization}</span>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-2xl md:text-3xl font-bold text-white"
                    >
                      {award.title}
                    </motion.h3>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">{award.year}</span>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                <p className="text-gray-700 leading-relaxed">{award.description}</p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">Major Achievement</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-medium text-gray-600 flex items-center"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center mt-8"
      >
        <span className="text-sm text-gray-500">Swipe or use arrows to navigate through our major achievements</span>
      </motion.div>
    </div>
  )
}

const AwardsRecognition = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const subHeaderRef = useRef(null)

  // For the 3D tilt effect
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * 5
    const rotateYValue = ((centerX - x) / centerX) * 5

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    // Create a GSAP context for better cleanup
    const ctx = gsap.context(() => {
      try {
        // Animate subheader
        if (subHeaderRef.current) {
          gsap.from(subHeaderRef.current, {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
              trigger: subHeaderRef.current,
              start: "top 80%",
            },
          })
        }

        // Animate award categories with a staggered reveal
        gsap.fromTo(
          ".award-category",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".award-categories",
              start: "top 80%",
            },
          },
        )

        // Animate category icons with rotation
        gsap.fromTo(
          ".category-icon",
          { opacity: 0, scale: 0, rotation: -30 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".award-categories",
              start: "top 80%",
            },
          },
        )

        // Animate certification badges with a 3D flip
        gsap.fromTo(
          ".certification-badge",
          {
            opacity: 0,
            scale: 0.8,
            rotationY: -90,
          },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: ".certifications",
              start: "top 85%",
            },
          },
        )

        // Animate testimonial with a reveal effect
        gsap.fromTo(
          ".testimonial",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            scrollTrigger: {
              trigger: ".testimonial",
              start: "top 80%",
            },
          },
        )

        // Animate quote marks
        gsap.fromTo(
          ".quote-mark",
          {
            opacity: 0,
            scale: 0.5,
            y: 20,
          },
          {
            opacity: 0.2,
            scale: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
              trigger: ".testimonial",
              start: "top 80%",
            },
          },
        )
      } catch (error) {
        console.error("GSAP animation error:", error)
      }
    }, sectionRef) // Scope to section

    // Cleanup function
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Include the styles directly in the component */}
      <style>{styles}</style>

      <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              Recognition & Excellence
            </motion.div>

            <h2 ref={headerRef} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 relative">
              <AnimatedText text="Awards & Recognition" className="inline-block" />
              <motion.div
                className="absolute -z-10 w-full h-3 bg-primary/20 bottom-2 left-0 right-0 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </h2>
            <p ref={subHeaderRef} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and organizations worldwide.
            </p>
          </div>

          {/* Featured Awards Carousel with Swiper */}
          <div className="mb-20">
            <FeaturedAwardCarousel awards={featuredAwards} />
          </div>

          {/* Award Categories */}
          <div className="award-categories mb-20">
            {awardCategories.map((category, categoryIndex) => {
              const Icon = category.icon

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="award-category mb-16 last:mb-0"
                >
                  <div className="flex items-center mb-8">
                    <motion.div
                      whileHover={{
                        rotate: 10,
                        scale: 1.1,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                      className="category-icon w-12 h-12 rounded-full flex items-center justify-center mr-4"
                      style={{
                        backgroundColor:
                          categoryIndex % 4 === 0
                            ? "rgba(var(--color-primary), 0.1)"
                            : categoryIndex % 4 === 1
                              ? "rgba(var(--color-tertiary), 0.1)"
                              : categoryIndex % 4 === 2
                                ? "rgba(59, 130, 246, 0.1)"
                                : "rgba(168, 85, 247, 0.1)",
                      }}
                    >
                      <Icon
                        className="h-6 w-6"
                        style={{
                          color:
                            categoryIndex % 4 === 0
                              ? "var(--color-primary)"
                              : categoryIndex % 4 === 1
                                ? "var(--color-tertiary)"
                                : categoryIndex % 4 === 2
                                  ? "rgb(59, 130, 246)"
                                  : "rgb(168, 85, 247)",
                        }}
                      />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800">{category.name}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {category.awards.map((award, awardIndex) => (
                      <AwardCard key={award.id} award={award} index={awardIndex} />
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Certifications */}
          <div className="certifications bg-gray-50 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Certifications & Standards</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon || Shield
                return (
                  <div key={cert.id} className="certification-badge">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotateY: 10,
                        rotateX: -10,
                      }}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        transformStyle: "preserve-3d",
                        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                      }}
                      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full flex flex-col items-center text-center transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{
                          backgroundColor:
                            index % 4 === 0
                              ? "rgba(var(--color-primary), 0.1)"
                              : index % 4 === 1
                                ? "rgba(var(--color-tertiary), 0.1)"
                                : index % 4 === 2
                                  ? "rgba(59, 130, 246, 0.1)"
                                  : "rgba(168, 85, 247, 0.1)",
                        }}
                      >
                        <Icon
                          className="h-8 w-8"
                          style={{
                            color:
                              index % 4 === 0
                                ? "var(--color-primary)"
                                : index % 4 === 1
                                  ? "var(--color-tertiary)"
                                  : index % 4 === 2
                                    ? "rgb(59, 130, 246)"
                                    : "rgb(168, 85, 247)",
                          }}
                        />
                      </motion.div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">{cert.name}</h4>
                      <p className="text-gray-600 text-sm">{cert.description}</p>
                    </motion.div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 text-center">
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
              >
                View all certifications
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", duration: 0.6 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </motion.a>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="testimonial bg-gradient-to-br from-primary/5 to-tertiary/5 rounded-xl p-8 shadow-md relative overflow-hidden"
            >
              <div className="quote-mark absolute top-6 left-8 text-6xl text-primary/20">"</div>
              <div className="quote-mark absolute bottom-6 right-8 text-6xl text-primary/20 rotate-180">"</div>
              <div className="relative z-10">
                <p className="text-xl text-gray-700 italic mb-6 text-center max-w-4xl mx-auto pt-6">
                  These awards and recognitions are a testament to the hard work and dedication of our incredible team.
                  They reflect our commitment to excellence, innovation, and creating a workplace where talent thrives.
                  Join us and be part of an award-winning organization that's making a difference.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Jane Doe</h4>
                    <p className="text-gray-600 text-sm">CEO, Imperative</p>
                  </div>
                </motion.div>
              </div>

              {/* Background decorative elements */}
              <motion.div
                className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-primary/5 z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -left-8 -top-8 w-32 h-32 rounded-full bg-tertiary/5 z-0"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AwardsRecognition
