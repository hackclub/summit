import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div id="dream" className="w-full relative z-20 flex items-center bg-primary">
      <div className="sm:flex hidden items-stretch justify-stretch text-secondary h-auto mx-auto">
        <img
          src="/signup.svg"
          className="h-auto lg:block hidden max-h-[450px] border-t-[6px] border-secondary"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!firstName || !lastName || !email) return;

            window.location.href = `https://forms.hackclub.com/t/7KAzGVZ7Umus?email=${encodeURIComponent(
              email
            )}&fname=${encodeURIComponent(firstName)}&lname=${encodeURIComponent(lastName)}`;
          }}
          className="p-12 border-[6px] border-secondary h-auto max-h-[450px] my-0 mx-auto lg:mx-0"
        >
          <h1 className="text-center text-5xl mb-2">Your First Step Begins...&nbsp;now</h1>
          <p className="text-center text-xl mb-12">Be brave and join us at The Summit</p>
          <div className="flex gap-6 mb-8">
            <div className="flex-1 items-stretch justify-center">
              <p className="text-xl mb-1">First Name</p>
              <input
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-secondary rounded-md p-2 mb-4 text-primary outline-none text-xl placeholder:text-primary/80"
                placeholder="type your name here"
              />
            </div>
            <div className="h-20 w-px bg-secondary" />
            <div className="flex-1 items-stretch justify-center">
              <p className="text-xl mb-1">Last Name</p>
              <input
                required
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-secondary rounded-md p-2 mb-4 text-primary outline-none text-xl placeholder:text-primary/80"
                placeholder="type your name here"
              />
            </div>
            <div className="h-20 w-px bg-secondary" />
            <div className="flex-1">
              <p className="text-xl mb-1">Email</p>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-secondary rounded-md p-2 mb-4 text-primary outline-none text-xl placeholder:text-primary/80"
                placeholder="type your email here"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="rounded-md bg-secondary py-2 px-8 text-primary text-2xl border-[3px] border-primary"
              style={{ boxShadow: "rgba(255, 236, 150, 1) 0px 0px 0px 2px" }}
            >
              Continue to 12 more fields
            </button>
          </div>
        </form>
        <img
          src="/rsvp.svg"
          className="h-auto -mt-px lg:block hidden max-h-[450px] border-b-[6px] border-secondary"
        />
      </div>
    </div>
  );
};

export default Signup;
