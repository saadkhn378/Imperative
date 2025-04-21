import { FaCaretUp, FaCircle, FaBuilding, FaMedal } from "react-icons/fa"

function StatsSection() {
  return (
    <>
      <style>
        {`
          /* Stats Section Animation */
          .stats-item {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInStats 0.8s ease forwards;
          }

          .stats-item:nth-child(1) {
            animation-delay: 0.1s;
          }

          .stats-item:nth-child(2) {
            animation-delay: 0.3s;
          }

          .stats-item:nth-child(3) {
            animation-delay: 0.5s;
          }

          .stats-item:nth-child(4) {
            animation-delay: 0.7s;
          }

          @keyframes fadeInStats {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .icon-container {
            transition: transform 0.3s ease;
          }
          
          .stats-item:hover .icon-container {
            transform: scale(1.1);
          }
          
          /* Custom triangle icon styling */
          .triangle-icon {
            transform: scale(2.5) translateY(5px);
          }
          
          /* Custom circles arrangement */
          .circles-container {
            position: relative;
            width: 48px;
            height: 48px;
          }
          
          .circle-1 {
            position: absolute;
            top: 0;
            left: 5px;
          }
          
          .circle-2 {
            position: absolute;
            top: 0;
            right: 5px;
          }
          
          .circle-3 {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        `}
      </style>
      <div className="w-full bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* 14+ Years */}
            <div className="flex flex-col items-center stats-item">
              <div className="text-orange-500 mb-3 icon-container">
                <FaCaretUp className="triangle-icon" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-orange-500">14+ Years</h3>
              <p className="text-sm text-gray-600 mt-1">Driving innovation & business transformation.</p>
            </div>

            {/* 1200+ Experts */}
            <div className="flex flex-col items-center stats-item">
              <div className="text-orange-500 mb-3 icon-container">
                <div className="circles-container">
                  <FaCircle className="circle-1" size={20} />
                  <FaCircle className="circle-2" size={20} />
                  <FaCircle className="circle-3" size={20} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-orange-500">1200+ Experts</h3>
              <p className="text-sm text-gray-600 mt-1">A dedicated team delivering measurable outcomes.</p>
            </div>

            {/* 7+ Industries */}
            <div className="flex flex-col items-center stats-item">
              <div className="text-orange-500 mb-3 icon-container">
                <FaBuilding size={48} />
              </div>
              <h3 className="text-2xl font-bold text-orange-500">7+ Industries</h3>
              <p className="text-sm text-gray-600 mt-1">Trusted by BFSI, Healthcare, Retail & more.</p>
            </div>

            {/* Certifications */}
            <div className="flex flex-col items-center stats-item">
              <div className="text-orange-500 mb-3 icon-container">
                <FaMedal size={48} />
              </div>
              <h3 className="text-2xl font-bold text-orange-500">Certifications</h3>
              <p className="text-sm text-gray-600 mt-1">Quality & Security assured (ISO 9001 & 27001)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatsSection
