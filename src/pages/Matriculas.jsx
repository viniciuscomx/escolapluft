import React from 'react';
import SiteLayout from '@/components/site/SiteLayout';
import PageHero from '@/components/site/PageHero';
import Wrap from '@/components/site/Wrap';
import Reveal from '@/components/site/Reveal';
import Kicker from '@/components/site/Kicker';
import ContactCard from '@/components/site/ContactCard';
import EnrollmentForm from '@/components/site/EnrollmentForm';
import { MAPS_URL, WHATSAPP_URL } from '@/lib/siteAssets';

const STEPS = [
  {
    number: '01 /',
    title: 'Envie o pedido',
    text: 'Preencha o formulário com os dados da criança e do responsável. Leva menos de dois minutos.',
  },
  {
    number: '02 /',
    title: 'Falamos com você',
    text: 'Nossa equipe entra em contato para conversar, entender a rotina da família e checar as vagas.',
  },
  {
    number: '03 /',
    title: 'Visita e matrícula',
    text: 'Agendamos a visita para você conhecer a escola e finalizamos a matrícula juntos.',
  },
];

export default function Matriculas() {
  return (
    <SiteLayout>
      <PageHero
        kicker="Matrículas"
        title={<>Vamos guardar um lugar para a sua criança.</>}
        intro="Conte para a gente quem é a criança e como podemos ajudar. Assim que recebermos o pedido, nossa equipe entra em contato para conversar sobre a vaga."
      />

      <section className="pb-[78px] min-[620px]:pb-[110px]">
        <Wrap className="grid items-start gap-[44px] min-[900px]:grid-cols-[1.12fr_0.88fr] min-[900px]:gap-[clamp(44px,7vw,90px)]">
          <Reveal>
            <EnrollmentForm />
          </Reveal>

          <Reveal delay className="grid gap-[34px]">
            <div className="border-t border-[rgba(81,85,121,0.14)]">
              <Kicker className="pt-6">Como funciona</Kicker>
              {STEPS.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[48px_1fr] gap-x-3 border-b border-[rgba(81,85,121,0.14)] py-5 min-[620px]:grid-cols-[62px_1fr]"
                >
                  <span className="pt-1 text-[12px] font-black tracking-[0.08em] text-pluft-red">
                    {step.number}
                  </span>
                  <div>
                    <h2 className="m-0 font-display text-[22px] leading-none text-pluft-blue min-[620px]:text-[25px]">
                      {step.title}
                    </h2>
                    <p className="mt-2.5 text-[15px] leading-[1.7] text-[rgba(39,41,67,0.68)]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4">
              <ContactCard href={WHATSAPP_URL} label="Fale pelo WhatsApp" value="(16) 99224-9897" />
              <ContactCard
                href={MAPS_URL}
                label="Venha nos visitar"
                value="R. Silveira Martins, 458"
                note="Campos Elíseos · Ribeirão Preto, SP"
              />
            </div>
          </Reveal>
        </Wrap>
      </section>
    </SiteLayout>
  );
}