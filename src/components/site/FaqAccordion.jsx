import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqAccordion({ items }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem
          key={item.question}
          value={item.question}
          className="border-b border-[rgba(81,85,121,0.14)]"
        >
          <AccordionTrigger className="gap-4 py-5 text-left font-display text-[19px] font-normal leading-[1.25] text-pluft-blue hover:no-underline min-[620px]:text-[23px]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-[680px] pb-5 text-[15px] leading-[1.75] text-[rgba(39,41,67,0.7)] min-[620px]:text-[16px]">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}