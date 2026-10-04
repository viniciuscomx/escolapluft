import React from 'react';
import { cn } from '@/lib/utils';
import MotionVideo from './MotionVideo';

export default function StageCard({ number, spark, title, text, video, poster, reversed = false }) {
  return (
    <article
      className={cn(
        'relative mt-7 grid overflow-hidden rounded-[30px] border border-[rgba(81,85,121,0.08)] bg-white shadow-[0_22px_65px_rgba(39,41,67,0.07)] min-[900px]:min-h-[430px] min-[900px]:grid-cols-[1.18fr_0.82fr]',
        reversed && 'min-[900px]:grid-cols-[0.82fr_1.18fr]',
      )}
    >
      <div className={cn('overflow-hidden bg-[#ddd]', reversed && 'min-[900px]:order-2')}>
        <MotionVideo
          src={video}
          poster={poster}
          className="aspect-[16/10] h-full w-full object-cover min-[900px]:aspect-auto min-[900px]:min-h-[430px]"
        />
      </div>

      <div
        className={cn(
          'flex flex-col justify-center px-[26px] pb-[34px] pt-[31px] min-[620px]:px-[38px] min-[900px]:px-[54px] min-[900px]:pb-[50px] min-[900px]:pt-[54px]',
          reversed && 'min-[900px]:order-1',
        )}
      >
        <div className="mb-7 text-[12px] font-black tracking-[0.14em] text-pluft-red">
          {number} <span className="ml-2.5 text-[19px] text-pluft-yellow">{spark}</span>
        </div>
        <h3 className="m-0 font-display text-[43px] leading-[0.95] text-pluft-blue min-[620px]:text-[clamp(44px,5vw,67px)]">
          {title}
        </h3>
        <p className="mt-6 max-w-[390px] text-[16px] leading-[1.75] text-[rgba(39,41,67,0.68)] min-[620px]:text-[17px]">
          {text}
        </p>
      </div>
    </article>
  );
}