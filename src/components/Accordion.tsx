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
    title: "Does participating cost anything?",
    content: "It does not! We’ll have delicious meals, snacks, and beverages onsite at the event, as well as swag and fun mini-events. We also have travel stipends that cover flights and public transit for leaders who don’t live in San Francisco. You can apply for a stipend while signing up!",
  },
  {
    title: "Am I eligible to sign up for The Summit?",
    content:
      "If you currently lead a Hack Club in your school, yes! If you’ve recently started a Hack Club at your school, you are also encouraged to apply!",
  },
  {
    title: "What do I need to bring to The Summit?",
    content:
      "Your laptop, chargers, toiletries, sleeping bags, a refillable water bottle, and the spirit of an inventor!",
  },
  {
    title: "What exactly is The Summit? What projects am I allowed to build?",
    content:
      "The Summit is a hackathon for club leaders. Build projects that will make your club better. Your team might build a club VR headset, an AI Orpheus plushie, or a spontaneous club gathering app. Be creative, make friends, and return to your club with something awesome that brings them a bunch of joy.",
  },
  {
    title: "Where in SF is the event?",
    content: "Our venue is right in the middle of San Francisco! We’ll release the exact address leading up to the event, but it is a 5 minute walk from Mission Dolores Park!"
  },
  {
    title: "What are the sleeping arrangements?",
    content: "On the night of the event we will have a designated gender-seperated and supervised sleeping area in the venue with lowlights and minimal sound for you to rest. Make sure to bring a sleeping bag!"
  },
  {
    title: "My parents are worried. What should I do?",
    content: "Please refer to the parents’ guide for additional information! If they have any additional questions, encourage them to reach out to us! We’re happy to talk to them. The Summit will be supervised by a background checked staff and 24/7 security. Shoot us an email at summit@hackclub.com, and we’ll be happy to answer any questions!"
  },
  {
    title: "I have more questions. How can I reach out?",
    content: "Reach out on #the-summit on the Hack Club Slack, or email the team at summit@hackclub.com. We're always ready to answer all your questions!"
  }
];

export function AccordionComponent() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      {items.map((item, index) => (
        <Accordion
          placeholder="Accordion"
          key={index}
          className="bg-primary text-secondary border-b-[3px] border-secondary px-2"
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open} />}
          animate={CUSTOM_ANIMATION}
        >
          <AccordionHeader placeholder="header" className="sm:text-2xl py-2 my-1 border-none" onClick={() => handleOpen(index + 1)}>
            {item.title}
          </AccordionHeader>
          <AccordionBody className="p-0 pb-3 text-xl">{item.content}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
