import React from 'react';
import Wrap from './Wrap';
import Reveal from './Reveal';
import Kicker from './Kicker';
import Pill from './Pill';
import { WHATSAPP_VISIT_URL } from '@/lib/siteAssets';

export default function VisitSection() {
  return (
    <section className="relative overflow-hidden bg-pluft-red py-[78px] text-center text-white min-[620px]:py-[98px]">
      <span className="pointer-events-none absolute -left-[105px] -top-[120px] h-[260px] w-[260px] rounded-full border-[46px] border-white/[0.045]" />
      <span className="pointer-events-none absolute -bottom-[120px] -right-[110px] h-[260px] w-[260px] rounded-full border-[46px] border-white/[0.045]" />

      <Wrap className="relative z-[1] max-w-[900px]">
        <Reveal>
          <span className="mb-3 block text-[30px] text-pluft-yellow">✳</span>
          <Kicker light>Vem conhecer a Pluft</Kicker>
          <h2 className="mx-auto mb-8 mt-0 max-w-[850px] font-display text-[46px] leading-[0.96] tracking-[-0.04em] min-[620px]:text-[clamp(48px,6vw,78px)]">
            A melhor forma de sentir esse lugar é estar aqui.
          </h2>
          <Pill href={WHATSAPP_VISIT_URL} variant="yellow" target="_blank" rel="noopener">
            Vamos agendar?
          </Pill>
        </Reveal>
      </Wrap>
    </section>
  );
}