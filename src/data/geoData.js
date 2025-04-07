// Simplified GeoJSON for India's country boundary
export const indiaCountryGeoJSON = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "India",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [77.0, 8.0], // Southern tip
              [70.0, 20.0], // Western edge
              [70.0, 25.0],
              [77.0, 35.0], // Northern edge
              [80.0, 35.0],
              [88.0, 27.0], // Eastern edge
              [92.0, 25.0],
              [92.0, 21.0],
              [88.0, 15.0],
              [80.0, 10.0], // Back to southern region
              [77.0, 8.0], // Close the polygon
            ],
          ],
        },
      },
    ],
  }
  
  // Simplified GeoJSON for major Indian states
  export const indiaStatesGeoJSON = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Karnataka",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [74.0, 14.0],
              [74.0, 15.5],
              [76.0, 17.0],
              [78.0, 17.0],
              [78.0, 15.5],
              [77.0, 14.0],
              [77.0, 12.0],
              [76.0, 11.5],
              [74.0, 14.0],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Maharashtra",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [72.5, 16.0],
              [72.5, 19.5],
              [74.0, 21.0],
              [76.5, 21.0],
              [79.0, 21.0],
              [80.0, 19.5],
              [78.5, 17.5],
              [76.0, 16.0],
              [74.0, 16.0],
              [72.5, 16.0],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Gujarat",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [68.0, 20.0],
              [68.0, 24.0],
              [71.0, 24.5],
              [73.0, 24.0],
              [74.0, 22.0],
              [74.0, 21.0],
              [72.0, 19.0],
              [70.0, 19.5],
              [68.0, 20.0],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Delhi",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [76.8, 28.4],
              [76.8, 28.8],
              [77.4, 28.8],
              [77.4, 28.4],
              [76.8, 28.4],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Telangana",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [77.0, 16.0],
              [77.0, 19.0],
              [79.5, 19.5],
              [81.0, 19.0],
              [81.0, 17.5],
              [79.5, 16.5],
              [77.0, 16.0],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "West Bengal",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [86.0, 21.5],
              [86.0, 24.5],
              [88.0, 26.5],
              [89.5, 26.0],
              [89.0, 24.0],
              [88.5, 22.0],
              [87.5, 21.5],
              [86.0, 21.5],
            ],
          ],
        },
      },
    ],
  }
  
  
  
  