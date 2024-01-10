import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/constants/faq";

export default function Faq() {
  return (
    <section className="flex flex-col relative items-center justify-center min-h-screen w-full ">
      <div className="flex flex-col py-10 px-3">
        <h1 className="text-[40px] lg:text-[50px] font-semibold text-center bg-clip-text bg-gradient-to-r text-transparent from-indigo-300 to-violet-700 leading-[48px]">
          FAQ
        </h1>
        <h3 className=" text-xl text-gray-400 my-4 max-w-[600px] text-center">
          Pertanyaan yang sering ditanyakan disini
        </h3>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-[92%] md:w-[90%] mx-auto relative z-[20] text-xl text-gray-300"
      >
        {faq.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-left text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg text-justify">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
