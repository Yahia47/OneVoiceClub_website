import React, { useState, useEffect } from "react"
import { Menu, X, Search, Globe, User } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Scroll logic: Hide on scroll down, show on scroll up
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
          setIsVisible(false)
          setIsMenuOpen(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  // Style constants for the Golden Theme
  const goldGradient =
    "bg-gradient-to-r from-[#F3E5AD] via-[#D4AF37] to-[#C5A059]"
  const darkLink =
    "text-[#1A1608] hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-[11px]"

  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow-lg transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${goldGradient}`}
    >
      {/* Main Header Row */}
      <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1A1608] rounded-full flex items-center justify-center shadow-md">
            <span className="text-[#F3E5AD] text-xs font-bold">OV</span>
          </div>
          <div className="text-lg font-serif font-black tracking-tighter text-[#1A1608]">
            ONE VOICE CLUB
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <a href="#home" className={darkLink}>
            Home
          </a>
          <a href="#about" className={darkLink}>
            About us
          </a>
          <a href="#activity" className={darkLink}>
            Activity
          </a>
          <a href="#events" className={darkLink}>
            Events
          </a>
          <a href="#contact" className={darkLink}>
            Contact
          </a>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-5 text-[#1A1608]">
          <div className="hidden sm:flex items-center gap-4 border-r border-[#1A1608]/20 pr-5">
            <Search
              size={18}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
            <Globe
              size={18}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
            <User
              size={18}
              className="cursor-pointer hover:scale-110 transition-transform"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-1 text-[#1A1608] active:scale-90 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
        md:hidden absolute w-full bg-[#D4AF37] border-t border-[#1A1608]/10 transition-all duration-300 ease-in-out overflow-hidden shadow-2xl
        ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <div className="flex flex-col items-center py-8 gap-6">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className={darkLink}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className={darkLink}
          >
            About us
          </a>
          <a
            href="#activity"
            onClick={() => setIsMenuOpen(false)}
            className={darkLink}
          >
            Activity
          </a>
          <a
            href="#events"
            onClick={() => setIsMenuOpen(false)}
            className={darkLink}
          >
            Events
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className={darkLink}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
