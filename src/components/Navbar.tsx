import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="py-2 sticky top-0 flex overflow-x-hidden bg-amber-200 text-primary text-2xl">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-2">hackers... we are like no other. we want a better world.</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">:)</span>
        <span className="mx-2">hack. try. adapt. try again.</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">[:</span>
        <span className="mx-2">we accept everyone</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">:0</span>
        <span className="mx-2">let's get together at the summit</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">xD</span>
        <span className="mx-2">together, we lead</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">{'<3'}</span>
        <span className="mx-2">great hacking brings great joy</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">;3</span>
        <span className="mx-2">woaahhhh your project is sooo cool</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">:o</span>
        <span className="mx-2">a human wrote this, i promise</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">;)</span>
      </div>

      <div className="absolute top-0 pt-2 animate-marquee2 whitespace-nowrap">
        <span className="mx-2">hackers... we are like no other. we want a better world.</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">:)</span>
        <span className="mx-2">hack. try. adapt. try again.</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">[:</span>
        <span className="mx-2">we accept everyone</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">:0</span>
        <span className="mx-2">let's get together at the summit</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">xD</span>
        <span className="mx-2">together, we lead</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">{'<3'}</span>
        <span className="mx-2">great hacking brings great joy</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">;3</span>
        <span className="mx-2">woaahhhh your project is sooo cool</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">:o</span>
        <span className="mx-2">a human wrote this, i promise</span>
        <span className="bg-red-700 rounded-full px-2.5 text-xl py-1.5 text-secondary">;)</span>
      </div>
    </div>
  );
};

export default Navbar;
