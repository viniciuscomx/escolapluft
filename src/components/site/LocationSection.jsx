import React from 'react';
import Wrap from './Wrap';
import Reveal from './Reveal';
import Kicker from './Kicker';
import ContactCard from './ContactCard';
import { MAPS_URL, WHATSAPP_URL } from '@/lib/siteAssets';

export default function LocationSection() {
  return (
    <section id="onde-estamos" className="bg-pluft-paper py-[78px] min-[620px]:py-[110px]">
      <Wrap className="grid items-start gap-[50px] min-[900px]:grid-cols-[0.85fr_1.15fr] min-[900px]:gap-[clamp(50px,8vw,110px)]">
        <Reveal>
          <Kicker>Encontre a Pluft</Kicker>
          <h2 className="m-0 font-display text-[46px] leading-[0.94] tracking-[-0.04em] text-pluft-blue min-[620px]:text-[clamp(50px,6vw,82px)]">
            Estamos pertinho de você.
          </h2>
          <p className="mt-[26px] max-w-[500px] text-[16px] leading-[1.75] text-[rgba(39,41,67,0.68)] min-[620px]:text-[18px]">
            Venha conversar com a gente e conhecer a escola pessoalmente.
          </p>
        </Reveal>

        <Reveal delay className="grid gap-4">
          <ContactCard
            href={WHATSAPP_URL}
            label="Fale pelo WhatsApp"
            value="(16) 99224-9897"
          />
          <ContactCard
            href={MAPS_URL}
            label="Venha nos visitar"
            value="R. Silveira Martins, 458"
            note="Campos Elíseos · Ribeirão Preto, SP"
          />
        </Reveal>
      </Wrap>
    </section>
  );
}