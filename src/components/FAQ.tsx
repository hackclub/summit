import { AccordionComponent } from "./Accordion";

const FAQ = () => {
  return (
    <div id="dream" className="bg-primary relative pb-10 pt-5">
      <div className="flex items-center sm:justify-between justify-center gap-5 sm:pl-14 mb-6">
        <h2 className="text-center text-secondary text-4xl">Additional Information</h2>
      </div>
      <div className="sm:px-14 px-3">
        <AccordionComponent />
        <p className="py-4 px-2 text-xl text-secondary">
          Have any other questions? Reach out to <a href="mailto:summit@hackclub.com">summit@hackclub.com</a>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
