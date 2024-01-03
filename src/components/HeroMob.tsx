import { UnifrakturCook } from "next/font/google";
import { useRouter } from "next/router";

const unifraktur = UnifrakturCook({ weight: "700", subsets: ["latin"] });

const HeroMob = () => {
  const router = useRouter();
  return (
    <div className="sm:hidden flex flex-col items-center bg-primary">
      <div className="flex flex-col items-center" style={{ width: "calc(100% - 1rem)" }}>
        <div className="flex items-center mt-8">
          <h1
            className={`text-[6rem] ${unifraktur.className} text-secondary px-5 border-t-[3px] border-b-[3px] border-secondary py-10 leading-none text-center`}
          >
            Leaders Summit
          </h1>
        </div>
      </div>
      <div className="text-secondary text-[24px] mt-5 pl-5">
        A magical weekend of invention in<br></br>San Francisco with the best club leaders from
        around the world
      </div>
      <div
        className="flex items-center  border-t-[3px] border-b-[3px] border-secondary mt-5"
        style={{ width: "calc(100% - 1rem)" }}
      >
        <div>
          <img alt="Hack Club Logo" src="./HackClubLogo.svg" width={137} />
        </div>

        <div className="border-[2px] h-[15vh] border-secondary"></div>
        <button
          onClick={() => router.push("/#dream")}
          className="flex-1 bg-secondary w-[220px] py-10 text-primary text-2xl border-primary m-2"
          style={{
            boxShadow: "rgba(255, 236, 150, 1) 0px 0px 0px 2px",
          }}
        >
          Share Your Dream
        </button>
      </div>
      <div>
        <img alt="SF" src="./bridge.svg" className="h-[50vh] object-contain" />
      </div>
    </div>
  );
};

export default HeroMob;
