import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VenueShowcase from '@/components/VenueShowcase';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import MapSection from '@/components/MapSection';
import InquiryConcierge from '@/components/InquiryConcierge';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <VenueShowcase />
      <GallerySection />
      <ReviewsSection />
      <MapSection />
      <InquiryConcierge />
      <Footer />
    </main>
  );
}
