'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Home, User, Mail, Settings } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: User, label: 'Profile' },
  { icon: Mail, label: 'Contact' },
  { icon: Settings, label: 'Settings' },
]

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white font-['Playfair_Display',serif]">
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-10 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 font-bold text-2xl"
            >
              LOGO
            </motion.div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href="#"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <item.icon className="inline-block mr-2" size={18} />
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <item.icon className="inline-block mr-2" size={18} />
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <main className="pt-16">
        <motion.div
          className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Stylish Website</h1>
            <p className="text-xl">
              This is a black and white homescreen with a sleek navigation bar and smooth animations.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
