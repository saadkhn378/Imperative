"use client"

import { useMemo } from "react"
import { Marker, Popup } from "react-leaflet"
import L from "leaflet"

const CompanyMarker = ({ company, selectedCompany, setSelectedCompany, industryColors }) => {
  const isSelected = selectedCompany?.id === company.id
  const color = industryColors[company.industry] || "#ef4444"

  // Custom marker icon
  const icon = useMemo(() => {
    return L.divIcon({
      className: "custom-icon",
      html: `
        <div class="ping-marker" style="position: relative; width: 24px; height: 24px;">
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: ${color};
            width: ${isSelected ? "16px" : "12px"};
            height: ${isSelected ? "16px" : "12px"};
            border-radius: 50%;
            border: 1.5px solid rgba(255, 255, 255, 0.9);
            box-shadow: 
              0 0 0 1px rgba(255, 255, 255, 0.3),
              0 0 10px 2px ${color}CC, 
              0 0 20px 5px ${color}80;
            z-index: 10;
            animation: pulse 2s infinite;
            filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.5));
            backdrop-filter: blur(4px);
            transition: all 0.3s ease;
          " class="pulse-marker glow-marker"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    })
  }, [color, isSelected])

  return (
    <Marker
      key={company.id}
      position={company.position}
      icon={icon}
      eventHandlers={{
        click: () => setSelectedCompany(company),
      }}
    >
      <Popup className="custom-popup">
        <div className="p-1">
          <h3 className="font-semibold text-base">{company.name}</h3>
          <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
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
            <span>
              {company.city}, {company.state}
            </span>
          </div>
          <div className="mt-2">
            <span
              className="badge badge-outline"
              style={{
                backgroundColor: `${color}20`,
                color: color,
                borderColor: color,
              }}
            >
              {company.industry}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-500">{company.description}</p>
          <button className="button button-link mt-1 text-sm" onClick={() => setSelectedCompany(company)}>
            View details
          </button>
        </div>
      </Popup>
    </Marker>
  )
}

export default CompanyMarker

