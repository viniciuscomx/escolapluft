import React from 'react';
import Wrap from './Wrap';
import Reveal from './Reveal';
import Kicker from './Kicker';
import StageCard from './StageCard';
import { MEDIA } from '@/lib/siteAssets';

export default function StagesSection() {
  return (
    <section
      id="etapas"
      className="relative overflow-hidden py-[78px] min-[620px]:pb-[120px] min-[620px]:pt-[110px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.018]"
        style={{ backgroundImage: `url(${MEDIA.footprints})`, backgroundSize: '310px auto' }}
      />

      <Wrap className="relative">
        <Reveal className="mb-[70px] grid items-end gap-6 min-[900px]:grid-cols-[1fr_0.7fr] min-[900px]:gap-[70px]">
          <div>
            <Kicker>Etapas da infância</Kicker>
            <h2 className="m-0 font-display text-[46px] leading-[0.94] tracking-[-0.04em] text-pluft-blue min-[620px]:text-[clamp(50px,6vw,82px)]">
              Um começo para
              <br />
              <em className="not-italic text-pluft-red">cada fase.</em>
            </h2>
          </div>
          <p className="m-0 max-w-[500px] text-[16px] leading-[1.75] text-[rgba(39,41,67,0.68)] min-[620px]:text-[18px] min-[900px]:max-w-[500px]">
            Dos primeiros vínculos às descobertas que ganham cada vez mais espaço: conheça as etapas
            atendidas pela Pluft.
          </p>
        </Reveal>

        <Reveal>
          <StageCard
            number="01"
            spark="✳"
            title="Berçário"
            text="Os primeiros momentos merecem atenção, cuidado e tempo para acontecer."
            video={MEDIA.bercarioVideo}
            poster={MEDIA.bercarioPoster}
          />
        </Reveal>

        <Reveal>
          <StageCard
            number="02"
            spark="✦"
            title="Educação Infantil"
            text="Uma fase para explorar, conviver, criar e descobrir novas possibilidades."
            video={MEDIA.infantilVideo}
            poster={MEDIA.infantilPoster}
            reversed
          />
        </Reveal>
      </Wrap>
    </section>
  );
}