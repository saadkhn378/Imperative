"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const FlyoutLink = ({ children, to, FlyoutContent }) => {
  const [open, setOpen] = useState(false)

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="group relative h-fit w-fit">
      <Link to={to} className="relative text-black hover:text-orange-500 transition-colors duration-300">
        {children}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-orange-500"
        />
      </Link>
      <AnimatePresence>
        {open && FlyoutContent && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ x: "-50%" }}
            className="absolute left-1/2 top-12 bg-white text-black shadow-md rounded-md z-50"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <motion.div
              className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FlyoutLink;
