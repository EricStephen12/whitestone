'use client';

import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Adebayo Johnson",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely stunning venue! The attention to detail and service was exceptional. Our wedding was perfect thanks to Whitestone.",
  },
  {
    id: 2,
    name: "Chioma Okonkwo",
    rating: 5,
    date: "1 month ago",
    text: "The most beautiful event space in Lagos. The staff went above and beyond to make our corporate gala memorable.",
  },
  {
    id: 3,
    name: "Tunde Adekunle",
    rating: 5,
    date: "1 month ago",
    text: "Professional service, elegant decor, and perfect ambiance. Whitestone exceeded all our expectations for our company launch.",
  },
  {
    id: 4,
    name: "Funke Adebayo",
    rating: 5,
    date: "2 months ago",
    text: "From planning to execution, everything was flawless. The venue is breathtaking and the service is unmatched in Lagos.",
  },
  {
    id: 5,
    name: "Michael Okafor",
    rating: 4,
    date: "3 months ago",
    text: "Whitestone transformed our anniversary celebration into something magical. Highly recommend for any big occasion.",
  },
  {
    id: 6,
    name: "Bisi Adeyemi",
    rating: 5,
    date: "3 months ago",
    text: "The perfect venue for any special occasion. Elegant, sophisticated, and absolutely beautiful. Our guests couldn't stop talking about it.",
  },
];

const Star = ({ filled }: { filled: boolean }) => (
  <svg className={`w-3.5 h-3.5 ${filled ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewsSection = () => {
  return (
    <section className="bg-primary py-20 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent/30" />
              <span className="text-accent/50 text-[11px] tracking-[0.3em] uppercase font-semibold">Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white leading-[1.15]">
              What our clients{' '}
              <span className="italic font-normal text-accent">say</span>
            </h2>
          </div>

          {/* Google rating summary */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end mb-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} filled={true} />)}
              </div>
              <span className="text-white/40 text-xs">4.9 on Google &middot; 127 reviews</span>
            </div>
            <a
              href="https://maps.app.goo.gl/c7wBkKmFKwTzfaba8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="View on Google Maps"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </a>
          </div>
        </div>

        {/* Reviews — 3 column, clean cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="border border-white/10 p-6 md:p-8 hover:border-accent/30 transition-colors">
              <div className="flex items-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} filled={i <= review.rating} />)}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-8 h-8 bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <span className="text-white text-xs font-semibold block">{review.name}</span>
                  <span className="text-white/30 text-[10px]">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-14 border-t border-white/10">
          <p className="text-white/40 text-sm">See all reviews on Google Maps</p>
          <a
            href="https://maps.app.goo.gl/c7wBkKmFKwTzfaba8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-primary px-8 py-4 text-xs tracking-[0.15em] uppercase font-bold hover:bg-white transition-colors"
          >
            Read All Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
