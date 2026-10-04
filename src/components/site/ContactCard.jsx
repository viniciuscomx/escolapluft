import React from 'react';

export default function ContactCard({ href, label, value, note }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="relative flex flex-col gap-2 rounded-[22px] border border-[rgba(81,85,121,0.14)] bg-white px-6 py-[24px] pr-[56px] no-underline transition-all duration-200 hover:-translate-y-[3px] hover:border-[rgba(232,71,53,0.28)] hover:shadow-[0_15px_40px_rgba(39,41,67,0.07)] motion-reduce:transition-none min-[620px]:px-[30px] min-[620px]:py-7 min-[620px]:pr-[70px]"
    >
      <span className="text-[10px] font-black tracking-[0.13em] text-pluft-red">{label}</span>
      <strong className="text-[19px] font-bold text-pluft-blue min-[620px]:text-[22px]">
        {value}
      </strong>
      {note ? <small className="text-[15px] text-[rgba(39,41,67,0.65)]">{note}</small> : null}
      <b className="absolute right-[28px] top-1/2 -translate-y-1/2 text-[22px] font-bold text-pluft-red">
        ↗
      </b>
    </a>
  );
}