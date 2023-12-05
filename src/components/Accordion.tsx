import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1, opacity: 1 },
  unmount: { scale: 0.9, opacity: 0 },
};

const items = [
  {
    title: "Can I get a travel stipend to attend the summit?",
    content:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    title: "Where in SF is the event?",
    content:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    title: "What makes a magical dream?",
    content:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    title: "Can I collaborate on a dream?",
    content:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
];

export function AccordionComponent() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      {items.map((item, index) => (
        <Accordion
          key={index}
          className="bg-primary text-secondary border-b-[3px] border-secondary"
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open} />}
          animate={CUSTOM_ANIMATION}
        >
          <AccordionHeader className="text-2xl py-2 my-1" onClick={() => handleOpen(index + 1)}>
            {item.title}
          </AccordionHeader>
          <AccordionBody className="p-0 pb-3 text-xl">{item.content}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
