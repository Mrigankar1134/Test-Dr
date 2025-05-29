import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { PhoneIncoming, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: 'ABOUT US', href: '/' },
    { name: 'SERVICES', href: '/services' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white shadow-md h-16' : 'bg-[var(--color-bg)] shadow-none h-24'
        }`}
    >
      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 h-full grid grid-cols-3 items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={Logo}
            alt="DrMudhiwalla HealthCare"
            className={`transition-all duration-500 ease-in-out ${scrolled ? 'h-12' : 'h-16'
              }`}
          />
        </div>

        {/* Centered Nav Links */}
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

        {/* Contact + Mobile Toggle (Third Column) */}
        <div className="flex items-center justify-self-end space-x-4">
          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--color-button)] hover:bg-[var(--color-primary-hover)] text-white font-medium px-6 py-3 transition-colors duration-300"
            >
              Contact Us
              <PhoneIncoming className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(o => !o)} className="p-2 text-gray-800">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {links.map(link => (
              <NavLink
                key={link.name}
                to={link.href}
                className="block text-gray-800 font-medium px-2 py-1"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full rounded-full bg-[var(--color-button)] hover:bg-[var(--color-primary-hover)] text-white font-medium px-6 py-3"
              onClick={() => setOpen(false)}
            >
              Contact Us
              <PhoneIncoming className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}