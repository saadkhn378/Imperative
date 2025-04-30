import { CountUp } from "../components/CountUp"
import { useInView } from "../hooks/useInView"

export function Glance() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.1 })
  const { ref: mainContentRef, isInView: mainContentInView } = useInView({ threshold: 0.1 })
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.2 })
  const { ref: servicesRef, isInView: servicesInView } = useInView({ threshold: 0.2 })

  return (
    <>
      <style>
        {`
        .glance-container {
          width: 100%;
          background-color: white;
          padding: 2rem 1rem;
          overflow: hidden;
        }
        
        .glance-title {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .glance-heading {
          font-size: 1.875rem;
          font-weight: 700;
          display: inline-block;
          position: relative;
          padding-bottom: 1rem;
        }
        
        .glance-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #f97316;
        }
        
        .glance-content {
          max-width: 1152px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.5rem;
        }
        
        .glance-left-column {
          grid-column: span 3;
        }
        
        .glance-right-column {
          grid-column: span 9;
          display: flex;
          flex-direction: column;
          height: 500px;
        }
        
        .glance-image-container {
          position: relative;
          height: 500px;
          overflow: hidden;
        }
        
        .glance-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .glance-image-text {
          position: absolute;
          bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .glance-text-overlay {
          background-color: rgba(0, 0, 0, 0.4);
          padding: 0.5rem 1rem 0.5rem 1.5rem;
          transform: translateX(0);
          transition: transform 0.5s;
        }
        
        .hover-slide:hover {
          transform: translateX(0.5rem);
        }
        
        .glance-text-bold {
          color: white;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }
        
        .glance-text {
          color: white;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }
        
        .glance-text-large {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          white-space: nowrap;
        }
        
        .glance-stats {
          border: 1px solid #fb923c;
          border-radius: 0.5rem;
          background-color: #f9fafb;
        }
        
        .glance-stats-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 2.5rem;
        }
        
        .glance-stat {
          text-align: center;
        }
        
        .glance-stat-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }
        
        .glance-stat-value {
          font-size: 2.25rem;
          font-weight: 700;
          color: #f97316;
        }
        
        .glance-divider {
          height: 4rem;
          width: 1px;
          background-color: #fdba74;
        }
        
        .glance-gap {
          height: 0.75rem;
        }
        
        .glance-professionals {
          position: relative;
          flex-grow: 1;
          overflow: hidden;
        }
        
        .glance-professionals-text {
          position: absolute;
          bottom: 1.5rem;
          display: flex;
        }
        
        .glance-services {
          max-width: 1152px;
          margin: 2rem auto 0;
          position: relative;
        }
        
        .glance-services-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glance-services-table {
          width: 100%;
          height: 100%;
          border-collapse: collapse;
        }
        
        .glance-service-cell {
          width: 33.333%;
          vertical-align: middle;
        }
        
        .glance-service {
          padding-left: 4rem;
          padding-right: 2rem;
        }
        
        /* Service header with no hover effects */
        .glance-service-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        
        .glance-icon {
          color: #000;
          margin-bottom: 0.75rem;
        }
        
        .glance-service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #000;
        }
        
        .glance-service-text {
          font-size: 0.875rem;
          line-height: 1.25;
          color: black;
        }
        
        /* Transitions */
        .transition-all {
          transition-property: all;
        }
        
        .duration-300 {
          transition-duration: 300ms;
        }
        
        .duration-500 {
          transition-duration: 500ms;
        }
        
        .duration-700 {
          transition-duration: 700ms;
        }
        
        .duration-1000 {
          transition-duration: 1000ms;
        }
        
        .delay-100 {
          transition-delay: 100ms;
        }
        
        .delay-200 {
          transition-delay: 200ms;
        }
        
        .delay-300 {
          transition-delay: 300ms;
        }
        
        .delay-400 {
          transition-delay: 400ms;
        }
        
        .delay-500 {
          transition-delay: 500ms;
        }
        
        .transform {
          transform: translateZ(0);
        }
        
        .translate-y-0 {
          transform: translateY(0);
        }
        
        .translate-y-10 {
          transform: translateY(2.5rem);
        }
        
        .translate-x-0 {
          transform: translateX(0);
        }
        
        .translate-x-10 {
          transform: translateX(2.5rem);
        }
        
        .-translate-x-10 {
          transform: translateX(-2.5rem);
        }
        
        .opacity-0 {
          opacity: 0;
        }
        
        .opacity-100 {
          opacity: 1;
        }
        
        /* Responsive styles */
        @media (max-width: 1024px) {
          .glance-content {
            grid-template-columns: 1fr;
          }
        
          .glance-left-column,
          .glance-right-column {
            grid-column: span 12;
          }
        
          .glance-right-column {
            height: auto;
          }
        
          .glance-stats-content {
            flex-direction: column;
            gap: 2rem;
          }
        
          .glance-divider {
            height: 1px;
            width: 100%;
          }
        
          .glance-services-table {
            display: block;
          }
        
          .glance-services-table tbody,
          .glance-services-table tr {
            display: block;
            width: 100%;
          }
        
          .glance-service-cell {
            display: block;
            width: 100%;
            padding: 2rem 0;
          }
        }
        `}
      </style>

      <div className="font-met glance-container">
        {/* Title with underline exactly as in image */}
        <div
          ref={titleRef}
          className={`glance-title transition-all duration-700 transform ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="glance-heading">
            IMPERATIVE AT A GLANCE
            <div className={`glance-underline transition-all duration-1000 ${titleInView ? "w-full" : "w-0"}`}></div>
          </h2>
        </div>

        {/* Main content grid */}
        <div ref={mainContentRef} className="glance-content">
          {/* Left column - Headquarters image */}
          <div
            className={`glance-left-column transition-all duration-700 delay-300 transform ${
              mainContentInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="glance-image-container">
              <img
                src="https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Corporate headquarters with city view"
                className="glance-image"
              />
              {/* Text with lighter backgrounds */}
              <div className="glance-image-text">
                <div className="flex">
                  <div className="glance-text-overlay hover-slide">
                    <span className="glance-text-bold">HEADQUARTERED</span>
                  </div>
                </div>
                <div className="flex">
                  <div className="glance-text-overlay hover-slide">
                    <p className="glance-text">MUMBAI, THANE</p>
                    <p className="glance-text">MAHARASHTRA, INDIA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Stats and Professionals */}
          <div
            className={`glance-right-column transition-all duration-700 delay-500 transform ${
              mainContentInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Stats Section - Exact match to the image */}
            <div className="glance-stats transition-all duration-500 hover:shadow-lg" ref={statsRef}>
              <div className="glance-stats-content">
                <div
                  className={`glance-stat transition-all duration-500 delay-100 transform ${
                    statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <p className="glance-stat-label">Years of Experience</p>
                  <p className="glance-stat-value">
                    <CountUp end={14} suffix="+" isInView={statsInView} />
                  </p>
                </div>
                <div className="glance-divider"></div>
                <div
                  className={`glance-stat transition-all duration-500 delay-200 transform ${
                    statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <p className="glance-stat-label">Industries Served</p>
                  <p className="glance-stat-value">
                    <CountUp end={9} suffix="+" delay={200} isInView={statsInView} />
                  </p>
                </div>
                <div className="glance-divider"></div>
                <div
                  className={`glance-stat transition-all duration-500 delay-300 transform ${
                    statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <p className="glance-stat-label">Active Clients</p>
                  <p className="glance-stat-value">
                    <CountUp end={60} suffix="+" delay={400} isInView={statsInView} />
                  </p>
                </div>
                <div className="glance-divider"></div>
                <div
                  className={`glance-stat transition-all duration-500 delay-400 transform ${
                    statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <p className="glance-stat-label">Client Retention</p>
                  <p className="glance-stat-value">
                    <CountUp end={92} suffix="%" delay={600} isInView={statsInView} />
                  </p>
                </div>
              </div>
            </div>

            {/* Small gap */}
            <div className="glance-gap"></div>

            {/* Professionals image - text with lighter background */}
            <div className="glance-professionals">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Modern office space with professionals working"
                className="glance-image"
              />
              <div className="glance-professionals-text">
                <div className="glance-text-overlay hover-slide">
                  <h3 className="glance-text-large">1200+</h3>
                  <p className="glance-text">EMPOWERED PROFESSIONALS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section - Using a table-based approach for perfect alignment */}
        <div className="glance-services" ref={servicesRef}>
          {/* Background SVG with arrow shapes */}
          <svg width="100%" height="250" viewBox="0 0 1200 250" preserveAspectRatio="none">
            {/* Red section with sharper arrow */}
            <path
              d="M0,0 L360,0 L430,125 L360,250 L0,250 Z"
              fill="#dc2626"
              className={`transition-all duration-700 ${servicesInView ? "opacity-100" : "opacity-0"}`}
            />

            {/* Orange section with sharper arrow - smaller gap on left */}
            <path
              d="M368,0 L760,0 L830,125 L760,250 L368,250 L438,125 Z"
              fill="#f97316"
              className={`transition-all duration-700 delay-200 ${servicesInView ? "opacity-100" : "opacity-0"}`}
            />

            {/* Yellow section with sharper arrow - smaller gap on left */}
            <path
              d="M768,0 L1200,0 L1200,250 L768,250 L838,125 Z"
              fill="#eab308"
              className={`transition-all duration-700 delay-400 ${servicesInView ? "opacity-100" : "opacity-0"}`}
            />
          </svg>

          {/* Table-based layout for perfect alignment - OPTIMIZED TEXT LAYOUT */}
          <div className="glance-services-content">
            <table className="glance-services-table">
              <tbody>
                <tr>
                  <td className="glance-service-cell">
                    <div
                      className={`glance-service transition-all duration-700 delay-100 transform ${
                        servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                    >
                      {/* Service header with no hover effects */}
                      <div className="glance-service-header">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="glance-icon"
                        >
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <rect x="9" y="9" width="6" height="6" />
                          <path d="M15 2v2" />
                          <path d="M15 20v2" />
                          <path d="M2 15h2" />
                          <path d="M2 9h2" />
                          <path d="M20 15h2" />
                          <path d="M20 9h2" />
                          <path d="M9 2v2" />
                          <path d="M9 20v2" />
                        </svg>
                        <h3 className="glance-service-title">TECHNOLOGY</h3>
                      </div>

                      <p className="glance-service-text">
                        Digital transformation integrates cutting-edge technologies to optimize efficiency and enhance
                        user engagement. It fosters a culture of continuous innovation and growth.
                      </p>
                    </div>
                  </td>
                  <td className="glance-service-cell">
                    <div
                      className={`glance-service transition-all duration-700 delay-300 transform ${
                        servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                    >
                      {/* Service header with no hover effects */}
                      <div className="glance-service-header">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="glance-icon"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <h3 className="glance-service-title">OUTSOURCING</h3>
                      </div>

                      <p className="glance-service-text">
                        Outsourcing via BPO and KPO delegates tasks to external providers to enhance efficiency and
                        reduce costs, with BPO handling routine tasks and KPO managing specialized processes.
                      </p>
                    </div>
                  </td>
                  <td className="glance-service-cell">
                    <div
                      className={`glance-service transition-all duration-700 delay-500 transform ${
                        servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                    >
                      {/* Service header with no hover effects */}
                      <div className="glance-service-header">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="glance-icon"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                        <h3 className="glance-service-title">CONSULTING</h3>
                      </div>

                      <p className="glance-service-text">
                        Cybersecurity and system integration consulting helps businesses protect digital assets and
                        integrate technology systems for better performance and security.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
