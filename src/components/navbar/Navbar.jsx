

import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { PhoneIncoming, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { name: 'ABOUT US', href: '/' },
    { name: 'SERVICES', href: '/services' }
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
  scrolled ? 'bg-white shadow-md h-16' : 'bg-[var(--color-bg)] h-24'
}`}>
  <div
    className="
      max-w-screen-xl mx-auto px-6 lg:px-8 h-full
      flex items-center justify-between
      md:grid md:grid-cols-3
    "
  >
          {/* Logo always left */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className={`transition-all duration-300 ${
                scrolled ? 'h-10' : 'h-16'
              }`}
            />
          </div>

          {/* desktop links (hidden mobile) */}
          <div className="hidden md:flex justify-self-center space-x-12">
          {links.map(link => (
            <NavLink
              key={link.name}
              to={link.href}
              end
              onClick={() => window.scrollTo(0, 0)}
              className="group relative text-base font-bold px-2 py-2"
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-1 bg-[var(--color-button)] transition-all duration-300 origin-left ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

          {/* Right: desktop CTA + mobile toggle */}
          <div className="flex items-center justify-end space-x-4">
            {/* desktop CTA */}
            <a
              href="/contact"
              className="hidden md:inline-flex items-center rounded-full
                         bg-[var(--color-button)] hover:bg-[var(--color-primary-hover)]
                         text-white font-medium px-5 py-2 transition-all"
            >
              Contact Us
              <PhoneIncoming className="w-5 h-5 ml-2" />
            </a>

            {/* mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-800"
              onClick={() => setOpen(v => !v)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      {open && (
        <div
        className={`fixed inset-0 bg-black/70 text-white backdrop-blur-sm z-40 flex items-start 
                    transition-opacity duration-800 ease-in-out 
                    ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`pt-70 w-full max-w-xs h-full p-6 space-y-8 
                      transform transition-transform duration-300 ease-in-out 
                      ${open ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          {links.map(({ name, href }) => (
            <NavLink
              key={name}
              to={href}
              end
              className="block text-lg font-bold py-2"
              onClick={() => setOpen(false)}
            >
              {name}
            </NavLink>
          ))}
      
          <a
            href="/contact"
            className="mt-4 inline-flex w-full justify-center items-center
                       rounded-full bg-[var(--color-button)] hover:bg-[var(--color-primary-hover)]
                       text-white font-medium px-6 py-3 transition-all"
            onClick={() => setOpen(false)}
          >
            Contact Us
            <PhoneIncoming className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
      )}
    </>
  )
}