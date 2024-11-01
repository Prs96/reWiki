'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Home, User, Mail, Settings,Search } from 'lucide-react'



export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm,setSearchTerm]=useState("");

  return (
    
    <div className="h-screen bg-black text-white font-Ubuntu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

      <main className="pt-16">
        <motion.div
          className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-3xl font-medium mb-4 font-ubuntu">Welcome to Our Stylish Website</h1>
            <motion.form 
              
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center border-b border-white py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                  aria-label="Search"
                />
                <button 
                  type="submit"
                  className="flex-shrink-0 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded"
                  aria-label="Submit search"
                >
                  <Search size={18} />
                </button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </main>
    </div>
    </div>
    
  )
}
