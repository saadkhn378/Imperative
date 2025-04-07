import React from "react";
import ContactForm from "../components/ContactForm";
import LocationCard from "../components/LocationCard";
import GoogleMap from "../components/GoogleMap";
import RegionCards from "../components/RegionCards";

const Contact = () => {
  return (
    <div className="font-met min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12 lg:max-w-6xl">
        <div className="mx-auto">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-10">
            We'd love to hear from you. Please fill out the form below or use our contact information.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ContactForm />
            <LocationCard />
          </div>

          <div className="mt-16 mb-12">
            <RegionCards />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Find Us on the Map</h2>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg relative">
              <GoogleMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

