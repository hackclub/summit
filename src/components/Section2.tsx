const Section2 = () => {
  return (
    <div className="bg-secondary relative pt-10">
      <h2 className="text-center text-primary text-5xl mb-14">Welcome to The Summit...</h2>
      <div className="grid sm:grid-cols-3">
        <div className="flex items-center flex-col justify-center gap-2 border-r-4 border-primary pb-20">
          <img alt="section" src="./plane.svg" />
          <h2 className="text-center text-primary text-5xl">50 Inventors</h2>
          <h3 className="text-center text-primary text-2xl">a gathering of dreamers</h3>
        </div>
        <div className="flex items-center flex-col justify-center gap-2 pb-20">
          <img alt="section" src="./dinos.svg" />
          <h2 className="text-center text-primary text-5xl">Feb 16th-18th</h2>
          <h3 className="text-center text-primary text-2xl">a weekend of dreams</h3>
        </div>
        <div className="flex items-center flex-col justify-center gap-2 border-l-4 border-primary pb-20">
          <img alt="section" src="./california.svg" />
          <h2 className="text-center text-primary text-5xl">San Francisco</h2>
          <h3 className="text-center text-primary text-2xl">a city of dreams</h3>
        </div>
      </div>
      <img alt="divider" className="-mt-5" src="./triangles.svg" />
    </div>
  );
};

export default Section2;
