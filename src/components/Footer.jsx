import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion for animations
import logo from '../assets/images/logo2.png';

const Footer = () => {
  return (
    <footer className="font-met bg-black text-gray-400 py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <img src={logo} alt="Imperative Logo" className="w-40 mb-4" />
          <p className="text-sm">
            Imperative Business Ventures Limited (<a href="https://www.theimperative.in" className="text-white underline">www.theimperative.in</a>) is an ISO 9001:2015,
            ISO/IEC 27001-2013 certified, MSME & NSIC registered Scale-up organization.
          </p>
          <motion.a 
            href="#" 
            className="text-white mt-2 inline-block"
            whileHover={{ x: 5 }} // Motion effect on hover
            transition={{ type: "tween", duration: 0.2 }}
          >
            Read more
          </motion.a>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              {["Home", "Products", "Companies", "Industries", "Consulting", "Outsourcing", "Technology"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: "tween", duration: 0.2 }}>
                  <a href="#" className="hover:text-white">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold">About</h3>
            <ul className="mt-2 space-y-2">
              {["About Us", "Our Team", "Awards", "Join Us"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: "tween", duration: 0.2 }}>
                  <a href="#" className="hover:text-white">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-white font-semibold">Contact</h3>
          <p className="text-sm mt-2">Imperative Business Ventures Limited</p>
          <p className="text-sm">4th Floor, Bhairaav Milestone, Plot No: C-15, Road No:16,</p>
          <p className="text-sm">Wagle Industrial Estate, Thane – (West), Maharashtra- 400604</p>
          <motion.a 
            href="mailto:info@theimperative.in" 
            className="text-white mt-2 inline-block"
            whileHover={{ x: 5 }} 
            transition={{ type: "tween", duration: 0.2 }}
          >
            info@theimperative.in
          </motion.a>
          <p className="text-sm">+91-22-62558700</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {[{ icon: FaFacebookF, link: "#" }, { icon: FaTwitter, link: "#" }, { icon: FaLinkedinIn, link: "#" }, { icon: FaInstagram, link: "#" }]
              .map(({ icon: Icon, link }, index) => (
                <motion.a 
                  key={index} 
                  href={link} 
                  className="text-gray-400 hover:text-white transition duration-300"
                  whileHover={{ x: 5 }} 
                  transition={{ type: "tween", duration: 0.2 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Imperative Business Ventures Limited. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {["Terms", "Privacy", "Compliances"].map((item) => (
            <motion.a 
              key={item} 
              href="#" 
              className="hover:text-white"
              whileHover={{ x: 5 }} 
              transition={{ type: "tween", duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;



