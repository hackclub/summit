const Signup = () => {
  return (
    <div
      id="dream"
      className="flex items-stretch justify-stretch bg-primary text-secondary pl-14 h-auto py-2"
    >
      <img src="/signup.svg" className="h-auto lg:block hidden max-h-[450px]" />
      <div className="p-12 border-[6px] border-secondary h-full my-0 mx-auto">
        <h1 className="text-center text-5xl mb-2">Your First Step Begins...&nbsp;now</h1>
        <p className="text-center text-xl mb-12">Be brave and join us at The Summit</p>
        <div className="flex gap-6 mb-8">
          <div className="flex-1 items-stretch justify-center">
            <p className="text-xl mb-1">Full Name</p>
            <input
              type="text"
              className="w-full bg-secondary rounded-md p-2 mb-4 text-primary outline-none text-xl placeholder:text-primary/80"
              placeholder="type your name here"
            />
          </div>
          <div className="h-20 w-px bg-secondary" />
          <div className="flex-1">
            <p className="text-xl mb-1">Email</p>
            <input
              type="email"
              className="w-full bg-secondary rounded-md p-2 mb-4 text-primary outline-none text-xl placeholder:text-primary/80"
              placeholder="type your email here"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="rounded-md bg-secondary py-2 px-8 text-primary text-2xl border-[3px] border-primary"
            style={{ boxShadow: "rgba(255, 236, 150, 1) 0px 0px 0px 2px" }}
          >
            Continue to 12 more fields
          </button>
        </div>
      </div>
      <img src="/rsvp.svg" className="h-auto -mt-0.5 lg:block hidden max-h-[450px]" />
    </div>
  );
};

export default Signup;
