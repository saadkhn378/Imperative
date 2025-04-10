"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCreative, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-creative"
import "swiper/css/pagination"
import { Link } from "react-router-dom"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Innovative Solutions",
    description: "Discover our cutting-edge products designed for the future",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Premium Quality",
    description: "Experience the difference with our premium quality offerings",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Customer Satisfaction",
    description: "Our customers love our products and services",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Global Reach",
    description: "Connecting businesses and customers across the world",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Sustainable Practices",
    description: "Committed to environmentally responsible business solutions",
  },
]

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="font-met relative w-full h-[80vh]">
      <style jsx>{`
        /* Custom pagination bullets */
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          opacity: 1;
          background: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: #fff;
          width: 30px;
          border-radius: 6px;
        }
        
        /* Ken Burns effect */
        .ken-burns-effect {
          animation: ken-burns 20s ease alternate infinite;
          transform-origin: center;
        }
        
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>

      <Swiper
        modules={[Autoplay, EffectCreative, Pagination]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => `<span class="${className}"></span>`,
        }}
        loop={true}
        className="w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className={`object-cover w-full h-full transition-transform duration-10000 ${
                  index === activeIndex ? "ken-burns-effect" : ""
                }`}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl max-w-2xl"
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex gap-4"
              >
                <button className="font-met px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors shadow-lg">
                  Learn More
                </button>

                <Link to="/contact">
                  <button className="font-met px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors border border-white/30 shadow-lg">
                    Contact Us
                  </button>
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
