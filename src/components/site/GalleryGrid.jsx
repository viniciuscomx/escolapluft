import React from 'react';
import Reveal from './Reveal';
import { Image } from '@/components/ui/image';

export default function GalleryGrid({ title, caption, photos }) {
  return (
    <div className="mb-[52px] min-[620px]:mb-[70px]">
      <Reveal>
        <h2 className="m-0 font-display text-[30px] leading-none text-pluft-blue min-[620px]:text-[38px]">
          {title}
        </h2>
        {caption && (
          <p className="mt-3 max-w-[540px] text-[15px] leading-[1.7] text-[rgba(39,41,67,0.68)] min-[620px]:text-[16px]">
            {caption}
          </p>
        )}
      </Reveal>

      <div className="mt-6 grid gap-4 min-[620px]:mt-8 min-[620px]:grid-cols-2 min-[900px]:grid-cols-3 min-[900px]:gap-5">
        {photos.map((photo) => (
          <Reveal key={photo.src}>
            <div className="aspect-[4/3] overflow-hidden rounded-[18px] bg-[#d9d7cd] shadow-[0_18px_45px_rgba(39,41,67,0.1)] min-[620px]:rounded-[22px]">
              <Image src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}