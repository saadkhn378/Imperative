"use client"

import { useRef, useEffect, useState } from "react"
import { Shield, Database, Code, Building, BarChart } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"
import ServiceCard from "../components/ServiceCard"

function ConsultingServices() {
  const swiperRef = useRef(null)
  const sectionRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Intersection Observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`font-met w-full bg-white py-8 md:py-12 px-4 mt-8 md:mt-12 sm:mt-16 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <style>
        {`
        /* Swiper slide transition styles */
        .swiper-slide {
          transition: transform 0.3s ease;
        }

        .swiper-slide-active {
          transform: scale(1);
        }

        .swiper-slide-prev,
        .swiper-slide-next {
          transform: scale(0.95);
        }
        
        /* Mobile swipe hint animation */
        @keyframes swipeHint {
          0% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          50% { transform: translateX(0); }
          75% { transform: translateX(10px); }
          100% { transform: translateX(0); }
        }
        
        .swipe-hint {
          position: absolute;
          bottom: -30px;
          left: 0;
          right: 0;
          text-align: center;
          color: #f97316;
          font-size: 14px;
          animation: swipeHint 2s ease-in-out infinite;
          pointer-events: none;
        }
        
        @media (min-width: 768px) {
          .swipe-hint {
            display: none;
          }
        }
        
        /* Card entrance animations */
        .card-entrance {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .card-entrance.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Staggered delay for cards */
        .card-entrance:nth-child(1) { transition-delay: 0.2s; }
        .card-entrance:nth-child(2) { transition-delay: 0.4s; }
        .card-entrance:nth-child(3) { transition-delay: 0.6s; }
        .card-entrance:nth-child(4) { transition-delay: 0.8s; }
        .card-entrance:nth-child(5) { transition-delay: 1.0s; }
        `}
      </style>

      {/* Main Heading with animation */}
      <div
        className={`text-center mb-4 transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 uppercase">
          CONSULTING & SYSTEM INTEGRATION SERVICES
        </h2>
      </div>

      {/* Description with animation */}
      <div
        className={`text-center max-w-4xl mx-auto mb-6 md:mb-10 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-xs sm:text-sm md:text-base text-gray-700">
          Imperative provides expert consulting, OEM-aligned system integration, and secure infrastructure services to
          support enterprises, smart cities, and critical operations.
        </p>
      </div>

      {/* Service Cards Swiper - With Entrance Animation */}
      <div
        className={`max-w-full mx-auto overflow-visible px-2 md:px-4 relative transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={isMobile ? 15 : 30}
          slidesPerView="auto"
          centeredSlides={isMobile}
          initialSlide={0}
          grabCursor={true}
          speed={600}
          modules={[EffectCards]}
          className="overflow-visible"
        >
          {/* Cyber Assurance Services */}
          <SwiperSlide
            style={{ width: isMobile ? "300px" : "500px" }}
            className={`card-entrance ${isVisible ? "visible" : ""}`}
          >
            <ServiceCard
              title="CYBER ASSURANCE SERVICES"
              description="We help secure your enterprise with end-to-end cybersecurity solutions, including endpoint protection, vulnerability assessments, email and web security, and red teaming."
              icon={<Shield size={isMobile ? 60 : 80} fill="#F97316" color="#F97316" strokeWidth={0.5} />}
              isMobile={isMobile}
            />
          </SwiperSlide>

          {/* Data Centre Solutions */}
          <SwiperSlide
            style={{ width: isMobile ? "300px" : "500px" }}
            className={`card-entrance ${isVisible ? "visible" : ""}`}
          >
            <ServiceCard
              title="DATA CENTRE SOLUTIONS"
              description="We provide end-to-end data center services—supply, co-location, and cloud enablement. Our solutions ensure high availability, business continuity, and secure mission-critical workloads."
              icon={<Database size={isMobile ? 60 : 80} fill="#F97316" color="#F97316" strokeWidth={0.5} />}
              isMobile={isMobile}
            />
          </SwiperSlide>

          {/* Partnered Software Integrations */}
          <SwiperSlide
            style={{ width: isMobile ? "300px" : "500px" }}
            className={`card-entrance ${isVisible ? "visible" : ""}`}
          >
            <ServiceCard
              title="PARTNERED SOFTWARE INTEGRATIONS"
              description="We collaborate with leading software providers to deliver seamless integrations that enhance your business operations. Our expertise ensures smooth implementation and optimization."
              icon={<Code size={isMobile ? 60 : 80} fill="#F97316" color="#F97316" strokeWidth={0.5} />}
              isMobile={isMobile}
            />
          </SwiperSlide>

          {/* Smart Cities & Infra Tech */}
          <SwiperSlide
            style={{ width: isMobile ? "300px" : "500px" }}
            className={`card-entrance ${isVisible ? "visible" : ""}`}
          >
            <ServiceCard
              title="SMART CITIES & INFRA TECH"
              description="We develop intelligent infrastructure solutions for modern urban environments. Our smart city technologies enhance public services, improve resource management, and create sustainable communities."
              icon={<Building size={isMobile ? 60 : 80} fill="#F97316" color="#F97316" strokeWidth={0.5} />}
              isMobile={isMobile}
            />
          </SwiperSlide>

          {/* Managed SoC Services */}
          <SwiperSlide
            style={{ width: isMobile ? "300px" : "500px" }}
            className={`card-entrance ${isVisible ? "visible" : ""}`}
          >
            <ServiceCard
              title="MANAGED SoC SERVICES"
              description="Our Security Operations Center (SoC) provides 24/7 monitoring and threat detection to safeguard your digital assets. We deliver proactive security management with expert analysis."
              icon={<BarChart size={isMobile ? 60 : 80} fill="#F97316" color="#F97316" strokeWidth={0.5} />}
              isMobile={isMobile}
            />
          </SwiperSlide>
        </Swiper>

        {/* Mobile swipe hint */}
        <div className="swipe-hint">Swipe to see more</div>
      </div>
    </div>
  )
}

export default ConsultingServices
