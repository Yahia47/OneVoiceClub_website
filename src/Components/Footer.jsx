import React from 'react';
import { Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  // Styling constants to match the gold-on-black theme
  const goldHeading = "text-[#C5A059] font-bold uppercase tracking-[0.15em] text-xs mb-4";
  const goldText = "text-[#E5D9B6]/70 hover:text-[#F3E5AD] transition-colors duration-300";

  return (
    <footer className="bg-[#0D0B04] relative pt-16 pb-4 overflow-hidden">
   
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-[#C5A059]/20 pt-10">
          
          {/* Column 1: Location */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className={goldHeading}>Location</h5>
            <p className={`${goldText} text-sm leading-relaxed`}>
              Street Name Building Number<br />
              Area Name, City Name<br />
              State
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col items-center">
            <h5 className={goldHeading}>Contact</h5>
            <a 
              href="mailto:OnevoiceClub.join@gmail.com" 
              className={`${goldText} flex items-center gap-2 text-sm`}
            >
              <Mail size={14} className="text-[#C5A059]" />
              OnevoiceClub.join@gmail.com
            </a>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col items-center md:items-end">
            <h5 className={goldHeading}>Socials</h5>
            <div className="flex gap-6">
              <a href="#" className={goldText} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className={goldText} aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-4 border-t border-[#C5A059]/10">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#C5A059]/50">
            Copyright © 2025 by O'Vmenixus
          </p>
        </div>
      </div>
      
      {/* Visual Gold Line Bottom */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-4 opacity-30" />
    </footer>
  );
};

export default Footer;