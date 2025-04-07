import React, { useEffect, useRef } from "react";

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      googleMapScript.onload = () => initMap(); // Ensure script loads fully before calling initMap
      document.body.appendChild(googleMapScript);

      return () => {
        document.body.removeChild(googleMapScript);
        mapRef.current = null; // Cleanup
      };
    } else {
      initMap(); // If already loaded, initialize directly
    }
  }, []);

  const initMap = () => {
    if (mapRef.current && window.google) {
      const location = { lat: 37.387474, lng: -122.057543 };

      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
          },
        ],
      });

      const marker = new window.google.maps.Marker({
        position: location,
        map,
        title: "Our Company Headquarters",
        animation: window.google.maps.Animation.DROP,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 5px; font-weight: bold;">Our Company HQ</h3>
            <p style="margin: 0;">123 Innovation Drive, Tech Park, Silicon Valley</p>
          </div>
        `,
      });

      marker.addListener("click", () => infoWindow.open(map, marker));
    }
  };

  return (
    <div ref={mapRef} className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  );
};

export default GoogleMap;
