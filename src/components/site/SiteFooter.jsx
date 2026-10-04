import React from 'react';
import Wrap from './Wrap';
import Wordmark from './Wordmark';

export default function SiteFooter() {
  return (
    <footer className="bg-pluft-blue-deep pb-[38px] pt-[68px] text-white">
      <Wrap className="grid items-end gap-6 min-[900px]:grid-cols-[1fr_1fr_auto] min-[900px]:gap-[50px]">
        <Wordmark variant="footer" />
        <p className="m-0 leading-[1.6] text-white/[0.68]">
          Um mundo de descobertas começa na infância.
        </p>
        <p className="m-0 text-left text-[12px] leading-[1.6] text-white/[0.68] min-[900px]:text-right">
          © 2026 Pluft. Escola de Educação Infantil.
        </p>
      </Wrap>
    </footer>
  );
}