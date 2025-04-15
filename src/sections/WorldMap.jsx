"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import CompanyMarker from "../pages/CompanyMarker"
import CompanyDetails from "../pages/CompanyDetails"
import { companies, industryColors } from "../data/companies"
import { indiaCountryGeoJSON, indiaStatesGeoJSON } from "../data/geoData"

// Fix for Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

const WorldMap = () => {
  // Get unique industries and states
  const industries = useMemo(() => [...new Set(companies.map((company) => company.industry))], [])
  const states = useMemo(() => [...new Set(companies.map((company) => company.state))], [])

  // State hooks
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [isMounted, setIsMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustries, setSelectedIndustries] = useState([])
  const [selectedState, setSelectedState] = useState(null)
  const [showIndustries, setShowIndustries] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const mapRef = useRef(null)

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

  // Update showIndustries based on selectedCompany and mobile state
  useEffect(() => {
    // Only show industries if no company is selected AND not on mobile
    setShowIndustries(!selectedCompany && !isMobile)
  }, [selectedCompany, isMobile])

  // Handle company selection
  const handleCompanySelect = useCallback(
    (company) => {
      if (company === selectedCompany) {
        setSelectedCompany(null) // Deselect if already selected
      } else {
        setSelectedCompany(company)
      }
    },
    [selectedCompany],
  )

  // Filter companies based on search and filters
  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesSearch =
        searchTerm === "" ||
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(company.industry)
      const matchesState = selectedState === null || company.state === selectedState

      return matchesSearch && matchesIndustry && matchesState
    })
  }, [searchTerm, selectedIndustries, selectedState])

  // Toggle industry filter
  const toggleIndustry = useCallback((industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry],
    )
  }, [])

  // Toggle state filter
  const toggleState = useCallback((state) => {
    setSelectedState((prev) => (prev === state ? null : state))
  }, [])

  // Clear all filters
  const clearFilters = useCallback(() => {
    setSearchTerm("")
    setSelectedIndustries([])
    setSelectedState(null)
  }, [])

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

  // Event handlers for GeoJSON features - No hover effects
  const onEachStateFeature = useCallback(
    (feature, layer) => {
      // No hover effects or tooltips
      // Only add click handler for state selection
      layer.on({
        click: () => {
          toggleState(feature.properties.name)
        },
      })
    },
    [toggleState],
  )

  // Loading state
  if (!isMounted) {
    return (
      <div className="relative min-h-[400px] flex items-center justify-center bg-gray-100 rounded-lg animate-pulse">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em]"></div>
          <p className="mt-2 text-gray-500">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="font-met relative">
      <motion.div
        className="mb-4 flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      ></motion.div>

      <div className="relative">
        <motion.div
          ref={mapContainerRef}
          className="bg-white rounded-lg shadow-md p-4 mb-6 overflow-hidden map-container"
          style={{
            height: isMobile && selectedCompany ? "60vh" : "450px",
            transition: "height 0.3s ease-in-out",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="h-full w-[90%] mx-auto relative">
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
              <GeoJSON data={indiaStatesGeoJSON} style={stateStyle} onEachFeature={onEachStateFeature} />

              {/* Company markers - with disableTooltip flag for mobile */}
              {filteredCompanies.map((company) => (
                <CompanyMarker
                  key={company.id}
                  company={company}
                  selectedCompany={selectedCompany}
                  setSelectedCompany={handleCompanySelect}
                  industryColors={industryColors}
                  disableTooltip={true} // Disable any tooltips or popups on the map
                />
              ))}
            </MapContainer>

            {/* Map legend with AnimatePresence - Only shown on desktop */}
            <AnimatePresence>
              {showIndustries && !isMobile && (
                <motion.div
                  className="absolute top-4 left-4 z-[1000] bg-white/90 p-3 rounded-md text-xs flex flex-col gap-2 backdrop-blur-sm shadow-sm max-w-[180px] max-h-[250px] overflow-y-auto"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="font-medium text-sm">Industries</div>
                  {Object.entries(industryColors).map(([industry, color], index) => (
                    <motion.div
                      key={industry}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    >
                      <div
                        className="relative w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: color,
                          border: "1px solid rgba(255, 255, 255, 0.8)",
                          boxShadow: `0 0 4px ${color}80`,
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-75"
                          style={{ backgroundColor: color }}
                        ></div>
                      </div>
                      <span>{industry}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Company details card - Mobile version */}
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
            >
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 text-white" style={{ backgroundColor: industryColors[selectedCompany.industry] }}>
                  <h3 className="text-lg font-semibold">{selectedCompany.name}</h3>
                  <p className="text-sm opacity-90">{selectedCompany.industry}</p>
                </div>

                <div className="p-4">
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <h4 className="text-xs font-medium text-gray-500">LOCATION</h4>
                      <p className="text-sm">
                        {selectedCompany.city}, {selectedCompany.state}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-gray-500">FOUNDED</h4>
                      <p className="text-sm">{selectedCompany.founded}</p>
                    </div>

                    {selectedCompany.employees && (
                      <div>
                        <h4 className="text-xs font-medium text-gray-500">EMPLOYEES</h4>
                        <p className="text-sm">{selectedCompany.employees.toLocaleString()}</p>
                      </div>
                    )}

                    {selectedCompany.description && (
                      <div>
                        <h4 className="text-xs font-medium text-gray-500">ABOUT</h4>
                        <p className="text-sm text-gray-700">{selectedCompany.description}</p>
                      </div>
                    )}
                  </div>
                </div>

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

        {/* Company details card - Desktop version */}
        <AnimatePresence mode="wait">
          {selectedCompany && !isMobile && (
            <motion.div
              key={`desktop-${selectedCompany.id}`}
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <CompanyDetails
                selectedCompany={selectedCompany}
                industryColors={industryColors}
                onClose={() => setSelectedCompany(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default WorldMap
