import React from 'react';
import Wrap from './Wrap';

export default function TopStrip() {
  return (
    <div className="bg-pluft-blue text-[8.5px] font-black uppercase tracking-[0.08em] text-white min-[620px]:text-[11px] min-[620px]:tracking-[0.11em]">
      <Wrap className="flex h-[31px] items-center justify-between gap-6 min-[620px]:h-[34px]">
        <span className="max-w-[220px] min-[620px]:max-w-none">
          Um lugar para os primeiros grandes momentos.
        </span>
        <span className="opacity-[0.66]">Ribeirão Preto · SP</span>
      </Wrap>
    </div>
  );
}