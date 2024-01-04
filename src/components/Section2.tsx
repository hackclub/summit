import Image from "next/image";

const Section2 = () => {
  return (
    <div className="bg-secondary relative pt-10">
      <div className="absolute sm:right-5 right-2 w-1 bg-primary sm:-top-20 -top-8 z-10 sm:h-[calc(100%_+_5rem)] h-[calc(100%_+_2rem)]" />
      <div className="absolute sm:left-5 left-2 w-1 bg-primary sm:-top-20 -top-6 z-10 sm:h-[calc(100%_+_3.6rem)] h-[calc(100%_+_1.5rem)]" />
      <h2 className="text-center text-primary text-5xl mb-14">
        Welcome to
        <br className="sm:hidden block" /> The Summit...
      </h2>
      <div className="grid sm:grid-cols-3">
        <div className="flex items-center flex-col justify-center gap-2 sm:border-r-4 border-primary pb-20">
          <Image alt="section" src="./plane.svg" />
          <h2 className="text-center text-primary text-5xl">50 Leaders</h2>
          <h3 className="text-center text-primary text-2xl">a gathering of dreamers</h3>
        </div>
        <div className="flex items-center flex-col justify-center gap-2 pb-20">
          <Image alt="section" src="./dinos.svg" />
          <h2 className="text-center text-primary text-5xl">Feb 9th-11th</h2>
          <h3 className="text-center text-primary text-2xl">a weekend of dreams</h3>
        </div>
        <div className="flex items-center flex-col justify-center gap-2 sm:border-l-4 border-primary pb-20">
          <Image alt="section" src="./california.svg" />
          <h2 className="text-center text-primary text-5xl">San Francisco</h2>
          <h3 className="text-center text-primary text-2xl">a city of dreams</h3>
        </div>
      </div>
      <Image alt="divider" className="-mt-5 sm:block hidden" src="./triangles.svg" />
    </div>
  );
};

export default Section2;
