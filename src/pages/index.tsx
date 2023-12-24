import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section2 from "@/components/Section2";
import Signup from "@/components/Signup";
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
      <Signup />
      <FAQ />
      <Footer />
    </main>
  );
}
