import { UnifrakturCook } from "next/font/google";
import { useRouter } from "next/router";

const unifraktur = UnifrakturCook({ weight: "700", subsets: ["latin"] });

const Hero = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center bg-primary">
      <div className="flex flex-col items-center max-w-[725px]">
        <div className="flex items-center mt-8">
          <h1
            className={`text-[5rem] ${unifraktur.className} text-secondary px-5 border-[3px] border-secondary`}
          >
            Leaders Summit
          </h1>
          <img
            alt="Hack Club Logo"
            src="./HackClubLogo.svg"
            className="border-l-0 border-[3px] border-secondary w-[173px]"
          />
        </div>
        <div className="flex items-stretch">
          <p className="text-left flex-[2] border-t-0 border-[3px] border-secondary text-secondary p-3 text-2xl">
            A magical weekend of invention in San Francisco with the best club leaders from around
            the world
          </p>
          <button
            onClick={() => router.push("/#dream")}
            className="flex-1 bg-secondary w-fit py-8 text-primary text-2xl border-[3px] border-primary m-2"
            style={{
              boxShadow: "rgba(255, 236, 150, 1) 0px 0px 0px 2px",
            }}
          >
            Register for Summit
          </button>
        </div>
      </div>
      <img alt="SF" src="./bridge.svg" />
    </div>
  );
};

export default Hero;
