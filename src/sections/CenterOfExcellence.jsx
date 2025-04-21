"use client"

import { useEffect, useRef, useState } from "react"
import { FaRobot, FaBrain, FaCogs } from "react-icons/fa"

function CenterOfExcellence() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
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
      className={`font-met w-full bg-orange-500 py-8 sm:py-12 px-4 mt-12 sm:mt-16 transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <style>
        {`
          .coe-card {
            transition: transform 0.5s ease, box-shadow 0.5s ease, opacity 0.5s ease;
            opacity: 0;
            transform: translateY(20px);
          }
          
          .card-visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .card-1 {
            transition-delay: 0.1s;
          }
          
          .card-2 {
            transition-delay: 0.3s;
          }
          
          .card-3 {
            transition-delay: 0.5s;
          }
          
          .coe-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          }
          
          .icon-circle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f97316;
            color: white;
            transition: transform 0.3s ease, background-color 0.3s ease;
          }
          
          @media (min-width: 640px) {
            .icon-circle {
              width: 70px;
              height: 70px;
            }
          }
          
          .coe-card:hover .icon-circle {
            transform: scale(1.1);
            background-color: #ea580c;
          }
          
          .heading-animate {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.7s ease, transform 0.7s ease;
            transition-delay: 0.1s;
          }
          
          .subheading-animate {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.7s ease, transform 0.7s ease;
            transition-delay: 0.3s;
          }
          
          .visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          @media (max-width: 640px) {
            .mobile-card-content {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            
            .mobile-card-content .icon-circle {
              margin-right: 0;
              margin-bottom: 1rem;
            }
            
            /* Add touch feedback for mobile */
            .coe-card:active {
              transform: scale(0.98);
              transition: transform 0.2s ease;
            }
          }
        `}
      </style>

      {/* Main Heading */}
      <div className="text-center mb-4 sm:mb-6">
        <h2
          className={`text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wide px-2 heading-animate ${
            isVisible ? "visible" : ""
          }`}
        >
          CENTER OF EXCELLENCE (COE)
        </h2>
      </div>

      {/* Subheading Box */}
      <div
        className={`bg-white rounded-3xl sm:rounded-full py-3 px-4 max-w-3xl mx-auto mb-6 sm:mb-8 text-center subheading-animate ${
          isVisible ? "visible" : ""
        }`}
      >
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 px-1">
          BUILDING ADVANCED PLATFORMS WITH EMERGING TECHNOLOGIES
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1 px-1">
          At Imperative, our Center of Excellence is dedicated to developing cutting-edge platforms powered by:
        </p>
      </div>

      {/* Three Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {/* AI Card */}
        <div className={`bg-white rounded-lg p-4 sm:p-6 shadow-md coe-card card-1 ${isVisible ? "card-visible" : ""}`}>
          <div className="flex items-start mobile-card-content">
            <div className="icon-circle mr-4 flex-shrink-0">
              <FaBrain size={28} className="sm:text-3xl" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Artificial Intelligence (AI)</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                We integrate AI to enable intelligent decision-making, predictive analysis, and automation across key
                business processes.
              </p>
            </div>
          </div>
        </div>

        {/* ML Card */}
        <div className={`bg-white rounded-lg p-4 sm:p-6 shadow-md coe-card card-2 ${isVisible ? "card-visible" : ""}`}>
          <div className="flex items-start mobile-card-content">
            <div className="icon-circle mr-4 flex-shrink-0">
              <FaCogs size={28} className="sm:text-3xl" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Machine Learning (ML)</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Our platforms learn and evolve through ML models that deliver personalized experiences, smarter
                analytics, and data-driven efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* RPA Card */}
        <div className={`bg-white rounded-lg p-4 sm:p-6 shadow-md coe-card card-3 ${isVisible ? "card-visible" : ""}`}>
          <div className="flex items-start mobile-card-content">
            <div className="icon-circle mr-4 flex-shrink-0">
              <FaRobot size={28} className="sm:text-3xl" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Robotic Process Automation (RPA)</h4>
              <p className="text-xs sm:text-sm text-gray-600">
                We harness RPA to automate repetitive, high-volume tasks, enhancing speed, accuracy, and scalability for
                enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CenterOfExcellence
