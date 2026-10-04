import React from 'react';
import MotionProvider from './MotionProvider';
import TopStrip from './TopStrip';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function SiteLayout({ children }) {
  return (
    <MotionProvider>
      <div className="flex min-h-screen flex-col bg-pluft-paper font-body text-pluft-ink">
        <TopStrip />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </MotionProvider>
  );
}