import { motion } from "framer-motion";
import { Utensils, Phone, Film, Building2, ShoppingCart, Truck, HeartPulse, Landmark, Lightbulb } from "lucide-react";

const industries = [
  { id: 1, name: "Food & Beverage", icon: Utensils, description: "Innovative solutions for restaurants, food delivery, and catering services" },
  { id: 2, name: "Telecommunications", icon: Phone, description: "Advanced systems for telecom providers and communication networks" },
  { id: 3, name: "Entertainment", icon: Film, description: "Creative technologies for media, gaming, and entertainment companies" },
  { id: 4, name: "Real Estate", icon: Building2, description: "Smart solutions for property management and real estate businesses" },
  { id: 5, name: "Retail", icon: ShoppingCart, description: "Omnichannel platforms for modern retail and e-commerce businesses" },
  { id: 6, name: "Logistics", icon: Truck, description: "Efficient systems for transportation, shipping, and supply chain management" },
  { id: 7, name: "Healthcare", icon: HeartPulse, description: "Innovative technologies for hospitals, clinics, and healthcare providers" },
  { id: 8, name: "Finance", icon: Landmark, description: "Secure solutions for banking, insurance, and financial services" },
  { id: 9, name: "Education", icon: Lightbulb, description: "Digital platforms for schools, universities, and online learning" },
];

export default function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="font-met py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-3xl font-bold mb-4">
            Industries We Serve
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="text-gray-600 max-w-2xl mx-auto">
            We provide specialized solutions across various industries, helping businesses transform and grow.
          </motion.p>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map(({ id, name, icon: Icon, description }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              }}
              className="bg-white rounded-lg p-6 shadow-md transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-orange-100 rounded-full">
                  <Icon className="h-8 w-8 text-orange-600" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
