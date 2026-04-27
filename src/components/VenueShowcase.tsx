'use client';

import React from 'react';
import Image from 'next/image';

const VenueShowcase = () => {
  return (
    <section id="venues" className="bg-white">
      {/* Jadeite Hall — image left, text right */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[60vh] lg:min-h-[80vh]">
          <Image
            src="/images/hall.jpg"
            alt="Jadeite Hall"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary/30" />
              <span className="text-primary/50 text-[11px] tracking-[0.3em] uppercase font-semibold">Our Venues</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-primary leading-[1.15] mb-6">
              Jadeite Hall
            </h2>
            <p className="text-foreground/60 text-base leading-relaxed mb-8">
              Our biggest space, perfect for grand weddings and galas. Fully air-conditioned, incredibly open and bright — designed to make 1,500 guests feel like the room was built just for them.
            </p>
            <div className="flex gap-8 mb-10">
              <div>
                <span className="text-2xl text-primary font-serif">1,500</span>
                <p className="text-foreground/40 text-[11px] tracking-wider uppercase mt-1">Max Guests</p>
              </div>
              <div className="w-px bg-primary/10" />
              <div>
                <span className="text-2xl text-primary font-serif">Grand</span>
                <p className="text-foreground/40 text-[11px] tracking-wider uppercase mt-1">Atmosphere</p>
              </div>
            </div>
            <a href="#concierge" className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-bold text-primary group">
              <span className="border-b border-primary/20 pb-1 group-hover:border-primary transition-colors">Book Jadeite Hall</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Moonstone Hall — text left, image right (flipped) */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0 order-2 lg:order-1">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl text-primary leading-[1.15] mb-6">
              Moonstone Hall
            </h2>
            <p className="text-foreground/60 text-base leading-relaxed mb-8">
              A more intimate setting with a beautiful pearl-white finish. Ideal for romantic ceremonies, private dinners, and events where every detail matters.
            </p>
            <div className="flex gap-8 mb-10">
              <div>
                <span className="text-2xl text-primary font-serif">800</span>
                <p className="text-foreground/40 text-[11px] tracking-wider uppercase mt-1">Max Guests</p>
              </div>
              <div className="w-px bg-primary/10" />
              <div>
                <span className="text-2xl text-primary font-serif">Intimate</span>
                <p className="text-foreground/40 text-[11px] tracking-wider uppercase mt-1">Atmosphere</p>
              </div>
            </div>
            <a href="#concierge" className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase font-bold text-primary group">
              <span className="border-b border-primary/20 pb-1 group-hover:border-primary transition-colors">Book Moonstone Hall</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="relative min-h-[60vh] lg:min-h-[80vh] order-1 lg:order-2">
          <Image
            src="/images/hall2.jpg"
            alt="Moonstone Hall"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VenueShowcase;
