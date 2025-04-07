import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechInnovate",
    content: "Working with this team has transformed our business processes. Their innovative solutions helped us increase efficiency by 40% in just three months.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Director of Operations",
    company: "GlobalSystems",
    content: "The attention to detail and customer service is exceptional. They don't just deliver a product, they become a valuable partner in your success.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Marketing Lead",
    company: "BrandExperts",
    content: "I've worked with many service providers, but none have delivered the level of quality and innovation that this team consistently provides.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CEO",
    company: "InnovateNow",
    content: "Since partnering with this team, our customer satisfaction scores have increased by 35%. Their ability to understand our needs and deliver solutions is unmatched.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  },
  {
    id: 5,
    name: "Jennifer Park",
    role: "Product Manager",
    company: "TechSolutions",
    content: "The team's dedication to quality and innovation has helped us launch our product ahead of schedule. Their expertise and guidance were invaluable throughout the process.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
  }
];

function Testimonial() {
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      } 
    }
  };

  return (
    <section className="font-met py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-block rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-medium text-orange-600 mb-4"
            variants={itemVariants}
          >
            Testimonials
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            variants={itemVariants}
          >
            Discover why businesses choose us for their technology needs
          </motion.p>
        </motion.div>

        {/* Auto-sliding testimonials for larger screens */}
        <div className="hidden md:block relative">
          {/* First row - left to right */}
          <div className="mb-8">
            <Swiper
              slidesPerView={2}
              spaceBetween={24}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              modules={[Autoplay]}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={`row1-${testimonial.id}`}>
                  <motion.div
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="p-6 flex flex-row items-start gap-4">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          {testimonial.image ? (
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-500 text-xl font-semibold">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 mb-1">{testimonial.name}</div>
                          <div className="text-sm text-gray-600 mb-4">{testimonial.role}, {testimonial.company}</div>
                          <p className="text-gray-700">"{testimonial.content}"</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Second row - right to left */}
          <div>
            <Swiper
              slidesPerView={2}
              spaceBetween={24}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              modules={[Autoplay]}
              className="testimonial-swiper"
            >
              {[...testimonials].reverse().map((testimonial) => (
                <SwiperSlide key={`row2-${testimonial.id}`}>
                  <motion.div
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="p-6 flex flex-row items-start gap-4">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          {testimonial.image ? (
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-500 text-xl font-semibold">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 mb-1">{testimonial.name}</div>
                          <div className="text-sm text-gray-600 mb-4">{testimonial.role}, {testimonial.company}</div>
                          <p className="text-gray-700">"{testimonial.content}"</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        
        {/* Original grid layout - hidden on larger screens */}
        <div className="grid grid-cols-1 md:hidden gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col h-full">
                <div className="p-6 flex flex-col sm:flex-row items-start gap-4">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-xl font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 mb-1">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 mb-4">{testimonial.role}, {testimonial.company}</div>
                    <p className="text-gray-700">"{testimonial.content}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Swiper for smaller screens */}
        <div className="md:hidden mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={`mobile-${testimonial.id}`}>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <div className="flex items-start gap-4">
                    {/* Image */}
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-xl font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div>
                      <div className="font-medium text-gray-900 mb-1">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 mb-3">{testimonial.role}, {testimonial.company}</div>
                      <p className="text-gray-700">"{testimonial.content}"</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .testimonial-swiper {
          width: 100%;
          padding-top: 20px;
          padding-bottom: 50px;
          overflow: visible;
        }
        
        .swiper-pagination {
          bottom: 0 !important;
        }
        
        .swiper-pagination-bullet {
          background: #f97316;
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px;
          border-radius: 10px;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: #f97316;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}

export default Testimonial;

