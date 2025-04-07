import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "TechSolutions Inc.",
    logo: "/placeholder.svg",
    description:
      "Leading provider of enterprise software solutions and IT consulting services, specializing in digital transformation and cloud migration.",
    founded: 2005,
    employees: "500+",
    headquarters: "San Francisco, CA",
  },
  {
    id: 2,
    name: "FinanceHub",
    logo: "/placeholder.svg",
    description:
      "Innovative fintech company offering digital banking solutions, payment processing, and financial management tools for businesses and individuals.",
    founded: 2010,
    employees: "300+",
    headquarters: "New York, NY",
  },
  {
    id: 3,
    name: "HealthCare Innovations",
    logo: "/placeholder.svg",
    description:
      "Pioneering healthcare technology company developing AI-powered diagnostic tools, telemedicine platforms, and patient management systems.",
    founded: 2012,
    employees: "250+",
    headquarters: "Boston, MA",
  },
  {
    id: 4,
    name: "GreenEnergy Solutions",
    logo: "/placeholder.svg",
    description:
      "Sustainable energy company focused on renewable energy technologies, smart grid solutions, and energy efficiency consulting for commercial clients.",
    founded: 2008,
    employees: "200+",
    headquarters: "Austin, TX",
  },
  {
    id: 5,
    name: "RetailTech",
    logo: "/placeholder.svg",
    description:
      "Retail technology provider offering omnichannel commerce platforms, inventory management systems, and customer analytics for retailers worldwide.",
    founded: 2011,
    employees: "180+",
    headquarters: "Chicago, IL",
  },
  {
    id: 6,
    name: "EduLearn Systems",
    logo: "/placeholder.svg",
    description:
      "Educational technology company creating interactive learning platforms, virtual classrooms, and AI-powered tutoring systems for schools and universities.",
    founded: 2014,
    employees: "150+",
    headquarters: "Seattle, WA",
  },
  {
    id: 7,
    name: "MediaStream",
    logo: "/placeholder.svg",
    description:
      "Digital media company specializing in content delivery networks, streaming technologies, and media analytics for publishers and broadcasters.",
    founded: 2013,
    employees: "120+",
    headquarters: "Los Angeles, CA",
  },
];

function GroupCompanies() {
  return (
    <section className="font-met py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Group Companies</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We've built a diverse portfolio of innovative companies across multiple industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {companies.map((company) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-40 h-20 bg-white rounded-md flex items-center justify-center p-4 shadow-sm">
                    <img src={company.logo} alt={company.name} className="object-contain" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                    <p className="text-gray-600 mb-4">{company.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div>
                        <span className="text-gray-500 text-sm">Founded</span>
                        <p className="font-medium">{company.founded}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Employees</span>
                        <p className="font-medium">{company.employees}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Headquarters</span>
                        <p className="font-medium">{company.headquarters}</p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn More
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GroupCompanies;


