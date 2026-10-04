import React from 'react';
import SiteLayout from '@/components/site/SiteLayout';
import PageHero from '@/components/site/PageHero';
import Wrap from '@/components/site/Wrap';
import Reveal from '@/components/site/Reveal';
import GalleryGrid from '@/components/site/GalleryGrid';
import Pill from '@/components/site/Pill';
import { GALLERY } from '@/lib/gallery';
import { WHATSAPP_VISIT_URL } from '@/lib/siteAssets';

export default function Galeria() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Galeria"
        title={<>Um pouco dos nossos dias.</>}
        intro="O cotidiano, o espaço físico e as atividades que fazem parte da rotina na Pluft."
      />

      <section className="pb-[78px] min-[620px]:pb-[110px]">
        <Wrap>
          {GALLERY.map((group) => (
            <GalleryGrid
              key={group.title}
              title={group.title}
              caption={group.caption}
              photos={group.photos}
            />
          ))}

          <Reveal className="rounded-[24px] bg-pluft-blue px-7 py-10 text-center text-white min-[620px]:px-14 min-[620px]:py-14">
            <h2 className="mx-auto mt-0 max-w-[620px] font-display text-[30px] leading-[1.02] min-[620px]:text-[40px]">
              A melhor forma de conhecer a Pluft é estar aqui.
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.7] text-white/70 min-[620px]:text-[17px]">
              Agende uma visita e veja de perto como as crianças vivem cada dia na escola.
            </p>
            <div className="mt-8 flex justify-center">
              <Pill href={WHATSAPP_VISIT_URL} variant="yellow" target="_blank" rel="noopener">
                Agendar uma visita
              </Pill>
            </div>
          </Reveal>
        </Wrap>
      </section>
    </SiteLayout>
  );
}