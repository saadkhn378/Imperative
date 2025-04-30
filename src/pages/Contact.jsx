import React from "react";
import ContactForm from "../components/ContactForm";
import LocationCard from "../components/LocationCard";

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

        </div>
      </main>
    </div>
  );
};

export default Contact;

