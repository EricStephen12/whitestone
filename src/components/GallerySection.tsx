'use client';

import React from 'react';
import Image from 'next/image';

const GallerySection = () => {
  return (
    <section className="bg-background py-20 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header — left aligned */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-primary/30" />
              <span className="text-primary/50 text-[11px] tracking-[0.3em] uppercase font-semibold">Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-primary leading-[1.15]">
              See it for{' '}
              <span className="italic font-normal text-primary/70">yourself</span>
            </h2>
          </div>
          <p className="text-foreground/50 text-sm max-w-sm leading-relaxed">
            From intimate dinners to 1,500-guest weddings — a look at what Whitestone actually looks like on event day.
          </p>
        </div>

        {/* Asymmetric masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {/* Large — spans 2 cols, 2 rows */}
          <div className="col-span-2 row-span-2 relative aspect-square overflow-hidden group">
            <Image src="/images/wedding.jpg" alt="Wedding at Whitestone" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase font-bold">Weddings</span>
          </div>

          {/* Top right */}
          <div className="relative aspect-[4/3] overflow-hidden group">
            <Image src="/images/event1.jpg" alt="Corporate event" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-[10px] tracking-widest uppercase font-bold">Events</span>
          </div>

          {/* Top right 2 */}
          <div className="relative aspect-[4/3] overflow-hidden group">
            <Image src="/images/table.jpg" alt="Table setting" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-[10px] tracking-widest uppercase font-bold">Details</span>
          </div>

          {/* Bottom right */}
          <div className="relative aspect-[4/3] overflow-hidden group">
            <Image src="/images/restaurant.jpg" alt="Dining area" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-[10px] tracking-widest uppercase font-bold">Dining</span>
          </div>

          {/* Bottom right 2 */}
          <div className="relative aspect-[4/3] overflow-hidden group">
            <Image src="/images/wedding2.jpg" alt="Reception" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-[10px] tracking-widest uppercase font-bold">Receptions</span>
          </div>
        </div>

        {/* Full-width accent image */}
        <div className="relative mt-4 aspect-[21/9] overflow-hidden group">
          <Image src="/images/hall4.jpg" alt="Panoramic hall view" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <span className="text-white text-[10px] tracking-widest uppercase font-bold block mb-1">Full Venue View</span>
            <span className="text-white/60 text-xs">The hall, set and ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
