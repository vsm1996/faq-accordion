import Image from "next/image";

import StarIcon from "@/public/images/icon-star.svg";
import AccordionItem from "../accordion-item";

const faqData = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const Accordion = () => {
  return (
    <div className="md:max-w-[600px] z-10 bg-white p-300 rounded-lg">
      <div className="flex items-center gap-300 mb-300">
        <Image src={StarIcon} alt="star icon" width={24} height={24} />
        <h1 className="title text-purple-950">FAQs</h1>
      </div>

      <div className="flex flex-col gap-300">
        {/* Accordion Item */}
        {faqData &&
          faqData.map(({ question, answer }, index) => {
            return (
              <AccordionItem
                key={index}
                question={question}
                answer={answer}
                isLast={index === faqData.length - 1}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Accordion;
