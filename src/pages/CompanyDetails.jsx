"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const CompanyDetails = ({ selectedCompany, industryColors }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    if (selectedCompany && cardRef.current) {
      // GSAP animation for card content
      gsap.fromTo(
        cardRef.current.querySelectorAll(".animate-item"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
      )
    }
  }, [selectedCompany])

  if (!selectedCompany) {
    return (
      <div className="font-met card mb-6 border border-dashed border-gray-200" ref={cardRef}>
        <div className="p-4 pb-2">
          <h2 className="text-xl font-bold">Company Details</h2>
          <p className="text-sm text-gray-500">Click on a pin to view company information</p>
        </div>
        <div className="text-center py-8 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto mb-3 opacity-30"
          >
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
            <path d="M10 6h4"></path>
            <path d="M10 10h4"></path>
            <path d="M10 14h4"></path>
            <path d="M10 18h4"></path>
          </svg>
          <p>Select a company on the map to view its details</p>
        </div>
      </div>
    )
  }

  const color = industryColors[selectedCompany.industry] || "#ef4444"

  return (
    <div className="card mb-6" ref={cardRef}>
      <div className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 animate-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                <path d="M10 6h4"></path>
                <path d="M10 10h4"></path>
                <path d="M10 14h4"></path>
                <path d="M10 18h4"></path>
              </svg>
              {selectedCompany.name}
            </h2>
            <p className="flex items-center gap-1 mt-1 text-gray-500 animate-item">
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
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              {selectedCompany.city}, {selectedCompany.state}
            </p>
          </div>
          <span
            className="badge badge-outline animate-item"
            style={{
              backgroundColor: `${color}20`,
              color: color,
              borderColor: color,
            }}
          >
            {selectedCompany.industry}
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="mb-4 text-gray-600 animate-item">{selectedCompany.description}</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="animate-item">
            <p className="text-gray-500">Employees</p>
            <p className="font-medium">{selectedCompany.employees.toLocaleString()}</p>
          </div>
          <div className="animate-item">
            <p className="text-gray-500">Founded</p>
            <p className="font-medium">{selectedCompany.founded}</p>
          </div>
          <div className="animate-item">
            <p className="text-gray-500">Location</p>
            <p className="font-medium flex items-center gap-1">
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
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {selectedCompany.position[0].toFixed(4)}, {selectedCompany.position[1].toFixed(4)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetails



