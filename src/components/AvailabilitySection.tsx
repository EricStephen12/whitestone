'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const halls = [
  {
    id: 'jadeite',
    name: 'Jadeite Hall',
    image: '/images/hall.jpg',
    capacity: '1,500 guests',
    price: 'From ₦2,500,000',
    features: ['Full A/C', 'Stage & Sound', 'Bridal Suite', 'Valet Parking'],
  },
  {
    id: 'moonstone',
    name: 'Moonstone Hall',
    image: '/images/hall2.jpg',
    capacity: '800 guests',
    price: 'From ₦1,500,000',
    features: ['Full A/C', 'Private Bar', 'Lounge Area', 'On-site Catering'],
  },
];

// Sample availability data — in production this would come from an API/database
const sampleAvailability: Record<string, Record<string, 'available' | 'booked' | 'limited'>> = {
  jadeite: {
    '2025-05-03': 'booked',
    '2025-05-04': 'limited',
    '2025-05-10': 'available',
    '2025-05-11': 'booked',
    '2025-05-17': 'available',
    '2025-05-18': 'available',
    '2025-05-24': 'limited',
    '2025-05-25': 'booked',
    '2025-05-31': 'available',
  },
  moonstone: {
    '2025-05-03': 'available',
    '2025-05-04': 'available',
    '2025-05-10': 'booked',
    '2025-05-11': 'available',
    '2025-05-17': 'booked',
    '2025-05-18': 'limited',
    '2025-05-24': 'available',
    '2025-05-25': 'available',
    '2025-05-31': 'booked',
  },
};

const getUpcomingWeekends = () => {
  const weekends: { date: string; label: string; day: string }[] = [];
  const now = new Date();
  const current = new Date(now);

  while (weekends.length < 8) {
    current.setDate(current.getDate() + 1);
    const dayOfWeek = current.getDay();
    if (dayOfWeek === 6 || dayOfWeek === 0) {
      const dateStr = current.toISOString().split('T')[0];
      const label = current.toLocaleDateString('en-NG', { month: 'short', day: 'numeric' });
      const day = dayOfWeek === 6 ? 'Sat' : 'Sun';
      weekends.push({ date: dateStr, label, day });
    }
  }
  return weekends;
};

