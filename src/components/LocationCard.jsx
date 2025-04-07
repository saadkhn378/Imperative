import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const LocationCard = () => {
  return (
    <div className="font-met bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-2xl font-bold mb-6">Our Location</h2>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-gray-600">
              123 Innovation Drive,<br />
              Tech Park, Silicon Valley,<br />
              California, 94043
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-gray-600">
              <a href="tel:+1-123-456-7890" className="hover:text-orange-600 transition-colors">
                +1 (123) 456-7890
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:info@company.com" className="hover:text-orange-600 transition-colors">
                info@company.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaFacebook className="text-gray-500 h-6 w-6 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaTwitter className="text-gray-500 h-6 w-6 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaLinkedin className="text-gray-500 h-6 w-6 transition-all duration-300 group-hover:text-blue-700 group-hover:scale-110" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FaInstagram className="text-gray-500 h-6 w-6 transition-all duration-300 group-hover:text-pink-500 group-hover:scale-110" />
        </a>
      </div>
    </div>
  );
};

export default LocationCard;

