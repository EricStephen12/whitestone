'use client';

import React from 'react';
import Image from 'next/image';

const MapSection = () => {
  return (
    <section id="location" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Map */}
        <div className="relative min-h-[50vh] lg:min-h-[80vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.267868511742!2d3.3644444!3d6.6136111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93a0b4b8b8b9%3A0x7d0a0a0a0a0a0a0a!2sWhitestone%20Event%20Place!5e0!3m2!1sen!2sng!4v1714210000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary/30" />
              <span className="text-primary/50 text-[11px] tracking-[0.3em] uppercase font-semibold">Location</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-primary leading-[1.15] mb-6">
              In the heart of{' '}
              <span className="italic font-normal text-primary/70">Ikeja</span>
            </h2>
            <p className="text-foreground/60 text-base leading-relaxed mb-10">
              Tucked away in Oregun — peaceful yet accessible. Whether you're coming from the mainland or the island, getting here is easy.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <span className="text-primary/30 text-xs font-bold mt-0.5">01</span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Address</h4>
                  <p className="text-sm text-foreground/60">3 Billings Way, Oregun, Ikeja, Lagos</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary/30 text-xs font-bold mt-0.5">02</span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Phone</h4>
                  <p className="text-sm text-foreground/60">0803 306 3687</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary/30 text-xs font-bold mt-0.5">03</span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Parking</h4>
                  <p className="text-sm text-foreground/60">Ample secure parking available on-site</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/c7wBkKmFKwTzfaba8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-bold text-primary group"
            >
              <span className="border-b border-primary/20 pb-1 group-hover:border-primary transition-colors">Get Directions</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
