import React from "react";
import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "Partner 1", logo: "/placeholder.svg?height=80&width=160" },
  { id: 2, name: "Partner 2", logo: "/placeholder.svg?height=80&width=160" },
  { id: 3, name: "Partner 3", logo: "/placeholder.svg?height=80&width=160" },
  { id: 4, name: "Partner 4", logo: "/placeholder.svg?height=80&width=160" },
  { id: 5, name: "Partner 5", logo: "/placeholder.svg?height=80&width=160" },
  { id: 6, name: "Partner 6", logo: "/placeholder.svg?height=80&width=160" },
  { id: 7, name: "Partner 7", logo: "/placeholder.svg?height=80&width=160" },
  { id: 8, name: "Partner 8", logo: "/placeholder.svg?height=80&width=160" },
];

export default function Marquee() {
  // Duplicate the partners array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="font-met py-16 bg-gray-50">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>
      </div>

      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="flex-shrink-0 mx-8">
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="w-[160px] h-[80px] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
