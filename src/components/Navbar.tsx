'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Venues', href: '#venues' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Occasions', href: '#occasions' },
    { name: 'Concierge', href: '#concierge' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className={`w-8 h-8 border-2 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500 ${isScrolled ? 'border-primary' : 'border-white'}`}>
            <span className={`text-xs font-bold -rotate-45 group-hover:rotate-0 transition-all duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`}>W</span>
          </div>
          <span className={`text-xl font-serif tracking-widest transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>WHITESTONE</span>
        </a>

        <div className="hidden md:flex gap-10 items-center">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-[10px] tracking-[0.3em] font-bold uppercase transition-colors relative group ${isScrolled ? 'text-primary hover:text-accent-gold' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-accent-gold' : 'bg-white'}`} />
            </a>
          ))}
          <a href="#concierge" className={`px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-bold transition-colors ${isScrolled ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary hover:bg-accent'}`}>
            Inquire Now
          </a>
        </div>

        <button className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 glass border-t p-8 md:hidden flex flex-col gap-6 items-center"
          >
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] tracking-[0.3em] font-bold uppercase text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <Button className="w-full">Inquire Now</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
