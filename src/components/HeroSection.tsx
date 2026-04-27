'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-primary overflow-hidden">
      {/* Main grid: left text, right images */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left: Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-28 py-32 lg:py-20 order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-[11px] tracking-[0.3em] uppercase font-semibold">
                Lagos' Premier Venue
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-8">
              Where your{' '}
              <span className="italic font-normal text-accent">
                best days
              </span>{' '}
              happen
            </h1>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              An extraordinary event space in the heart of Ikeja, crafted for weddings, galas, and celebrations that deserve to be unforgettable.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a href="#concierge" className="bg-accent text-primary px-8 py-4 text-xs tracking-[0.15em] uppercase font-bold hover:bg-white transition-colors">
                Book a Tour
              </a>
              <a href="#venues" className="border border-white/20 text-white px-8 py-4 text-xs tracking-[0.15em] uppercase font-bold hover:border-accent hover:text-accent transition-colors">
                Explore Venues
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex gap-10 pt-10 border-t border-white/10">
              <div>
                <span className="text-3xl text-white font-serif">1,500+</span>
                <p className="text-white/40 text-[11px] tracking-wider uppercase mt-1">Guest Capacity</p>
              </div>
              <div>
                <span className="text-3xl text-white font-serif">2</span>
                <p className="text-white/40 text-[11px] tracking-wider uppercase mt-1">Distinct Halls</p>
              </div>
              <div>
                <span className="text-3xl text-white font-serif">4.9</span>
                <p className="text-white/40 text-[11px] tracking-wider uppercase mt-1">Google Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image composition */}
        <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-screen">
          {/* Main hero image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpg"
              alt="Whitestone Event Place"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent lg:hidden" />
          </div>

          {/* Floating accent image */}
          <div className="hidden lg:block absolute bottom-12 -left-16 w-56 xl:w-64 aspect-[3/4] z-20 shadow-2xl">
            <Image
              src="/images/gate.jpg"
              alt="Whitestone Entrance"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-accent/30" />
          </div>

          {/* Small detail image */}
          <div className="hidden lg:block absolute top-28 right-8 w-36 xl:w-44 aspect-square z-20 shadow-xl">
            <Image
              src="/images/hall3.jpg"
              alt="Whitestone Interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-white/20" />
          </div>

          {/* Decorative frame */}
          <div className="hidden lg:block absolute top-20 right-0 w-48 h-48 border border-accent/20 z-10 translate-x-6 -translate-y-6" />
        </div>
      </div>

      {/* Bottom scroll hint - left aligned */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-20 z-20 flex items-center gap-4">
        <div className="w-px h-12 bg-white/30" />
        <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
