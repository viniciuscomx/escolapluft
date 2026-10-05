import React from 'react';
import Wrap from './Wrap';
import Reveal from './Reveal';
import Pill from './Pill';
import MotionVideo from './MotionVideo';
import { MEDIA, WHATSAPP_VISIT_URL } from '@/lib/siteAssets';

export default function Hero() {
  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-pluft-blue-deep min-[620px]:min-h-[620px] min-[900px]:min-h-[80vh]">
      <MotionVideo
        src={MEDIA.heroVideo}
        poster={MEDIA.heroPoster}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(39,41,67,0.55)_0%,rgba(39,41,67,0.34)_45%,rgba(39,41,67,0.62)_100%)]"
      />

      <Wrap className="relative z-[2] py-[78px] text-center min-[620px]:py-[96px]">
        <Reveal className="flex flex-col items-center">
          <p className="mb-5 text-[11px] font-black uppercase tracking-[0.16em] text-pluft-yellow min-[620px]:text-[13px]">
            — Berçário &amp; Educação Infantil —
          </p>

          <h1 className="m-0 font-display text-[42px] font-bold leading-[0.92] tracking-[-0.04em] text-white min-[620px]:text-[clamp(50px,5.8vw,84px)]">
            Aqui se aprende
            <br />
            <em className="not-italic text-pluft-yellow">brincando.</em>
          </h1>

          <p className="mt-7 max-w-[600px] text-[16px] leading-[1.72] text-white/85 min-[620px]:text-[19px]">
            Na Pluft, a infância tem espaço para brincar, imaginar e crescer. Venha conhecer de perto
            um lugar feito para os primeiros passos da vida.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-[22px]">
            <Pill
              href={WHATSAPP_VISIT_URL}
              variant="white"
              target="_blank"
              rel="noopener"
              className="gap-2"
            >
              Agendar uma visita
              <span aria-hidden="true">→</span>
            </Pill>

            <a
              href="#sobre"
              className="group inline-flex items-center gap-2 font-black text-white underline decoration-white/60 underline-offset-4 transition-colors duration-200 hover:decoration-white motion-reduce:transition-none"
            >
              Conheça a Pluft
              <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}