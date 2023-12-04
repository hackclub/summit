import React from "react";

type Props = {};

const Story = (props: Props) => {
  return (
    <div className="bg-primary relative py-10">
      <div className="flex items-center justify-between gap-5 pl-14 mb-14">
        <h2 className="text-center text-secondary text-5xl">Here's Your Story</h2>
        <div className="w-full h-1 max-w-[70%] bg-secondary" />
      </div>
      <div className="flex items-center justify-center gap-5 px-14 mb-5">
        <img src="./slide1.svg" className={`max-h-[320px]`} />
        <img src="./slide2.svg" className={`max-h-[320px]`} />
      </div>
      <div className="flex items-center justify-center gap-5 px-14">
        <img src="./slide3.svg" className={`max-h-[320px]`} />
        <img src="./slide4.svg" className={`max-h-[320px]`} />
      </div>
    </div>
  );
};

export default Story;
