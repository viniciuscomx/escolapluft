import React from 'react';
import SiteLayout from '@/components/site/SiteLayout';
import Hero from '@/components/site/Hero';
import AboutSection from '@/components/site/AboutSection';
import StagesSection from '@/components/site/StagesSection';
import VisitSection from '@/components/site/VisitSection';
import LocationSection from '@/components/site/LocationSection';

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <AboutSection />
      <StagesSection />
      <VisitSection />
      <LocationSection />
    </SiteLayout>
  );
}