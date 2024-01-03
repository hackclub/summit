const Story = () => {
  return (
    <div className="bg-primary relative py-10">
      <div className="flex items-center justify-end gap-2 pl-16 mb-14">
        <h2 className="text-secondary text-4xl flex-1">Here's&nbsp;Your&nbsp;Story</h2>
        <div className="w-full h-1 max-w-[75%] bg-secondary" />
      </div>
      <div className="flex items-center flex-col">
        <div className="flex items-stretch justify-center gap-5 mx-14 sm:max-w-[90%] w-[95%] mb-5 sm:space-y-0 space-y-10 flex-col md:flex-row">
          <div className="relative">
            <img
              alt="slides"
              src="./story-1.svg"
              className="md:max-h-[220px] lg:max-h-[330px] 2xl:max-h-full"
            />
            <p className="absolute -bottom-4 -left-4 p-4 bg-secondary text-primary text-xl lg:text-3xl max-w-[90%] md:max-w-[80%] lg:max-w-[60%] text-center border-[6px] border-primary">
              You're called on a grand adventure
            </p>
          </div>
          <div className="relative">
            <img
              alt="slides"
              src="./story-2.svg"
              className="md:max-h-[220px] lg:max-h-[330px] 2xl:max-h-full"
            />
            <p className="absolute -top-10 -left-4 p-4 bg-secondary text-primary text-xl lg:text-3xl max-w-[70%] md:max-w-[50%] lg:max-w-[35%] text-center border-[6px] border-primary">
              You voyage to the Bay Area...
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 mx-14 sm:max-w-[90%] sm:space-y-0 space-y-[4rem] w-[95%] flex-col md:flex-row">
          <div className="relative">
            <img
              alt="slides"
              src="./story-3.svg"
              className="md:max-h-[220px] lg:max-h-[330px] 2xl:max-h-full"
            />
            <p className="absolute  sm:bottom-auto -bottom-[4rem] sm:-top-4 sm:-right-20 z-[2] p-4 bg-secondary text-primary text-xl lg:text-3xl max-w-[70%] md:max-w-[50%] lg:max-w-[40%] text-center border-[6px] border-primary">
              You build new powers for your Hack Club
            </p>
          </div>
          <div className="relative">
            <img
              alt="slides"
              src="./story-4.svg"
              className="md:max-h-[220px] lg:max-h-[330px] 2xl:max-h-full"
            />
            <p className="absolute -bottom-6 sm:-right-6 -right-2 p-4 bg-secondary text-primary text-xl lg:text-3xl max-w-full md:max-w-[80%] lg:max-w-[70%] text-center border-[6px] border-primary">
              You return as a superleader
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
