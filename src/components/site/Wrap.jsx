import React from 'react';
import { cn } from '@/lib/utils';

export default function Wrap({ children, className }) {
  return (
    <div className={cn('mx-auto w-full max-w-[1180px] px-[14px] min-[620px]:px-[22px]', className)}>
      {children}
    </div>
  );
}