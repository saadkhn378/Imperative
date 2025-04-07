import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Product 1",
    image: "/placeholder.svg?height=400&width=600",
    shortDescription: "High-quality product with advanced features",
    fullDescription:
      "Our Premium Product 1 is designed with the highest quality materials and cutting-edge technology...",
    features: ["Advanced technology integration", "Premium materials", "Enhanced durability"],
  },
  {
    id: 2,
    name: "Premium Product 2",
    image: "/placeholder.svg?height=400&width=600",
    shortDescription: "Versatile solution for everyday needs",
    fullDescription:
      "Premium Product 2 offers versatility and convenience for all your everyday needs...",
    features: ["Multi-functional design", "Compact and portable", "Quick setup process"],
  },
  {
    id: 3,
    name: "Premium Product 3",
    image: "/placeholder.svg?height=400&width=600",
    shortDescription: "Innovative design with superior performance",
    fullDescription:
      "Premium Product 3 combines innovative design with superior performance...",
    features: ["Sleek, modern design", "High-performance components", "Intuitive controls"],
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="font-met py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium products with exceptional quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md z-10"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <div className="relative h-72">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
                  <p className="text-gray-700 mb-6">{selectedProduct.fullDescription}</p>

                  <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                  <ul className="list-disc pl-5 mb-6">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="text-gray-700 mb-1">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-end">
                    <button className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

