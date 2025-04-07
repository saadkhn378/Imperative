import React from "react";
import { MapPin, Navigation, Globe } from "lucide-react";
import clsx from "clsx";

const regions = [
  {
    name: "Silicon Valley Headquarters",
    address: "123 Innovation Drive, Tech Park, Silicon Valley, CA 94043",
    icon: <MapPin className="h-8 w-8 text-orange-600" />,
  },
  {
    name: "New York Office",
    address: "456 Tech Avenue, Manhattan, New York, NY 10001",
    icon: <Navigation className="h-8 w-8 text-orange-600" />,
  },
  {
    name: "London Branch",
    address: "78 Digital Street, Westminster, London, UK SW1A 1AA",
    icon: <Globe className="h-8 w-8 text-orange-600" />,
  },
];

const RegionCards = () => {
  return (
    <div className="font-met w-full">
      <h2 className="text-2xl font-bold mb-6">Our Global Presence</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {regions.map((region, index) => (
          <div 
            key={index}
            className={clsx(
              "bg-white rounded-lg shadow-md p-6 transition-all duration-300",
              "hover:shadow-xl hover:-translate-y-1",
              "animate-fade-in"
            )}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{region.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{region.name}</h3>
              <p className="text-gray-600">{region.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionCards;

