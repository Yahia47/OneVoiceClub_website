import React from "react"
import { Mail, Instagram, Facebook, MapPin, Globe } from "lucide-react"

const Footer = () => {
  // Theme styling for dark elements on gold background
  const headingStyle =
    "text-[#1A1608] font-black uppercase tracking-[0.25em] text-[10px] mb-6"
  const linkStyle =
    "text-[#1A1608]/70 hover:text-black transition-all duration-300 text-sm font-medium flex items-center gap-2"

  return (
    <footer className="relative bg-gradient-to-b from-[#D4AF37] to-[#C5A059] pt-20 pb-8">
      {/* Decorative Top Border (Subtle Dark Line) */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#1A1608]/10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Location */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className={headingStyle}>Location</h5>
            <div className="space-y-2">
              <p className={linkStyle}>
                <MapPin size={14} className="shrink-0" />
                123 Luxury Street, Golden District
              </p>
              <p className="pl-6 text-[#1A1608]/70 text-sm uppercase tracking-wider">
                Paris, France
              </p>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col items-center">
            <h5 className={headingStyle}>Get In Touch</h5>
            <div className="space-y-4 flex flex-col items-center">
              <a
                href="mailto:OnevoiceClub.join@gmail.com"
                className={linkStyle}
              >
                <Mail size={16} />
                OnevoiceClub.join@gmail.com
              </a>
              <div className="flex items-center gap-2 text-[#1A1608]/70 text-sm">
                <Globe size={16} />
                <span>www.onevoice.club</span>
              </div>
            </div>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col items-center md:items-end">
            <h5 className={headingStyle}>Connect</h5>
            <div className="flex gap-5">
              <a
                href="#"
                className="p-2.5 rounded-full border border-[#1A1608]/20 hover:bg-[#1A1608] hover:text-[#F3E5AD] transition-all group"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full border border-[#1A1608]/20 hover:bg-[#1A1608] hover:text-[#F3E5AD] transition-all group"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Brand/Copyright Bar */}
        <div className="pt-8 border-t border-[#1A1608]/10 flex flex-col items-center">
          {/* Circular Minimal Logo */}
          <div className="mb-6 w-12 h-12 rounded-full border border-[#1A1608] flex items-center justify-center group hover:bg-[#1A1608] transition-colors cursor-pointer">
            <span className="text-[#1A1608] group-hover:text-[#F3E5AD] font-serif font-bold text-sm tracking-tighter">
              OV
            </span>
          </div>

          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-[#1A1608]/50 font-bold text-center">
            Copyright © 2025 by O'Vmenixus — All Rights Reserved
          </p>
        </div>
      </div>

      {/* Optional: Very subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
    </footer>
  )
}

export default Footer
