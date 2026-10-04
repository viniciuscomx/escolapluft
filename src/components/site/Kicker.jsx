import React from 'react';
import { cn } from '@/lib/utils';

export default function Kicker({ children, light = false, className }) {
  return (
    <p
      className={cn(
        'mb-4 text-[11px] font-black uppercase tracking-[0.14em]',
        light ? 'text-white/[0.78]' : 'text-pluft-red',
        className,
      )}
    >
      {children}
    </p>
  );
}