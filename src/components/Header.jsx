import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, PhoneCall, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from '../assets/images/logo.png';

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
    >
      <Link to={href} className="relative text-black hover:text-orange-500 transition-colors duration-300">
        {children}
        <span
          style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-orange-500 transition-transform duration-300 ease-out"
        />
      </Link>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          style={{ x: "-50%" }}
          className="absolute left-1/2 top-12 bg-white text-black shadow-md rounded-md z-50"
        >
          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
          <FlyoutContent />
        </motion.div>
      )}
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const menuItems = [
    { name: "Know Us", subItems: ["Overview", "Our Team", "Awards & Recognitions"] },
    { name: "Our Ventures", subItems: ["Group Companies", "Industries We Serve"] },
    { name: "Products", subItems: ["Digital Product","Smart INFRA"] },
    { name: "Services", subItems: ["Consulting","Outsourcing","Technology"] },
    { name: "Gallery", subItems: ["Events","Celebrating Success"] },
    { name: "Investors", subItems: [] }
  ];

  return (
    <header className="font-met bg-white shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center text-black">
          <img src={logo} alt="Logo" className="h-15 mr-2" />
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <FlyoutLink
                key={item.name}
                href={`/${item.name.toLowerCase().replace(/ /g, "-")}`}
                FlyoutContent={() =>
                  item.subItems.length > 0 ? (
                    <div className="w-48 bg-white shadow-md rounded-md z-50">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem}
                          to={`/${subItem.toLowerCase().replace(/ /g, "-")}`}
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-orange-500 transition-colors duration-300"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  ) : null
                }
              >
                {item.name}
              </FlyoutLink>
            ))}
          </nav>

          {/* Phone Icon with Animated Contact Us Tooltip (Now Clickable) */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden md:flex relative group">
            <PhoneCall size={24} className="text-orange-500" />
            <Link
              to="/contact"
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-orange-500 text-white text-center p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Join Us Link */}
          <Link to="/join-us" className="hidden md:flex hover:text-orange-500 text-black transition-colors duration-300">
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button with Search */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-black" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Search Icon */}
          <button className="text-black" onClick={() => setShowSearch(!showSearch)}>
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* Search Bar (Mobile Only) */}
      {showSearch && (
        <div className="p-4 bg-white shadow-md flex items-center justify-center md:hidden">
          <input type="text" placeholder="Search..." className="p-2 border rounded-md w-full max-w-md" />
        </div>
      )}

      {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden bg-white shadow-md p-4 z-50">
    {menuItems.map((item, index) => (
      <div key={item.name}>
        <div
          className="flex justify-between items-center py-2 text-black hover:text-orange-500 transition-colors duration-300"
          onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
        >
          <Link to={`/${item.name.toLowerCase().replace(/ /g, "-")}`} className="block">
            {item.name}
          </Link>
          {item.subItems.length > 0 && (
            <ChevronDown size={20} className={`transition-transform ${openDropdown === index ? "rotate-180" : "rotate-0"}`} />
          )}
        </div>
        {openDropdown === index && item.subItems.length > 0 && (
          <div className="pl-4">
            {item.subItems.map((subItem) => (
              <Link
                key={subItem}
                to={`/${subItem.toLowerCase().replace(/ /g, "-")}`}
                className="block py-1 text-gray-600 hover:text-orange-500 transition-colors duration-300"
              >
                {subItem}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}

    {/* Join Us Link - Added to mobile menu */}
    <Link to="/join-us" className="block py-2 text-black hover:text-orange-500 transition-colors duration-300">
      Join Us
    </Link>

    {/* Mobile Contact Us Button */}
    <Link to="/contact" className="block mt-4 bg-orange-500 text-white text-center py-2 rounded-md hover:bg-orange-600">
      Contact Us
    </Link>
  </div>
)}
    </header>
  );
};

export default Header;









