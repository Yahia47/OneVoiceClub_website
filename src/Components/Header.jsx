import React, { useState } from 'react';
import { Mail, MapPin, Instagram, Facebook, ChevronLeft, ChevronRight, Menu, X, Search, Globe, User } from 'lucide-react';

const Header = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Common styles
  const goldText = "bg-gradient-to-b from-[#F3E5AD] via-[#C5A059] to-[#8B6E32] bg-clip-text text-transparent";
  const goldBorder = "border border-[#C5A059]/50";
  const glassCard = "bg-[#1A1608]/80 backdrop-blur-sm border border-[#C5A059]/30 rounded-xl p-6";
  const navItemStyle = "hover:text-white transition-colors cursor-pointer block py-2 md:py-0";

  return (
    <div className="min-h-screen bg-[#0D0B04] text-[#E5D9B6] font-sans selection:bg-[#C5A059]/30">
      
      {/* Updated Navigation Header */}
      <nav className="sticky top-0 z-50 bg-[#0D0B04]/90 backdrop-blur-md border-b border-[#C5A059]/10">
        <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold tracking-widest text-[#F3E5AD]">ONE VOICE CLUB</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-tighter">
            <a href="#home" className={navItemStyle}>Home</a>
            <a href="#about" className={navItemStyle}>About us</a>
            <a href="#activity" className={navItemStyle}>Activity</a>
            <a href="#events" className={navItemStyle}>Events</a>
            <a href="#contact" className={navItemStyle}>Contact</a>
          </div>

          {/* Right Side Icons & Hamburger */}
          <div className="flex items-center gap-4 text-[#C5A059]">
            <div className="hidden sm:flex gap-4 border-r border-[#C5A059]/30 pr-4 mr-2">
              <Search size={18} />
              <Globe size={18} />
              <User size={18} />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-1 text-[#F3E5AD]" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`
          md:hidden absolute w-full bg-[#0D0B04] border-b border-[#C5A059]/20 transition-all duration-300 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="flex flex-col items-center py-6 gap-4 text-sm uppercase tracking-widest">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className={navItemStyle}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className={navItemStyle}>About us</a>
            <a href="#activity" onClick={() => setIsMenuOpen(false)} className={navItemStyle}>Activity</a>
            <a href="#events" onClick={() => setIsMenuOpen(false)} className={navItemStyle}>Events</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className={navItemStyle}>Contact</a>
          </div>
        </div>
      </nav>

     
    </div>
  );
};

export default Header;