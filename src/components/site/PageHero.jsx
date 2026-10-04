import React from 'react';
import Wrap from './Wrap';
import Reveal from './Reveal';
import Kicker from './Kicker';
import { MEDIA } from '@/lib/siteAssets';

export default function PageHero({ kicker, title, intro }) {
  return (
    <section className="relative overflow-hidden pb-[46px] pt-[54px] min-[620px]:pb-[64px] min-[620px]:pt-[86px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.018]"
        style={{ backgroundImage: `url(${MEDIA.footprints})`, backgroundSize: '310px auto' }}
      />

      <Wrap className="relative">
        <Reveal>
          <Kicker>{kicker}</Kicker>
          <h1 className="m-0 max-w-[820px] font-display text-[40px] leading-[0.94] tracking-[-0.04em] text-pluft-blue min-[620px]:text-[clamp(48px,6vw,76px)]">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.75] text-[rgba(39,41,67,0.68)] min-[620px]:text-[18px]">
              {intro}
            </p>
          )}
        </Reveal>
      </Wrap>
    </section>
  );
}