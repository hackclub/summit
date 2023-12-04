import FirstStep from "@/components/FirstStep";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section2 from "@/components/Section2";
import Story from "@/components/Story";
import { Akaya_Kanadaka } from "next/font/google";

const akaya = Akaya_Kanadaka({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className={akaya.className}>
      <Navbar />
      <Hero />
      <Section2 />
      <Story />
      <FirstStep />

      <h2>here are some dreams (from the repo)</h2>
      <p>//populate dream chips here</p>
      <h3>additional information</h3>
      <p>//populate Q&A here</p>
      <p>Have any other questions? Reach out to thomas@hackclub.com</p>
      <div>
        <p>dream with us in #leaders-summit on Hack Club Slack</p>
      </div>
    </main>
  );
}
