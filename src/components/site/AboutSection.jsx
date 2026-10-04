import React from 'react';
import Wrap from './Wrap';
import Reveal from './Reveal';
import Kicker from './Kicker';

const VALUES = [
  {
    number: '01 /',
    title: 'Acolher',
    text: 'Um começo mais leve nasce quando a criança se sente vista e bem-vinda.',
  },
  {
    number: '02 /',
    title: 'Brincar',
    text: 'Brincando, a curiosidade ganha forma e cada dia traz uma possibilidade.',
  },
  {
    number: '03 /',
    title: 'Descobrir',
    text: 'Pequenas conquistas ajudam a construir novas perguntas e caminhos.',
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-pluft-blue py-[78px] text-white min-[620px]:py-[110px]"
    >
      <span className="pointer-events-none absolute -bottom-[110px] -right-[95px] h-[290px] w-[290px] rounded-full border-[50px] border-white/[0.028]" />

      <Wrap className="relative grid gap-[55px] min-[900px]:grid-cols-[0.9fr_1.1fr] min-[900px]:gap-[clamp(55px,8vw,110px)]">
        <Reveal>
          <Kicker light className="flex items-center gap-2">
            <span>✳</span> A Pluft
          </Kicker>
          <h2 className="m-0 max-w-[600px] font-display text-[46px] leading-[0.95] tracking-[-0.04em] min-[620px]:text-[clamp(51px,6vw,82px)]">
            A infância é cheia de <em className="not-italic text-pluft-yellow">“e se?”</em>
          </h2>
          <p className="mt-7 max-w-[570px] text-[16px] leading-[1.75] text-white/70 min-[620px]:text-[18px]">
            E cada pergunta pode abrir um mundo novo. Aqui, acreditamos no valor das descobertas,
            dos encontros e dos momentos que fazem a infância ser única.
          </p>
        </Reveal>

        <div className="border-t border-white/[0.16]">
          {VALUES.map((value) => (
            <Reveal
              key={value.number}
              className="grid grid-cols-[52px_1fr] gap-x-3 border-b border-white/[0.16] py-[30px] min-[900px]:grid-cols-[70px_150px_1fr] min-[900px]:gap-x-5"
            >
              <span className="pt-1 text-[12px] font-black tracking-[0.08em] text-pluft-yellow">
                {value.number}
              </span>
              <h3 className="m-0 font-display text-[28px] leading-none min-[620px]:text-[31px]">
                {value.title}
              </h3>
              <p className="col-start-2 m-0 leading-[1.65] text-white/70 min-[900px]:col-start-3">
                {value.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}