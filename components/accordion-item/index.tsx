"use client";

import Image from "next/image";

import { useState } from "react";

import IconPlus from "@/public/images/icon-plus.svg";
import IconMinus from "@/public/images/icon-minus.svg";

interface AccordionItemProps {
  question: string;
  answer: string;
  isLast?: boolean;
}

const AccordionItem = ({
  question,
  answer,
  isLast = false,
}: AccordionItemProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div
      className={`w-full h-full text-balance flex flex-col gap-300 ${
        !isLast && `border-b-1 border-purple-100`
      } pb-300`}
    >
      <div className="w-full h-full flex items-center justify-between group">
        <h2 className="text-2 text-purple-950 group-hover:text-violet">
          {question}
        </h2>
        <button
          type="button"
          className="cursor-pointer relative w-[30px] h-[30px] flex-shrink-0"
          onClick={() => setOpen(!isOpen)}
        >
          <Image
            alt={
              isOpen ? "close accordion item icon" : "open accordion item icon"
            }
            src={isOpen ? IconMinus : IconPlus}
            fill
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-400 ease-in ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-purple-600">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
