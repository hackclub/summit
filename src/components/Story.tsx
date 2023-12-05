import Image from "next/image";
import React from "react";

type Props = {};

const Story = (props: Props) => {
  return (
    <div className="bg-primary relative py-10">
      <div className="flex items-center justify-end gap-5 pl-14 mb-14">
        <h2 className="text-secondary text-5xl flex-1">Here's&nbsp;Your&nbsp;Story</h2>
        <div className="w-full h-1 max-w-[70%] bg-secondary" />
      </div>
      <div className="flex items-stretch justify-center gap-5 mx-14 max-w-[90%] mb-5 flex-col md:flex-row">
        <img
          alt="slides"
          src="./slide1.svg"
          className="md:max-h-[220px] lg:max-h-[350px] 2xl:max-h-full"
        />
        <img
          alt="slides"
          src="./slide2.svg"
          className="md:max-h-[220px] lg:max-h-[350px] 2xl:max-h-full"
        />
      </div>
      <div className="flex items-center justify-center gap-5 mx-14 max-w-[90%] flex-col md:flex-row">
        <img
          alt="slides"
          src="./slide3.svg"
          className="md:max-h-[220px] lg:max-h-[350px] 2xl:max-h-full"
        />
        <img
          alt="slides"
          src="./slide4.svg"
          className="md:max-h-[220px] lg:max-h-[350px] 2xl:max-h-full"
        />
      </div>
    </div>
  );
};

export default Story;
