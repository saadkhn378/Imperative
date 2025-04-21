"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import { motion, AnimatePresence, useDragControls } from "framer-motion"
import gsap from "gsap"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import CompanyMarker from "../pages/CompanyMarker"
import CompanyDetails from "../pages/CompanyDetails"
import { companies, industryColors } from "../data/companies"
import { indiaCountryGeoJSON, indiaStatesGeoJSON } from "../data/geoData"
import { MapPin, Calendar, Users, Info } from "lucide-react"

// Fix for Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

const WorldMap = () => {
  // State hooks
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [detailsPosition, setDetailsPosition] = useState({ x: 20, y: 20 })
  const mapRef = useRef(null)
  const dragControls = useDragControls()

  // Set mounted state
  const mapContainerRef = useRef(null)
  const detailsRef = useRef(null)

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener for resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // In the useEffect
  useEffect(() => {
    setIsMounted(true)

    if (mapContainerRef.current) {
      gsap.from(mapContainerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })
    }
  }, [])

  // Handle company selection
  const handleCompanySelect = useCallback(
    (company) => {
      if (company === selectedCompany) {
        setSelectedCompany(null) // Deselect if already selected
      } else {
        setSelectedCompany(company)

        // If on mobile and we have a map reference, center the map on the selected company
        if (isMobile && mapRef.current) {
          mapRef.current.setView([company.lat, company.lng], 6, {
            animate: true,
            duration: 1,
          })
        } else if (!isMobile && mapRef.current) {
          // For desktop, position the details card near the marker but not directly on it
          // Get the map container bounds
          const bounds = mapRef.current.getContainer().getBoundingClientRect()

          // Get the marker position on the map
          const markerPoint = mapRef.current.latLngToContainerPoint(
            L.latLng(company.lat || company.position[0], company.lng || company.position[1]),
          )

          // Calculate position for details card
          // Position to the right of the marker if there's enough space, otherwise to the left
          const rightSpace = bounds.width - markerPoint.x
          const x = rightSpace > 350 ? markerPoint.x + 20 : markerPoint.x - 350

          // Position below the marker if there's enough space, otherwise above
          const bottomSpace = bounds.height - markerPoint.y
          const y = bottomSpace > 400 ? markerPoint.y + 20 : markerPoint.y - 400

          // Set the position state
          setDetailsPosition({
            x: Math.max(20, Math.min(bounds.width - 350, x)),
            y: Math.max(20, Math.min(bounds.height - 400, y)),
          })
        }
      }
    },
    [selectedCompany, isMobile],
  )

  // Style functions for GeoJSON layers - No hover effects
  const countryStyle = useCallback(() => {
    return {
      fillColor: "transparent",
      weight: 0,
      opacity: 0,
      color: "transparent",
      fillOpacity: 0,
    }
  }, [])

  const stateStyle = useCallback(() => {
    return {
      weight: 0,
      opacity: 0,
      color: "transparent",
      fillOpacity: 0,
      fillColor: "transparent",
    }
  }, [])

  // Function to handle drag end for the pull indicator
  const handleDragEnd = (event, info) => {
    if (info.offset.y > 50) {
      // If dragged down more than 50px, close the panel
      setSelectedCompany(null)
    }
  }

  // Loading state
  if (!isMounted) {
    return (
      <div className="relative min-h-[600px] flex items-center justify-center bg-gray-100 rounded-lg animate-pulse">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]"></div>
          <p className="mt-2 text-gray-500">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="font-met relative">
      <div className="relative">
        <motion.div
          ref={mapContainerRef}
          className="bg-white shadow-none p-0 mb-0 overflow-hidden map-container" // Removed rounded-lg, reduced padding and margin to 0
          style={{
            height: isMobile && selectedCompany ? "70vh" : "650px",
            transition: "height 0.3s ease-in-out",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="h-full w-full mx-auto relative">
            <MapContainer
              center={[22.5937, 78.9629]} // Center of India
              zoom={4}
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              touchZoom={false}
              boxZoom={false}
              dragging={true}
              preferCanvas={true}
              minZoom={3}
              maxZoom={10}
              zoomControl={false}
              attributionControl={false}
              className="z-0"
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                maxZoom={19}
              />

              {/* Country boundary - hidden */}
              <GeoJSON data={indiaCountryGeoJSON} style={countryStyle} />

              {/* State boundaries - hidden */}
              <GeoJSON data={indiaStatesGeoJSON} style={stateStyle} />

              {/* Company markers */}
              {companies.map((company) => (
                <CompanyMarker
                  key={company.id}
                  company={company}
                  selectedCompany={selectedCompany}
                  setSelectedCompany={handleCompanySelect}
                  industryColors={industryColors}
                />
              ))}
            </MapContainer>

            {/* Company details card - Desktop version as map overlay */}
            <AnimatePresence mode="wait">
              {selectedCompany && !isMobile && (
                <motion.div
                  key={`desktop-overlay-${selectedCompany.id}`}
                  className="absolute z-[1500]"
                  style={{
                    top: detailsPosition.y,
                    left: detailsPosition.x,
                    width: "320px",
                    maxWidth: "calc(100% - 40px)",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                    <CompanyDetails
                      selectedCompany={selectedCompany}
                      industryColors={industryColors}
                      onClose={() => setSelectedCompany(null)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Enhanced Company details card - Mobile version with functional pull indicator */}
        <AnimatePresence mode="wait">
          {selectedCompany && isMobile && (
            <motion.div
              ref={detailsRef}
              key={`mobile-${selectedCompany.id}`}
              className="fixed left-0 right-0 bottom-0 z-[2000] p-4 pb-6"
              style={{
                background:
                  "linear-gradient(to top, rgba(255,255,255,1) 80%, rgba(255,255,255,0.8) 90%, rgba(255,255,255,0) 100%)",
                maxHeight: "50vh",
                overflowY: "auto",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                boxShadow: "0 -4px 10px rgba(0,0,0,0.1)",
              }}
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 300, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              drag="y"
              dragControls={dragControls}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              dragListener={false} // Only allow drag from the pull indicator
            >
              {/* Functional pull indicator */}
              <div
                className="pt-3 pb-1 px-4 cursor-grab active:cursor-grabbing touch-none"
                onPointerDown={(e) => dragControls.start(e)}
                onClick={() => setSelectedCompany(null)} // Also close on click
              >
                <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Original header with industry color */}
                <div className="p-4 text-white" style={{ backgroundColor: industryColors[selectedCompany.industry] }}>
                  <h3 className="text-lg font-semibold">{selectedCompany.name}</h3>
                  <p className="text-sm opacity-90">{selectedCompany.industry}</p>
                </div>

                {/* Enhanced company details with icons */}
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <MapPin size={18} className="text-gray-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Location</h4>
                        <p className="text-sm text-gray-800">
                          {selectedCompany.city}, {selectedCompany.state}
                        </p>
                      </div>
                    </div>

                    {/* Founded */}
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Calendar size={18} className="text-gray-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Founded</h4>
                        <p className="text-sm text-gray-800">{selectedCompany.founded}</p>
                      </div>
                    </div>

                    {/* Employees */}
                    {selectedCompany.employees && (
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <Users size={18} className="text-gray-400" />
                        </div>
                        <div>
                          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide">Employees</h4>
                          <p className="text-sm text-gray-800">{selectedCompany.employees.toLocaleString()}</p>
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    {selectedCompany.description && (
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <Info size={18} className="text-gray-400" />
                        </div>
                        <div>
                          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide">About</h4>
                          <p className="text-sm text-gray-700 mt-1">{selectedCompany.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Original close button style */}
                <div className="p-3 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedCompany(null)}
                    className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default WorldMap