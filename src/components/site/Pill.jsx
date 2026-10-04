import React from 'react';
import { cn } from '@/lib/utils';

const VARIANTS = {
  red: 'bg-pluft-red text-white shadow-[0_10px_24px_rgba(232,71,53,0.16)]',
  yellow: 'bg-pluft-yellow text-pluft-ink shadow-[0_10px_26px_rgba(232,210,44,0.15)]',
  white: 'bg-white text-pluft-blue-deep shadow-[0_14px_30px_rgba(0,0,0,0.18)]',
};

const SIZES = {
  default: 'min-h-[48px] min-[620px]:min-h-[52px] px-5 min-[620px]:px-[25px]',
  small: 'min-h-[44px] px-5 text-[14px]',
};

export default function Pill({ href, children, variant = 'red', size = 'default', className, ...props }) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-black no-underline transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}