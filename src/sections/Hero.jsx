"use client"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import { Link } from "react-router-dom"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80",
    title: "Innovative Solutions",
    description: "Discover our cutting-edge products designed for the future",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    title: "Premium Quality",
    description: "Experience the difference with our premium quality offerings",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    title: "Customer Satisfaction",
    description: "Our customers love our products and services",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    title: "Global Reach",
    description: "Connecting businesses and customers across the world",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    title: "Sustainable Practices",
    description: "Committed to environmentally responsible business solutions",
  },
]

function Hero() {
  // Detect if we're on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  return (
    <section className="font-met relative w-full h-[80vh]">
      <style jsx>{`
        /* Custom pagination bullets */
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          opacity: 1;
          background: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: #fff;
          width: 20px;
          border-radius: 5px;
        }
        
        /* Simpler Ken Burns effect with reduced animation for mobile */
        @media (min-width: 768px) {
          .desktop-zoom {
            animation: simple-zoom 20s ease alternate infinite;
            transform-origin: center;
          }
          
          @keyframes simple-zoom {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.05);
            }
          }
        }
      `}</style>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade" // Using simpler fade effect instead of creative for better performance
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
        preloadImages={false}
        lazy={{
          loadPrevNext: true,
          loadPrevNextAmount: 1,
        }}
        speed={800} // Slightly faster transitions
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className={`swiper-lazy object-cover w-full h-full ${!isMobile ? "desktop-zoom" : ""}`}
                loading="lazy"
              />
              <div className="swiper-lazy-preloader"></div>
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base md:text-xl max-w-2xl"
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-6 md:mt-8 flex gap-3 md:gap-4"
              >
                <button className="font-met px-4 py-2 md:px-6 md:py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors shadow-lg text-sm md:text-base">
                  Learn More
                </button>

                <Link to="/contact">
                  <button className="font-met px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors border border-white/30 shadow-lg text-sm md:text-base">
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
