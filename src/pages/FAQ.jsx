import React from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '@/components/site/SiteLayout';
import PageHero from '@/components/site/PageHero';
import Wrap from '@/components/site/Wrap';
import Reveal from '@/components/site/Reveal';
import FaqAccordion from '@/components/site/FaqAccordion';
import Pill from '@/components/site/Pill';
import { FAQ_GROUPS } from '@/lib/faq';
import { WHATSAPP_URL } from '@/lib/siteAssets';

export default function FAQ() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Perguntas frequentes"
        title={<>Dúvidas dos pais, respondidas.</>}
        intro="Reunimos as perguntas que mais chegam até a gente sobre o funcionamento da escola. Se a sua dúvida não estiver aqui, é só falar com a nossa equipe."
      />

      <section className="pb-[78px] min-[620px]:pb-[110px]">
        <Wrap className="max-w-[880px]">
          {FAQ_GROUPS.map((group) => (
            <Reveal key={group.title} className="mb-[50px] min-[620px]:mb-[64px]">
              <h2 className="m-0 font-display text-[27px] leading-none text-pluft-red min-[620px]:text-[34px]">
                {group.title}
              </h2>
              <div className="mt-4">
                <FaqAccordion items={group.items} />
              </div>
            </Reveal>
          ))}

          <Reveal className="rounded-[24px] bg-pluft-yellow px-7 py-10 text-center min-[620px]:px-14 min-[620px]:py-12">
            <h2 className="mx-auto mt-0 max-w-[560px] font-display text-[28px] leading-[1.05] text-pluft-ink min-[620px]:text-[37px]">
              Ficou com alguma dúvida?
            </h2>
            <p className="mx-auto mt-4 max-w-[500px] text-[15px] leading-[1.7] text-[rgba(39,41,67,0.75)] min-[620px]:text-[17px]">
              Fale com a nossa equipe no WhatsApp ou envie um pedido de vaga — respondemos com carinho.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-5 min-[620px]:flex-row min-[620px]:gap-7">
              <Pill href={WHATSAPP_URL} target="_blank" rel="noopener">
                Falar no WhatsApp
              </Pill>
              <Link
                to="/matriculas"
                className="group inline-flex items-center gap-2 font-black text-pluft-blue no-underline"
              >
                Solicitar uma vaga
                <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </Wrap>
      </section>
    </SiteLayout>
  );
}