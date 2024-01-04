import { UnifrakturCook } from "next/font/google";
import { useRouter } from "next/router";
import Image from "next/image";

const unifraktur = UnifrakturCook({ weight: "700", subsets: ["latin"] });

const HeroMob = () => {
  const router = useRouter();
  return (
    <div className="sm:hidden flex flex-col items-center bg-primary">
      <div
        className="border-secondary border-t-[3px] flex justify-end"
        style={{ width: "calc(100%)" }}
      >
        <Image
          alt="Hack Club Logo"
          src="./HackClubLogo.svg"
          width={78}
          className="self-end ml-4 mr-3 border-l-[3px] border-secondary"
        />
      </div>
      <div className="flex flex-col items-center" style={{ width: "calc(100% - 1rem)" }}>
        <div className="flex items-center">
          <h1
            className={`text-[5rem] ${unifraktur.className} text-secondary px-5 border-t-[3px] border-b-[3px] border-secondary py-10 leading-none text-center`}
          >
            Leaders Summit
          </h1>
        </div>
      </div>
      <div className="text-secondary text-2xl mt-5 px-6">
        A weekend of invention, collaboration, and friendship in San Francisco with 50 Hack Club
        leaders from around the world.
      </div>
      <div
        className="flex items-center  border-t-[3px] border-b-[3px] border-secondary mt-5"
        style={{ width: "calc(100% - 1rem)" }}
      >
        <button
          onClick={() => router.push("/#dream")}
          className="flex-1 bg-secondary w-[220px] py-4 text-primary text-2xl border-primary m-2 mx-3"
          style={{
            boxShadow: "rgba(255, 236, 150, 1) 0px 0px 0px 2px",
          }}
        >
          Register for Summit
        </button>
      </div>
      <div>
        <Image alt="SF" src="./bridge.svg" className="mt-6 object-contain" />
      </div>
    </div>
  );
};

export default HeroMob;
