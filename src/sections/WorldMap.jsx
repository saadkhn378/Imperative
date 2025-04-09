"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { MapContainer, TileLayer, GeoJSON, ZoomControl, useMap } from "react-leaflet"
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

// Component to handle map zoom events
const MapEventHandler = ({ setZoomLevel }) => {
  const map = useMap()

  useEffect(() => {
    if (!map) return

    const handleZoomEnd = () => {
      setZoomLevel(map.getZoom())
    }

    map.on("zoomend", handleZoomEnd)
    setZoomLevel(map.getZoom())

    return () => {
      map.off("zoomend", handleZoomEnd)
    }
  }, [map, setZoomLevel])

  return null
}

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
  const [currentZoomLevel, setCurrentZoomLevel] = useState(4)
  const [showIndustries, setShowIndustries] = useState(true)
  const mapRef = useRef(null)

  // Set mounted state
  const mapContainerRef = useRef(null)

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

  // Update showIndustries based on selectedCompany
  useEffect(() => {
    setShowIndustries(!selectedCompany)
  }, [selectedCompany])

  // Handle company selection
  const handleCompanySelect = useCallback((company) => {
    if (company === selectedCompany) {
      setSelectedCompany(null) // Deselect if already selected
    } else {
      setSelectedCompany(company)
    }
  }, [selectedCompany])

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
      fillColor: "transparent"
    }
  }, [])

  // Event handlers for GeoJSON features - No hover effects
  const onEachStateFeature = useCallback((feature, layer) => {
    // No hover effects or tooltips
    // Only add click handler for state selection
    layer.on({
      click: () => {
        toggleState(feature.properties.name)
      }
    })
  }, [toggleState])

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
      >
      </motion.div>

      <motion.div
      ref={mapContainerRef}
        className="bg-white rounded-lg shadow-md p-4 mb-6 overflow-hidden map-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="h-[450px] w-[90%] mx-auto relative">
          <MapContainer
            center={[22.5937, 78.9629]} // Center of India
            zoom={4}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={true}
            dragging={true}
            preferCanvas={true}
            minZoom={3}
            maxZoom={10}
            zoomControl={false}
            attributionControl={false}
            className="z-0"
            ref={mapRef}
          >
            {/* Map event handler for zoom */}
            <MapEventHandler setZoomLevel={setCurrentZoomLevel} />

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
              maxZoom={19}
            />

            <ZoomControl position="topright" />

            {/* Country boundary - hidden */}
            <GeoJSON data={indiaCountryGeoJSON} style={countryStyle} />

            {/* State boundaries - hidden */}
            <GeoJSON data={indiaStatesGeoJSON} style={stateStyle} onEachFeature={onEachStateFeature} />

            {/* Company markers */}
            {filteredCompanies.map((company) => (
              <CompanyMarker
                key={company.id}
                company={company}
                selectedCompany={selectedCompany}
                setSelectedCompany={handleCompanySelect}
                industryColors={industryColors}
              />
            ))}
          </MapContainer>

          {/* Map legend with AnimatePresence */}
          <AnimatePresence>
            {showIndustries && (
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

          {/* Zoom level indicator */}
          <motion.div
            className="absolute bottom-4 right-4 z-[1000] bg-white/90 px-2 py-1 rounded-md text-xs backdrop-blur-sm shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="3" y1="15" x2="21" y2="15"></line>
                <line x1="9" y1="3" x2="9" y2="21"></line>
                <line x1="15" y1="3" x2="15" y2="21"></line>
              </svg>
              <span>Zoom: {currentZoomLevel.toFixed(1)}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Company details card */}
      <AnimatePresence mode="wait">
        {selectedCompany && (
          <motion.div
            key={selectedCompany.id}
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
      </motion.div>
    </div>
  )
}

export default WorldMap










