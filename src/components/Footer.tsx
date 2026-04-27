'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary py-20 border-t border-accent/10 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-accent flex items-center justify-center rotate-45">
                <span className="text-[8px] font-bold -rotate-45 text-accent">W</span>
              </div>
              <span className="text-lg font-serif tracking-widest text-accent">WHITESTONE</span>
            </div>
            <p className="text-accent/40 text-xs leading-relaxed max-w-xs font-light">
              A shimmering oasis where memories are sculpted and celebrations come alive in the heart of Lagos.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-accent text-[10px] tracking-[0.3em] uppercase font-bold">Location</h4>
            <p className="text-accent/60 text-xs leading-relaxed font-light">
              3 Billings Way, Oregun, <br />
              Ikeja, Lagos 101233, Nigeria
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-accent text-[10px] tracking-[0.3em] uppercase font-bold">Inquiries</h4>
            <p className="text-accent/60 text-xs leading-relaxed font-light">
              0803 306 3687 <br />
              concierge@whitestone.com
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-accent text-[10px] tracking-[0.3em] uppercase font-bold">Legal</h4>
            <div className="flex flex-col gap-3">
              {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
                <a key={item} href="#" className="text-accent/60 text-xs hover:text-accent transition-colors font-light">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-accent/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-accent/20 text-[10px] tracking-widest uppercase font-bold">
            © 2024 Whitestone Event Place. All Rights Reserved.
          </div>
          <div className="text-accent/20 text-[10px] tracking-widest uppercase font-bold italic">
            Designed for Excellence
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
