import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, User, Phone, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  phone: z.string().min(10, { message: "Enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Form submitted! We'll get back to you soon.");
      reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-met bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto"
    >
      <h2 className="font-met text-2xl font-bold mb-6 text-center">Send us a Message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/** Name Input **/}
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text" {...register("name")}
              className={`pl-10 w-full border ${errors.name ? "border-red-500" : "border-gray-300"} py-2 px-3 rounded-md focus:ring-orange-500 focus:border-orange-500`}
              placeholder="John Doe"
            />
          </div>
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
        </div>
        
        {/** Email Input **/}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email" {...register("email")}
              className={`pl-10 w-full border ${errors.email ? "border-red-500" : "border-gray-300"} py-2 px-3 rounded-md focus:ring-orange-500 focus:border-orange-500`}
              placeholder="john@example.com"
            />
          </div>
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>

        {/** Phone Input **/}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="tel" {...register("phone")}
              className={`pl-10 w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} py-2 px-3 rounded-md focus:ring-orange-500 focus:border-orange-500`}
              placeholder="(123) 456-7890"
            />
          </div>
          {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
        </div>

        {/** Message Input **/}
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Message</label>
          <textarea
            {...register("message")} rows={4}
            className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} py-2 px-3 rounded-md focus:ring-orange-500 focus:border-orange-500`}
            placeholder="How can we help you?"
          />
          {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
        </div>

        {/** Submit Button **/}
        <motion.button 
          whileTap={{ scale: 0.95 }}
          type="submit" disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md font-medium transition-all"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
