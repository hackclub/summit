import { UnifrakturCook } from "next/font/google";
import { useRouter } from "next/router";

const unifraktur = UnifrakturCook({ weight: "700", subsets: ["latin"] });

const Hero = () => {
  const router = useRouter();
  return (
    <div className="sm:flex hidden flex-col items-center bg-primary">
      <div className="flex flex-col items-center justify-stretch w-full">
        <div className="flex items-stretch mt-8" style={{ width: "calc(100% - 3rem)" }}>
          <div className="flex-1 bg-primary h-auto border-t-[3px] border-t-secondary"></div>
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
          <div className="flex-1 bg-primary w-full h-auto border-b-[3px] border-b-secondary"></div>
        </div>
        <div className="flex items-stretch max-w-[725px]" style={{ width: "calc(100% - 3rem)" }}>
          <p className="text-left flex-[2] border-t-0 border-[3px] border-secondary text-secondary p-3 text-2xl">
            A weekend of invention, collaboration, and friendship in San Francisco with 50 Hack Club
            leaders from around the world.
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
