import { AccordionComponent } from "./Accordion";

const FAQ = () => {
  return (
    <div id="dream" className="bg-primary relative pb-10 pt-5">
      <div className="flex items-center justify-between gap-5 pl-14 mb-6">
        <h2 className="text-center text-secondary text-4xl">Additional Information</h2>
      </div>
      <div className="px-14">
        <AccordionComponent />
        <p className="py-4 text-xl text-secondary">Have any other questions? Reach out to thomas@hackclub.com</p>
      </div>
    </div>
  );
};

export default FAQ;
