import React from 'react';
import { cn } from '@/lib/utils';

export default function Wordmark({ variant = 'default' }) {
  const isFooter = variant === 'footer';

  return (
    <a
      href="#inicio"
      aria-label="Pluft — voltar ao início"
      className="inline-flex flex-col leading-none no-underline"
    >
      <span
        className={cn(
          'mb-[5px] text-[8px] font-black tracking-[0.19em]',
          isFooter ? 'text-white/70' : 'text-pluft-blue',
        )}
      >
        ESCOLA DE EDUCAÇÃO INFANTIL
      </span>
      <span
        className={cn(
          'font-display text-[30px] font-bold leading-[0.8] tracking-[-0.04em] min-[620px]:text-[34px]',
          isFooter ? 'text-white' : 'text-pluft-red',
        )}
      >
        PLUFT{' '}
        <b className="inline-block -translate-y-[3px] align-top font-body text-[15px] font-black text-pluft-yellow">
          ✦
        </b>
      </span>
    </a>
  );
}