const statusConfig = {
  available: { label: 'Available', color: 'bg-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  limited: { label: 'Few Slots', color: 'bg-amber-500', text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
  booked: { label: 'Booked', color: 'bg-red-400', text: 'text-red-500', bg: 'bg-red-50', border: 'border-red-200' },
};

const AvailabilitySection = () => {
  const [selectedHall, setSelectedHall] = useState<string>('jadeite');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const weekends = getUpcomingWeekends();

  const getStatus = (hallId: string, date: string): 'available' | 'booked' | 'limited' => {
    return sampleAvailability[hallId]?.[date] || 'available';
  };

  const selectedHallData = halls.find(h => h.id === selectedHall)!;
  const selectedStatus = selectedDate ? getStatus(selectedHall, selectedDate) : null;

  return (
    <section id="availability" className="bg-white py-20 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-primary/30" />
              <span className="text-primary/50 text-[11px] tracking-[0.3em] uppercase font-semibold">Availability</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-primary leading-[1.15]">
              Check{' '}
              <span className="italic font-normal text-primary/70">open dates</span>
            </h2>
          </div>
          <p className="text-foreground/50 text-sm max-w-sm leading-relaxed">
            Select a hall and date to see real-time availability. Weekend dates fill up fast — book early to secure your preferred date.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Hall selector + image */}
          <div className="lg:col-span-1 space-y-6">
            <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-primary/40">Select a Hall</p>
            <div className="space-y-3">
              {halls.map((hall) => (
                <button
                  key={hall.id}
                  onClick={() => { setSelectedHall(hall.id); setSelectedDate(null); }}
                  className={`w-full text-left p-4 border transition-all ${
                    selectedHall === hall.id
                      ? 'border-primary bg-primary text-white'
                      : 'border-primary/10 hover:border-primary/30'
                  }`}
                >
                  <span className="text-sm font-serif font-semibold block">{hall.name}</span>
                  <span className={`text-xs ${selectedHall === hall.id ? 'text-white/60' : 'text-foreground/40'}`}>
                    {hall.capacity} &middot; {hall.price}
                  </span>
                </button>
              ))}
            </div>

            {/* Hall preview image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={selectedHallData.image}
                alt={selectedHallData.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-xs font-bold tracking-widest uppercase">{selectedHallData.name}</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2">
              {selectedHallData.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-xs text-foreground/50">
                  <div className="w-1 h-1 bg-primary/30 rounded-full" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Date grid + status */}
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-primary/40 mb-6">Upcoming Weekends</p>

            {/* Date grid */}
            <div className="grid grid-cols-4 gap-3 mb-10">
              {weekends.map((weekend) => {
                const status = getStatus(selectedHall, weekend.date);
                const cfg = statusConfig[status];
                const isSelected = selectedDate === weekend.date;
                return (
                  <button
                    key={weekend.date}
                    onClick={() => setSelectedDate(weekend.date)}
                    className={`relative p-4 border text-center transition-all group ${
                      isSelected
                        ? 'border-primary bg-primary/5 ring-1 ring-primary'
                        : 'border-primary/10 hover:border-primary/20'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-wider text-foreground/40 block">{weekend.day}</span>
                    <span className="text-lg font-serif text-primary block mt-1">{weekend.label}</span>
                    <div className="flex items-center justify-center gap-1.5 mt-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${cfg.color}`} />
                      <span className={`text-[10px] font-semibold ${cfg.text}`}>{cfg.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex gap-6 mb-10 pb-10 border-b border-primary/10">
              {Object.entries(statusConfig).map(([key, cfg]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${cfg.color}`} />
                  <span className="text-xs text-foreground/50">{cfg.label}</span>
                </div>
              ))}
            </div>

            {/* Selected date details */}
            {selectedDate && selectedStatus ? (
              <div className={`p-6 md:p-8 border ${statusConfig[selectedStatus].border} ${statusConfig[selectedStatus].bg}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <span className="text-xs text-foreground/40 block mb-1">
                      {selectedHallData.name} &middot; {weekends.find(w => w.date === selectedDate)?.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${statusConfig[selectedStatus].color}`} />
                      <span className={`text-sm font-bold ${statusConfig[selectedStatus].text}`}>
                        {selectedStatus === 'available' && 'This date is available — book now before it fills up'}
                        {selectedStatus === 'limited' && 'Limited availability — only a few time slots remain'}
                        {selectedStatus === 'booked' && 'This date is fully booked — try another date or hall'}
                      </span>
                    </div>
                  </div>
                  {selectedStatus !== 'booked' ? (
                    <a
                      href="#concierge"
                      className="bg-primary text-white px-8 py-4 text-xs tracking-[0.15em] uppercase font-bold hover:bg-primary/90 transition-colors shrink-0 text-center"
                    >
                      {selectedStatus === 'available' ? 'Reserve This Date' : 'Inquire Now'}
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedDate(null)}
                      className="border border-primary/20 text-primary px-8 py-4 text-xs tracking-[0.15em] uppercase font-bold hover:bg-primary/5 transition-colors shrink-0"
                    >
                      Try Another Date
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-8 border border-dashed border-primary/15 text-center">
                <p className="text-foreground/40 text-sm">Select a date above to check availability</p>
              </div>
            )}

            {/* Quick contact */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-primary/5 p-6">
              <div>
                <span className="text-sm font-semibold text-primary block">Need a custom date?</span>
                <span className="text-xs text-foreground/50">Call us directly for weekday events or special arrangements</span>
              </div>
              <a href="tel:08033063687" className="text-sm font-bold text-primary hover:text-accent-gold transition-colors whitespace-nowrap">
                0803 306 3687 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilitySection;
