import { label } from 'framer-motion/client';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills"},
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className='bg-gray-900 text-white shadow-md fixed top-0 w-full z-50'>
      <div className='max-w-6xl mx-auto px-4 py-3 flex justify-between items-center'>
        <Link to="/" className='text-xl font-bold'>Rohit Barma</Link>

        <div className='hidden md:flex space-x-6'>
          {navLinks.map((link) => (
            <NavLink 
              key={link.to}
              to={link.to}
              className={({isActive}) => 
                isActive ?"text-yellow-400 font-semibold" : "hover:text-yellow-600"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* mobile toggle button */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className='md:hidden px-4 pb-4 space-y-2 bg-gray-800'>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({isActive}) => 
                isActive ? "block text-yellow-400 font-semibold" : "block hover:text-yellow-300"
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar;
