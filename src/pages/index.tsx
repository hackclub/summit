import { Akaya_Kanadaka } from "next/font/google";

const akaya = Akaya_Kanadaka({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={akaya.className + " relative"}>
      what you seek is seeking you
      {/* <div className="absolute sm:right-5 right-2 h-full w-1 bg-secondary z-10" />
      <div className="absolute sm:left-5 left-2 h-full w-1 bg-secondary z-10" /> */}
      {/* <Navbar /> */}
      {/* <Hero />
      <HeroMob />
      <Section2 />
      <Story />
      <Signup />
      <FAQ />
      <Footer /> */}
    </main>
  );
}
