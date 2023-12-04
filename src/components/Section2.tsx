import React from "react";

type Props = {};

const Section2 = (props: Props) => {
  return (
    <div className="bg-secondary relative pt-10">
      <h2 className="text-center text-primary text-5xl mb-14">
        You're at the top of your craft...
      </h2>
      <div className="grid sm:grid-cols-3">
        <div className="flex items-center flex-col justify-center gap-2 border-r-4 border-primary pb-20">
          <img src="./plane.svg" />
          <h2 className="text-center text-primary text-5xl">50 Inventors</h2>
          <h3 className="text-center text-primary text-2xl">a gathering of dreamers</h3>
        </div>
        <div className="flex items-center flex-col justify-center gap-2 pb-20">
          <img src="./dinos.svg" />
          <h2 className="text-center text-primary text-5xl">Feb. 23rd-25th</h2>
          <h3 className="text-center text-primary text-2xl">a weekend of dreams</h3>
        </div>
        <div className="flex items-center flex-col justify-center gap-2 border-l-4 border-primary pb-20">
          <img src="./california.svg" />
          <h2 className="text-center text-primary text-5xl">San Francisco</h2>
          <h3 className="text-center text-primary text-2xl">a city of dreams</h3>
        </div>
      </div>
      <img className="-mt-5" src="./triangles.svg" />
      {/* <div className="absolute bottom-0 left-0 border-transparent border-l-primary border-t-[100px] border-l-[1400px] w-full" /> */}
    </div>
  );
};

export default Section2;
