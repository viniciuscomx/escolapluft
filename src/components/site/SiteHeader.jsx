import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Wrap from './Wrap';
import Wordmark from './Wordmark';
import Pill from './Pill';
import { WHATSAPP_VISIT_URL } from '@/lib/siteAssets';

const NAV_LINKS = [
  { label: 'A Pluft', hash: '#sobre' },
  { label: 'Etapas', hash: '#etapas' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Matrículas', to: '/matriculas' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Onde estamos', hash: '#onde-estamos' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const close = () => setOpen(false);

  return (
    <header
      id="inicio"
      className="sticky top-0 z-30 border-b border-[rgba(81,85,121,0.07)] bg-[rgba(255,253,245,0.94)] backdrop-blur-[16px]"
    >
      <Wrap className="flex h-[76px] items-center justify-between gap-9 min-[620px]:h-[88px]">
        <Wordmark />

        <button
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((current) => !current)}
          className="-mr-2.5 bg-transparent p-2.5 min-[900px]:hidden"
        >
          <span className="my-[5px] block h-0.5 w-6 bg-pluft-blue" />
          <span className="my-[5px] block h-0.5 w-6 bg-pluft-blue" />
          <span className="my-[5px] block h-0.5 w-6 bg-pluft-blue" />
          <span className="sr-only">Abrir menu</span>
        </button>

        <nav
          id="nav"
          aria-label="Navegação principal"
          className={cn(
            'min-[900px]:static min-[900px]:flex min-[900px]:flex-row min-[900px]:items-center min-[900px]:gap-[18px] min-[1100px]:gap-[30px] min-[900px]:border-0 min-[900px]:bg-transparent min-[900px]:p-0 min-[900px]:shadow-none',
            open
              ? 'absolute left-0 right-0 top-[76px] flex flex-col items-stretch gap-[30px] border-b border-[rgba(81,85,121,0.14)] bg-pluft-paper p-[22px] shadow-[0_18px_40px_rgba(39,41,67,0.08)] min-[620px]:top-[88px]'
              : 'hidden',
          )}
        >
          {NAV_LINKS.map((link) => {
            const className =
              'relative px-0.5 py-2 text-[14px] font-extrabold no-underline after:absolute after:-bottom-[7px] after:left-0 after:right-full after:h-0.5 after:bg-pluft-red after:transition-all after:duration-200 hover:after:right-0 min-[900px]:py-0';

            return link.to ? (
              <Link key={link.to} to={link.to} onClick={close} className={className}>
                {link.label}
              </Link>
            ) : (
              <a
                key={link.hash}
                href={isHome ? link.hash : `/${link.hash}`}
                onClick={close}
                className={className}
              >
                {link.label}
              </a>
            );
          })}
          <Pill
            href={WHATSAPP_VISIT_URL}
            size="small"
            target="_blank"
            rel="noopener"
            onClick={close}
          >
            Agende uma visita
          </Pill>
        </nav>
      </Wrap>
    </header>
  );
}