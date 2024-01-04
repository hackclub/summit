import { useState } from "react";
import Image from "next/image";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div id="dream" className="w-full relative flex items-center bg-primary py-14 px-6">
      <div className="flex items-stretch justify-stretch text-secondary h-auto mx-auto w-full">
        <div className="flex-1 bg-primary h-auto border-t-[6px] border-secondary"></div>
        <Image
          src="/signup.svg"
          className="h-auto lg:block hidden max-h-[450px] border-t-[6px] border-secondary"
          alt="signup graphic"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!firstName || !lastName || !email) return;

            window.location.href = `https://forms.hackclub.com/t/7KAzGVZ7Umus?email=${encodeURIComponent(
              email
            )}&first_name=${encodeURIComponent(firstName)}&last_name=${encodeURIComponent(
              lastName
            )}`;
          }}
          className="sm:p-8 sm:border-[6px] border-secondary h-auto sm:max-h-[450px] my-0 mx-auto lg:mx-0"
        >
          <h1 className="text-center text-[46px] leading-none">
            Your First Step Begins...&nbsp;Now
          </h1>
          <p className="text-center text-xl mb-6">Be brave and join us at The Summit</p>
          <div className="flex sm:gap-6 sm:flex-row flex-col">
            <div className="flex-1 items-stretch justify-center">
              <p className="text-xl mb-1">First Name</p>
              <input
                required
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-secondary rounded-md p-2 mb-4 text-primary outline-none text-xl placeholder:text-primary/80"
                placeholder="Your first name"
              />
            </div>
            <div className="h-20 w-px bg-secondary hidden sm:block" />
            <div className="flex-1 items-stretch justify-center">
              <p className="text-xl mb-1">Last Name</p>
              <input
                required
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-secondary rounded-md p-2 mb-4 text-primary outline-none text-xl placeholder:text-primary/80"
                placeholder="Your last name"
              />
            </div>
          </div>
          <div className="mb-4">
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
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="rounded-md bg-secondary py-2 sm:px-8 px-3 text-primary text-2xl border-[3px] border-primary"
              style={{ boxShadow: "rgba(255, 236, 150, 1) 0px 0px 0px 2px" }}
            >
              Continue to 6 more fields
            </button>
          </div>
        </form>
        <Image
          src="/rsvp.svg"
          className="h-auto lg:block hidden max-h-[450px] border-b-[6px] border-secondary"
          alt="rsvp here"
        />
        <div className="flex-1 bg-primary h-auto border-b-[6px] border-secondary"></div>
      </div>
    </div>
  );
};

export default Signup;
